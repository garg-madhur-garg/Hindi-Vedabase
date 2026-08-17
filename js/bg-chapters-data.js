/**
 * Srimad Bhagavad Gita - Complete 18 Chapters Directory (Hindi by Srila Prabhupada)
 * श्रीमद्भगवद्गीता यथारूप - समस्त 18 अध्यायों की प्रामाणिक सूची (700 श्लोक)
 */

const BG_CHAPTERS_DATA = [
  {
    "chapter": 1,
    "name": "कुरुक्षेत्र के युद्धस्थल में सैन्यनिरीक्षण",
    "englishName": "Observing the Armies on the Battlefield of Kurukshetra",
    "totalVerses": 46,
    "summary": "धृतराष्ट्र द्वारा युद्ध के विषय में पूछना, दोनों सेनाओं का निरीक्षण, अर्जुन का विषाद एवं धनुष त्याग।"
  },
  {
    "chapter": 2,
    "name": "गीता का सार",
    "englishName": "Contents of the Gita Summarized",
    "totalVerses": 72,
    "summary": "आत्मा की अमरता, देहांतरण, क्षत्रिय स्वधर्म, निष्काम कर्मयोग, बुद्धि योग एवं स्थितप्रज्ञ के लक्षण।"
  },
  {
    "chapter": 3,
    "name": "कर्मयोग",
    "englishName": "Karma-yoga",
    "totalVerses": 43,
    "summary": "कर्म बनाम संन्यास, यज्ञ चक्र, श्रेष्ठ पुरुषों का आचरण, काम-क्रोध का नियमन व आध्यात्मिक चेतना।"
  },
  {
    "chapter": 4,
    "name": "दिव्य ज्ञान",
    "englishName": "Transcendental Knowledge",
    "totalVerses": 42,
    "summary": "परम्परा प्रणाली, भगवान् के अवतार का रहस्य, कर्म-अकर्म-विकर्म का भेद, ज्ञान यज्ञ एवं गुरु शरणागति।"
  },
  {
    "chapter": 5,
    "name": "कर्मयोग - कृष्णभावनामृत कर्म",
    "englishName": "Karma-yoga - Action in Krishna Consciousness",
    "totalVerses": 29,
    "summary": "कर्मसंन्यास एवं कर्मयोग का समन्वय, ब्रह्म में समर्पण, समदर्शिता एवं परम शान्ति का सूत्र।"
  },
  {
    "chapter": 6,
    "name": "ध्यानयोग",
    "englishName": "Dhyana-yoga",
    "totalVerses": 47,
    "summary": "अष्टांग योग साधना, मन का निग्रह, योगी की दृष्टि, योगाभ्रष्ट की गति तथा सर्वश्रेष्ठ भक्तियोगी।"
  },
  {
    "chapter": 7,
    "name": "भगवद्ज्ञान",
    "englishName": "Knowledge of the Absolute",
    "totalVerses": 30,
    "summary": "परा व अपरा प्रकृति, चार प्रकार के सुकृती व दुष्कृती, माया का प्रभाव एवं अनन्य भक्ति।"
  },
  {
    "chapter": 8,
    "name": "भगवत्प्राप्ति",
    "englishName": "Attaining the Supreme",
    "totalVerses": 28,
    "summary": "ब्रह्म, अध्यात्म, कर्म, अंतकाल में स्मरण, शुक्ल-कृष्ण गति तथा नित्य वैकुण्ठ धाम की प्राप्ति।"
  },
  {
    "chapter": 9,
    "name": "परम गुह्य ज्ञान",
    "englishName": "The Most Confidential Knowledge",
    "totalVerses": 34,
    "summary": "राजविद्या राजगुह्य, जगत का सृजन-पालन, अनन्य चिन्तन, पत्रं पुष्पं फलं तोयं तथा सर्वगुह्य समर्पण।"
  },
  {
    "chapter": 10,
    "name": "भगवान् का ऐश्वर्य",
    "englishName": "The Opulence of the Absolute",
    "totalVerses": 42,
    "summary": "चतुःश्लोकी गीता (10.8-11), अर्जुन की स्तुति, भगवान् के मुख्य दिव्य विभूतियों का विस्तार।"
  },
  {
    "chapter": 11,
    "name": "विराट रूप",
    "englishName": "The Universal Form",
    "totalVerses": 55,
    "summary": "विराट रूप का दर्शन, कालरूप संहार, निमित्तमात्र भव सव्यसाचिन्, चतुर्भुज व सौम्य द्विभुज रूप।"
  },
  {
    "chapter": 12,
    "name": "भक्तियोग",
    "englishName": "Devotional Service",
    "totalVerses": 20,
    "summary": "साकार बनाम निराकार उपासना, भक्तियोग के क्रमिक सोपान तथा प्रिय भक्त के 35 दिव्य लक्षण।"
  },
  {
    "chapter": 13,
    "name": "प्रकृति, पुरुष तथा चेतना",
    "englishName": "Nature, the Enjoyer and Consciousness",
    "totalVerses": 35,
    "summary": "क्षेत्र एवं क्षेत्रज्ञ, 24 तत्त्व, 20 ज्ञान लक्षण, ज्ञेय ब्रह्म, प्रकृति-पुरुष संबंध व ज्ञानचक्षु।"
  },
  {
    "chapter": 14,
    "name": "प्रकृति के तीन गुण",
    "englishName": "The Three Modes of Material Nature",
    "totalVerses": 27,
    "summary": "सत्त्व, रज और तमोगुण के लक्षण, बन्धन, विभिन्न गतियाँ, गुणातीत होने के लक्षण व उपाय।"
  },
  {
    "chapter": 15,
    "name": "पुरुषोत्तम योग",
    "englishName": "The Yoga of the Supreme Person",
    "totalVerses": 20,
    "summary": "उर्ध्वमूल अश्वत्थ वृक्ष, देहांतरण, जीवात्मा का स्वरूप, क्षर-अक्षर तथा परम पुरुषोत्तम तत्त्व।"
  },
  {
    "chapter": 16,
    "name": "दैवी तथा आसुरी स्वभाव",
    "englishName": "The Divine and Demoniac Natures",
    "totalVerses": 24,
    "summary": "26 दैवी गुण, आसुरी प्रवृत्तियाँ, नरक के तीन द्वार (काम, क्रोध, लोभ) एवं शास्त्र प्रमाण।"
  },
  {
    "chapter": 17,
    "name": "श्रद्धा के विभाग",
    "englishName": "The Divisions of Faith",
    "totalVerses": 28,
    "summary": "त्रिविध श्रद्धा, भोजन, यज्ञ, तप (शरीर, वाणी, मन) एवं दान के तीन प्रकार, ॐ तत् सत् की महिमा।"
  },
  {
    "chapter": 18,
    "name": "उपसंहार - संन्यास की सिद्धि",
    "englishName": "Conclusion - The Perfection of Renunciation",
    "totalVerses": 78,
    "summary": "त्याग व संन्यास, कर्म के 5 कारण, त्रिविध ज्ञान-कर्म-कर्ता-धृति-सुख, वर्णाश्रम धर्म, सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।"
  }
];

if (typeof window !== 'undefined') {
  window.BG_CHAPTERS_DATA = BG_CHAPTERS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BG_CHAPTERS_DATA;
}
