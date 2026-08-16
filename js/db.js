/**
 * Hindi Vedabase - IndexedDB Storage Engine (db.js)
 * High-performance, zero-latency local storage for 18,000+ Sanskrit/Hindi Slokas
 */

const DB_NAME = 'HindiVedabaseDB';
const DB_VERSION = 1;
const STORE_NAME = 'slokas';
const SETTINGS_STORE = 'settings';

class VedabaseDB {
  constructor() {
    this.db = null;
    this.isReady = false;
  }

  async init() {
    if (this.db) return this.db;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Slokas Object Store
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const slokaStore = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          slokaStore.createIndex('verseKey', 'verseKey', { unique: true }); // e.g. "1.1.1"
          slokaStore.createIndex('canto', 'canto', { unique: false });
          slokaStore.createIndex('canto_chapter', ['canto', 'chapter'], { unique: false });
          slokaStore.createIndex('tags', 'tags', { multiEntry: true, unique: false });
        }

        // Settings Object Store
        if (!db.objectStoreNames.contains(SETTINGS_STORE)) {
          db.createObjectStore(SETTINGS_STORE, { keyPath: 'key' });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        this.isReady = true;
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error('IndexedDB error:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  // Get all slokas
  async getAllSlokas() {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_NAME], 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  // Get sloka count
  async getSlokaCount() {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_NAME], 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.count();
      req.onsuccess = () => resolve(req.result || 0);
      req.onerror = () => reject(req.error);
    });
  }

  // Get single sloka by verseKey (e.g. "1.1.1")
  async getSlokaByVerseKey(verseKey) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_NAME], 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const index = store.index('verseKey');
      const req = index.get(verseKey);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  // Get all slokas of a specific Canto
  async getSlokasByCanto(canto) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_NAME], 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const index = store.index('canto');
      const req = index.getAll(IDBKeyRange.only(Number(canto)));
      req.onsuccess = () => {
        const sorted = (req.result || []).sort((a, b) => {
          if (a.chapter !== b.chapter) return a.chapter - b.chapter;
          const vA = parseInt(a.verse, 10) || 0;
          const vB = parseInt(b.verse, 10) || 0;
          return vA - vB;
        });
        resolve(sorted);
      };
      req.onerror = () => reject(req.error);
    });
  }

  // Get slokas by Canto and Chapter
  async getSlokasByChapter(canto, chapter) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_NAME], 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const index = store.index('canto_chapter');
      const req = index.getAll(IDBKeyRange.only([Number(canto), Number(chapter)]));
      req.onsuccess = () => {
        const sorted = (req.result || []).sort((a, b) => {
          const vA = parseInt(a.verse, 10) || 0;
          const vB = parseInt(b.verse, 10) || 0;
          return vA - vB;
        });
        resolve(sorted);
      };
      req.onerror = () => reject(req.error);
    });
  }

  // Save or update single sloka
  async saveSloka(sloka) {
    await this.init();
    sloka.id = sloka.id || `sb-${sloka.canto}-${sloka.chapter}-${sloka.verse}`;
    sloka.canto = Number(sloka.canto);
    sloka.chapter = Number(sloka.chapter);
    sloka.verse = isNaN(Number(sloka.verse)) ? sloka.verse : Number(sloka.verse);
    sloka.verseKey = `${sloka.canto}.${sloka.chapter}.${sloka.verse}`;
    sloka.updatedAt = new Date().toISOString();

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_NAME], 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(sloka);
      req.onsuccess = () => resolve(sloka);
      req.onerror = () => reject(req.error);
    });
  }

  // Bulk save slokas in high-speed batches
  async bulkSaveSlokas(slokas, onProgress) {
    if (!slokas || slokas.length === 0) return 0;
    await this.init();
    
    const batchSize = 200;
    let savedCount = 0;

    for (let i = 0; i < slokas.length; i += batchSize) {
      const batch = slokas.slice(i, i + batchSize);
      await new Promise((resolve, reject) => {
        const tx = this.db.transaction([STORE_NAME], 'readwrite');
        const store = tx.objectStore(STORE_NAME);

        tx.oncomplete = () => {
          savedCount += batch.length;
          if (onProgress) onProgress(savedCount, slokas.length);
          resolve();
        };
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);

        batch.forEach(sloka => {
          sloka.id = sloka.id || `sb-${sloka.canto}-${sloka.chapter}-${sloka.verse}`;
          sloka.canto = Number(sloka.canto);
          sloka.chapter = Number(sloka.chapter);
          sloka.verse = isNaN(Number(sloka.verse)) ? sloka.verse : Number(sloka.verse);
          sloka.verseKey = `${sloka.canto}.${sloka.chapter}.${sloka.verse}`;
          sloka.updatedAt = new Date().toISOString();
          store.put(sloka);
        });
      });
    }

    return savedCount;
  }

  // Delete single sloka
  async deleteSloka(id) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_NAME], 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  // Bulk delete slokas by ids
  async bulkDeleteSlokas(ids) {
    if (!ids || ids.length === 0) return true;
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_NAME], 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      ids.forEach(id => store.delete(id));
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }

  // Clear all slokas
  async clearAllSlokas() {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_NAME], 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  // Settings Management
  async getSetting(key, defaultValue = null) {
    await this.init();
    return new Promise((resolve) => {
      const tx = this.db.transaction([SETTINGS_STORE], 'readonly');
      const store = tx.objectStore(SETTINGS_STORE);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result ? req.result.value : defaultValue);
      req.onerror = () => resolve(defaultValue);
    });
  }

  async setSetting(key, value) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([SETTINGS_STORE], 'readwrite');
      const store = tx.objectStore(SETTINGS_STORE);
      const req = store.put({ key, value });
      req.onsuccess = () => resolve(value);
      req.onerror = () => reject(req.error);
    });
  }
}

// Global DB instance
window.vdb = new VedabaseDB();
