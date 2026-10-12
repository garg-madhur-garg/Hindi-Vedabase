// ==========================================================================
// Comprehensive Authentic Hindi Vaishnava Songs Dataset
// Direct UTF-8 Embedded Translations & Songs Engine
// ==========================================================================
(function(global) {
  'use strict';

  const HINDI_SONGS_BY_KEY = {};

  // Custom Direct Authentic Hindi Dataset for Core Vaishnava Songs
  const CUSTOM_HINDI_SONGS = {
    "5": {
      title: "Adore Adore Ye All (श्रील प्रभुपाद जी की 1935 व्यास-पूजा स्तुति)",
      transliterations: [
        "Adore, adore ye all The happy day\nBlessed than heaven Sweeter than May.\nWhen he appeared at Puri The holy place,\nMy Lord and Master His Divine Grace.",
        "Oh! my Master The evangelic angel.\nGive us Thy light Light up Thy candle.\nStruggle for existence A human race.\nThe only hope His Divine Grace.",
        "Misled we are All going astray,\nSave us Lord Our fervent pray.\nWonder thy ways To turn our face\nAdore Thy feet Your Divine Grace.",
        "Forgotten Krsna We fallen souls,\nPaying most heavy The illusion's toll.\nDarkness around All untrace.\nThe only hope His Divine Grace.",
        "Message of service Thou hast brought,\nA healthful life As Caitanya wrought.\nUnknown to all It's full of brace.\nThat's your gift Your Divine Grace.",
        "Absolute is sentient Thou hast proved\nImpersonal calamity Thou hast moved.\nThis gives us a life Anew and fresh.\nWorship Thy feet Your Divine Grace.",
        "Had you not come Who had told\nThe message of Krsna Forceful and bold.\nThat's your right You have the mace\nSave me a fallen Your Divine Grace.",
        "The line of service As drawn by you\nIs pleasing and healthy Like morning dew.\nThe oldest of all But in new dress\nMiracle done Your Divine Grace."
      ],
      translations: [
        "उस परम पावन दिन की वंदना करो, सब मिलकर उस आनन्दमय दिवस की जय-जयकार करो, जो स्वर्ग से भी अधिक धन्य और वसंत ऋतु से भी अधिक मधुर है! जब पुरी धाम के पवित्र क्षेत्र में मेरे प्रभु एवं गुरुदेव, उनके दिव्य अनुग्रह (श्रील भक्तिसिद्धांत सरस्वती ठाकुर) प्रकट हुए।",
        "हे मेरे गुरुदेव! आप भगवद्-सन्देश के दिव्य दूत हैं। हमें अपना दिव्य प्रकाश प्रदान कीजिए और हमारे भीतर ज्ञान की ज्योति प्रज्वलित कीजिए। यह मानव जाति जीवन-संघर्ष में भटक रही है; इस संसार में एकमात्र आशा आपके चरणकमल और आपका दिव्य अनुग्रह ही है।",
        "हम सभी पथभ्रष्ट होकर कुमार्ग पर भटक रहे हैं; हे प्रभु! हमारी रक्षा कीजिए, यही हमारी विनम्र प्रार्थना है। आपकी लीलाएँ और साधन अद्भुत हैं, जो हमारे विमुख मुख को भगवान् की ओर मोड़ देते हैं। हे गुरुदेव! हम आपके चरणकमलों की वंदना करते हैं।",
        "श्रीकृष्ण को भूलकर हम पतित जीव माया का असह्य और भारी कर (दंड) चुका रहे हैं। हमारे चारों ओर अज्ञान का घना अंधकार छाया है, जहाँ कोई मार्ग नहीं सूझता। ऐसे विकट समय में एकमात्र आशा आपके चरणकमल और आपका दिव्य अनुग्रह ही है।",
        "आप भगवद्-सेवा का वह पावन सन्देश लेकर आए हैं, जो आध्यात्मिक स्वास्थ्य से परिपूर्ण जीवन प्रदान करता है, जैसा श्री चैतन्य महाप्रभु ने सिखाया था। यह गुह्य मार्ग संसार के लिए अज्ञात था और परम बल प्रदान करने वाला है—यह आपका ही अहैतुक उपहार है, हे गुरुदेव!",
        "आपने प्रमाणित किया है कि परम सत्य निर्विशेष शून्य नहीं अपितु चिन्मय और साकार हैं; आपने निर्विशेषवाद रूपी भयंकर विपत्ति को समूल नष्ट कर दिया। आपके इस उपदेश ने हमें नवजीवन और दिव्य स्फूर्ति प्रदान की है। हे गुरुदेव! हम आपके श्रीचरणों की पूजा करते हैं।",
        "यदि आप न पधारे होते, तो भला कौन इतने ओजस्वी और निर्भीक भाव से श्रीकृष्ण के दिव्य संदेश का उद्घोष करता? यह केवल आपका ही अधिकार है, आपके हाथ में सिद्धांत रूपी गदा है। मुझ पतित जीव की रक्षा कीजिए, हे मेरे गुरुदेव!",
        "आपके द्वारा स्थापित भगवद्-सेवा की धारा प्रातःकालीन ओस की बूँदों के समान अत्यंत सुखद और कल्याणकारी है। यह सनातन और पुरातन सत्य होते हुए भी नवीन परिधान में प्रस्तुत हुआ है—हे गुरुदेव! यह अद्भुत चमत्कार आपके द्वारा ही संभव हुआ है।"
      ]
    },
    "35": {
      title: "भक्ति अहैतुकी हय स्व-प्रकाशित (Vṛndāvane Bhajana - 19)",
      transliterations: [
        "भक्ति अहैतुकी हय स्व-प्रकाशित।\nनित्य-सिद्ध वस्तु किन्तु आछे आवरित॥",
        "मध्यम-अधिकारी वैष्णव कृपा त' करिया।\nअवैष्णवे करे कृपा भक्ति जागाइया॥",
        "वैष्णवेर वश हन स्वयं भगवान्।\nवैष्णवेर कृपाय मुग्ध हय भाग्यवान्॥",
        "वैष्णव जागाते पारे घुमन्त जगत्।\nतांर-इ कृपाय हय पापीरा भकत॥"
      ],
      translations: [
        "शुद्ध भक्ति अहैतुकी (निष्काम) और स्वतः प्रकाशित होने वाली है। यह आत्मा का नित्य-सिद्ध स्वभाव है, परन्तु अविद्या और माया के आवरण से ढकी हुई है।",
        "मध्यम-अधिकारी वैष्णव करुणापूर्वक अवैष्णवों पर कृपा करते हैं और उपदेश द्वारा उनके सोए हुए हृदय में भक्ति-भाव को जाग्रत करते हैं।",
        "स्वयं पूर्ण पुरुषोत्तम भगवान् अपने शुद्ध वैष्णव भक्तों के प्रेम-वश में रहते हैं। वैष्णवों की कृपा प्राप्त करके ही कोई परम भाग्यशाली जीव भगवद्-प्रेम में निमग्न होता है।",
        "वैष्णव ही इस भौतिक मोह-निद्रा में सोए हुए संपूर्ण जगत को जगाने में समर्थ हैं; केवल उनकी अहैतुकी कृपा से ही महापापी भी परम भगवद्भक्त बन जाता है।"
      ]
    },
    "118": {
      title: "कलियुगे श्री कृष्ण चैतन्य अवतार (Kali-yuge Śrī Kṛṣṇa Caitanya)",
      transliterations: [
        "कलि-युगे श्री कृष्ण चैतन्य अबतार\nखेलिबार प्रबन्धे कैल खोल करताल",
        "गडागडि यान प्रभु निज सण्कीर्तने\nघरे घरे हरि-नाम देन सर्ब-जने",
        "उच्चैः-स्वरे कान्दे प्रभु जीबेर लागिया\nचेतन करान जीबे कृष्ण-नाम दिया",
        "छल छल करे आण्खि नयनेर जले\nजगत पबित्र कैल गौर-कलेबरे",
        "झल झल मुख येन पूर्ण शशधर\nएमत त देखि ना-इ दयार सागर",
        "टलमल करे अङ्ग भाबेते बिभोल\nठमके ठमके चले बले हरिबोल",
        "डोरहि कौपीन क्षीण कटिर उपरे\nढलिया ढलिया पडे गदाधेर क्रोडे",
        "आन परसङ्ग गोरा ना शुने श्रबणे\nतान मन गान रसे मजा-इया मन",
        "थिर नाहि हय प्रभुर नयनेर जल\nदीन-हीन जनेरे धरिया देय कोल",
        "धेयांइया पूरब पिरीति परसङ्ग\nना जानि काहार भाबे ह-इया त्रि-भङ्ग",
        "प्रेम-रसे भासा-इया अखिल संसार\nफुटिल श्री-बृन्दाबन सुरधुनी धार",
        "ब्रह्मा महेश्वर यारे करे अन्वेषण\nभाबिया ना पान यांरे सहस्र-लोचन",
        "मत्त मातङ्ग गति मधुर मृदु हास\nयशोमति माता यांर भुबने प्रकाश",
        "रतिपति जिनि रूप अति मनोहर\nलीला लाबण्य यार अति अनुपम",
        "बसुदेब-सुत से-इ श्री-नन्द-नन्दन\nशचीर नन्दन एबे बले सर्ब-जन",
        "चतुर्-भुज रूप हैल अत्य्-आश्चर्य-मय\nसाबधान प्राण-नाथ गोरा रसमय",
        "हरि हरि बल भा-इ कर महा-यज्ञ\nक्षिति-तले जन्मि केह ना हैय अबिज्ञ",
        "ए चौत्रिश पदाबली ये करे कीर्तन\nदास नरोत्तम मागे ताहारे चरण"
      ],
      translations: [
        "In the Kali-yuga Śrī Kṛṣṇa Caitanya descended to this world. He enjoyed kīrtana pastimes with khola and karatāla.",
        "Chanting His own holy names, He rolled on the ground in ecstasy. Going from house to house, He gave to everyone the gift of Lord Hari\u0027s holy name.",
        "For the benefit of the jīvas, the Lord loudly wept in the ecstasy of spiritual love. Giving them the gift of Lord Kṛṣṇa\u0027s holy names, He revived the jīvas.",
        "Tears of ecstatic spiritual love flowed from His eyes. His fair spiritual form purified all the worlds.",
        "His glorious face shone like the full moon. No one had ever seen an ocean of mercy like Him.",
        "Overcome with ecstatic spiritual love, His body trembled. Dancing and dancing as He went, He chanted, “Haribol!\"",
        "A kaupīna rested on His slender waist. Staggering and staggering as He walked, He fell at Gadādhara\u0027s side.",
        "Lord Gaurāṅga\u0027s ears never listened to anything but descriptions of Lord Kṛṣṇa. His heart was plunged in the nectar of songs glorifying Lord Kṛṣṇa.",
        "He could not be peaceful. Tears of ecstatic spiritual love flowed from Lord Gaurāṅga\u0027s eyes. The Lord hugged the poor fallen souls.",
        "He meditated on the loving pastimes He previously enjoyed with His associates, pastimes He enjoyed as Lord Kṛṣṇa. Who was the person with a threefold-bending form standing before Him? He did not know.",
        "He made the whole world float in the nectar of ecstatic spiritual love. On the Gaṅgā\u0027s banks He manifested the beautiful spiritual world of Vṛndāvana.",
        "Brahmā, Śiva, and all the demigods search for Him. Thousand-eyed Indra meditates on Him but cannot find Him.",
        "He walked like a graceful intoxicated elephant. His gentle smile was sweet. In His home Mother Yaśodā was present.",
        "His charming form defeated Kāmadeva. His handsomeness and playfulness were without peer.",
        "Everyone says that Lord Kṛṣṇa, who was the son of Vasudeva and the son of Nanda, has now become Śacī\u0027s son.",
        "He manifested a wonderful six-armed form. Lord Gaura is sweet like nectar. He is the master of my life.",
        "O my brothers, please chant, \"Hari! Hari!\" Please perform a great yajña of chanting Lord Hari\u0027s holy names. Now that everyone chants the holy names, no one remains foolish and bewildered on the surface of the earth.",
        "Narottama dāsa prays at the feet of anyone who chants these 34 lines."
      ]
    },

    "121": {
      title: "कर्म-फले आसे सब नाना वेश धरि (Vṛndāvane Bhajana - 5)",
      transliterations: [
        "कर्म-फले आसे सब नाना-वेश धरि'।\nसे वेषेते मजिया भुलये श्री-हरि॥",
        "ताहाते माया-देवी देय नाना-दुःख।\nदुःखे हाबुडुबु तबु ताहे मने सुख॥",
        "चिर-रोगी दुःख-भोगी शय्याते शुइया।\n“भालो आछि आज” कहे हासिया हासिया॥",
        "हासि पाय तार “भालो थाकार” कथाय।\nमाया-बद्ध जीवेर भालो एइ-भावे हय॥"
      ],
      translations: [
        "अपने पूर्व-कर्मों के फलवश सभी जीवात्माएँ नाना प्रकार के शरीर रूपी वेश धारण करके इस संसार में आती हैं, और उस बाह्य वेश में आसक्त होकर अपने प्राणनाथ श्रीहरि को भूल जाती हैं।",
        "इसके परिणामस्वरूप माया-देवी उन्हें अनेक प्रकार के त्रिताप और कष्ट देती है। इस दुःख के सागर में गोते खाते रहने पर भी मूढ़ जीव इसे ही अपना सुख मान बैठता है।",
        "गंभीर रोग से पीड़ित कोई चिर-रोगी अपनी खाट पर पड़े-पड़े कष्ट भोगते हुए भी हँसकर कहता है—'आज मैं बिल्कुल ठीक हूँ!'",
        "उसकी इस 'ठीक रहने' की बात पर हँसी आती है। मायाबद्ध संसारी जीव की सुख-शांति और 'भलाई' का यही वास्तविक स्वरूप है।"
      ]
    },
    "132": {
      title: "श्री गोवर्धनाष्टकम् (Śrī Govardhanāṣṭakam)",
      transliterations: [
        "कृष्ण-प्रसादेन समस्त-शैल-\nसाम्राज्यम् आप्नोति च वैरिणो ऽपि\nशक्रस्य यः प्राप बलिं स साक्षाद्\nगोवर्धनो मे दिशताम् अभीष्टम्",
        "स्व-प्रेष्ठ-हस्ताम्बुज-सौकुमार्य-\nसुखानुभूतेर् अति-भूमि-वृत्तेः\nमहेन्द्र-वज्राहतिम् अप्य् अजानन्\nगोवर्धनो मे दिशताम् अभीष्टम्",
        "यत्रैव कृष्णो वृषभानु-पुत्र्या\nदानं गृहीतुं कलहं वितेने\nश्रुतेः स्पृहा यत्र महत्य् अतः श्री-\nगोवर्धनो मे दिशताम् अभीष्टम्",
        "स्नात्वा सरः स्वाशु समीर-हस्ती\nयत्रैव नीपादि-पराग-धूलिः\nआलोलयन् खेलति चारु स श्री-\nगोवर्धनो मे दिशताम् अभीष्टम्",
        "कस्तूरिकाभिः शयितं किम् अत्रेत्य्\nऊहं प्रभोः स्वस्य मुहुर् वितन्वन्\nनैसर्गिक-स्वीय-शिला-सुगन्धैर्\nगोवर्धनो मे दिशताम् अभीष्टम्",
        "वंशी-प्रतिध्वन्य्-अनुसार-वर्त्म\nदिदृक्षवो यत्र हरिं हरिण्यः\nयान्त्यो लभन्ते न हि विस्मिताः स\nगोवर्धनो मे दिशताम् अभीष्टम्",
        "यत्रैव गङ्गाम् अनु नावि राधाम्\nआरोह्य मध्ये तु निमग्न-नौकः\nकृष्णो हि राधानुगलो बभौ स\nगोवर्धनो मे दिशताम् अभीष्टम्",
        "विना-भवेत् किं हरि-दास-वर्य-\nपदाश्रयं भक्तिर् अतः श्रयामि\nयम् एव सप्रेम निजेशयोः श्री-\nगोवर्धनो मे दिशताम् अभीष्टम्",
        "एतत् पठेद् यो हरि-दास-वर्य-\nमहानुभावाष्टकम् आर्द्र-चेताः\nश्री-राधिका-माधवयोः पदाब्ज-\nदास्यं स विन्देद् अचिरेण साक्षात्"
      ],
      translations: [
        "जो कृष्ण की कृपा से समस्त पर्वतों का राजा बन गया, और जिसे अपने ही शत्रु इन्द्र से सम्मान की भेंट प्राप्त हुई, वह गोवर्धन पर्वत मेरी अभीष्ट कामना पूर्ण करे।",
        "जब वह पृथ्वी के ऊपर उठाया गया, तो अपने प्रियतम कृष्ण के कमल-हस्त की कोमलता के अनुभव से इतना आनन्दमय हो उठा कि उसे इन्द्र के वज्र के आघात का पता भी नहीं चला। वह गोवर्धन पर्वत मेरी अभीष्ट कामना पूर्ण करे।",
        "जहाँ कृष्ण ने कर वसूलने के लिए राजा वृषभानु की पुत्री से झगड़ा किया, और उस झगड़े को सुनने के लिए साक्षात वेद भी तरसते हैं, वह गोवर्धन पर्वत मेरी अभीष्ट कामना पूर्ण करे।",
        "जहाँ सुहावनी पवन रूपी हाथी पास के सरोवर में नहाकर, कदम्ब आदि फूलों के पराग से ढका हुआ, सुन्दर ढंग से क्रीड़ा करता है, वह गोवर्धन पर्वत मेरी अभीष्ट कामना पूर्ण करे।",
        "यहाँ कस्तूरी-मृगों की मीठी सुगन्ध और तरह-तरह की प्राकृतिक सुगन्धें भगवान को इतना शान्त और सहज कैसे कर देती हैं? वह गोवर्धन पर्वत मेरी अभीष्ट कामना पूर्ण करे।",
        "जहाँ बाँसुरी के स्वर के मार्ग पर हरि को देखने की चाह में दौड़ती हुई चकित हरिणियाँ भी उन्हें नहीं पा सकतीं, वह गोवर्धन पर्वत मेरी अभीष्ट कामना पूर्ण करे।",
        "जहाँ गंगा में नाव पर जाते हुए दिव्य युगल की नाव बीच धारा में डूबने लगी। तब राधा कृष्ण के गले से लिपट गईं, और कृष्ण बहुत सुन्दर दिखने लगे। वह गोवर्धन पर्वत मेरी अभीष्ट कामना पूर्ण करे।",
        "हरि के श्रेष्ठतम सेवक और दिव्य राजा-रानी के प्रेम से भरे इस पर्वत के चरणों की शरण के बिना शुद्ध भक्ति प्राप्त करना कैसे सम्भव है? वह गोवर्धन पर्वत मेरी अभीष्ट कामना पूर्ण करे।",
        "ये आठ श्लोक हरि के इस सबसे श्रेष्ठ सेवक की महिमा गाते हैं। जो पाठक शुद्ध प्रेम से पिघले हृदय से इनका पाठ करता है, उसे शीघ्र ही श्री राधा-माधव के चरण-कमलों की साक्षात सेवा प्राप्त हो।"
      ]
    },

    "135": {
      title: "श्रील प्रभुपाद स्तोत्रम् (Śrīla Prabhupāda Stotram)",
      transliterations: [
        "कृष्णैक-चित्त मद-मोह-विनाश-कारिन्\nमद्-दृष्टि-गोचर-प्रभो प्रभुपाद-स्वामिन्।\nदोषाभिवृत्ति-परिदूषित-मन्द-बुद्धेः\nसञ्चिन्तयामि चरणौ तव भक्ति-हेतोः॥",
        "वृन्दावने रमण-रेति-प्रसिद्ध-भूमौ\nतत्रापि कृष्ण-बलराम-सुपाद-मूले।\nज्ञानं परं परम-कृष्ण-सुधर्मित्य उक्तं\nदान्तस् तु देव प्रभुपाद नमो नमस् ते॥",
        "नमस् ते नमस् ते कृपा-पूर्ण-दृष्टे\nनमस् ते नमस् ते महानन्द-धात्रे।\nनमामो नमामः पुनर् रक्ष रक्ष\nप्रसिद्ध-प्रभो पाहि मां दक्ष दक्ष॥",
        "भक्तिसिद्धान्त-शिष्याय\nभक्तिवेदान्त-नामिने।\nप्रसन्नाय प्रशान्ताय\nतस्मै श्री-गुरवे नमः॥",
        "श्री-वङ्ग-भूमि-जन-भूषण गौर-लीला\nगौराङ्ग-भाव परिसरण-मात्र-शील।\nराधा-मुकुन्द-पद-पद्म-मनो-विलासिन्\nआनन्द-राशि प्रभुपाद नमो नमस् ते॥"
      ],
      translations: [
        "हे कृष्णैकचित्त प्रभु! हे मद और मोह का विनाश करने वाले प्रभुपाद स्वामी! आप सदा मेरे नयनों के सम्मुख रहें। यद्यपि मेरी मन्द बुद्धि अनेक दोषों और विकारों से दूषित है, फिर भी अहैतुकी भक्ति की प्राप्ति हेतु मैं आपके श्रीचरणों का अनवरत ध्यान करता हूँ।",
        "श्रीवृन्दावन धाम की परम पावन रमणरेती भूमि पर, श्री श्री कृष्ण-बलराम के पावन चरणकमलों की सन्निधि में, आप समस्त धर्मों के मूल परम पुरुष भगवान् श्रीकृष्ण के परम ज्ञान का उपदेश दे रहे हैं। हे जितेन्द्रिय देव, हे प्रभुपाद! आपको मेरा बारम्बार प्रणाम है।",
        "आपकी करुणामयी अमृत दृष्टि को बारम्बार प्रणाम! परम आनन्द प्रदान करने वाले आपको पुनः-पुनः प्रणाम! हे जगत्-प्रसिद्ध प्रभु! मेरी रक्षा कीजिए, रक्षा कीजिए; आप सब प्रकार से समर्थ हैं, मुझ दीन की रक्षा कीजिए!",
        "श्रील भक्तिसिद्धांत सरस्वती ठाकुर के प्रिय शिष्य, भक्तिवेदांत स्वामी के नाम से विख्यात, सदा प्रसन्नचित्त और परम शांत स्वरूप उन मेरे श्री गुरुदेव को मेरा सादर प्रणाम है।",
        "बंग-भूमि के आभूषण स्वरूप, महाप्रभु की गौर-लीला और गौरांग-भाव का सर्वत्र विस्तार करने वाले, श्री श्री राधा-मुकुंद के चरणकमलों में नित्य विलास करने वाले चित्त वाले, हे आनंद-राशि श्रील प्रभुपाद! आपको मेरा बारम्बार प्रणाम है।"
      ]
    },
    "140": {
      title: "माधव बहुत मिनति करि तोय (Mādhava Bahuta Minati)",
      transliterations: [
        "माधव, बहुत मिनति करि तोय\nदेइ तुलसी तिल, देह समर्पिनु,\nदया जानि ना छाडबि मोय",
        "गणैते दोष, गुणलेश ना पाओबि,\nयब् तुहुञ् करबि विचार\nतुहुञ् जगन्नाथ्, जगते कहाओसि\nजग्-बाहिर नहि मुञि छार",
        "किये मानुष पशु पखी ये जनमिये,\nअथवा कीट पतञ्गे\nकरम् विपाके, गतागति पुनः पुनः\nमति रहु तुया परसञ्गे",
        "भणये विद्यापति, अतिशय कातर,\nतरैते इह भव-सिन्धु\nतुया पद-पल्लव, करि अवलम्बन्,\nतिल एक देह दीन-बन्धु"
      ],
      translations: [
        "O Madhava, with this offering of a tulasi leaf and sesame seeds I beseech You and pledge my body in Your service. I know Your compassion is such that You will not reject me.",
        "While considering this appeal, You will only be able to count my faults. You will not find even a trace of good qualities in me. You are known throughout the creation as Jagannatha (master of the universe). Therefore do I, a worthless soul living within this universe, not have the right to accept You as my master?",
        "Birth after birth, as a result of my karma, I repeatedly come and go, sometimes as a human, sometimes as an animal and sometimes as a bird, worm or insect. But in whatever birth I take may my mind always remain fixed on Your narrations.",
        "With great remorse, the poet Vidyapati humbly prays, “O Madhava, O friend of the fallen, please give this insignificant person shelter at the tender leaf of Your lotus feet. In this way, I may cross over this ocean of material existence.”"
      ]
    },

    "142": {
      title: "महा-वदान्य ईश्वर श्री-गौरसुन्दर (Vṛndāvane Bhajana - 22)",
      transliterations: [
        "महा-वदान्य ईश्वर—श्री-गौरसुन्दर।\nतांहार अमृत-वाणी मधुर मुखर॥",
        "भारत भूमिते जन्म हैल यांहार।\nतांहार वाणीते कर परोपकार॥",
        "निर्जने आस्वादन से त' प्रभुर लीला।\nलीला अनुकरण नहे वैष्णवेर खेला॥",
        "सेवा-कार्य वैष्णवेर नहे आस्वादन।\nजड़-देहे आस्वादन नहे सम्भावन॥"
      ],
      translations: [
        "परम परमेश्वर श्री गौरसुन्दर महा-वदान्य (सर्वोच्च दयालु) हैं। उनकी अमृतमयी दिव्य वाणी अत्यंत मधुर, गंभीर और गूंजने वाली है।",
        "महाप्रभु का आदेश है कि जिसने भी पवित्र भारत-भूमि पर जन्म लिया है, वह अपने जीवन को सार्थक बनाकर समस्त संसार का परोपकार करे।",
        "एकांत में दिव्य रस का आस्वादन करना तो स्वयं महाप्रभु की निजी लीला थी; परन्तु प्रभु की उस अंतरंग लीला का कृत्रिम अनुकरण करना वैष्णवों का स्वभाव नहीं है।",
        "वैष्णव का मुख्य धर्म भगवद्-सेवा है, न कि स्वयं रस-आस्वादन की लालसा करना। इस प्राकृत जड़ देह में रहकर उच्च दिव्य रस का कृत्रिम आस्वादन सर्वथा असंभव है।"
      ]
    },
    "147": {
      title: "मन रे कह न गौर-कथा (Mana Re Kaha Na Gaura-Kathā)",
      transliterations: [
        "मन रे! कह ना गौर कथा\nगौरेर नाम, अमियार धाम, पिरीति मूरति दाता",
        "शयने गौर, स्वपने गौर, गौर नयनेर तारा\nजीवने गौर, मरणे गौर, गौर गलार हारा",
        "हियार माझारे, गौराङ्ग राखिया, विरले बसिया रब\nमनेर साधेते, से रूप-चादेरे, नयने नयने थोब",
        "गौर विहने, न वञ्छि पराणे, गौर क\u0027रेछि सार\nगौर बलिय, जौक जीवने, किछु ना चाहिब आर",
        "गौर गमन, गौर गठन, गौर मुखेर हासि\nगौर-पिरीति, गौर मूरति, हीयाय रहल पशि",
        "गौर धरम, गौर करम, गौर वेदेर सार\nगौर चरणे, पराण सम्पिनु, गौर करिबेन पार",
        "गौर शबद, गौर सम्पद, जाहार हियाय जागे\nनरहरि दास, ताहार चरणे, सतत शरण मागे"
      ],
      translations: [
        "O mind! Speak only about Gaura. Gaura’s name is the abode of nectar, and the worshipable bestower of unnatojjvala-prema.",
        "In sleeping – Gaura, in dreaming – Gaura. Gaura is the star of my eyes. In life – Gaura, at the time of death – Gaura. Gaura’s name is the precious necklace I wear around my neck!",
        "Keeping Gauranga inside my heart, I will sit alone and fix my mind on His enchanting moon-like form. I will gaze in His eyes and become absorbed in His beauty.",
        "Without Gaura I cannot live. Gaura is my everything. I pray to give up my life taking the name of Gaura – I ask for nothing else.",
        "Gaura’s movements, Gaura’s nature, Gaura’s smiling face, Gaura’s love, Gaura’s full form – all enter my heart.",
        "Gaura is my dharma, Gaura is the object of my karma, Gaura is the essence of the Vedas. I surrender my life at Gaura’s lotus feet. It is Gaura who will take me across (the ocean of material existence).",
        "Gaura is the essential sound vibration and wealth for that person in whose heart He manifests. Narahari dasa always prays to take shelter at the feet of such a person."
      ]
    },

    "148": {
      title: "मङ्गलाचरण (Maṅgalācaraṇa)",
      transliterations: [
        "ॐ अज्ञान-तिमिरान्धस्य ज्ञानाञ्जन-शलाकया।\nचक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः॥",
        "श्रीचैतन्य-मनोऽभीष्टं स्थापितं येन भूतले।\nस्वयं रूपः कदा मह्यं ददाति स्व-पदाम्भिकम्॥",
        "वन्देऽहं श्रीगुरोः श्रीयुतपदकमलं श्रीगुरून् वैष्णवांश्च\nश्रीरूपं साग्रजातं सहगणरघुनाथान्वितं तं सजीवम्।\nसाद्वैतं सावधूतं परिजनसहितं कृष्णचैतन्यदेवं\nश्रीराधाकृष्णपादान् सहगणललिता-श्रीविशाखान्वितांश्च॥",
        "हे कृष्ण करुणासिन्धो दीनबन्धो जगत्पते।\nगोपेश गोपिकाकान्त राधाकान्त नमोऽस्तु ते॥",
        "तप्तकाञ्चनगौराङ्गि राधे वृन्दावनेश्वरि।\nवृषभानुसुते देवि प्रणमामि हरिप्रिये॥",
        "वाञ्छाकल्पतरुभ्यश्च कृपासिन्धुभ्य एव च।\nपतितानां पावनेभ्यो वैष्णवेभ्यो नमो नमः॥",
        "श्रीकृष्णचैतन्य प्रभु नित्यानन्द।\nश्रीअद्वैत गदाधर श्रीवासादि गौरभक्तवृन्द॥",
        "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।\nहरे राम हरे राम राम राम हरे हरे॥"
      ],
      translations: [
        "मैं उन श्री गुरुदेव को सादर प्रणाम करता हूँ, जिन्होंने अज्ञान के घने अन्धकार से अंधे हुए मेरे नेत्रों को दिव्य ज्ञान रूपी शलाका (अंजन) से खोल दिया है।",
        "श्रील रूप गोस्वामी, जिन्होंने इस भूतल पर श्री चैतन्य महाप्रभु के मनोऽभीष्ट को स्थापित किया, वे कब मुझे अपने चरणकमलों के समीप आश्रय प्रदान करेंगे?",
        "मैं अपने श्री गुरुदेव के चरणकमलों, समस्त गुरुवर्ग और समस्त वैष्णवों को प्रणाम करता हूँ। मैं श्रील रूप गोस्वामी, उनके ज्येष्ठ भ्राता सनातन गोस्वामी, रघुनाथ दास, जीव गोस्वामी और उनके सहयोगियों को प्रणाम करता हूँ। मैं श्री अद्वैत आचार्य, श्री नित्यानंद प्रभु, श्री चैतन्य महाप्रभु और उनके समस्त पार्षदों को प्रणाम करता हूँ। तथा ललिता व विशाखा आदि सखियों सहित श्री श्री राधा-कृष्ण के चरणकमलों में सादर वंदना करता हूँ।",
        "हे कृष्ण! हे करुणा के सागर! हे दीनों के सखा! हे जगन्नाथ! हे गोपियों के ईश! हे गोपिका-कान्त! हे राधिका-रमण! आपको मेरा बारम्बार प्रणाम है।",
        "तपे हुए सुवर्ण के समान गौर वर्ण वाली, हे श्रीराधे! हे वृन्दावनेश्वरी! हे वृषभानु-नन्दिनी! हे हरिप्रिया! मैं आपको सादर प्रणाम करता हूँ।",
        "समस्त वैष्णव भक्तों को मेरा बारम्बार प्रणाम है, जो इच्छा-कल्पवृक्ष के समान सबकी मनोकामना पूर्ण करने वाले, करुणा के अथाह सागर और पतित आत्माओं का उद्धार करने वाले हैं।",
        "श्री कृष्ण चैतन्य, प्रभु नित्यानंद, श्री अद्वैत, गदाधर, श्रीवास आदि समस्त गौर-भक्तवृन्द को मेरा प्रणाम है।",
        "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे, हरे राम हरे राम राम राम हरे हरे।"
      ]
    },
    "180": {
      title: "नित्य-सिद्ध पार्षद सब राधा-कृष्ण स्मरे (Vṛndāvane Bhajana - 25)",
      transliterations: [
        "नित्य-सिद्ध पार्षद सब राधा-कृष्ण स्मरे।\nतांकेर स्मरण जीवेर सर्व-पाप हरे॥",
        "अनुकरण करि' यदि सेइ-भाव धरे।\nमाया-कवलित हय संसार ना तरे॥",
        "प्रचार करह सदा जीव-घरे घरे।\nसफल हैबे जीवन प्रचारेर द्वारे॥",
        "“श्री-दयित दास”-प्रभु देन एइ शिक्षा।\n“कर उच्चैः-स्वरे नाम” एइ तांर दीक्षा॥"
      ],
      translations: [
        "षड्-गोस्वामी गण श्रीराधा-कृष्ण के नित्य-सिद्ध पार्षद हैं, जो निरंतर उनके युगल-चरणों का स्मरण करते हैं। उनका स्मरण करने मात्र से बद्धजीवों के समस्त पाप नष्ट हो जाते हैं।",
        "परन्तु यदि कोई उनका कृत्रिम अनुकरण करके उस उच्च भाव का स्वांग रचे, तो वह माया द्वारा ग्रसित हो जाता है और कभी भवसागर से पार नहीं उतर पाता।",
        "संसार के घर-घर जाकर बद्धजीवों को भगवान् के नाम और सन्देश का प्रचार करो; इस निस्वार्थ प्रचार-कार्य द्वारा ही तुम्हारा जीवन वास्तव में सफल होगा।",
        "मेरे गुरुदेव श्री वार्षभानवी-दयित दास (श्रील भक्तिसिद्धांत सरस्वती ठाकुर) ने यही शिक्षा दी है—'उच्च स्वर से हरिनाम संकीर्तन करो!'—यही उनका प्रधान आदेश और दीक्षा है।"
      ]
    },
    "205": {
      title: "श्री राम रक्षा स्तोत्रम् (Śrī Rāma Rakṣā Stotram)",
      transliterations: [
        "ओं अस्य श्री रामरक्षा स्तोत्रमन्त्रस्य\nबुधकौशिक ऋषिः\nश्री सीताराम छन्द्रोदेवता\nअनुष्टुप् छन्दः\nसीता शक्तिः\nश्रीमद् हनुमान् कीलकम्\nश्रीरामछन्द्र प्रीत्यर्थे रामरक्षा स्तोत्रजपे विनियोगः",
        "ध्यानम्\nध्यायेदाजानुबाहुं धृतशर धनुषं बद्ध पद्मासनस्थं\nपीतं वासोवसानं नवकमल दḻअस्पर्थि नेत्रं प्रसन्नम्\nवामाङ्कारूढ सीतामुख कमलमिलल्लोछनं नीरदाभं\nनानालङ्कार दीप्तं दधतमुरु जटामण्डलं रामछन्द्रम्",
        "स्तोत्रम्\nछरितं रघुनाथस्य शतकोटि प्रविस्तरम्\nएकैकमक्षरं पुंसां महापातक नाशनम्",
        "ध्यात्वा नीलोत्पल श्यामं रामं राजीवलोछनम्\nजानकी लक्ष्मणोपेतं जटामुकुट मण्डितम्",
        "सासितूण धनुर्बाण पाणिं नक्तं छरान्तकम्\nस्वलीलया जगत्त्रातु माविर्भूतमजं विभुम्",
        "रामरक्षां पठेत्प्राज्ञः पापघ्नीं सर्वकामदाम्\nशिरो मे राघवः पातु फालं (भालं) दशरथात्मजः",
        "कौसल्येयो दृशौपातु विश्वामित्रप्रियः शृती\nघ्राणं पातु मखत्राता मुखं सौमित्रिवत्सलः",
        "जिह्वां विद्यानिधिः पातु कण्ठं भरतवन्दितः\nस्कन्धौ दिव्यायुधः पातु भुजौ भग्नेशकार्मुकः",
        "करौ सीतापतिः पातु हृदयं जामदग्न्यजित्\nमध्यं पातु खरध्वंसी नाभिं जाम्बवदाश्रयः",
        "सुग्रीवेशः कटिं पातु सक्थिनी हनुमत्-प्रभुः\nऊरू रघूत्तमः पातु रक्षःकुल विनाशकृत्",
        "जानुनी सेतुकृत्-पातु जङ्घे दशमुखान्तकः\nपादौ विभीषणश्रीदः पातु रामो\u0027खिलं वपुः",
        "एतां रामबलोपेतां रक्षां यः सुकृती पठेत्\nस छिरायुः सुखी पुत्री विजयी विनयी भवेत्",
        "पाताḻअ-भूतल-व्योम-छारिण-श्छद्म-छारिणः\nन द्रष्टुमपि शक्तास्ते रक्षितं रामनामभिः",
        "रामेति रामभद्रेति रामछन्द्रेति वा स्मरन्\nनरो न लिप्यते पापैर्भुक्तिं मुक्तिं छ विन्दति",
        "जगज्जैत्रैक मन्त्रेण रामनाम्नाभि रक्षितम्\nयः कण्ठे धारयेत्तस्य करस्थाः सर्वसिद्धयः",
        "वज्रपञ्जर नामेदं यो रामकवछं स्मरेत्\nअव्याहताज्ञः सर्वत्र लभते जयमङ्गḻअम्",
        "आदिष्टवान्-यथा स्वप्ने रामरक्षामिमां हरः\nतथा लिखितवान्-प्रातः प्रबुद्धौ बुधकौशिकः",
        "आरामः कल्पवृक्षाणां विरामः सकलापदाम्\nअभिराम-स्त्रिलोकानां रामः श्रीमान् स नः प्रभुः",
        "तरुणौ रूपसम्पन्नौ सुकुमारौ महाबलौ\nपुण्डरीक विशालाक्षौ छीरकृष्णाजिनाम्बरौ",
        "फलमूलाशिनौ दान्तौ तापसौ ब्रह्मछारिणौ\nपुत्रौ दशरथस्यैतौ भ्रातरौ रामलक्ष्मणौ",
        "शरण्यौ सर्वसत्त्वानां श्रेष्ठौ सर्वधनुष्मताम्\nरक्षःकुल निहन्तारौ त्रायेतां नो रघूत्तमौ",
        "आत्त सज्य धनुषा विषुस्पृशा वक्षयाशुग निषङ्ग सङ्गिनौ\nरक्षणाय मम रामलक्षणावग्रतः पथि सदैव गछ्छताम्",
        "सन्नद्धः कवछी खड्गी छापबाणधरो युवा\nगछ्छन् मनोरथान्नश्छ (मनोरथो\u0027स्माकं) रामः पातु स लक्ष्मणः",
        "रामो दाशरथि श्शूरो लक्ष्मणानुछरो बली\nकाकुत्सः पुरुषः पूर्णः कौसल्येयो रघूत्तमः",
        "वेदान्तवेद्यो यज्ञेशः पुराण पुरुषोत्तमः\nजानकीवल्लभः श्रीमानप्रमेय पराक्रमः",
        "इत्येतानि जपेन्नित्यं मद्भक्तः श्रद्धयान्वितः\nअश्वमेधाधिकं पुण्यं सम्प्राप्नोति न संशयः",
        "रामं दूर्वादḻअ श्यामं पद्माक्षं पीतवाससम्\nस्तुवन्ति नामभि-र्दिव्यैर्न ते संसारिणो नराः",
        "रामं लक्ष्मण पूर्वजं रघुवरं सीतापतिं सुन्दरम्\nकाकुत्स्थं करुणार्णवं गुणनिधिं विप्रप्रियं धार्मिकम्\nराजेन्द्रं सत्यसन्धं दशरथतनयं श्यामलं शान्तमूर्तिम्\nवन्दे लोकाभिरामं रघुकुल तिलकं राघवं रावणारिम्",
        "रामाय रामभद्राय रामछन्द्राय वेधसे\nरघुनाथाय नाथाय सीतायाः पतये नमः",
        "श्रीराम राम रघुनन्दन राम राम\nश्रीराम राम भरताग्रज राम राम\nश्रीराम राम रणकर्कश राम राम\nश्रीराम राम शरणं भव राम राम",
        "श्रीराम छन्द्र छरणौ मनसा स्मरामि\nश्रीराम छन्द्र छरणौ वछसा गृह्णामि\nश्रीराम छन्द्र छरणौ शिरसा नमामि\nश्रीराम छन्द्र छरणौ शरणं प्रपद्ये",
        "माता रामो मत्-पिता रामछन्द्रः\nस्वामी रामो मत्-सखा रामछन्द्रः\nसर्वस्वं मे रामछन्द्रो दयाḻउः\nनान्यं जाने नैव जाने न जाने",
        "दक्षिणे लक्ष्मणो यस्य वामे छ (तु) जनकात्मजा\nपुरतो मारुतिर्यस्य तं वन्दे रघुनन्दनम्",
        "लोकाभिरामं रणरङ्गधीरं\nराजीवनेत्रं रघुवंशनाथम्\nकारुण्यरूपं करुणाकरं तं\nश्रीरामछन्द्रं शरण्यं प्रपद्ये",
        "मनोजवं मारुत तुल्य वेगं\nजितेन्द्रियं बुद्धिमतां वरिष्टम्\nवातात्मजं वानरयूथ मुख्यं\nश्रीरामदूतं शरणं प्रपद्ये",
        "कूजन्तं रामरामेति मधुरं मधुराक्षरम्\nआरुह्यकविता शाखां वन्दे वाल्मीकि कोकिलम्",
        "आपदामपहर्तारं दातारं सर्वसम्पदाम्\nलोकाभिरामं श्रीरामं भूयोभूयो नमाम्यहम्",
        "भर्जनं भवबीजानामर्जनं सुखसम्पदाम्\nतर्जनं यमदूतानां राम रामेति गर्जनम्",
        "रामो राजमणिः सदा विजयते रामं रमेशं भजे\nरामेणाभिहता निशाछरछमू रामाय तस्मै नमः\nरामान्नास्ति परायणं परतरं रामस्य दासोस्म्यहं\nरामे छित्तलयः सदा भवतु मे भो राम मामुद्धर",
        "श्रीराम राम रामेति रमे रामे मनोरमे\nसहस्रनाम तत्तुल्यं राम नाम वरानने\nइति श्रीबुधकौशिकमुनि विरछितं श्रीराम रक्षास्तोत्रं सम्पूर्णम्\nश्रीसीतारामछन्द्रार्पणमस्तु"
      ],
      translations: [
        "The author of this hymn (stotra), seeking Lord Rama’s protection, is sage Budhakaushika. The deity is Shri Sita-Ramachandra. The poetic meter is eight syllables in a quarter stanza. The power (energy of mother nature) is Sita. The center is Shri Hanuman. The purpose of reciting this mantra of Ramaraksha stotram is for the devotion to Lord Shri Ramachandra.",
        "Thus begins the meditation of this mantra. One should meditate upon Lord Ramachandra who has arms reaching his knees, who is holding a bow and arrows, who is seated in a lotus pose, who is wearing yellow clothes, whose eyes compete with the petals of a newly bloomed lotus, who looks contented, whose sight is fixed on the lotus-like face of Sita, sitting on his left lap, whose color is like that of the rain cloud, who is shining in various ornaments and has hair which are reaching till his thighs.",
        "The life story of the Lord of the Raghu’s lineage — Lord Shri Rama, has a vast expanse. Each and every letter is capable of destroying even the greatest sins of the human beings",
        "Let us meditate on the blue-complexioned, blue lotus-eyed Rama, who is accompanied by Sita and Lakshmana, and is well-adorned with crown matted locks.",
        "(Let us meditate on him) Who has a sword in the receptacle, bow and arrow in his hand, who destroyed the demons, who is not born but is incarnated by his own will to protect this world.",
        "May the learned read the Ramaraksha `stotram’, which destroys all sins and grants all desires. (Begin listing details of the body to be protected) May Rama who is raghu’s descendant protect my head. May Rama who is Dasharatha’s son protect my forehead.",
        "May the lord Rama who is Kausalya’s son, protect my eyes. Rama who is favorite of Vishvamitra protect my ears. Rama who is savior of Yajna protect my nose. Rama who is affectionate to Lakshmana protect my mouth.",
        "May the Rama who is a sea of knowledge protect my tongue. May Rama who is saluted by Bharata protect my neck. May Rama who holds divine weapons protct my two shoulders. May Rama who broke Shiva’s bow protect my two upper arms.",
        "May the Rama who is the husband of Sita protect my two hands. May Rama who conquered Parashurama protect my heart. May Rama who killed the Rakshasa named Khara protect my abdomen. May Rama who gave refuge to Jambavad protect my navel.",
        "May master of Sugreeva protect my waist, may master of Hanuman protect my hips. May the best of Raghus and destroyer of the lineage of demons protect my thighs.",
        "May establisher of the bridge (Ramasetu) protect my knees, may the slayer of ten-faced (Ravana) protect my shins. May consecrator of wealth to Bibhishana protect my feet, may Sri Rama protect my my entire body.",
        "May the good man read this stotra (hymn) equable to all the power of Rama be blessed with long life, be blessed with children, be victorious and possess humility.",
        "They who travel in the hell, earth and heaven and who travel secretly (changing forms), would not be able to see (the one who reads) the protective chant of Rama by the power of this chant.",
        "(The one who) remembers Rama, Rambhadra and Ramachandra (The poet has used these names for the same Lord Rama) sins never get attached to him, he will propser and attain salvation.",
        "In all three worlds, one who wears the hymn of the name of Rama as a protection round his neck, will have all powers unto him.",
        "He who recites this hymn of the name of Rama called vajrapanjara (Diamond Shield) will be unaffected, unscathed and will enjoy victory in all his endeavours.",
        "Budhakaushika (composer of this Stotram) was commanded in his dream by Lord Shiva to compose this hymn and he did so, as soon as he awoke in the morning.",
        "Rama, who grants all desires (like a wish fulfilling tree), removes all obstacles and is the praise of all three worlds, is our Lord indeed.",
        "May the two brothers ever protect us, who are young, handsome, lotus-eyed and bark and deer-skin dressed.",
        "These two sons of Dasharatha, the brothers Rama and Lakshmana, the ones who are subsisting on roots and fruits and practicing penance and celibacy,",
        "May these two scions of Raghu protect us, the foremost among the archers, the destroyers of the demons and the refuge of all beings, (may they) protect us.",
        "Rama and Lakshmana (both), their bows pulled and ready, their hands on the arrows (packed) in ever full quivers (carried on their backs), may they always escort me in my path, for my protection.",
        "Ever prepared and armed with sword, shield and bows and arrows and followed by Lakshmana , Rama is like our cherished thoughts come to life, may he (along with Lakshmana) protect us.",
        "Rama, the descendant of Raghu and the son of Dasaratha and Kausalya, and ever, accompanied by Lakshmana, is all powerful and is the perfect man (Lord).",
        "Rama, who is known through Vedanta, who is lord of all sacrifices, is the primeval Supreme Person, who is the beloved of Sita and whose bravery is unmeasurable.",
        "(Thus lord Shiva said) My devotee who recites these names of Rama with faith, He, without any doubt, is blessed more than the performance of Aswamedha.",
        "Those who sing the praise of Rama who is, dark-complexioned like the leaf of green grass, who is lotus-eyed and dressed in yellow robes, those who sing the praise of Him through this Hymn, are no longer ordinary men trapped in the world (they are liberated).",
        "I bow to Rama who is handsome, the elder brother of Lakshmana, the husband of Sita and the best of the descendants of the Raghu race, Him who is the ocean of compassion, the stockpile of virtues, the beloved of the Brahmans and the protector of Dharma, Him who is the practitioner of the Truth, the lord emperor of kings, the son of Dasaratha, dark-complexioned and the personification of Peace and tranquillity, Him who is the enemy of Ravana, the crown jewel of the the Raghu dynasty and the cynosure (center of admiration) of all eyes.",
        "I offer my respectful obeisances unto Lord Rama who is also known as Ramabhadra and Ramachandra, He is the source of the Vedas, the Lord of Raghuvansha and the whole world, and who is the consort of Sita.",
        "O Rama, who is the delight of the Raghus, the elder brother of Bharata and the tormentor of his enemies in the war. May You become my refuge — O Rama, Rama!",
        "I remember the feet of Lord Ramchandra with my mind, I praise the feet of Sri Ramachandra by my speech, I salute the feet of Sri Ramachandra by bowing down my head, I take complete refuge in the feet of Lord Ramchandra.",
        "Rama is my mother, father, master and friend, indeed the compassionate Rama is all I have. I know of no other (like him), (I really) don’t!",
        "I offer my respectful obeisances unto Lord Rama (delight of the Raghu dynasty) who has Lakshmana on his right and Sita on the left and who has Hanuman in his front.",
        "I take refuge in that Rama who is so pleasing to the sight, the master of the stage of war, lotus-eyed, lord of the Raghu race, who is the personification of compassion.",
        "I take refuge in the lord Hanuman who is as fast as the mind, equals his father, the wind-God, in speed, is the master of the senses, the foremost amongst the learned, the leader of the Monkey forces and the great messenger of Shri Rama.",
        "I salute the great sage Valmiki who sings the glorious name of Rama as sweetly as a cuckoo sings, sitting atop a tree.",
        "I bow again and again to Rama who removes all obstacles and grants all prosperity and pleases all.",
        "The roar of the Rama nama is the destruction of the cause of rebirth, the earning of all wealth and a scare to Yama’s (Lord of Death’s) messengers.",
        "Rama, the jewel among the kings, Him I worship, by Him so many demons have been destroyed, to him is said my prayer, beyond Him there is nothing to be worshipped, His servant I am, my mind is totally absorbed in Him, O Rama, please lift me up.",
        "[Lord Śiva addressed his wife, Durgā:] ‘O Varānanā, I chant the holy name of Rāma, Rāma, Rāma and thus enjoy this beautiful sound. This holy name of Rāmacandra is equal to one thousand holy names of Lord Viṣṇu. Sri Budha Koushika’s composition of Sri Rama Raksha Stotram is complete here. This composition is devoted to the holy feet of Sri Rama and Sita."
      ]
    },

    "206": {
      title: "शचीर आङिनाय नाचे (Śacīra Āṅināya Nāce)",
      transliterations: [
        "शचीर आङ्गिनाय नाचे विश्वम्भर राय\nहासि हासि फिरि फिरि मायेरे लुकाय्",
        "वयने वसन दिया बले लुकाइनु\nशची बले विश्वम्भर आमि ना देखिनु",
        "मायेर अञ्चल धरि चञ्चल चरणे\nनाचिया नाचिया याय खञ्जन-गमने",
        "वासुदेव-घोष कहे अपरुप शोभा\nशिशु-रूप देखि हय जग-मन-लोभा"
      ],
      translations: [
        "In the courtyard of Saci Mata, the child Visvambhara Raya plays. Smiling and giggling, he goes from one place to another, hiding from His mother.",
        "Covering Himself with His cloth, He says, \u0027I\u0027m hiding!\u0027  Saci Mata says to Visvambhara, \u0027I don\u0027t see you!\u0027",
        "Holding the edge of His mother\u0027s sari, He dances about on tottering feet, in the skittish manner of a wagtail.",
        "Vasudeva Ghosa says, \u0027Such extraordinary beauty! Seeing the child-form of Nimai, the whole world becomes infatuated.\u0027"
      ]
    },

    "208": {
      title: "सम्बन्ध जानिया येबा जीवन-युद्ध करे (Vṛndāvane Bhajana - 10)",
      transliterations: [
        "“सम्बन्ध” जानिया येबा जीवन-युद्ध करे।\nसेइत' वाँचिया थाके आर सब मरे॥",
        "“सम्बन्ध” ना जानि' येबा आन पथे धाय।\nकृष्ण-प्रीति नाहि मिले वृथा जन्म याय॥",
        "कृष्ण से “सम्बन्ध” आदि भालो करे बुझ।\nसे “सम्बन्ध” राखि' तुमि माया साथे युझ॥",
        "ताहा छाड़ि' हय येबा ज्ञान-कर्म-वीर।\nमोक्ष नाहि पाय तारा हय त' अस्थिर॥"
      ],
      translations: [
        "जो व्यक्ति भगवान् श्रीकृष्ण के साथ आत्मा के नित्य संबंध (सम्बन्ध-ज्ञान) को जानकर जीवन का संग्राम लड़ता है, केवल वही वास्तविक जीवन पाता है, बाकी सब मृत्यु के मुख में जाते हैं।",
        "जो इस नित्य संबंध को जाने बिना किसी अन्य भौतिक या शुष्क मार्ग पर दौड़ता है, उसे कभी कृष्ण-प्रेम प्राप्त नहीं होता और उसका मानव जन्म सर्वथा व्यर्थ चला जाता है।",
        "श्रीकृष्ण के साथ अपने संबंध, अभिधेय और प्रयोजन को भली-भाँति समझो; और उस दिव्य संबंध की निष्ठा को हृदय में रखकर माया के विरुद्ध युद्ध करो!",
        "इस भक्ति-सम्बन्ध को त्यागकर जो लोग शुष्क ज्ञान या सकाम कर्म के शूरवीर बनते हैं, वे कभी वास्तविक मोक्ष प्राप्त नहीं कर पाते और सदा अशान्त व अस्थिर रहते हैं।"
      ]
    },
    "211": {
      title: "समुद्रेर फेना येन (Vṛndāvane Bhajana - 3)",
      transliterations: [
        "समुद्रेर फेना येन क्षणे सृष्टि-लय।\nमायार संसारे खेला सेइ-भावे हय॥",
        "केह नहे पिता-माता आत्मीय-स्वजन।\nसबाइ फेनार मत थाके अल्प-क्षण॥",
        "समुद्रेर फेना येन समुद्रे मिशाय।\nपञ्च-भूतेर देह तथा हये याय लय॥",
        "कत देह एइ-भावे धरये शरीरी।\nअनित्य शरीरे मात्र आत्मीय ताहारी॥"
      ],
      translations: [
        "समुद्र की लहरों में झाग जैसे एक क्षण में उत्पन्न होता है और दूसरे ही क्षण विलीन हो जाता है, माया के इस संसार का समस्त खेल भी ठीक उसी प्रकार क्षणभंगुर है।",
        "यहाँ कोई भी वास्तव में पिता, माता, सगा-संबंधी या स्वजन नहीं है; सब समुद्र के बुलबुलों और फेन की भाँति केवल कुछ क्षणों के लिए ही साथ रहते हैं।",
        "जिस प्रकार समुद्र का फेन पुनः उसी समुद्र के जल में मिल जाता है, उसी प्रकार पंचमहाभूतों (पृथ्वी, जल, अग्नि, वायु, आकाश) से बना यह नश्वर शरीर अंततः इन्हीं भूतों में विलीन हो जाता है।",
        "यह जीवात्मा इस प्रकार न जाने कितने शरीर धारण करता आ रहा है! अज्ञानवश वह इस अनित्य शरीर के अस्थायी संबंधों को ही अपना वास्तविक आत्मीय मान बैठता है।"
      ]
    },
    "216": {
      title: "श्री गोविन्दाष्टकम् (Śrī Govindāṣṭakam)",
      transliterations: [
        "श्री गोविन्दाष्टक\nचिद्-आनन्दाकारं श्रुति-सरस-सारं सम-रसं\nनिराधाराधारं भव-जलधि-पारं पर-गुणम्\nरमा-ग्रीवा-हारम् व्रज-वन-विहारं हर-नुतं\nसदा तं गोविन्दं परम-सुख-कन्दं भजत रे",
        "महाम्भोधि-स्थानं स्थिर-चर-निदानं दिविज-पं\nसुधा-धारा-पानं विहग-प्रतियानं यम-रतम्\nमनो-ज्ञं सु-ज्ञानम् मुनि-जन-निधानं ध्रुव-पदं\nसदा तं गोविन्दं परम-सुख-कन्दं भजत रे",
        "धिया धीरैर् ध्येयं श्रवण-पुट-पेयं यति-वरैर्\nमहा-वाक्यैर् ज्ञेयं त्रि-भुवन-विधेयं विधि-परम्\nमनो-मानामेयं सपदि हृदि नेयं नव-तनुं\nसदा तं गोविन्दं परम-सुख-कन्दं भजत रे",
        "महा-माया-जालं विमल-वन-मालं मल-हरं\nसु-भालं गोपालं निहत-शिशुपालं शशि-मुखम्\nकलातीतं कालं गति-हय-मरालं मुर-रिपुं\nसदा तं गोविन्दं परम-सुख-कन्दं भजत रे",
        "नभो-बिम्ब-स्फीटं निगम-गुण-गीतं सम-गतिं\nसुरौघे सम्प्रीतं दितिज-विपरीतं पुरि-शयम्\nगिरा पन्थातीतं स्वदित-नवनीतं नय-करं\nसदा तं गोविन्दं परम-सुख-कन्दं भजत रे",
        "परेशं पद्मेशं शिव-कमलजेशं शिव-करं\nद्विजेशं देवेशं तनु-कुटिल-केशं कलि-हरं\nखगेशं विश्वेशं निखिल-भुवनेशं जग-धरं\nसदा तं गोविन्दं परम-सुख-कन्दं भजत रे",
        "रमा-कान्तं कान्तं भव-भय-भयान्तं भव-सखं\nदुराशान्तं शान्तं निखिल-हृदि भ्रान्तं भुवन-पम्\nनिवादान्तं दान्तं दनुज-निचयान्तं सु-चरितं\nसदा तं गोविन्दं परम-सुख-कन्दं भजत रे",
        "जगज्-ज्येष्ठं श्रेष्ठं सुरपति-कनिष्ठं क्रतु-पतिम्\nबलिष्ठं भूयिष्ठं त्रिभुवन-वरिष्ठं वर-वहम्\nस्व-निष्ठं धर्मिष्ठं गुरु-गण-गरिष्ठं गुरु-वरं\nसदा तं गोविन्दं परम-सुख-कन्दं भजत रे"
      ],
      translations: [
        "His form is full of spiritual bliss. He is the sweet essence of the Vedas. He is sweet like nectar. He is supremely independent. He is the abode where everything rests. He carries the devotees to the farther shore of the ocean of birth and death. He is supremely virtuous. He is Goddess Lakṣmī\u0027s necklace. He enjoys pastimes in Vraja\u0027s forests. Śiva praises His glories. O people, please always worship Lord Govinda, the root of all bliss.",
        "He resides on the great ocean. He is the father of all moving and unmoving beings. He protects the demigods in the higher worlds. He is a flood of nectar. He rides on Garuḍa. He is pleased by devotion. He knows every heart. He knows everything. He is the sages\u0027 shelter. To Dhruva He gave an eternal abode. O people, please always worship Lord Govinda, the root of all bliss.",
        "Fixing their intelligence on Him, the sages meditate on Him. Filling the cups of their ears, the ascetics drink the nectar of His glories. He is known by the great statements of the Vedas. He created the three worlds. He is the supreme ordainer of what shall be. The material mind has no power to measure Him. In a moment He manifests His youthful form in His devotee\u0027s heart. O people, please always worship Lord Govinda, the root of all bliss.",
        "By His command Goddess Mahā-māyā weaves her net. He wears a splendid forest-flower-garland. He removes all sins. His forehead is graceful. He is a cowherd boy. He killed Sisupala. His face is like the moon. He is beyond time\u0027s touch. He is time itself. His motions are like a graceful swan. He is Mura\u0027s enemy. O people, please always worship Lord Govinda, the root of all bliss.",
        "He is glorious like a full moon shining in the sky. His glories are sung by the Vedas. He is equal to all. He is pleased with the demigods. He is not pleased by the demons. He resides in Dvārakā-purī. He is beyond the pathway of material words. He relishes fresh butter. He is everyone\u0027s guide. O people, please always worship Lord Govinda, the root of all bliss.",
        "He is the supreme controller. He is Goddess Lakṣmī\u0027s master. He is the master of Śiva and Brahmā. He brings auspiciousness. He is the brāhmaṇas\u0027 master. He is the demigods\u0027 master. His hair is fine and curly. He stops strife. He is Garuḍa\u0027s master. He is the master of the universes. He is the master of all the worlds. He maintains the universes. O people, please always worship Lord Govinda, the root of all bliss.",
        "He is Goddess Lakṣmī\u0027s beloved. He is handsome. He ends all fear of this world of birth and death. He is the only friend in this world. He puts an end to all sinful deaires. He is supremely peaceful. He resides in every heart. He protects the worlds. He ends all debate. He is self-controlled. He brings the demons to their end. His actions are glorious. O people, please always worship Lord Govinda, the root of all bliss.",
        "He is supreme in all the worlds. He is the greatest. He is Indra\u0027s younger brother Upendra. He is the master of all yajñas. He is the most powerful. He is the best. He is the most exalted in the three worlds. He is the granter opf benedictions. He is independent. He is religious. He is the best of all gurus. He is the supreme master. O people, please always worship Lord Govinda, the root of all bliss."
      ]
    },

    "218": {
      title: "शिष्य हइया करे येइ गीतार श्रवण (Vṛndāvane Bhajana - 15)",
      transliterations: [
        "शिष्य हइया करे येइ गीतार श्रवण।\nघुचिबे अज्ञान आर संसार-बन्धन॥",
        "संसार घुचिल किन्तु बाह्य न्यासी नय।\nगीतार तात्पर्ये गृही ए-रूप बुझय॥",
        "“करिष्ये वचनं तव” सेइ मन्त्र-सिद्धि।\nअतएव युद्धे तांर ह'ल यशो-वृद्धि॥",
        "वैष्णव निरीह सब माला-जप करे।\nए कोन् वैष्णव अर्जुन संसार भितरे?॥"
      ],
      translations: [
        "जो अर्जुन की भाँति विनीत शिष्य बनकर भगवद्गीता का श्रवण करता है, उसका समस्त अज्ञान और भव-बंधन सदा के लिए नष्ट हो जाता है।",
        "उसका संसार-बंधन तो कट गया, फिर भी वह बाह्य रूप से संन्यासी नहीं बना। गृहस्थ भक्त भगवद्गीता के वास्तविक तात्पर्य को इसी रूप में समझते हैं।",
        "'हे कृष्ण! मैं आपके वचनों का पालन करूँगा'—यह शरणागति ही समस्त मंत्रों की परम सिद्धि है। इसी शरणागति के कारण धर्मयुद्ध में अर्जुन के दिव्य यश की अपार वृद्धि हुई।",
        "लोग सोचते हैं कि वैष्णव तो केवल निरीह होकर माला जपते हैं; परन्तु अर्जुन संसार के बीच रहकर युद्ध करने वाले कैसे अद्भुत वैष्णव हैं! (अर्थात् प्रभु की सेवा में सक्रिय कर्म ही वास्तविक वैष्णवता है)।"
      ]
    },
    "265": {
      title: "वृन्दावने धामे आमि बसियाछि एक (Vṛndāvane Bhajana - 1)",
      transliterations: [
        "वृन्दावने धामे आमि बसे आछि एका।\nए भावना मध्ये मध्ये देय मोरे देखा॥",
        "आछे मोर स्त्री-पुत्र कन्या-नाति सब।\nकिन्तु अर्थ नाइ बलि' विफल वैभव॥",
        "प्रकृतिर नग्न-रूप देखाले श्रीकृष्ण।\nतव कृपा-बले आज हयेछि वितृष्ण॥",
        "“यस्याहमनुगृह्णामि हरिष्ये तद्धनं शनैः”।\nकृपा-मयेर एइ कृपा बुझिलाम कै?॥"
      ],
      translations: [
        "मैं श्रीवृन्दावन धाम के दिव्य क्षेत्र में अकेला बैठा हुआ हूँ। इस एकांत चिंतन में अनेक आध्यात्मिक अनुभूतियाँ मेरे हृदय में उदित हो रही हैं।",
        "मेरे पत्नी, पुत्र, कन्याएँ और नाती-पोते सभी हैं, परन्तु मेरे पास भौतिक धन नहीं है—केवल इसी कारण वे मुझे सर्वथा असफल और व्यर्थ वैभव वाला समझते हैं।",
        "हे श्रीकृष्ण! आपने मुझे इस भौतिक प्रकृति का नग्न (वास्तविक) रूप दिखा दिया है। आज आपकी अहैतुकी कृपा के बल से ही मैं इस संसार के प्रति सर्वथा विरक्त एवं वितृष्ण हो गया हूँ।",
        "श्रीमद्भागवत में आपका कथन है—'जिस पर मैं विशेष अनुग्रह करता हूँ, उसका समस्त भौतिक धन धीरे-धीरे हर लेता हूँ।' परम कृपालु भगवान् की इस अगाध कृपा को मैं कब और कैसे समझ पाऊँगा?"
      ]
    },

    "1": {
      title: "अवनीके माझे देखा दोना भाइ",
      transliterations: [
        "अवनीके माझे देखा दोना भाइ।\nहरि-नामे जगत् भासाय॥",
        "गौराङ्ग नित्यानन्द दोहे रूपे गुणधाम।\nमुखे बोल हरि बोल, जपो हरिनाम॥"
      ],
      translations: [
        "इस पृथ्वी पर दोनों भाइयों (श्री गौर-निताई) को तो देखो! वे सम्पूर्ण जगत को हरिनाम के महा-प्लावन में डुबो रहे हैं।",
        "श्री गौरांग और श्री नित्यानन्द दोनों रूप और गुणों के परम धाम हैं। मुख से 'हरि बोल' कहो और हरिनाम का जप करो!"
      ]
    },
    "3": {
      title: "अच्युताष्टकम्",
      transliterations: [
        "अच्युतं केशवं रामनारायणं\nकृष्णदामोदरं वासुदेवं हरिम्।\nश्रीधरं माधवं गोपिकावल्लभं\nजानकीनायकं रामचंद्रं भजे॥",
        "अच्युतं केशवं सत्यभामाधवं\nमाधवं श्रीधरं राधिकाराधितम्।\nइन्दिरामन्दिरं चेतसा सुन्दरं\nदेवकीनन्दनं नन्दजं सन्दधे॥",
        "विष्णवे जिष्णवे शङ्खिने चक्रिणे\nरुक्मिणीरागिणे जानकीजानये।\nवल्लवीवल्लभायार्चितायात्मने\nकंसविध्वंसिने वंशिने ते नमः॥",
        "कृष्ण गोविन्द हे राम नारायण\nश्रीपते वासुदेवाजित श्रीनिधे।\nअच्युतानन्त हे माधवाधोक्षज\nद्वारकानायक द्रौपदीरक्षक॥",
        "राक्षसक्षोभितः सीतया शोभितो\nदण्डकारण्यभूपुण्यताकारणम्।\nलक्ष्मणेनान्वितो वानरैः सेवितो\nऽगस्त्यसम्पूजितो राघवः पातु माम्॥",
        "धेनुकारिष्टकोऽनिष्टकृद्द्वेषिणां\nकेशिहा कंसहृद्वंशिकावादकः।\nपूतनाकोपकः सूरजाखेलनो\nबालगोपालकः पातु मां सर्वदा॥",
        "विद्युदुद्योतवत्प्रस्फुरद्वाससं\nप्रावृडम्भोदवत्प्रोल्लसद्विग्रहम्।\nवन्यया मालया शोभितोरःस्थलं\nलोहिताङ्घ्रिद्वयं वारिजाक्षं भजे॥",
        "कुञ्चितैः कुन्तलैर्भ्राजमानाननं\nरत्नमौलिं लसत्कुण्डलं गण्डयोः।\nहारकेयूरकं कङ्कणप्रोज्ज्वलं\nकिङ्किणीमञ्जुलं श्यामलं तं भजे॥",
        "अच्युताष्टकं यः पठेदिष्टदं\nप्रेमतः प्रत्यहं पूरुषः सस्पृहम्।\nवृत्ततः सुन्दरं कर्तृविश्वम्भरं\nतस्य वश्यो हरिर्जायते सत्वरम्॥"
      ],
      translations: [
        "मैं अच्युत (अच्युतस्वरूप), केशव, राम-नारायण, कृष्ण, दामोदर, वासुदेव और श्रीहरि का भजन करता हूँ। मैं श्रीधर, माधव, गोपिका-वल्लभ और जानकी-नाथ श्री रामचन्द्र जी का भजन करता हूँ।",
        "मैं सत्यभामा के पति अच्युत, केशव, माधव, श्रीधर और श्रीराधा द्वारा आराधित प्रभु का ध्यान करता हूँ। जो लक्ष्मी जी के मन्दिर (निवास), चित्त को आनन्दित करने वाले सुन्दर, देवकी-नन्दन और नन्द-नन्दन हैं, उन्हें अपने हृदय में धारण करता हूँ।",
        "सर्वव्यापी विष्णु, विजयशील जिष्णु, शंख और चक्र धारण करने वाले, रुक्मिणी के प्रियतम और जानकी के प्राणनाथ को प्रणाम है। गोपियों के प्रिय, पूजनीय परमात्मा, कंस का विध्वंस करने वाले और बंशी बजाने वाले आपको बारम्बार प्रणाम है।",
        "हे कृष्ण! हे गोविन्द! हे राम! हे नारायण! हे लक्ष्मीपति! हे वासुदेव! हे अजेय श्रीनिधि! हे अच्युत! हे अनन्त! हे माधव! हे अधोक्षज! हे द्वारका के नाथ! हे द्रौपदी-रक्षक प्रभु!",
        "जिन्होंने राक्षसों को क्षुब्ध (नष्ट) किया, जो माता सीता से सुशोभित हैं, जिन्होंने दण्डकारण्य को परम पवित्र बनाया, जो लक्ष्मण जी से युक्त हैं, वानरों द्वारा सेवित हैं और महर्षि अगस्त्य द्वारा पूजित हैं—वे श्री राघव मेरी रक्षा करें।",
        "धेनुक और अरिष्टासुर का वध करने वाले, अनिष्टकारियों और दुष्टों के संहारक, केशी व कंस का मर्दन करने वाले, वंशी-वादक, पूतना का उद्धार करने वाले और यमुना-तट पर क्रीड़ा करने वाले बालगोपाल सदा मेरी रक्षा करें।",
        "बिजली की चमक के समान देदीप्यमान पीताम्बर धारण करने वाले, वर्षाकालीन सजल मेघ के समान श्यामसुन्दर विग्रह वाले, वनमाला से सुशोभित विशाल वक्षस्थल वाले और रक्ताभ (लाल) चरणकमल वाले कमलनयन प्रभु का मैं भजन करता हूँ।",
        "घुंघराली अलकों से सुशोभित मनोहर मुखमण्डल वाले, रत्नजटित मुकुट वाले, कपोलों पर झूलते हुए मकराकृत कुण्डलों वाले, उज्ज्वल हार, बाजूबंद, कंगन और मधुर ध्वनि करने वाली करधनी धारण करने वाले उन श्यामसुन्दर का मैं भजन करता हूँ।",
        "जो मनुष्य इस अभीष्ट-फल देने वाले, आदि शंकराचार्य विरचित सुन्दर अच्युताष्टक का प्रेमपूर्वक प्रतिदिन पाठ करता है, सम्पूर्ण विश्व का भरण-पोषण करने वाले श्रीहरि शीघ्र ही उसके वश में हो जाते हैं।"
      ]
    },
    "4": {
      title: "श्री श्री मधुराष्टकम्",
      transliterations: [
        "अधरं मधुरं वदनं मधुरं\nनयनं मधुरं हसितं मधुरम्।\nहृदयं मधुरं गमनं मधुरं\nमधुराधिपतेरखिलं मधुरम्॥",
        "वचनं मधुरं चरितं मधुरं\nवसनं मधुरं वलितं मधुरम्।\nचलितं मधुरं भ्रमितं मधुरं\nमधुराधिपतेरखिलं मधुरम्॥",
        "वेणुर्मधुरो रेणुर्मधुरः\nपाणिर्मधुरः पादौ मधुरौ।\nनृत्यं मधुरं सख्यं मधुरं\nमधुराधिपतेरखिलं मधुरम्॥",
        "गीतं मधुरं पीतं मधुरं\nभुक्तं मधुरं सुप्तं मधुरम्।\nरूपं मधुरं तिलकं मधुरं\nमधुराधिपतेरखिलं मधुरम्॥",
        "करणं मधुरं तरणं मधुरं\nहरणं मधुरं रमणं मधुरम्।\nवमितं मधुरं शमितं मधुरं\nमधुराधिपतेरखिलं मधुरम्॥",
        "गुञ्जा मधुरा माला मधुरा\nयमुना मधुरा वीची मधुरा।\nसलिलं मधुरं कमलं मधुरं\nमधुराधिपतेरखिलं मधुरम्॥",
        "गोपी मधुरा लीला मधुरा\nयुक्तं मधुरं मुक्तं मधुरम्।\nदृष्टं मधुरं शिष्टं मधुरं\nमधुराधिपतेरखिलं मधुरम्॥",
        "गोपा मधुरा गावो मधुरा\nयष्टिर्मधुरा सृष्टिर्मधुरा।\nदलितं मधुरं फलितं मधुरं\nमधुराधिपतेरखिलं मधुरम्॥"
      ],
      translations: [
        "उनके होंठ मधुर हैं, मुख मधुर है, नेत्र मधुर हैं, उनकी मुस्कान मधुर है। उनका हृदय मधुर है, उनकी चाल मधुर है—मधुराधिपति (श्रीकृष्ण) का सब कुछ मधुर है!",
        "उनके वचन मधुर हैं, चरित्र मधुर है, वस्त्र मधुर हैं, अंग-भंगिमा मधुर है। उनका चलना मधुर है, घूमना मधुर है—मधुराधिपति का सब कुछ मधुर है!",
        "उनकी वेणु (बांसुरी) मधुर है, चरण-धूलि मधुर है, हाथ मधुर हैं, दोनों चरण मधुर हैं। उनका नृत्य मधुर है, उनकी मित्रता मधुर है—मधुराधिपति का सब कुछ मधुर है!",
        "उनका गान मधुर है, पीताम्बर मधुर है, भोजन मधुर है, शयन मधुर है। उनका रूप मधुर है, तिलक मधुर है—मधुराधिपति का सब कुछ मधुर है!",
        "उनके कार्य मधुर हैं, उनका तारना (उद्धार करना) मधुर है, उनका हरण (चित्त चुराना) मधुर है, उनकी लीला मधुर है। उनका उद्गार मधुर है, उनका शांत भाव मधुर है—मधुराधिपति का सब कुछ मधुर है!",
        "उनकी गुंजा की माला मधुर है, पुष्पमाला मधुर है, यमुना नदी मधुर है, यमुना की तरंगें मधुर हैं। जल मधुर है, कमल मधुर है—मधुराधिपति का सब कुछ मधुर है!",
        "गोपियाँ मधुर हैं, लीला मधुर है, उनका संयोग मधुर है, उनका वियोग मधुर है। उनकी दृष्टि मधुर है, उनका शिष्टाचार मधुर है—मधुराधिपति का सब कुछ मधुर है!",
        "गोपगण मधुर हैं, गौएँ मधुर हैं, लकुटी (लाठी) मधुर है, उनकी सृष्टि मधुर है। उनका दलन (मर्दन) मधुर है, उनका फल मधुर है—मधुराधिपति का सब कुछ मधुर है!"
      ]
    },
    "6": {
      title: "श्री गोविन्द दामोदर स्तोत्रम्",
      transliterations: [
        "अग्रे कुरूणामथ पाण्डवानां\nदुःशासनेनाहृतवस्त्रकेशा।\nकृष्णा तदाक्रोशदनन्यनाथा\nगोविन्द दामोदर माधवेति॥",
        "श्रीकृष्ण विष्णो मधुकैटभारे\nभक्तानुकम्पिन् भगवन् मुरारे।\nत्रायस्व मां केशव लोकनाथ\nगोविन्द दामोदर माधवेति॥",
        "विक्रेतुकामा किल गोपकन्या\nमुरारिपादार्पितचित्तवृत्तिः।\nदध्यादिकं मोहवशादवोचद्\nगोविन्द दामोदर माधवेति॥",
        "उलूखले संभृततण्डुलांश्च\nसंघट्टयन्त्यो मुसलैः प्रमुग्धाः।\nगायन्ति गोप्यो जनितानुरागा\nगोविन्द दामोदर माधवेति॥",
        "काचित् कराम्भोजपुटे निषण्णं\nक्रीडाशुकं किंशुकयुक्ततुण्डम्।\nअध्यापयामास सरोरुहाक्षी\nगोविन्द दामोदर माधवेति॥",
        "गृहे गृहे गोपवधूसमूहः\nप्रतिक्षणं पिञ्जरसारिकाणाम्।\nस्खलद्गिरं वाचयितुं प्रवृत्तो\nगोविन्द दामोदर माधवेति॥",
        "पर्य्यङ्किकाभाजमलं कुमारं\nप्रस्वापयन्त्योऽखिलगोपकन्याः।\nजगुः प्रबन्धं स्वरतालसंबद्धं\nगोविन्द दामोदर माधवेति॥",
        "रामानुजं वीक्षणकेलिलोलं\nगोपी गृहीत्वा नवनीतगोलम्।\nआबालकं बालकमजूहवाद्\nगोविन्द दामोदर माधवेति॥",
        "विचित्रवर्णाभरणाभिरामे-\nऽभिधेहि वक्त्राम्बुजराजहंसे।\nसदा मदीये रसनेऽग्ररङ्गे\nगोविन्द दामोदर माधवेति॥",
        "अङ्काधिरूढं शिशुगोपगूढं\nस्तनं धयन्तं कमलाइककान्तम्।\nसंबोधयामास मुदा यशोदा\nगोविन्द दामोदर माधवेति॥",
        "क्रीडन्तमन्तर्व्रजमात्मजं स्वं\nसमं वयस्यैः पशुपालबालैः।\nप्रेम्णा यशोदा प्रजुहाव कृष्णं\nगोविन्द दामोदर माधवेति॥",
        "यशोदया गाढमुलूखलेन\nगोकण्ठपाशेन निबध्यमानम्।\nरुरोद मन्दं नवनीतभोजी\nगोविन्द दामोदर माधवेति॥",
        "निजाङ्गणे कङ्कणकेलिलोलं\nगोपी गृहीत्वा नवनीतगोलम्।\nआमर्दयत् पाणितलेन नेत्रे\nगोविन्द दामोदर माधवेति॥",
        "गृहे गृहे गोपवधूकदम्बाः\nसर्वे मिलित्वा समवाययोगे।\nपुण्यानि नामानि पठन्ति नित्यं\nगोविन्द दामोदर माधवेति॥",
        "मन्दारमूले वदनाभिरामं\nबिम्बाधरे पूरितवेणुनादम्।\nगोगोपगोपीजनमध्यसंस्थं\nगोविन्द दामोदर माधवेति॥",
        "उत्थाय गोप्योऽपररात्रभोगे\nस्मृत्वा यशोदासुतबालकेलिम्।\nगायन्ति प्रोच्चैर्दधि मन्थयन्त्यो\nगोविन्द दामोदर माधवेति॥",
        "जग्धोऽथ दत्तो नवनीतपिण्डो\nगृहे यशोदा विचिकित्सयन्ती।\nउवाच सत्यं वद हे मुरारे\nगोविन्द दामोदर माधवेति॥",
        "अभ्यर्च्य गेहं युवतिः प्रवृद्ध-\nप्रेमप्रवाहा दधि निर्ममन्थ।\nगायन्ति गोप्योऽथ सखीसमेता\nगोविन्द दामोदर माधवेति॥",
        "क्वचित् प्रभाते दधिपूर्णपात्रे\nनिक्षिप्य मन्थं युवती मुकुन्दम्।\nआलोक्य गानं विविधं करोति\nगोविन्द दामोदर माधवेति॥",
        "क्रीडापरं भोजनमज्जनार्थं\nहितैषिणी स्त्री तनुजं यशोदा।\nआजूहवत् प्रेमपरिप्लुताक्षी\nगोविन्द दामोदर माधवेति॥",
        "सुखं शयानं निलये च विष्णुं\nदेवर्षिमुख्या मुनयः प्रपन्नाः।\nतेनाच्युते तन्मयतां व्रजन्ति\nगोविन्द दामोदर माधवेति॥",
        "विहाय निद्रामरुणोदये च\nविधाय कृत्यानि च विप्रमुख्याः।\nवेदावसाने प्रपठन्ति नित्यं\nगोविन्द दामोदर माधवेति॥",
        "वृन्दावने गोपगणाश्च गोप्यो\nविलोक्य गोविन्दवियोगखिन्नम्।\nराधां जगुः साश्रुविलोचनाभ्यां\nगोविन्द दामोदर माधवेति॥",
        "प्रभातसञ्चारगता नु गावो\nतद्रक्षणार्थं तनयं यशोदा।\nप्राबोधयत् पाणितलेन मन्दं\nगोविन्द दामोदर माधवेति॥",
        "प्रवालशोभा इव दीर्घकेशा\nवाताम्बुपर्णाशनपूतदेहाः।\nमूले तरूणां मुनयः पठन्ति\nगोविन्द दामोदर माधवेति॥",
        "एवं ब्रुवाणा विरहातुरा भृशं\nव्रजस्त्रियः कृष्णविषक्तमानसाः।\nविसृज्य लज्जां रुरुदुः स्म सुस्वरं\nगोविन्द दामोदर माधवेति॥",
        "गोपी कदाचिन् मणिपिञ्जरस्थं\nशुकं वचो वाचयितुं प्रवृत्ता।\nआनन्दकन्द व्रजचन्द्र कृष्ण\nगोविन्द दामोदर माधवेति॥",
        "गोवत्सबालैः शिशुकाकपक्षमं\nबध्नन्तमम्भोजदलायताक्षम्।\nउवाच माता चिबुकं गृहीत्वा\nगोविन्द दामोदर माधवेति॥",
        "प्रभातकाले वरवल्लवौघा\nगोरक्षणार्थं धृतवेत्रदण्डाः।\nआकारयामासुरनन्तमाद्यं\nगोविन्द दामोदर माधवेति॥",
        "जलाशये कालियमर्दनाय\nयदा कदम्बादपतन् मुरारौ।\nगोपाङ्गनाश्चक्रुशुरेत्य गोपा\nगोविन्द दामोदर माधवेति॥",
        "अक्रूरमासाद्य यदा मुकुन्दश्चा-\nपोत्सवार्थं मथुरां प्रविष्टः।\nतदा स पौरैर्जयतीत्यभाषि\nगोविन्द दामोदर माधवेति॥",
        "कंसस्य दूतेन यदैव नीतौ\nवृन्दावनान्ताद् वसुदेवसूनौ।\nरुरोद गोपी भवनस्य मध्ये\nगोविन्द दामोदर माधवेति॥",
        "सरोवरे कालियनागबद्धं\nशिशुं यशोदातनयं निशम्य।\nचक्रुर्लुठन्त्यः पथि गोपबाला\nगोविन्द दामोदर माधवेति॥",
        "अक्रूरयाने यदुवंशनाथं\nसंगच्छमानं मथुरां निरीक्ष्य।\nऊचुर्वियोगात् किल गोपबाला\nगोविन्द दामोदर माधवेति॥",
        "चक्रन्द गोपी नलिनीवनान्ते\nकृष्णेन हीना कुसुमे शयाना।\nप्रफुल्लनीलोत्पललोचनाभ्यां\nगोविन्द दामोदर माधवेति॥",
        "मातापितृभ्यां परिवार्थमाणा\nगेहं प्रविष्टा विललाप गोपी।\nआगत्य मां पालय विश्वनाथ\nगोविन्द दामोदर माधवेति॥",
        "वृन्दावनस्थं हरिमाशु बुद्ध्वा\nगोपी गता कापि वनं निशायाम्।\nतत्राप्यदृष्ट्वातिभयादवोचद्\nगोविन्द दामोदर माधवेति॥",
        "सुखं शयाना निलये निजेऽपि\nनामानि विष्णोः प्रवदन्ति मर्त्याः।\nते निश्चितं तन्मयतां व्रजन्ति\nगोविन्द दामोदर माधवेति॥",
        "सा नीरजाक्षीमवलोक्य राधां\nरुरोद गोविन्दवियोगखिन्नाम्।\nसखी प्रफुल्लोत्पललोचनाभ्यां\nगोविन्द दामोदर माधवेति॥",
        "जिह्वे रसज्ञे मधुरप्रिया त्वं\nसत्यं हितं त्वां परमं वदामि।\nआवर्णयेथा मधुराक्षराणि\nगोविन्द दामोदर माधवेति॥",
        "आत्यन्तिकव्याधिहरं जनानां\nचिकित्सकं वेदविदो वदन्ति।\nसंसारतापत्रयनाशबीजं\nगोविन्द दामोदर माधवेति॥",
        "ताताज्ञया गच्छति रामचन्द्रे\nसलक्ष्मणेऽरण्यचये ससीते।\nचक्रन्द रामस्य निजा जनित्री\nगोविन्द दामोदर माधवेति॥",
        "एकाकिनी दण्डककाननान्तात्\nसा नीयमाना दशकन्धरेण।\nसीता तदाक्रोशदनन्यनाथा\nगोविन्द दामोदर माधवेति॥",
        "रामाद्वियुक्ता जनकात्मजा सा\nविचिन्तयन्ती हृदि रामरूपम्।\nरुरोद सीता रघुनाथ पाहि\nगोविन्द दामोदर माधवेति॥",
        "प्रसीद विष्णो रघुवंशनाथ\nसुरासुराणां सुखदुःखहेतो।\nरुरोद सीता तु समुद्रमध्ये\nगोविन्द दामोदर माधवेति॥",
        "अन्तर्जले ग्राहगृहीतपादो\nविसृष्टविक्लिष्टसमस्तबन्धुः।\nतदा गजेन्द्रो नितरां जगाद\nगोविन्द दामोदर माधवेति॥",
        "हंसध्वजः शङ्खयुतो ददर्श\nपुत्रं कटाहे प्रपतन्तमेनम्।\nपुण्यानि नामानि हरेर्जपन्तं\nगोविन्द दामोदर माधवेति॥",
        "दुर्वाससो वाक्यमुपेत्य कृष्णा\nसा चाब्रवीत् काननवासिनीशम्।\nअन्तःप्रविष्टं मनसाजुहाव\nगोविन्द दामोदर माधवेति॥",
        "ध्येयः सदा योगिभिरप्रमेयः\nचिन्ताहरश्चिन्तितपारिजातः।\nकस्तूरिकाकल्पितनीलवर्णो\nगोविन्द दामोदर माधवेति॥",
        "संसारकूपे पतितोऽत्यगाधे\nमोहान्धपूर्णे विषयाभितप्ते।\nकरावलम्बं मम देहि विष्णो\nगोविन्द दामोदर माधवेति॥",
        "त्वामेव याचे मम देहि जिह्वे\nसमागते दण्डधरे कृतान्ते।\nवक्तव्यमेवं मधुरं सुभक्त्या\nगोविन्द दामोदर माधवेति॥",
        "भजस्व मन्त्रं भवबन्धमुक्त्यै\nजिह्वे रसज्ञे सुलभं मनोज्ञम्।\nद्वैपायनाद्यैर्मुनिभिः प्रजप्तं\nगोविन्द दामोदर माधवेति॥",
        "गोपाल वंशीधर रूपसिन्धो\nलोकेश नारायण दीनबन्धो।\nउच्चस्वरैस्त्वं वद सर्वदैव\nगोविन्द दामोदर माधवेति॥",
        "जिह्वे सदैव भज सुन्दराणि\nनामानि कृष्णस्य मनोहराणि।\nसमस्तभक्तार्तिविनाशनानि\nगोविन्द दामोदर माधवेति॥",
        "गोविन्द गोविन्द हरे मुरारे\nगोविन्द गोविन्द मुकुन्द कृष्ण।\nगोविन्द गोविन्द रथाङ्गपाणे\nगोविन्द दामोदर माधवेति॥",
        "सुखावसाने त्विदमेव सारं\nदुःखावसाने त्विदमेव गेयम्।\nदेहावसाने त्विदमेव जाप्यं\nगोविन्द दामोदर माधवेति॥",
        "दुर्वारवाक्यं परिगृह्य कृष्णा\nमृगीव भीता तु कथं कथञ्चित्।\nसभां प्रविष्टा मनसाजुहाव\nगोविन्द दामोदर माधवेति॥",
        "श्रीकृष्ण राधावर गोकुलेश\nगोपाल गोवर्धननाथ विष्णो।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "श्रीनाथ विश्वेश्वर विश्वमूर्ते\nश्रीदेवकीनन्दन दैत्यशत्रो।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "गोपीपते कंसरिपो मुकुन्द\nलक्ष्मीपते केशव वासुदेव।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "गोपीजनाह्लादकर व्रजेश\nगोचारणारण्यकृतप्रवेश।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "प्राणेश विश्वम्भर कैटभारे\nवैकुण्ठ नारायण चक्रपाणे।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "हरे मुरारे मधुसूदनाद्य\nश्रीराम सीतावर रावणारै।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "श्रीयदवेन्द्राद्रिधराम्बुजाक्ष\nगोगोपगोपीसुखदानदक्ष।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "धराभरोत्तारणगोपवेश\nविहारलीलाकृतबन्धुशेष।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "बकीबकाघासुरधेनुकारे\nकेशीतृणावर्तविघातदक्ष।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "श्रीजानकीजीवन रामचन्द्र\nनिशाचरारे भरताग्रजेश।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "नारायणानन्त हरे नृसिंह\nप्रह्लादबाधाहर हे कृपालो।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "लीलामनुष्याकृतिरामरूप\nप्रतापदासीकृतसर्वभूप।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "श्रीकृष्ण गोविन्द हरे मुरारे\nहे नाथ नारायण वासुदेव।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥",
        "वक्तुं समर्थोऽपि न वक्ति कश्चिद्\nअहो जनानां व्यसनाभिमुख्यम्।\nजिह्वे पिबस्वामृतमेतदेव\nगोविन्द दामोदर माधवेति॥"
      ],
      translations: [
        "कौरवों और पाण्डवों की राजसभा के समक्ष जब दुःशासन ने द्रौपदी के वस्त्र और केश खींचे, तब अन्य किसी को अपना रक्षक न पाकर द्रौपदी ने विह्वल होकर पुकारा—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "हे श्रीकृष्ण! हे विष्णो! हे मधु और कैटभ दैत्यों के संहारक! हे भक्तों पर अनुकम्पा करने वाले भगवान मुरारी! हे केशव! हे लोकनाथ! मेरी रक्षा कीजिये—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "एक गोपी दूध-दही बेचने की इच्छा से निकली, किन्तु उसका चित्त मुरारी (श्रीकृष्ण) के श्रीचरणों में इतना लीन था कि वह सुध-बुध खोकर 'दही ले लो' के स्थान पर पुकारने लगी—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "ओखली में धान्य भरकर मूसल चलाती हुई मुग्ध गोपियाँ श्रीकृष्ण के प्रति उत्पन्न उत्कट प्रेम से विभोर होकर गाती हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "अपने कर-कमलों के दोने में बैठे हुए, पलाश-पुष्प के समान लाल चोंच वाले क्रीड़ा-तोते को एक कमलनयनी गोपी सिखाने लगी—'कहो गोविन्द! कहो दामोदर! कहो माधव!'",
        "घर-घर में गोप-वधुओं का समूह पिंजरे में बन्द मैनाओं को प्रतिक्षण उनकी लड़खड़ाती वाणी में रटाने में लगा रहता है—'गोविन्द! दामोदर! माधव!'",
        "झूले में लेटे हुए सुकुमार बाल-कृष्ण को सुलाती हुई समस्त गोप-कन्याएँ स्वर और ताल में निबद्ध मनोहर गीत गाती हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "चंचल दृष्टि से क्रीड़ा में मग्न बलराम के छोटे भाई श्रीकृष्ण को देखकर एक गोपी हाथ में ताजा माखन का पेड़ा लेकर उस बालक को रिझाते हुए बुलाने लगी—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "विचित्र वर्णों (अक्षरों) के आभूषणों से सुशोभित, मुख-कमल में विचरण करने वाली हे राजहंसी रूपी मेरी जिह्वा! तू रंगमंच पर सदा इन मधुर नामों का उच्चारण कर—'गोविन्द! दामोदर! माधव!'",
        "गोप-बालक के रूप में अपनी गोद में विराजमान, स्तनपान करते हुए साक्षात् लक्ष्मीपति प्रभु को माता यशोदा आनन्द में मग्न होकर सम्बोधित करती हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "व्रज के भीतर अपने हमउम्र ग्वाल-बालों के साथ क्रीड़ा करते हुए अपने लाड़ले पुत्र श्रीकृष्ण को माता यशोदा परम प्रेम से पुकारती हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "जब माता यशोदा ने माखनचोर कन्हैया को ओखली से गाय बाँधने वाली रस्सी द्वारा कसकर बाँध दिया, तब वे मन्द-मन्द रोते हुए पुकारने लगे—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "अपने आँगन में कंगन से क्रीड़ा करते हुए नटखट कन्हैया को देखकर एक गोपी हाथ में माखन का गोला लेकर आयी और उनकी आँखों को हथेली से मूँदकर विनोदपूर्वक बोली—'बूझो कौन? हे गोविन्द! हे दामोदर! हे माधव!'",
        "घर-घर में गोपियों का समूह विभिन्न अवसरों पर एकत्र होकर नित्य श्रीकृष्ण के परम पावन नामों का पाठ करता है—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "मन्दार वृक्ष के नीचे खड़े, मनोहर मुखमण्डल वाले, बिम्बा-फल जैसे लाल अधरों पर मुरली की तान छेड़े, गऊओं, ग्वालों और गोपियों के मध्य विराजमान प्रभु को पुकारो—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "ब्रह्ममुहूर्त (रात्रि के अन्तिम प्रहर) में जागकर, यशोदानन्दन की बाल-लीलाओं का स्मरण करती हुई गोपियाँ दधि मथते हुए ऊँचे स्वर में गाती हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "घर में रखा हुआ ताजा माखन का पिण्ड खाया हुआ देखकर माता यशोदा ने सन्देह होने पर पूछा: 'हे मुरारी! सच-सच बताओ—हे गोविन्द! हे दामोदर! हे माधव!'",
        "प्रातःकाल घर की पूजा-अर्चना सम्पन्न करके, श्रीकृष्ण-प्रेम के उमड़ते प्रवाह से युक्त युवती गोपी अपनी सखियों के साथ दधि मथते हुए गाती है—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "किसी प्रभात काल में दधि से भरे पात्र में मथानी डालकर एक युवती गोपी सामने मुकुन्द को देखकर विविध प्रकार से गान करने लगती है—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "खेल में मस्त बालक श्रीकृष्ण को स्नान और भोजन कराने हेतु उनका हित चाहने वाली माता यशोदा प्रेमाश्रुओं से भरे नेत्रों से पुकारती हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "अपने परम धाम में शयन करते हुए भगवान विष्णु के शरणागत देवर्षि नारद आदि प्रमुख मुनिजन नित्य इन नामों का स्मरण करते हुए अच्युत प्रभु के स्वरूप में तन्मयता को प्राप्त होते हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "अरुणोदय (प्रभात) होते ही निद्रा त्यागकर, दैनिक नित्यकर्म सम्पन्न करके श्रेष्ठ वेदज्ञ ब्राह्मण वेदों के पाठ के उपरान्त नित्य कीर्तन करते हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "वृन्दावन में गोविन्द के विरह से व्याकुल और खिन्न श्रीराधा को देखकर ग्वाल-बाल और गोपियाँ अश्रुपूर्ण नेत्रों से गाने लगे—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "प्रातःकाल गऊओं को वन में चरने जाते देख, उनकी रक्षा के लिए माता यशोदा अपनी हथेली से धीरे-धीरे सहलाते हुए अपने पुत्र को जगाती हैं—'उठो गोविन्द! दामोदर! माधव!'",
        "मूँगा (प्रवाल) की कान्ति के समान दीर्घ जटाओं वाले, वायु, जल और सूखे पत्तों का आहार कर शरीर को पवित्र करने वाले तपस्वी मुनिगण वृक्षों के नीचे बैठकर जपते हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "इस प्रकार कहती हुई, विरह से अत्यन्त व्याकुल और श्रीकृष्ण में लीन चित्त वाली व्रज-सुन्दरियाँ सारी लज्जा त्यागकर उच्च स्वर में रोने लगीं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "कोई गोपी रत्नजटित पिंजरे में स्थित शुक (तोते) को यह वचन सिखाने में लगी रहती है—'हे आनन्दकन्द! हे व्रजचन्द्र! हे कृष्ण! कहो गोविन्द! दामोदर! माधव!'",
        "बछड़ों के साथ क्रीड़ा करते हुए किसी बालक की शिखा को बछड़े की पूँछ से बाँधते हुए कमलनयन श्यामसुन्दर की ठुड्डी पकड़कर माता यशोदा ने कहा—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "प्रातःकाल गौ-चारण हेतु हाथों में बेंत की छड़ी लिए श्रेष्ठ ग्वाल-बालों के झुण्ड ने उन अनन्त आदि-पुरुष भगवान को पुकारा—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "जलाशय में कालिया नाग का दमन करने हेतु जब भगवान मुरारी कदम्ब के वृक्ष से कूद पड़े, तब गोपियों और ग्वालों ने दौड़कर विलाप किया—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "अक्रूर जी के साथ मुकुन्द जब धनुष-यज्ञ उत्सव देखने मथुरा नगरी में प्रविष्ट हुए, तब वहाँ के नगरवासियों ने जय-जयकार करते हुए पुकारा—'जय गोविन्द! जय दामोदर! जय माधव!'",
        "कंस के दूत (अक्रूर जी) द्वारा जब वसुदेवनन्दन दोनों भाइयों (कृष्ण-बलराम) को वृन्दावन से ले जाया गया, तब गोपियाँ अपने महलों में फूट-फूटकर रोईं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "सरोवर में नन्हें बालक यशोदानन्दन को कालिया नाग द्वारा जकड़ा हुआ सुनकर गोप-बालक मार्ग में लोटते-पोटते हुए चीख उठे—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "अक्रूर के रथ पर यदुवंशनाथ श्रीकृष्ण को मथुरा जाते देखकर विरह-व्यथा से व्याकुल ग्वाल-बालों ने पुकारा—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "कमल-वन के छोर पर, श्रीकृष्ण के वियोग में पुष्प-शय्या पर पड़ी हुई गोपी अपने खिले हुए नीलकमल जैसे नेत्रों से आँसू बहाती हुई विलाप करने लगी—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "माता-पिता द्वारा रोके जाने पर घर के भीतर प्रविष्ट हुई गोपी विलाप करती हुई बोली: 'हे विश्वनाथ! आकर मेरी रक्षा करो—हे गोविन्द! हे दामोदर! हे माधव!'",
        "रात्रि में श्रीकृष्ण को वृन्दावन में विचरण करता जानकर कोई गोपी वन में पहुँची, किन्तु वहाँ उन्हें न पाकर भयभीत होकर पुकारने लगी—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "अपने घर में सुखपूर्वक शयन करते हुए भी जो मनुष्य भगवान विष्णु के इन नामों का उच्चारण करते हैं, वे निश्चित रूप से प्रभु की तन्मयता (सारूप्य मुक्ति) प्राप्त कर लेते हैं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "कमलनयनी श्रीराधारानी को गोविन्द के विरह से व्याकुल देखकर उनकी सखी के भी खिले हुए कमल जैसे नेत्र अश्रुओं से भर आए और वह भी रो पड़ी—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "हे मधुर रस की रसिक मेरी जिह्वा! मैं तुझसे परम हितकारी और सत्य वचन कहता हूँ; तू केवल इन मधुर अक्षरों का ही निरन्तर वर्णन कर—'गोविन्द! दामोदर! माधव!'",
        "वेदज्ञ विद्वान कहते हैं कि यह नाम मनुष्यों के सभी आत्यन्तिक (गम्भीर) रोगों की अचूक औषधि है और संसार के त्रितापों (आधि-दैविक, आधि-भौतिक, आध्यात्मिक) का समूल नाश करने वाला बीज-मन्त्र है—'गोविन्द! दामोदर! माधव!'",
        "पिता की आज्ञा से जब लक्ष्मण और सीता सहित श्रीराम वन को प्रस्थान करने लगे, तब श्रीराम की जननी (माता कौशल्या) विलाप कर उठीं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "दण्डकारण्य वन से अकेली माता सीता का जब दशग्रीव (रावण) द्वारा हरण किया जा रहा था, तब अनन्यनाथा सीता ने आर्तनाद किया—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "श्रीराम से वियुक्त होकर हृदय में श्रीराम के रूप का ध्यान करती हुई जनकनन्दिनी सीता रो-रोकर पुकारने लगीं: 'हे रघुनाथ! रक्षा कीजिये—हे गोविन्द! हे दामोदर! हे माधव!'",
        "‘हे विष्णु! हे रघुवंशनाथ! हे सुरों और असुरों के सुख-दुःख के कारण! प्रसन्न होइये!’—समुद्र के ऊपर आकाश-मार्ग में ले जाई जाती हुई सीता जी इस प्रकार रोती रहीं—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "जल के भीतर ग्राह (मगरमच्छ) द्वारा पैर पकड़े जाने पर जब सभी सम्बन्धी असहाय होकर छोड़ गए, तब गजेन्द्र ने अविराम भाव से पुकारा—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "शंख सहित राजा हंसध्वज ने जब अपने पुत्र सुधन्वा को खौलते तेल के कड़ाह में गिरते देखा, तब वह बालक श्रीहरि के परम पावन नामों का जप कर रहा था—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "दुर्वासा मुनि के वचनों को सुनकर जब द्रौपदी संकट में पड़ी, तब उसने वनवासियों के स्वामी भगवान को अपने हृदय में बुलाते हुए आर्तभाव से पुकारा—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "जो योगियों द्वारा सदा ध्येय, अप्रमेय, चिन्ताओं को हरने वाले, मनोरथ पूर्ण करने वाले पारिजात-वृक्ष और कस्तूरी के समान मनोहर श्यामवर्ण हैं, उन प्रभु को भजो—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "मोह और अज्ञानान्धकार से भरे, विषय-वासनाओं से तप्त इस अगाध संसार-रूपी कूप में गिरे हुए मुझ अधम को हे विष्णो! अपने कर-कमलों का सहारा दीजिये—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "हे जिह्वा! मैं तुझसे यही भिक्षा माँगता हूँ कि जब दण्डधारी यमराज आ उपस्थित हों, तब तू परम भक्तिभाव से इसी मधुर नाम का उच्चारण करना—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "हे रसिक जिह्वा! संसार-बन्धन से मुक्ति हेतु तू इस सुलभ और परम मनोहर मन्त्र का भजन कर, जिसका जप वेदव्यास आदि महर्षियों ने किया है—'गोविन्द! दामोदर! माधव!'",
        "हे गोपाल! हे वंशीधर! हे रूप के सिन्धु! हे लोकेश! हे नारायण! हे दीनबन्धु! तू सदा सर्वदा उच्च स्वर में पुकार—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "हे रसज्ञ जिह्वा! श्रीकृष्ण के उन मनोहर और सुन्दर नामों का सदा भजन कर, जो भक्तों के समस्त क्लेशों और बाधाओं का नाश करने वाले हैं—'गोविन्द! दामोदर! माधव!'",
        "हे गोविन्द! हे गोविन्द! हे हरे! हे मुरारे! हे गोविन्द! हे गोविन्द! हे मुकुन्द! हे कृष्ण! हे गोविन्द! हे गोविन्द! हे रथांगपाणे (चक्रधर)! हे गोविन्द! हे दामोदर! हे माधव!",
        "सांसारिक सुखों की समाप्ति पर यही एकमात्र सार-तत्व है; दुःखों के अन्त में यही गाने योग्य है; और देह छूटने के समय यही जप करने योग्य है—'गोविन्द! दामोदर! माधव!'",
        "दुःशासन के दुर्वचनों को सुनकर भयभीत हरिणी के समान काँपती हुई द्रौपदी ने सभा में प्रविष्ट होकर अपने मन में प्रभु को पुकारा—'हे गोविन्द! हे दामोदर! हे माधव!'",
        "हे श्रीकृष्ण! हे राधावर! हे गोकुलेश! हे गोपाल! हे गोवर्धननाथ! हे विष्णो! हे जिह्वा! तू केवल इसी अमृतरस का पान कर—'गोविन्द! दामोदर! माधव!'",
        "हे श्रीनाथ! हे विश्वेश्वर! हे विश्वमूर्ते! हे श्रीदेवकीनन्दन! हे दैत्यशत्रो! हे मेरी जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "हे गोपीपते! हे कंसनाशन! हे मुकुन्द! हे लक्ष्मीपते! हे केशव! हे वासुदेव! हे जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "हे गोपियों को आनन्द प्रदान करने वाले! हे व्रजेश्वर! हे गौ-चारण हेतु वन में प्रवेश करने वाले! हे जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "हे प्राणेश्वर! हे विश्वम्भर! हे कैटभमर्दन! हे वैकुण्ठ! हे नारायण! हे चक्रपाणे! हे मेरी जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "हे हरे! हे मुरारे! हे मधुसूदन आदि-पुरुष! हे श्रीराम! हे जानकीवल्लभ! हे रावण के संहारक! हे जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "हे यदुवंश-शिरोमणि! हे गोवर्धनधारी! हे कमलनयन! हे गौ, गोप और गोपियों को सुख प्रदान करने में निपुण प्रभु! हे जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "गोप-बालक का रूप धारण कर पृथ्वी का भार हरने वाले, और अनन्त शेषनाग को अपने भ्राता के रूप में साथ लेकर क्रीड़ा-लीला करने वाले प्रभु! हे जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "पूतना (बकी), बकासुर, अघासुर और धेनुकासुर के शत्रु, तथा केशी और तृणावर्त का वध करने में परम प्रवीण प्रभु! हे जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "हे जानकी-जीवन श्रीरामचन्द्र! हे निशाचरों (राक्षसों) के काल! हे भरत के अग्रज प्रभु! हे मेरी जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "हे नारायण! हे अनन्त! हे हरे! हे नृसिंहदेव! हे प्रह्लाद के संकटों को हरने वाले कृपालु प्रभु! हे जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "लीलापूर्वक मनुष्य-रूप (श्रीराम) धारण करने वाले और अपने अद्वितीय प्रताप से समस्त राजाओं को अपना सेवक बना लेने वाले प्रभु! हे जिह्वा! तू केवल इसी अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "हे श्रीकृष्ण! हे गोविन्द! हे हरे! हे मुरारे! हे नाथ! हे नारायण! हे वासुदेव! हे मेरी रसज्ञ जिह्वा! तू केवल इसी दिव्य अमृत का पान कर—'गोविन्द! दामोदर! माधव!'",
        "सब प्रकार से बोलने में समर्थ होने पर भी कोई इन नामों का उच्चारण नहीं करता! अहो, लोग अपने विनाश की ओर कितने तत्पर हैं! हे मेरी जिह्वा! तू तो केवल इसी अमृतरस का पान कर—'गोविन्द! दामोदर! माधव!'"
      ]
    },
    "7": {
      title: "आहे नील शैल (Ahe Nīla Śaila)",
      transliterations: [
        "आहे नील शैल प्रबल मत्त वारण\nमो आरत नलिनी वनकु कर दलन",
        "गजराज चिन्ता कला थाइ घोर जलेण\nचक्र पेषि नक्र नाशि उद्धारिल आपण",
        "घोर वने मृगुणी कु पड़िथिला कषण\nकेड़े बड़ विपत्तिरु रक्षाकल तक्षण",
        "कुरु सभा तले सुणि द्रौपदी र जणाण\nकोटि वस्त्र देइ हेले लज्जा कल वारण",
        "रावण र भाइ विभीषणगला शरण\nशरण सम्भालि ताकु लङ्के कल राजन",
        "प्रह्लाद पिता से जे बड़ दुष्ट दारुण\nस्तम्भ रु बाहारि ताकु विदारिल तक्षण",
        "अजामिल दाका देला प्राणयिबा कालेण\nएड़े बड़ पापी गला वैकुण्ठ भुवन",
        "नीलाञ्चले बिजे प्रभु बौद्ध अवतारेण\nद्विबाहु प्रसारि प्रभु जाचुअछ शरण",
        "कहे सालबेगहीन जाति रे मुं जबन\nश्रीरङ्गा चरण तले पशुअछि शरण"
      ],
      translations: [
        "हे नील पर्वत! आप मतवाले हाथी के समान महाबली हैं। हे प्रभु, कृपया मेरे दुःख रूपी कमल-वन को रौंद डालिए।",
        "गहरे जल के बीच गजराज ने आपका स्मरण किया। आपके चक्र के प्रहार ने मगरमच्छ का अंत कर दिया, और आप गजराज के उद्धारक बने।",
        "घने वन में जब हिरणी भय से काँप रही थी, हे प्रभु, आपने उस भारी संकट को दूर कर उसकी रक्षा की।",
        "कुरु सभा में द्रौपदी की सच्ची पुकार सुनकर, आपने उसे असंख्य वस्त्र देकर उसकी लाज बचाई।",
        "रावण के भाई विभीषण ने आपकी शरण माँगी। हे प्रभु, आपने उसे शरण देकर लंका का राजा बना दिया।",
        "प्रह्लाद के पिता जो अत्यन्त दुष्ट और क्रूर थे, आपने स्तम्भ से प्रकट होकर क्षण भर में उन्हें चीर डाला।",
        "प्राण निकलते समय अजामिल ने आपका नाम पुकारा। इतना बड़ा पापी भी वैकुण्ठ धाम पहुँच गया।",
        "हे प्रभु, नीलांचल में विराजमान होकर आप बुद्ध अवतार के रूप में प्रकट हुए। अपनी दोनों भुजाएँ फैलाकर आप संकट के तूफान से शरण प्रदान करते हैं।",
        "सालबेग कहते हैं, जाति से हीन मैं एक यवन (मुसलमान) हूँ, फिर भी हे प्रभु, आपके अरुण चरणों में मैं अन्ततः शरण लेता हूँ।"
      ]
    },

    "8": {
      title: "अक्रोध परमानन्द नित्यानन्द राय",
      transliterations: [
        "अक्रोध परमानन्द नित्यानन्द राय।\nअभिमान शून्य निताइ नगरे बेडाय॥",
        "अधम पतित जीवे द्वारे द्वारे गिया।\nहरिनाम महामन्त्र देन विलाइया॥",
        "जा’रे देखे ता’रे कहे दन्ते तृण धरि’।\nआमाय किनिया लह भज गौर-हरि॥",
        "एत बलि’ नित्यानन्द भूमे गडि’ याय।\nसोनार पर्वत जेन धुलाते लोटाय॥",
        "हेन अवतारे यार रति ना जन्मिल।\nलोचन बले सेइ पापी एल आर गेल॥"
      ],
      translations: [
        "परमानन्द स्वरूप श्री नित्यानन्द राय क्रोध से सर्वथा रहित हैं। अहंकार व अभिमान से शून्य होकर वे (हरिनाम का दान करने हेतु) नगर-नगर भ्रमण कर रहे हैं।",
        "वे दीन-हीन, अधम और पतित जीवों के द्वार-द्वार जाकर उन्हें हरे कृष्ण महामन्त्र रूपी अमूल्य रत्न मुक्तहस्त से लुटा रहे हैं।",
        "वे जिस किसी को भी देखते हैं, उसके सम्मुख दाँतों में तिनका दबाकर (परम दैन्य भाव से) प्रार्थना करते हैं: 'हे भाई! श्री गौरांग महाप्रभु का भजन करो और मुझे अपना मोल लिया हुआ दास बना लो!'",
        "ऐसा कहते-कहते श्री नित्यानन्द प्रभु प्रेम में विह्वल होकर भूमि पर लोटने लगते हैं, मानो कोई स्वर्ण का विशाल पर्वत धूलि में लोट रहा हो!",
        "श्री लोचनदास ठाकुर कहते हैं कि ऐसे परम दयालु अवतार श्री नित्यानन्द प्रभु में जिसकी रति और प्रीति नहीं हुई, वह पापी संसार में केवल आया और व्यर्थ ही चला गया (उसका मनुष्य जीवन निष्फल हो गया)।"
      ]
    },
    "9": {
      title: "आमार बलिते प्रभु",
      transliterations: [
        "‘आमार’ बलिते प्रभु! आर किछु नाइ।\nतुमि-इ आमार माता पिता-बन्धु-भाइ॥",
        "बन्धु, दारा, सुत, सुता-तव दासी दास।\nसेइ त’ सम्बन्धे सबे आमार प्रयास॥",
        "धन, जन, गृह, दार ‘तोमार’ बलिया।\nरक्षा करि आमि मात्र सेवक हइया॥",
        "तोमार कार्येर तरे उपार्जिब धन।\nतोमार संसारे-वयय करिब वहन॥",
        "भाल-मन्द नाहि जानि, सेवामात्र करि।\nतोमार संसारे आमि विषयप्रहरी॥",
        "तोमार इच्छाय मोर इन्द्रिय-चालना।\nश्रवण-दर्शन घ्राण, भोजन-वासना॥",
        "निज-सुख लागि’ किछु नाहि करि आर।\nभकतिविनोद बले, तव सुख-सार॥"
      ],
      translations: [
        "हे प्रभु! इस संसार में ऐसा कुछ भी नहीं है जो मेरा हो। निश्चित रूप से आप ही माता-पिता, सुहृद मित्र एवं मेरे भाई हैं।",
        "मेरे समस्त मित्र, पत्नी, पुत्र तथा पुत्रियाँ सभी आपके दास तथा दासियाँ हैं। इसी सम्बन्ध के अनुसार मेरा उनसे संबंध है।",
        "क्योंकि मेरी संपत्ति, अनुचर, घरेलू साज-सामान तथा पत्नी सब आपके हैं। मैं आपका दास होने के नाते मात्र उनका निर्वाह कर रहा हूँ।",
        "मैं इसलिए धनोपार्जन करूँगा कि वह आपकी सेवा में लगे। मैं व्यय इसलिए करूँगा कि आपकी गृहस्थी का निर्वाह हो सके।",
        "मुझे ज्ञात नहीं कि अच्छा क्या है तथा बुरा क्या है। मैं मात्र आपकी सेवा में व्यस्त हूँ। वास्तव में मैं आपके घर का पहरेदार हूँ।",
        "आपकी इच्छानुसार मैं अपनी इन्द्रियों को विभिन्न कार्यकलापों यथा सुनने, देखने, सूँघने तथा खाने में प्रयुक्त करता हूँ। इस प्रकार से मैंने अपने-आपको आपकी इच्छाओं की पूर्ति में लगाया है।",
        "मैं अब अपने निजी सुख हेतु प्रयास नहीं करता। श्रील भक्तिविनोद ठाकुर कहते हैं कि मेरा सुख भगवान्‌ की प्रसन्नता में ही है।"
      ]
    },
    "10": {
      title: "आमार जीवन सदा पापे रत",
      transliterations: [
        "आमार जीवन सदा पापे रत, नाहिक पुण्येरा लेश।\nपररे उद्वेग दियाछि ये कत, दियाछि जीवेरे क्लेश॥",
        "निज सुख लागि’ पापे नाहि डरि, दया-हीन स्वार्थ-पर।\nपर-सुखे दुःखी, सदा मिथ्या कइ, पर-दुःखे हर्ष-भर॥",
        "अशेष कामना हृदि-माझे मोर, क्रोधी दम्भ-परायण।\nमद-मत्त सदा विषये मोहित, हिंसा-गर्व-विभूषण॥",
        "बार्धक्ये एखन उपाय-विहीन, ताते दीन अकिञ्चन।\nभकतिविनोद प्रभुर चरणे, करये आत्म-समर्पण॥"
      ],
      translations: [
        "मेरा सम्पूर्ण जीवन सदा पाप-कर्मों में ही रत रहा है और उसमें पुण्य का लेशमात्र भी नहीं है। मैंने दूसरों को कितने ही उद्वेग दिए हैं और अनन्त जीवों को कष्ट पहुँचाया है।",
        "अपने निजी सुख के लिए मैंने कभी पाप करने से भय नहीं माना; मैं दया से हीन और स्वार्थी रहा हूँ। दूसरों के सुख को देखकर दुःखी होना, सदा झूठ बोलना और दूसरों के दुःख में आनन्दित होना ही मेरा स्वभाव रहा।",
        "मेरे हृदय में अनन्त भौतिक कामनाएँ भरी हैं, मैं क्रोधी और दम्भी हूँ। सदा मदमत्त होकर सांसारिक विषयों से मोहित रहता हूँ और हिंसा तथा अहंकार ही मेरे आभूषण रहे हैं।",
        "अब वृद्धावस्था में सब ओर से असहाय होकर, अत्यन्त दीन-हीन और अकिंचन बनकर भक्तिविनोद भगवान् के श्रीचरणों में आत्म-समर्पण करता है।"
      ]
    },
    "11": {
      title: "आमार निताइ मिले ना",
      transliterations: [
        "आमार निताइ मिले ना भोला मन गौर मिले ना।\nसारा गाय माखिला तिलक गौर मिले ना॥",
        "भितर बाहिर ठीक ना ह’ले गौर प्रेम कि कोथाय मिले।\nठीक ना ह’ले उपासना तिल देइ ना तोर दे सोना॥",
        "मन परिष्कार कर आगे गौर भजन अनुरागे।\nअनुरागे तिलक केटे गौर भजन ह’ल ना॥",
        "ये जन मुक्त गोष्ठी आदर करे आमार दयाल निताइ ताहार घरे।\nभक्ति भरे डाकल परे उत्तर सदा सफल हवे॥"
      ],
      translations: [
        "हे भटके हुए मन! तुम्हें मेरे प्रभु नित्यानन्द और गौरहरि नहीं मिल पा रहे हैं। तुमने पूरे शरीर पर तिलक तो लगा लिया, किन्तु अभी तक गौरसुन्दर की प्राप्ति नहीं हुई।",
        "जब तक तुम्हारा भीतर और बाहर का आचरण एक समान शुद्ध नहीं होगा, तब तक गौर-प्रेम कहीं कैसे मिल सकता है? यदि तुम्हारी उपासना निष्कपट नहीं है, तो वह शुद्ध प्रेम रूपी स्वर्ण-खजाना प्राप्त नहीं हो सकता।",
        "पहले अपने मन के विकारों को साफ करो और श्री गौरांग के भजन में सच्चा अनुराग उत्पन्न करो। केवल दिखावे का तिलक लगाने से कभी गौर-भजन सिद्ध नहीं होता।",
        "जो व्यक्ति भगवान के निष्काम भक्तों का आदर करता है, मेरे परम दयालु नित्यानन्द प्रभु सदा उसके घर में वास करते हैं। जब तुम अनन्य भक्ति से उन्हें पुकारोगे, तब तुम्हारी साधना निश्चित ही सफल होगी।"
      ]
    },
    "12": {
      title: "श्री कृष्णचन्द्राष्टकम्",
      transliterations: [
        "अम्बुदाञ्जनेन्द्रनील-निन्दि-कान्ति-डम्बरः\nकुङ्कुमोद्यद-अर्क-विद्युद-अंशु-दिव्यद-अम्बरः।\nश्रीमद-अङ्ग-चर्चितेन्दु-पीतनाक्त-चन्दनः\nस्वाङ्घ्रि-दास्यदो ऽस्तु मे स बल्लवेन्द्र-नन्दनः॥",
        "गण्ड-ताण्डवाति-पण्डिताण्डजेश-कुण्डलः\nचन्द्र-पद्म-षण्ड-गर्व-खण्डनास्य-मण्डलः।\nबल्लवीषु वर्धितात्म-गूढ-भाव-बन्धनः\nस्वाङ्घ्रि-दास्यदो ऽस्तु मे स बल्लवेन्द्र-नन्दनः॥",
        "नित्य-नव्य-रूप-वेष-हार्द-केलि-चेष्टितः\nकेलि-नर्म-शर्म-दायि-मित्र-वृन्द-वेष्टितः।\nस्वीय-केलि-काननांशु-निर्जितेन्द्र-नन्दनः\nस्वाङ्घ्रि-दास्यदो ऽस्तु मे स बल्लवेन्द्र-नन्दनः॥",
        "प्रेम-हेम-मण्डितात्म-बन्धुताभिनन्दितः\nक्षौणि-लग्न-भाल-लोक-पाल-पालि-वन्दितः।\nनित्य-काल-सृष्ट-विप्र-गौरवालि-वन्दनः\nस्वाङ्घ्रि-दास्यदो ऽस्तु मे स बल्लवेन्द्र-नन्दनः॥",
        "लीलयेन्द्र-कालियोग्र-कंस-वत्स-घातकस्\nतत्-तद्-आत्म-केलि-वृष्टि-पुष्ट-भक्त-चातकः।\nवीर्य-शील-लीलयात्म-घोष-वासि-नन्दनः\nस्वाङ्घ्रि-दास्यदो ऽस्तु मे स बल्लवेन्द्र-नन्दनः॥",
        "कुञ्ज-रास-केलि-सीधु-राधिकादि-तोषणस्\nतत्-तद्-आत्म-केलि-नर्म-तत्-तद्-अलि-पोषणः।\nप्रेम-शील-केलि-कीर्ति-विश्व-चित्त-नन्दनः\nस्वाङ्घ्रि-दास्यदो ऽस्तु मे स बल्लवेन्द्र-नन्दनः॥",
        "रास-केलि-दर्शितात्म-शुद्ध-भक्ति-सत्-पथः\nस्वीय-चित्र-रूप-वेष-मन्मथाली-मन्मथः।\nगोपिकासु नेत्र-कोण-भाव-वृन्द-गन्धनः\nस्वाङ्घ्रि-दास्यदो ऽस्तु मे स बल्लवेन्द्र-नन्दनः॥",
        "पुष्प-चायि-राधिकाभिमर्श-लब्धि-तर्षितः\nप्रेम-वाम्य-रम्य-राधिकास्य-दृष्टि-हर्षितः।\nराधिकोरसीह लेप एष हरि-चन्दनः\nस्वाङ्घ्रि-दास्यदो ऽस्तु मे स बल्लवेन्द्र-नन्दनः॥",
        "अष्टकेन यस् त्व् अनेन राधिका-सुवल्लभं\nसंस्तवीति दर्शने ऽपि सिन्धुजादि-दुर्लभम्।\nतं युनक्ति तुष्ट-चित्त एष घोष-कानने\nराधिकाङ्ग-सङ्ग-नन्दितात्म-पाद-सेवने॥"
      ],
      translations: [
        "जिनकी अंग-कान्ति नवीन मेघ, कज्जल तथा इन्द्रनीलमणि की आभा को भी तिरस्कृत करती है, जिनका पीताम्बर कुंकुम, उदित सूर्य तथा विद्युत् की किरणों के समान दिव्य रूप से दैदीप्यमान है, और जिनका श्रीअंग कपूर, कस्तूरी और पीत चन्दन से सुशोभित है—वे गोपों के राजा (नन्द महाराज) के नन्दन श्रीकृष्ण मुझे अपने श्रीचरण-कमलों की दिव्य सेवा प्रदान करें।",
        "जिनके कपोलों पर मकराकृत कुण्डल अत्यन्त कुशलतापूर्वक नृत्य करते हैं, जिनके मुख-मण्डल का दिव्य सौंदर्य असंख्य चन्द्रमाओं और कमल-पुष्पों के गर्व को भी खण्डित कर देता है, और जो गोपियों के हृदय में अपने गूढ़ प्रेमरूपी बन्धन को निरन्तर बढ़ाते रहते हैं—वे बल्लवेन्द्र-नन्दन श्रीकृष्ण मुझे अपने श्रीचरणों की सेवा प्रदान करें।",
        "जिनका रूप, वेष-भूषा और प्रेममय लीला-विलास नित्य नवीन एवं नित्य वर्धमान रहता है, जो परिहास और विनोद से आनन्द प्रदान करने वाले ग्वालबाल मित्रों के समुदाय से घिरे रहते हैं, और जिनके लीला-कानन (वृन्दावन) की एक किरण भी इन्द्र के नन्दन-कानन के वैभव को पराजित कर देती है—वे बल्लवेन्द्र-नन्दन श्रीकृष्ण मुझे अपने श्रीचरणों की सेवा प्रदान करें।",
        "जो अपने भक्तों के विशुद्ध प्रेमरूपी स्वर्ण-आभूषणों से सुशोभित मैत्री-भाव से परम प्रसन्न होते हैं, लोकपाल और देवतागण भूमि पर मस्तक झुकाकर जिनकी वन्दना करते हैं, और जो ब्राह्मणों का सदैव आदर एवं वन्दन करते हैं—वे बल्लवेन्द्र-नन्दन श्रीकृष्ण मुझे अपने श्रीचरणों की सेवा प्रदान करें।",
        "जिन्होंने लीलापूर्वक ही इन्द्र का मान-मर्दन किया, कालिया नाग का दमन किया तथा कंस और वत्सासुर का संहार किया; जो अपनी इन विविध अद्भुत लीलाओं की अमृत-वर्षा से चातक-रूपी भक्तों का पोषण करते हैं, और अपने पराक्रम तथा मधुर लीलाओं से ब्रजवासियों को आनन्दित करते हैं—वे बल्लवेन्द्र-नन्दन श्रीकृष्ण मुझे अपने श्रीचरणों की सेवा प्रदान करें।",
        "जो वृन्दावन के कुञ्जों में रास-लीला के अमृत-रस से श्रीराधिका तथा अन्य गोपियों को सन्तुष्ट करते हैं, और अपने हास्य-विनोद तथा चातुर्य से सखी-मण्डली का पोषण करते हैं; जो अपनी प्रेममय लीलाओं की कीर्ति से सम्पूर्ण ब्रह्माण्ड के चित्त को आनन्दित करते हैं—वे बल्लवेन्द्र-नन्दन श्रीकृष्ण मुझे अपने श्रीचरणों की सेवा प्रदान करें।",
        "जिन्होंने दिव्य रास-लीला के माध्यम से अपनी विशुद्ध प्रेमाभक्ति का सनातन पथ प्रदर्शित किया है, जो अपने अद्भुत रूप और मनोहर वेष से कोटि-कोटि कामदेवों को भी मोहित करने वाले 'मन्मथ-मन्मथ' हैं, और जो गोपियों पर अपने कटाक्ष-पात से विविध भावों की सुगंध बिखेरते हैं—वे बल्लवेन्द्र-नन्दन श्रीकृष्ण मुझे अपने श्रीचरणों की सेवा प्रदान करें।",
        "जो पुष्प चुनती हुई श्रीराधिका का स्पर्श पाकर प्रेम-पिपासा से पुलकित हो उठते हैं, और श्रीराधा के मान तथा प्रेममयी वामता से युक्त मनोहर मुख-मण्डल को देखकर हर्षित होते हैं; जो श्रीराधा के वक्षस्थल पर सुशोभित दिव्य हरि-चन्दन के लेप हैं—वे बल्लवेन्द्र-नन्दन श्रीकृष्ण मुझे अपने श्रीचरणों की सेवा प्रदान करें।",
        "जो श्रीराधिका के परम प्रियतम श्रीकृष्ण की—जो लक्ष्मी जी आदि श्रेष्ठ देवताओं के लिए भी दर्शन-दुर्लभ हैं—इस अष्टक द्वारा एकाग्रचित्त होकर स्तुति करता है, उस पर सन्तुष्ट होकर वे बल्लवेन्द्र-नन्दन श्रीकृष्ण उसे गोकुल-वृन्दावन के वनों में श्रीराधा के अंग-संग से आनन्दित अपने श्रीचरण-कमलों की नित्य सेवा में नियुक्त कर लेते हैं।"
      ]
    },
    "13": {
      title: "आमि जमुना-पुलिने, कदम्ब-कानने",
      transliterations: [
        "(आमि) जमुना-पुलिने, कदम्ब-कानने,\nकि हेरिनु सखी! आज\n(आमार) श्याम बंशी-धरि, मणि-मञ्चोपरि,\nलीला कोरे रस-राज॥",
        "(तार) अष्ट-दलोपरि, श्री-राधा श्री-हरि,\nअष्ट-सखी परिजन॥",
        "(तार) सुगीत नर्तने, सब सखी-गणे,\nतुषिछे जुगल-धने\n(तखन) कृष्ण-लीला हेरि’, प्रकृति-सुन्दरी,\nबिस्तारिछे शोभा वने॥",
        "(आमि) घरे ना जाइबो, वने प्रवेशिबो,\nओ लीला-रसेर तरे\n(आमि) त्यजि’ कुल-लाज, भज ब्रज-राज,\nविनोद मिनति कोरे’॥"
      ],
      translations: [
        "हे सखी! आज यमुना के तट पर कदम्ब-कुञ्ज में मैंने क्या अद्भुत दृश्य देखा! हाथों में वंशी धारण किए हुए श्यामसुन्दर रत्न-सिंहासन पर विराजमान होकर रसराज के रूप में दिव्य लीला कर रहे हैं!",
        "उस अष्टदल कमल रूपी रत्न-वेदी पर श्री राधा और श्रीहरि विराजमान हैं, और उनकी आठों प्रधान सखियाँ उनकी सेवा में उपस्थित हैं।",
        "मधुर गायन और नयनाभिराम नृत्य द्वारा सभी सखियाँ युगल-धन (श्री राधा-कृष्ण) को सन्तुष्ट कर रही हैं। श्रीकृष्ण की इस प्रेममयी लीला को देखकर प्रकृति-सुन्दरी ने सम्पूर्ण वृन्दावन को अपनी अनुपम शोभा से सजा दिया है।",
        "इस दिव्य लीला-रस के आस्वादन हेतु अब मैं अपने घर नहीं जाऊँगा, अपितु इसी वन में प्रवेश करूँगा। कुल की समस्त लज्जा और भय को त्यागकर केवल ब्रजराज का भजन करो—भक्तिविनोद यही विनम्र प्रार्थना करते हैं।"
      ]
    },
    "14": {
      title: "आमि तो दुर्जन अति सदा दुराचार",
      transliterations: [
        "आमि तो दुर्जन अति सदा दुराचार।\nषड्रिपु-वशे आमि हइनु छार-खार॥",
        "दया-हीन, पापि-श्रेष्ठ, आमार जीवन।\nप्रभु विने नाहि मोर आर कोनो जन॥",
        "भकतिविनोद काँदि’ पड़े तोमार चरणे।\nकृपा कर दयामय एइ अकिञ्चने॥"
      ],
      translations: [
        "मैं अत्यन्त दुर्जन और सदा दुराचारी रहा हूँ। काम, क्रोध, लोभ आदि षड्रिपुओं ने मुझे सदैव अपने वश में रखकर नष्ट-भ्रष्ट कर दिया है।",
        "मैं दया से हीन और पापियों में सबसे बढ़कर हूँ। हे प्रभु! आपके अतिरिक्त मेरा इस संसार में कोई रक्षक और सहारा नहीं है।",
        "भक्तिविनोद रोते हुए आपके श्रीचरणों में गिरकर प्रार्थना करते हैं कि हे दयामय! मुझ अकिंचन और दीन पर अपनी करुणा बरसाइए।"
      ]
    },
    "15": {
      title: "अनादि करम-फले",
      transliterations: [
        "अनादि करम-फले, पदि’ भवार्णव-जले, तरिवारे ना देखि उपाय।\nविषय-हलाहले, ज्वलिछे हृदय-तले, दया करि’ तोलो हे आमाय॥",
        "तुमि त’ दयार निधि, आमि त’ विषम पापी, तोमा बिना गति नाहि आर।\nभकतिविनोद कय, प्रभु मोर दयामय, कर एवे भव-पार॥"
      ],
      translations: [
        "अनादिकाल के कर्म-फलों के कारण मैं इस भवसागर के अथाह जल में गिर पड़ा हूँ और मुझे यहाँ से निकलने का कोई उपाय नहीं सूझ रहा। विषय-रूपी हलाहल विष से मेरा हृदय प्रतिक्षण जल रहा है, हे प्रभु! कृपा करके मुझे इस सागर से उबार लीजिए।",
        "आप दया के अनन्त सागर हैं और मैं घोर पापी हूँ। आपके अतिरिक्त मेरी कोई अन्य गति नहीं है। भक्तिविनोद कहते हैं, हे मेरे दयामय प्रभु! अब मुझे इस भवसागर से पार उतार दीजिए।"
      ]
    },
    "16": {
      title: "अन्तर मन्दिरे जागो जागो",
      transliterations: [
        "अन्तर मन्दिरे जागो जागो, माधव! प्राण-वल्लभ।\nअज्ञान-तिमिर नाशो, हे प्राणेश्वर! दुर्लभ॥",
        "तोमार विरहाग्निते ज्वलिछे पराण।\nदरशन दिया नाथ, राखह परान॥"
      ],
      translations: [
        "हे माधव! हे प्राणवल्लभ! मेरे हृदय-मन्दिर में जागिए! अज्ञान के घोर अन्धकार को मिटाकर अपने दिव्य प्रेम-प्रकाश से मेरे हृदय को प्रकाशित कीजिए।",
        "आपके विरह की अग्नि में मेरा प्राण जल रहा है। हे नाथ! अपने दिव्य दर्शन देकर मेरे इस प्राण की रक्षा कीजिए।"
      ]
    },
    "17": {
      title: "अन्तरे निताइ बाहिरे निताइ",
      transliterations: [
        "अन्तरे निताइ बाहिरे निताइ, निताइ जगत-मय।\nनिताइर चरणे यार मन मजे, तार किछु भय नय॥",
        "नगर भ्रमिया निताइ नाम विलाय।\nप्रेम-रसे सब जीवे भासाय॥"
      ],
      translations: [
        "मेरे हृदय के भीतर भी निताई हैं और बाहर भी निताई हैं, सम्पूर्ण जगत में केवल श्री नित्यानन्द प्रभु ही व्याप्त हैं! जिसका मन निताई के चरणों में मग्न हो गया, उसे किसी का कोई भय नहीं रहता।",
        "नगर-नगर भ्रमण करके नित्यानन्द प्रभु प्रेम-नाम का वितरण कर रहे हैं और सभी बद्धजीवों को प्रेमानन्द में सराबोर कर रहे हैं।"
      ]
    },
    "19": {
      title: "आर केनो माया-जाले",
      transliterations: [
        "आर केनो माया-जाले पड़ितेछ मन?।\nभज भज गौर-हरि, दुर्लभ जीवन॥",
        "ए भव-संसार सब मायार कुहक।\nहरि-पद विने आर सब-इ मिथ्यक॥"
      ],
      translations: [
        "हे मन! तुम अब और माया के जाल में क्यों फँस रहे हो? इस दुर्लभ मानव-जीवन में केवल श्री गौरहरि का भजन करो!",
        "यह भव-संसार तो माया का भ्रम मात्र है। केवल भगवान् के पावन चरण-कमल ही नित्य और सत्य हैं, बाकी सब मिथ्या है।"
      ]
    },
    "21": {
      title: "अरे भाइ! भज मोर गौर-भगवान",
      transliterations: [
        "अरे भाइ! भज मोर गौर-भगवान।\nपापि-तापि उद्धारिते करिल सन्धान॥",
        "गौर-पद-पद्म यार हृदय-माझारे।\nसकल क्लेश दूर हय तार संसारे॥"
      ],
      translations: [
        "अरे भाई! मेरे परम दयालु भगवान् श्री गौरांग का भजन करो, जिन्होंने पतित और ताप-तप्त जीवों के उद्धार हेतु हरिनाम का सरल मार्ग प्रकट किया है।",
        "जिसके हृदय में श्री गौरांग के चरण-कमल विराजमान हैं, उसके संसार के समस्त क्लेश और भव-बन्धन तत्काल नष्ट हो जाते हैं।"
      ]
    },
    "22": {
      title: "आसलो कथा बोलते कि",
      transliterations: [
        "आसलो कथा बोलते कि, हरि-नाम बिना किछु नाइ।\nसंसार-तारणे भाइ, भज गौर-निताइ॥",
        "नाम-संकीर्तन-बले भव-पार हबे।\nब्रजे राधा-कृष्ण-पद सेवा-सुख पावे॥"
      ],
      translations: [
        "सच्ची बात तो यह है कि इस संसार में हरिनाम के अतिरिक्त और कुछ भी सारभूत नहीं है। भवसागर से तरने हेतु हे भाई! गौर-निताई का भजन करो।",
        "नाम-संकीर्तन के बल से तुम इस भवसागर से पार उतर जाओगे और श्री वृन्दावन में राधा-कृष्ण के युगल-चरणों की दिव्य सेवा का सुख प्राप्त करोगे।"
      ]
    },
    "23": {
      title: "आत्म-निवेदन, तुया पदे करि’",
      transliterations: [
        "आत्म-निवेदन, तुया पदे करि’, हइनु परम सुखी।\nदुःख-दूर गेल, चिन्ता ना रहिल, आर ना देखि दुःख-मुखी॥",
        "तुया पद-द्वय, सब-सुख-मय, करिनु शरण सार।\nभक्तिविनोद, सकल छाडिया, हइल तुया परिवार॥"
      ],
      translations: [
        "हे प्रभु! आपके श्रीचरणों में आत्म-निवेदन करके मैं परम सुखी हो गया हूँ। मेरे समस्त दुःख दूर हो गए हैं, कोई चिन्ता शेष नहीं रही और अब मैं कभी दुःख का मुख नहीं देखूँगा।",
        "आपके दोनों चरण-कमल समस्त सुखों से परिपूर्ण हैं, मैंने केवल उन्हीं की शरण को अपना सर्वस्व मान लिया है। सब कुछ त्यागकर भक्तिविनोद अब आपके परिवार का सदस्य बन गया है।"
      ]
    },
    "24": {
      title: "अवतार-सार गोरा-अवतार",
      transliterations: [
        "अवतार-सार गोरा-अवतार, केनो ना भजिले तारे?।\nकरुणा-सागर, प्रेम-सुधाकर, मुदाल पापि-नरे॥",
        "गौर-नाम लय, तार प्रेम हय, सेइ से परम धनी।\nनरोत्तम कय, गौर-पद-द्वय, जीवनेर जीवन मणि॥"
      ],
      translations: [
        "समस्त अवतारों के सार-शिरोमणि श्री गौरांग महाप्रभु हैं; तुमने उनका भजन क्यों नहीं किया? वे करुणा के असीम सागर और प्रेम-सुधा के चन्द्रमा हैं, जिन्होंने पतित मनुष्यों को भी तार दिया।",
        "जो श्री गौरसुन्दर का नाम लेता है, वह प्रेममय हो जाता है और वही संसार का परम धनी है। नरोत्तम दास कहते हैं कि गौर-चरण ही मेरे जीवन के जीवन-मणि हैं।"
      ]
    },
    "25": {
      title: "बन्धु-सङ्गे यदि तव रङ्ग परिहास",
      transliterations: [
        "बन्धु-सङ्गे यदि तव रङ्ग परिहास, थाके अभिलाष (थाके अभिलाष)।\nतबे मोर कथा राख, जेयो नाको जेयो नाको, मथुराय केशी-तीर्थ-घाटेर सकाश॥",
        "गोविन्द विग्रह धरि’, तथाय आछेन हरि, नयने वङ्किम-दृष्टि, मुखे मन्द-हास।\nकिवा त्रि-भङ्गम ठाम, वर्ण समुज्ज्वल श्याम, नव-किशलय शोभा श्री अङ्गे प्रकाश॥",
        "अधरे वंशी-टी ता’र, अनर्थेर मूलाधार, शिखि-चूड़ाकेओ भाइ करो ना विश्वास।\nसे मूर्ति नयने हेरे, केह नाहि घरे फिरे, संसारी गृहीर जे गो होय सर्व-नाश॥"
      ],
      translations: [
        "यदि तुम्हें अपने बन्धु-बान्धवों और परिवार के साथ हास्य-विनोद एवं सांसारिक सुख भोगने की अभिलाषा है, तो मेरी एक बात मान लो—मथुरा में केशी-घाट के समीप कभी मत जाना, कभी मत जाना!",
        "वहाँ श्रीहरि 'गोविन्द' विग्रह के रूप में विराजमान हैं, जिनके नेत्रों में तिरछी चितवन और मुखमण्डल पर मन्द-मन्द मुस्कान है। उनका त्रिभंग-ललित रूप और नव-पल्लव के समान कान्तिमान श्यामवर्ण अंग-शोभा सबको मुग्ध कर लेती है।",
        "उनके अधरों पर रखी हुई वंशी समस्त सांसारिक वासनाओं को भुला देने वाली है और मयूर-मुकुट धारण करने वाले उस रूप पर कभी विश्वास मत करना! क्योंकि जो एक बार उस रूप को देख लेता है, वह कभी अपने घर नहीं लौट पाता; संसारी गृहस्थ का सब कुछ लुट जाता है!"
      ]
    },
    "26": {
      title: "बार बार प्लान करि",
      transliterations: [
        "बार बार प्लान करि बार बार भाङ्गे।\nकखन् भूमिते पडि, कखन् त’ पङ्के॥",
        "एइ रूप ब्रह्माण्ड भरि (जीव) करये भ्रमण।\nगुरु कृष्ण कृपाय पाय भक्ति नित्य धन॥",
        "सेइ धन मिले यदि आर धन छाडे।\nअनायासे चले जाय संसाररे पारे॥",
        "भव पारे आछे चिद्-वैचित्र्य अपार।\nनित्य शान्ति नित्य सुखे करये विहार॥"
      ],
      translations: [
        "मनुष्य बार-बार अपनी भौतिक योजनाएँ (प्लान) बनाता है और वे बार-बार नष्ट हो जाती हैं। कभी वह पृथ्वी पर गिरता है और कभी कीचड़ में जा गिरता है!",
        "इस प्रकार सम्पूर्ण ब्रह्माण्ड में भटकते हुए जीव को श्री गुरु और भगवान् श्रीकृष्ण की अहैतुकी कृपा से नित्य भक्ति रूपी परम धन प्राप्त होता है।",
        "यदि जीव को वह भक्ति-धन मिल जाए और वह अन्य भौतिक धनों को त्याग दे, तो वह अनायास ही इस भवसागर के पार चला जाता है।",
        "इस संसार के पार असीम चिन्मय वैचित्र्य (चिद्-जगत) विद्यमान है, जहाँ नित्य शान्ति और नित्य आनन्द में सभी परमानन्द का आस्वादन करते हैं।"
      ]
    },
    "27": {
      title: "बातुल कहये सेथा सब निराकार",
      transliterations: [
        "बातुल कहये “सेथा सब निराकार”।\nनिर्विशेष तिनि येन शून्येर प्रकार॥",
        "रसेर भाण्डारी तिनि – “रसो वै सः”।\nरसिक भावुक सेवे हाइ तांर वश॥",
        "शान्त, दास्य, सख्य, वात्सल्य, रस आर।\nसर्व रस श्रेष्ठ माधुर्य रस सार॥",
        "चिद्-जगते रस सब होय उपादेय।\nमायाते तार छाया मात्र किन्तु सब हेय॥"
      ],
      translations: [
        "अज्ञानी पागल लोग कहते हैं कि उस परम धाम में सब कुछ निराकार है, परमात्मा निर्विशेष और शून्य के समान हैं।",
        "परन्तु वे भगवान् तो समस्त दिव्य रसों के भण्डार हैं—'रसो वै सः'। रसिक और भावुक भक्त उनकी सेवा करके उनके वशीभूत हो जाते हैं।",
        "शान्त, दास्य, सख्य, वात्सल्य और मधुर—इन समस्त रसों में माधुर्य रस ही सर्व-रस-सार एवं सर्वोच्च है।",
        "चिन्मय जगत के सभी रस दिव्य और ग्राह्य हैं; इस भौतिक जगत में तो केवल उनकी विकृत परछाईं मात्र है जो त्याज्य है।"
      ]
    },
    "28": {
      title: "भज भज हरि, मानव-देह पाइया",
      transliterations: [
        "भज भज हरि, मानव-देह पाइया।\nआर कत दिन रबे, अविद्याते मडिया?॥",
        "हरि-नाम भज, हरि-गुण गाओ।\nए भव-तरणी पार हञा जाओ॥"
      ],
      translations: [
        "यह दुर्लभ मानव-देह पाकर केवल श्रीहरि का भजन करो! अविद्या के अन्धकार में डूबे रहकर और कितने दिन गँवाओगे?",
        "हरिनाम का भजन करो और श्रीहरि के दिव्य गुणों का गान करो, जिससे तुम इस भवसागर को सहज ही पार कर सको।"
      ]
    },
    "29": {
      title: "भोग आरती (भज भकत-वत्सल श्रीगौरहरि)",
      transliterations: [
        "भज भकत-वत्सल श्रीगौरहरि।\nश्रीगौरहरि सोहि गोष्ठ-बिहारी,\nनन्द-यशोमती चित्तहारी॥ (१)",
        "बेला होलो दामोदर एस एखन।\nभोग-मन्दिरे बसि' करह भोजन॥ (२)",
        "नन्देर निर्देशे बैस गिरिवरधारी।\nबलदेव सह सखा बैस सारि-सारि॥ (३)",
        "शुक्त-शाकादि भाजि नालिता कुष्माण्ड।\nडाली डाल्ना दुग्ध तुम्बी दधि मोचाखण्ड॥ (४)",
        "मुद्गबड़ा माषबड़ा रोटिका घृतान्न।\nशष्कुली पिष्टक क्षीर पुलि पायसान्न॥ (५)",
        "कर्पूर अमृतकेलि रम्भा क्षीरसार।\nअमृत रसाल अम्ल द्वादश प्रकार॥ (६)",
        "लुचि चिनि स Karpuri लाड्डु रसावली।\nभोजन करेन कृष्ण होये कुतूहली॥ (७)",
        "राधिकार पक्व अन्न विविध व्यञ्जन।\nपरम आनन्दे कृष्ण करेन भोजन॥ (८)",
        "छले-बले लाड्डु खाय श्रीमधुमङ्गल।\nबगल बाजाय आर देय हरि-बोलो॥ (९)",
        "राधिकादि गणे हेरि नयनेर कोणे।\nतृप्त होय खाये कृष्ण यशोदा भवने॥ (१०)",
        "भोजनान्ते पिये कृष्ण सुवासित वारि।\nसबे मुख प्रक्षालये होय सारि-सारि॥ (११)",
        "हस्तमुख प्रक्षालिया यत सखागणे।\nआनन्द विश्राम करे बलदेव सने॥ (१२)",
        "जाम्बुल रसाल आने ताम्बूल मसाला।\nताहा खेये कृष्णचन्द्र सुखे निद्रा गेला॥ (१३)",
        "विशालाक्ष शिखि पुच्छ-चामर दुलाय।\nअपूर्व शय्याय कृष्ण सुखे निद्रा जाय॥ (१४)",
        "यशोमती आज्ञा पेये धनिष्ठा-आनीत।\nश्रीकृष्ण-प्रसाद राधा भुञ्जे हये प्रीत॥ (१५)",
        "ललितादि सखीगण अवशेष पाय।\nमने मने सुखे राधा-कृष्ण गुण गाय॥ (१६)",
        "हरिलीला एकमात्र याहार प्रमोद।\nभोगारति गाय ठाकुर भक्तिविनोद॥ (१७)"
      ],
      translations: [
        "अरे भाइयों! भक्तवत्सल श्रीगौरसुन्दर का भजन करो, जो और कोई नहीं, श्रीनन्द एवं यशोदा मैया के चित्त को हरने वाले तथा गोचारण के लिए वन-वन में विचरण करने वाले श्रीकृष्ण ही हैं।",
        "माता यशोदा ने श्रीकृष्ण को पुकारा, 'हे दामोदर, बहुत देर हो चुकी है। तुरन्त आओ और भोगमंदिर में भोजन के लिए बैठो।'",
        "नन्दमहाराज के निर्देश पर गिरिवरधारी अपने बड़े भाई बलदेव एवं अन्य सखाओं के साथ पंक्तिबद्ध होकर बैठ गये।",
        "तब उन्हें विभिन्न स्वादिष्ट व्यंजन परोसे गये जिनमें शुकता और हरे शाक थे; तले हुए व्यंजन और हरे पत्तों का सलाद था। साथ ही कद्दू की सब्जी, फल, डालना, लौकी की खीर, दही और केले के फूल की सब्जी थी।",
        "तब उन्हें मूंग दाल की वड़ियां, उड़द दाल की वड़ियां और घी के साथ चावल परोसे गये। उसके पश्चात् दूध की मिठाई, चावल के आटे के व्यंजन, रबड़ी और पायसन्न दिया गया।",
        "व्यंजनों में कपूर मिश्रित खीर थी जो अमृत के समान स्वादिष्ट थी। केले और बारह प्रकार के खट्टे व्यंजन परोसे गये जो इमली, नींबू, संतरों और अनार से बने थे।",
        "आटे और शक्कर की पूरियां थी, लड्डू थे और चावल एवं चाशनी में तैरते दाल के पकौड़े थे। कृष्ण ने उत्सुकता से इन सब व्यंजनों को खाया।",
        "श्रीकृष्ण ने आनन्दपूर्वक श्रीमती राधारानी द्वारा बनाये गये चावल, सब्जियों और मिठाइयों को खाया।",
        "श्रीकृष्ण के मजाकिया ब्राह्मण मित्र मधुमंगल, जिसे लड्डू अतिप्रिय हैं, छल-बल से उन्हें प्राप्त कर ही लेता है। लड्डू खाकर वह चिल्लाता है, 'हरि बोल! हरि बोल!' और अपने हाथ से काख को दबाते हुए विचित्र आवाज निकालता है।",
        "कृष्ण यशोदाभवन में अत्यन्त संतोष से भोजन कर रहे थे और राधारानी और उनकी सखियाँ अपने नेत्रों के कोनों से इस मधुर लीला को देख रही थीं।",
        "भोजन के बाद कृष्ण सुगन्धित जल पीते हैं और सभी बच्चे पंक्ति में खड़े होकर अपने मुख धोते हैं।",
        "जब सभी ग्वाल-बाल हाथ-मुँह धो लेते हैं, वे अत्यन्त आनन्द के साथ बलरामजी के साथ विश्राम करते हैं।",
        "दो ग्वाल-बाल जाम्बुल और रसाल तब कृष्ण के लिए लौंग, इलायची, कपूर आदि सुगन्धित मसालों वाला पान लाते हैं, जिसे खाकर श्रीकृष्ण सुखपूर्वक सो जाते हैं।",
        "श्रीकृष्ण अपनी अपूर्व शय्या पर प्रसन्नतापूर्वक सो रहे थे और उनके सेवक विशालाक्ष मोरपंख के पंखे से उन्हें हवा झलने लगे।",
        "यशोदा मैया की आज्ञा से धनिष्ठा गोपी श्रीकृष्ण के महाप्रसाद की थाली को श्रीमती राधारानी के पास लाती हैं, जिसे वे प्रेमपूर्वक ग्रहण करती हैं।",
        "ललिता देवी और अन्य गोपियाँ तब शेष महाप्रसाद को स्वीकार करती हैं और अपने हृदय में आनन्दपूर्वक श्रीराधा-कृष्ण के गुण गाती हैं।",
        "ठाकुर भक्तिविनोद, जिनके जीवन का एकमात्र आनन्द भगवान् हरि की लीलायें हैं, यह भोग-आरती गाते हैं।"
      ]
    },
    "30": {
      title: "भज गौराङ्ग कह गौराङ्ग",
      transliterations: [
        "भज गौराङ्ग कह गौराङ्ग लह गौराङ्गेर नाम रे।\nजे जन गौराङ्ग भजे सेइ आमार प्राण रे॥",
        "गौराङ्ग बलिया भाइ करहु क्रन्दन।\nनरोत्तम दास कय पावे कृष्ण-धन॥"
      ],
      translations: [
        "श्री गौरांग का भजन करो, गौरांग का गुणगान करो और गौरांग का ही पावन नाम लो! जो श्री गौरांग का भजन करता है, वह मेरे प्राणों से भी अधिक प्रिय है!",
        "'गौरांग' पुकारते हुए प्रेम में रुदन करो; नरोत्तम दास कहते हैं कि तुम्हें श्रीकृष्ण रूपी परम धन अवश्य प्राप्त होगा!"
      ]
    },
    "31": {
      title: "भज गोविन्द भज गोविन्द",
      transliterations: [
        "भज गोविन्द भज गोविन्द भज गोविन्द का नाम रे।\nगोविन्द के नाम बिना तेरे कोई ना आवे काम रे॥",
        "यह जीवन सुख दुःख का मेला दुनिया सारी स्वप्नों का खेला।\nजाना तुझको पड़े अकेला भज रे हरि का नाम रे॥",
        "गोविन्द की महिमा गावे प्रेम की उसपर आग लगाके।\nजीवन अपना सफल बनाए चल ईश्वर की धाम रे॥"
      ],
      translations: [
        "हे मन! गोविन्द का भजन कर, गोविन्द का गुणगान कर और केवल गोविन्द का नाम जप! क्योंकि गोविन्द के नाम के बिना तेरा कोई भी सांसारिक प्रयास काम नहीं आएगा।",
        "यह मानव जीवन सुख और दुःख का एक मेला मात्र है और यह सम्पूर्ण संसार केवल स्वप्न की भाँति है। अन्त में तुझे अकेले ही जाना पड़ेगा, अतः श्रीहरि के नाम का भजन कर!",
        "गोविन्द की महिमा का गान करके अपने हृदय में भगवत्प्रेम की लौ प्रज्वलित कर; अपने जीवन को सफल बना और भगवान् के परम दिव्य धाम को प्राप्त कर!"
      ]
    },
    "32": {
      title: "श्री भज गोविन्दम् (Śrī Bhaja Govindam)",
      transliterations: [
        "भज गोविन्दं भज गोविन्दं\nगोविन्दं भज मूढ-मते |\nसंप्राप्ते सन्निहिते काले\nनहि नहि रक्षति डुकृञ्-करणे ||",
        "मूढ जहीहि धनागम-तृष्णां\nकुरु सद्-बुद्धिं मनसि वितृष्णाम् |\nयल्लभसे निज कर्मोपात्तं\nवित्तं तेन विनोदय चित्तम् ||",
        "नारी-स्तनभर-नाभी-देशं\nदृष्ट्वा मागामोहावेशम् |\nएतन् मांस-वसादि विकारं\nमनसि विचिन्तय वारं वारम् ||",
        "नलिनी-दल-गत-जलम् अति-तरलं\nतद्वज्-जीवितम् अतिशय-चपलं |\nविद्धि व्याध्यभिमान-ग्रस्तं\nलोकं शोक-हतं च समस्तम् ||",
        "यावद्-वित्तोपार्जन सक्तः\nतावन्-निज परिवारो रक्तः |\nपश्चाज्जीवति जर्जर देहे\nवार्तां को\u0027पि न पृच्छति गेहे ||",
        "यावत्-पवनो निवसति देहे\nतावत्-पृच्छति कुशलं गेहे |\nगतवति वायौ देहापाये\nभार्या बिभ्यति तस्मिन् काये ||",
        "बाल स्तावत् क्रीडासक्तः\nतरुण स्तावत् तरुणीसक्तः |\nवृद्ध स्तावत् चिन्तासक्तः\nपरे ब्रह्मणि को\u0027पि न सक्तः ||",
        "काते कान्ता कस्ते पुत्रः\nसंसारो\u0027यमतीव विचित्रः |\nकस्य त्वं कः कुत आयातः\nतत्त्वं चिन्तय तद् इह भ्रातः ||",
        "सत्सङ्गत्वे निस्सङ्गत्वं\nनिस्सङ्गत्वे निर्मोहत्वम् |\nनिर्मोहत्वे निश्चलतत्त्वं\nनिश्चलतत्त्वे जीवन्मुक्तिः ||",
        "वयसि गते कः काम-विकारः\nशुष्के नीरे कः कासारः |\nक्षीणे वित्ते कः परिवारः\nज्ञाते तत्त्वे कः संसारः ||",
        "मा कुरु धन जन यौवन गर्वं\nहरति निमेषात्-कालः सर्वम् |\nमायामयमिदम्-अखिलं हित्वा\nब्रह्म-पदं त्वं प्रविश विदित्वा ||",
        "दिन यामिन्यौ सायं प्रातः\nशिशिर-वसन्तौ पुनरायातः |\nकालः क्रीडति गच्छत्यायुः\nतदपि न मुञ्चत्याशा-वायुः ||",
        "द्वादश-मञ्जरिकाभिर शेषः\nकथितो वैयाकरणस्यैषः |\nउपदेशो\u0027भूद्-विद्यानिपुणैः\nश्रीमच्छङ्कर-भगवच्छरणैः ||",
        "काते कान्ता धन गत-चिन्ता\nवातुल किं तव नास्ति नियन्ता |\nत्रिजगति सज्जन सङ्गतिरेका\nभवति भवार्णव तरणे नौका ||",
        "जटिलो मुण्डी लुञ्छित केशः\nकाषायाम्बर बहुकृत वेषः |\nपश्यन्नपि च न पश्यति मूढः\nउदर निमित्तं बहुकृतवेषः ||",
        "अङ्गं गलितं पलितं मुण्डं\nदशन-विहीनं जतं तुण्डम् |\nवृद्धो याति गृहीत्वा दण्डं\nतदपि न मुञ्चत्याशापिण्डम् ||",
        "अग्रे वह्निः पृष्ठे भानुः\nरात्रौ चुबुक समर्पित जानुः |\nकरतल भिक्षस्-तरुतल वासः\nतदपि न मुञ्चत्याशापाशः ||",
        "कुरुते गङ्गा-सागर गमनं\nव्रत परिपालनम्-अथवा दानम् |\nज्ञान विहिनः सर्वमतेन\nमुक्तिं न भजति जन्म शतेन ||",
        "सुर मन्दिर तरु मूल निवासः\nशय्या भूतलम्-अजिनं वासः |\nसर्व परिग्रह भोग त्यागः\nकस्य सुखं न करोति विरागः ||",
        "योगरतो वा भोगरतो वा\nसङ्गरतो वा सङ्गविहीनः |\nयस्य ब्रह्मणि रमते चित्तं\nनन्दति नन्दति नन्दत्येव ||",
        "भगवद्-गीता किञ्चिदधीता\nगङ्गा जललव कणिका पीता |\nसकृदपि येन मुरारि समर्चा\nक्रियते तस्य यमेन न चर्चा ||",
        "पुनरपि जननं पुनरपि मरणं\nपुनरपि जननी जठरे शयनम् |\nइह संसारे बहु दुस्तारे\nकृपया\u0027पारे पाहि मुरारे ||",
        "रथ्या चर्पट विरचित कन्थः\nपुण्यापुण्य विवर्जित पन्थः |\nयोगी योग नियोजित चित्तो\nरमते बालोन्मत्तवदेव ||",
        "कस्त्वं को\u0027हं कुत आयातः\nका मे जननी को मे तातः |\nइति परिभावय सर्वम् असारं\nविश्वं त्यक्त्वा स्वप्न विचारम् ||",
        "त्वयि मयि चान्य त्रैको विष्णुः\nव्यर्थं कुप्यसि मय्यसहिष्णुः |\nभव समचित्तः सर्वत्र त्वं\nवाञ्छस्यचिराद्-यदि विष्णुत्वम् ||",
        "शत्रौ मित्रे पुत्रे बन्धौ\nमा कुरु यत्नं विग्रह सन्धौ |\nसर्वस्मिन्नपि पश्यात्मानं\nसर्वत्रोत्-सृज भेदाज्ञानम् ||",
        "कामं क्रोधं लोभं मोहं\nत्यक्त्वा\u0027त्मानं भावय को\u0027हम् |\nआत्म-ज्ञान विहीना मूढाः\nते पच्यन्ते नरक निगूढाः ||",
        "गेयं गीता-नाम-सहस्रं\nध्येयं श्रीपति रूपम्-अजस्रम् |\nनेयं सज्जन सङ्गे चित्तं\nदेयं दीन-जनाय च वित्तम् ||",
        "सुखतः क्रियते रामाभोगः\nपश्चाद्धन्त शरीरे रोगः |\nयद्यपि लोके मरणं शरणं\nतदपि न मुञ्चति पापा-चरणम् ||",
        "अर्थम्-अनर्थं भावय नित्यं\nनास्ति ततः सुख लेशः सत्यम् |\nपुत्रादपि धन भाजां भीतिः\nसर्वत्रैषा विहिता रीतिः ||",
        "प्राणायामं प्रत्याहारं\nनित्यानित्य विवेकविचारम् |\nजाप्यसमेत समाधि-विधानं\nकुर्ववधानं महद्-अवधानम् ||",
        "गुरु-चरणाम्बुज निर्भर भक्तः\nसंसारादचिराद्भव मुक्तः |\nसेन्द्रिय मानस नियमादेवं\nद्रक्ष्यसि निज हृदयस्थं देवम् ||",
        "मूढः कश्चन वैयाकरणो\nडुकृञ्करणाध्ययन धुरिणः |\nश्रीमच्छङ्कर भगवच्छिष्यै\nबोधित आसिच्छोधितकरणः ||",
        "भज-गोविन्दं भज-गोविन्दं\nगोविन्दं भज-मूढमते |\nनाम-स्मरणादन्यमुपायं\nनहि पश्यामो भवतरणे ||",
        "इति श्रीमच्छङ्कराचार्यविरचितं भजगोविन्दं सम्पूर्णम्॥"
      ],
      translations: [
        "Worship Govinda, worship Govinda, worship Govinda, O fool! The rules of grammar will not save you at the time of your death.",
        "O fool! Give up your thirst to amass wealth, devote your mind to dispassion and thoughts of the Real. Be content with what comes to you through actions performed by your own work.",
        "Do not get drowned in delusion, infatuated with passion and lusty desires, by seeing a woman\u0027s raised breasts and navel. These are nothing but a modification of flesh and fat, and the like. Do not fail to remember this again and again in your mind.",
        "As water drops on a lotus leaf are unsteady and trembling, in the same way life in this world is exceedingly unsteady and restless. Know that the whole world is full of miseries, afflicted by unhappiness and grief.",
        "So long as a man is fit and able to support his family by earning wealth, all those family members around him show affection. But no one at home cares for him, even have a word with him, when his body becomes invalid and totters due to old age.",
        "When one is alive, his family members enquire kindly about his welfare. But when the life-air stops and the soul departs from the body, even his wife runs away in fear of the corpse.",
        "The childhood is lost in attachment to games. The youth is lost in attachment to woman. Old age passes with worry and anxiety, thinking over many things. But there is hardly anyone who wants to be lost (attached) in para-braman, the Supreme Spirit.",
        "Who is your wife? Who is your son? Very strange indeed is this worldly cycle! To whom do you belong? Who are you? Whence have you come? Brother, contemplate this fundamental Truth here.",
        "Being in the company of good people (saints) gives rise to non-attachment, from non-attachment comes freedom from delusion, which leads to awareness of reality, understanding of reality gives rise to emancipation leading to the liberation of the soul (jīvan-mukti), while still alive.",
        "What good is lust when youth has fled? What use is a lake which has no water? Where are the relatives when wealth is gone? What is saṁsāra (transmigratory process), when Truth is known?",
        "Do not take pride in wealth, friends and youth. Each one of these is destroyed within an instant by Time. Free yourself from the illusion of the world of māyā and attain the realm of brahman, timeless truth.",
        "Day and night, evening and morning, winter and summer come and go again and again. Eternal time plays and life ebbs away, yet one does not let go of the storm of desire.",
        "The bouquet of twelve verses was imparted to a grammarian by the all-knowing Śaṅkara, adored as bhagavat-pāda.",
        "O, mad man! Why this engrossment in thoughts of wealth and beloved? Is there no one to guide you? In these thee worlds, only the association with saintly people (satsaṅga) can serve as the boat that can steer cross the ocean of repeated birth and death. (Stanza attributed to Padmapāda.)",
        "There are many (ascetics) with matted hair, many with clean shaven heads, many whose hair have been plucked out, some are clothed in orange, yet others parading in various colors - Indeed, these different disguises or apparels are only for their belly’s sake. Seeing the truth revealed before them, still the foolish ones can not see through these many disguises. (Stanza attributed to Totakācārya.)",
        "Strength has left the old man\u0027s body, his head has become bald, his gums toothless and leaning on crutches. Even then he can not let go of his attachment, clinging firmly to fruitless hopes and desires. (Stanza attributed to Hastamalaka.)",
        "The ascetic warms his body with fire in front and the sun at the back. At night he dwells under a tree with face huddled between the knees to keep out of the cold. In his hands he holds the beggar\u0027s alms and yet he does not let go of the noose of attachment to desire and passion. (Stanza attributed to Subhodha.)",
        "One may travel (on a pilgrimage) to the confluence where the Gaṅgā river meets the ocean (gaṅgā-sāgara), undertake vows and give away in charity, however without true knowledge (jñāna) one will not achieve liberation (mukti) even in a hundred lifetimes, according to all [schools of] thought. (Stanza attributed to Vārtikakāra.)",
        "One who lives in temples or dwells at the foot of trees, whose bed is the surface of the earth, whose garment is a deer-skin, who has thus renounced all enjoyment of worldly possessions - to whom will such dispassion (vairāgya) not bring happiness? (Stanza attributed to Nityānanda.)",
        "One may take delight in yoga (union with god) or bhoga (worldly enjoyment), may be delighted by company or solitude, but he whose mind delights in brahman (the spiritual truth), only he enjoys real bliss and is satisfied, no one else. (Stanza attributed to ānandagiriḥ)",
        "Let a man read but a little from Bhagavad-gītā, drink just a drop of Gaṅgā-water, worship but once murāri, the enemy of \u0027Murā\u0027 (Lord Kṛṣṇa), he then will have no confrontation with Yama, the Lord of death. (Stanza attributed to Dṛḍhabhakta.)",
        "Birth again, death again, again resting in the mother\u0027s womb! It is indeed hard to cross this boundless ocean of saṁsāra (cycle of repeated birth and death). O Murāri! by your causeless mercy please protect me (from this transmigratory process). (Stanza attributed to Nityanātha.)",
        "The one whose patched garment is made from tattered rags cast on the road, whose path is free from sins having abandoned virtue and vices, whose mind is fixed on yoga (in union with god), that yogi indeed rejoices (in divine bliss) like a crazed wild child overwhelmed by happiness. (Stanza attributed to Nityanātha.)",
        "Having abandoned this world, knowing it to be without essence, comparable to the reflection of a dream, consider well and reflect: Who am I? Who are you? Where have I come from? Who is my mother, and who is my father? (Stanza attributed to Surendra.)",
        "In you, in me and everywhere else there is only one Viṣṇu. You get angry with me in vain, being impatient. Be equal-minded towards all if you wish to attain the state of Viṣṇu soon.",
        "Do not waste your efforts to win the love of or to fight against friend and foe, children and relatives. See the true self in everyone and give up all feelings of duality completely. (Stanza attributed to Medhātithira.)",
        "Give up lust, anger, greed and infatuation, try to know the true self and consider: who am I? Those fools covered by ignorance, who lack self-knowledge (ātma-jñāna) are tormented in hells. (Stanza attributed to Bhārativaṁśa.)",
        "Regularly recite from the Gītā, meditate on Viṣṇu (śrīpati) in your heart, and chant his thousand glories names (viṣṇu-sahasranāma). Take delight to be with the noble and the holy. Distribute your wealth in charity to the poor and the needy. (Stanza attributed to Sumatir.)",
        "Very readily one indulges in carnal pleasures but later on, alas, come diseases of the body. Even though in the world the ultimate end is death (maraṇaṁ), even then one does not relinquish his sinful behaviours.",
        "Remember always that wealth is the source of misfortune. The truth is that one cannot extract even a bit of happiness from it. For the rich, there is fear even from one’s own son. This is the established way with wealth everywhere.",
        "Practice control of breath (prāṇā-yāma) and withdrawal of the senses from their respective sense objects (pratyāhāra), deliberate on the distinction between the permanent and the transitory, perform meditation along with chanting the holy names of god, perform these with great attention and extreme care!",
        "Oh devotee sincerely dedicated to the lotus feet of the Guru! May thou be soon free from Saṁsārā, the circle of birth and death. Through disciplined senses and controlled mind, thou shalt come to see (experience) the in-dwelling Lord of your heart!",
        "Thus a foolish grammarian lost in grammatical rules, was cleansed of his narrow vision and shown the light by the students of the illustrious Śrīmad Śaṅkarācārya.",
        "Worship Govinda, worship Govinda, worship Govinda, O fool! Other than chanting the Lord\u0027s names, there is no other way to cross the ocean of existence.",
        "Thus ends Śrī Bhaja Govindam composed by Śrīmad Ādi Śaṅkarācārya."
      ]
    },

    "33": {
      title: "भजहुँ रे मन श्रीनन्दनन्दन",
      transliterations: [
        "भजहुँ रे मन श्रीनन्दनन्दन अभय-चरणारविन्द रे।\nदुर्लभ मानव-जनम सत्सङ्गे तरह ए भवसिन्धु रे॥",
        "शीत आतप वात वरषण ए दिन यामिनि जागी रे।\nविफले सेविमु कृपण दुर्जन चपल सुख-लब लागि’ रे॥",
        "ए धन, यौवन, पुत्र, परिजन इथके आछे परतीति रे।\nकमल-दल-जल जीवन टलमल भजहुँ हरि-पद-नीति रे॥",
        "श्रवण, कीर्तन, स्मरण, वन्दन, पाद-सेवन, दास्य रे।\nपूजन, सखी-जन, आत्म-निवेदन गोविन्द-दास-अभिलाष रे॥"
      ],
      translations: [
        "हे मेरे मन! श्री नन्दनन्दन श्रीकृष्ण के उन अभय चरण-कमलों का निरन्तर भजन करो, जो समस्त भयों का नाश करने वाले हैं। इस दुर्लभ मानव-जन्म को पाकर साधु-संग द्वारा इस भवसागर को पार कर लो।",
        "सर्दी, गर्मी, वायु और वर्षा को सहते हुए, दिन-रात जागकर मैंने केवल क्षणिक इन्द्रिय-सुख के लिए कंजूस और दुष्ट लोगों की व्यर्थ सेवा की।",
        "इस धन, यौवन, पुत्र और कुटुम्बियों का क्या भरोसा? यह जीवन तो कमल के पत्ते पर ठहरे हुए जल-बिन्दु के समान चंचल एवं क्षणभंगुर है। अतः नीतिपूर्वक भगवान् के चरणों का भजन करो।",
        "श्रवण, कीर्तन, स्मरण, वन्दन, पादसेवन, दास्य, पूजन, सख्य और आत्मनिवेदन—इन नवधा भक्तियों द्वारा भगवान् की सेवा करना ही गोविन्द दास की एकमात्र अभिलाषा है।"
      ]
    },
    "34": {
      title: "भज रे भज रे आमार मन अति मन्द",
      transliterations: [
        "भज रे भज रे आमार मन अति मन्द\n(भजन बिना गति नाइ रे)\n(भज) ब्रज-बने राधा-कृष्ण-चरणारविन्द\n(ज्ञान-कर्म परिहरि’ रे)\n(भज) (ब्रज-बने राधा-कृष्ण)",
        "(भज) गौर-गदाधराद्वैत गुरु-नित्यानन्द\n(गौर-कृष्णे अभेद जेने’ रे)\n(गुरु कृष्ण-प्रेष्ठ जेने’ रे)\n(स्मर) श्रीनिवास, हरिदास, मुरारि, मुकुन्द\n(गौर-प्रेमे स्मर, स्मर रे)\n(स्मर) (श्रीनिवास हरिदासे)",
        "(स्मर) रूप-सनातन-जीव-रघुनाथ-द्वन्द्व\n(कृष्ण-भजन यदि करबे रे)\n(रूप-सनातने स्मर)\n(स्मर) राघव-गोपाल-भट्ट स्वरूप-रामानन्द\n(कृष्ण-प्रेम यदि चाओ रे)\n(स्वरूप-रामानन्दे स्मर)",
        "(स्मर) गोष्ठी-सह कर्णपूर, सेन शिवानन्द\n(अजस्र स्मर, स्मर रे)\n(गोष्ठी-सह कर्णपूरे)\n(स्मर) रूपानुग साधु-जन भजन-आनन्द\n(ब्रजे बास यदि चाओ रे)\n(रूपानुग साधु स्मर)"
      ],
      translations: [
        "हे मेरे चंचल और मूढ़ मन! तू श्रीधाम वृन्दावन (ब्रज) के कुञ्जों में श्रीराधा-कृष्ण के चरण-कमलों का निरन्तर भजन कर! क्योंकि इस भजन के अतिरिक्त जीव की कोई अन्य गति नहीं है। शुष्क ज्ञान और सकाम कर्मकाण्ड को त्यागकर केवल श्रीराधा-कृष्ण के युगल चरणों का भजन कर!",
        "श्रीगौरसुन्दर, गदाधर, अद्वैताचार्य और आदि-गुरु श्रीनित्यानन्द प्रभु का भजन कर! (श्रीगौर और श्रीकृष्ण को अभिन्न जानकर और श्रीगुरुदेव को श्रीकृष्ण के अति-प्रिय जानकर!) श्रीगौर के प्रिय परिकरों श्रीनिवास ठाकुर, हरिदास ठाकुर, मुरारी गुप्त और मुकुन्द दत्त का शुद्ध गौर-प्रेम से स्मरण कर!",
        "श्रील रूप गोस्वामी, सनातन, जीव और दोनों रघुनाथ (रघुनाथ दास व रघुनाथ भट्ट) का स्मरण कर यदि तुझे यथार्थ कृष्ण-भजन करना है! और राघव पण्डित, गोपाल भट्ट गोस्वामी, स्वरूप दामोदर और राय रामानन्द का स्मरण कर यदि तुझे विशुद्ध कृष्ण-प्रेम की अभिलाषा है!",
        "श्रील कवि कर्णपूर और उनके पिता शिवानन्द सेन के सम्पूर्ण परिवार का निरन्तर स्मरण कर! और रूपानुग साधु-संतों का स्मरण कर जो अहर्निश भजन के आनन्द में मग्न रहते हैं, यदि तू श्री वृन्दावन धाम में नित्य वास करना चाहता है!"
      ]
    },
    "36": {
      title: "भाले गोरा-गदाधरेर आरति नेहारि",
      transliterations: [
        "भाले गोरा-गदाधरेर आरति नेहारि।\nनदीया-पूरब-भावे जाउ बोलिहारि॥",
        "कल्पतरु-तले रत्न-सिंहासनोपरि।\nसबु सखी-वेष्टित किशोर-किशोरी॥",
        "पुरट-जड़ित कोत मणि-गजमति।\nझमकि’ झमकि’ लभे प्रति-अङ्ग-ज्योतिः॥",
        "नील नीरद लागि’ विद्युत्-माला।\nदुहुँ अङ्ग मिलि’ शोभा भुवन-उजाला॥",
        "शङ्ख बाजे, घण्टा बाजे, बाजे करताल।\nमधुर मृदङ्ग बाजे परम रसाल॥",
        "विशाखादि सखी-वृन्द दुहुँ गुन गाओवे।\nप्रिय-नर्म-सखी-गण चामर धुलाओवे॥",
        "अनङ्ग मञ्जरी चुया-चन्दन देओवे।\nमालतीर माला रूप मञ्जरी लागाओवे॥",
        "पञ्च-प्रदीपे धोरि’ कर्पूर-बाति।\nललिता-सुन्दरी कोरे जुगल-आरति॥",
        "देवी-लक्ष्मी-श्रुति-गण धरणी लोटाओवे।\nगोपी-जन-अधिकार रोवत गाओवे॥",
        "भकतिविनोद रोहि’ सुरभीकि कुञ्जे।\nआरति-दरशने प्रेम-सुख भुञ्जे॥"
      ],
      translations: [
        "बड़े सौभाग्य से मैं श्रीगौर-गदाधर की अद्भुत आरती का दर्शन कर रहा हूँ! मैं नदिया के पूर्व भाव (श्रीराधा-कृष्ण वृन्दावन लीला) पर बलिहारी जाता हूँ।",
        "कल्पवृक्ष के नीचे रत्न-सिंहासन पर किशोर-किशोरी (श्रीराधा-कृष्ण) अपनी समस्त सखियों से घिरे हुए विराजमान हैं।",
        "स्वर्ण, मणि और गजमुक्ताओं से जड़े आभूषण उनके प्रत्येक अंग की दिव्य कान्ति को अत्यधिक चमका रहे हैं।",
        "नीले मेघ पर विद्युत की माला के समान दोनों के दिव्य अंगों का मिलन सम्पूर्ण त्रिभुवन को प्रकाशित कर रहा है।",
        "शंख, घण्टा और करताल बज रहे हैं तथा परम रसीला मधुर मृदंग बज रहा है।",
        "विशाखा आदि सखियाँ दोनों के दिव्य गुणों का गान कर रही हैं और प्रिय-नर्म-सखियाँ चामर ढुला रही हैं।",
        "अनंग मंजरी चुआ-चन्दन का लेप कर रही हैं और रूप मंजरी मालती पुष्पों की सुन्दर माला पहना रही हैं।",
        "ललिता सुन्दरी कर्पूर की बत्ती वाले पंच-प्रदीप को धारण करके युगल-किशोर की भव्य आरती कर रही हैं।",
        "पार्वती, लक्ष्मी और श्रुति-गण भूमि पर लोट-पोट होकर गोपियों के उस परम अधिकार की लालसा में विलाप करते हुए स्तुति कर रहे हैं।",
        "श्रील भक्तिविनोद ठाकुर सुरभि-कुञ्ज में रहकर इस आरती का दर्शन करते हुए परम प्रेमानन्द का अनुभव कर रहे हैं।"
      ]
    },
    "37": {
      title: "भीष्म स्तुति (Bhishma Stuti)",
      transliterations: [
        "श्री-भीष्म उवाच\nइति मतिरुपकल्पिता वितृष्णा\nभगवति सात्वत-पुङ्गवे विभूम्नि।\nस्व-सुखमुपगते क्वचिद्विहर्तुं\nप्रकृतिमुपेयुषि यद्भवप्रवाहः॥ (१)",
        "त्रिभुवनकमनं तमालवर्णं\nरविकरगौरवराम्बरं दधाने।\nवपुरलककुलावृताननाब्जं\nविजयसखे रतिरस्तु मेऽनवद्या॥ (२)",
        "युधि तुरगरजोविधूम्रविष्वक्-\nकचलुलितश्रमवार्यलङ्कृतास्ये।\nमम निशितशरैर्विभिद्यमान-\nत्वचि विलसत्कवचेऽस्तु कृष्ण आत्मा॥ (३)",
        "सपदि सखिवचो निशम्य मध्ये\nनिजपरयोर्बलयो रथं निवेश्य।\nस्थितवति परसैनिकायुरक्ष्णा\nहृतवति पार्थसखे रतिर्ममास्तु॥ (४)",
        "व्यवहितपृतनामुखं निरीक्ष्य\nस्वजनवधाद्विमुखस्य दोषबुद्ध्या।\nकुमतिमहरदात्मविद्यया यश्-\nचरणरतिः परमस्य तस्य मेऽस्तु॥ (५)",
        "स्वनिगममपहाय मत्प्रतिज्ञां\nऋतमधिकर्तुमवप्लुतो रथस्थः।\nधृतरथचरणोऽभ्ययाच्चलद्गुर्-\nहरिरिव हन्तुमिभं गतोत्तरीयः॥ (६)",
        "शितविशिखहतो विशीर्णदंशः\nक्षतजपरिप्लुत आततायिनो मे।\nप्रसभमभिससार मद्वधार्थं\nस भवतु मे भगवान् गतिर्मुकुन्दः॥ (७)",
        "विजयरथकुटुम्ब आत्ततोत्रे\nधृतहयरश्मिनि तच्छ्रियेक्षणीये।\nभगवति रतिरस्तु मे मुमूर्षोर्-\nयमिह निरीक्ष्य हता गताः सरूपम्॥ (८)",
        "ललितगतिविलासवल्गुहास-\nप्रणयनिरीक्षणकल्पितोरुमानाः।\nकृतमनुकृतवत्य उन्मदान्धाः\nप्रकृतिमगन् किल यस्य गोपवध्वः॥ (९)",
        "मुनिगणनृपवर्यसङ्कुलेऽन्तः-\nसदसि युधिष्ठिरराजसूय एषाम्।\nअर्हणमुपपेद ईक्षणीयो\nमम दृशिगोचर एष आविरात्मा॥ (१०)",
        "तमिममहमजं शरीरभाजां\nहृदि हृदि धिष्ठितमात्मकल्पितानाम्।\nप्रतिदृशमिव नैकधार्कमेकं\nसमधिगतोऽस्मि विधूतभेदमोहः॥ (११)"
      ],
      translations: [
        "भीष्मदेव ने कहा : अभी तक मेरा मन, अनुभूति तथा इच्छाएँ विभिन्न सांसारिक विषयों तथा कर्तव्यों में लगी थीं, किन्तु अब मुझे उन्हें सर्वशक्तिमान भगवान् श्रीकृष्ण में एकाग्र करने दें। वे सदैव आत्मतुष्ट रहने वाले हैं, किन्तु कभी-कभी भक्तों के नायक होने के नाते वे इस भौतिक जगत में अवतरित होकर दिव्य आनन्द प्राप्त करते हैं, यद्यपि यह सम्पूर्ण भौतिक जगत उन्हीं के द्वारा सृजित है।",
        "श्रीकृष्ण अर्जुन के परम घनिष्ठ मित्र हैं। वे इस धरा पर अपने दिव्य शरीर सहित प्रकट हुए हैं, जो तमाल वृक्ष के समान श्याम वर्ण का है। उनका यह रूप तीनों लोकों को मुग्ध करने वाला है। उनका चमचमाता पीताम्बर तथा चन्दन-चर्चित अलकों से सुशोभित मुखकमल मेरे निष्काम आकर्षण का विषय बने।",
        "युद्धक्षेत्र में घोड़ों की टापों से उड़ी धूल से भगवान् कृष्ण के बिखरे हुए केश धूसरित हो गये थे और श्रम के कारण उनका मुखकमल स्वेद-बिन्दुओं (पसीने) से सुशोभित था। मेरे तीक्ष्ण बाणों से उनके दिव्य शरीर पर बने घावों की शोभा का वे आनन्द ले रहे थे। मेरा मन उन्हीं श्रीकृष्ण में लीन रहे।",
        "अपने सखा अर्जुन के आदेश का पालन करते हुए, भगवान् श्रीकृष्ण दोनों सेनाओं के मध्य में रथ को ले जाकर खड़े हो गये और उन्होंने अपनी कृपापूर्ण दृष्टि मात्र से शत्रु-पक्ष के सैनिकों की आयु क्षीण कर दी। उन पार्थ-सखा श्रीकृष्ण में मेरा मन नित्य अनुरक्त रहे।",
        "जब युद्धक्षेत्र में अर्जुन अपने सामने स्वजनों को देखकर मोहग्रस्त हो रहा था, तब भगवान् ने दिव्य आत्म-ज्ञान (भगवद्गीता) देकर उसके अज्ञान को समूल नष्ट कर दिया। उन परम पुरुषोत्तम भगवान् के चरणकमलों में मेरा नित्य अनुराग हो।",
        "मेरी प्रतिज्ञा को सत्य सिद्ध करने और अपनी प्रतिज्ञा को त्यागकर, वे रथ से नीचे कूद पड़े और रथ का पहिया उठाकर मेरी ओर बड़ी तेजी से दौड़े, जिस प्रकार कोई सिंह हाथी को मारने के लिए झपटता है। इस वेग में उनका उत्तरीय वस्त्र (दुपट्टा) भी मार्ग में गिर गया।",
        "भगवान् श्रीकृष्ण जो समस्त मुक्ति के दाता (मुकुन्द) हैं, वे ही मेरे जीवन के एकमात्र चरम लक्ष्य बनें। युद्धभूमि में जब मैं आततायी बनकर उन पर पैने बाण बरसा रहा था, तब वे क्रुद्ध होकर मुझे मारने के लिए दौड़े। उनका कवच छिन्न-भिन्न हो चुका था और शरीर रक्त से सुशोभित था।",
        "मृत्यु के इस अन्तिम क्षण में मेरा परम आकर्षण भगवान् श्रीकृष्ण के प्रति हो। मैं अपना ध्यान अर्जुन के उस दिव्य सारथी पर केन्द्रित करता हूँ, जो दाहिने हाथ में चाबुक और बाएँ हाथ में लगाम थामे अर्जुन के रथ की पूर्ण रक्षा कर रहे थे। युद्धभूमि में जिनका दर्शन करके मरने वाले सभी योद्धाओं ने अपना मूल आध्यात्मिक स्वरूप प्राप्त किया।",
        "मेरा मन उन भगवान् श्रीकृष्ण में एकाग्र हो, जिनकी मनोहारी चाल, मुग्धकारी लीलाओं, मधुर मुस्कान और प्रेमभरी चितवन ने व्रजधाम की गोपियों को पूर्णतया वशीभूत कर लिया था। रासलीला में जब भगवान् अन्तर्धान हो गये, तब प्रेम में उन्मत्त होकर गोपियाँ भगवान् की ही दिव्य लीलाओं का अनुकरण करने लगी थीं।",
        "महाराज युधिष्ठिर के राजसूय यज्ञ की विशाल सभा में, जहाँ संसार भर के महान् ऋषि-मुनि और सम्राट उपस्थित थे, भगवान् श्रीकृष्ण की ही सर्वोपरि पुरुषोत्तम के रूप में अग्रपूजा की गई थी। वही परम पुरुषोत्तम प्रभु आज मेरे सम्मुख साक्षात् प्रकट हैं और मेरी दृष्टि के समक्ष उपस्थित हैं।",
        "अब मैं द्वैतभाव के समस्त मोह से पूर्णतः मुक्त होकर, अपने सम्मुख उपस्थित अजन्मा भगवान् श्रीकृष्ण में समाधिस्थ हूँ। वे ही प्रत्येक जीव के हृदय में परमात्मा रूप में स्थित हैं। जिस प्रकार आकाश में सूर्य एक ही है किन्तु भिन्न-भिन्न स्थानों से देखने पर अलग-अलग प्रतीत होता है, उसी प्रकार एक ही परमेश्वर सर्वत्र विद्यमान हैं।"
      ]
    },
    "38": {
      title: "श्री श्री यमुनाष्टकम् (Sri Sri Yamunastakam)",
      transliterations: [
        "भ्रातुरन्तकस्य पत्तनेऽभिपत्तिहारिणी\nप्रेक्षयातिपापिनोऽपि पापसिन्धुतारिणी।\nनीरमाधुरीभिरप्यशेषचित्तबन्धिनी\nमां पुनातु सर्वदारविन्दबन्धुसन्दिनी॥ (१)",
        "हारिवारिधारयाभिमण्डितोरुखाण्डवा\nपुण्डरीकमण्डलोद्यदण्डजालिताण्डवा।\nस्नानकामपामरोग्रामपापसम्पदन्धिनी\nमां पुनातु सर्वदारविन्दबन्धुसन्दिनी॥ (२)",
        "शीकराभिमृष्टजन्तुदु्र्विपाकमर्दिनी\nनन्दनन्दनान्तरङ्गभक्तिपूरवर्धिनी।\nतीरसङ्गमाभिलाषिमाङ्गलानुबन्धिनी\nमां पुनातु सर्वदारविन्दबन्धुसन्दिनी॥ (३)",
        "द्वीपचक्रवालजुष्टसप्तसिन्धुभेदिनी\nश्रीमुकुन्दनिर्मितोरुदिव्यकेलिवेदिनी।\nकान्तिकन्दलीभिरिन्द्रनीलवृन्दनिन्दिनी\nमां पुनातु सर्वदारविन्दबन्धुसन्दिनी॥ (४)",
        "माथुरेण मण्डलेन चारुणाभिमण्डिता\nप्रेमनद्धवैष्णवाध्ववर्धनाय पण्डिता।\nऊर्मिदोर्विलासपद्मनाभपादवन्दिनी\nमां पुनातु सर्वदारविन्दबन्धुसन्दिनी॥ (५)",
        "रम्यतीररम्भमाणगोकदम्बभूषिता\nदिव्यगन्धभाक्कदम्बपुष्पराजिरूषिता।\nनन्दसूनुभक्तसङ्घसङ्गमाभिनन्दिनी\nमां पुनातु सर्वदारविन्दबन्धुसन्दिनी॥ (६)",
        "फुल्लपक्षमल्लिकाक्षहंसलक्षकूजिता\nभक्तिविद्धदेवसिद्धकिन्नरालिपूलिता।\nतीरगन्धवाहगन्धजन्मबन्धगन्धिनी\nमां पुनातु सर्वदारविन्दबन्धुसन्दिनी॥ (७)",
        "चिद्विलासवारिपूरभूर्भुवःस्वरापिनी\nकीर्तितापि दुर्मदोरुपापमर्मतापिनी।\nवल्लवेन्द्रनन्दनाङ्गरागभङ्गगन्धिनी\nमां पुनातु सर्वदारविन्दबन्धुसन्दिनी॥ (८)",
        "तुष्टबुद्धिरष्टकेन निर्मलोर्मिचेष्टितां\nत्वामनेन भानुपुत्रि! सर्वदेववेष्टिताम्।\nयः स्तवीति वर्धयस्व सर्वपापमोचने!\nभक्तिपूरमस्य देवि! पुण्डरीकलोचने!॥ (९)"
      ],
      translations: [
        "जो अपने भ्राता यमराज के भवन की भयानक यातनाओं से जीवों की रक्षा करती हैं, जिनके दर्शन मात्र से महापापी भी पाप-सागर को सहज ही तर जाते हैं, और जिनके जल का दिव्य माधुर्य समस्त हृदयों को आकृष्ट कर लेता है—वे सूर्यपुत्री श्रीयमुना देवी मुझे सदा पवित्र करें।",
        "जो अपनी मनोहर जलधारा से विशाल खाण्डव वन को सुशोभित करती हैं, जिनके कमल-समूहों में नाचते हुए जल-पक्षी क्रीड़ा करते हैं, और जो स्नान की इच्छा रखने वाले पतितों के उग्र पापों को समूल नष्ट कर देती हैं—वे सूर्यपुत्री श्रीयमुना देवी मुझे सदा पवित्र करें।",
        "जिनके जल के छींटों के स्पर्श मात्र से जीवों के भयानक प्रारब्ध नष्ट हो जाते हैं, जो श्रीनन्दनन्दन श्रीकृष्ण के प्रति अन्तरंग प्रेमाभक्ति की बाढ़ ला देती हैं, और अपने तट का संग चाहने वालों का परम मंगल करती हैं—वे सूर्यपुत्री श्रीयमुना देवी मुझे सदा पवित्र करें।",
        "जो सातों द्वीपों और सातों समुद्रों को पार करती हैं, जो श्रीमुकुन्द की अनेक दिव्य लीलाओं की साक्षी हैं, और जिनकी दिव्य श्याम कान्ति इन्द्रनीलमणि की आभा को भी लज्जित करती है—वे सूर्यपुत्री श्रीयमुना देवी मुझे सदा पवित्र करें।",
        "जो परम मनोहर मथुरा मण्डल द्वारा सुशोभित हैं, जो प्रेममयी वैष्णव-भक्ति के मार्ग को बढ़ाने में परम निपुण हैं, और अपनी चंचल तरंग रूपी भुजाओं से भगवान् पद्मनाभ के चरणकमलों की वन्दना करती हैं—वे सूर्यपुत्री श्रीयमुना देवी मुझे सदा पवित्र करें।",
        "जिनके रमणीय तट रंभाती हुई सुन्दर गौओं के समूह से सुशोभित हैं, जो सुगन्धित कदम्ब पुष्पों की पंक्तियों से आच्छादित हैं, और जो श्रीकृष्ण के भक्तों के समागम से सदा प्रसन्न रहती हैं—वे सूर्यपुत्री श्रीयमुना देवी मुझे सदा पवित्र करें।",
        "जो सहस्रों कलरव करते श्वेत हंसों से गुंजायमान हैं, जिनकी पूजा देव, सिद्ध और किन्नर भक्ति-भाव से करते हैं, और जिनके तट की सुगन्धित वायु के स्पर्श मात्र से जन्म-मृत्यु का बन्धन कट जाता है—वे सूर्यपुत्री श्रीयमुना देवी मुझे सदा पवित्र करें।",
        "जो भूः, भुवः और स्वः तीनों लोकों में चिन्मय जल के रूप में प्रवाहित होती हैं, जिनका नाम-कीर्तन घोर पापियों के पापों को भस्म कर देता है, और जिनके जल में नन्दनन्दन श्रीकृष्ण के अंगराग (चन्दन) की दिव्य सुगन्ध महकती है—वे सूर्यपुत्री श्रीयमुना देवी मुझे सदा पवित्र करें।",
        "हे सूर्यपुत्री! हे कमलनयनी! हे सर्व-पाप-विमोचिनी देवि! जो व्यक्ति प्रसन्न चित्त से आपके इस अष्टक द्वारा आपकी स्तुति करता है, आप कृपा करके उसके हृदय में भगवान् श्रीकृष्ण के प्रति विशुद्ध प्रेमाभक्ति के प्रवाह को बढ़ा दीजिए।"
      ]
    },
    "39": {
      title: "भुलिया तोमारे, संसारे आसिया",
      transliterations: [
        "भुलिया तोमारे, संसारे आसिया, पेये नाना-विध व्यथा।\nतोमार चरणे, आसियाछि आमि, बोलिबो दुःखेर कथा॥",
        "जननी जठरे, छिलाम जखोन, विषम बन्धन-पाशे।\nएक-बार प्रभु! देखा दिया मोरे, वञ्चिले ए दीन दासे॥",
        "तखोन भाविनु, जनम पाइया, कोरिबो भजन तव।\nजनम होइलो, पदि’ माया-जाले, ना होइलो ज्ञान-लव॥",
        "आदरेर छेले, स्व-जनेर कोले, हासिया कांटानु काल।\nजनक जननी-स्नेहेते भुलिया, संसार लागिलो भाल॥",
        "क्रमे दिन दिन, बालक होइया, खेलिनु बालक-सह।\nआर किछु दिने, ज्ञान उपजिलो, पाठ पोड़ि अहर-अहः॥",
        "विद्यार गौरवे, भ्रमि’ देशे देशे, धन उपार्जन करि।\nस्व-जन पालन, करि एक-मने, भुलिनु तोमारे, हरि!॥",
        "वार्धक्ये एखोन, भकतिविनोद, काँदिया कातर अति।\nना भजिया तोरे, दिन वृथा गेलो, एखोन कि हबे गति?॥"
      ],
      translations: [
        "हे प्रभु! आपको भूलकर इस संसार में आने पर मैंने नाना प्रकार के कष्ट भोगे हैं। अब मैं आपके श्रीचरणों में उपस्थित होकर अपने दुःख की व्यथा सुना रहा हूँ।",
        "जब मैं माता के गर्भ में असह्य बन्धन में पड़ा था, तब हे प्रभु! आपने एक बार मुझे अपना दर्शन दिया, किन्तु फिर इस दीन दास को छोड़ दिया।",
        "उस समय मैंने संकल्प किया था कि जन्म लेते ही मैं आपका अनन्य भजन करूँगा। किन्तु जन्म लेते ही मैं माया के जाल में ऐसा फँसा कि मुझे ज्ञान का लेशमात्र भी स्मरण न रहा।",
        "सम्बन्धियों की गोद में लाड़ला बेटा बनकर मैंने हँसते-खेलते समय बिता दिया। माता-पिता के स्नेह में डूबकर मुझे यह भौतिक संसार ही बहुत प्यारा लगने लगा।",
        "धीरे-धीरे बड़ा होकर बालकों के साथ खेल-कूद में लगा रहा। कुछ समय बाद जब बुद्धि विकसित हुई, तो रात-दिन सांसारिक विद्या पढ़ने में लीन हो गया।",
        "विद्या के अभिमान में देश-विदेश भ्रमण करके धन कमाया और एकाग्र मन से कुटुम्ब का पालन करते हुए, हे हरि! मैं आपको सर्वथा भूल गया!",
        "अब बुढ़ापे में यह भक्तिविनोद अत्यधिक व्याकुल होकर रो रहा है। आपका भजन किए बिना पूरा जीवन व्यर्थ बीत गया, अब मेरी क्या गति होगी?"
      ]
    },
    "40": {
      title: "बोलो हरि बोलो",
      transliterations: [
        "बोलो हरि बोलो, बोलो हरि बोलो, बोलो हरि बोलो।\nमनेर आनन्दे, भाइ, बोलो हरि बोलो।\nबोलो हरि बोलो, बोलो हरि बोलो, बोलो हरि बोलो।\nजनमे जनमे सुखे बोलो हरि बोलो॥",
        "बोलो हरि बोलो, बोलो हरि बोलो, बोलो हरि बोलो।\nमानव-जनम पे’ये, भाइ, बोलो हरि बोलो।\nबोलो हरि बोलो, बोलो हरि बोलो, बोलो हरि बोलो।\nसुखे थाको, दुःखे थाको, बोलो हरि बोलो॥",
        "बोलो हरि बोलो, बोलो हरि बोलो, बोलो हरि बोलो।\nसम्पदे विपदे, भाइ, बोलो हरि बोलो।\nबोलो हरि बोलो, बोलो हरि बोलो, बोलो हरि बोलो।\nगृहे थाको, वने थाको, बोलो हरि बोलो।\nकृष्णेर संसारे थाकि’ बोलो हरि बोलो॥",
        "बोलो हरि बोलो, बोलो हरि बोलो, बोलो हरि बोलो।\nअसत-सङ्ग छाड़ि’, भाइ, बोलो हरि बोलो।\nबोलो हरि बोलो, बोलो हरि बोलो, बोलो हरि बोलो।\nवैष्णव-चरणे पोड़ि’ बोलो हरि बोलो॥",
        "बोलो हरि बोलो, बोलो हरि बोलो, बोलो हरि बोलो।\nगौर-नित्यानन्द बोलो, गौर-गदाधर बोलो, गौर-अद्वैत बोलो॥"
      ],
      translations: [
        "श्रीहरि का नाम बोलो! हे भाइयो! मन के परम आनन्द से हरि-नाम बोलो! जन्म-जन्मान्तर तक सुखपूर्वक केवल श्रीहरि का नाम बोलो!",
        "श्रीहरि का नाम बोलो! हे भाइयो! यह दुर्लभ मानव जन्म पाकर हरि-नाम बोलो! चाहे तुम सुख में रहो या दुःख में, निरन्तर श्रीहरि का नाम बोलो!",
        "श्रीहरि का नाम बोलो! हे भाइयो! चाहे सम्पत्ति हो या विपत्ति, हरि-नाम बोलो! चाहे घर में रहो या वन में रहो, श्रीकृष्ण के संसार में रहते हुए केवल हरि-नाम बोलो!",
        "श्रीहरि का नाम बोलो! हे भाइयो! कुसंग (अभक्तों का संग) त्यागकर हरि-नाम बोलो! और वैष्णवों के श्रीचरणों में नतमस्तक होकर हरि-नाम बोलो!",
        "श्रीहरि का नाम बोलो! श्रीगौर-नित्यानन्द बोलो, श्रीगौर-गदाधर बोलो, और श्रीगौर-अद्वैत प्रभु का जयघोष करो!"
      ]
    },
    "41": {
      title: "मार्कीने भागवत धर्म (बोरो-कृपा कोइले कृष्ण)",
      transliterations: [
        "बोरो-कृपा कोइले कृष्ण अधमेर प्रति।\nकि लागियानिले हेथा कोरो एबे गति॥ (१)",
        "आछे किछु कार्य तव एइ अनुमाने।\nनहे केनो आनिबेन एइ उग्र-स्थाने॥ (२)",
        "रजः-तमोगुणे एरा सबाइ आच्छन्न।\nवासुदेव-कथा-रुचि नहे से प्रसन्न॥ (३)",
        "तबे यदि तव कृपा हय अहैतुकी।\nसकल-इ सम्भव हय तुमि से कौतुकी॥ (४)",
        "कि भावे बुझाले तारा बुझे सेइ रस।\nएत कृपा करो प्रभु करि निज-वश॥ (५)",
        "तोमार इच्छाय सब हय माया-वश।\nतोमार इच्छाय नाश मायार परश॥ (६)",
        "तव इच्छा हय यदि तादेर उद्धार।\nबुझिबे निश्चय तबे कथा से तोमार॥ (७)",
        "भागवतेर कथा से तव अवतार।\nधीर हइया शुने यदि काने बार बार॥ (८)",
        "शृण्वतां स्वकथाः कृष्णः पुण्यश्रवणकीर्तनः।\nहृद्यन्तःस्थो ह्यभद्राणि विधुनोति सुहृत् सताम्॥\nनष्टप्रायेष्वभद्रेषु नित्यं भागवतसेवया।\nभगवत्युत्तमश्लोके भक्तिर्भवति नैष्ठिकी॥\nतदा रजस्तमोभावाः कामलोभादयश्च ये।\nचेत एतैरनाविद्धं स्थितं सत्त्वे प्रसीदति॥\nएवं प्रसन्नमनसो भगवद्भक्तियोगतः।\nभगवत्तत्त्वविज्ञानं मुक्तसङ्गस्य जायते॥\nभिद्यते हृदयग्रन्थिश्छिद्यन्ते सर्वसंशयाः।\nक्षीयन्ते चास्य कर्माणि दृष्ट एवात्मनीश्वरे॥ (९)",
        "रजस्तम हते तबे पाइबे निस्तार।\nहृदयेर अभद्र सब घुचिबे ताहार॥ (१०)",
        "कि को’रे बुझाबो कथा बडो सेइ चाहि।\nक्षुद्र आमि दीन-हीन कोनो शक्ति नाहि॥ (११)",
        "अथच एनेछो प्रभु कथा बोलिबा’रे।\nये तोमार इच्छा प्रभु करो एइ बारे॥ (१२)",
        "अखिल-जगत-गुरु! वचन से आमार।\nअलङ्कृत करिबारे क्षमता तोमार॥ (१३)",
        "तव कृपा ह’ले मोर कथा शुद्ध हबे।\nशुनिय़ा सबार शोक-दुःख ये घुचिबे॥ (१४)",
        "आनियाछो यदि प्रभु आमारे नाचाते।\nनाचाओ नाचाओ प्रभु नाचाओ से-मते।\nकाष्ठेर पुत्तली यथा नाचाओ से-मते॥ (१५)",
        "भक्ति नाइ वेद नाइ नामे खूब दरो।\n\"भक्तिवेदान्त\" नाम एबे सार्थक करो॥ (१६)"
      ],
      translations: [
        "हे मेरे प्रिय भगवान् श्रीकृष्ण! आपने इस अधम और अयोग्य जीव पर बहुत बड़ी कृपा की है। किन्तु मुझे नहीं पता कि आप मुझे यहाँ (इस पाश्चात्य देश में) क्यों लाए हैं? अब जैसा आप चाहें, वैसा मेरा विधान करें।",
        "मेरा ऐसा अनुमान है कि आपका यहाँ अवश्य कोई विशेष कार्य है, अन्यथा आप मुझे इस भयानक एवं घोर भौतिकतावादी स्थान पर क्यों लाते?",
        "यहाँ के अधिकांश लोग रजोगुण और तमोगुण से पूरी तरह आच्छादित हैं। भौतिक जीवन में मग्न होने के कारण भगवान् वासुदेव की दिव्य कथा में उनकी कोई रुचि या प्रसन्नता नहीं है।",
        "परन्तु यदि आपकी अहैतुकी कृपा हो जाए, तो सब कुछ सम्भव हो सकता है; क्योंकि आप परम कौतुकी (चमत्कार करने वाले सर्वसमर्थ) हैं।",
        "मैं इन्हें किस प्रकार समझाऊँ जिससे ये भक्ति-रस को समझ सकें? हे प्रभु! आप इन पर ऐसी कृपा कीजिए कि ये आपके वशीभूत हो जाएँ।",
        "आपकी ही इच्छा से सभी जीवात्माएं माया के वश में होती हैं और आपकी ही इच्छा से माया का यह प्रभाव समूल नष्ट हो जाता है।",
        "यदि आपकी इच्छा इनके उद्धार की है, तो ये आपकी इस दिव्य वाणी को निश्चय ही समझ सकेंगे।",
        "श्रीमद्भागवतम् की दिव्य कथा आपका ही साक्षात् वाङ्मय अवतार है। यदि कोई धीर पुरुष इसे बार-बार विनम्र भाव से श्रवण करे, तो वह अवश्य आपके सन्देश को समझ जाएगा।",
        "श्रीमद्भागवतम् (1.2.17-21) में कहा गया है: 'भगवान् श्रीकृष्ण जो प्रत्येक के हृदय में परमात्मा रूप में स्थित हैं और सत्यनिष्ठ भक्तों के परम हितैषी हैं, वे अपने विषय में सुनने की इच्छा रखने वाले भक्त के हृदय से समस्त भौतिक वासनाओं को धो डालते हैं। नित्य भागवत सेवा और शुद्ध भक्त की सेवा से हृदय के समस्त अमंगल नष्ट हो जाते हैं और उत्तमश्लोक भगवान् में अचल प्रेमाभक्ति स्थापित हो जाती है। तब रजोगुण और तमोगुण के प्रभाव—काम, लोभ आदि नष्ट हो जाते हैं और चित्त सत्त्वगुण में स्थिर होकर प्रसन्न हो जाता है। इस प्रकार मुक्त अवस्था में भगवद्भक्ति के प्रभाव से उसे भगवत्तत्त्व का यथार्थ विज्ञान प्राप्त होता है। हृदय की अज्ञान-ग्रंथि कट जाती है, समस्त संशय छिन्न-भिन्न हो जाते हैं और सकाम कर्मों की श्रृंखला समाप्त हो जाती है।' ",
        "तब वे रजोगुण और तमोगुण के बन्धन से मुक्ति पा सकेंगे और उनके हृदय का सारा अमंगल दूर हो जाएगा।",
        "मैं उन्हें आपकी यह बात कैसे समझाऊँगा? मैं बहुत ही तुच्छ, दीन-हीन और अयोग्य हूँ, मुझमें अपनी कोई शक्ति नहीं है।",
        "तथापि हे प्रभु! आप मुझे यहाँ अपनी कथा कहने के लिए लाए हैं। अब हे प्रभु! जैसी आपकी इच्छा हो, वैसा ही कीजिए।",
        "हे अखिल ब्रह्माण्ड के जगद्गुरु! मेरे ये शब्द बड़े साधारण हैं, किन्तु इनमें दिव्य प्रभाव और अलंकार भरने की सामर्थ्य केवल आप में ही है।",
        "यदि आपकी अहैतुकी कृपा होगी, तभी मेरी वाणी शुद्ध और प्रभावशाली बनेगी, जिसे सुनकर इन सब लोगों के सारे शोक और दुःख दूर हो जाएँगे।",
        "यदि हे प्रभु! आप मुझे यहाँ नचाने के लिए ही लाए हैं, तो मुझे नचाइए, नचाइए प्रभु! जिस प्रकार काठ की कठपुतली को नचाया जाता है, उसी प्रकार मुझे अपनी इच्छानुसार नचाइए!",
        "मुझमें न तो कोई भक्ति है और न ही वेदों का कोई ज्ञान, किन्तु आपके पावन नाम पर मेरा अटूट विश्वास है। मुझे 'भक्तिवेदान्त' की उपाधि दी गई है, अब यदि आप चाहें, तो मेरे इस 'भक्तिवेदान्त' नाम को सार्थक कर दीजिए।"
      ]
    },
    "42": {
      title: "बड़ो सुखेर खबर गाइ",
      transliterations: [
        "बड़ो सुखेर खबर गाइ।\nसुरभि-कुञ्जेते नाम-हाट खुलियाछे, ठाकुर नित्यानन्द महाशय॥ (ध्रुव)",
        "बड़ो सुखेर खबर गाइ, सुरभि-कुञ्जेते।\nनित्यानन्द महाशय, नाम-हाट खुलियाछे, सुरभि-कुञ्जेते॥ (१)",
        "ता’रे श्रद्धा-मूल्ये नाम विलाय, सुरभि-कुञ्जेते।\nजाति-कुल ना विचारि’ सबारे बिलाय, सुरभि-कुञ्जेते॥ (२)",
        "यदि नाम किनिबे, भाइ, सुरभि-कुञ्जेते।\nआर किछु नाहि चाहि, श्रद्धा-मात्र चाए, सुरभि-कुञ्जेते॥ (३)",
        "भकतिविनोद काँदि’ कय, सुरभि-कुञ्जेते।\nनित्यानन्द-पद विने, गति नाहि आर, सुरभि-कुञ्जेते॥ (४)"
      ],
      translations: [
        "मैं एक बड़े ही सुख का समाचार सुना रहा हूँ! श्री गोद्रुम द्वीप के सुरभि-कुञ्ज में दयालु ठाकुर श्री नित्यानन्द महाशय ने दिव्य 'हरिनाम का बाज़ार' (नाम-हाट) खोल दिया है!",
        "सुरभि-कुञ्ज में नित्यानन्द महाशय ने जीव-उद्धार हेतु प्रेमामृत नाम-हाट खोला है।",
        "वे किसी जाति या कुल का विचार किए बिना केवल 'श्रद्धा' के मूल्य पर इस अनमोल हरिनाम का वितरण कर रहे हैं।",
        "हे भाई! यदि तुम इस हरिनाम को खरीदना चाहते हो, तो वहाँ कोई अन्य धन नहीं चाहिए, केवल तुम्हारी निष्कपट श्रद्धा ही इसका मूल्य है!",
        "भक्तिविनोद रोते हुए कहते हैं कि श्री नित्यानन्द प्रभु के चरण-कमलों के अतिरिक्त इस संसार में जीवों की अन्य कोई गति नहीं है।"
      ]
    },
    "43": {
      title: "ब्रह्म बोले चतुर् मुख (Brahma Bole Catur Mukha)",
      transliterations: [
        "ब्रह्म बोले चतुर् मुख कृष्ण कृष्ण हरे हरे\nमहादेव पञ्च मुखे राम राम हरे हरे",
        "एइ नाम् ब्रह्म जपे चतुर्-मुखे कृष्ण कृष्ण हरे हरे\nएइ नाम् नारद जपे वीणा यन्त्रे कृष्ण कृष्ण हरे हरे\nएइ नाम् शिव जपे पञ्च मुखे कृष्ण कृष्ण हरे हरे"
      ],
      translations: [
        "ब्रह्मा जी अपने चार मुखों से जपते हैं, \u0027कृष्ण कृष्ण हरे हरे।\u0027 महादेव अपने पाँच मुखों से जपते हैं, \u0027राम राम हरे हरे।\u0027",
        "यह महामंत्र ब्रह्मा जी अपने चार मुखों से जपते हैं, नारद मुनि अपनी वीणा के तारों पर जपते हैं, और महादेव अपने पाँच मुखों से जपते हैं।"
      ]
    },

    "44": {
      title: "चरण कमल बन्दौ हरिराई",
      transliterations: [
        "चरण कमल बन्दौ हरिराई।\nजाकी कृपा पङ्गु गिरि लङ्घै, अन्धे को सब कछु दरसाई॥",
        "बहिरो सुनै, मूक पुनि बोलै, रङ्क चले सिर छत्र धराई।\nसूरदास स्वामी करुणामय, बार-बार बन्दौ तेहि पाई॥"
      ],
      translations: [
        "मैं उन परम प्रभु श्रीहरि के चरण-कमलों की वन्दना करता हूँ, जिनकी अहैतुकी कृपा से लंगड़ा व्यक्ति भी विशाल पर्वत लांघ जाता है और अन्धे को सब कुछ दिखाई देने लगता है।",
        "बहरा व्यक्ति सुनने लगता है, गूँगा पुनः बोलने लगता है और निर्धन-कंगाल व्यक्ति राजा बनकर छत्र धारण करके चलने लगता है। सूरदास जी कहते हैं कि ऐसे परम करुणामय स्वामी के पावन चरणों की मैं बारम्बार वन्दना करता हूँ।"
      ]
    },
    "45": {
      title: "श्री श्री शिक्षाष्टकम्",
      transliterations: [
        "चेतो-दर्पण-मार्जनं भव-महा-दावाग्नि-निर्वापणं\nश्रेयः-कैरव-चन्द्रिका-वितरणं विद्या-वधू-जीवनम्।\nआनन्दाम्बुधि-वर्धनं प्रति-पदं पूर्णामृतास्वादनं\nसर्वात्म-स्नपनं परं विजयते श्री-कृष्ण-संकीर्तनम्॥",
        "नाम्नामकारि बहुधा निज-सर्व-शक्तिस्\nतत्रार्पिता नियमितः स्मरणे न कालः।\nएतादृशी तव कृपा भगवन् ममापि\nदुर्दैवमीदृशमिहाजनि नानूरागः॥",
        "तृणादपि सुनीचेन तरोरपि सहिष्णुना।\nअमानिना मानदेन कीर्तनीयः सदा हरिः॥",
        "न धनं न जनं न सुन्दरीं कवितां वा जगदीश कामये।\nमम जन्मनि जन्मनीश्वरे भवताद् भक्तिरहौतुकी त्वयि॥",
        "अयि नन्दतनूज किङ्करं पतितं मां विषमे भवाम्बुधौ।\nकृपया तव पादपङ्कज-स्थित-धूली-सदृशं विचिन्तय॥",
        "नयनं गलदश्रुधारया वदनं गद्गदरुद्धया गिरा।\nपुलकैर्निचितं वपुः कदा तव नाम-ग्रहणे भविष्यति॥",
        "युगायितं निमेषेण चक्षुषा प्रावृषायितम्।\nशून्यायितं जगत् सर्वं गोविन्द-विरहेण मे॥",
        "आश्लिष्य वा पादरतां पिनष्टु माम् अदर्शनान् मर्महतां करोतु वा।\nयथा तथा वा विदधातु लम्पटो मत्-प्राण-नाथस् तु स एव नापरः॥"
      ],
      translations: [
        "श्री कृष्ण-संकीर्तन की परम विजय हो, जो चित्त रूपी दर्पण का मार्जन करता है, भव-रूपी दावाग्नि को शान्त करता है, कल्याण रूपी चन्द्रिका का वितरण करता है और आनन्द के अमृत-सिन्धु को निरन्तर बढ़ाता है।",
        "हे प्रभु! आपने अपने नामों में अपनी समस्त दिव्य शक्तियाँ निहित कर दी हैं और उनके स्मरण का कोई काल-नियम भी नहीं रखा; किन्तु मेरा ऐसा दुर्भाग्य है कि इन परम कल्याणकारी नामों में मेरा कोई अनुराग नहीं है।",
        "स्वयं को तृण से भी अधिक दीन-हीन मानकर, वृक्ष के समान सहनशील होकर, स्वयं मान की इच्छा न रखकर दूसरों को यथायोग्य मान देते हुए सदा हरिनाम का कीर्तन करना चाहिए।",
        "हे जगदीश! मुझे न धन चाहिए, न अनुयायी, न कोई सुन्दरी स्त्री और न ही विद्वत्ता; मेरी तो केवल यही प्रार्थना है कि जन्म-जन्मान्तर में मुझे आपकी अहैतुकी प्रेमाभक्ति प्राप्त हो।",
        "हे नन्दतनय! मैं आपका नित्य दास हूँ, किन्तु अपने कर्मों के कारण इस घोर भवसागर में गिर गया हूँ। कृपा करके मुझे अपने चरण-कमलों की धूलि का एक कण मानकर स्वीकार कर लीजिए।",
        "हे प्रभु! आपका नाम लेते हुए कब मेरे नेत्रों से अश्रु-धारा प्रवाहित होगी, कब मेरा कण्ठ गद्गद वाणी से अवरुद्ध होगा और कब मेरा सम्पूर्ण शरीर रोमांचित हो उठेगा?",
        "हे गोविन्द! आपके विरह में मुझे एक-एक पल युगों के समान लम्बा प्रतीत हो रहा है, मेरे नेत्रों से वर्षा ऋतु के समान अश्रु बह रहे हैं और सम्पूर्ण जगत शून्य दिखाई दे रहा है।",
        "वे श्रीकृष्ण चाहें तो अपने श्रीचरणों में लिपटे हुए मुझे गाढ़ आलिंगन दें, अथवा दर्शन न देकर मेरे हृदय को विदीर्ण कर दें; वे स्वेच्छाचारी प्रभु मेरे साथ जैसा भी व्यवहार करें, वे ही सदा मेरे एकमात्र प्राणनाथ रहेंगे।"
      ]
    },
    "46": {
      title: "देखिते देखिते भुलिब वा कबे",
      transliterations: [
        "देखिते देखिते, भुलिबो वा कबे, निज-स्थूल-परिचय।\nनयने हेरिबो, ब्रज-पुर-शोभा, नित्य चिद्-आनन्द-मय॥",
        "वृषभानु-पुरे, जनम लइबो, यावटे विवाह ह’बे।\nब्रज-गोपी-भाव, होइबे स्वभाव, आनो-भाव ना रोहिबे॥",
        "निज-सिद्ध-देह, निज-सिद्ध-नाम, निज-रूप-स्व-वसन।\nराधा-कृपा-बले, लभिबो वा कबे, कृष्ण-प्रेम-प्रकरण॥",
        "यमुना-सलिल-आहरणे गिया, बुझिबो युगल-रस।\nप्रेम-मुग्ध ह’ये, पागलिनी-प्राय, गाइबो राधार यश॥"
      ],
      translations: [
        "देखते ही देखते मैं कब अपने इस स्थूल भौतिक शरीर के मिथ्या परिचय को भूल पाऊँगा? और अपनी आँखों से नित्य चिन्मय आनन्द से परिपूर्ण ब्रजधाम की अनुपम शोभा का दर्शन कर सकूँगा?",
        "तब मैं राजा वृषभानु के नगर (बरसाना) में जन्म लूँगा और निकटवर्ती यावट ग्राम में मेरा विवाह होगा। केवल एक सरल ब्रज-गोपी का भाव ही मेरा स्वभाव बनेगा, अन्य कोई भौतिक भाव शेष नहीं रहेगा।",
        "श्रीराधारानी की अहैतुकी कृपा के बल से मुझे अपना नित्य सिद्ध-देह, सिद्ध-नाम, दिव्य रूप और वेशभूषा कब प्राप्त होगी, जिससे मैं श्रीकृष्ण के प्रेमामृत का आस्वादन कर सकूँ?",
        "यमुना से जल भरने के बहाने जाकर मैं श्रीराधा-कृष्ण के युगल माधुर्य-रस का अनुभव करूँगा और उनके दिव्य प्रेम में मुग्ध होकर एक पगली की भाँति अहर्निश श्रीराधा की महिमा का गान करूँगा।"
      ]
    },
    "47": {
      title: "श्री श्री गङ्गा स्तोत्रम् (देवि सुरेश्वरि भगवति गङ्गे)",
      transliterations: [
        "देवि सुरेश्वरि भगवति गङ्गे त्रिभुवन-तारिणि तरल तरङ्गे।\nशङ्कर-मौलि-विहारिणि विमले मम मतिरास्तां तव पद-कमले॥ (१)",
        "भागिरथि सुख-दायिनि मातस्तव जल-महिमा निगमे ख्यातः।\nनाहं जाने तव महिमानं पाहि कृपामयि मामज्ञानम्॥ (२)",
        "हरि-पद-पाद्य-तरङ्गिणि गङ्गे हिम-विधु-मुक्ता-धवल-तरङ्गे।\nदूरीकुरु मम दुष्कृति-भारं कुरु कृपया भव-सागर-पारम्॥ (३)",
        "तव जलममलं येन निपीतं परम-पदं खलु तेन गृहीतम्।\nमातर्गङ्गे त्वयि यो भक्तः किल तं द्रष्टुं न यमः शक्तः॥ (४)",
        "पतितोद्धारिणि जाह्नवि गङ्गे खण्डित-गिरि-वर-मण्डित-भङ्गे।\nभीष्म-जननि हे मुनि-वर-कन्ये पतित-निवारिणि त्रिभुवन-धन्ये॥ (५)",
        "कल्प-लतामिव फलदां लोके प्रणमति यस्त्वां न पतति शोके।\nपारावार-विहारिणि गङ्गे विमुख-वनितात-तरलापाङ्गे॥ (६)",
        "तव चेन्मातः स्रोतः-स्नातः पुनरपि जठरे सोऽपि न जातः।\nनरक-निवारिणि जाह्नवि गङ्गे कलुष-विनाशिनि महिमोत्तुङ्गे॥ (७)",
        "पुनरसदङ्गे पुण्य-तरङ्गे जय जय जाह्नवि करुणापाङ्गे।\nइन्द्र-मुकुट-मणि-राजित-चरणे सुखदे शुभदे भृत्य-शरण्ये॥ (८)",
        "रोगं शोकं तापं पापं हर मे भगवति कुमति-कलापम्।\nत्रिभुवन-सारे वसुधा-हारे त्वमसि गतिर्मम खलु संसारे॥ (९)",
        "अलकानन्दे परमानन्दे कुरु करुणामयि कातर-वन्द्ये।\nतव तट-निकटे यस्य निवासः खलु वैकुण्ठे तस्य निवासः॥ (१०)",
        "वरमिह नीरे कमठो मीनः किं वा तीरे शरटः क्षीणः।\nअथवा श्वपचो मलिनो दीनस्तव न हि दूरे नृपतिः कुलीनः॥ (११)",
        "भो भुवनेश्वरि पुण्ये धन्ये देवि द्रवमयि मुनि-वर-कन्ये।\nगङ्गा-स्तवमिमममलं नित्यं पठति नरो यः स जयति सत्यम्॥ (१२)",
        "येषां हृदये गङ्गा-भक्तिस्तेषां भवति सदा सुख-मुक्तिः।\nमधुर-मनोहर-पज्झटिकाभिः परमानन्द-कलित-ललिताभिः॥ (१३)",
        "गङ्गा-स्तोत्रमिदं भव-सारं वाञ्छितफलदं विमलं सारम्।\nशङ्कर-सेवक-शङ्कर-रचितं पठति च विनयीदं समाप्यते॥ (१४)"
      ],
      translations: [
        "हे देवि! हे सुरेश्वरि! हे भगवति गङ्गे! आप तीनों लोकों का उद्धार करने वाली और चंचल तरंगों वाली हैं। भगवान् शिव के मस्तक पर विहार करने वाली निर्मल गङ्गे! मेरी मति सदा आपके चरणकमलों में लगी रहे।",
        "हे माता भगीरथी! आप सबों को सुख देने वाली हैं, आपके पावन जल की महिमा वेदों में प्रसिद्ध है। मैं अज्ञानी आपकी अपार महिमा को नहीं जानता, हे करुणामयी! मेरी रक्षा कीजिए।",
        "श्रीहरि के चरणकमलों के चरणामृत से प्रवाहित होने वाली हे गङ्गे! आपकी तरंगें हिम, चन्द्रमा और मोती के समान श्वेत हैं। कृपा करके मेरे समस्त पापों के भार को दूर कर मुझे भवसागर से पार उतार दीजिए।",
        "जिसने भी आपके निर्मल जल का पान किया है, उसने निश्चय ही परम पद प्राप्त किया है। हे माता गङ्गे! जो आपका भक्त है, यमराज भी उसकी ओर आँख उठाकर देखने में असमर्थ हैं।",
        "हे पतितों का उद्धार करने वाली जाह्नवी गङ्गे! आप पर्वतों को विदीर्ण करती हुई बहती हैं। हे भीष्म की माता! हे महर्षि जह्नु की कन्या! आप पतितों के क्लेशों को दूर करने वाली और त्रिभुवन में धन्य हैं।",
        "संसार में जो कल्पलता के समान मनोवांछित फल देने वाली आपको प्रणाम करता है, वह कभी शोक में नहीं पड़ता। हे गङ्गे! आप समुद्र से मिलने के लिए व्याकुल रहने वाली हैं।",
        "हे माता! जो आपकी पवित्र धारा में स्नान कर लेता है, उसे पुनः माता के गर्भ में जन्म नहीं लेना पड़ता। हे जाह्नवी! आप नरक से रक्षा करने वाली, समस्त पापों का नाश करने वाली और सर्वोच्च महिमा वाली हैं।",
        "हे पवित्र तरंगों वाली करुणामयी जाह्नवी! आपकी जय हो! देवराज इन्द्र के मुकुट की मणियाँ आपके श्रीचरणों में शोभा पाती हैं। आप अपने सेवकों को सुख, शुभ और शरण प्रदान करने वाली हैं।",
        "हे भगवती! मेरे रोग, शोक, ताप, पाप और दुर्बुद्धि को हर लीजिए। आप तीनों लोकों की सार और पृथ्वी का कण्ठहार हैं। इस संसार में आप ही मेरी एकमात्र गति हैं।",
        "हे अलकनन्दे! हे परमानन्दमयी! हे दुखियों द्वारा वन्दनीय करुणामयी माता! जिसके जीवन का निवास आपके पावन तट पर है, उसका निवास निश्चय ही वैकुण्ठ में है।",
        "आपके पावन जल में कछुआ या मछली बनकर रहना अथवा तट पर दुर्बल जीव या चाण्डाल बनकर रहना भी आपके तट से दूर रहने वाले कुलीन राजा की अपेक्षा कहीं अधिक श्रेष्ठ है।",
        "हे भुवनेश्वरी! हे पुण्यमयी! हे द्रवमयी मुनि-कन्या! जो मनुष्य प्रतिदिन इस निर्मल गङ्गा स्तुति का पाठ करता है, वह निश्चय ही परम विजय प्राप्त करता है।",
        "जिनके हृदय में गङ्गा जी के प्रति भक्ति है, उन्हें सदा सुख और मुक्ति प्राप्त होती है। यह मनोहर एवं ललित स्तुति परमानन्द प्रदान करने वाली है।",
        "समस्त मनोवांछित फल देने वाले तथा भगवान् शिव के अनन्य सेवक श्री आदि शंकराचार्य द्वारा रचित इस सारभूत निर्मल गङ्गा स्तोत्र का जो विनम्र भाव से पाठ करता है, वह परम कल्याण को प्राप्त होता है।"
      ]
    },
    "48": {
      title: "धन मोर नित्यानन्द",
      transliterations: [
        "धन मोर नित्यानन्द, पति मोर गौरचन्द्र, प्राण मोर युगल-किशोर।\nअद्वैत आचार्य बल, गदाधर मोर कुल, नरहरि विलास-इ मोर॥",
        "वैष्णवेर पद-धूलि, ताहे मोर स्नान-केलि, तर्पण मोर वैष्णवेर नाम।\nविचार करिया मने, भक्ति-रस आस्वादने, मध्यस्थ श्री-भागवत पुराण॥",
        "वैष्णवेर उच्छिष्ट, ताहे मोर मन निष्ठ, वैष्णवेर नामेते उल्लास।\nवृन्दावने चबुत्तारा, ताहे मोर मन घेरा, कहे दीन नरोत्तम दास॥"
      ],
      translations: [
        "श्रीनित्यानन्द प्रभु ही मेरा वास्तविक धन हैं, श्रीगौरचन्द्र मेरे स्वामी हैं, और दिव्य युगल-किशोर (श्रीराधा-कृष्ण) मेरे प्राण हैं। श्री अद्वैताचार्य मेरा बल हैं, श्री गदाधर पण्डित मेरा कुल हैं, और श्री नरहरि सरकार मेरा परम गौरव हैं।",
        "वैष्णवों के चरणकमलों की दिव्य धूलि ही मेरा स्नान-जल है, और वैष्णवों के पावन नाम ही मेरा तर्पण हैं। अपने मन में समस्त शास्त्रों का विचार करके मैंने यह जाना है कि भक्ति-रस के आस्वादन हेतु श्रीमद्भागवत पुराण ही सर्वश्रेष्ठ प्रमाण है।",
        "वैष्णवों का उच्छिष्ट (प्रसाद-अवशेष) ही मेरी परम निष्ठा है, वैष्णवों का नाम-कीर्तन ही मेरा आनन्द है, और श्री वृन्दावन धाम की भूमि में ही मेरा मन सदा बँधा रहे—यह दीन नरोत्तम दास यही प्रार्थना करता है।"
      ]
    },
    "49": {
      title: "धुले धुले गोरा चाँद हरि गुण गाइ",
      transliterations: [
        "धुले धुले गोरा चाँद हरि-गुण गाइ।\nआसिया वृन्दावने नाचे गौर राय॥ (१)",
        "वृन्दावनेर तरु-लता प्रेमे कय हरि-कथा।\nनिकुञ्जेर पाखि-गुलि हरि-नाम शोनाइ॥ (२)",
        "गौर बोले हरि हरि, शारी बोले हरि हरि।\nमुखे मुखे शुक-शारी हरि-नाम गाइ॥ (३)",
        "हरि-नामे मत्त ह’ये हरिण आसिछे धेये।\nमयूर-मयूरी प्रेमे नाचिया खेलाइ॥ (४)",
        "प्राणे हरि ध्याने हरि, हरि बोलो वदन भरि।\nहरि-नाम गेये गेये रसे ग’ले जाइ॥ (५)",
        "आसिया यमुनार कूले नाचे हरि हरि बोले।\nयमुना उथले एसे चरण धोयाइ॥ (६)"
      ],
      translations: [
        "गौरचन्द्र प्रभु प्रेमानन्द में झूमते हुए और श्रीहरि के दिव्य गुणों का गान करते हुए श्रीधाम वृन्दावन में आकर भव्य नृत्य कर रहे हैं।",
        "वृन्दावन के वृक्ष और लताएँ प्रेमातिरेक में भरकर हरि-कथा कह रहे हैं और कुञ्जों में स्थित पक्षी-समूह मधुर हरिनाम सुना रहे हैं।",
        "श्री गौरसुन्दर कहते हैं 'हरि! हरि!', शारी (मैना) प्रत्युत्तर देती है 'हरि! हरि!' और इस प्रकार शुक व शारी आमने-सामने बैठकर हरिनाम का गान कर रहे हैं।",
        "हरिनाम के दिव्य रस में उन्मत्त होकर वन से हरिण दौड़ते हुए चले आ रहे हैं तथा मोर और मोरनी प्रेम में नृत्य करते हुए क्रीड़ा कर रहे हैं।",
        "जिनके प्राणों में हरि हैं, ध्यान में हरि हैं, वे मुख भरकर 'हरि बोल' कह रहे हैं! हरिनाम गाते-गाते वे प्रेमरस में द्रवीभूत होकर भूमि पर लोट-पोट हो रहे हैं।",
        "यमुना जी के पावन तट पर आकर वे 'हरि हरि' बोलते हुए दिव्य नृत्य कर रहे हैं और माता यमुना प्रेमानन्द में उमड़कर उनके श्रीचरणों को पखार रही हैं।"
      ]
    },
    "50": {
      title: "श्री श्री राधिकाष्टकम् (दिशि दिशि रचयन्तीं)",
      transliterations: [
        "दिशि दिशि रचयन्तीं सञ्चरन्नेत्रलक्ष्मी-\nविलसितखुरलीभिः खञ्जरीटस्य खेलाम्।\nहृदयमधुपमल्लीं बल्लवाधीशसूनोर-\nखिलगुणगभीरां राधिकां तामर्चयामि॥ (१)",
        "पितुरिह वृषभानोरन्ववायप्रशस्तिं\nजगति किल समस्ते सुष्ठु विस्तारयन्तीम्।\nव्रजनृपतिकुमारं खेलयन्तीं सखीभिः\nसुरभिणि निजकुण्डे राधिकां तामर्चयामि॥ (२)",
        "शरदुपचितराकाकौमुदीनाथकीर्ति-\nप्रकरदमनदीक्षादक्षिणस्मेरवक्त्राम्।\nनटदघभिदपाङ्गोत्तुङ्गितानङ्गरङ्गां\nकलितरुचितरङ्गां राधिकां तामर्चयामि॥ (३)",
        "विविधकुसुमवृन्दोत्फुल्लधम्मिल्लघाटी-\nविघटितमदघूर्णत्केकिपिञ्छप्रशस्तिम्।\nमधुरिपुमुखबिम्बोद्गीर्णताम्बूलराग-\nस्फुरदमलकपोलां राधिकां तामर्चयामि॥ (४)",
        "अमलिनसुललितान्तःस्नेहसिक्तान्तराङ्गां\nनिखिलविधविशाखासख्यविख्यातशीलाम्।\nस्फुरदघभिदनर्घप्रेममाणिक्यपेटीं\nधृतमधुरविनोदां राधिकां तामर्चयामि॥ (५)",
        "अतुलमहसि वृन्दारण्यराज्येऽभिषिक्तां\nनिखिलसमयभर्तुः कार्तिकस्याधिदेवीम्।\nअपरिमितमुकुन्दप्रेयसीवृन्दमुख्यां\nजगदघहरकीर्तिं राधिकां तामर्चयामि॥ (६)",
        "हरिपदनखकोटीपृष्ठपर्यन्तसीमा-\nतटमपि कलयन्तीं प्राणकोटेरभीष्टम्।\nप्रमुदितमदिराक्षीवृन्दवैदग्ध्यदीक्षा-\nगुरुमतिगुरुकीर्तिं राधिकां तामर्चयामि॥ (७)",
        "अमलकनकपट्टोद्घृष्टकाश्मीरगौरीं\nमधुरिमलहरीभिः सम्परीतां किशोरीम्।\nहरिभुजपरिरब्धां लब्धरोमाञ्चपालिं\nस्फुरदरुणदुकूलां राधिकां तामर्चयामि॥ (८)",
        "तदमलमधुरिम्णां काममाधाररूपं\nपरिपठति वरिष्ठं सुष्ठु राधाष्टकं यः।\nअहिमरकिरणपुत्रीकूलकल्याणचन्द्रः\nस्फुटमखिलमभीष्टं तस्य तुष्टस्तनोति॥ (९)"
      ],
      translations: [
        "मैं उन श्रीराधिका की पूजा करता हूँ, जिनके चंचल नेत्रों की शोभा खंजन पक्षी की क्रीड़ा को लज्जित करती है, जो नन्दनन्दन श्रीकृष्ण के भ्रमर-रूपी हृदय के लिए चमेली (मल्ली) पुष्प के समान हैं और जो समस्त दिव्य गुणों से गम्भीर हैं।",
        "मैं उन श्रीराधिका की वन्दना करता हूँ, जो अपने पिता महाराज वृषभानु के कुल की कीर्ति को सम्पूर्ण जगत में विस्तृत करती हैं, और जो अपनी सखियों के साथ सुरभि-सुगन्धित श्रीराधाकुण्ड में व्रजराज-नन्दन श्रीकृष्ण के साथ दिव्य जल-क्रीड़ा करती हैं।",
        "मैं उन श्रीराधिका की वन्दना करता हूँ, जिनका मन्द-मुस्कान युक्त मुखमण्डल शरत्कालीन पूर्णिमा के चन्द्रमा की शोभा का दमन करने वाला है, और जो श्रीकृष्ण के चंचल कटाक्षों से विकसित होने वाले प्रेमरस की तरंगों से सुशोभित हैं।",
        "मैं उन श्रीराधिका की वन्दना करता हूँ, जिनके विविध पुष्पों से सजे हुए जूड़े की शोभा मतवाले मयूर के पंखों को भी मात करती है, और जिनके निर्मल कपोल श्रीकृष्ण के मुखकमल से प्राप्त ताम्बूल (पान) के लाल रंग से सुशोभित हैं।",
        "मैं उन श्रीराधिका की पूजा करता हूँ, जिनका अन्तरंग ललिता सखी के विशुद्ध स्नेह से सिंचित है, जिनका विशाखा सखी के साथ सख्यभाव विख्यात है, जो श्रीकृष्ण के अमूल्य प्रेमरत्न की मंजूषा (पेटी) हैं और मधुर विनोद करने वाली हैं।",
        "मैं उन श्रीराधिका की पूजा करता हूँ, जो अतुलनीय महिमामय वृन्दावन-साम्राज्य की महारानी के रूप में अभिषिक्त हैं, जो सर्वोत्तम मास कार्तिक (दामोदर मास) की अधिष्ठात्री देवी हैं, और जो श्रीकृष्ण की असंख्य प्रिय गोपियों में सर्वशिरोमणि हैं।",
        "मैं उन श्रीराधिका की वन्दना करता हूँ, जो श्रीकृष्ण के चरणकमलों के नख के एक किनारे को भी अपने करोड़ों प्राणों से अधिक प्रिय मानती हैं, और जो समस्त चंचल-नयनी गोपियों को प्रेम-चातुर्य की दीक्षा देने वाली परम गुरु हैं।",
        "मैं उन श्रीराधिका की वन्दना करता हूँ, जिनकी देहकान्ति स्वर्ण-पट्टिका पर घिसे हुए कस्तूरी-केसर के समान गौरवर्ण है, जो माधुर्य की लहरियों से घिरी किशोरी हैं, और जो श्रीकृष्ण के आलिंगन में रोमांच का अनुभव करती हुई अरुण (लाल) रेशमी वस्त्र धारण करती हैं।",
        "जो व्यक्ति दिव्य माधुर्य से परिपूर्ण इस श्रेष्ठ 'श्रीराधाष्टकम्' का प्रेमपूर्वक पाठ करता है, यमुना-तट के कल्याणकारी चन्द्रमा भगवान् श्रीकृष्ण प्रसन्न होकर उसकी समस्त अभीष्ट मनोकामनाओं को पूर्ण कर देते हैं।"
      ]
    },
    "51": {
      title: "दया करो मोरे निताई",
      transliterations: [
        "दया करो मोरे निताई, दया करो मोरे।\nअगतिर गति निताई साधु लोके बोले॥",
        "जय प्रेम-भक्ति-दाता-पताका तोमार।\nउत्तम अधम किछु ना कैले विचार॥",
        "प्रेम-दाने जग-जनेर मन कैले सुखी।\nतुमि हेन दयार ठाकुर आमि केने दुःखी॥",
        "कानू राम दास बोले कि बोलिबो आमि।\nए बड़ो भरोसा मोरे कुलेर ठाकुर तुमि॥"
      ],
      translations: [
        "हे मेरे दयालु निताई! मुझ पर अपनी करुणा बरसाइए। सभी साधु-संत कहते हैं कि आप ही अगति (दीन-हीनों) के परम आश्रय और गति हैं।",
        "आपकी जय हो! आपकी ध्वजा सम्पूर्ण जगत को विशुद्ध प्रेम-भक्ति प्रदान करने वाली है। आपने उत्तम या अधम का लेशमात्र भी विचार किए बिना सबको प्रेमामृत बाँटा है।",
        "अपने प्रेम-दान से आपने सम्पूर्ण जगत के जीवों के मन को सुखी कर दिया। जब आप जैसे परम दयालु ठाकुर विद्यमान हैं, तब मैं अकेला क्यों दुःखी रहूँ?",
        "कानू रामदास कहते हैं कि मैं अब और क्या कहूँ? मुझे केवल इसी बात का सबसे बड़ा भरोसा है कि आप ही हमारे वंश/सम्प्रदाय के परम रक्षक ठाकुर हैं।"
      ]
    },
    "52": {
      title: "दयाल निताई चैतन्य बले नाच रे आमार मन",
      transliterations: [
        "‘दयाल निताई चैतन्य’ बले’ नाच रे आमार मन।\nनाच रे आमार मन, नाच रे आमार मन॥ (१)",
        "(एमन दयाल तो नाइ हे, मार खेये प्रेम देय)\n(ओरे) अपराध दूरे याबे, पाबे प्रेम-धन।\n(ओ नामे अपराध-विचार तो नाइ हे)\n(तखन) कृष्ण-नामे रुचि ह’बे, घुचिबे बन्धन॥ (२)",
        "(कृष्ण-नामे अनुराग तो ह’बे हे)\n(तखन) अनायासे सफल ह’बे जीवेर जीवन।\n(कृष्ण-रति विना जीवन तो मिछे हे)\n(एसे) वृन्दावन राधार-श्यामेर पा’बे दरशन।\n(गौर-कृपा ह’ले हे)॥ (३)"
      ],
      translations: [
        "'परम दयालु निताई-चैतन्य' का पावन नाम लेकर हे मेरे मन, तू प्रेम से नाच! नाच रे मेरे मन, नाच रे मेरे मन!",
        "अरे! श्रीनित्यानन्द प्रभु जैसा दयालु इस संसार में अन्य कोई नहीं है, जो जगाई-मधाई की मार खाकर भी उन्हें भगवत्प्रेम प्रदान करते हैं! इन गौर-निताई के नाम में नामापराध का कोई विचार नहीं है; इनके नाम से सारे अपराध दूर होकर प्रेम-धन की प्राप्ति होगी, कृष्णनाम में रुचि उत्पन्न होगी और भव-बन्धन कट जाएगा।",
        "जब कृष्णनाम में विशुद्ध अनुराग उत्पन्न होगा, तब जीव का यह मानव जीवन अनायास ही सफल हो जाएगा! श्रीकृष्ण के प्रति प्रेम के बिना यह जीवन सर्वथा व्यर्थ है। श्रीगौरसुन्दर की कृपा होने पर जीव श्री वृन्दावन धाम में श्रीराधा-श्यामसुन्दर का साक्षात् दर्शन प्राप्त करेगा!"
      ]
    },
    "53": {
      title: "दुःखेर सागरे भासियेछि",
      transliterations: [
        "(ध्रुवपद)\nदुःखेर सागरे भासियेछि, उत्तारिये जानि ना।",
        "(१)\nउथाल देउ आसिछे छुटिया, कि हबे ताहा जानि ना॥",
        "(२)\nदीन-दयाल तुमि भगवान्, पार करो आमाइ शामने तूफान॥",
        "(३)\nतुमि यदि प्रभु नाहि करो पार, पारेर आशा राखि ना॥"
      ],
      translations: [
        "मैं इस भौतिक दुःखों के अथाह सागर में बह रहा हूँ और मुझे इससे पार निकलने का कोई उपाय नहीं सूझ रहा।",
        "सामने से भयंकर तूफानी तरंगें तीव्र वेग से दौड़ती हुई आ रही हैं; जब वे मुझ पर टूटेंगी तो मेरा क्या होगा, मैं नहीं जानता!",
        "हे दीनदयाल! आप परमेश्वर हैं, मेरे सामने महा-तूफान उपस्थित है, कृपा करके मुझे इस भवसागर से पार उतार दीजिए।",
        "हे प्रभु! यदि आप ही मुझ अकिंचन को पार नहीं करेंगे, तो मुझे संसार से उद्धार की अन्य कोई आशा नहीं है।"
      ]
    },
    "54": {
      title: "दुर्लभ मानव-जन्म लभिया संसारे",
      transliterations: [
        "दुर्लभ मानव-जन्म लभिया संसारे।\nकृष्ण ना भजिनु-दुःख कहिबो काहारे?॥ (१)",
        "‘संसार’ ‘संसार’, क’रे मिछे गेलो काल।\nलाभ ना कोइलो किछु, घटिलो जञ्जाल॥ (२)",
        "किसेर संसार एइ छायाबाजी प्राय।\nइहाते ममता करि’ वृथा दिन जाय॥ (३)",
        "ए देह पतन ह’ले कि र’बे आमार?\nकेहो सुख नाहि दिबे पुत्र-परिवार॥ (४)",
        "गर्दभेर मत आमि करि परिश्रम।\nका’र लागि’ एतो करि, ना घुचिलो भ्रम॥ (५)",
        "दिन जाय मिछा काजे, निशा निद्रा-वशे।\nनाहि भावि-मरण निकटे आछे ब’से॥ (६)",
        "भालो मन्द खाइ, हेरि, परि, चिन्ता-हीन।\nनाहि भावि, ए देह छाड़िबो कोन दिन॥ (७)",
        "देह-गेह-कलत्रादि-चिन्ता अविरत।\nजागिछे हृदये मोर बुद्धि करि’ हत॥ (८)",
        "हाय, हाय! नाहि भावि-अनित्य ए सब।\nजीवन विगते कोथा रोहिबे वैभव?॥ (९)",
        "श्मशाने शरीर मम पड़िया रोहिबे।\nविहङ्ग-पतङ्ग ताय विहार करिबे॥ (१०)",
        "कुक्कुर सृगाल सब आनन्दित ह’ये।\nमहोत्सव करिबे आमार देह ल’ये॥ (११)",
        "ये देहेर एइ गति, ता’र अनुगत।\nसंसार-वैभव आर बन्धु-जन यत॥ (१२)",
        "अतएव माया-मोह छाड़ि’ बुद्धिमान्।\nनित्य-तत्त्व कृष्ण-भक्ति करुन सन्धान॥ (१३)"
      ],
      translations: [
        "इस संसार में परम दुर्लभ मानव-जन्म पाकर भी मैंने श्रीकृष्ण का भजन नहीं किया; अब मैं अपने इस दुःख और विलाप की व्यथा किसे सुनाऊँ?",
        "'संसार-संसार' करते-करते मेरा सम्पूर्ण अमूल्य समय व्यर्थ बीत गया। मुझे कोई वास्तविक आध्यात्मिक लाभ प्राप्त नहीं हुआ, केवल जंजाल और क्लेश ही बढ़े।",
        "यह संसार क्या है? यह तो कठपुतली के खेल अथवा जादू के तमाशे की परछाईं के समान क्षणभंगुर है। इसमें मिथ्या ममता करके मेरे दिन व्यर्थ बीत रहे हैं।",
        "जब यह भौतिक शरीर भूमि पर गिरकर नष्ट हो जाएगा, तब मेरा क्या शेष रहेगा? उस अन्तिम समय में कोई भी पुत्र या कुटुम्बी मुझे लेशमात्र भी सुख नहीं दे सकेगा।",
        "मैं गधे की भाँति रात-दिन कठोर परिश्रम करता हूँ; किन्तु मैं यह सब किसके लिए कर रहा हूँ? मेरा यह भ्रम और अज्ञान अभी तक दूर नहीं हुआ।",
        "दिन व्यर्थ के सांसारिक कार्यों में बीत जाता है और रात घोर निद्रा के वश में नष्ट हो जाती है। मैं कभी यह विचार नहीं करता कि क्रूर मृत्यु मेरे ठीक पास में बैठी है।",
        "मैं निश्चिन्त होकर अच्छा-बुरा खाता हूँ, देखता हूँ और सुन्दर वस्त्र पहनता हूँ; किन्तु कभी यह नहीं सोचता कि किस दिन मुझे यह नश्वर देह छोड़नी पड़ेगी।",
        "देह, गृह, पत्नी और बाल-बच्चों की निरन्तर चिन्ता मेरे हृदय में जागकर मेरी समस्त सद्बुद्धि को नष्ट कर रही है।",
        "हाय! हाय! मैं यह कभी नहीं सोचता कि ये सब वस्तुएं अनित्य और नाशवान हैं। इस क्षणिक जीवन के समाप्त होने पर मेरा यह सारा भौतिक वैभव कहाँ रह जाएगा?",
        "मृत्यु के उपरान्त मेरा यह शरीर श्मशान में निष्प्राण पड़ा रहेगा और उस पर कौवे, चील, पक्षी और कीड़े-मकोड़े क्रीड़ा करेंगे।",
        "कुत्ते और सियार अत्यन्त प्रसन्न होकर मेरे इस निष्प्राण शरीर को नोंच-नोंचकर महोत्सवानन्द मनाएँगे!",
        "जिस भौतिक शरीर की यह अन्तिम दुर्गति होने वाली है, उसी शरीर से जुड़े हुए ये सांसारिक वैभव, मित्र और सम्बन्धी भी उतने ही क्षणभंगुर हैं।",
        "अतएव बुद्धिमान मनुष्य को चाहिए कि वह माया के इस मिथ्या मोह को त्यागकर नित्य-सत्य स्वरूप भगवान् श्रीकृष्ण की विशुद्ध प्रेमाभक्ति की खोज करे!"
      ]
    },
    "55": {
      title: "वैष्णव के? (दुष्ट मन! तुमि किसेर वैष्णव?)",
      transliterations: [
        "दुष्ट मन! तुमि किसेर वैष्णव?\nप्रतिष्ठार तरे, निर्जनेर घरे,\nतव ‘हरि नाम’ केवल ‘कैतव’॥ (१)",
        "जड़ेर प्रतिष्ठा, शूकरेर विष्ठा,\nजानो ना कि ताहा ‘मायार वैभव’।\nकनक कामिनी, दिवस-यामिनी,\nभाविया कि काज, अनित्य से सब॥ (२)",
        "तोमार कनक, भोगेर जनक,\nकनकेर द्वारे सेवहो ‘माधव’।\nकामिनीर काम, नहे तव धाम,\nताहार-मालिक केवल ‘यादव’॥ (३)",
        "प्रतिष्ठाशा-तरु, जड़-माया-मरु,\nना पेल ‘रावण’ युझिया ‘राघव’।\nवैष्णवी प्रतिष्ठा, ताते करो निष्ठा,\nताहा ना भजिले लभिबे रौरव॥ (४)",
        "हरिजन-द्वेष, प्रतिष्ठाशा-क्लेश,\nकरो केनो तबे ताहार गौरव।\nवैष्णवेर पाछे, प्रतिष्ठाशा आछे,\nता’ते कभू नाहे ‘अनित्य-वैभव’॥ (५)",
        "से हरि-सम्बन्ध, शून्य-माया-गन्ध,\nताहा कभू नय ‘जड़ेर कैतव’।\nप्रतिष्ठा-चाण्डाली, निर्जनता-जाली,\nउभये जानिहो मायिक रौरव॥ (६)",
        "कीर्तन छाड़िबो, प्रतिष्ठा माखिबो,\nकि काज ढूँढ़िया तादृश गौरव।\nमाधवेन्द्र पुरी, भाव-घरे चुरि,\nना करिलो कभू सदाई जानबो॥ (७)",
        "तोमार प्रतिष्ठा—’शूकरेर विष्ठा’,\nतार-सह सम कभू ना मानब।\nमत्सरता-वशे, तुमि जड़-रसे,\nमजेछो छाड़िया कीर्तन-सौष्ठव॥ (८)",
        "ताइ दुष्ट मन, ‘निर्जन भजन,’\nप्रचारिछो छले ‘कुयोगी-वैभव’।\nप्रभु सनातने, परम यतने,\nशिक्षा दिलो याहा, चिन्तो सेइ सब॥ (९)",
        "सेइ दु’टि कथा, भूलो’ ना सर्वथा,\nउच्चैः-स्वरे करो ‘हरि-नाम-रव’।\n‘फल्गु’ आर ‘युक्त,’ ‘बद्ध’ आर ‘मुक्त,’\nकभू ना भाविहो, एकाकार सब॥ (१०)",
        "‘कनक-कामिनी,’ ‘प्रतिष्ठा-बाघिनी,’\nछाड़ियाछे यारे, सेइ तो’ वैष्णव।\nसेइ ‘अनासक्त,’ सेइ ‘शुद्ध-भक्त,’\nसंसार तथा पाय पराभव॥ (११)",
        "यथा-योग्य भोग, नाहि तथा रोग,\n‘अनासक्त’ सेइ, कि आर कहबो।\n‘आसक्ति-रहित,’ ‘सम्बन्ध-सहित,’\nविषय-समूह सकलि ‘माधव’॥ (१२)",
        "से ‘युक्त-वैराग्य,’ ताहा तो’ सौभाग्य,\nताहा-इ जड़ेते हरिर वैभव।\nकीर्तने याहार, ‘प्रतिष्ठा-सम्भार,’\nताहार सम्पत्ति केवल ‘कैतव’॥ (१३)",
        "‘विषय-मुमुक्षु,’ ‘भोगेर बुभुक्षु,’\nदु’ये त्यजो मन, दुइ ‘अवैष्णव’।\n‘कृष्णेर सम्बन्ध,’ अप्राकृत-स्कन्ध,\nकभू नाहे ताहा जड़ेर सम्भव॥ (१४)",
        "‘मायावादी जन,’ कृष्णेतर मन,\nमुक्त अभिमाने से निन्दे वैष्णव।\nवैष्णवेर दास, तव भक्ति-आश,\nकेनो वा डाकिहो निर्जन-आहव॥ (१५)",
        "ये ‘फल्गु-वैरागी,’ कहे निजे ‘त्यागी,’\nसे ना पारे कभू हइते ‘वैष्णव’।\nहरि-पद छाड़ि’, ‘निर्जनता बाड़ि,’\nलभिया कि फल, ‘फल्गु’ से वैभव॥ (१६)",
        "राधा-दास्ये रोहि’, छाड़ि ‘भोग-अहि,’\n‘प्रतिष्ठाशा’ नहे ‘कीर्तन-गौरव’।\n‘राधा-नित्य-जन,’ ताहा छाड़ि’ मन,\nकेनो वा निर्जन-भजन-कैतव॥ (१७)",
        "व्रज-वासी-गण, प्रचारक-धन,\nप्रतिष्ठा-भिक्षुक ता’रा नहे ‘शव’।\nप्राण आछे ता’र, से-हेतु प्रचार,\nप्रतिष्ठाशा-हीन-’कृष्ण-गाथा’ सब॥ (१८)",
        "श्री-दयित-दास, कीर्तनेते आश,\nकरो उच्चैः-स्वरे ‘हरि-नाम-रव’।\nकीर्तन-प्रभावे, स्मरण स्वभावे,\nसे काले भजन-निर्जन सम्भव॥ (१९)"
      ],
      translations: [
        "हे दुष्ट मन! तुम अपने आप को किस प्रकार का वैष्णव मानते हो? सांसारिक मान-प्रतिष्ठा और ख्याति पाने के लिए निर्जन स्थान में बैठकर जो तुम 'हरिनाम' का ढोंग करते हो, वह केवल कपट (कैतव) मात्र है।",
        "इस भौतिक जगत की मान-प्रतिष्ठा तो शूकर की विष्ठा के समान घृणित है; क्या तुम नहीं जानते कि यह माया का मिथ्या वैभव है? धन (कनक) और स्त्री (कामिनी) का दिन-रात चिन्तन करने से क्या लाभ, जब ये सब अनित्य और नाशवान हैं?",
        "तुम्हारा धन यदि केवल भौतिक भोग उत्पन्न करता है, तो उस धन से भगवान् 'माधव' की सेवा करो। स्त्रियों का भोग तुम्हारा धाम नहीं है, उनके एकमात्र वास्तविक स्वामी 'यादवेन्द्र श्रीकृष्ण' हैं।",
        "भौतिक मान-प्रतिष्ठा का वृक्ष जड़-माया का मरुस्थल है; भगवान् श्रीरामचन्द्र से युद्ध करके भी रावण उसे प्राप्त न कर सका। वास्तविक वैष्णव-प्रतिष्ठा (भगवान् के दास की प्रतिष्ठा) में निष्ठा रखो, क्योंकि कृष्णभक्ति के बिना जीव रौरव नरक को प्राप्त होता है।",
        "भक्तों से द्वेष करके और मान-प्रतिष्ठा के पीछे पड़कर जो क्लेश मिलता है, तुम उसका मिथ्या गौरव क्यों करते हो? शुद्ध वैष्णवों के पीछे-पीछे तो सच्ची प्रतिष्ठा स्वयं चलती है, वह कभी अनित्य वैभव नहीं होती।",
        "भगवान् श्रीहरि के साथ नित्य सम्बन्ध माया के लेशमात्र गन्ध से भी रहित होता है; उसमें भौतिक कपट का कोई स्थान नहीं। सस्ती प्रतिष्ठा की लालसा चाण्डाली के समान है और एकांत का ढोंग एक जाल है—इन दोनों को माया का रौरव नरक जानो।",
        "सार्वजनिक संकीर्तन छोड़कर निर्जन में प्रतिष्ठा पाना—ऐसे झूठे गौरव को ढूँढने से क्या लाभ? श्रील माधवेन्द्र पुरी जी ने कभी अपने भाव-गृह में ऐसी कपट-चोरी नहीं की, यह सदा स्मरण रखो।",
        "तुम्हारी यह सस्ती प्रतिष्ठा शूकर की विष्ठा के समान है; उसकी तुलना कभी माधवेन्द्र पुरी जैसे महाभागवत से नहीं हो सकती। ईर्ष्या के वश होकर तुमने संकीर्तन के दिव्य आनन्द को छोड़कर जड़ इन्द्रिय-रस में स्वयं को डुबो दिया है।",
        "इसीलिए हे दुष्ट मन! तुम 'निर्जन भजन' के बहाने कपटी कुयोगियों के वैभव का प्रचार कर रहे हो। श्रीचैतन्य महाप्रभु ने श्रील सनातन गोस्वामी को बड़े यत्न से जो शिक्षाएं दी थीं, उनका गम्भीरता से चिन्तन करो।",
        "उन दो बातों को कभी मत भूलो—(1) फल्गु-वैराग्य (झूठा त्याग) और युक्त-वैराग्य (उचित त्याग), तथा (2) बद्ध जीव और मुक्त जीव—इन्हें कभी एक समान मत समझो, और पूरे उच्च स्वर से हरिनाम का संकीर्तन करो!",
        "जिसने धन, कामिनी और मान-प्रतिष्ठा रूपी बाघिन का सर्वथा त्याग कर दिया है, वही वास्तव में सच्चा वैष्णव है। वही अनासक्त है, वही शुद्ध भक्त है और उसी के सामने यह संसार पराजित होता है।",
        "भक्ति सेवा हेतु आवश्यक वस्तुओं का यथायोग्य स्वीकार करने वाले अनासक्त भक्त को कोई सांसारिक रोग नहीं सताता। आसक्ति से रहित होकर और कृष्ण-सम्बन्ध से युक्त होकर समस्त विषय-वस्तुएं साक्षात् माधव की सेवा बन जाती हैं।",
        "इसे ही 'युक्त-वैराग्य' कहते हैं, यही परम सौभाग्य है और यही जड़ जगत में भगवान् का दिव्य वैभव है। परन्तु जो कीर्तन के माध्यम से अपनी मान-प्रतिष्ठा का संग्रह करता है, उसकी सारी सम्पत्ति केवल कपट मात्र है।",
        "मुक्ति की इच्छा रखने वाले निर्विशेषवादी और भौतिक भोग की लालसा रखने वाले विषयी—हे मन! इन दोनों अवैष्णवों का संग छोड़ दो! श्रीकृष्ण का सम्बन्ध चिन्मय और अप्राकृत है, वह भौतिक वासनाओं से कभी सम्भव नहीं।",
        "मायावादी लोग कृष्ण-विमुख मन वाले होते हैं और स्वयं को मुक्त मानकर अहंकारवश वैष्णवों की निन्दा करते हैं। हे मन! तुम तो वैष्णवों के दास हो, तुम्हारी एकमात्र आशा भक्ति है; फिर तुम व्यर्थ के निर्जनता के विवाद में क्यों पड़ते हो?",
        "जो फल्गु-वैरागी स्वयं को बड़ा त्यागी कहता है, वह कभी सच्चा वैष्णव नहीं बन सकता। भगवान् के चरणों की सेवा छोड़कर मात्र निर्जनता में रहने से क्या लाभ? वह तो फल्गु (व्यर्थ) वैभव मात्र है।",
        "श्रीराधा की नित्य दासी बनकर और भौतिक भोग-रूपी सर्प को त्यागकर कीर्तन की सेवा में रहो; मान-प्रतिष्ठा की लालसा कीर्तन का गौरव नहीं है। हे मन! श्रीराधा के नित्य परिकरों की संगति छोड़कर तुम निर्जन भजन का कपट क्यों कर रहे हो?",
        "श्री वृन्दावन के प्रचारक वैष्णव ही हमारे वास्तविक धन हैं; वे प्रतिष्ठा के भिक्षुक निष्प्राण शव नहीं हैं! उनके भीतर कृष्ण-प्रेम का दिव्य प्राण है, इसीलिए वे सर्वत्र प्रचार करते हैं और उनकी 'कृष्ण-कथा' प्रतिष्ठा की कामना से सर्वथा मुक्त होती है।",
        "श्रील भक्तिसिद्धान्त सरस्वती (श्री दयित दास) केवल कीर्तन की ही अभिलाषा करते हैं—अतः उच्च स्वर से 'हरि-नाम' का नाद करो! संकीर्तन के दिव्य प्रभाव से जब भगवान् का स्मरण स्वाभाविक बन जाएगा, केवल उसी अवस्था में वास्तविक निर्जन भजन सम्भव होगा!"
      ]
    },
    "56": {
      title: "ए दुष्ट हृदये काम (श्री नृसिंह प्रार्थना)",
      transliterations: [
        "ए दुष्ट हृदये काम आदि रिपु छह।\nकुटिनाटि प्रतिष्ठाशा शाठ्य सदा रह॥\nहृदय-शोधन आर कृष्णेर वासना।\nनृसिंह-चरणे मोर एइ तो’ कामना॥ (१)",
        "काँदिया नृसिंह-पदे मागिबो कखन।\nनिरापदे नवद्वीपे युगल-भजन॥\nभय भय पाय याँर दर्शने से हरि।\nप्रसन्न हइबो कबे मोरे दया करि’॥ (२)",
        "यद्यपि भीषण मूर्ति दुष्ट जीव प्रति।\nप्रह्लादादि कृष्ण-भक्त-जने भद्र अति॥\nकबे वा प्रसन्न हये स कृपा-वचने।\nनिर्भय करिबे एइ मूढ़ अकिञ्चने॥ (३)",
        "स्वच्छन्दे बैस हे वत्स श्री-गौराङ्ग-धामे।\nयुगल-भजन हउ, रति हउ नामे॥\nमम भक्त-कृपा-बले विघ्न याबे दूर।\nशुद्ध चित्ते भज राधा-कृष्ण रस-पूर॥ (४)",
        "एइ बलि’ कबे मोर मस्तक-उपरि।\nस्वीय श्री-चरण हर्षे धरिबे ईश्वर॥\nएमनि युगल-प्रेमे सात्त्विक विकारे।\nधराय लुटिबो आमि श्री-नृसिंह-द्वारे॥ (५)"
      ],
      translations: [
        "मेरे इस पापी हृदय में काम, क्रोध आदि छहों रिपु, कपट, मान-प्रतिष्ठा की लालसा और धूर्तता सदा निवास करते हैं। भगवान् नृसिंहदेव के श्रीचरणों में मेरी यही प्रार्थना है कि वे मेरे हृदय को शुद्ध करके उसमें केवल श्रीकृष्ण-सेवा की वासना भर दें।",
        "रोते हुए मैं भगवान् नृसिंहदेव के चरणों में कब यह वरदान माँगूँगा कि मुझे श्री नवद्वीप धाम में निर्विघ्न रूप से युगल-किशोर का भजन प्राप्त हो? जिनके दर्शन मात्र से साक्षात् भय भी भयभीत हो जाता है, वे श्रीहरि मुझ पर प्रसन्न होकर कब कृपा करेंगे?",
        "यद्यपि दुष्ट जीवों के लिए भगवान् नृसिंह का रूप अत्यन्त भयानक है, किन्तु प्रह्लाद आदि शुद्ध कृष्ण-भक्तों के लिए वे परम भद्र और सौम्य हैं। वे प्रसन्न होकर अपने कृपापूर्ण वचनों से मुझ मूढ़ और अकिंचन को कब अभय प्रदान करेंगे?",
        "वे कहेंगे—'हे वत्स! तुम श्री गौरांग महाप्रभु के इस पावन धाम में आनन्दपूर्वक वास करो। तुम्हारा युगल-भजन सिद्ध हो और श्रीनाम में प्रगाढ़ अनुराग हो। मेरे भक्तों की कृपा के प्रभाव से तुम्हारे सारे विघ्न दूर हो जाएँगे; तुम शुद्ध चित्त से रस-परिपूर्ण श्रीराधा-कृष्ण का भजन करो!'",
        "ऐसा कहकर वे परमेश्वर प्रसन्नतापूर्वक अपने दिव्य चरणकमल कब मेरे मस्तक पर रखेंगे? तब मैं युगल-प्रेम के सात्त्विक विकारों से अभिभूत होकर श्री नृसिंह मन्दिर के द्वार पर भूमि पर लोट-पोट होने लगूँगा।"
      ]
    },
    "57": {
      title: "एइ-बार करुणा कर वैष्णव गोसाञि",
      transliterations: [
        "एइ-बार करुणा कर वैष्णव गोसाञि।\nपतित-पावन तोमा विने केह नाइ॥ (१)",
        "याहार निकटे गेले पाप दूरे जाय।\nएमन दयाल प्रभु केबा कोथा पाय॥ (२)",
        "गङ्गार परश हैले पश्चाते पावन।\nदर्शने पवित्र कर—एइ तोमार गुण॥ (३)",
        "हरि-स्थाने अपराधे तारे हरिनाम।\nतोमा स्थाने अपराधे नाहि परित्राण॥ (४)",
        "तोमार हृदये सदा गोविन्द-विश्राम।\nगोविन्द कहेन—मोर वैष्णव पराण॥ (५)",
        "प्रति-जन्मे करि आशा चरणेर धूलि।\nनरोत्तमे कर दया आपनार बलि’॥ (६)"
      ],
      translations: [
        "हे वैष्णव गोसाईं! इस बार मुझ पर कृपा कीजिए। आप जैसे पतित-पावन के अतिरिक्त इस संसार में पतितों का उद्धार करने वाला अन्य कोई नहीं है।",
        "जिनके सान्निध्य में मात्र जाने से ही सारे पाप दूर भाग जाते हैं, ऐसा परम दयालु प्रभु संसार में कहाँ मिल सकता है?",
        "पवित्र गङ्गा जी के जल का स्पर्श करने पर बहुत समय बाद जीव पवित्र होता है; किन्तु आपके केवल दर्शन मात्र से ही पतित जीव तत्काल पवित्र हो जाता है—यह आपका अद्भुत दिव्य प्रभाव है!",
        "यदि कोई भगवान् श्रीहरि के प्रति अपराध कर बैठे, तो हरिनाम उसका उद्धार कर देता है; किन्तु यदि कोई आप जैसे वैष्णव के चरणों में अपराध कर दे, तो उसके उद्धार का कोई मार्ग नहीं बचता!",
        "आपके हृदय में साक्षात् भगवान् श्री गोविन्द सदा विश्राम करते हैं, और स्वयं गोविन्द कहते हैं—'वैष्णव ही मेरे प्राण हैं!'",
        "मैं अपने प्रत्येक जन्म में आपके श्रीचरणों की पावन धूलि पाने की ही अभिलाषा करता हूँ। हे प्रभु! इस नरोत्तम दास को अपना दास मानकर मुझ पर अपनी अहैतुकी कृपा कीजिए।"
      ]
    },
    "58": {
      title: "एक दिन शान्तिपुरे (शाक-आस्वादन)",
      transliterations: [
        "भाइ-रे!\nएक-दिन शान्तिपुरे, प्रभु अद्वैतेर घरे, दुइ प्रभु भोजने बसिलो।\nशाक करि’ आस्वादन, प्रभु बोले भक्त-गण, एइ शाक कृष्ण आस्वादिलो॥ (१)",
        "हेनो शाक-आस्वादने, कृष्ण-प्रेम आइसे मने, सेइ प्रेमे करो आस्वादन।\nजड़-बुद्धि परिहरि’, प्रसाद भोजन करि’, ‘हरि हरि’ बोल सर्व-जन॥ (२)"
      ],
      translations: [
        "हे भाइयो! एक दिन शान्तिपुर में श्री अद्वैताचार्य प्रभु के घर पर श्री गौरांग महाप्रभु और श्री नित्यानन्द प्रभु भोजन करने बैठे। विविध शाकों का आस्वादन करते हुए महाप्रभु ने सभी भक्तों से कहा—'यह शाक साक्षात् भगवान् श्रीकृष्ण ने बड़े प्रेम से ग्रहण किया है!'",
        "'ऐसे दिव्य शाक का आस्वादन करने से मन में श्रीकृष्ण के प्रति विशुद्ध प्रेम जागृत होता है; अतः उसी दिव्य प्रेम-भाव से इसका आस्वादन करो। इस प्रसाद में भौतिक जड़-बुद्धि को त्यागकर, भगवत्प्रसाद ग्रहण करते हुए सभी लोग प्रेम से 'हरि! हरि!' बोलो!'"
      ]
    },
    "59": {
      title: "एखन बुझिनु प्रभु! तोमार चरण",
      transliterations: [
        "एखन बुझिनु प्रभु! तोमार चरण।\nअशोकाभयामृत-पूर्ण सर्व-क्षण॥ (१)",
        "सकल छाड़िया तुवा चरण-कमले।\nपड़ियाछि आमि नाथ! तव पद-तले॥ (२)",
        "तव पाद-पद्म नाथ! रखिबे आमारे।\nआर रक्षा-कर्ता नाहि ए भव-संसारे॥ (३)",
        "आमि तव नित्य-दास—जानिनु ए-बार।\nआमार पालन-भार एखन तोमार॥ (४)",
        "बड़ो दुःख पाइयाछि स्वतन्त्र जीवने।\nदुःख दूरे गेलो ओ पद-वरणे॥ (५)",
        "ये-पद लागिया रमा तपस्या करिला।\nये-पद पाइया शिव शिवत्व लभिला॥ (६)",
        "ये-पद लभिया ब्रह्मा कृतार्थ हइला।\nये-पद नारद मुनि हृदये धरिला॥ (७)",
        "सेइ से अभय पद शिरेते धरिया।\nपरम-आनन्दे नाचि पद-गुण गाइया॥ (८)",
        "संसार-विपद ह’ते अवश्य उद्धार।\nभकतिविनोद, ओ-पद करिबे तोमार॥ (९)"
      ],
      translations: [
        "हे प्रभु! अब मुझे समझ में आ गया है कि आपके श्रीचरण समस्त शोक और भय से रहित हैं और प्रतिक्षण अमृतरस से परिपूर्ण हैं।",
        "सब कुछ त्यागकर, हे नाथ! मैं आपके चरणकमलों की शरण में आपके पादपद्मों के नीचे आ गिरा हूँ।",
        "हे नाथ! आपके चरणकमल ही मेरी रक्षा करेंगे; इस भव-संसार में आपके अतिरिक्त जीवों का अन्य कोई रक्षक नहीं है।",
        "अब मैंने यह जान लिया है कि मैं आपका नित्य दास हूँ; अतः अब मेरे पालन-पोषण और रक्षा का सम्पूर्ण भार आपका है।",
        "आपसे विमुख होकर स्वतन्त्र जीवन बिताने में मैंने अत्यन्त भारी दुःख उठाए हैं; किन्तु आपके पावन चरणों का वरण करते ही मेरे सारे दुःख दूर हो गए।",
        "जिन पावन चरणों की प्राप्ति हेतु लक्ष्मी जी ने घोर तपस्या की, और जिन्हें प्राप्त करके भगवान् शिव ने अपना 'शिवत्व' (परम मंगलमय स्वरूप) प्राप्त किया,",
        "जिन चरणों को पाकर ब्रह्मा जी कृतार्थ हो गए, और देवर्षि नारद मुनि ने जिन्हें सदा अपने हृदय में धारण किए रखा,",
        "उन्हीं अभय चरणों को अपने मस्तक पर धारण करके, मैं परम आनन्द में नृत्य करता हूँ और आपके चरणों के दिव्य गुणों का गान करता हूँ।",
        "भक्तिविनोद कहते हैं कि आपके वे दिव्य चरणकमल मुझे इस संसार के समस्त संकटों और भव-बन्धन से अवश्य ही उद्धार करेंगे!"
      ]
    },
    "60": {
      title: "एमन दुर्मति, संसार भितरे",
      transliterations: [
        "(प्रभु हे!)\nएमन दुर्मति, संसार भितरे,\nपड़िया आछिनु आमि।\nतव निज-जन, कोनो महाजने,\nपाठाइया दिले तुमि॥ (१)",
        "दया करि’ मोरे, पतित देखिया,\nकहिलो आमारे गिया।\nओहे दीन-जन, शुनो भालो कथा,\nउल्लसित ह’बे हिया॥ (२)",
        "तोमारे तारिते, श्री-कृष्ण-चैतन्य,\nनवद्वीपे अवतार।\nतोमा हेनो कत, दीन हीन जने,\nकरिलेन भव-पार॥ (३)",
        "वेदेर प्रतिज्ञा, राखिबारे तरे,\nरुक्म-वर्ण विप्र-सुत।\nमहाप्रभु नामे, नदीया माताय,\nसङ्गे भाइ अवधूत॥ (४)",
        "नन्द-सुत जिनि, चैतन्य गोसाञि,\nनिज-नाम करि’ दान।\nतारिलो जगत्, तुमि-ओ जाइया,\nलहो निज-परित्राण॥ (५)",
        "से कथा शुनिया, आसियाछि, नाथ!\nतोमार चरण-तले।\nभकतिविनोद, काँदिया काँदिया,\nआपन-काहिनी बोले॥ (६)"
      ],
      translations: [
        "हे प्रभु! मेरी बुद्धि इतनी भ्रष्ट और दुष्ट थी कि मैं इस संसार-कूप में गिरा पड़ा था। किन्तु आपने अहैतुकी कृपा करके अपने निज-परिकर किसी महाजन (शुद्ध भक्त/गुरुदेव) को मेरा उद्धार करने हेतु भेजा।",
        "उन्होंने मुझ परम पतित जीव पर दया करके मुझसे कहा—'हे दीन जन! एक परम आनन्ददायक शुभ समाचार सुनो, जिससे तुम्हारा हृदय उल्लसित हो उठेगा!",
        "तुम्हारा उद्धार करने के लिए साक्षात् भगवान् श्रीकृष्ण चैतन्य महाप्रभु के रूप में नवद्वीप धाम में अवतरित हुए हैं। उन्होंने तुम्हारे जैसे असंख्य दीन-हीन पतित जीवों को इस भवसागर से पार उतार दिया है!",
        "वेदों की प्रतिज्ञा की रक्षा हेतु वे सुवर्ण-कांति ब्राह्मण-कुमार (श्री चैतन्य) के रूप में अवतरित हुए हैं और अपने भाई अवधूत श्री नित्यानन्द के साथ 'महाप्रभु' नाम से सम्पूर्ण नदिया को प्रेमोन्मत्त कर रहे हैं!",
        "जो नन्दनन्दन श्रीकृष्ण हैं, वे ही श्री चैतन्य गोस्वामी हैं। वे अपने पावन हरिनाम का मुक्त हस्त से दान देकर सम्पूर्ण जगत का उद्धार कर रहे हैं; तुम भी जाकर अपने जीवन का परित्राण प्राप्त कर लो!'",
        "उन साधु के मुख से यह दिव्य वाणी सुनकर, हे नाथ! मैं आपके पावन चरणकमलों के नीचे उपस्थित हुआ हूँ। यह भक्तिविनोद रो-रोकर आपके श्रीचरणों में अपने जीवन की दुःखभरी आत्मकथा सुना रहा है।"
      ]
    },
    "61": {
      title: "श्री श्री वृन्दादेवी अष्टकम् (गाङ्गेय-चाम्पेय-तड़िद्-विनिन्दि)",
      transliterations: [
        "गाङ्गेय-चाम्पेय-तड़िद्-विनिन्दि-\nरोचिः-प्रवाह-स्नापितात्म-वृन्दे!\nबन्धूक-बन्धु-द्युति-दिव्य-वासो\nवृन्दे! नमस ते चरणारविन्दम्॥ (१)",
        "बिम्बाधरोदित्वर-मन्द-हास्य-\nनासाग्र-मुक्ता-द्युति-दीपितास्ये।\nविचित्र-रत्नाभरण-श्रियाढ्ये!\nवृन्दे! नमस ते चरणारविन्दम्॥ (२)",
        "समस्त-वैकुण्ठ-शिरोमणौ श्री-\nकृष्णस्य वृन्दावन-धन्य-धाम्नि।\nदत्ताधिकारे वृषभानु-पुत्र्या\nवृन्दे! नमस ते चरणारविन्दम्॥ (३)",
        "त्वद्-आज्ञया पल्लव-पुष्प-भृङ्ग-\nमृगादिभिर् माधव-केलि-कुञ्जाः।\nमध्वादिभिर् भान्ति विभूष्यमाणा\nवृन्दे! नमस ते चरणारविन्दम्॥ (४)",
        "त्वदीय-दूत्येन निकुञ्ज-यूनोर्\nअत्युत्कयोः केलि-विलास-सिद्धिः।\nत्वत्-सौभगं केन निरुच्यतां तद्\nवृन्दे! नमस ते चरणारविन्दम्॥ (५)",
        "रासाभिलाषो वसतिश् च वृन्दा-\nवने त्वद्-ईशाङ्घ्रि-सरोज-सेवा।\nलभ्या च पुंसां कृपया तवैव\nवृन्दे! नमस ते चरणारविन्दम्॥ (६)",
        "त्वं कीर्त्यसे सात्वत-तन्त्र-विद्भिर्\nलीलाभिधाना किल कृष्ण-शक्तिः।\nतवैव मूर्तिस् तुलसी नृ-लोके\nवृन्दे! नमस ते चरणारविन्दम्॥ (७)",
        "भक्त्या विहीना अपराध-लक्षैः\nक्षिप्ताश् च कामादि-तरङ्ग-मध्ये।\nकृपामयि! त्वां शरणं प्रपन्ना\nवृन्दे! नमस ते चरणारविन्दम्॥ (८)",
        "वृन्दाष्टकं यः शृणुयात् पठेद् वा\nवृन्दावनाधीश-पदाब्ज-भृङ्गः।\nस प्राप्य वृन्दावन-नित्य-वासं\nतत्-प्रेम-सेवां लभते कृतार्थः॥ (९)"
      ],
      translations: [
        "हे वृन्दा देवी! आपकी दिव्य देहकान्ति पिघले हुए स्वर्ण, चम्पा पुष्प और चमकती हुई बिजली की आभा को भी लज्जित करती है। आप बन्धूक पुष्प के समान अरुण (लाल) दिव्य वस्त्र धारण करती हैं। हे वृन्दे! मैं आपके चरणकमलों में सादर प्रणाम करता हूँ।",
        "आपके बिम्ब-फल सदृश लाल अधरों पर मधुर मन्द-मुस्कान सुशोभित है, नासिका के अग्रभाग में देदीप्यमान मोती आपके मुखकमल को प्रकाशित कर रहा है और आप विविध रत्नाभूषणों से अलंकृत हैं। हे वृन्दे! मैं आपके चरणकमलों में प्रणाम करता हूँ।",
        "समस्त वैकुण्ठ लोकों के शिरोमणि श्रीकृष्ण के परम पावन वृन्दावन धाम की रक्षा एवं सेवा का सम्पूर्ण अधिकार वृषभानु-नन्दिनी श्रीराधारानी ने आपको प्रदान किया है। हे वृन्दे! मैं आपके चरणकमलों में प्रणाम करता हूँ।",
        "आपकी ही आज्ञा से नवीन पल्लव, पुष्प, भौंरे, हरिण, कोयल और मधु-धाराएं माधव के दिव्य लीला-कुञ्जों को नित्य सुशोभित करते हैं। हे वृन्दे! मैं आपके चरणकमलों में प्रणाम करता हूँ।",
        "आपकी ही दिव्य दूत-सेवा के द्वारा निकुञ्ज-किशोर (श्रीराधा-कृष्ण) की दिव्य विलास-लीलाएं परिपूर्ण होती हैं; आपके इस असीम सौभाग्य का वर्णन कौन कर सकता है? हे वृन्दे! मैं आपके चरणकमलों में प्रणाम करता हूँ।",
        "श्री वृन्दावन धाम में नित्य वास, श्रीराधा-कृष्ण के युगल चरणकमलों की नित्य सेवा और रास-लीला में प्रवेश—ये सब केवल आपकी ही अहैतुकी कृपा से सम्भव हैं। हे वृन्दे! मैं आपके चरणकमलों में प्रणाम करता हूँ।",
        "सात्वत-तन्त्र के ज्ञाता आपकी महिमा गाते हैं कि आप श्रीकृष्ण की अन्तरंग 'लीला-शक्ति' हैं। इस मनुष्य लोक में 'तुलसी देवी' आपका ही साक्षात् विग्रह हैं। हे वृन्दे! मैं आपके चरणकमलों में प्रणाम करता हूँ।",
        "जो भक्ति से हीन हैं और लाखों अपराधों के कारण काम, क्रोध आदि की तरंगों में फंसे हैं, वे हे करुणामयी! आपकी ही शरण ग्रहण करते हैं। हे वृन्दे! मैं आपके चरणकमलों में प्रणाम करता हूँ।",
        "जो व्यक्ति वृन्दावन के अधीश्वर श्रीराधा-कृष्ण के चरणकमलों का भौंरा बनकर इस 'वृन्दाष्टकम्' का नित्य पाठ या श्रवण करता है, वह श्रीधाम वृन्दावन में नित्य वास प्राप्त करके युगल-प्रेम की दिव्य सेवा प्राप्त कर कृतार्थ हो जाता है।"
      ]
    },
    "62": {
      title: "गरुड़ दण्डकम् (Garuḍa Daṇḍakam)",
      transliterations: [
        "नमः पन्नग नद्धाय वैकुण्ठ वशवर्तिने\nश्रुति सिन्धु सुधोत्पाद मन्दराय गरुत्मते",
        "गरुडमखिल वेद नीडाधिरूढं द्विषत् पीडनोत्कण्ठिताकुण्ठ वैकुण्ठ पीठीकृत\nस्कन्धमीडे स्वनीडा गति प्रीत रुद्रा सुकीर्ति स्तनाभोग गाढोपगूढ\nस्फुरत् कण्टक व्रात वेध व्यथावेपमान द्विजिह्वाधिपाकल्प विष्फार्यमाण\nस्फटावाटिका रत्न रोचिश्छटा राजिनीराजिटं कान्ति कल्लोलिनी राजितम्",
        "जय गरुड सुपर्ण दर्वीकराहार देवाधिपाहार हारिन्\nदिवौकस्पति क्षिप्त दम्भोलि धाराकिणाकल्प कल्पान्त वातूल कल्पोदयानल्प\nवीरायितोद्यच् चमत्कार दैत्यारि जैत्र ध्वजारोह निर्धारितोत्कर्ष\nसङ्कर्षणात्मन् गरुत्मन् मरुत्पञ्च काधीश सत्यादिमूर्ते न कश्चित्\nसमस्ते नमस्ते पुनस्ते नमः",
        "नम इदमजहत् सपर्याय पर्याय निर्यात पक्षानिलास्फालनोद् वेल पाथोधि\nवीचीच पेटाहतागाध पाताल भांकार संक्रुद्ध नागेन्द्र पीडासृणी भाव\nभास्वन् नख श्रेणये चण्ड तुण्डाय नृत्यद् भुजाङ्ग भ्रुवे वज्रिणे दंष्ट्रया\nतुभ्यम् अध्यात्म विद्या विधेया विधेया भवद् दास्यम् आपादयेथा दयेथाश्च मे",
        "मनुरनुगत पक्षि वक्त्र स्फुरत् तारकस्तावकश् चित्र भानुप्रिया शेखरस् त्रायतां\nनस्त्रिवर्गापवर्ग प्रसूतिः परव्योम धामन्\nवलद्वेषि दर्प ज्वलद् वालखिल्य प्रतिज्ञावतीर्ण स्थिराम् तत्त्व बुद्धिं पराम्\nभक्ति धेनुं जगन् मूलकन्दे मुकुन्दे महानन्द दोग्ध्रीं दधीथा\nमुधाकामहीनाम् अहीनामहीनान्तक",
        "षट्त्रिंशद् गण चरणो नर परिपाटी नवीन गुम्भगणः\nविष्णु रथ दण्डको\u0027यं विघटयतु विपक्ष वाहिनी व्यूहम्",
        "विचित्र सिद्धिदः सो\u0027यं वेङ्कटेश विपश्चिता\nगरुडध्वज तोषाय गीतो गरुड दण्डकः"
      ],
      translations: [
        "My salutations to Garuda with the beautiful wings. His limbs are adorned by the mighty serpents that he has conquered in battle. They are his jewellery. He does all the intimate kainkaryas to his Lord and is His Antharanga dhaasan. Garuda is devoted always to the Lord and His services. He is adept like the Mandara Mountain in churning the milky ocean of Vedas and to bring out the Brahma Vidyas. We can get the benefits of these Brahma Vidyas by offering our worship to him. My salutations are to him.",
        "Garuda Bhagavan has designed the Vedas as his cage and uses that cage as his seat. (This suggests that the Vedas sing his praise). His Lord Sriman Narayana is bent upon destroying the enemies of His devotees. No one can stop Sriman Narayana in these endeavors. When He sets about to destroy the enemies of His devotees, he uses the shoulders of Garuda as his transport. When Garuda transports his Lord on His missions, his wives—Rudrai and Sukeerthi—miss his absence from home. When the Lord\u0027s mission is successfully concluded, Garuda returns to his wives and they embrace him intimately with affection. In that ecstatic state, the hairs on the body of Garuda become stiff like thorns. This in turn hurts the serpents, which are covering his body. The serpents are overcome with fear and they raise their hoods. On those occasions, the ratnas positioned on their hoods radiate their brilliant red rays. That splendorous group of red rays appear at that time as the mangala Aarathi to Garuda and he sparkles in that flood of red light.",
        "O Garuda Bhagavan! You have been named Suparna, because of the beauty of your wings. Serpents of immense size serve as your food. You brought Nectar, the food of the Devas- from Indra Loka to release your mother from the bonds of servitude. Indra got angry at you during that time and threw his Vajra weapon at you. The sharp edge of that powerful weapon caused wounds on your wings and rest of the body. The welts from those wounds look today as pieces of jewellery on your body and attest to your heroic deed in defeating Indra. Your other heroic deeds stand out like the mighty winds that sweep the universe during the time of the great deluge. You are sitting on the flag of your Lord, which denotes His victory over His enemies; from your position on the flag of your Lord, we are able to infer your glories. You have incarnated as Sankarshana among the four Vyuha Murthys of Sriman Narayana, which are Vasudeva, Sankarshana, Pradhumna and Aniruddha. You have divided yourself into five forms-- Satyar, Suparnar, Garudar, Taarkshyar and VihagEswarar-- and matched those five forms with the five Vayus (Praanan, Apaanan, Samaanan, Udhaanan and Vyaanan) and shine thereafter as a supreme Devan. O Lord with the most exquisitely beautiful golden Wings! There is none, who is equal to you. I offer my salutations to you first and then again repeat my salutations.",
        "O Garuda Bhagavan! Learned scholars offer their uninterrupted worships to you. Your wings in flight generate mighty winds that stir up all the oceans and make them flow over their boundaries. The waves that rise and fall from those powerful winds reach down to the netherworld (Paatalam) and the effect is like a violent blow given by the palm of one\u0027s hand. A frightening sound heard as \"Bhaam\" reverberates around the world at that time. The mighty elephants guarding the quarters are shaken up by this mighty sound of \"Bhaam\" and run to attack you, the generator of that sound. Your rows of sharp nails acting as the elephant goad attack those angry elephants of the quarters and repulse them. Your mighty beak raises terror in the minds of your enemies. When you knot your brows, it looks like the movement of the hood of a Cobra. Your canine teeth look like the Vajra weapon of Indra and strikes terror in the hearts of your enemies. My salutations to you of such limitless glory! May thou bless me so that Brahma Vidyas become easy to be possessed by me! Please bless me out of your infinite compassion so that I can have the good fortune to offer kainkaryams to you.",
        "O Garuda Bhagavan residing permanently in Sri Vaikuntam! Your mantram confers to the reciters the four fold (Dharma-Artha-Kama -Moksha) goals of Life. That mantram of yours made up of 5 syllables, has the Pranavam as its first syllable. At the end, it carries the syllable associated with the wife of Agni. May the mantram of that structure protect us! Once, Devendran became arrogant over his powers and insulted the Sages with the name of VaalakilyAs. (The sages got angry and cursed Indra. They cursed that Indra\u0027s arrogance be destroyed by an incarnation of Sankarshana (Garuda) on a future date). You were born from the vow made by the VaalakilyAs that you destroy the mighty arrogance of Indra and you made their words come true. You serve as the lord of Death for mighty serpents that challenged you. Please bless me with the discriminating knowledge to distinguish between true (superior) and false (inferior) knowledge. Your Lord is the fundamental and principal cause of all the universes. Please bless me to have the cow representing the limitless devotion to your Lord, so that it can yield for me its delectable milk. May that devotion of mine be free from the distractions of the insignificant and evanescent pleasures of life! May thou confer on me the boon of possessing such a superior devotion to your Lord and True Knowledge about Him!",
        "This entire Garuda Dhandakam is of the form of one slokam. This has four Paadas. Each of the Paadas has 36 GaNaas. Each Gana has three syllables. This Dhandakam follows strictly the rules of composing Dhandakams and has the NagaNaas and RagaNaas in each of the Paadas and yields novel word constructions. When one recites this Garuda Dhandakam, it will destroy the formations of the enemies, who have assembled to do battle with us and scatter them to the winds.",
        "This Garuda Dhandakam was composed and sung by adiyEn, the Vidwan known as Venkatesa to please the Lord, who has Garuda on his flagstaff. The recitation of this Garuda Dhandakam will confer on the reciter multifold blessings and fulfill their heartfelt wishes of every kind."
      ]
    },

    "63": {
      title: "‘गौराङ्ग’ बलिते हबे पुलक शरीर",
      transliterations: [
        "‘गौराङ्ग’ बलिते हबे पुलक शरीर।\n‘हरि हरि’ बलिते नयने ब’बे नीर॥ (१)",
        "आर कबे निताइ-चाँदेर करुणा हइबे।\nसंसार-वासना मोर कबे तुच्छ ह’बे॥ (२)",
        "विषय छाडिया कबे शुद्ध ह’बे मन।\nकबे हाम हेरब श्री-वृन्दावन॥ (३)",
        "रूप-रघुनाथ-पदे हइबे आकुति।\nकबे हाम बुझब से युगल-पीरिति॥ (४)",
        "रूप-रघुनाथ-पदे रहु मोर आश।\nप्रार्थना करये सदा नरोत्तम दास॥ (५)"
      ],
      translations: [
        "कब वह शुभ दिन आएगा जब 'गौरांग' का नाम लेते ही मेरा सम्पूर्ण शरीर रोमांचित हो उठेगा और 'हरि हरि' बोलते ही मेरे नेत्रों से अश्रु-धारा बहने लगेगी?",
        "कब श्री नित्यानन्द चन्द्र मुझ पर कृपा करेंगे जिससे संसार की समस्त विषय-भोग वासनाएं मेरे लिए अत्यन्त तुच्छ हो जाएँगी?",
        "सांसारिक विषय-वासनाओं को त्यागकर कब मेरा मन पूर्णतः शुद्ध होगा और कब मैं दिव्य श्री वृन्दावन धाम का साक्षात् दर्शन कर सकूँगा?",
        "श्रील रूप गोस्वामी और श्रील रघुनाथ दास गोस्वामी के पावन श्रीचरणों में मेरी कब प्रगाढ़ व्याकुलता उत्पन्न होगी, जिसके द्वारा मैं श्रीराधा-कृष्ण के उस दिव्य युगल-प्रेम को समझ सकूँगा?",
        "श्री रूप गोस्वामी और श्री रघुनाथ दास गोस्वामी के चरणकमलों की शरण ही मेरी एकमात्र आशा बनी रहे—यह नरोत्तम दास सदा यही प्रार्थना करता है।"
      ]
    },
    "64": {
      title: "à¤—à¥Œà¤°à¤¾à¤™à¥à¤— à¤•à¤°à¥à¤£à¤¾ à¤•à¤°à¥‹ à¤¦à¥€à¤¨ à¤¹à¥€à¤¨ à¤œà¤¨à¥‡",
      transliterations: [
        "à¤—à¥Œà¤°à¤¾à¤™à¥à¤— à¤•à¤°à¥à¤£à¤¾ à¤•à¤°à¥‹, à¤¦à¥€à¤¨ à¤¹à¥€à¤¨ à¤œà¤¨à¥‡à¥¤\nà¤®à¥‹-à¤¸à¤®à¥‹ à¤ªà¤¤à¤¿à¤¤ à¤ªà¥à¤°à¤­à¥, à¤¨à¤¾à¤¹à¤¿ à¤¤à¥à¤°à¤¿-à¤­à¥à¤µà¤¨à¥‡à¥¥ (à¥§)",
        "à¤¦à¤¨à¥à¤¤à¥‡ à¤¤à¥ƒà¤£ à¤§à¤°à¤¿' à¤—à¥Œà¤°, à¤¡à¤¾à¤•à¤¿ à¤¹à¥‡ à¤¤à¥‹à¤®à¤¾à¤°à¥¤\nà¤•à¥ƒà¤ªà¤¾ à¤•à¤°à¤¿' à¤à¤¸à¥‹ à¤†à¤®à¤¾à¤°, à¤¹à¥ƒà¤¦à¤¯ à¤®à¤¨à¥à¤¦à¤¿à¤°à¥‡à¥¥ (à¥¨)",
        "à¤¯à¤¦à¤¿ à¤¦à¤¯à¤¾ à¤¨à¤¾ à¤•à¤°à¤¿à¤¬à¥‡, à¤ªà¤¤à¤¿à¤¤ à¤¦à¥‡à¤–à¤¿à¤¯à¤¾à¥¤\nà¤ªà¤¤à¤¿à¤¤ à¤ªà¤¾à¤µà¤¨ à¤¨à¤¾à¤®, à¤•à¤¿à¤¸à¥‡à¤° à¤²à¤¾à¤—à¤¿à¤¯à¤¾à¥¥ (à¥©)",
        "à¤ªà¤¡à¤¼à¥‡à¤›à¤¿ à¤­à¤µ à¤¤à¥à¤«à¤¾à¤¨à¥‡, à¤¨à¤¾à¤¹à¤¿à¤• à¤¨à¤¿à¤¸à¥à¤¤à¤¾à¤°à¥¤\nà¤¶à¥à¤°à¥€ à¤šà¤°à¤£ à¤¤à¤°à¤£à¥€ à¤¦à¤¾à¤¨à¥‡, à¤¦à¤¾à¤¸à¥‡ à¤•à¤°à¥‹ à¤ªà¤¾à¤°à¥¥ (à¥ª)",
        "à¤¶à¥à¤°à¥€ à¤•à¥ƒà¤·à¥à¤£ à¤šà¥ˆà¤¤à¤¨à¥à¤¯ à¤ªà¥à¤°à¤­à¥, à¤¦à¤¾à¤¸à¥‡à¤° à¤…à¤¨à¥à¤¦à¤¾à¤¸à¥¤\nà¤ªà¥à¤°à¤¾à¤°à¥à¤¥à¤¨à¤¾ à¤•à¤°à¤¾à¤¯à¥‡ à¤¸à¤¦à¤¾, à¤¨à¤°à¥‹à¤¤à¥à¤¤à¤® à¤¦à¤¾à¤¸à¥¥ (à¥«)"
      ],
      translations: [
        "à¤¹à¥‡ à¤®à¥‡à¤°à¥‡ à¤ªà¥à¤°à¤¿à¤¯ à¤ªà¥à¤°à¤­à¥ à¤—à¥Œà¤°à¤¾à¤‚à¤—! à¤•à¥ƒà¤ªà¤¯à¤¾ à¤‡à¤¸ à¤¦à¥€à¤¨-à¤¹à¥€à¤¨ à¤”à¤° à¤ªà¤¤à¤¿à¤¤ à¤œà¥€à¤µ à¤ªà¤° à¤…à¤ªà¤¨à¥€ à¤•à¤°à¥à¤£à¤¾ à¤•à¥€à¤œà¤¿à¤à¥¤ à¤¹à¥‡ à¤ªà¥à¤°à¤­à¥! à¤¤à¥€à¤¨à¥‹à¤‚ à¤­à¥à¤µà¤¨à¥‹à¤‚ à¤®à¥‡à¤‚ à¤®à¥‡à¤°à¥‡ à¤¸à¤®à¤¾à¤¨ à¤•à¥‹à¤ˆ à¤¦à¥‚à¤¸à¤°à¤¾ à¤ªà¤¤à¤¿à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤",
        "à¤¦à¤¾à¤‚à¤¤à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¤à¤¿à¤¨à¤•à¤¾ à¤¦à¤¬à¤¾à¤•à¤°, à¤¹à¥‡ à¤ªà¥à¤°à¤­à¥ à¤—à¥Œà¤°! à¤®à¥ˆà¤‚ à¤†à¤ªà¤•à¥‹ à¤ªà¥à¤•à¤¾à¤° à¤°à¤¹à¤¾ à¤¹à¥‚à¤â€”à¤•à¥ƒà¤ªà¤¯à¤¾ à¤•à¥ƒà¤ªà¤¾ à¤•à¤°à¤•à¥‡ à¤®à¥‡à¤°à¥‡ à¤¹à¥ƒà¤¦à¤¯-à¤®à¤¨à¥à¤¦à¤¿à¤° à¤®à¥‡à¤‚ à¤ªà¤§à¤¾à¤°à¤¿à¤à¥¤",
        "à¤¯à¤¦à¤¿ à¤†à¤ª à¤®à¥à¤à¥‡ à¤ªà¤¤à¤¿à¤¤ à¤¦à¥‡à¤–à¤•à¤° à¤­à¥€ à¤®à¥à¤ à¤ªà¤° à¤¦à¤¯à¤¾ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¥‡à¤‚à¤—à¥‡, à¤¤à¥‹ à¤«à¤¿à¤° à¤†à¤ªà¤•à¤¾ 'à¤ªà¤¤à¤¿à¤¤-à¤ªà¤¾à¤µà¤¨' à¤¨à¤¾à¤® à¤•à¤¿à¤¸à¤²à¤¿à¤ à¤¹à¥ˆ?",
        "à¤®à¥ˆà¤‚ à¤‡à¤¸ à¤­à¤µ-à¤¸à¤‚à¤¸à¤¾à¤° à¤°à¥‚à¤ªà¥€ à¤­à¥€à¤·à¤£ à¤¤à¥‚à¤«à¤¼à¤¾à¤¨ à¤®à¥‡à¤‚ à¤—à¤¿à¤° à¤ªà¤¡à¤¼à¤¾ à¤¹à¥‚à¤, à¤œà¤¹à¤¾à¤ à¤¸à¥‡ à¤‰à¤¦à¥à¤§à¤¾à¤° à¤•à¤¾ à¤•à¥‹à¤ˆ à¤‰à¤ªà¤¾à¤¯ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¥‡ à¤¦à¤¿à¤µà¥à¤¯ à¤šà¤°à¤£-à¤•à¤®à¤²à¥‹à¤‚ à¤°à¥‚à¤ªà¥€ à¤¨à¥Œà¤•à¤¾ à¤•à¤¾ à¤¦à¤¾à¤¨ à¤¦à¥‡à¤•à¤° à¤‡à¤¸ à¤¦à¤¾à¤¸ à¤•à¥‹ à¤ªà¤¾à¤° à¤‰à¤¤à¤¾à¤°à¤¿à¤à¥¤",
        "à¤¶à¥à¤°à¥€ à¤•à¥ƒà¤·à¥à¤£ à¤šà¥ˆà¤¤à¤¨à¥à¤¯ à¤ªà¥à¤°à¤­à¥ à¤•à¥‡ à¤¦à¤¾à¤¸à¥‹à¤‚ à¤•à¤¾ à¤…à¤¨à¥à¤¦à¤¾à¤¸, à¤¯à¤¹ à¤¨à¤°à¥‹à¤¤à¥à¤¤à¤® à¤¦à¤¾à¤¸, à¤¸à¤¦à¥ˆà¤µ à¤¯à¤¹à¥€ à¤ªà¥à¤°à¤¾à¤°à¥à¤¥à¤¨à¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤"
      ]
    },
    "65": {
      title: "गौराङ्ग सुन्दर प्रेम जलधर",
      transliterations: [
        "गौराङ्ग सुन्दर, प्रेम जलधर तप्त काञ्चन काय।\nनदीया नगरे, हरि प्रेम भरे नाचिया नाचिया याय॥ (१)",
        "रक्त कमल, कर करपदतल शतदल मुख शशी।\nनखरे नखरे, सतत विहरे शशधर राशि राशि॥ (२)",
        "वेणु-वीणा रब, मने पराभव कण्ठे मधुर भाषा।\nताहे अविराम, गाय हरिनाम जगाये प्रेम-पिपासा॥ (३)",
        "श्रीवास अङ्गने, नितायेर सने नाम संकीर्तने नाचे।\nघरे घरे गिया, जीव उद्धारिया यारे तारे प्रेम याचे॥ (४)",
        "भारत भ्रमिया, पद परशिया पूत करिला धूलि।\nसे चरण रज, हर-कमलज सदा शिरे लय तुलि॥ (५)",
        "लीलार तुलना, मेलेना मेलेना तुमि लीलामय हरि।\nहरि नाम दिले, जीव उद्धारिले नदीयाते अवतरि॥ (६)"
      ],
      translations: [
        "परम रूपवान् श्री गौरांग महाप्रभु प्रेम-रस की वर्षा करने वाले सजल मेघ के समान हैं और उनका दिव्य श्रीअंग पिघले हुए स्वर्ण की कांति जैसा देदीप्यमान है। वे नदिया नगर की गलियों में हरि-प्रेम में विभोर होकर नृत्य करते हुए जा रहे हैं।",
        "उनके दोनों हाथ और चरणकमलों के तलवे रक्त-कमल (लाल कमल) के समान हैं और उनका श्रीमुख सैकड़ों प्रफुल्लित कमलों एवं पूर्ण चन्द्रमा के सदृश है। उनके प्रत्येक नख-रूपी मणियों से अनन्त चन्द्रमाओं की दिव्य ज्योत्स्ना प्रतिक्षण प्रकाशित हो रही है।",
        "उनके मधुर कंठ की वाणी के समक्ष बाँसुरी और वीणा की मधुर झंकार भी लज्जित हो जाती है। वे उस दिव्य कंठ से निरन्तर हरिनाम का गान करते हुए सभी जीवों में कृष्ण-प्रेम की दिव्य प्यास जगाते हैं।",
        "श्रीवास पंडित के आंगन में वे श्री नित्यानन्द प्रभु के साथ महा-संकीर्तन में मग्न होकर नृत्य करते हैं। वे घर-घर जाकर पतित जीवों का उद्धार करते हैं और हर किसी से केवल कृष्ण-प्रेम की ही याचना करते हैं।",
        "सम्पूर्ण भारतवर्ष का भ्रमण करके उन्होंने अपने चरण-स्पर्श से इस भूमि की धूलि को परम पावन बना दिया। उनके उन दिव्य चरणों की धूलि को देवाधिदेव शिव और भगवान् ब्रह्मा सदा अपने मस्तक पर धारण करते हैं।",
        "आपकी दिव्य लीलाओं की कोई तुलना संसार में नहीं मिल सकती! हे लीलामय श्रीहरि! आपने नदिया (नवद्वीप) धाम में अवतरित होकर मुक्त-हस्त से हरिनाम का दान दिया और समस्त बद्ध जीवों का उद्धार कर दिया।"
      ]
    },
    "66": {
      title: "गौराङ्ग तुमि मोरे दया ना छाड़िहो",
      transliterations: [
        "गौराङ्ग तुमि मोरे दया ना छाड़िहो।\nआपन कोरिया राङ्गा चरणे राखिहो॥ (१)",
        "तोमार चरण लागि सब तेयागिलु।\nशीतल चरण पाय शरण लइलु॥ (२)",
        "ए कुले ओ कुले मुञि दिलु तिलाञ्जलि।\nराखिहो चरणे मोरे आपनार बलि॥ (३)",
        "वासुदेव घोषे बोले चरणे धरिया।\nकृपा करि राखो मोरे पद-छाया दिया॥ (४)"
      ],
      translations: [
        "हे श्री गौरांग महाप्रभु! कृपा करके मुझ पर अपनी दया छोड़ मत दीजिएगा। मुझे अपना निज-सेवक मानकर सदा अपने लाल-लाल चरणकमलों के नीचे स्थान दीजिए।",
        "आपके पावन चरणों की प्राप्ति के लिए मैंने संसार का सब कुछ त्याग दिया है। आपके उन परम शीतल चरणकमलों को पाकर मैंने उनका पूर्ण आश्रय ग्रहण किया है।",
        "मैंने इस लोक (कुल-मर्यादा) और परलोक दोनों को तिलांजलि दे दी है। अब मुझे अपना निज-जन मानकर अपने पावन चरणों में शरण दीजिए।",
        "वासुदेव घोष आपके चरणकमलों को दृढ़तापूर्वक पकड़कर कहते हैं—'हे प्रभु! कृपा करके अपने श्रीचरणों की शीतल छाया प्रदान कर मुझे सदा अपनी सेवा में बनाए रखिए।'"
      ]
    },
    "67": {
      title: "गौराङ्गेर दुटि पद",
      transliterations: [
        "गौराङ्गेर दुटि पद, यार धन-सम्पद, से जाने भकति-रस-सार।\nगौराङ्गेर मधुर-लीला, यार कर्णे प्रवेशिला, हृदय निर्मल भेल तार॥ (१)",
        "जे गौराङ्गेर नाम लय, तार हय प्रेमोदय, तारे मुञि याइ बलिहारी।\nगौराङ्ग-गुणेते झूरे, नित्य-लीला तारे स्फुरे, से जन भकति-अधिकारी॥ (२)",
        "गौराङ्गेर सङ्गी-गणे, नित्य-सिद्ध करि’ माने, से जाय ब्रजेन्द्र-सुत-पाश।\nश्री-गौड़-मण्डल-भूमि, जेबा जाने चिन्तामणि, तार हय ब्रज-भूमे वास॥ (३)",
        "गौर-प्रेम-रसार्णवे, से तरङ्गे जेबा डुबे, से राधा-माधव-अन्तरङ्ग।\nगृहे वा वनेते थाके, ‘हा गौराङ्ग’ ब’ले डाके, नरोत्तम मागे तार सङ्ग॥ (४)"
      ],
      translations: [
        "जिसके जीवन का एकमात्र धन और सर्वस्व श्री गौरांग महाप्रभु के दोनों चरण-कमल हैं, वही वास्तव में भक्ति-रस के सार को समझ सकता है। जिसने श्री गौरांग की मधुर लीलाओं का श्रवण किया, उसका हृदय समस्त भौतिक विकारों से सर्वथा निर्मल हो गया।",
        "जो श्री गौरसुन्दर का पावन नाम लेता है, उसके हृदय में साक्षात् भगवत्प्रेम का उदय हो जाता है; मैं ऐसे भक्त पर बलिहारी जाता हूँ! जो गौरांग के दिव्य गुणों का स्मरण कर प्रेमाश्रु बहाता है, उसके हृदय में राधा-कृष्ण की नित्य लीला प्रकट होती है और वही शुद्ध भक्ति का वास्तविक अधिकारी है।",
        "जो श्री गौरांग के पार्षदों को नित्य-सिद्ध मानता है, वह ब्रजेन्द्रनन्दन श्रीकृष्ण का सान्निध्य प्राप्त करता है। जो श्री नवद्वीप/गौड़-मण्डल को चिन्तामणि धाम (वृन्दावन से अभिन्न) समझता है, उसका नित्य वास श्री वृन्दावन धाम में हो जाता है।",
        "जो गौर-प्रेम रस के महासागर की तरंगों में डूबकी लगाता है, वह श्रीराधा-माधव का अन्तरंग प्रिय भक्त बन जाता है। चाहे कोई गृहस्थ हो अथवा वन में रहने वाला त्यागी, यदि वह 'हा गौरांग!' पुकारता है, तो नरोत्तम दास सदा उसी भक्त का संग माँगता है।"
      ]
    },
    "68": {
      title: "गाय गोरा मधुर स्वरे",
      transliterations: [
        "गाय गोरा मधुर स्वरे—\nहरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।\nहरे राम हरे राम राम राम हरे हरे॥ (१)",
        "गृहे थाको, वने थाको, सदा ‘हरि’ बोले’ डाको,\nसुखे दुःखे भूलो ना’को, वदने हरि-नाम करो रे॥ (२)",
        "माया-जाले बद्ध ह’ये, आछो मिछे काज ल’ये,\nएखन चेतन पे’ये, ‘राधा-माधव’ नाम बोलो रे॥ (३)",
        "जीवन हइलो शेष, ना भजिले हृषीकेश।\nभक्तिविनोदोपदेश, एकबार नाम-रसे मातो रे॥ (४)"
      ],
      translations: [
        "श्री गौरसुन्दर अपने अत्यन्त मधुर कंठ से गाते हैं—'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे, हरे राम हरे राम राम राम हरे हरे!'",
        "चाहे तुम गृहस्थ बनकर घर में रहो अथवा संन्यासी होकर वन में, सदा 'हरि! हरि!' पुकारो। सुख हो या दुःख, हरिनाम को कभी मत भूलो, अपने मुख से निरन्तर हरिनाम का संकीर्तन करो!",
        "तुम माया के जाल में बँधकर व्यर्थ के सांसारिक प्रपंचों में फँसे रहे हो; अब दुर्लभ मनुष्य जन्म पाकर चेतना प्राप्त करो और प्रेम से 'राधा-माधव' का पावन नाम बोलो!",
        "तुम्हारा यह जीवन समाप्त होने को आया है, किन्तु तुमने इन्द्रियों के स्वामी भगवान् हृषीकेश का भजन नहीं किया। श्रील भक्तिविनोद ठाकुर का यही उपदेश है कि केवल एक बार हरिनाम के रसामृत में उन्मत्त होकर नाचो!"
      ]
    },
    "69": {
      title: "गाय गोराचाँद जीवेर तरे",
      transliterations: [
        "गाय गोराचाँद जीवेर तरे।\nहरे कृष्ण हरे हरे॥ (ध्रुवपद)",
        "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे,\nहरे कृष्ण हरे हरे।\nहरे राम हरे राम राम राम हरे हरे,\nहरे कृष्ण हरे हरे॥ (१)",
        "एकबार बोल रसना उच्चैः-स्वरे।\n(बोलो) नन्देर नन्दन, यशोदा-जीवन, श्री-राधा-रमण, प्रेम-भरे॥ (२)",
        "(बोल) श्री-मधुसूदन, गोपी-प्राण-धन, मुरली-वदन, नृत्य करे’\n(बोल) अघ-निषूदन, पूतना-घातन, ब्रह्म-विमोहन, ऊर्ध्व-करे॥ (३)"
      ],
      translations: [
        "श्री गोराचाँद (चैतन्य महाप्रभु) सम्पूर्ण बद्ध जीवों के उद्धार हेतु महामंत्र का मधुर गान करते हैं—'हरे कृष्ण हरे हरे!'",
        "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे, हरे कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे, हरे कृष्ण हरे हरे॥",
        "हे रसना (जिह्वा)! तू प्रेम से भरकर केवल एक बार उच्च स्वर से पुकार—'हे नन्दनन्दन! हे यशोदा-जीवन! हे श्रीराधा-रमण!'",
        "दोनों भुजाएं ऊपर उठाकर प्रेमानन्द में नृत्य करते हुए बोलो—'हे श्री मधुसूदन! हे गोपी-प्राण-धन! हे मुरली-वदन! हे अघासुर-विनाशी! हे पूतना-मोक्षदाता! हे ब्रह्मा-विमोहनकारी श्रीकृष्ण!'"
      ]
    },
    "70": {
      title: "गोपीनाथ, मम निवेदन शुनो (प्रथम भाग)",
      transliterations: [
        "गोपीनाथ, मम निवेदन शुनो।\nविषयी दुर्जन, सदा काम-रत, किछु नाहि मोर गुण॥ (१)",
        "गोपीनाथ, आमार भरोसा तुमि।\nतोमार चरणे, लइनु शरण, तोमार किङ्कर आमि॥ (२)",
        "गोपीनाथ, केमने शोधिबे मोरे।\nना जानि भकति, कर्मे जड़-मति, पड़ेछि संसार-घोरे॥ (३)",
        "गोपीनाथ, सकलि तोमार माया।\nनाहि मम बल, ज्ञान सुनिर्मल, स्वाधीन नहे ए काया॥ (४)",
        "गोपीनाथ, नियत चरणे स्थान।\nमागे ए पामर, काँदिया काँदिया, करहे करुणा दान॥ (५)",
        "गोपीनाथ, तुमि त’ सकलि पारो।\nदुर्जन तारिते, तोमार शकति, के आछे पापीर आरो॥ (६)",
        "गोपीनाथ, तुमि कृपा-पारावार।\nजीवेर कारणे, आसिया प्रपञ्चे, लीला कैले सुविस्तार॥ (७)",
        "गोपीनाथ, आमि कि दोषे दोषी।\nअसुर सकल, पाइलो चरण, विनोदी थाकिलो बसि’॥ (८)"
      ],
      translations: [
        "हे गोपीनाथ! मेरी दीन प्रार्थना सुनिए। मैं विषयी, दुष्ट और सदा काम-वासनाओं में रत रहने वाला हूँ, मेरे भीतर कोई सद्गुण लेशमात्र भी नहीं है।",
        "हे गोपीनाथ! मेरी एकमात्र आशा केवल आप हैं। मैंने आपके पावन चरणकमलों में शरण ग्रहण की है; मैं अब आपका नित्य किंकर (दास) हूँ।",
        "हे गोपीनाथ! आप मुझ जैसे पतित का कैसे शोधन करेंगे? मैं भक्ति का मार्ग नहीं जानता, मेरी बुद्धि सकाम कर्मों में जकड़ी है और मैं इस घोर अंधकारमय संसार-कूप में गिर पड़ा हूँ।",
        "हे गोपीनाथ! यहाँ सब कुछ आपकी ही अचिन्त्य माया का विस्तार है। मुझमें कोई आत्मबल या निर्मल ज्ञान नहीं है, और मेरा यह शरीर भी प्रकृति के नियमों के अधीन है।",
        "हे गोपीनाथ! यह परम पापी जीव रो-रोकर आपके दिव्य चरणों में नित्य स्थान की भिक्षा माँगता है; कृपा करके मुझ पर अपनी करुणा का दान कीजिए।",
        "हे गोपीनाथ! आप सर्व-समर्थ हैं, सब कुछ करने में सक्षम हैं। घोर दुष्टों और पापियों का उद्धार करने की पूर्ण शक्ति आप में है; संसार में मुझसे बड़ा पापी और कौन होगा?",
        "हे गोपीनाथ! आप करुणा के अथाह सागर हैं। पतित जीवों के उद्धार हेतु आप इस भौतिक जगत में अवतरित होकर अपनी दिव्य लीलाओं का विस्तार करते हैं।",
        "हे गोपीनाथ! मैं न जाने किस अपराध का दोषी हूँ कि पूतना, अघासुर जैसे सारे असुरों को भी आपके श्रीचरणों की प्राप्ति हो गई, किन्तु यह अभागा भक्तिविनोद संसार में ही पड़ा रह गया!"
      ]
    },
    "71": {
      title: "गोपीनाथ, घुचाओ संसार ज्वाला (द्वितीय भाग)",
      transliterations: [
        "गोपीनाथ, घुचाओ संसार ज्वाला।\nअविद्या-यातना, आरो नाहि सहे, जनम-मरण-माला॥ (१)",
        "गोपीनाथ, आमि त’ कामेर दास।\nविषय-वासना, जागिछे हृदये, फाँदिछे करम फाँस॥ (२)",
        "गोपीनाथ, कबे वा जागिबो आमि।\nकाम-रूप अरि, दूरे तेयागिबो, हृदये स्फुरिबे तुमि॥ (३)",
        "गोपीनाथ, आमि त’ तोमार जन।\nतोमारे छाड़िया, संसार भजिनु, भुलिया आपन-धन॥ (४)",
        "गोपीनाथ, तुमि त’ सकलि जानो।\nआपनार जने, दण्डिया एखनो, श्री-चरणे देहो स्थानो॥ (५)",
        "गोपीनाथ, एइ कि विचार तव।\nविमुख देखिया, छाड़ो निज-जने, ना करो’ करुणा-लब॥ (६)",
        "गोपीनाथ, आमि त मूरख अति।\nकिसे भालो हय, कभू ना बुझिनु, ताइ हेनो मम गति॥ (७)",
        "गोपीनाथ, तुमि त’ पण्डित-वर।\nमूढ़ेरा मङ्गल, तुमि अन्वेषिबे, ए दासे ना भावो’ पर॥ (८)"
      ],
      translations: [
        "हे गोपीनाथ! मेरे इस सांसारिक कष्टों की ज्वाला को शांत कीजिए। अविद्या की यह असह्य यातना और जन्म-मृत्यु की निरन्तर माला अब मुझसे सही नहीं जाती।",
        "हे गोपीनाथ! मैं वास्तव में काम-वासना का दास बन गया हूँ। मेरे हृदय में सांसारिक भोग-वासनाएं जाग रही हैं और कर्मों का फंदा मुझे कसता जा रहा है।",
        "हे गोपीनाथ! मैं कब अज्ञान की निद्रा से जागूँगा? कब मैं इस काम-रूपी शत्रु को दूर फेंकूँगा और आप मेरे हृदय में प्रकाशित होंगे?",
        "हे गोपीनाथ! मैं तो आपका ही निज-जन हूँ; किन्तु अपने वास्तविक धन (आपको) भुलाकर और आपको त्यागकर मैंने इस नश्वर संसार का भजन किया।",
        "हे गोपीनाथ! आप तो सब कुछ जानते हैं। अब अपने इस दास को यथोचित दण्ड देकर कृपापूर्वक अपने श्रीचरणों में स्थान प्रदान कीजिए।",
        "हे गोपीनाथ! क्या आपका यही न्याय है कि अपने ही सेवक को विमुख देखकर आप उसे त्याग दें और उस पर लेशमात्र भी दया न करें?",
        "हे गोपीनाथ! मैं तो अत्यन्त मूर्ख हूँ, मेरा वास्तविक कल्याण किसमें है यह मैंने कभी नहीं समझा; इसीलिए मेरी यह दुर्दशा हुई है।",
        "हे गोपीनाथ! आप तो परम विद्वान और सर्वज्ञ हैं। मुझ मूर्ख के कल्याण का मार्ग आप ही खोजिए और इस दास को पराया मत समझिए।"
      ]
    },
    "72": {
      title: "गोपीनाथ, आमार उपाय नाइ (तृतीय भाग)",
      transliterations: [
        "गोपीनाथ, आमार उपाय नाइ।\nतुमि कृपा करि’, आमारे लइले, संसारे उद्धार पाइ॥ (१)",
        "गोपीनाथ, पड़ेछि मायार फेरे।\nधन, दारा, सुत, घिरेछे आमारे, कामेते रखेछे जेरे॥ (२)",
        "गोपीनाथ, मन जे पागल मोर।\nना माने शासन, सदा अचेतन, विषये र’येछे घोर॥ (३)",
        "गोपीनाथ, हार जे मेनेछि आमि।\nअनेक यतन, हइलो विफल, एखनो भरोसा तुमि॥ (४)",
        "गोपीनाथ, केमने हइबे गति।\nप्रबल इन्द्रिय, वशी-भूत मन, ना छाड़े विषय-रति॥ (५)",
        "गोपीनाथ, हृदये बसिया मोर।\nमनके शमिया, लहो निज पाने, घुचिबे विपद घोर॥ (६)",
        "गोपीनाथ, अनाथ देखिया मोरे।\nतुमि हृषीकेश, हृषीक दमिया, तारो’ हे संसृति-घोरे॥ (७)",
        "गोपीनाथ, गलाय लेगेछे फाँस।\nकृपा-असि धरि’, बन्धन छेदिया, विनोदे करहो दास॥ (८)"
      ],
      translations: [
        "हे गोपीनाथ! मेरे उद्धार का अन्य कोई उपाय नहीं है; यदि आप स्वयं कृपा करके मुझे अपना लें, तभी मैं इस भव-बंधन से मुक्त हो सकता हूँ।",
        "हे गोपीनाथ! मैं माया के भंवरजाल में गिर पड़ा हूँ। धन, पत्नी और पुत्रों के मोह ने मुझे घेर रखा है और काम-वासना ने मुझे सर्वथा जर्जर बना दिया है।",
        "हे गोपीनाथ! मेरा मन सर्वथा उन्मत्त और पागल हो चुका है; वह किसी शासन को नहीं मानता, सदा अचेत रहता है और घोर विषय-भोगों में डूबा रहता है।",
        "हे गोपीनाथ! मैंने अपनी पराजय स्वीकार कर ली है। मन को वश में करने के मेरे सारे प्रयत्न विफल हो गए; अब केवल आप ही मेरी एकमात्र आशा हैं।",
        "हे गोपीनाथ! मेरा कल्याण कैसे होगा? मेरी इन्द्रियां अत्यन्त प्रबल हैं, मन उनके वश में है और वह सांसारिक भोग-आसक्ति को छोड़ता ही नहीं।",
        "हे गोपीनाथ! आप मेरे हृदय में विराजमान होकर मेरे मन का दमन कीजिए और उसे अपनी ओर आकर्षित कर लीजिए; तभी यह घोर संकट दूर होगा।",
        "हे गोपीनाथ! मुझे पूर्णतः अनाथ और असहाय देखकर, हे हृषीकेश (इन्द्रियों के स्वामी)! मेरी इन्द्रियों का दमन करके मुझे इस भयानक संसार-सागर से पार उतारिए।",
        "हे गोपीनाथ! माया का फंदा मेरे गले में कस चुका है। अपनी कृपा-रूपी तलवार उठाकर इस बंधन को काट दीजिए और इस भक्तिविनोद को अपना नित्य दास बना लीजिए।"
      ]
    },
    "73": {
      title: "गोरा-गुण गाओ शुनि",
      transliterations: [
        "गोरा-गुण गाओ शुनि।\nबहु पुण्य फले सो पहुँ मिलल, प्रेम परशमणि॥ (१)",
        "अखिल जीवेर ए शोक सायर, नयन निमेषे शेषे।\nओ-इ प्रेम लेश परश ना पा-इले, पराण जुड़बे किसे॥ (२)",
        "अरुण नयने वरुण आलय, करुणाय निरीखने।\nमधुर आलापे आखरे आखरे, सुधा-धार बरिषणे॥ (३)",
        "प्रेमे ढल ढल पुलके पूरल, आपाद मस्तक तनु।\nवासुदेव कहे शत धार बहे, सुमेरु सिञ्चित तनु॥ (४)"
      ],
      translations: [
        "आओ, हम सब श्री गौरसुन्दर के दिव्य गुणों का श्रवण और कीर्तन करें! अनेक-अनेक जन्मों के पुण्यों के फल स्वरूप हमें वे प्रभु प्राप्त हुए हैं, जो कृष्ण-प्रेम रूपी पारसमणि हैं।",
        "वे पलक झपकते ही समस्त जीवों के शोक-सागर को सुखा देते हैं। यदि उनके उस दिव्य प्रेमामृत का लेशमात्र स्पर्श भी न मिला, तो जीव का यह प्राण कैसे शीतल और शांत होगा?",
        "उनके लाल-लाल कमल नयनों की कृपादृष्टि वरुण के अगाध सागर के समान करुणापूर्ण है। उनके मुख से निकले मधुर संभाषण के अक्षर-अक्षर से अमृत की वर्षा होती है।",
        "उनका सम्पूर्ण श्रीअंग मस्तक से लेकर चरणतल तक प्रेम-विह्वल होकर रोमांचित रहता है। वासुदेव घोष कहते हैं कि महाप्रभु का दिव्य स्वरूप स्वर्णमय सुमेरु पर्वत के समान है जिससे प्रेम-अश्रुओं की सैकड़ों धाराएं बह रही हैं।"
      ]
    },
    "74": {
      title: "गोरा पहुँ ना भजिया मैनु",
      transliterations: [
        "गोरा पहुँ ना भजिया मैनु।\nप्रेम-रतन-धन हेलाय हाराइनु॥ (१)",
        "अधने यतन करि धन तेयागिनु।\nआपन करम-दोषे आपनि डुबिनु॥ (२)",
        "सत्-सङ्ग छाड़ि’ कैलुँ असते विलास।\nते-कारणे लागिलो जे कर्म-बन्ध-फाँस॥ (३)",
        "विषय-विषम-विष सतत खाइनु।\nगौर-कीर्तन-रसे मगन ना हैनूँ॥ (४)",
        "केनो वा आछये प्राण कि सुख पाइया।\nनरोत्तम दास केनो ना गेलो मरिया॥ (५)"
      ],
      translations: [
        "मैंने श्री गौरांग महाप्रभु का भजन नहीं किया और इस प्रकार मैं विनष्ट हो गया। मैंने अनादर और लापरवाही में कृष्ण-प्रेम रूपी अमूल्य रत्न-धन को खो दिया!",
        "असली धन (भगवद्-भक्ति) को त्यागकर मैंने व्यर्थ की तुच्छ सांसारिक वस्तुओं के संग्रह में यत्न किया; इस प्रकार अपने ही कुकर्मों के कारण मैं इस संसार-कूप में डूब गया।",
        "साधु-महात्माओं का सत्संग छोड़कर मैंने असत् (विषयी जनों) के साथ विलास किया; इसी कारण कर्म-बन्धन का यह भयानक फंदा मेरे गले में लग गया।",
        "मैंने निरन्तर सांसारिक विषय-भोग रूपी हलाहल विष का ही पान किया, और श्री गौरांग महाप्रभु के संकीर्तन के दिव्य रस में कभी मग्न नहीं हुआ।",
        "मेरा यह व्यर्थ जीवन संसार में कौन सा सुख पाकर अभी तक जीवित है? यह नरोत्तम दास बहुत पहले ही मर क्यों नहीं गया!"
      ]
    },
    "75": {
      title: "गोविन्दम् आदि-पुरुषम् (प्रार्थना)",
      transliterations: [
        "वेणुं क्वणन्तम् अरविन्द-दलायताक्षं\nबर्हावतंसम् असिताम्बुद-सुन्दराङ्गम्।\nकन्दर्प-कोटि-कमनीय-विशेष-शोभं\nगोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१)",
        "अङ्गानि यस्य सकलेन्द्रिय-वृत्तिमन्ति\nपश्यन्ति पान्ति कलयन्ति चिरं जगन्ति।\nआनन्द-चिन्मय-सद्-उज्ज्वल-विग्रहस्य\nगोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२)"
      ],
      translations: [
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जो अपनी दिव्य मुरली पर मधुर तान छेड़ते हैं, जिनके नेत्र खिले हुए कमलदल के समान विशाल और सुन्दर हैं, जिनके मस्तक पर मोरपंख का मुकुट सुशोभित है, जिनका श्रीअंग श्याम मेघ के समान मनोहर है और जिनका दिव्य लावण्य करोड़ों कामदेवों के सौन्दर्य को भी मात देने वाला है।",
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जिनका दिव्य श्रीविग्रह सच्चिदानन्दमय और परम उज्ज्वल है; जिनके प्रत्येक अंग में समस्त इन्द्रियों की पूर्ण शक्तियाँ विद्यमान हैं, और जो अपने किसी भी अंग से अनन्त ब्रह्माण्डों का दर्शन, पालन तथा नित्य नियंत्रण करते हैं।"
      ]
    },
    "76": {
      title: "मनः-शिक्षा (श्रील रघुनाथ दास गोस्वामी)",
      transliterations: [
        "गुरौ गोष्ठे गोष्ठालयिषु सुजने भूसुर-गणे\nस्व-मन्त्रे श्री-नाम्नि व्रज-नव-युव-द्वन्द्व-शरणे।\nसदा दम्भं हित्वा कुरु रतिम अपूर्वाम् अतितरां\nअये स्वान्तर्धातश् चटुलभिर अभियाचे धृत-पदः॥ (१)",
        "न धर्मं नाधर्मं श्रुति-गण-निरुक्तं किल कुरु\nव्रजे राधा-कृष्ण-प्रचुर-परिचर्याम् इह तनु।\nशची-सूनुं नन्दीश्वर-पति-सुतत्वे गुरु-वरं\nमुकुन्द-प्रेष्ठत्वे स्मर पदम् अजस्रं ननु मनः॥ (२)",
        "यदिच्छेर् आवासं व्रज-भुवि स-रागं प्रति-जनुर्\nयुव-द्वन्द्वं तां चेत् परिचरितुम् आराद् अभिलषे।\nस्वरूपं श्री-रूपं स-गणम् इह तस्याग्रजम् अपि\nस्फुटं प्रेम्णा नित्यं स्मर नम तदा त्वं शृणु मनः॥ (३)",
        "असद-वार्ता-वेश्या विसृज मति-सर्वस्व-हरणीं\nकथा मुक्ति-व्याघ्र्या न शृणु किल सर्वात्म-गिलनीम्।\nअपि त्यक्त्वा लक्ष्मी-पति-रतिम् इतो व्योम-नयनीं\nव्रजे राधा-कृष्णौ स्व-रति-मणि-दौ त्वं भज मनः॥ (४)",
        "आशा-चेष्टा-कष्ट-प्रद-विकट-पाशालीभिर् इह\nप्रकामं कामादि-प्रकट-पथपाति-व्यतिकरैः।\nगले बद्ध्वा हन्ये ऽहम् इति बकभिद् वर्त्मप-गणे\nकुरु त्वं फूत्कारान् अवति स यथा त्वां मन इतः॥ (५)",
        "अरे चेतः प्रोद्यत्-कपट-कुटि-नाटी-भर-खर-\nक्षरन्-मूत्रे स्नात्वा दहसि कथम् आत्मानम् अपि माम्।\nसदा त्वं गान्धर्वा-गिरिधर-पद-प्रेम-विलसत्-\nसुधाम्बोधौ स्नात्वा स्वम् अपि नितरां मां च सुखय॥ (६)",
        "प्रतिष्ठाशा धृष्टा श्वपच-रमणी मे हृदि नटेत्\nकथं साधु-प्रेम स्पृशति शुचिर् एतन् ननु मनः।\nसदा त्वं सेवस्व प्रभु-दयित-सामन्तम् अतुलं\nयथा तां निष्कास्य त्वरितम् इह तां वेशयति सः॥ (७)",
        "यथा दुष्टत्वं मे दरयति शठस्यापि कृपया\nयथा मह्यं प्रेमामृतम् अपि ददात्य् उज्ज्वलम् असौ।\nयथा श्री-गान्धर्वा-भजन-विधये प्रेरयति मां\nतथा गोष्ठे काक्वा गिरिधरम् इह त्वं भज मनः॥ (८)",
        "मद्-ईशा-नाथत्वे व्रज-विपिन-चन्द्रं व्रज-वने-\nश्वरीं तन्-नाथत्वे तद्-अतुल-सखित्वे तु ललिताम्।\nविशाखां शिक्षालि-वितरण-गुरुत्वे प्रिय-सरो-\nगिरीन्द्रौ तत्-प्रेक्षा-ललित-रति-दत्वे स्मर मनः॥ (९)",
        "रतिं गौरी-लीले अपि तपति सौन्दर्य-किरणैः\nशची-लक्ष्मी-सत्याः परिभवति सौभाग्य-बलनैः।\nवशी-कारैश् चन्द्रावलि-मुख-नवीन-व्रज-सतीः\nक्षिप्रत्य् आराद् या तां हरि-दयित-राधां भज मनः॥ (१०)",
        "समं श्री-रूपेण स्मर-विवश-राधा-गिरिभृतोर्\nव्रजे साक्षात्-सेवा-लभन-विधये तद्-गण-युजोः।\nतद्-इज्याख्या-ध्यान-श्रवण-नति-पञ्चामृतम् इदं\nधयन् नित्यं गोवर्धनम् अनुदिनं त्वं भज मनः॥ (११)",
        "मनः-शिक्षा-दैकादशक-वरम् एतं मधुरया\nगिरा गायत्य् उच्चैः समाधि-गत-सर्वार्थ-तति यः।\nस-यूथः श्री-रूपानुग इह भवन् गोकुल-वने\nजनो राधा-कृष्णापुल-भजन-रत्नं स लभते॥ (१२)"
      ],
      translations: [
        "हे मेरे चंचल मन! मैं तेरे चरण पकड़कर बड़ी मीठी वाणी से प्रार्थना करता हूँ कि तू समस्त दम्भ-कपट को छोड़कर श्रीगुरुदेव, श्रीव्रजभूमि, व्रजवासियों, शुद्ध वैष्णवों, ब्राह्मणों, अपने दीक्षा-मंत्र, श्रीहरिनाम और श्रीराधा-कृष्ण युगलकिशोर के पावन चरणों में अनुपम और प्रगाढ़ प्रेम उत्पन्न कर।",
        "हे मन! तू वेदों में वर्णित सकाम धर्म या अधर्म के चक्कर में मत पड़, अपितु श्रीवृन्दावन धाम में श्रीराधा-कृष्ण की अनन्य सेवा का विस्तार कर। श्री शचीनन्दन गौरहरि को नन्दनन्दन श्रीकृष्ण का ही स्वरूप और अपने श्रीगुरुदेव को श्रीकृष्ण के परम प्रिय अन्तरंग पार्षद के रूप में नित्य स्मरण कर।",
        "हे मन, सुन! यदि तू प्रत्येक जन्म में श्रीव्रजभूमि में वास और श्रीयुगलकिशोर की साक्षात् अन्तरंग सेवा की अभिलाषा रखता है, तो श्रीस्वरूप दामोदर, श्रीरूप गोस्वामी, श्रीसनातन गोस्वामी और उनके समस्त अनुगत परिकरों को प्रेमपूर्वक नित्य स्मरण कर और उन्हें साष्टांग प्रणाम कर।",
        "हे मन! बुद्धि का सर्वस्व हरण करने वाली असत्-वार्ता (सांसारिक प्रपंच) रूपी वेश्या को त्याग दे, और समस्त आत्मभाव को निगलने वाली निर्विशेष मुक्ति रूपी व्याघ्री की बातें कभी मत सुन। वैकुण्ठ ले जाने वाली श्रीलक्ष्मी-नारायण की ऐश्वर्यमयी रति को भी छोड़कर, तू वृन्दावन में श्रीराधा-कृष्ण का भजन कर जो अपने प्रेम-रत्न का दान करते हैं।",
        "हे मन! काम, क्रोध आदि लुटेरों ने आशा रूपी भयंकर कष्टकारी फंदों से मेरे गले को बाँध लिया है और वे मेरा वध कर रहे हैं; तू बकासुर-संहारी श्रीकृष्ण के रक्षक भक्तों को पुकार कर उच्च स्वर से गुहार लगा, जिससे वे आकर तेरी रक्षा करें।",
        "अरे मन! तू कपट और कुटिलता रूपी गधे के मूत्र में स्नान करके अपने आपको और मुझे क्यों जला रहा है? तू श्रीराधा-गिरिधारी के चरणकमलों के प्रेमरस के दिव्य अमृत-समुद्र में सदा स्नान कर और मुझे तथा स्वयं को परम आनन्दित कर।",
        "हे मन! जब तक प्रतिष्ठा की लालसा रूपी धृष्ट चाण्डाली मेरे हृदय में नाचती रहेगी, तब तक वहाँ पवित्र भगवत्प्रेम का स्पर्श कैसे हो सकता है? तू श्रीकृष्ण के प्रिय सेनापति श्रीगुरुदेव की निष्कपट सेवा कर, ताकि वे इस चाण्डाली को तुरन्त बाहर निकाल कर वहाँ शुद्ध प्रेम का प्रवेश करा सकें।",
        "हे मन! तू श्रीव्रजधाम में दीन वाणी से श्रीगिरिधारी का ऐसा भजन कर, जिससे वे कृपा करके मुझ जैसे शठ और कुटिल की दुष्टता को नष्ट कर दें, मुझे उज्ज्वल प्रेमामृत प्रदान करें और मुझे श्रीराधारानी के नित्य भजन में नियुक्त कर दें।",
        "हे मन! व्रजचन्द्र श्रीकृष्ण को मेरी स्वामिनी श्रीराधा के प्राणनाथ के रूप में, और श्रीराधारानी को श्रीकृष्ण की अधीश्वरी के रूप में स्मरण कर। ललिता जी को उनकी अनुपम सखी और विशाखा जी को लीला-शिक्षा देने वाली गुरु के रूप में, तथा श्रीराधाकुण्ड और गोवर्धन को दिव्य प्रेमरति प्रदान करने वाले पावन तीर्थों के रूप में ध्यान कर।",
        "हे मन! तू श्रीकृष्ण की परम प्रेयसी श्रीराधा का भजन कर, जो अपने दिव्य सौन्दर्य से रति, गौरी और लीला को लज्जित करती हैं, अपने परम सौभाग्य से शची, लक्ष्मी और सत्यभामा को परास्त करती हैं, और अपने प्रेम-वशता के गुण से चन्द्रावली आदि समस्त व्रज-गोपियों में सर्वोपरि हैं।",
        "हे मन! श्रीरूप गोस्वामी के सान्निध्य में श्रीराधा-गिरिधारी की साक्षात् सेवा प्राप्त करने हेतु, तू पूजा, नाम-कीर्तन, ध्यान, श्रवण और प्रणाम रूपी पञ्चामृत का नित्य पान करते हुए श्रीगोवर्धन पर्वत का प्रतिदिन भजन कर।",
        "जो व्यक्ति श्रीरूप गोस्वामी के अनुगत होकर, मधुर कंठ से इन ग्यारह मनः-शिक्षा के श्लोकों का नित्य गान करता है, वह श्रीगोकुल धाम में श्रीराधा-कृष्ण की अनन्य और अतुलनीय भक्ति का अमूल्य रत्न प्राप्त करता है।"
      ]
    },
    "77": {
      title: "गुरुदेव! कृपा-बिन्दु दिया",
      transliterations: [
        "गुरुदेव!\nकृपा-बिन्दु दिया, कोरोऽ एइ दासे, तृणापेक्षा अति हीन।\nसकल-सहने, बोलो दिया कोरो, निज माने स्पृहा-हीन॥ (१)",
        "सकले सम्मान, करिते शकति, देहो’ नाथ! यथातथ।\nतबे तो’ गाइबो, हरिनाम-सुखे, अपराध ह’बे हत॥ (२)",
        "कबे हेनो कृपा, लभिया ए जन, कृतार्थ हइबे, नाथ!\nशक्ति-बुद्धि-हीन, आमि अति दीन, करो’ मोरे आत्म-साथ॥ (३)",
        "योग्यता-विचारे, किछु नाहि पाइ, तोमार करुणा सार।\nकरुणा ना हइले, काँदिया काँदिया, प्राण ना राखिबो आर॥ (४)"
      ],
      translations: [
        "हे गुरुदेव! कृपा की एक बूँद प्रदान कर अपने इस दास को तृण से भी अधिक विनम्र और हीन बना दीजिए। मुझे सब कुछ सहन करने की शक्ति दीजिए और मुझे स्वयं के मान-सम्मान की तृष्णा से सर्वथा मुक्त कर दीजिए।",
        "हे नाथ! मुझे ऐसी शक्ति दीजिए कि मैं सभी जीवों को यथायोग्य सम्मान दे सकूँ। तभी मैं परमानन्द में मग्न होकर शुद्ध हरिनाम का गान कर सकूँगा और मेरे समस्त नामापराधों का समूल नाश हो सकेगा।",
        "हे नाथ! मुझ जैसे अधम जीव पर आपकी ऐसी अहैतुकी कृपा कब होगी जिससे मेरा जीवन कृतार्थ हो जाए? मैं शक्ति और बुद्धि से सर्वथा हीन और परम दीन-हीन हूँ; कृपा करके मुझे अपने चरणों में अपना निज-जन बना लीजिए।",
        "यदि मैं अपनी योग्यता का विचार करूँ, तो मुझमें लेशमात्र भी गुण नहीं है; आपकी अहैतुकी करुणा ही मेरा एकमात्र सहारा है। यदि आप मुझ पर दया नहीं करेंगे, तो मैं रो-रोकर अपने प्राण त्याग दूँगा, फिर अपने जीवन की रक्षा नहीं कर पाऊँगा।"
      ]
    },
    "78": {
      title: "गुरुदेव! बड़ कृपा करि'",
      transliterations: [
        "गुरुदेव!\nबड़ कृपा करि’, गौड़-वन माझे, गोद्रुमे दियाछ स्थान।\nआज्ञा दिल मोरे, एइ व्रजे बसि’, हरि-नाम करो गान॥ (१)",
        "किन्तु कबे प्रभु, योग्यता अर्पिबे, ए दासेरे दया करि’।\nचित्त स्थिर हबे, सकल सहिब, एकान्ते भजिब हरि॥ (२)",
        "शैशव-यौवने, जड़-सुख-सङ्गे, अभ्यास हइलो मन्द।\nनिज-कर्म-दोषे, ए देह हइलो, भजनरे प्रतिबन्ध॥ (३)",
        "वार्धक्ये एखनो, पञ्च-रोगे हत, केमने भजिबो बोलो’।\nकाँदिया काँदिया, तोमार चरणे, पड़ियाछि सुविह्वल॥ (४)"
      ],
      translations: [
        "हे गुरुदेव! आपने असीम कृपा करके गौड़-मण्डल के वनों के मध्य श्रीगोद्रुम द्वीप में मुझे वास प्रदान किया, और मुझे यह पावन आज्ञा दी—'इस नवद्वीप-वृन्दावन में बैठकर निरन्तर श्रीहरिनाम का संकीर्तन करो।'",
        "किन्तु हे प्रभु! आप कृपा करके अपने इस दास को आपकी आज्ञा पालन करने की योग्यता कब प्रदान करेंगे? कब मेरा चंचल चित्त स्थिर होगा? कब मैं समस्त कष्टों को सहकर एकांत भाव से श्रीहरि का भजन करूँगा?",
        "बचपन और जवानी में भौतिक इन्द्रिय-सुखों की संगति के कारण मेरी बुरी आदतें बन गईं। अपने ही कुकर्मों के दोष से यह नश्वर शरीर अब श्रीहरि-भजन के मार्ग में सबसे बड़ा बाधक बन गया है।",
        "अब इस वृद्धावस्था में पाँच प्रकार के रोगों से ग्रस्त होकर मैं कैसे भजन करूँगा, यह आप ही बताइए! मैं परम व्याकुल होकर रो-रोकर आपके पावन चरणकमलों में पड़ा हुआ हूँ।"
      ]
    },
    "79": {
      title: "गुरुदेवे व्रज-वने",
      transliterations: [
        "गुरुदेवे, व्रज-वने, व्रज-भूमि-वासी जने, शुद्ध-भक्ते, आर विप्र-गणे।\nइष्ट-मन्त्रे, हरि-नामे, युगल भजन कामे, कर रति अपूर्व यतने॥ (१)",
        "धरि मन चरणे तोमार।\nजानियाछि एबे सार, कृष्ण-भक्ति विना आर, नाहि घुचे जीवेर संसार॥ (२)",
        "कर्म, ज्ञान, तपः, योग, सकलइ त कर्म-भोग, कर्म छाड़ाइते केह नारे।\nसकल छाड़िया भाइ, श्रद्धा-देवीरा गुण गाइ, याँरा कृपा भक्ति दिते पारे॥ (३)",
        "छाड़ि’ दम्भ अनुक्षण, स्मर अष्ट-तत्त्व मन, कर ताहे निष्कपट रति।\nसेइ रति प्रार्थनाय, श्री-दास-गोस्वामी पाय, ए भकतिविनोद करे नति॥ (४)"
      ],
      translations: [
        "१. श्रीगुरुदेव, २. श्रीवृन्दावन धाम, ३. व्रजवासी जन, ४. शुद्ध वैष्णवगण, ५. ब्राह्मणगण, ६. इष्ट-मंत्र (दीक्षा-मंत्र), ७. श्रीहरिनाम, और ८. श्रीराधा-कृष्ण युगलकिशोर की प्रेममयी सेवा—इन आठ दिव्य तत्त्वों में परम यत्नपूर्वक प्रगाढ़ अनुराग उत्पन्न करो।",
        "हे मेरे मन! मैं तेरे चरण पकड़कर विनती करता हूँ। अब हमने यह परम सत्य समझ लिया है कि श्रीकृष्ण-भक्ति के अतिरिक्त जीव के इस भव-बन्धन का नाश करने वाला संसार में और कोई उपाय नहीं है।",
        "सकाम कर्म, ज्ञान, तपस्या और अष्टांग योग—ये सभी वास्तव में कर्मफल के भोग मात्र हैं, कोई भी जीव को कर्म-बन्धन से पूर्णतः मुक्त नहीं कर सकता। हे भाई! इन सबको त्यागकर श्रद्धा-देवी के गुणों का गान करो, जिनकी कृपा से ही शुद्ध भक्ति प्राप्त होती है।",
        "हे मन! सदा दम्भ त्यागकर इन आठों तत्त्वों का नित्य स्मरण कर और इनमें निष्कपट अनुराग उत्पन्न कर। उसी दिव्य प्रेमरति की याचना करते हुए यह भक्तिविनोद श्रील रघुनाथ दास गोस्वामी के पावन चरणों में साष्टांग प्रणाम करता है।"
      ]
    },
    "80": {
      title: "महामन्त्र (हरे कृष्ण महामन्त्र)",
      transliterations: [
        "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।\nहरे राम हरे राम राम राम हरे हरे॥ (१)"
      ],
      translations: [
        "हे सर्व-आकर्षक परमेश्वर श्रीकृष्ण! हे परम आनन्द-दाता श्रीराम! हे भगवान् की अन्तरंगा आह्लादिनी शक्ति श्रीमती राधारानी (हरे)! कृपा करके मुझे अपनी नित्य दिव्य प्रेमामृतमयी प्रेमाभक्ति की सेवा में नियुक्त कीजिए।"
      ]
    },
    "81": {
      title: "हरि बोलो हरि बोलो भाइ रे",
      transliterations: [
        "‘हरि’ बोलो, ‘हरि’ बोलो, ‘हरि’ बोलो, भाइ रे।\nहरिनाम आनियाछे गौराङ्ग-निताइ रे॥ (मोदेर दुःख देखे’ रे) (१)",
        "हरिनाम विना जीवेर अन्य धन नाइ-रे।\nहरिनामे शुद्ध ह’लो जगाइ-माधाइ रे॥ (बड़ पापी छिलो रे) (२)",
        "मिछे माया-बद्ध ह’ये जीवन काटाइ रे। (‘आमि, आमार’ बोले’ रे)\nआशा-वाशे घुरे’ घुरे’ आर कोथा याइ रे॥ (आशार शेष नाइ रे) (३)",
        "‘हरि’ बोले’ देओ भाइ आशार मुखे छाइ रे। (निराशा त’ सुखो रे)\nभोग-मोक्ष-वाञ्छा छाड़ि’ हरिनाम गाइ रे॥ (शुद्ध-सत्त्व ह’ये रे) (४)",
        "नाचे’ जेओ नामेर गुणे ओ सब फल पाइ रे। (तुच्छ फले प्रयास छेड़े’ रे)\nविनोद बोले याइ ल’ये नामेर बालाइ रे॥ (नामेर बालाइ छेड़े’ रे) (५)"
      ],
      translations: [
        "हे भाइयों! 'हरि!' बोलो, 'हरि!' बोलो, 'हरि!' बोलो! हमारे भौतिक दुःखों को देखकर श्री गौरांग महाप्रभु और श्री नित्यानन्द प्रभु गोलोक से यह दिव्य हरिनाम लेकर आए हैं!",
        "इस संसार में हरिनाम के अतिरिक्त बद्धजीव का अन्य कोई वास्तविक धन नहीं है! इस परम पावन हरिनाम के प्रभाव से जगाई और माधाई जैसे महापापी भी परम पवित्र वैष्णव बन गए!",
        "'मैं और मेरा' के झूठे अहंकार में फँसकर हम माया के बन्धन में अपना दुर्लभ मानव जीवन व्यर्थ गँवा रहे हैं! अनन्त भौतिक आशाओं और तृष्णाओं के वश में होकर हम और कहाँ-कहाँ भटकेंगे? इन सांसारिक कामनाओं का कभी अन्त नहीं होता!",
        "हे भाई! 'हरि!' बोलकर इन सांसारिक आशाओं के मुख पर धूल फेंक दो! भौतिक कामनाओं से सर्वथा मुक्त (निराश) होना ही वास्तविक सुख है। सांसारिक भोग और मोक्ष की समस्त इच्छाओं को त्यागकर, शुद्ध सत्त्व में स्थित होकर निरन्तर हरिनाम का संकीर्तन करो!",
        "तुच्छ भौतिक फलों के प्रयास को छोड़कर, नाम के दिव्य गुणों के आनन्द में नाचो—जिससे स्वतः ही सब कुछ प्राप्त हो जाएगा! भक्तिविनोद कहते हैं कि नाम-अपराधों और समस्त विघ्नों को त्यागकर मैं केवल शुद्ध हरिनाम का आश्रय ग्रहण करता हूँ!"
      ]
    },
    "82": {
      title: "नाम संकीर्तन (हरि हरये नमः)",
      transliterations: [
        "हरि हरये नमः कृष्ण यादवाय नमः।\nयादवाय माधवाय केशवाय नमः॥ (१)",
        "गोपाल गोविन्द राम श्री-मधुसूदन।\nगिरिधारी गोपीनाथ मदन-मोहन॥ (२)",
        "श्री-चैतन्य-नित्यानन्द श्री-अद्वैत-सीता।\nहरि गुरु वैष्णव भागवत गीता॥ (३)",
        "श्री-रूप सनातन भट्ट-रघुनाथ।\nश्री-जीव गोपाल-भट्ट दास-रघुनाथ॥ (४)",
        "एइ छय गोसाइर् करि चरण वन्दन।\nयाहा हइते विघ्न-नाश अभीष्ट-पूरण॥ (५)",
        "एइ छय गोसाइ याँर-मुइँ ताँर दास।\nताँ-सबार पद-रेणु मोर पञ्च-ग्रास॥ (६)",
        "ताँदेर चरण-सेवि-भक्त-सने वास।\nजनमे जनमे हय एइ अभिलाष॥ (७)",
        "एइ छय गोसाइ यबे व्रजे कैल वास।\nराधा-कृष्ण-नित्य-लीला करिला प्रकाश॥ (८)",
        "आनन्दे बोलो हरि भज वृन्दावन।\nश्री-गुरु-वैष्णव-पदे मजाइया मन॥ (९)",
        "श्री-गुरु-वैष्णव-पद-पद्म करि’ आश।\nनाम-सङ्कीर्तन कहे नरोत्तम दास॥ (१०)"
      ],
      translations: [
        "श्रीहरि को नमस्कार है! श्रीकृष्ण, यादव, माधव और केशव के पावन नामों को मेरा बारम्बार प्रणाम है।",
        "गोपाल, गोविन्द, राम, श्री मधुसूदन, गिरिधारी, गोपीनाथ और मदनमोहन के नामों का संकीर्तन करो।",
        "श्री चैतन्य महाप्रभु, श्री नित्यानन्द प्रभु, श्री अद्वैत आचार्य, माता सीता, श्रीहरि, गुरुदेव, वैष्णवगण, श्रीमद्भागवत और भगवद्गीता को मेरा प्रणाम है।",
        "श्रील रूप गोस्वामी, सनातन गोस्वामी, रघुनाथ भट्ट गोस्वामी, श्रील जीव गोस्वामी, गोपाल भट्ट गोस्वामी तथा रघुनाथ दास गोस्वामी—इन षड्-गोस्वामियों की जय हो!",
        "मैं इन छः गोस्वामियों के चरणकमलों की वन्दना करता हूँ; जिनकी कृपा से भक्ति-मार्ग के समस्त विघ्नों का नाश होता है और समस्त आध्यात्मिक अभीष्ट पूर्ण होते हैं।",
        "जो इन छः गोस्वामियों का सेवक है, मैं उसका दास हूँ। उनके पावन चरणकमलों की दिव्य रज ही मेरा नित्य पोषण (पञ्च-ग्रास) है।",
        "उनके चरणकमलों की सेवा करने वाले शुद्ध भक्तों के संग में मेरा वास हो—जन्म-जन्मान्तर तक मेरी यही एकमात्र अभिलाषा है।",
        "जब इन छः गोस्वामियों ने श्रीवृन्दावन धाम में वास किया, तब उन्होंने श्री श्री राधा-कृष्ण की नित्य-मधुर लीलाओं और भक्ति-शास्त्रों को जगत में प्रकाशित किया।",
        "अपने मन को श्रीगुरुदेव और वैष्णवों के पावन चरणों में पूर्णतः निमग्न करके, परम आनन्द में 'हरि!' नाम का गान करो और वृन्दावन धाम का भजन करो।",
        "श्रीगुरुदेव और वैष्णवों के चरणकमलों की नित्य कृपा की अभिलाषा करते हुए, नरोत्तम दास इस पावन नाम-संकीर्तन का गान करता है।"
      ]
    },
    "83": {
      title: "इष्ट देवे विज्ञप्ति (हरि हरि! विफले जनम)",
      transliterations: [
        "हरि हरि! विफले जनम गोङाइनु।\nमनुष्य-जनम पाइया, राधा-कृष्ण ना भजिया, जानिया शुनिया विष खाइनु॥ (१)",
        "गोलोकेर प्रेम-धन, हरि-नाम-सङ्कीर्तन, रति ना जन्मिलो केने ताय।\nसंसार-विषानले, दिव-निशि हिया ज्वले, जुड़ाइते ना कैनु उपाय॥ (२)",
        "व्रजेन्द्र-नन्दन जेइ, शची-सुत हइलो सेइ, बलराम हइलो निताइ।\nदीन-हीन यत छिलो, हरि-नामे उद्धारिलो, तार साक्षी जगाइ माधाइ॥ (३)",
        "हा हा प्रभु नन्द-सुत, वृषभानु-सुता-युत, करुणा करहो एइ-बारो।\nनरोत्तम-दास कय, ना ठेलिहो राङ्गा पाय, तोमा विने के आछे आमार॥ (४)"
      ],
      translations: [
        "हे भगवान् श्रीहरि! मैंने अपना यह दुर्लभ मानव जीवन सर्वथा व्यर्थ गँवा दिया। मनुष्य जन्म पाकर भी मैंने श्रीराधा-कृष्ण का भजन नहीं किया; इस प्रकार मैंने जान-बूझकर साक्षात् हलाहल विष का पान कर लिया!",
        "गोलोक वृन्दावन का जो सर्वोपरि प्रेम-धन श्रीहरिनाम संकीर्तन के रूप में इस पृथ्वी पर अवतरित हुआ, उसमें मेरी रति (अनुराग) क्यों नहीं उत्पन्न हुई? रात-दिन मेरा हृदय संसार रूपी विष की दावानल में जल रहा है, और मैंने इस संताप को शांत करने का कोई उपाय नहीं किया!",
        "जो ब्रजेन्द्रनन्दन श्रीकृष्ण थे, वे ही अब श्री शचीनन्दन गौरहरि के रूप में प्रकट हुए हैं, और जो श्रीबलराम जी थे, वे ही दयालु श्रीनित्यानन्द प्रभु बने हैं। उन्होंने समस्त दीन-हीन पतित जीवों का केवल हरिनाम के द्वारा उद्धार किया है; इसके प्रत्यक्ष साक्षी जगाई और माधाई हैं।",
        "हे वृषभानुनन्दिनी श्रीराधारानी के साथ विराजमान नन्दनन्दन श्रीकृष्ण! इस बार मुझ पर कृपा कीजिए। नरोत्तम दास प्रार्थना करता है—'हे प्रभु! मुझे अपने लाल-लाल चरणकमलों से दूर मत धकेलिए, क्योंकि आपके अतिरिक्त इस संसार में मेरा और अपना कौन है?'"
      ]
    },
    "84": {
      title: "हरि हरि कबे मोर ह'बे हेन दिन",
      transliterations: [
        "हरि हरि कबे मोर ह’बे हेन दिन।\nविमल वैष्णवे, रति उपजिबे, वासना हइबे क्षीण॥ (१)",
        "अन्तर-बाहिरे, सम व्यवहार, अमानि मानद ह’बो।\nकृष्ण-सङ्कीर्तने, श्री-कृष्ण-स्मरणे, सतत मजिया र’बो॥ (२)",
        "ए देहेर क्रिया, अभ्यासे करिब, जीवन यापन लागि’।\nश्री-कृष्ण-भजने, अनुकूल याहा, ताहे ह’बो अनुरागी॥ (३)",
        "भजनेर याहा, प्रतिकूल ताहा, दृढ़भावे तेयागिब।\nभजिते भजिते, समय आसिले, ए देह छाड़िया दिब॥ (४)",
        "भकतिविनोद, एइ आशा करि’, बसिया गोद्रुम-वने।\nप्रभु-कृपा लागि’, व्याकुल अन्तरे, सदा काँदे सङ्गोपने॥ (५)"
      ],
      translations: [
        "हे मेरे प्रभु श्रीहरि! मेरे जीवन में ऐसा शुभ दिन कब आएगा? जब शुद्ध वैष्णवों के प्रति मेरे हृदय में प्रगाढ़ अनुराग उत्पन्न होगा और मेरी सांसारिक भौतिक वासनाएं सर्वथा क्षीण हो जाएँगी।",
        "मेरे भीतर और बाहर का व्यवहार एक समान निष्कपट होगा, मैं स्वयं मान की आशा न रखकर दूसरों को मान देने वाला बनूँगा। मैं श्रीहरि-संकीर्तन और श्रीकृष्ण के नित्य स्मरण में निरन्तर मग्न रहूँगा।",
        "इस शरीर की रक्षा और जीवन यापन के लिए केवल न्यूनतम आवश्यक कार्य करूँगा, और जो कुछ भी श्रीकृष्ण-भजन के अनुकूल होगा, उसी में मेरा प्रगाढ़ अनुराग होगा।",
        "जो कुछ भी भजन के प्रतिकूल होगा, उसे मैं दृढ़तापूर्वक त्याग दूँगा। इस प्रकार निरन्तर भजन करते-करते जब समय आएगा, तब मैं शान्तिपूर्वक इस नश्वर शरीर का त्याग करूँगा।",
        "श्रीगोद्रुम वन में बैठकर भक्तिविनोद यही आशा करता है और प्रभु की अहैतुकी कृपा की प्राप्ति हेतु व्याकुल हृदय से एकांत में निरन्तर अश्रु बहाता है।"
      ]
    },
    "85": {
      title: "हरि हरि! कबे मोर हइबे सुदिन?",
      transliterations: [
        "हरि हरि! कबे मोर हइबे सुदिन?\nभजिबो श्री-राधा-कृष्ण हइया प्रेमाधीन॥ (१)",
        "सुयन्त्र मिशाइया गाबो सुमधुर तान।\nआनन्दे करिब दोँहार रूप-गुण-गान॥ (२)",
        "‘राधिका गोविन्द’ बोलि’ काँदिबो उच्चैः स्वरे।\nभिजिबे सकल अङ्ग नयनेर नीरे॥ (३)",
        "एइ बार करुणा करो रूप सनातन।\nरघुनाथ दास मोर श्री-जीव जीवन॥ (४)",
        "एइ बार करुणा करो ललिता विशाखा।\nसख्य भावे श्रीदामा सुबलादि सखा॥ (५)",
        "सबे मिलि’ करो दया पूरुक मोर आश।\nप्रार्थना करये सदा नरोत्तम दास॥ (६)"
      ],
      translations: [
        "हे प्रभु श्रीहरि! मेरे जीवन में वह शुभ दिन कब आएगा? जब मैं भगवत्प्रेम के पूर्ण अधीन होकर श्री श्री राधा-कृष्ण का साक्षात् भजन करूँगा।",
        "मधुर वाद्ययंत्रों की संगति में सुर मिलाकर, मैं परम आनन्द में मग्न होकर श्रीयुगलकिशोर के दिव्य रूप और गुणों का मधुर गान करूँगा।",
        "प्रेम से व्याकुल होकर 'हे राधिके! हे गोविन्द!' पुकारते हुए मैं उच्च स्वर से रोऊँगा, और मेरे नेत्रों से बहने वाले प्रेमाश्रुओं की धारा से मेरा सम्पूर्ण शरीर भीग जाएगा।",
        "हे श्रील रूप गोस्वामी, हे सनातन गोस्वामी, हे रघुनाथ दास गोस्वामी और मेरे जीवन-सर्वस्व श्रील जीव गोस्वामी! इस बार मुझ पर अपनी कृपा-दृष्टि कीजिए।",
        "हे सखी ललिता, हे विशाखा, और सख्य भाव के सखा श्रीदामा, सुबल आदि! आप सब मुझ दीन पर इस बार कृपा कीजिए।",
        "आप सब मिलकर मुझ पर दया कीजिए जिससे मेरी यह हार्दिक अभिलाषा पूर्ण हो सके; नरोत्तम दास सदा यही दीन प्रार्थना करता है।"
      ]
    },
    "86": {
      title: "हरि हे दयाल मोर जय राधा-नाथ",
      transliterations: [
        "हरि हे दयाल मोर जय राधा-नाथ।\nबारो बारो एइ-बारो लहो निज साथ॥ (१)",
        "बहु योनि भ्रमि’ नाथ! लइनु शरण।\nनिज-गुणे कृपा करो’ अधम-तारण॥ (२)",
        "जगत-कारण तुमि जगत-जीवन।\nतोमा छाड़ा कार नाहि हे राधा-रमण॥ (३)",
        "भुवन-मङ्गल तुमि भुवनेर पति।\nतुमि उपेखिले नाथ, कि हइबे गति॥ (४)",
        "भाविया देखिनु एइ जगत-माझारे।\nतोमा विना केहो नाहि ए दासे उद्धारे॥ (५)"
      ],
      translations: [
        "हे दयालु श्रीहरि! हे श्रीराधा-नाथ! आपकी सदा जय हो! मैंने बारम्बार प्रार्थना की है, इस बार कृपा करके मुझे अपने नित्य परिकरों के साथ स्वीकार कर लीजिए।",
        "हे नाथ! चौरासी लाख योनियों में भटकने के पश्चात् अंततः मैं आपके चरणों की शरण में आया हूँ। हे पतित-पावन! अपने कृपालु स्वभाव के कारण मुझ अधम का उद्धार कीजिए।",
        "आप ही सम्पूर्ण सृष्टि के आदि कारण हैं और आप ही सम्पूर्ण ब्रह्माण्ड के प्राण हैं। हे राधारमण! आपके अतिरिक्त इस जगत में और किसका वास्तविक अस्तित्व व आश्रय है?",
        "आप सम्पूर्ण भुवनों के परम मंगलकारी और समस्त लोकों के स्वामी हैं। हे नाथ! यदि आप ही मेरी उपेक्षा कर देंगे, तो मेरी क्या गति होगी?",
        "मैंने इस सम्पूर्ण संसार में भली-भाँति विचार करके देख लिया है कि आपके अतिरिक्त इस दीन दास का उद्धार करने वाला संसार में अन्य कोई नहीं है।"
      ]
    },
    "87": {
      title: "हरिनाम, तुया अनेक स्वरूप",
      transliterations: [
        "हरिनाम, तुया अनेक स्वरूप।\nयशोदा-नन्दन, आनन्द-वर्धन, नन्द-तनय रस-कूप॥ (१)",
        "पूतना-घातन, तृणावर्त-हन, शकट-भञ्जन गोपाल।\nमुरली-वदन, अघ-बक-मर्दन, गोवर्धन-धारी राखाल॥ (२)",
        "केशी-मर्दन, ब्रह्म-विमोहन, सुरपति-दर्प-विनाशी।\nअरिष्ट-पतन, गोपी-विमोहन, यमुना-पुलिन-विलासी॥ (३)",
        "राधिका-रञ्जन, रास-रसायन, राधा-कुण्ड-कुञ्ज-बिहारी।\nराम, कृष्ण, हरि, माधव, नरहरि, मत्स्यादि-गण-अवतारी॥ (४)",
        "गोविन्द, वामन, श्री-मधुसूदन, यादव-चन्द्र, वनमाली।\nकालिय-शमन, गोकुल-रञ्जन, राधा-भजन-सुख-शाली॥ (५)",
        "इत्यादिक नाम, स्वरूपे प्रकास, बाड़ुक मोर रति रागे।\nरूप-स्वरूप-पद, जानि’ निज सम्पद, भक्तिविनोद धरि’ मागे॥ (६)"
      ],
      translations: [
        "हे श्रीहरिनाम! आपके अनन्त दिव्य स्वरूप हैं—जैसे यशोदानन्दन, गोकुल के आनन्द को बढ़ाने वाले, नन्दनन्दन और समस्त दिव्य रसों के अथाह कूप!",
        "आप ही पूतना का उद्धार करने वाले, तृणावर्त और शकटासुर का भंजन करने वाले गोपाल हैं; आप ही मुरली-मनोहर, अघासुर और बकासुर का वध करने वाले तथा गोवर्धन पर्वत को धारण करने वाले ग्वालबाल हैं।",
        "आप ही केशी दैत्य का मर्दन करने वाले, ब्रह्मा जी को विमोहित करने वाले, इन्द्र के गर्व को चूर करने वाले, अरिष्टासुर का संहार करने वाले, गोपियों को आकर्षित करने वाले और यमुना तट पर रास-विलास करने वाले हैं।",
        "आप ही श्रीमती राधिका को आनन्दित करने वाले, रास-नृत्य के अमृतमय प्राण, राधाकुण्ड के कुञ्जों में विहार करने वाले, तथा राम, कृष्ण, हरि, माधव, नृसिंह और मत्स्य आदि समस्त अवतारों के मूल स्रोत हैं।",
        "आप ही गोविन्द, वामन, श्री मधुसूदन, यादव-चन्द्र, वनमाली, कालिया नाग का दमन करने वाले, गोकुल को आनन्दित करने वाले और श्रीराधा के भजन-सुख में मग्न रहने वाले हैं।",
        "हे हरिनाम! अपनी मधुर इच्छा से आप इन सभी नामों और स्वरूपों में नित्य प्रकाशित हैं; आपके इन स्वरूपों में मेरा प्रेम-अनुराग उत्तरोत्तर बढ़ता रहे! श्रील रूप गोस्वामी और स्वरूप दामोदर गोस्वामी के चरणकमलों को अपनी वास्तविक सम्पत्ति मानकर, भक्तिविनोद उनके चरणों को पकड़कर यही वरदान माँगता है।"
      ]
    },
    "88": {
      title: "गजेन्द्र मोक्षण (हे गोविन्द हे गोपाल)",
      transliterations: [
        "हे गोविन्द हे गोपाल।\nहे गोविन्द राखो शरण, अब तो जीवन हारे॥ (ध्रुवपद)",
        "नीर पीवन हेतु गयो, सिन्धु के किनारे।\nसिन्धु बीच बसत ग्राह, चरण धरि पछारे॥ (१)",
        "चार प्रहर युद्ध भयो, लै गयो मझधारे।\nनाक कान डूबन लागे, कृष्ण को पुकारे॥ (२)",
        "द्वारका में शब्द भयो, शोर भयो भारे।\nशङ्ख चक्र गदा पद्म, गरुड़ लई सिधारे॥ (३)",
        "सूर कहै श्याम सुनो, शरण है तिहारे।\nअब की बार पार करो, नन्द के दुलारे॥ (४)"
      ],
      translations: [
        "हे गोविन्द! हे गोपाल! हे गोविन्द! मुझे अपनी शरण में रखिए, अब तो मैं अपने जीवन का यह संग्राम हार चुका हूँ।",
        "जल पीने के लिए गजेन्द्र नदी के तट पर गया। जल के मध्य में रहने वाले विशाल ग्राह (मगरमच्छ) ने उसका पैर पकड़कर खींच लिया।",
        "चार प्रहर तक भयंकर युद्ध हुआ और ग्राह उसे खींचकर अथाह जल की मझधार में ले गया। जब नाक और कान भी जल में डूबने लगे, तब गजेन्द्र ने व्याकुल होकर श्रीकृष्ण को पुकारा।",
        "द्वारका में वह करुण पुकार पहुँची और सर्वत्र हलचल मच गई। भगवान् शंख, चक्र, गदा और पद्म धारण कर गरुड़ पर सवार होकर तुरंत पधारे।",
        "सूरदास जी कहते हैं—'हे श्यामसुन्दर! मेरी दीन विनती सुनिए। मैं आपकी शरण में हूँ, हे नन्दनन्दन! इस बार मेरा भव-सागर से उद्धार कीजिए।'"
      ]
    },
    "89": {
      title: "हे गोविन्द हे गोपाल केशव माधव",
      transliterations: [
        "हे गोविन्द हे गोपाल, केशव माधव दीन दयाल॥ (१)",
        "तुमि परम दयाल प्रभु, परम दयाल।\nकेशव माधव दीन दयाल॥ (२)",
        "पीत वसन परि, मयूरेर शिखा धरि।\nमुरलीर वाणी तुले बोले राधा नाम॥ (३)",
        "तुमि मोदेर गोपाल प्रभु, मोदेर गोपाल।\nकेशव माधव दीन-दयाल॥ (४)",
        "भव भय भञ्जन श्री मधुसूदन।\nविपद भञ्जन तुमि नारायण॥ (५)"
      ],
      translations: [
        "हे गोविन्द! हे गोपाल! हे केशव! हे माधव! हे दीनदयाल!",
        "हे प्रभु! आप परम दयालु हैं, परम कृपालु हैं! हे केशव! हे माधव! हे दीनदयाल!",
        "पीताम्बर धारण कर और मस्तक पर मोरपंख का मुकुट सजाकर, आप अपनी दिव्य मुरली से 'राधा! राधा!' नाम का मधुर गान करते हैं।",
        "हे प्रभु! आप हमारे परम प्रिय गोपाल हैं, हमारे अपने गोपाल हैं! हे केशव! हे माधव! हे दीनदयाल!",
        "आप संसार के समस्त भयों का नाश करने वाले श्री मधुसूदन हैं; समस्त विपत्तियों का भंजन करने वाले साक्षात् श्रीनारायण हैं।"
      ]
    },
    "90": {
      title: "हेर देखिया नयन भरिया",
      transliterations: [
        "हेर देखिया नयन भरिया, कि आर पुछसि आने।\nनदीया-नगरे शचीर मन्दिरे, चान्देर उदय दिने॥ (१)",
        "किये लाखबाण करिल काञ्चन, रूपेर निछनि गोरा।\nशचीर उदर जलद निकासिल, स्थिर बिजुरी परा॥ (२)",
        "कत विधु-वर बदन उजोर, निशि दिशि सम शोभे।\nनयन-भ्रमर श्रुति-सरोरुहे, धाय मकरन्द-लोभे॥ (३)",
        "आ-जानु-लम्बित भुज सु-बलित, नाभि हेम सरोबर।\nकटि करि-अरि उरु हेम-गिरि, ए लोचन मनोहर॥ (४)"
      ],
      translations: [
        "अपनी दोनों आँखें भरकर इस दिव्य सौन्दर्य को देखो! अब दूसरों से और क्या पूछना? नदिया नगर में माता शची के मन्दिर (घर) में दिन के समय ही एक साक्षात् पूर्णचन्द्र उदित हो गया है!",
        "लाखों बार तपाए हुए कुन्दन के समान श्री गौरांग महाप्रभु का दिव्य स्वर्णिम श्रीअंग शोभा पा रहा है। माता शची के गर्भ रूपी मेघ से मानो एक स्थिर विद्युत (बिजली) का प्रकाश निकल आया हो!",
        "उनके मुखमण्डल का दिव्य प्रकाश करोड़ों चन्द्रमाओं के तेज को मात देता है, जो दिन-रात चारों दिशाओं को प्रकाशित करता है। उनके कमल जैसे विशाल नेत्र रूपी भंवरे कानों के कर्ण-कमलों से प्रेमामृत पीने को दौड़ते हैं।",
        "उनकी मनोहर भुजाएं घुटनों तक लम्बी (आजानुबाहु) हैं, नाभि मानो सुवर्ण का सरोवर है, कमर सिंह के समान पतली और जंघाएं स्वर्ण-पर्वत के समान सुडौल हैं। यह रूप लोचन दास के हृदय को मोह लेता है।"
      ]
    },
    "91": {
      title: "श्री श्री अद्वैताष्टकम् (सर्वभौम भट्टाचार्य)",
      transliterations: [
        "हुहुङ्कार-गर्जनादि अहो-रात्र-सद्-गुणं\nहा कृष्ण राधिका-नाथ प्रार्थनादि-भावनम्।\nधूप-दीप-कस्तूरी च चन्दनादि-लेपनं\nसीता-नाथाद्वैत-चरणारविन्द-भावनम्॥ (१)",
        "गङ्गा वारि मनो हारि तुलस्यादि मञ्जरी\nकृष्ण-ज्ञानं सदा ध्यानं प्रेम-वारि झर्झरी।\nकृपाब्धिं करुणा-नाथं भविष्यति प्रार्थनां\nसीता-नाथाद्वैत-चरणारविन्द-भावनम्॥ (२)",
        "मुहुर् मुहुः कृष्ण कृष्ण उच्चैः स्वरे गायतः\nअहे नाथ जगत् त्रातः मम दृष्टि-गोचरम्।\nद्विभुज करुणा-नाथ दीयतां सुदर्शनं\nसीता-नाथाद्वैत-चरणारविन्द-भावनम्॥ (३)",
        "श्री अद्वैत प्रार्थनार्थं जगन्नाथ-आलयं\nशची मातुर गर्भ-जातं चैतन्यं करुणामयम्।\nश्री अद्वैत-सङ्ग-रङ्ग-कीर्तन-विलासनं\nसीता-नाथाद्वैत-चरणारविन्द-भावनम्॥ (४)",
        "अद्वैत-चरणारविन्द-ज्ञान-ध्यान-भावनम्\nसदैवाद्य-पाद-पद्म-रेणु-राशि-धारणम्।\nदेहि भक्तिं जगन्नाथ रक्ष माम् अभजनं\nसीता-नाथाद्वैत-चरणारविन्द-भावनम्॥ (५)",
        "सर्व दाता सीता-नाथ प्राणेश्वर सद् गुणं\nये जपन्ति सीता-नाथ-पाद-पद्म केवलम्।\nदीयतां करुणा-नाथ भक्ति-योगं तत् क्षणं\nसीता-नाथाद्वैत-चरणारविन्द-भावनम्॥ (६)",
        "श्री चैतन्य जयाद्वैत नित्यानन्द करुणा-मयं\nएक अङ्ग त्रिधामूर्ति कैशोरादि सदा वरम्।\nजीव-त्राणं भक्ति-ज्ञानं हुङ्कारादि गर्जनं\nसीता-नाथाद्वैत-चरणारविन्द-भावनम्॥ (७)",
        "दीन-हीन-निन्दकादि प्रेम भक्ति-दायकं\nसर्व दाता सीता-नाथ शान्ति पुर नायकम्।\nराग-रङ्ग सङ्ग-दोष कर्म योग मोक्षणं\nसीता-नाथाद्वैत-चरणारविन्द-भावनम्॥ (८)"
      ],
      translations: [
        "जो रात-दिन सिंहनाद और मेघ के समान गर्जना करते हुए 'हे कृष्ण! हे राधिकानाथ!' पुकारते हैं, जो शालग्राम शिला पर चन्दन-कस्तूरी का लेप कर धूप-दीप से आरती करते हैं; मैं उन सीतानाथ श्री अद्वैताचार्य के चरणकमलों का ध्यान करता हूँ।",
        "जो तुलसी मञ्जरी और गंगाजल से शालग्राम की पूजा करते हैं, जिनके नेत्रों से प्रेमाश्रुओं की अजस्र धारा बहती है और जो करुणासागर भगवान् के अवतरण की प्रार्थना करते हैं; मैं उन सीतानाथ श्री अद्वैताचार्य के चरणकमलों का ध्यान करता हूँ।",
        "जो बारम्बार उच्च स्वर से 'कृष्ण! कृष्ण!' गाते हुए प्रार्थना करते हैं—'हे जगत्-रक्षक! अपने दयामय द्विभुज रूप में मेरे नयनों के समक्ष प्रकट होइए'; मैं उन सीतानाथ श्री अद्वैताचार्य के चरणकमलों का ध्यान करता हूँ।",
        "जिन श्री अद्वैताचार्य की प्रार्थना पर जगन्नाथ मिश्र के घर में माता शची के गर्भ से करुणामय श्री चैतन्य महाप्रभु अवतरित हुए और उनके साथ संकीर्तन-विलास किया; मैं उन सीतानाथ श्री अद्वैताचार्य के चरणकमलों का ध्यान करता हूँ।",
        "जिनके चरणकमल ही मेरे ज्ञान और ध्यान के एकमात्र विषय हैं, जिनकी पावन चरण-रज को मैं सदा अपने मस्तक पर धारण करता हूँ; मैं उन सीतानाथ श्री अद्वैताचार्य के चरणकमलों का ध्यान करता हूँ।",
        "सीतानाथ श्री अद्वैताचार्य समस्त वरदानों के दाता और मेरे प्राणेश्वर हैं; जो अनन्य भाव से उनके चरणकमलों का ध्यान करते हैं, उन्हें वे तत्काल शुद्ध भक्तियोग प्रदान करते हैं।",
        "श्री चैतन्य, श्री अद्वैत और नित्यानन्द प्रभु—ये तीनों एक ही परमतत्त्व की तीन दिव्य मूर्तियाँ हैं; जो जीवों के उद्धार हेतु हुंकार भरते हैं, मैं उन श्री अद्वैताचार्य के चरणकमलों का ध्यान करता हूँ।",
        "जो दीन-हीन, पतित और निन्दकों को भी शुद्ध प्रेमाभक्ति का दान करते हैं, जो शान्तिपुर के नायक और कर्म-बन्धन तथा आसक्तियों से मुक्त करने वाले हैं; मैं उन सीतानाथ श्री अद्वैताचार्य के चरणकमलों का ध्यान करता हूँ।"
      ]
    },
    "92": {
      title: "ब्रह्मसंहिता (अध्याय ५ — २९ श्लोक)",
      transliterations: [
        "ईश्वरः परमः कृष्णः सच्चिदानन्दविग्रहः।\nअनादिरादिर्गोविन्दः सर्वकारणकारणम्॥ (१)",
        "चिन्तामणि-प्रकर-सद्मसु कल्पवृक्ष-लक्षावृतेषु सुरभीर् अभिपालयन्तम्।\nलक्ष्मी-सहस्र-शत-सम्भ्रम-सेव्यमानं गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२)",
        "वेणुं क्वणन्तम् अरविन्द-दलायताक्षं बर्हावतंसम् असिताम्बुद-सुन्दराङ्गम्।\nकन्दर्प-कोटि-कमनीय-विशेष-शोभं गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (३)",
        "आलोल-चन्द्रक-लसद्-वनमाल्य-वंशी-रत्नाङ्गदं प्रणय-केलि-कला-विलासम्।\nश्यामं त्रि-भङ्ग-ललितं नियत-प्रकाशं गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (४)",
        "अङ्गानि यस्य सकलेन्द्रिय-वृत्तिमन्ति पश्यन्ति पान्ति कलयन्ति चिरं जगन्ति।\nआनन्द-चिन्मय-सद्-उज्ज्वल-विग्रहस्य गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (५)",
        "अद्वैतम् अच्युतम् अनादिम् अनन्त-रूपम् आद्यं पुराण-पुरुषं नव-यौवनं च।\nवेदेषु दुर्लभम् अदुर्लभम् आत्म-भक्तौ गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (६)",
        "पन्थास् तु कोटि-शत-वत्सर-सम्प्रगम्यो वायोर अथापि मनसो मुनि-पुङ्गवानाम्।\nसो ऽप्य् अस्ति यत्-प्रपद-सीम्न्य् अविचिन्त्य-तत्त्वे गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (७)",
        "एको ऽप्य् असौ रचयितुं जगद्-अण्ड-कोटिं यच्-छक्तिर् अस्ति जगद्-अण्ड-चया यद्-अन्तः।\nअण्डान्तर-स्थ-परमाणु-चयान्तर-स्थं गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (८)",
        "यद्-भाव-भाविता-धियो मनुजास् तथैव सम्प्राप्य रूप-महिमासन-यान-भूषाः।\nसूक्तैर् यम् एव निगम-प्रथितैः स्तुवन्ति गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (९)",
        "आनन्द-चिन्मय-रस-प्रतिभाविताभिस् ताभिर् य एव निज-रूपतया कलाभिः।\nगोलोक एव निवसत्य् अखिलात्म-भूतो गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१०)",
        "प्रेमाञ्जन-च्छुरित-भक्ति-विलोचनेन सन्तः सदैव हृदयेषु विलोकयन्ति।\nयं श्यामसुन्दरम् अचिन्त्य-गुण-स्वरूपं गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (११)",
        "रामादि-मूर्तिषु कला-नियमेन तिष्ठन् नानावतारम् अकरोद् भुवनेषु किन्तु।\nकृष्णः स्वयं समभवत् परमः पुमान् यो गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१२)",
        "यस्य प्रभा प्रभवतो जगद्-अण्ड-कोटि-कोटिष्व् अशेष-वसुधादि विभूति-भिन्नम्।\nतद् ब्रह्म निष्कलम् अनन्तम् अशेष-भूतं गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१३)",
        "माया हि यस्य जगद्-अण्ड-शतानि सूते त्रैगुण्य-तद्-विषय-वेद-वितयमाना।\nसत्त्वावलम्बि-पर-सत्त्वं विशुद्ध-सत्त्वं गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१४)",
        "आनन्द-चिन्मय-रसात्मतया मनःसु यः प्राणिनां प्रतिफलन् स्मरताम् उपेत्य।\nलीलायितेन भुवनानि जयत्य् अजस्रं गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१५)",
        "गोलोक-नाम्नि निज-धाम्नि तले च तस्य देवी-महेश-हरि-धामसु तेषु तेषु।\nते ते प्रभाव-निचया विहिताश् च येन गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१६)",
        "सृष्टि-स्थिति-प्रलय-साधन-शक्तिर् एका छायेव यस्य भुवनानि बिभर्ति दुर्गा।\nइच्छानुरूपम् अपि यस्य च चेष्टते सा गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१७)",
        "क्षीरं यथा दधि विकार-विशेष-योगात् सञ्जायते न हि ततः पृथग् अस्ति हेतोः।\nयः शम्भुताम् अपि तथा समुपैति कार्याद् गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१८)",
        "दीपार्चिर् एव हि दशान्तरम् अभ्युपेत्य दीपायते विवृत-हेतु-समान-धर्मा।\nयस् तादृग् एव हि च विष्णुतया विभाति गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (१९)",
        "यः कारणार्णव-जले भजति स्म योग-निद्राम् अनन्त-जगद्-अण्ड-स-रोम-कूपः।\nआधार-शक्तिम् अवलम्ब्य परां स्व-मूर्तिं गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२०)",
        "यस्यैक-निश्श्वसित-कालम् अथावलम्ब्य जीवन्ति लोम-विलजा जगद्-अण्ड-नाथाः।\nविष्णुर् महान् स इह यस्य कला-विशेषो गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२१)",
        "भास्वान् यथाश्म-शकलेषु निजेषु तेजः स्वीयं कियत् प्रकटयत्य् अपि तद्वद् अत्र।\nब्रह्मा य एष जगद्-अण्ड-विधान-कर्ता गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२२)",
        "यत्-पाद-पल्लव-युगं विनिधाय कुम्भ-द्वन्द्वे प्रणाम-समये स गणाधिराजः।\nविघ्नान् विहन्तुम् अलम् अस्य जगत्-त्रयस्य गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२३)",
        "अग्निर् मही गगनम् अम्बु मरुद् दिशश् च कालस् तथात्म-मनसीति जगत्-त्रयाणि।\nयस्माद् भवन्ति विभवन्ति विशन्ति यं च गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२४)",
        "यच्-चक्षुर् एष सविता सकल-ग्रहाणां राजा समस्त-सुर-मूर्तिर् अशेष-तेजाः।\nयस्याज्ञया भ्रमति सम्भृत-काल-चक्रो गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२५)",
        "धर्मो ऽथ पाप-निचयः श्रुतयस् तपांसि ब्रह्मादि-कीट-पतगावधयश् च जीवाः।\nयद्-दत्त-मात्र-विभव-प्रकट-प्रभावा गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२६)",
        "यस् त्व् इन्द्रगोपम् अथवा इन्द्रम् अहो स्व-कर्म-बन्धानुरूप-फल-भाजनम् आतनोति।\nकर्माणि निर्दहति किन्तु च भक्ति-भाजां गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२७)",
        "यं क्रोध-काम-सहज-प्रणयादि-भीति-वात्सल्य-मोह-गुरु-गौरव-सेव्य-भावैः।\nसञ्चिन्त्य तस्य सदृशीं तनुम् आपुर् एते गोविन्दम् आदि-पुरुषं तम् अहं भजामि॥ (२८)",
        "श्रियः कान्ताः कान्तः परम-पुरुषः कल्प-तरवो द्रुमा भूमिश् चिन्तामणि-गण-मयी तोयम् अमृतम्।\nकथा गानं नाट्यं गमनम् अपि वंशी प्रिय-सखी चिद्-आनन्दं ज्योतिः परम् अपि तद् आस्वाद्यम् अपि च।\nस यत्र क्षीराब्धिः स्रवति सुरभीभ्यश् च सु-महान् निमेषार्धाख्यो वा व्रजति न हि यत्रापि समयः।\nभजे श्वेतद्वीपं तम् अहम् इह गोलोकम् इति यं विदन्तस् ते सन्तः क्षिति-विरल-चाराः कतिपये॥ (२९)"
      ],
      translations: [
        "श्रीकृष्ण ही परमेश्वर (सर्वोच्च नियंता) हैं, उनका स्वरूप सच्चिदानन्दमय (सत्, चित् और आनन्द से परिपूर्ण) है। वे अनादि हैं, सबके आदि हैं, उनका नाम गोविन्द है और वे समस्त कारणों के भी मूल कारण हैं।",
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जो चिन्तामणि मणियों से निर्मित महलों में, लाखों कल्पवृक्षों से घिरे हुए गोलोक धाम में सुरभि गायों का पालन करते हैं, और जहाँ सैकड़ों-हजारों लक्ष्मियाँ (गोपियाँ) परम आदर और अनुराग से जिनकी नित्य सेवा करती हैं।",
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जो अपनी दिव्य मुरली पर मधुर तान छेड़ते हैं, जिनके नेत्र खिले हुए कमलदल के समान विशाल और मनोहर हैं, जिनके मस्तक पर मोरपंख का मुकुट सुशोभित है, जिनका श्रीअंग नील मेघ के समान सुन्दर है और जिनका दिव्य लावण्य करोड़ों कामदेवों के सौन्दर्य को भी मात देने वाला है।",
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जिनके वक्षःस्थल पर चन्द्रक-चिह्नित वनमाला और हाथों में रत्नजड़ित वंशी एवं बाजूबंद सुशोभित हैं, जो प्रेममयी दिव्य क्रीड़ाओं के विलास में मग्न हैं, जिनका श्यामसुन्दर स्वरूप तीन स्थानों से मुड़ा हुआ (त्रिभंग ललित) और नित्य प्रकाशित है।",
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जिनका दिव्य श्रीविग्रह सच्चिदानन्दमय और परम उज्ज्वल है; जिनके प्रत्येक अंग में समस्त इन्द्रियों की पूर्ण शक्तियाँ विद्यमान हैं, और जो अपने किसी भी अंग से अनन्त ब्रह्माण्डों का दर्शन, पालन तथा नित्य नियंत्रण करते हैं।",
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जो अद्वैत (एकमेवाद्वितीय), अच्युत, अनादि, अनन्तरूप, सबके आदि और पुरातन पुरुष होने पर भी नित्य नव-यौवन से सम्पन्न हैं; जो केवल वेदों के अध्ययन से दुर्लभ हैं किन्तु अपनी शुद्ध प्रेमाभक्ति से अत्यन्त सुलभ हैं।",
        "मुनिश्रेष्ठगण प्राणायाम द्वारा वायु की अथवा मन की गति से करोड़ों-अरबों वर्षों तक यात्रा करते हुए जिस अनिर्वचनीय तत्त्व की खोज करते हैं, वह तत्त्व भी जिनके चरणकमलों के नख के अग्रभाग की तुलना में तुच्छ है; उन अचिन्त्य आदिपुरुष गोविन्द का मैं भजन करता हूँ।",
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जो अद्वितीय होकर भी अपनी अचिन्त्य शक्ति से करोड़ों ब्रह्माण्डों की रचना करते हैं, जिनके भीतर समस्त ब्रह्माण्ड समाए हुए हैं, और जो प्रत्येक ब्रह्माण्ड में तथा प्रत्येक परमाणु के भीतर भी पूर्ण रूप से विद्यमान हैं।",
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जिनकी भक्ति-भावना से भावित बुद्धि वाले भक्तगण वैकुण्ठ में उनके अनुरूप दिव्य रूप, महिमा, सिंहासन, विमान और आभूषण प्राप्त करके वेदोक्त सूक्तों द्वारा जिनकी नित्य स्तुति करते हैं।",
        "मैं उन आदिपुरुष भगवान् गोविन्द का भजन करता हूँ, जो समस्त जीवों की अन्तरात्मा होकर भी गोलोक धाम में अपनी ही स्वरूप-भूता आह्लादिनी शक्ति श्रीमती राधारानी और उनकी कायव्यूह-रूपा सखियों (गोपियों) के साथ नित्य दिव्य आनन्द-चिन्मय रस का आस्वादन करते हैं।",
        "प्रेम रूपी अंजन (काजल) से युक्त भक्ति-नेत्रों वाले शुद्ध संतगण जिन अचिन्त्य-गुण-सम्पन्न भगवान् श्यामसुन्दर का अपने हृदय में निरन्तर दर्शन करते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जो राम, नृसिंह, वामन आदि नाना अवतारों में अपने अंश और कलाओं के रूप में प्रकट होते हैं, किन्तु स्वयं परम पुरुष श्रीकृष्ण के रूप में साक्षात् अवतरित होते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जिनके श्रीअंग की दिव्य ज्योति (अंग-प्रभा) उपनिषदों में वर्णित निर्विशेष, अखण्ड, अनन्त और सर्वव्यापक ब्रह्म के रूप में प्रकाशित होती है; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जिनकी बहिरंगा शक्ति माया सत्त्व, रज और तम तीनों गुणों से युक्त सैकड़ों ब्रह्माण्डों की रचना करती है, और जो स्वयं माया के गुणों से परे विशुद्ध सत्त्वमय (त्रिगुणातीत) स्वरूप हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जो स्मरण करने वाले भक्तों के मन में आनन्द-चिन्मय रस के रूप में प्रतिबिम्बित होकर अपनी अनुपम लीलाओं द्वारा समस्त लोकों को निरन्तर वशीभूत कर लेते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जो अपने परम गोलोक धाम में विराजमान हैं, और जिनके नीचे देवी-धाम (भौतिक जगत), महेश-धाम (शिवलोक) तथा हरि-धाम (वैकुण्ठ) अवस्थित हैं, और जिन्होंने इन लोकों के स्वामियों को उनके यथोचित प्रभाव और अधिकार प्रदान किए हैं; उन आदिपुरुष गोविन्द का मैं भजन करता हूँ।",
        "जिनकी चित्-शक्ति की छाया-रूपा दुर्गा इस भौतिक जगत की सृष्टि, स्थिति और प्रलय करने वाली शक्ति बनकर समस्त लोकों का भरण-पोषण करती हैं और जो सर्वदा जिनकी इच्छा के अनुसार ही कार्य करती हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जिस प्रकार दूध किसी खट्टे पदार्थ के विकार-संयोग से दही बन जाता है और दही दूध से पृथक भी नहीं है और दूध भी नहीं है, उसी प्रकार जो सृष्टि के संहार-कार्य हेतु 'शम्भु' (शिव) रूप में रूपांतरित होते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जैसे एक जलते हुए दीपक से दूसरा दीपक जलाया जाए तो दूसरा दीपक भी पहले के समान ही प्रकाशवान् और शक्तिमान होता है, उसी प्रकार जो अपने स्वांश रूप में महाविष्णु, गर्भोदकशायी विष्णु और क्षीरोदकशायी विष्णु के रूप में प्रकाशित होते हैं; उन आदिपुरुष गोविन्द का मैं भजन करता हूँ।",
        "जो अनन्त ब्रह्माण्डों को अपने प्रत्येक रोम-कूप में धारण किए हुए, अपनी आधार-शक्ति शेषनाग का आश्रय लेकर कारणार्णव (कारण-समुद्र) के जल में योग-निद्रा का आनन्द लेते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जिनके एक श्वास-प्रश्वास के समय तक महाविष्णु के रोम-कूपों से उत्पन्न ब्रह्मा आदि समस्त ब्रह्माण्डों के स्वामी जीवित रहते हैं, और वे महाविष्णु भी जिनके एक कला-विशेष (अंशांश) हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जैसे सूर्य अपनी प्रभा सूर्यकांत मणि आदि रत्नों में अंशतः प्रकट करता है, उसी प्रकार ब्रह्माण्ड की सृष्टि करने वाले ब्रह्मा जी जिनके द्वारा प्रदत्त शक्ति से ही सृष्टि-रचना में समर्थ होते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "गणाधिपति श्रीगणेश जी प्रणाम करते समय जिनके युगल चरणकमलों को अपने दोनों मस्तक-कुम्भों पर धारण करके तीनों लोकों के विघ्नों का विनाश करने की शक्ति प्राप्त करते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "अग्नि, पृथ्वी, आकाश, जल, वायु, दिशाएं, काल, आत्मा और मन—इन नौ तत्त्वों से मिलकर बने तीनों लोक जिनसे उत्पन्न होते हैं, जिनमें स्थित रहते हैं और प्रलयकाल में पुनः जिनमें लीन हो जाते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "समस्त ग्रहों के राजा, अनन्त तेजस्वी और देव-स्वरूप सूर्यदेव जो भगवान् के साक्षात् नेत्र हैं, जिनकी आज्ञा से काल-चक्र के रथ पर आरूढ़ होकर अपनी कक्षा में भ्रमण करते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "धर्म, पाप, समस्त वेद, तपस्याएँ और ब्रह्मा जी से लेकर क्षुद्र कीट-पतंग तक समस्त जीव जिनका दिया हुआ प्रभाव और सामर्थ्य पाकर ही प्रकाशित होते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जो क्षुद्र इन्द्रगोप कीट से लेकर देवराज इन्द्र तक सभी जीवों को उनके कर्म-बन्धन के अनुसार कर्मफल प्रदान करते हैं, किन्तु अपने अनन्य भक्तों के समस्त संचित कर्म-बन्धनों को समूल भस्म कर देते हैं; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जिनका क्रोध (शिशुपाल आदि), काम (गोपियाँ), सख्य (श्रीदामा आदि), भय (कंस), वात्सल्य (यशोदा-नन्द) अथवा सेव्य भाव से निरन्तर ध्यान करके जीवों ने उन्हीं के सदृश दिव्य स्वरूप प्राप्त किया; उन आदिपुरुष भगवान् गोविन्द का मैं भजन करता हूँ।",
        "जहाँ समस्त गोपियाँ दिव्य लक्ष्मियाँ हैं और एकमात्र प्रियतम परम पुरुष श्रीकृष्ण हैं; जहाँ का प्रत्येक वृक्ष कल्पवृक्ष है, भूमि चिन्तामणि मणियों से बनी है और जल साक्षात् अमृत है; जहाँ प्रत्येक शब्द एक मधुर गान है, प्रत्येक पद-संचार एक दिव्य नृत्य है, मुरली परम प्रिय सखी है और दिव्य ज्योति परमानन्द का आस्वादन कराती है; जहाँ सुरभि गौएं क्षीरसागर के समान दुग्ध बहाती हैं और जहाँ समय का कभी क्षय नहीं होता; उस श्वेतद्वीप गोलोक धाम को इस पृथ्वी पर केवल कुछ विरले संत ही जानते हैं, मैं उसी गोलोक धाम और आदिपुरुष गोविन्द का भजन करता हूँ।"
      ]
    },
    "93": {
      title: "यार मुखे भाइ हरि-कथा नाइ",
      transliterations: [
        "यार मुखे भाइ, हरि-कथा नाइ, तार काछे तुमि जेओ ना।\nयार मुख देखि’, भुले याबे हरि, तार मुखपाने चेओ ना॥ (१)",
        "क’दिन रहिबे, भव माझे आर, अविलम्बे कर याहा करिबार।\nपरेर कथाय किबा आसे याय, मिछे दाग तुमि पेओ ना॥ (२)",
        "के तोमाके कबे कि कथा कहिबे, से कथा भाविले आर कि चलिबे।\nविपदे सम्पदे राखिबे जे पदे, ताँर पद केनो भाव ना॥ (३)",
        "(केवल) हरि कथा कह, हरि गुण गाओ, हरिनाम रसे सदा मत्त हओ।\nहरिनाम गीति गाओ नीति नीति, अन्य कोनो गीति गेओ ना॥ (४)"
      ],
      translations: [
        "हे भाई! जिसके मुख में श्रीहरि की कथा नहीं है, उसके पास कभी मत जाओ। जिसका मुख देखने से हरि विस्मृत हो जाएँ, उसके मुख की ओर कभी मत देखो!",
        "इस नश्वर संसार में तुम और कितने दिन रहोगे? जो परम कल्याणकारी कार्य करना है, उसे अविलम्ब करो। दूसरों की बातों से क्या आता-जाता है? व्यर्थ में माया की चोटें मत खाओ!",
        "कौन तुमसे कब क्या कहेगा, यदि तुम केवल यही सोचते रहोगे तो भक्ति के पथ पर कैसे चल पाओगे? जो श्रीचरण सम्पत्ति और विपत्ति दोनों में तुम्हारी रक्षा करेंगे, उन प्रभु-चरणों का ध्यान क्यों नहीं करते?",
        "केवल हरिकथा कहो, श्रीहरि के गुणों का गान करो और सदा हरिनाम के रसामृत में मस्त रहो! प्रतिदिन निरन्तर हरिनाम का ही गान करो, इसके अतिरिक्त सांसारिक गीतों को कभी मत गाओ!"
      ]
    },
    "94": {
      title: "श्री गौर आरती (जय जय गोराचाँदेर आरतिक)",
      transliterations: [
        "(किबा) जय जय गोराचाँदेर आरतिक शोभा।\nजाह्नवी-तट-वने जग-मन-लोभा॥ (१)",
        "दक्षिणे निताइचाँद, बामे गदाधर।\nनिकटे अद्वैत, श्रीनिवास छत्र-धर॥ (२)",
        "बसियाछे गोराचाँद रत्न-सिंहासने।\nआरति करेन ब्रह्मा-आदि देव-गणे॥ (३)",
        "नरहरि-आदि करि’ चामर ढुलाय।\nसञ्जय-मुकुन्द-वासु-घोषादि गाय॥ (४)",
        "शङ्ख बाजे घण्टा बाजे बाजे करताल।\nमधुर मृदङ्ग बाजे परम रसाल॥ (५)",
        "बहु-कोटि चन्द्र जिनि’ वदन उज्ज्वल।\nगल-देशे बन-माला करे झलमल॥ (६)",
        "शिव-शुक-नारद प्रेमे गद-गद।\nभकतिविनोद देखे गोरार सम्पद॥ (७)"
      ],
      translations: [
        "श्री गौरसुन्दर (चैतन्य महाप्रभु) की इस दिव्य आरती की जय हो, जय हो! गंगा (जाह्नवी) के तट पर स्थित नवद्वीप के उपवन में होने वाली यह गौर-आरती तीनों लोकों के समस्त जीवों के मनों को आकर्षित कर रही है।",
        "महाप्रभु के दाहिनी ओर श्री नित्यानन्द प्रभु और बाईं ओर श्री गदाधर पण्डित विराजमान हैं। निकट ही श्री अद्वैताचार्य खड़े हैं और श्रीवास ठाकुर प्रभु के मस्तक पर छत्र धारण किए हुए हैं।",
        "श्री गोराचाँद दिव्य रत्न-सिंहासन पर विराजमान हैं और ब्रह्मा जी आदि समस्त देवतागण उनकी आरती उतार रहे हैं।",
        "नरहरि सरकार आदि पार्षद चँवर डुला रहे हैं तथा संजय पण्डित, मुकुन्द दत्त और वासुदेव घोष आदि भक्तगण मधुर कीर्तन गा रहे हैं।",
        "शंख, घण्टा और करताल बज रहे हैं, और साथ ही मृदंग की परम रसीली एवं मधुर ध्वनि गूँज रही है।",
        "श्री गौरांग महाप्रभु के मुखमण्डल का दिव्य तेज करोड़ों चन्द्रमाओं के प्रकाश को भी परास्त कर रहा है, और उनके गले में वन-फूलों की माला जगमगा रही है।",
        "भगवान् शिव, शुकदेव गोस्वामी और देवर्षि नारद प्रेम में गद्गद होकर इस आरती का दर्शन कर रहे हैं; और श्रील भक्तिविनोद ठाकुर श्री गौरांग महाप्रभु के इस दिव्य ऐश्वर्य व माधुर्य का दर्शन कर रहे हैं।"
      ]
    },
    "95": {
      title: "जगन्नाथ तत्त्व",
      transliterations: [
        "जय जगन्नाथ, जय जगन्नाथ, जय जगन्नाथ, जय जगन्नाथ।\nजय बलदेव, जय सुभद्रा, जय बलदेव, जय सुभद्रा॥\nजगन्नाथ स्वामी नयन-पथ-गामी भवतु मे॥ (१)"
      ],
      translations: [
        "श्री जगन्नाथ जी की जय हो! श्री बलदेव प्रभु की जय हो! माता सुभद्रा की जय हो! हे ब्रह्माण्ड के स्वामी श्री जगन्नाथ जी! आप सदा मेरे नयनों के समक्ष प्रकाशित रहिए।"
      ]
    },
    "96": {
      title: "जानु-लम्बित-बाहु-युगल",
      transliterations: [
        "जानु लम्बित बाहु युगल, कनक पुतली देह।\nअरुण अम्बर शोभित कलेवर, उपमा देयब कह॥ (१)",
        "हास विमल बयान कमल, पीन हृदय साजे।\nउन्नत गीम सिंह जिनिया, उदार विग्रह राजे॥ (२)",
        "चरण नखर उजोर शशधर, कणय मञ्जरी सोहे।\nहेरि दिनमणि आपन निछये, रूपे जगमन मोहे॥ (३)",
        "कलि युगेर अवतार चैतन्य निताइ, पाप पाषण्ड नाहि माने।\nश्री कृष्ण चैतन्य ठाकुर नित्यानन्द, वृन्दावन (दास) गुण गाने॥ (४)"
      ],
      translations: [
        "जिनकी विशाल भुजाएं घुटनों तक लम्बी (आजानुबाहु) हैं, जिनका श्रीअंग स्वर्ण-पुतली के समान द्युतिमान् है और जो प्रातःकालीन सूर्य के समान लाल-पीले वस्त्रों से सुशोभित हैं—उनके सौन्दर्य की क्या उपमा दी जाए!",
        "जिनके मुख-कमल पर निर्मल मन्द मुस्कान है, जिनका विशाल वक्षःस्थल सुशोभित है और जिनकी सुडौल ग्रीवा सिंह के समान उन्नत है—वे उदार श्रीविग्रह परम शोभायमान हैं।",
        "जिनके चरणकमलों के नख करोड़ों चन्द्रमाओं के समान उज्ज्वल हैं और जिनमें नूपुरों की मधुर ध्वनि गूँज रही है; जिनके रूप को देखकर सूर्य भी न्योछावर हो जाता है और तीनों लोकों के मन मुग्ध हो जाते हैं।",
        "कलियुग के परम अवतार श्री चैतन्य महाप्रभु और नित्यानन्द प्रभु हैं, जो पापी या पाखण्डी का कोई विचार किए बिना सब पर अपनी अहैतुकी कृपा बरसाते हैं। वृन्दावन दास इन दोनों स्वामियों के पावन गुणों का गान करते हैं।"
      ]
    },
    "97": {
      title: "जय जय जगन्नाथ शचीर नन्दन",
      transliterations: [
        "जय जय जगन्नाथ शचीर नन्दन।\nत्रिभुवने करे याँर चरण वन्दन॥ (१)",
        "नीलाचले शङ्ख-चक्र-गदा-पद्म-धर।\nनदीया नगरे दण्ड-कमण्डलु-कर॥ (२)",
        "केहो बोले पूरवे रावण बधिले।\nगोलोकेर वैभव लीला प्रकाश करिले॥ (३)",
        "श्री-राधार भावे एबे गोरा अवतार।\nहरे कृष्ण नाम गौर करिला प्रचार॥ (४)",
        "वासुदेव घोष बोले करि’ जोड़ हात।\nयेइ गौर सेइ कृष्ण सेइ जगन्नाथ॥ (५)"
      ],
      translations: [
        "जगन्नाथ मिश्र और माता शची के नन्दन श्री गौरांग महाप्रभु की जय हो, जय हो! तीनों लोकों के समस्त जीव जिनके पावन चरणकमलों की वन्दना करते हैं।",
        "जो नीलाचल (पुरी धाम) में शंख, चक्र, गदा और पद्म धारण करते हैं, वे ही नदिया नगर में सन्न्यासी का दण्ड और कमण्डलु धारण किए हुए हैं।",
        "पूर्वकाल में त्रेतायुग में श्रीराम के रूप में रावण का वध किया और द्वापर में श्रीकृष्ण बनकर गोलोक के ऐश्वर्य व माधुर्य की लीलाओं को प्रकाशित किया।",
        "अब कलियुग में श्रीमती राधारानी के दिव्य भाव और अंग-कान्ति को स्वीकार कर श्री गौरहरि के रूप में अवतरित हुए और उन्होंने हरे कृष्ण महामन्त्र का घर-घर प्रचार किया।",
        "वासुदेव घोष दोनों हाथ जोड़कर कहते हैं—'जो साक्षात् गौरसुन्दर हैं, वे ही नन्दनन्दन श्रीकृष्ण हैं और वे ही नीलाचल के श्री जगन्नाथ जी हैं।'"
      ]
    },
    "98": {
      title: "जय जय राधा-कृष्ण युगल-मिलन",
      transliterations: [
        "जय जय राधा-कृष्ण युगल-मिलन।\nआरति करवे ललितादि सखी-गण॥ (१)",
        "मदन-मोहन रूप त्रि-भङ्ग-सुन्दर।\nपीताम्बर शिखि-पुच्छ-चूड़ा-मनोहर॥ (२)",
        "ललित-माधव-वामे वृषभानु-कन्या।\nसुनील-वसना गौरी रूपे गुणे धन्या॥ (३)",
        "नाना-विध अलङ्कार करे झलमल।\nहरि-मनो-विमोहन वदन उज्ज्वल॥ (४)",
        "विशाखादि सखी-गण नाना रागे गाय।\nप्रिय-नर्म-सखी यत चामर ढुलाय॥ (५)",
        "श्री-राधा-माधव-पद-सरसिज-आशे।\nभकतिविनोद सखी-पदे सुखे भासे॥ (६)"
      ],
      translations: [
        "श्री श्री राधा-कृष्ण युगलकिशोर के पावन मिलन की जय हो, जय हो! ललिता आदि सखियाँ परम आनन्द में उनकी दिव्य आरती उतार रही हैं।",
        "कामदेव को भी मोहित करने वाले मदनमोहन श्रीकृष्ण का त्रिभंग-ललित स्वरूप, पीताम्बर और मोरपंख का मुकुट मन को हरने वाला है।",
        "सुन्दर माधव के बाईं ओर वृषभानुनन्दिनी श्रीराधा विराजमान हैं, जो नील वर्ण की साड़ी पहने हुए हैं और जिनका गौर-वर्ण दिव्य लावण्य और सद्गुणों से परिपूर्ण है।",
        "विविध प्रकार के रत्न-आभूषण उनके श्रीअंग पर जगमगा रहे हैं और उनका उज्ज्वल मुखमण्डल श्रीहरि के मन को भी विमोहित कर रहा है।",
        "विशाखा आदि सखियाँ मधुर रागों में कीर्तन कर रही हैं और प्रियनर्म-सखियाँ चँवर डुलाकर युगलकिशोर की सेवा कर रही हैं।",
        "श्री राधा-माधव के चरण-कमलों की प्राप्ति की आशा में, भक्तिविनोद व्रज-गोपियों के चरणकमलों के अनुगत होकर परमानन्द में मग्न हैं।"
      ]
    },
    "99": {
      title: "जय जय श्री कृष्ण चैतन्य नित्यानन्द",
      transliterations: [
        "जय जय श्री कृष्ण चैतन्य नित्यानन्द।\nजयाद्वैत-चन्द्र जय गौर भक्त वृन्द॥ (१)",
        "कृपा करि’ सबे मिलि’ करहो करुणा।\nअधम पतित जने ना करिहो घृणा॥ (२)",
        "ए तिन संसार माझे तुया पद सार।\nभाविया देखिनु मने गति नाहि आर॥ (३)",
        "से पद पावार आशे खेद उठे मने।\nव्याकुल हृदय सदा करिये क्रन्दने॥ (४)",
        "कि रूपे पाइबो किछु ना पाइ सन्धान।\nप्रभु लोकनाथ पद नाहिक स्मरण॥ (५)",
        "तुमि त’ दयाल प्रभु चाहो एकबार।\nनरोत्तम हृदयेर घुचाओ अन्धकार॥ (६)"
      ],
      translations: [
        "श्री कृष्ण चैतन्य महाप्रभु और प्रभु नित्यानन्द की जय हो, जय हो! श्री अद्वैत चन्द्र और समस्त गौर-भक्तवृन्द की जय हो!",
        "आप सब मिलकर मुझ पर अपनी अहैतुकी कृपा कीजिए; मुझ जैसे अधम और पतित जीव से घृणा मत कीजिए।",
        "इन तीनों लोकों में आपके पावन चरणकमल ही एकमात्र सार-तत्त्व हैं; मैंने अपने मन में भली-भाँति देख लिया है कि आपके अतिरिक्त मेरी अन्य कोई गति नहीं है।",
        "आपके उन श्रीचरणों को प्राप्त करने की लालसा में मेरे मन में भारी खेद उठता है और मेरा व्याकुल हृदय निरन्तर रोता रहता है।",
        "मैं उन चरणों को कैसे प्राप्त करूँगा इसका मुझे कोई उपाय नहीं सूझता; मुझ अभागे को अपने गुरुदेव श्री लोकनाथ गोस्वामी के चरणों का भी नित्य स्मरण नहीं रहता।",
        "हे प्रभु! आप परम दयालु हैं, केवल एक बार कृपा-दृष्टि से मेरी ओर देखिए और नरोत्तम के हृदय के अज्ञानमय अन्धकार को दूर कीजिए!"
      ]
    },
    "100": {
      title: "जय नरसिंह श्री नरसिंह",
      transliterations: [
        "जय नरसिंह श्री नरसिंह, जय जय नरसिंहदेव।\nप्रह्लादेश जय पद्म, मुख-पद्म-भृङ्ग॥ (१)"
      ],
      translations: [
        "भगवान् नृसिंहदेव की जय हो! श्री नृसिंहदेव की जय हो! भक्त प्रह्लाद के रक्षक प्रभु नृसिंहदेव की जय हो, जो लक्ष्मी जी के मुख-कमल का मकरन्द पान करने वाले भौंरे के समान हैं।"
      ]
    },
    "101": {
      title: "जय राधा गिरि-वर-धारी",
      transliterations: [
        "जय राधा गिरि-वर-धारी।\nश्री नन्द-नन्दन वृषभानु-दुलारी॥ (१)",
        "मोर-मुकुट मुख मुरली जोरी।\nवेणी विराजे मुखे हाँसी थोरी॥ (२)",
        "उनकी सोहे गले वन-माला।\nइनकी मोतिम-माला उजाला॥ (३)",
        "पीताम्बर जग-जन-मन मोहे।\nनील ओढ़नी बनि उनकी सोहे॥ (४)",
        "अरुण चरणे मणि-मञ्जीर बाजे।\nश्री-कृष्ण-दास तहिं मन राजे॥ (५)"
      ],
      translations: [
        "श्रीमती राधारानी और गोवर्धनधारी श्रीकृष्ण की जय हो! वे नन्दनन्दन हैं और वे वृषभानुनन्दिनी दुलारी हैं।",
        "उनके मस्तक पर मोरपंख का मुकुट और अधरों पर मुरली सुशोभित है; और राधारानी की लम्बी वेणी और मुख पर मन्द मुस्कान विराज रही है।",
        "श्यामसुन्दर के गले में वनमाला सुशोभित है और श्रीराधारानी के गले में उज्ज्वल मोतियों की माला शोभा पा रही है।",
        "श्रीकृष्ण का पीताम्बर समस्त जगत् के मन को मोह लेता है और श्रीराधारानी की नीली ओढ़नी परम शोभायमान है।",
        "उनके लाल-लाल चरणकमलों में रत्नजड़ित नूपुर मधुर झंकार कर रहे हैं; कृष्णदास का मन सदा उन्हीं दिव्य चरणों में अनुरक्त रहता है।"
      ]
    },
    "102": {
      title: "जय राधा माधव जय कुञ्ज-बिहारी",
      transliterations: [
        "जय राधा-माधव जय कुञ्ज-बिहारी।\nजय गोपी-जन-वल्लभ जय गिरि-वर-धारी॥",
        "यशोदा-नन्दन, व्रज-जन-रञ्जन,\nयामुन-तीर-वन-चारी॥"
      ],
      translations: [
        "श्री राधा के प्राणवल्लभ, वृन्दावन के निकुञ्जों में दिव्य लीला करने वाले श्री माधव की जय हो! गोपियों के प्रियतम और गोवर्धन पर्वत को धारण करने वाले श्री गिरिधारी की जय हो!",
        "माता यशोदा के दुलारे नन्दन, समस्त ब्रजवासियों को आनन्द प्रदान करने वाले और यमुना-तट के रमणीय वनों में विहार करने वाले श्यामसुन्दर की जय हो!"
      ]
    },
    "103": {
      title: "जय राधा-कृष्ण गीति (जयदेवेर प्राण-धन हे)",
      transliterations: [
        "जय राधा-माधव राधा-माधव राधे।\n(जयदेवेर प्राण-धन हे) (१)",
        "जय राधा-मदन-गोपाल राधा-मदन-गोपाल राधे।\n(सीता-नाथेर प्राण-धन हे) (२)",
        "जय राधा-गोविन्द राधा-गोविन्द राधे।\n(रूप गोस्वामीर प्राण-धन हे) (३)",
        "जय राधा-मदन-मोहन राधा-मदन-मोहन राधे।\n(सनातनेर प्राण-धन हे) (४)",
        "जय राधा-गोपीनाथ राधा-गोपीनाथ राधे।\n(मधु पण्डितेर प्राण-धन हे) (५)",
        "जय राधा-दामोदर राधा-दामोदर राधे।\n(जीव गोस्वामीर प्राण-धन हे) (६)",
        "जय राधा-रमण राधा-रमण राधे।\n(गोपाल भट्टेर प्राण-धन हे) (७)",
        "जय राधा-विनोद राधा-विनोद राधे।\n(लोकनाथेर प्राण-धन हे) (८)",
        "जय राधा-गोकुलानन्द राधा-गोकुलानन्द राधे।\n(विश्वनाथेर प्राण-धन हे) (९)",
        "जय राधा-गिरिधारी राधा-गिरिधारी राधे।\n(दास गोस्वामीर प्राण-धन हे) (१०)",
        "जय राधा-श्यामसुन्दर राधा-श्यामसुन्दर राधे।\n(श्यामानन्देर प्राण-धन हे) (११)",
        "जय राधा-बाँके-बिहारी राधा-बाँके-बिहारी राधे।\n(हरिदासेर प्राण-धन हे) (१२)",
        "जय राधा-कान्त राधा-कान्त राधे।\n(वक्रेश्वरेर प्राण-धन हे) (१३)",
        "जय गान्धर्विका-गिरिधारी गान्धर्विका-गिरिधारी राधे।\n(सरस्वतीर प्राण-धन हे) (१४)"
      ],
      translations: [
        "श्री श्री राधा-माधव की जय हो! श्री राधा-माधव की जय हो! जो श्रील जयदेव गोस्वामी के प्राण-धन (जीवन-सर्वस्व) हैं।",
        "श्री श्री राधा-मदनगोपाल की जय हो! जो सीतानाथ श्री अद्वैताचार्य के प्राण-धन हैं।",
        "श्री श्री राधा-गोविन्द देव की जय हो! जो श्रील रूप गोस्वामी के प्राण-धन हैं।",
        "श्री श्री राधा-मदनमोहन की जय हो! जो श्रील सनातन गोस्वामी के प्राण-धन हैं।",
        "श्री श्री राधा-गोपीनाथ की जय हो! जो श्री मधु पण्डित के प्राण-धन हैं।",
        "श्री श्री राधा-दामोदर की जय हो! जो श्रील जीव गोस्वामी के प्राण-धन हैं।",
        "श्री श्री राधा-रमण देव की जय हो! जो श्रील गोपाल भट्ट गोस्वामी के प्राण-धन हैं।",
        "श्री श्री राधा-विनोद की जय हो! जो श्रील लोकनाथ गोस्वामी के प्राण-धन हैं।",
        "श्री श्री राधा-गोकुलानन्द की जय हो! जो श्रील विश्वनाथ चक्रवर्ती ठाकुर के प्राण-धन हैं।",
        "श्री श्री राधा-गिरिधारी की जय हो! जो श्रील रघुनाथ दास गोस्वामी के प्राण-धन हैं।",
        "श्री श्री राधा-श्यामसुन्दर की जय हो! जो श्रील श्यामानन्द प्रभु के प्राण-धन हैं।",
        "श्री श्री राधा-बाँकेबिहारी की जय हो! जो स्वामी हरिदास के प्राण-धन हैं।",
        "श्री श्री राधा-कान्त देव की जय हो! जो श्री वक्रेश्वर पण्डित के प्राण-धन हैं।",
        "श्री श्री गान्धर्विका-गिरिधारी की जय हो! जो जगद्गुरु श्रील भक्तिसिद्धान्त सरस्वती गोस्वामी ठाकुर प्रभुपाद के प्राण-धन हैं।"
      ]
    },
    "104": {
      title: "श्री व्रजधाम महिमामृत (जय राधे जय कृष्ण जय वृन्दावन)",
      transliterations: [
        "जय राधे जय कृष्ण जय वृन्दावन।\nश्री गोविन्द गोपीनाथ मदन-मोहन॥ (१)",
        "श्याम-कुण्ड राधा-कुण्ड गिरि-गोवर्धन।\nकालिन्दी यमुना जय जय महावन॥ (२)",
        "केशी-घाट वंशी-वट द्वादश-कानन।\nयाहा सब लीला कैल श्री-नन्द-नन्दन॥ (३)",
        "श्री-नन्द-यशोदा जय जय गोप-गण।\nश्रीदामादि जय जय धेनु-वत्स-गण॥ (४)",
        "जय वृषभानु जय कीर्तिदा सुन्दरी।\nजय पौर्णमासी जय आभीर-नागरी॥ (५)",
        "जय जय गोपेश्वर वृन्दावन-माझ।\nजय जय कृष्ण-सखा बटु द्विज-राज॥ (६)",
        "जय राम-घाट जय रोहिणी-नन्दन।\nजय जय वृन्दावन-वासी यत जन॥ (७)",
        "जय द्विज-पत्नी जय नाग-कन्या-गण।\nभक्तिते याँहारा पाइल गोविन्द-चरण॥ (८)",
        "श्री-रास-मण्डल जय जय राधा-श्याम।\nजय जय रास-लीला सर्व-मनोरम॥ (९)",
        "जय जयोज्ज्वल-रस सर्व-रस-सार।\nपरकीय-भावे याहा व्रजेते प्रचार॥ (१०)",
        "श्री-जाह्नवा-पाद-पद्म करिया स्मरण।\nदीन कृष्ण-दास कहे नाम-सङ्कीर्तन॥ (११)"
      ],
      translations: [
        "श्रीमती राधारानी, भगवान् श्रीकृष्ण और दिव्य वृन्दावन धाम की जय हो! वृन्दावन के तीनों प्रमुख अधिष्ठातृ देव श्री गोविन्द, गोपीनाथ और मदनमोहन की जय हो!",
        "श्यामकुण्ड, राधाकुण्ड और श्री गिरिराज गोवर्धन की जय हो! कलिन्दनन्दिनी यमुना नदी और महावन की जय हो!",
        "केशीघाट, वंशीवट और ब्रज के समस्त बारह वनों की जय हो—जहाँ नन्दनन्दन श्रीकृष्ण ने अपनी दिव्य लीलाएँ कीं।",
        "नन्द महाराज, माता यशोदा और सभी गोपगणों की जय हो! श्रीदामा आदि सखाओं और ब्रज की सभी गौओं व बछड़ों की जय हो!",
        "महाराज वृषभानु और सुन्दरी माता कीर्तिदा की जय हो! भगवती पौर्णमासी और ब्रज की समस्त गोपियों की जय हो!",
        "वृन्दावन के रक्षक श्री गोपेश्वर महादेव की जय हो! श्रीकृष्ण के परम सखा ब्राह्मण बटु (मधुमंगल) की जय हो!",
        "रामघाट और रोहिणीनन्दन श्री बलराम जी की जय हो! वृन्दावन के समस्त वासियों की जय हो!",
        "यज्ञ-पत्नियों (ब्राह्मण-पत्नियों) और नाग-पत्नियों की जय हो—जिन्होंने अपनी अनन्य भक्ति से भगवान् गोविन्द के चरणकमल प्राप्त किए।",
        "श्री रासमण्डल और श्री राधा-श्याम की जय हो! समस्त लीलाओं में शिरोमणि और सबके मन को हरने वाली रासलीला की जय हो!",
        "समस्त रसों के सारभूत उज्ज्वल रस (मधुर रस) की जय हो, जिसका प्रचार भगवान् श्रीकृष्ण ने ब्रज में परकीय भाव के रूप में किया।",
        "श्री नित्यानन्द प्रभु की शक्ति श्री जाह्नवा माता के चरणकमलों का स्मरण करते हुए, यह दीन कृष्णदास इस नाम-संकीर्तन का गान करता है।"
      ]
    },
    "105": {
      title: "जय राधे जय राधे राधे (श्री राधा-कृष्ण युगल स्तुति)",
      transliterations: [
        "नव-नव रङ्गी त्रि-भङ्गी जय, श्याम सु-अङ्गी श्याम।\nजय राधे जय हरि-प्रिये, श्री-राधे सुख धाम॥ (ध्रुवपद)",
        "जय राधे जय राधे राधे, जय राधे जय श्री-राधे।\nजय कृष्ण जय कृष्ण कृष्ण, जय कृष्ण जय श्री-कृष्ण॥ (१)",
        "श्यामा गोरी नित्य-किशोरी प्रीतम-जोड़ी श्री-राधे।\nरसिक रसीलो छैल-छबीलो गुण-गरबीलो श्री-कृष्ण॥ (२)",
        "रास-विहारिणी रस-विस्तारिणी पिय-उर-धारिणी श्री-राधे।\nनव-नव-रङ्गी नवल-त्रिभङ्गी श्याम-सु-अङ्गी श्री-कृष्ण॥ (३)",
        "प्राण-पियारी रूप-उजियारी अति-सुकुँवारी श्री-राधे।\nमैन-मनोहर महा-मोद-कर सुन्दर-बर-तर श्री-कृष्ण॥ (४)",
        "शोभा-सैनी मोभ-मैनी कोकिल-बैनी श्री-राधे।\nकीरति-वन्त कामिनी-कान्त श्री-भगवन्त श्री-कृष्ण॥ (५)",
        "चाँद-बदनी कुन्द-रदनी शोभा-सदनी श्री-राधे।\nपरम-उदार प्रभा-अपार अति-सुकुँवर श्री-कृष्ण॥ (६)",
        "हंस-गवनी राजति-रवनी क्रीड़ा-कवनी श्री-राधे।\nरूप-रसाल नैन-विशाल परम-कृपाल श्री-कृष्ण॥ (७)",
        "काञ्चन-बेली रति-रस-रेली अति-अलबेली श्री-राधे।\nसब-सुख-सागर सब-गुण-आगर रूप-उजागर श्री-कृष्ण॥ (८)",
        "रवनी-रम्य तार-तार-तम्य गुण-अगम्य श्री-राधे।\nधाम-निवासी प्रभा-प्रकाशी सहज-सुहासी श्री-कृष्ण॥ (९)",
        "शक्त्याह्लादिनी अति-प्रिय-वादिनी उर-उन्मादिनी श्री-राधे।\nअङ्ग-अङ्ग-तौन सरस-सलौन सुभग-सुथौन श्री-कृष्ण॥ (१०)",
        "राधा-नामिनी गुण-अभिरामनी हरि-प्रिय-स्वामिनी श्री-राधे।\nहरे-हरे-हरि हरे-हरे-हरि हरे-हरे-हरि श्री-कृष्ण॥ (११)"
      ],
      translations: [
        "नित्य नवीन क्रीड़ाओं के रसिक, त्रिभंग-ललित रूप, परम मनोहर श्याम-अंग वाले श्रीकृष्ण की जय हो! हे श्रीराधे! हे हरिप्रिये! हे समस्त सुखों की धाम श्रीराधारानी! आपकी जय हो!",
        "जय राधे! जय राधे राधे! जय राधे जय श्रीराधे! जय कृष्ण! जय कृष्ण कृष्ण! जय कृष्ण जय श्रीकृष्ण!",
        "श्रीराधा तप्त-स्वर्ण जैसी गौरवर्णा, नित्य किशोरी और अपने प्राणप्रियतम की अनुपम संगिनी हैं; और श्रीकृष्ण परम रसिक, अमृतमयी छवि वाले और दिव्य गुणों से सुशोभित हैं।",
        "श्रीराधा रास-विलास करने वाली, दिव्य रस का विस्तार करने वाली और प्रियतम को हृदय से लगाने वाली हैं; और श्रीकृष्ण नित्य नवरंगी, नवीन त्रिभंग और श्याम-सुन्दर विग्रह हैं।",
        "श्रीराधा श्रीकृष्ण की प्राणप्यारी, दिव्य रूप से प्रकाशमान और परम सुकुमारी हैं; और श्रीकृष्ण कामदेव को भी मुग्ध करने वाले, परमानन्द प्रदान करने वाले और परम सुन्दर हैं।",
        "श्रीराधा अनुपम सौन्दर्य की शय्या, प्रेममयी और कोकिला के समान मधुर वाणी बोलने वाली हैं; और श्रीकृष्ण परम यशस्वी, समस्त गोपियों के कान्त और साक्षात् भगवान् हैं।",
        "श्रीराधा चन्द्रमुखी, कुन्द-पुष्प जैसे दाँतों वाली और समस्त शोभा की धाम हैं; और श्रीकृष्ण परम उदार, असीम कान्ति वाले और परम सुकुमार हैं।",
        "श्रीराधा राजहंस की गति से चलने वाली और विविध दिव्य क्रीड़ाओं की अधिष्ठात्री हैं; और श्रीकृष्ण रसमयी रूप वाले, विशाल नेत्रों वाले और परम कृपालु हैं।",
        "श्रीराधा स्वर्ण-लता के समान, प्रेमरस से परिपूर्ण और परम अलबेली हैं; और श्रीकृष्ण समस्त सुखों के सागर, समस्त गुणों की खान और दिव्य रूप से प्रकाशित हैं।",
        "श्रीराधा रमणी-शिरोमणि और अगाध गुणों की स्वामिनी हैं; और श्रीकृष्ण वृन्दावन धाम के नित्य निवासी, दिव्य प्रभा से युक्त और मन्द मुस्कान वाले हैं।",
        "श्रीराधा भगवान् की आह्लादिनी शक्ति, मधुरभाषिणी और हृदय को आनन्दित करने वाली हैं; और श्रीकृष्ण के प्रत्येक अंग परम लावण्यमयी, सलोने और दिव्य हैं।",
        "श्रीराधा परम पावन राधा नाम से प्रसिद्ध, गुणों से सबको आनन्दित करने वाली और हरिप्रिया की एकमात्र स्वामिनी हैं; और श्रीकृष्ण 'हरे हरि' नाम से नित्य वन्दनीय हैं।"
      ]
    },
    "106": {
      title: "जय शचीनन्दन सुर-मुनि-वन्दन",
      transliterations: [
        "जय शचीनन्दन सुर-मुनि-वन्दन, भव-भय-खण्डन जयो हे।\nजय हरि-कीर्तन नर्तन वर्तन, कलिमल-कर्तन जयो हे॥ (१)",
        "नयन-पुरन्दर विश्वरूप स्नेहाधार, विश्वम्भर विश्वेर कल्याण।\nजय लक्ष्मी-विष्णुप्रिया विश्वम्भर प्रियहिया, जय प्रिय किङ्कर ईशान॥ (२)",
        "श्री सीता-अद्वैत-राय मालिनी-श्रीवास जय, जय चन्द्रशेखर आचार्य।\nजय नित्यानन्द राय गदाधर जय जय, जय हरिदास नामाचार्य॥ (३)",
        "मुरारी मुकुन्द जय प्रेमानिधि महाशय, जय यत प्रभु पार्षद।\nवन्दि सबाकार पाय अधमेरे कृपा हय, भक्ति सपार्षद-प्रभुपाद॥ (४)"
      ],
      translations: [
        "माता शची के नन्दन श्री चैतन्य महाप्रभु की जय हो, जिनकी देवता और मुनिगण वन्दना करते हैं और जो संसार के जन्म-मृत्यु के भय का नाश करते हैं। श्रीहरि-संकीर्तन और दिव्य नृत्य की जय हो, जो कलियुग के समस्त पापों और मलों को काट देता है!",
        "जो नयनों को आनन्द देने वाले, विश्वरूप के स्नेहपात्र, समस्त विश्व का पोषण करने वाले (विश्वम्भर) और सबका कल्याण करने वाले हैं। विश्वम्भर की प्राणप्रिया श्री लक्ष्मीप्रिया और श्री विष्णुप्रिया देवी की जय हो, और उनके प्रिय सेवक ईशान की जय हो!",
        "माता सीता और श्री अद्वैताचार्य की जय हो! मालिनी देवी और श्रीवास ठाकुर की जय हो! चन्द्रशेखर आचार्य, नित्यानन्द प्रभु, गदाधर पण्डित और नामाचार्य श्रील हरिदास ठाकुर की जय हो!",
        "मुरारी गुप्त, मुकुन्द दत्त, शिवानन्द सेन आदि प्रभु के समस्त नित्य पार्षदों की जय हो! मैं इन सभी के चरणकमलों की वन्दना करता हूँ जिससे मुझ अधम पर कृपा हो सके।"
      ]
    },
    "107": {
      title: "गोपी-गीतम् (श्रीमद्भागवतम् १०.३१ — १९ श्लोक)",
      transliterations: [
        "जयति ते ऽधिकं जन्मना व्रजः श्रयत इन्दिरा शश्वद् अत्र हि।\nदयित दृश्यतां दिक्षु तावकास् त्वयि धृतासवस् त्वां विचिन्वते॥ (१)",
        "शरद्-उदाशये साधु-जात-सत्-सरसिजोदर-श्री-मुषा दृशा।\nसुरत-नाथ ते ऽशुल्क-दासिका वर-द निघ्नतो नेह किं वधः॥ (२)",
        "विष-जलाप्ययाद् व्याल-राक्षसाद् वर्ष-मारुताद् वैद्युतानलात्।\nवृष-मयात्मजाद् विश्वतो भयाद् ऋषभ ते वयं रक्षिता मुहुः॥ (३)",
        "न खलु गोपिका-नन्दनो भवान् अखिला-देहिनाम् अन्तरात्म-दृक्।\nविखनसार्थितो विश्व-गुप्तये सख उदेयिवान् सात्वतां कुले॥ (४)",
        "विरचिताभयं वृष्णि-धुर्य ते चरणम् ईयुषां संसृतेर् भयात्।\nकर-सरोरुहं कान्त काम-दं शिरसि धेहि नः श्री-कर-ग्रहम्॥ (५)",
        "व्रज-जनार्ति-हन् वीर योषितां निज-जन-स्मय-ध्वंसन-स्मित।\nभज सखे भवत्-किङ्करीः स्म नो जलरुहाननं चारु दर्शय॥ (६)",
        "प्रणत-देहिनां पाप-कर्षणं तृण-चरानुगं श्री-निकेतनम्।\nफणि-फणार्पितं ते पदाम्बुजं कृणु कुचेषु नः कृन्धि हृच्-छयम्॥ (७)",
        "मधुरया गिरा वल्गु-वाक्यया बुध-मनोज्ञया पुष्करेक्षण।\nविधि-करीर् इमा वीर मुह्यतीर् अधर-सीधुन्याययस्व नः॥ (८)",
        "तव कथामृतं तप्त-जीवनं कविभिर् ईडितं कल्मषापहम्।\nश्रवण-मङ्गलं श्रीमद् आततं भुवि गृणन्ति ये भूरि-दा जनाः॥ (९)",
        "प्रहसितं प्रिय-प्रेम-वीक्षणं विहरणं च ते ध्यान-मङ्गलम्।\nरहसि संविदो या हृदि स्पृशः कुहक नो मनः क्षोभयन्ति हि॥ (१०)",
        "चलसि यद् व्रजाच् चारयन् पशून् नलिन-सुन्दरं नाथ ते पदम्।\nशिल-तृणाङ्कुरैः सीदतीति नः कलिलतां मनः कान्त गच्छति॥ (११)",
        "दिन-परिक्षये नील-कुन्तलैर् वनरुहाननं बिभ्रद् आवृतम्।\nघन-रजस्वलं दर्शयन् मुहुर् मनसि नः स्मरं वीर यच्छसि॥ (१२)",
        "प्रणत-काम-दं पद्मजार्चितं धरणि-मण्डनं ध्येयम् आपदि।\nचरण-पङ्कजं शन्-तमं च ते रमण नः स्तनेष्व् अर्पयाधि-हन्॥ (१३)",
        "सुरत-वर्धनं शोक-नाशनं स्वरित-वेणुना सुष्ठु चुम्बितम्।\nइतर-राग-विस्मारणं नृणां वितर वीर नस् ते ऽधरामृतम्॥ (१४)",
        "अटति यद् भवान् अह्नि काननं त्रुटिर् युगायते त्वाम् अपश्यताम्।\nकुटिल-कुन्तलं श्री-मुखं च ते जड उदीक्षतां पक्ष्म-कृद् दृशाम्॥ (१५)",
        "पति-सुतान्वय-भ्रातृ-बान्धवान् अतिविलङ्घ्य ते ऽन्त्य् अच्युतागताः।\nगति-विदस् तवोद्गीत-मोहिताः कितव योषितः कस् त्यजेन् निशि॥ (१६)",
        "रहसि संविदं हृच्-छयोदयं प्रहसिताननं प्रेम-वीक्षणम्।\nबृहद्-उरः श्रियो वीक्ष्य धाम ते मुहुर् अति-स्पृहा मुह्यते मनः॥ (१७)",
        "व्रज-वनौकसां व्यक्तिर् अङ्ग ते वृजिन-हन्त्र्य् अलं विश्व-मङ्गलम्।\nत्यज मनाक् च नस् त्वत्-स्पृहात्मनां स्व-जन-हृद्-रुजां यन् निषूदनम्॥ (१८)",
        "यत् ते सुजात-चरणांबुरुहं स्तनेषु भीताः शनैः प्रिय दधीमहि कर्कशेषु।\nतेनाटवीम् अटसि तद् व्यथते न किं स्वित् कूर्पादिभिर् भ्रमति धीर् भवद्-आयुषां नः॥ (१९)"
      ],
      translations: [
        "गोपियों ने कहा: हे प्रियतम! आपके जन्म ग्रहण करने से यह व्रजभूमि परम धन्य और महिमान्वित हो गई है, और साक्षात् लक्ष्मी जी यहाँ नित्य वास करने लगी हैं। हे प्राणनाथ! हम गोपियाँ केवल आपके लिए ही अपने प्राण धारण किए हुए हैं, हम सब दिशाओं में आपको ढूंढ रही हैं, कृपा करके हमें दर्शन दीजिए!",
        "हे प्रेमाधिपति! हे वरदायक! शरद् ऋतु के निर्मल जलाशय में खिले हुए श्रेष्ठ कमल के भीतरी सौन्दर्य को चुराने वाले आपके इन नयनों के कटाक्ष से आप अपनी इन निष्काम दासियों का वध कर रहे हैं; क्या यह हत्या नहीं है?",
        "हे पुरुषश्रेष्ठ! आपने विषैले कालियादह के जल से, अघासुर-बकासुर आदि राक्षसों से, इन्द्र के मूसलाधार जल-वृष्टि और वज्रपात से, तृणावर्त से, अरिष्टासुर और व्योमासुर से तथा अन्य सभी प्रकार के भयों से हमारी बारम्बार रक्षा की है।",
        "हे सखा! आप केवल यशोदा मैया के ही पुत्र नहीं हैं, अपितु समस्त देहधारियों के अन्तःकरण के साक्षी और अन्तरात्मा हैं। ब्रह्मा जी की प्रार्थना पर सम्पूर्ण विश्व की रक्षा करने हेतु आप सात्वत (यदु) कुल में प्रकट हुए हैं।",
        "हे वृष्णिश्रेष्ठ! संसार के भय से आपके चरणों की शरण लेने वालों को जो हाथ अभयदान देता है और जो लक्ष्मी जी का पाणिग्रहण करने वाला तथा समस्त कामनाओं को पूर्ण करने वाला है; हे कान्त! अपना वही वरद कमल-हस्त हमारे मस्तक पर रख दीजिए।",
        "हे ब्रजवासियों के कष्टों को हरने वाले! हे वीरशिरोमणि! अपनी मन्द-मुस्कान से भक्तों के गर्व का नाश करने वाले हे सखा! हम आपकी अकिंचन दासियों को स्वीकार कीजिए और अपना परम सुन्दर मुखकमल हमें दिखाइए।",
        "शरणागत जीवों के समस्त पापों को हरने वाले, गौओं के पीछे-पीछे चलने वाले, लक्ष्मी जी के नित्य निवास-स्थल और कालिया नाग के फनों पर नृत्य करने वाले आपके वे कोमल चरणकमल हमारे वक्षःस्थल पर स्थापित कीजिए और हमारे हृदय के विरह-संताप को शान्त कीजिए।",
        "हे कमलनयन! अपनी मधुर, सुकोमल और ज्ञानियों के मन को मोहने वाली अमृतमयी वाणी से सम्मोहित हम अपनी आज्ञाकारिणी दासियों को अपने अधरामृत का रसपान कराकर नवजीवन प्रदान कीजिए।",
        "आपकी अमृतमयी लीला-कथाएं संसार-ताप से तप्त जीवों को जीवन देने वाली हैं; परम ज्ञानी ऋषियों द्वारा प्रशंसित हैं और समस्त पापों का नाश करने वाली हैं। वे सुनने मात्र से परम मंगल करने वाली और परम ऐश्वर्यमयी हैं; इस धरातल पर जो लोग आपकी इन कथाओं का विस्तार व प्रचार करते हैं, वे ही वास्तव में सबसे बड़े दानी हैं।",
        "हे प्रियतम! आपकी मधुर मुस्कान, प्रेमभरी चितवन, ध्यान करने योग्य परम मंगलमयी लीलाएं और एकान्त में की गई हृदयस्पर्शी बातें—हे छलिया! वे हमारे मन को अत्यधिक व्याकुल कर रही हैं।",
        "हे नाथ! जब आप गौओं को चराने वन में जाते हैं, तब आपके कमल के समान सुकोमल चरण कंकड़, पत्थर और नुकीले कुश-कांटों से घायल हो रहे होंगे—यह सोचकर ही हमारा मन अत्यधिक व्यथित हो जाता है।",
        "हे वीर! दिन के अंत (संध्या समय) में जब आप वन से लौटते हैं, तब गौओं के खुरों से उड़ती धूलि से सने हुए और घुंघराली नीली अलकों से घिरे हुए अपने मुखकमल का बारम्बार दर्शन कराकर आप हमारे मन में दिव्य प्रेमासक्ति जगा देते हैं।",
        "शरणागतों की समस्त कामनाएं पूर्ण करने वाले, ब्रह्मा जी द्वारा पूजित, पृथ्वी के परम आभूषण और विपत्ति के समय ध्यान करने योग्य परम कल्याणकारी अपने चरणकमल, हे रमण! हे मानसिक संतापों को हरने वाले! हमारे वक्षःस्थल पर रख दीजिए।",
        "दिव्य प्रेम को बढ़ाने वाला, समस्त शोकों का नाश करने वाला, गूँजती हुई मुरली द्वारा भली-भाँति चूमा गया और अन्य समस्त सांसारिक आसक्तियों को भुला देने वाला—हे वीर! अपना वही अधरामृत हमें प्रदान कीजिए।",
        "दिन में जब आप वन में चले जाते हैं, तब आपके दर्शन बिना हमारे लिए एक क्षण भी युग के समान बीतता है; और जब संध्या को लौटकर आप आते हैं, तो आपके घुंघराले केशों से युक्त मुखकमल को देखते समय हमारे नेत्रों पर पलकें बनाकर उस जड़ (मूर्ख) ब्रह्मा ने हमारे दर्शन में बाधा उत्पन्न कर दी है!",
        "हे अच्युत! हम अपने पति, पुत्र, कुल, भाई और बन्धु-बान्धवों को छोड़कर केवल आपकी वंशी की मधुर तान से मोहित होकर आपके पास आई हैं। हे छलिया! रात्रि के समय इस घने वन में आई हुई युवतियों को आपके सिवा भला कौन छोड़ सकता है?",
        "एकान्त में हुई वे गोपनीय बातें, प्रेम उत्पन्न करने वाली आपकी मन्द मुस्कान, प्रेमभरी दृष्टि और लक्ष्मी जी के निवास-स्थल आपके विशाल वक्षःस्थल को देखकर हमारे मन में आपके प्रति तीव्र उत्कंठा जाग उठती है और हमारा मन मुग्ध हो जाता है।",
        "हे प्यारे! ब्रजवासियों और समस्त विश्व के पापों और कष्टों को हरने के लिए ही आपका यह परम मंगलमय प्राकट्य हुआ है। अतः अपने भक्तों के हृदय-रोग की परम औषधि रूपी अपनी कृपा का कुछ अंश हमें भी प्रदान कीजिए।",
        "हे प्राणप्रियतम! आपके जिन सुकोमल चरणकमलों को हम अपने कठोर वक्षःस्थल पर भी इस डर से धीरे से रखती हैं कि कहीं उन्हें चोट न लग जाए; उन्हीं चरणों से आप दिनभर कंकड़, पत्थरों और कंटीले वनों में भटकते हैं, तो क्या उन्हें कष्ट नहीं होता होगा? आपके जीवन पर ही निर्भर रहने वाली हमारी बुद्धि यह सोचकर चकरा रही है!"
      ]
    },
    "108": {
      title: "जे आनिलो प्रेम-धन",
      transliterations: [
        "जे आनिलो प्रेम-धन करुणा प्रचुर।\nहेन प्रभु कोथा गेला आचार्य-ठाकुर॥",
        "कहाँ मोर स्वरूप रूप कहाँ सनातन।\nकहाँ दास रघुनाथ पतित-पावन॥",
        "पाषाणे कुटिव माथा अनले पशिव।\nगौर-प्रेम-विरहेते नरोत्तम काँदिब॥"
      ],
      translations: [
        "जो असीम करुणा करके गोलोक का अमूल्य प्रेम-धन इस धरातल पर लाए—वे श्रीनिवास आचार्य प्रभु अब कहाँ चले गए?",
        "मेरे स्वरूप दामोदर कहाँ हैं? श्री रूप गोस्वामी कहाँ हैं? श्री सनातन गोस्वामी कहाँ हैं? और पतितपावन श्री रघुनाथ दास गोस्वामी कहाँ हैं?",
        "अपने इन प्राणप्रिय वैष्णवों के विरह में मैं पत्थर पर अपना मस्तक फोड़ लूँगा अथवा अग्नि में प्रवेश कर जाऊँगा। श्री गौर-विरह में नरोत्तम दास रो रहे हैं।"
      ]
    },
    "113": {
      title: "à¤•à¤¬à¥‡ à¤•à¥ƒà¤·à¥à¤£-à¤§à¤¨ à¤ªà¤¾à¤¬ à¤¹à¤¿à¤¯à¤¾à¤°à¤¾ à¤®à¤¾à¤à¤¾à¤°à¥‡ à¤¥à¥‹à¤¬",
      transliterations: [
        "à¤•à¤¬à¥‡ à¤•à¥ƒà¤·à¥à¤£-à¤§à¤¨ à¤ªà¤¾à¤¬, à¤¹à¤¿à¤¯à¤¾à¤°à¤¾ à¤®à¤¾à¤à¤¾à¤°à¥‡ à¤¥à¥‹à¤¬,\nà¤œà¥à¤¡à¤¼à¤¾à¤‡à¤¬ à¤¤à¤ªà¤¿à¤¤ à¤ªà¤°à¤¾à¤£à¥¤\nà¤¸à¤¾à¤œà¤¾à¤‡à¤¯à¤¾ à¤¦à¤¿à¤¬ à¤¹à¤¿à¤¯à¤¾, à¤¬à¤¸à¤¾à¤‡à¤¬ à¤ªà¥à¤°à¤¾à¤£-à¤ªà¥à¤°à¤¿à¤¯à¤¾,\nà¤¨à¤¿à¤°à¤–à¤¿à¤¬ à¤¸à¥‡ à¤šà¤¨à¥à¤¦à¥à¤°-à¤¬à¤¯à¤¾à¤¨à¥¥ (à¥§)",
        "à¤¹à¥‡ à¤¸à¤œà¤¨à¤¿! à¤•à¤¬à¥‡ à¤®à¥‹à¤° à¤¹à¤‡à¤¬à¥‡ à¤¸à¥-à¤¦à¤¿à¤¨?\nà¤¸à¥‡ à¤ªà¥à¤°à¤¾à¤£-à¤¨à¤¾à¤¥à¥‡à¤° à¤¸à¤™à¥à¤—à¥‡, à¤•à¤¬à¥‡ à¤µà¤¾ à¤«à¤¿à¤°à¤¿à¤¬ à¤°à¤™à¥à¤—à¥‡,\nà¤¸à¥à¤–à¤®à¤¯à¤‚ à¤¯à¤®à¥à¤¨à¤¾-à¤ªà¥à¤²à¤¿à¤¨à¥¥ (à¥¨)",
        "à¤²à¤²à¤¿à¤¤à¤¾ à¤µà¤¿à¤¶à¤¾à¤–à¤¾ à¤²à¤žà¤¾, à¤¤à¤¾à¤à¤¹à¤¾à¤°à¥‡ à¤­à¥‡à¤Ÿà¤¿à¤¬ à¤—à¤¿à¤¯à¤¾,\nà¤¸à¤¾à¤œà¤¾à¤‡à¤¯à¤¾ à¤¨à¤¾à¤¨à¤¾ à¤‰à¤ªà¤¹à¤¾à¤°à¥¤\nà¤¸à¤¦à¤¯ à¤¹à¤‡à¤¯à¤¾ à¤µà¤¿à¤§à¤¿, à¤®à¤¿à¤²à¤¾à¤‡à¤¬à¥‡ à¤—à¥à¤£-à¤¨à¤¿à¤§à¤¿,\nà¤¹à¥‡à¤¨ à¤­à¤¾à¤—à¥à¤¯ à¤¹à¤‡à¤¬à¥‡ à¤†à¤®à¤¾à¤°?à¥¥ (à¥©)",
        "à¤¦à¤¾à¤°à¥à¤£ à¤µà¤¿à¤§à¤¿à¤° à¤¨à¤¾à¤Ÿ, à¤­à¤¾à¤™à¥à¤—à¤¿à¤²à¤¾ à¤ªà¥à¤°à¥‡à¤®à¥‡à¤° à¤¹à¤¾à¤Ÿ,\nà¤¤à¤¿à¤²-à¤®à¤¾à¤¤à¥à¤° à¤¨à¤¾ à¤°à¤¾à¤–à¤¿à¤²à¤¾ à¤¤à¤¾à¤°à¥¤\nà¤•à¤¹à¥‡ à¤¨à¤°à¥‹à¤¤à¥à¤¤à¤®-à¤¦à¤¾à¤¸, à¤•à¤¿ à¤®à¥‹à¤° à¤œà¥€à¤µà¤¨à¥‡ à¤†à¤¶,\nà¤›à¤¾à¤¡à¤¼à¤¿' à¤—à¥‡à¤² à¤µà¥à¤°à¤œà¥‡à¤¨à¥à¤¦à¥à¤°-à¤•à¥à¤®à¤¾à¤°à¥¥ (à¥ª)"
      ],
      translations: [
        "à¤•à¤¬ à¤®à¥à¤à¥‡ à¤¶à¥à¤°à¥€à¤•à¥ƒà¤·à¥à¤£-à¤§à¤¨ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¹à¥‹à¤—à¤¾ à¤”à¤° à¤•à¤¬ à¤®à¥ˆà¤‚ à¤‰à¤¨à¥à¤¹à¥‡à¤‚ à¤…à¤ªà¤¨à¥‡ à¤¹à¥ƒà¤¦à¤¯ à¤•à¥‡ à¤­à¥€à¤¤à¤° à¤°à¤–à¥‚à¤à¤—à¤¾, à¤œà¤¿à¤¸à¤¸à¥‡ à¤®à¥‡à¤°à¥‡ à¤¤à¤ªà¥à¤¤ à¤ªà¥à¤°à¤¾à¤£à¥‹à¤‚ à¤•à¥‹ à¤¶à¥€à¤¤à¤²à¤¤à¤¾ à¤®à¤¿à¤²à¥‡à¤—à¥€? à¤…à¤ªà¤¨à¥‡ à¤¹à¥ƒà¤¦à¤¯ à¤•à¥‹ à¤¸à¤œà¤¾à¤•à¤°, à¤•à¤¬ à¤®à¥ˆà¤‚ à¤…à¤ªà¤¨à¥‡ à¤ªà¥à¤°à¤¾à¤£-à¤ªà¥à¤°à¤¿à¤¯à¤¤à¤® à¤•à¥‹ à¤µà¤¹à¤¾à¤ à¤¬à¤¿à¤ à¤¾à¤Šà¤à¤—à¤¾ à¤”à¤° à¤‰à¤¨à¤•à¥‡ à¤‰à¤¸ à¤šà¤¨à¥à¤¦à¥à¤°à¤®à¤¾-à¤¸à¤®à¤¾à¤¨ à¤®à¥à¤–à¤•à¤®à¤² à¤•à¥‡ à¤¦à¤°à¥à¤¶à¤¨ à¤•à¤°à¥‚à¤à¤—à¤¾?",
        "à¤¹à¥‡ à¤¸à¤–à¥€! à¤•à¤¬ à¤®à¥‡à¤°à¤¾ à¤µà¤¹ à¤¶à¥à¤­ à¤¦à¤¿à¤¨ à¤†à¤à¤—à¤¾, à¤œà¤¬ à¤®à¥ˆà¤‚ à¤…à¤ªà¤¨à¥‡ à¤ªà¥à¤°à¤¾à¤£à¤¨à¤¾à¤¥ à¤•à¥‡ à¤¸à¤‚à¤— à¤®à¥‡à¤‚ à¤¯à¤®à¥à¤¨à¤¾ à¤•à¥‡ à¤¸à¥à¤–à¤®à¤¯ à¤ªà¥à¤²à¤¿à¤¨ (à¤¤à¤Ÿ) à¤ªà¤° à¤†à¤¨à¤¨à¥à¤¦à¤ªà¥‚à¤°à¥à¤µà¤• à¤µà¤¿à¤šà¤°à¤£ à¤•à¤°à¥‚à¤à¤—à¤¾?",
        "à¤²à¤²à¤¿à¤¤à¤¾ à¤”à¤° à¤µà¤¿à¤¶à¤¾à¤–à¤¾ à¤•à¥‡ à¤¸à¤‚à¤— à¤œà¤¾à¤•à¤°, à¤•à¤¬ à¤®à¥ˆà¤‚ à¤µà¤¿à¤µà¤¿à¤§ à¤‰à¤ªà¤¹à¤¾à¤°à¥‹à¤‚ à¤¸à¥‡ à¤¸à¤œà¤¾à¤•à¤° à¤…à¤ªà¤¨à¥‡ à¤ªà¥à¤°à¤­à¥ à¤¸à¥‡ à¤­à¥‡à¤‚à¤Ÿ à¤•à¤°à¥‚à¤à¤—à¤¾? à¤•à¤¬ à¤µà¤¿à¤§à¤¾à¤¤à¤¾ à¤®à¥à¤ à¤ªà¤° à¤¦à¤¯à¤¾à¤²à¥ à¤¹à¥‹à¤•à¤° à¤®à¥à¤à¥‡ à¤‰à¤¨ à¤¸à¤®à¤¸à¥à¤¤ à¤¸à¤¦à¥à¤—à¥à¤£à¥‹à¤‚ à¤•à¥‡ à¤¸à¤¾à¤—à¤° (à¤¶à¥à¤°à¥€à¤•à¥ƒà¤·à¥à¤£) à¤¸à¥‡ à¤®à¤¿à¤²à¤¾à¤à¤à¤—à¥‡? à¤à¤¸à¤¾ à¤ªà¤°à¤® à¤¸à¥Œà¤­à¤¾à¤—à¥à¤¯ à¤®à¥‡à¤°à¤¾ à¤•à¤¬ à¤¹à¥‹à¤—à¤¾?",
        "à¤•à¥à¤°à¥‚à¤° à¤µà¤¿à¤§à¤¾à¤¤à¤¾ à¤•à¥‡ à¤–à¥‡à¤² à¤¨à¥‡ à¤‰à¤¸ à¤ªà¥à¤°à¥‡à¤® à¤•à¥‡ à¤¹à¤¾à¤Ÿ (à¤¬à¤¾à¤œà¤¼à¤¾à¤°) à¤•à¥‹ à¤¤à¥‹à¤¡à¤¼ à¤¦à¤¿à¤¯à¤¾, à¤‰à¤¸à¤•à¤¾ à¤¤à¤¿à¤¨à¤•à¤¾ à¤­à¤° à¤­à¥€ à¤¶à¥‡à¤· à¤¨à¤¹à¥€à¤‚ à¤°à¤–à¤¾à¥¤ à¤¨à¤°à¥‹à¤¤à¥à¤¤à¤® à¤¦à¤¾à¤¸ à¤•à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚â€”à¤…à¤¬ à¤®à¥‡à¤°à¥‡ à¤œà¥€à¤µà¤¨ à¤®à¥‡à¤‚ à¤œà¥€à¤¨à¥‡ à¤•à¥€ à¤•à¥à¤¯à¤¾ à¤†à¤¶à¤¾ à¤¶à¥‡à¤· à¤°à¤¹ à¤—à¤ˆ à¤¹à¥ˆ, à¤œà¤¬ à¤¬à¥à¤°à¤œà¥‡à¤¨à¥à¤¦à¥à¤°-à¤•à¥à¤®à¤¾à¤° à¤®à¥à¤à¥‡ à¤›à¥‹à¤¡à¤¼à¤•à¤° à¤šà¤²à¥‡ à¤—à¤ à¤¹à¥ˆà¤‚?"
      ]
    },
    "109": {
      title: "जीव जागो जीव जागो",
      transliterations: [
        "जीव जागो, जीव जागो, गौराङ्ग बोले।\nकत निद्रा जाओ माया-पिशाचीर कोले॥",
        "भजिबो बलिया ऐसे संसार-भितरे।\nभुलिया रहिले तुमि अविद्यार घोरे॥",
        "तोमारे लइते आमि हइनु अवतार।\nआमि विना बन्धु आर के आछे तोमार॥",
        "लहो लहो हरिनामरत्न एइ बेला।\nभकतिविनोद पडे प्रभु-पद-तला॥"
      ],
      translations: [
        "श्री गौरांग महाप्रभु पुकार रहे हैं: 'हे जीव, जागो! हे जीव, जागो! तुम माया रूपी पिशाचिनी की गोद में कब तक अज्ञान की नींद सोते रहोगे?'",
        "तुमने गर्भ में भगवान् का भजन करने का वचन दिया था, किन्तु संसार में आकर अविद्या के अन्धकार में सब कुछ भूल गए।",
        "तुम्हें उद्धार करने के लिए ही मैंने यह अवतार धारण किया है। मेरे अतिरिक्त तुम्हारा और कौन सच्चा बन्धु है?",
        "इस दुर्लभ मानव-जीवन में हरिनाम रूपी अमूल्य रत्न को ग्रहण करो! श्रील भक्तिविनोद ठाकुर महाप्रभु के श्रीचरणों में गिरकर प्रार्थना करते हैं।"
      ]
    },
    "146": {
      title: "मानस देह गेह जो किछु मोर",
      transliterations: [
        "मानस, देह, गेह, जो किछु मोर।\nअर्पिलुँ तुया पदे, नन्द-किशोर!॥",
        "सम्पदे विपदे, जीवने मरणे।\nदाय मम गेला, तुया ओ-पद वरणे॥",
        "मारबि राखबि-जो इच्छा तोहार।\nनित्य-दास प्रति तुया अधिकार॥",
        "जन्माओबि मोहे इच्छा यदि तोर।\nभक्त-गृहे जनि जन्म हउ मोर॥",
        "कीट-जन्म हउ यथा तुया दास।\nबहिर्मुख ब्रह्म-जन्मे नाहि आश॥",
        "भुक्ति-मुक्ति-स्पृहा-विहीन जे भक्त।\nलभइते ताँक सङ्ग अनुरक्त॥",
        "जनक, जननी, दयित, तनय।\nप्रभु, गुरु, पति-तुहुँ सर्व-मय॥",
        "भकतिविनोद कहे, सुन कान! ।\nराधा-नाथ! तुहुँ हमार पराण॥"
      ],
      translations: [
        "हे नन्दकिशोर! मेरा मन, मेरा शरीर, मेरा घर और जो कुछ भी मेरा है, वह सब मैंने आपके श्रीचरणों में समर्पित कर दिया है।",
        "सम्पत्ति में अथवा विपत्ति में, जीवन में अथवा मृत्यु में—मैंने आपके श्रीचरणों का वरण कर लिया है, अतः अब मेरी सारी चिन्ताएँ समाप्त हो गई हैं।",
        "अब आप मुझे मारें अथवा मेरी रक्षा करें, यह आपकी इच्छा पर निर्भर है। अपने इस नित्य दास पर आपका पूर्ण अधिकार है।",
        "यदि आपकी इच्छा मुझे पुनः जन्म देने की हो, तो मुझे केवल किसी शुद्ध भक्त के घर में ही जन्म दीजिएगा।",
        "मैं किसी भक्त के घर में एक कीट (कीड़ा) बनकर जन्म लेना स्वीकार करूँगा, किन्तु आपकी भक्ति से विमुख ब्रह्मा का जन्म भी मुझे कभी स्वीकार नहीं है।",
        "जो भक्त भोग और मोक्ष की समस्त कामनाओं से सर्वथा रहित हैं, मैं केवल उन्हीं का संग पाने के लिए लालायित हूँ।",
        "हे प्रभु! मेरे पिता, माता, प्रियजन, पुत्र, स्वामी, गुरु और पति—सब कुछ केवल आप ही हैं।",
        "भक्तिविनोद कहते हैं, हे कान्हा! हे राधानाथ! सुनिए, केवल आप ही मेरे प्राण हैं।"
      ]
    },
    "157": {
      title: "नाम-तत्त्व (Nāma-Tattva)",
      transliterations: [
        "(श्ब् 12.3.51)\nकलेर् दोष-निधे राजन्न्\nअस्ति ह्य् एको महान् गुणः\nकीर्तनाद् एव कृष्णस्य\nमुक्त-सङ्गः परं व्रजेत्",
        "(श्ब् 11.5.36)\nकलिं सभाजयन्त्य् आर्या\nगुण ज्ञाः सार-भागिनः\nयत्र सङ्कीर्तनेनैव\nसर्व-स्वार्थो \u0027भिलभ्यते",
        "(श्ब् 12.3.52)\nकृते यद् ध्यायतो विष्णुं\nत्रेतायां यजतो मखैः\nद्वापरे परिचर्यायां\nकलौ तद् धरि-कीर्तनात्",
        "(श्ब् 11.5.37)\nन ह्य् अतः परमो लाभो\nदेहिनां भ्राम्यताम् इह\nयतो विन्देत परमां\nशान्तिं नश्यति संसृतिः",
        "(श्ब् 2.1.11)\nएतन् निर्विद्यमानानाम्\nइच्छताम् अकुतो-भयम्\nयोगिनां नृप निर्णीतं\nहरेर् नामानुकीर्तनम्",
        "(श्ब् 3.33.7)\nअहो बत श्व-पचो ’तो गरीयान्\nयज्-जिह्वाग्रे वर्तते नाम तुभ्यम्\nतेपुस् तपस् ते जुहुवुः सस्नुर् आर्या\nब्रह्मानूचुर् नाम गृणन्ति ये ते",
        "(श्ब् 8.23.16)\nमन्त्रतस् तन्त्रतश् छिद्रं\nदेश-कालार्ह-वस्तुतः\nसर्वं करोति निश्छिद्रम्\nअनुसङ्कीर्तनं तव",
        "(श्ब् 6.2.14)\nसाङ्केत्यं पारिहास्यं वा\nस्तोभं हेलनम् एव वा\nवैकुण्ठ-नाम-ग्रहणम्\nअशेषाघ-हरं विदुः",
        "(श्ब् 1.1.14)\nआपन्नः संसृतिं घोरां\nयन्-नाम विवशो गृणन्\nततः सद्यो विमुच्येत\nयद् बिभेति स्वयं भयम्",
        "(श्ब् 6.2.18)\nअज्ञानाद् अथवा ज्ञानाद्\nउत्तमश्लोक-नाम यत्\nसङ्कीर्तितम् अघं पुंसो\nदहेद् एधो यथानलः",
        "(श्ब् 12.12.47)\nपतितः स्खलितश् चार्तः\nक्षुत्त्वा वा विवशो गृणन्\nहरये नम इत्य् उच्चैर्\nमुच्यते सर्व-पातकात्",
        "(श्ब् 12.3.44)\nयन्-नामधेयं म्रियमाण आतुरः\nपतन् स्खलन् वा विवशो गृणन् पुमान्\nविमुक्त-कर्मार्गल उत्तमां गतिं\nप्राप्नोति यक्ष्यन्ति न तं कलौ जनाः",
        "(श्ब् 2.3.24)\nतद् अश्म-सारं हृदयं बतेदं\nयद् गृह्यमाणैर् हरि-नाम-धेयैः\nन विक्रियेताथ यदा विकारो\nनेत्रे जलं गात्र-रुहेषु हर्षः",
        "(श्ब् 11.2.40)\nएवं-व्रतः स्व-प्रिय-नाम-कीर्त्या\nजातानुरागो द्रुत-चित्त उच्चैः\nहसत्य् अथो रोदिति रौति गायत्य्\nउन्माद-वन् नृत्यति लोक-बाह्यः",
        "(श्ब् 12.13.23)\nनाम-सङ्कीर्तनं यस्य\nसर्व-पाप प्रणाशनम्\nप्रणामो दुःख-शमनस्\nतं नमामि हरिं परम्"
      ],
      translations: [
        "हे राजन्, यद्यपि कलियुग दोषों का सागर है, तथापि इस युग में एक महान् गुण है, केवल कृष्ण के नाम के कीर्तन से मनुष्य भौतिक बंधन से मुक्त होकर परम दिव्य लोक को प्राप्त हो सकता है।",
        "जो उन्नत आत्माएँ ज्ञान में वास्तव में आगे बढ़ी हुई हैं, वे इस कलियुग का वास्तविक मूल्य समझकर उसकी प्रशंसा करती हैं, क्योंकि इस पतित युग में केवल संकीर्तन के द्वारा जीवन की समस्त सिद्धि सरलता से प्राप्त हो जाती है।",
        "सत्ययुग में विष्णु के ध्यान से, त्रेतायुग में यज्ञों के अनुष्ठान से और द्वापरयुग में भगवान् के चरणों की सेवा से जो फल प्राप्त होता था, वही फल कलियुग में केवल हरे कृष्ण महामंत्र के कीर्तन से प्राप्त हो जाता है।",
        "इस भौतिक जगत् में भटकते हुए देहधारी जीवों के लिये संकीर्तन से बढ़कर और कोई श्रेष्ठ प्राप्ति नहीं है, क्योंकि इससे मनुष्य परम शान्ति को प्राप्त करता है और उसका जन्म-मृत्यु का चक्र नष्ट हो जाता है।",
        "हे राजन्, महापुरुषों के मार्ग पर चलते हुए भगवान् के पवित्र नाम का निरन्तर कीर्तन करना ही सबके लिए सफलता का निश्चित और निर्भय मार्ग है। यह उनके लिए भी है जो सब भौतिक इच्छाओं से मुक्त हैं, उनके लिए भी जो सब प्रकार के भोग चाहते हैं, और उन योगियों के लिए भी जो दिव्य ज्ञान से आत्म-तृप्त हैं।",
        "आह, कैसी महिमा है उनकी, जिनकी जिह्वा पर आपका पवित्र नाम रहता है! ऐसा व्यक्ति चाण्डाल के घर में जन्मा हो तो भी वह पूजनीय है। हे प्रभु, जो आपका पवित्र नाम जपते हैं, उन्होंने अवश्य ही सब प्रकार की तपस्या की होगी, यज्ञ किये होंगे और आर्यों का सदाचार पा लिया होगा। उन्होंने तीर्थों में स्नान किया होगा, वेदों का अध्ययन किया होगा और सब कुछ पूरा कर लिया होगा।",
        "हे प्रभु, मंत्रों के उच्चारण में, विधि-नियमों के पालन में तथा देश, काल, पात्र और सामग्री के विषय में भले ही त्रुटियाँ रह जायँ, परन्तु जब आपके पवित्र नाम का निरन्तर कीर्तन होता है, तब वह इन सब त्रुटियों को दूर करके सब कुछ पूर्ण और त्रुटिरहित बना देता है।",
        "भगवान् का पवित्र नाम चाहे किसी और अर्थ में संकेत के रूप में लिया जाय, हास-परिहास में, गीत-वाद्य के मनोरंजन में अथवा उपेक्षा से भी उच्चारित हो, तो भी वह उच्चारण करनेवाले को उसके अनन्त पापों के फल से तुरन्त मुक्त कर देता है। शास्त्रों के सभी अनुभवी विद्वान् इसे स्वीकार करते हैं।",
        "जन्म-मृत्यु के अत्यन्त जटिल चक्र में फँसा हुआ जीव भी यदि अनजाने में ही कृष्ण के उस परम नाम का उच्चारण कर दे, जिससे साक्षात् भय भी डरता है, तो वह उसी क्षण उस चक्र से मुक्त हो जाता है।",
        "जिस प्रकार अग्नि सूखी घास को भस्म कर देती है, उसी प्रकार भगवान् का पवित्र नाम, चाहे वह जानते हुए उच्चारित हो या अनजाने में, मनुष्य के समस्त पापों के फल को निश्चय ही भस्म कर देता है।",
        "गिरते समय, फिसलते समय, पीड़ा में अथवा छींकते समय यदि कोई अनजाने में ही ऊँचे स्वर से \u0027हरि को प्रणाम\u0027 पुकार उठे, तो वह अपने समस्त पापों के फल से स्वतः मुक्त हो जाता है।",
        "पीड़ा से त्रस्त, मरणासन्न व्यक्ति यदि गिरते हुए, अस्पष्ट वाणी में और विवशता से भी भगवान् का पवित्र नाम उच्चारित कर दे, तो वह अपने कर्मों के बन्धन से मुक्त होकर परम श्रेष्ठ गति को प्राप्त कर लेता है। फिर भी कलियुग के लोग उस भगवान् की पूजा नहीं करते।",
        "जिस हृदय में मन को एकाग्र करके भगवान् के पवित्र नाम का बार-बार उच्चारण करने पर भी न नेत्रों में अश्रु आते हैं और न रोमकूपों में आनन्द का रोमांच होता है, वह हृदय निश्चय ही लौह के समान कठोर है।",
        "इस प्रकार व्रत लेकर मनुष्य जब भगवान् के अपने अत्यन्त प्रिय नाम का कीर्तन करता है, तब उसमें प्रेम उत्पन्न होने लगता है। हृदय पिघल जाने से वह भक्त कभी ऊँचे स्वर में हँसता है, कभी रोता है, कभी व्याकुल हो उठता है, कभी गाता है और लोक-लाज की चिन्ता किये बिना उन्मत्त की भाँति नाचने लगता है।",
        "जिनके पवित्र नाम का सामूहिक कीर्तन समस्त पापों का नाश करनेवाला है और जिनको किया गया प्रणाम समस्त दुःखों को शान्त कर देता है, उन परम भगवान् हरि को मैं प्रणाम करता हूँ।"
      ]
    },

    "158": {
      title: "श्री श्री दामोदराष्टकम्",
      transliterations: [
        "नमामीश्वरं सच्चिदानन्दरूपं\nलसत्कुण्डलं गोकुले भ्राजमानम्।\nयशोदाभियोलूखलाद्धावमानं\nपरामृष्टमत्यन्ततो द्रुत्य गोप्या॥",
        "रुदन्तं मुहुर्नेत्रयुग्मं मृजन्तं\nकराम्भोजयुग्मेन सातङ्कनेत्रम्।\nमुहुः श्वासकम्पत्रिरेखाङ्ककण्ठ-\nग्रहग्रैवं दामोदरं भक्तिबद्धम्॥",
        "इतीदृक् स्वलीलाभिरानन्दकुण्डे\nस्वघोषं निमज्जन्तमाख्यापयन्तम्।\nतदीयेशितज्ञेषु भक्तैर्जितत्वं\nपुनः प्रेमतस्तं शतावृत्ति वन्दे॥",
        "वरं देव मोक्षं न मोक्षावधिं वा\nन चान्यं वृणे ऽहं वरेशेदिहापि।\nइदं ते वपुर्नाथ गोपालबालं\nसदा मे मनस्याविरास्तां किमन्यैः॥",
        "इदं ते मुखाम्भोजमत्यन्तनीलैर्-\nवृतं कुन्तलैः स्निग्ध-रक्तैश्च गोप्य।\nमुहुश्चुम्बितं बिम्बरक्ताधरं मे\nमनस्याविरास्तामलं लक्षलाभैः॥",
        "नमो देव दामोदरानन्त विष्णो\nप्रसीद प्रभो दुःखजालाब्धिमग्नम्।\nकृपादृष्टिवृष्ट्यातिदीनं बतानु-\nगृहाणेश मामज्ञमेध्यक्षिदृश्यः॥",
        "कुबेरात्मजौ बद्धमूर्त्यैव यद्वत्\nत्वया मोचितौ भक्तिभाजौ कृतौ च।\nतथा प्रेमभक्तिं स्वकां मे प्रयच्छ\nन मोक्षे ग्रहो मे ऽस्ति दामोदरेह॥",
        "नमस्ते ऽस्तु दाम्ने स्फुरद्दीप्तिधाम्ने\nत्वदीयोदरायाथ विश्वस्य धाम्ने।\nनमो राधिकायै त्वदीयप्रियायै\nनमो ऽनन्तलीलाय देवाय तुभ्यम्॥"
      ],
      translations: [
        "सच्चिदानन्द स्वरूप, प्रकाशमान मकराकृत कुण्डल धारण करने वाले, गोकुल में नित्य देदीप्यमान, यशोदा माता के भय से ऊखल से कूदकर भागने वाले और माता द्वारा पीछे से दौड़कर पकड़े गए उन परमेश्वर को मैं नमस्कार करता हूँ।",
        "रोते हुए अपने दोनों कर-कमलों से नेत्रों को मलने वाले, भयभीत दृष्टि वाले, बारम्बार सिसकियों से कम्पित तीन रेखाओं वाले ग्रीवा (गले) में बँधी रस्सी वाले, केवल अनन्य भक्ति से ही बँधने वाले श्री दामोदर प्रभु का मैं भजन करता हूँ।",
        "इस प्रकार की अपनी बाल-लीलाओं द्वारा जो गोकुलवासियों को आनन्द-सागर में निमग्न करते हैं और अपने ऐश्वर्य-ज्ञानी भक्तों पर यह प्रकट करते हैं कि वे केवल प्रेम-भक्तों द्वारा ही जीते जा सकते हैं, उन दामोदर प्रभु की मैं शत-शत वन्दना करता हूँ।",
        "हे देव! आप समस्त वरदानों को देने में समर्थ हैं, फिर भी मैं आपसे न तो मोक्ष चाहता हूँ, न मोक्ष की पराकाष्ठा (वैकुण्ठ वास) और न ही कोई अन्य वर माँगता हूँ। हे नाथ! मेरी केवल यही प्रार्थना है कि आपका यह बालगोपाल रूप सदा मेरे मन में विराजमान रहे।",
        "हे प्रभु! काले-घुंघराले बालों से घिरा, माता यशोदा द्वारा बारम्बार चूमा जाने वाला, पके बिम्ब-फल के समान लाल अधरों वाला आपका यह मुखकमल सदा मेरे मन में प्रकाशित रहे। मुझे लाखों अन्य लाभों की कोई आवश्यकता नहीं है।",
        "हे देव! हे दामोदर! हे अनन्त! हे सर्वव्यापक विष्णो! मुझ पर प्रसन्न होइए। मैं दुःखों के अथाह सागर में डूबा हुआ अत्यन्त दीन-हीन हूँ। अपनी कृपा-दृष्टि की वर्षा से मुझ अज्ञानी का उद्धार कीजिए और मेरे नेत्रों के समक्ष प्रकट होइए।",
        "जिस प्रकार आपने ऊखल से बँधे रहकर भी नलकुबेर और मणिग्रीव को वृक्ष-योनि से मुक्त कर उन्हें अपनी अनन्य भक्ति प्रदान की, उसी प्रकार मुझे भी अपनी प्रेमाभक्ति प्रदान कीजिए। मुझे मोक्ष की कोई लालसा नहीं है।",
        "हे दामोदर! आपकी उदर पर बँधी उस दिव्य तेजमयी रस्सी को नमस्कार है, सम्पूर्ण ब्रह्माण्डों के आश्रय आपके उदर को नमस्कार है, आपकी परम प्रिया श्री राधिका जी को नमस्कार है और आपकी अनन्त लीलाओं को मेरा बारम्बार प्रणाम है।"
      ]
    },
    "159": {
      title: "श्री नृसिंह आरती",
      transliterations: [
        "नमस्ते नरसिंहाय प्रह्लादाह्लाद-दायिने।\nहिरण्यकशिपोर्वक्षः-शिला-टङ्क-नखालये॥",
        "इतो नृसिंहः परतो नृसिंहो\nयतो यतो यामि ततो नृसिंहः।\nबहिर्नृसिंहो हृदये नृसिंहो\nनृसिंहमादिं शरणं प्रपद्ये॥",
        "तव करकमलवरे नखम् अद्भुतशृङ्गं\nदलितहिरण्यकशिपुतनुभृङ्गम्।\nकेशव धृतनरहरिरूप जय जगदीश हरे॥"
      ],
      translations: [
        "भक्त प्रह्लाद को परम आनन्द प्रदान करने वाले और हिरण्यकशिपु की पाषाण-तुल्य छाती को अपने तीक्ष्ण नखों से विदीर्ण करने वाले भगवान् श्री नृसिंहदेव को मेरा सादर प्रणाम है।",
        "भगवान् नृसिंह यहाँ हैं, वे वहाँ भी हैं। मैं जहाँ-जहाँ जाता हूँ, वहाँ-वहाँ भगवान् नृसिंह उपस्थित हैं। वे बाहर भी हैं और हृदय के भीतर भी हैं। मैं समस्त कारणों के मूल कारण उन श्री नृसिंहदेव की शरण ग्रहण करता हूँ।",
        "हे केशव! हे नृसिंह रूपधारी भगवान् जगदीश! आपके कर-कमलों के अद्भुत एवं तीक्ष्ण नखों ने हिरण्यकशिपु रूपी भौंरे के शरीर को क्षणभर में विदीर्ण कर दिया। हे जगदीश हरे! आपकी जय हो!"
      ]
    },
    "160": {
      title: "श्री तुलसी आरती",
      transliterations: [
        "नमो नमः तुलसी कृष्ण-प्रेयसि नमो नमः।\nराधा-कृष्ण-सेवा पाबो एइ अभिलाषी॥",
        "जे तोमार शरण लय, तार वाञ्छा पूर्ण हय।\nकृपा करि’ कर तारे वृन्दावन-वासी॥",
        "मोर एइ अभिलाष, विलासकुञ्जे दिओ वास।\nनयने हेरिव सदा युगल-रूप-राशि॥",
        "एइ निवेदन धर, सखीर अनुगत कर।\nसेवा-अधिकार दिये कर निज दासी॥",
        "दीन कृष्ण-दासे कय, एइ जेन मोर हय।\nश्री-राधा-गोविन्द-प्रेमे सदा जेन भासि॥"
      ],
      translations: [
        "हे भगवान् श्रीकृष्ण की परम प्रिया श्री तुलसी देवी! आपको मेरा बारम्बार प्रणाम है। मेरी केवल यही अभिलाषा है कि मुझे श्री श्री राधा-कृष्ण की नित्य सेवा प्राप्त हो।",
        "जो भी आपकी शरण ग्रहण करता है, उसकी समस्त मनोकामनाएँ पूर्ण हो जाती हैं। कृपा करके उसे नित्य वृन्दावन का वासी बना दीजिए।",
        "मेरी यही अभिलाषा है कि मुझे वृन्दावन के निकुञ्जों में वास मिले, जहाँ मैं अपने नेत्रों से सदा श्री श्री राधा-कृष्ण के युगल रूप के दर्शन कर सकूँ।",
        "मेरी यह प्रार्थना स्वीकार कीजिए और मुझे सखियों की अनुगता बनाकर, दिव्य सेवा का अधिकार देकर अपनी नित्य दासी बना लीजिए।",
        "यह दीन कृष्णदास प्रार्थना करता है कि मैं सदा श्री श्री राधा-गोविन्द के प्रेमामृत में निमग्न रहूँ।"
      ]
    },
    "173": {
      title: "श्री नामाष्टकम् (Śrī Nāmāṣṭakam)",
      transliterations: [
        "निखिल-श्रुति-मौलि-रत्न-माला\nद्युति-नीराजित-पाद-पङ्कजान्त\nअयि मुक्त-कुलैर् उपास्यमानं\nपरितस् त्वां हरि-नाम संश्रयामि",
        "जय नामधेय मुनि-वृन्द-गेय हे\nजन-रञ्जनाय परम् अक्षराकृते\nत्वम् अनादराद् अपि मनाग् उदीरितं\nनिखिलोग्र-ताप-पटलीं विलुम्पसि",
        "यद्-आभासो \u0027प्य् उद्यन् कवलित-भव-ध्वान्त-विभवो\nदृशं तत्त्वान्धानाम् अपि दिशति भक्ति-प्रणयिनीम्\nजनस् तस्योदात्तं जगति भगवन्-नाम-तरणे\nकृती ते निर्वक्तुं क इह महिमानं प्रभवति",
        "यद्-ब्रह्म-साक्षात्-कृति-निष्ठयापि\nविनाशम् आयाति विना न भोगैः\nअपैति नाम स्फुरणेन तत् ते\nप्रारब्ध-कर्मेति विरौति वेदः",
        "अघदमन-यशोदानन्दनौ नन्दसूनो\nकमलनयन-गोपीचन्द्र-वृन्दावनेन्द्राः\nप्रणतकरुण-कृष्णाव् इत्य् अनेक-स्वरूपे\nत्वयि मम रतिर् उच्चैर् वर्धतां नामधेय",
        "वाच्यं वाचकम् इत्य् उदेति भवतो नाम स्वरूप-द्वयं\nपूर्वस्मात् परम् एव हन्त करुणं तत्रापि जानीमहे\nयस् तस्मिन् विहितापराध-निवहः प्राणी समन्ताद् भवेद्\nआस्येनेदम् उपास्य सो \u0027पि हि सदानन्दाम्बुधौ मज्जति",
        "सूदिताश्रित-जनार्ति-राशये\nरम्य-चिद्-घन-सुख-स्वरूपिणे\nनाम गोकुल-महोत्सवाय ते\nकृष्ण पूर्ण-वपुषे नमो नमः",
        "नारद-वीणोज्जीवन\nसुधोर्मि-निर्यास-माधुरी-पूर\nत्वं कृष्ण-नाम कामं\nस्फुर मे रसने रसेन सदा"
      ],
      translations: [
        "हे हरि-नाम! उपनिषद समस्त वेदों के मुकुट-मणि हैं, और उनकी रत्न-माला से निकलने वाली दीप्तिमान आभा सदैव आपके चरण-कमलों की अंगुलियों के अग्रभाग की पूजा करती रहती है। नारद और शुकदेव जैसे मुक्त पुरुष सदा आपकी उपासना करते हैं। हे हरि-नाम! मैं पूर्ण रूप से आपकी शरण ग्रहण करता हूँ।",
        "हे हरि-नाम, हे मुनियों द्वारा गाए जाने वाले नाम, हे लोगों को आनन्दित करने वाले दिव्य अक्षरो, यदि आपका उच्चारण एक बार भी हो जाए, चाहे अनादरपूर्वक ही क्यों न हो, तो आप तुरन्त सबके कठोर कष्टों को दूर कर देते हैं।",
        "हे पवित्र नाम-रूपी सूर्य, आपकी भोर की धुँधली किरण (नामाभास) भी इस संसार के अंधकार के बल को निगल जाती है, और सत्य के प्रति अंधे लोगों को भी कृष्ण की शुद्ध भक्ति के मार्ग पर चलने की दृष्टि दे देती है। इस संसार में ऐसा कौन विद्वान है जो आपकी दिव्य महिमा का पूरा वर्णन कर सके?",
        "हे पवित्र नाम, वेद घोषणा करते हैं कि निराकार ब्रह्म के ध्यान से भी पुराने कर्मों से मुक्ति नहीं मिलती, परन्तु भक्त की जिह्वा पर आपके प्रकट होते ही सारे कर्म तुरन्त मिट जाते हैं।",
        "हे पवित्र नाम, मैं प्रार्थना करता हूँ कि आपके अनेक रूपों के प्रति, जैसे अघदमन (अघासुर का नाश करने वाले), यशोदानन्दन (यशोदा के पुत्र), नन्दसूनु (नन्द के पुत्र), कमलनयन (कमल जैसे नेत्रों वाले), गोपीचन्द्र (गोपियों के चन्द्रमा), वृन्दावनेन्द्र (वृन्दावन के राजा), प्रणतकरुण (शरणागतों पर करुणा करने वाले) और कृष्ण, मेरा प्रेम दिन-प्रतिदिन अत्यधिक बढ़ता जाए।",
        "हे पवित्र नाम, आप दो रूपों में प्रकट होते हैं: पहला, वह परम पुरुष जिसका वर्णन पवित्र नाम करता है, और दूसरा, पवित्र नाम की ध्वनि स्वयं। हम जानते हैं कि दूसरा रूप पहले से भी अधिक दयालु है, क्योंकि यद्यपि कोई व्यक्ति आपके पहले रूप के प्रति अनेक अपराध कर सकता है, फिर भी वह अपनी वाणी से आपके दूसरे रूप की सेवा करके आनन्द के सागर में डूब जाता है।",
        "हे भगवान कृष्ण के परिपूर्ण और सम्पूर्ण पवित्र नाम, आप आनन्दमय और सघन आध्यात्मिक सुख के साक्षात् स्वरूप हैं, आप अपनी शरण लेने वालों के अनेक कष्टों को नष्ट कर देते हैं, और आप गोकुल के लिए आनन्द का उत्सव हैं। मैं बार-बार आपको प्रणाम करता हूँ।",
        "हे कृष्ण-नाम! हे नारद की वीणा को स्फूर्ति देने वाले! आप माधुर्य से परिपूर्ण हैं, जो अमृत की लहरों से भरे सागर के समान है। यदि आपकी इच्छा हो, तो कृपया भगवान के प्रति दिव्य प्रेम के साथ मेरी जिह्वा पर सदैव विराजमान रहें।"
      ]
    },

    "174": {
      title: "निताइ गुण-मणि आमार",
      transliterations: [
        "निताइ गुण-मणि आमार निताइ गुण-मणि।\nआनेर आनन्द दिया देशे देशे भ्रमि’॥",
        "राढ़-देशे जन्म निला नित्यानन्द राय।\nब्रजेर नन्दन जेन नवद्वीपे याय॥"
      ],
      translations: [
        "मेरे नित्यानन्द प्रभु सद्गुणों के महामणि हैं! वे नगर-नगर, देश-देश में घूमकर सबको प्रेमानन्द का दान कर रहे हैं।",
        "राढ़-देश (एकचक्रा धाम) में श्री नित्यानन्द राय प्रकट हुए और नवद्वीप में आकर श्री गौरांग महाप्रभु के साथ दिव्य संकीर्तन का विस्तार किया।"
      ]
    },
    "176": {
      title: "निताई मोर जीवन-धन (Nitāi Mora Jīvana-Dhana)",
      transliterations: [
        "निताइ मोर जीबन धन निताइ मोर जाति\nनिताइ बिहने मोर आर नाहि गति",
        "संसार सुखेर मुखे तुले दिब छाइ\nनगरे मागिया खाब गाइब निताइ",
        "ये देशे निताइ नाइ से देशे ना याब\nनिताइ बिमुख जनार मुख ना हेरिब",
        "गङ्गा यार पद जल हर शिरे धरे\nहेन निताइ ना भजिया दुख पेये मरे",
        "लोचन बोले मोर निताइ येबा नाहि माने\nअनल भेजाइ तार माझ मुखखाने"
      ],
      translations: [
        "श्री नित्यानन्द प्रभु ही मेरे जीवन-धन हैं और निताई ही मेरी जाति (सर्वस्व) हैं। निताई के बिना मेरा अन्य कोई आश्रय या गति नहीं है।",
        "भौतिक संसार के तथाकथित सुख के मुख पर मैं राख डाल दूँगा। नगर-नगर में भिक्षा माँगकर खाऊँगा और केवल श्री निताई के नाम का गान करूँगा।",
        "जिस देश (स्थान) में निताई का वास अथवा उनका संकीर्तन नहीं है, उस देश में मैं कभी नहीं जाऊँगा। जो व्यक्ति निताई से विमुख है, उसका मुख भी मैं कभी नहीं देखूँगा।",
        "लोचन दास कहते हैं—जो व्यक्ति मेरे निताई को नहीं मानता अथवा उनका अनादर करता है, उसके दोनों नेत्रों में आग लग जाए।",
        "श्री निताई पाखंडियों का दलन करने वाले और पतितों का उद्धार करने वाले हैं। लोचन दास कहते हैं कि निताई ही मेरे जीवन-प्राण हैं।"
      ]
    },

    "178": {
      title: "निताइ-पद-कमल",
      transliterations: [
        "निताइ-पद-कमल, कोटि-चन्द्र-सुशीतल, जे छायाय जगत जुड़ाय।\nहेन निताइ विने भाइ, राधा-कृष्ण पाइते नाइ, दृढ़ करि’ धर निताइर पाय॥",
        "से सम्बन्ध नाहि यार, वृथा जन्म गेल तार, से पशु बड दुराचार।\nनिताइ ना बोलिल मुखे, मजल संसार-सुखे, विद्या-कुले कि करिवे तार॥",
        "अहङ्कारे मत्त हञा, नितार-पद पासरिया, असत्येरे सत्य करि’ मानि।\nनितार करुणा ह’ले, ब्रजे राधा-कृष्ण मिले, धरि’ नरोत्तम-दास-वाणि॥"
      ],
      translations: [
        "श्री नित्यानन्द प्रभु के चरण-कमल करोड़ों चन्द्रमाओं के समान शीतल एवं आनन्ददायक हैं, जिनकी छत्रछाया में सम्पूर्ण संसार के ताप शान्त हो जाते हैं। नित्यानन्द प्रभु की कृपा के बिना श्री राधा-कृष्ण की प्राप्ति नहीं हो सकती, अतः उनके चरणों को दृढ़ता से पकड़ लो।",
        "जिसका श्री नित्यानन्द प्रभु से सम्बन्ध स्थापित नहीं हुआ, उसका मनुष्य-जन्म व्यर्थ चला गया और वह पशु के समान दुराचारी है। जिसने मुख से 'निताई' नहीं बोला और सांसारिक सुखों में डूबा रहा, उसकी उच्च विद्या और कुल उसका क्या उपकार कर सकेंगे?",
        "अहंकार में मत्त होकर जिसने नित्यानन्द प्रभु के चरणों को भुला दिया, वह असत्य संसार को ही सत्य मान बैठा है। जब नित्यानन्द प्रभु की करुणा होगी, तभी ब्रज में राधा-कृष्ण की प्राप्ति होगी—नरोत्तम दास इसी वाणी को धारण करते हैं।"
      ]
    },
    "181": {
      title: "ओहे प्रेमेर ठाकुर गोरा (Ohe Premera Ṭhākura Gorā)",
      transliterations: [
        "ओहे, प्रेमेर ठाकुर गोरा\nप्राणेर यातना किवा कब, नाथ! हयेछि आपन-हारा",
        "कि आर बलिब, जे-काजेर तोरे\nएनेछिले, नाथ! जगते आमारे,\nएत-दिन परे कहिते से कथा, खेदे दुःखे है सारा",
        "तोमार भजने ना जन्मिल रति,\nजड-मोहे मत्त सदा दुरमति –\nविषयीर काछे थेके थेके आमि हैनु विषयी-पारा",
        "के आमि, केन जे एसेछि एखाने,\nसे-कथा कखन नाहि भावि मने,\nकखन भोगेर, कखन त्यागेर छलनाय मन नाचे",
        "कि गति हैबे कखन भावि ना,\nहरि-भकतेर काछेओ जाइ ना,\nहरि-विमुखेर कु-लक्षण जत आमातेइ सब अछे",
        "श्री-गुरु-कृपाय भेङ्गेछे स्वपन,\nबुझेछि एखन तुमि-इ आपन,\nतव निज-जन परम-बान्धव संसार कारागारे",
        "आन ना भजिब भक्त-पद विनु,\nरातुल-चरणे शरण लोइनु,\nउद्धारहो नाथ! माया-जाल ह’ते ए दासेर केशे धो’रे",
        "पातकीरे तुमि कृपा कर नाकि?\nजगाइ-माधाइ छिल जे पातकी,\nताहाते जेनेछि, प्रेमेर ठाकुर! पातकीरेओ तार तुमि",
        "आमि भक्ति-हीन, दीन, अकिञ्चन –\nअपराधी-शिरे दाओ दु’ चरण,\nतोमार अभय श्री चरणे चिर – शरण लैनु आमि"
      ],
      translations: [
        "हे प्रेम के ठाकुर गौरसुंदर! हे मेरे स्वामी! मैं आपसे अपनी पीड़ा और दुःख की क्या कथा कहूँ? मैं अपना स्वरूप भूल गया हूँ।",
        "हे नाथ! और क्या कहूँ? जिस काम के लिए आप मुझे इस संसार में लाए थे, इतने दिनों बाद वह बात कहते हुए मैं पछतावे और दुःख से थक-हार गया हूँ।",
        "हे प्रभु! मैं इतना दुर्भाग्यशाली हूँ कि मुझे आपकी भक्ति में कभी अनुराग नहीं हुआ, बल्कि मैं सदा दुर्बुद्धि और भौतिक भोग में उन्मत्त रहा। विषयी लोगों के बीच रहते-रहते मैं भी उनके ही समान बन गया।",
        "मैं कौन हूँ? मैं इस संसार में क्यों आया हूँ? इन प्रश्नों पर मैंने कभी विचार ही नहीं किया। कभी भोग में, कभी त्याग में, मेरा मन इस छलावे में ही नाचता रहा।",
        "मेरा क्या परिणाम होगा, यह मैंने कभी नहीं सोचा। मैं कभी हरिभक्तों के पास भी नहीं गया, और भगवान से विमुख रहने के जो भी दुर्लक्षण होते हैं, वे सब मुझमें विद्यमान रहे।",
        "अब श्री गुरु की कृपा से मेरा स्वप्न टूट गया है और मेरी आँखें खुल गई हैं। अब मैं समझ गया हूँ कि मेरे अपने तो केवल आप ही हैं, और संसार के इस कारागार में आपके प्रिय भक्त ही मेरे सबसे बड़े मित्र हैं।",
        "अब मैं केवल आपके भक्तों की ही सेवा करूँगा, और किसी की नहीं। हे नाथ! अब मैंने आपके लाल कमल जैसे चरणों की शरण ले ली है। इस दास को बालों से पकड़कर माया के जाल से बाहर निकाल लीजिए।",
        "क्या आप पापियों पर कृपा नहीं करते? क्या जगाई और माधाई भी महापापी नहीं थे? फिर भी आपने उन्हें अपनी कृपा दी। इससे मैं समझ गया हूँ कि आप ही प्रेम के ठाकुर और पतितों के उद्धारक हैं।",
        "हे प्रभु! मैं भक्ति से रहित, दीन और अकिंचन हूँ। अपने अभय देने वाले चरण इस अपराधी के सिर पर रख दीजिए। मैंने आपके उन्हीं दिव्य चरणों की चिरशरण ले ली है।"
      ]
    },

    "182": {
      title: "ओहे! वैष्णव ठाकुर",
      transliterations: [
        "ओहे! वैष्णव ठाकुर, दयार सागर, ए दासे करुणा करि’।\nदिया पद-छाया, शोध मोर मन, चरण धरिणु तोरि॥",
        "छह वेग दमि’, छह दोष शोधि’, छह गुण देह दासे।\nछह सत्सङ्ग, देह हे आमारे, बसेछि सङ्गेर आशे॥",
        "एकाकी आमार, नाहि पाइ बल, हरिनाम-संकीर्तने।\nतुमि कृपा करि’, श्रद्धा-बिन्दु दिया, देह कृष्ण-नाम-धने॥",
        "कृष्ण से तोमार, कृष्ण दITE पार, तोमार शक्ति आछे।\nआमि त’ काङ्गाल, ‘कृष्ण’ ‘कृष्ण’ बलि’, धाइ तव पाछे पाछे॥"
      ],
      translations: [
        "हे वैष्णव ठाकुर! आप दया के असीम सागर हैं, इस दास पर कृपा कीजिए। अपने चरण-कमलों की शीतल छाया देकर मेरे मन को शुद्ध कीजिए, मैं आपके चरण पकड़ता हूँ।",
        "मन, क्रोध, जिह्वा आदि छह वेगों का दमन कर, छह दोषों को मिटाकर मुझे छह सद्गुण प्रदान कीजिए और छह प्रकार का शुद्ध साधु-संग दीजिए।",
        "अकेले मुझमें हरिनाम-संकीर्तन करने का कोई बल नहीं है। आप कृपा करके मुझे श्रद्धा का एक बिन्दु और कृष्ण-नाम का अमूल्य धन प्रदान कीजिए।",
        "श्रीकृष्ण आपके हैं और आप श्रीकृष्ण को किसी को भी देने में समर्थ हैं! मैं तो अत्यन्त दीन-हीन कंगाल हूँ, केवल 'कृष्ण! कृष्ण!' पुकारता हुआ आपके पीछे-पीछे दौड़ रहा हूँ।"
      ]
    },
    "185": {
      title: "पालयाच्युत अष्टकम् (Pālayācyuta Aṣṭakam)",
      transliterations: [
        "मध्वमानसपद्मभानुसमं स्मरप्रतिमं स्मर\nस्निग्धनिर्मलशीतकान्तिलसन्मुखं करुणोन्मुखम्\nहृद्यकम्बुज मानकन्धरमक्षयं दुरितक्षयम्\nस्निग्ध संस्तुत रूप्यपीठकृतालयं हरिमालयम्",
        "अङ्गदादिसुशोभिपाणियुगेन संक्शुभितैनसं\nतुङ्गमाल्य मणीन्द्रहारसरोरसं खलनीरसम्\nमङ्गलप्रदमन्थदामविराचितं भजताजितं तंगृणे\nवर रूप्यपीठकृतालयं हरिमालयम्",
        "पीनरम् यतनूदरं भज हे मनः शुभ हे मनः\nस्वानुभावनिदर्शनाय दिशन्तमर्थिसुशन्तमम्\nआनतोस्मि निजार्जुनप्रियसाधकं खलबाधकं\nहीनतोज्झित रूप्यपीठकृतालयं हरिमालयम्",
        "हैमकिङ्किणिमालिकारशनाञ्चितं तमवञ्चितं\nकम्रकाञ्चन वस्त्रचित्रकटिं घनप्रभया घनम्\nनम्रनागरोपमोरुरुमनामययं शुभधीमयं\nनौम्यहम् वर रूप्यपीठकृतालयं हरिमालयम्",
        "वृत्तजानुमनोज्ञजङ्घममोहदं परमोहदं\nरत्नकल्पनखत्विषा हृत्तहृत्तमस्ततिमुत्तमम्\nप्रत्यहं रचितार्चनं रमया स्वयागतया स्वयं\nचित्त चिन्तय रूप्यपीठकृतालयं हरिमालयम्",
        "चारुपादसरोजयुग्मरुचामरोच्चयचामरो\nदारमूर्धजभानुमण्डलरञ्जकं कलिभञ्जकम्\nवीरतोचितभूषणं वरनूपुरंस्वतनूपुरं\nधारयात्मनिरूप्यपीठकृतालयं हरिमालयम्",
        "शुष्कवादिमनोतिदूरतरागमोत्सवदागमं\nसत्कवीन्द्रवचोविलासमहोदयं महितोदयम्\nलक्षयामि यतीश्वरैः क्तपूजनं गुणभाजनं\nधिकृतोपम रूप्यपीठकृतालयं हरिमालयम्",
        "नारदप्रियमाविशाम्बुरुहेक्षणं निजरक्षणं\nतारकोपमचारुदीपचयान्तरे गतचिन्तरे\nधीर मानस पूर्णचन्द्रसमानमच्युतमानम\nद्वारकोपम रूप्यपीठकृतालयं हरिमालयम्",
        "रूप्यपीठकृतालयस्य हरेः प्रियं दुरिताप्रियं\nतत्पदार्चकवादिराजयतीरितं गुणपूरितम्\nगोप्यमष्टकमेतदुच्चमुदे ममास्त्विह निर्मम\nप्राप्यशुद्धफलाय तत्र सुकोमलं हृतधीमलम्"
      ],
      translations: [
        "Meditate on Hari who is the sun to Madhwacharya\u0027s lotus mind, the pretty one with a blemishless moon-like face, personification of mercy, with a neck like a conch, who never decays, cures all sufferings, and has made Udupi his home.",
        "Meditate till the end on that Hari, whose hands make his amulets shine along with the churn and rope that do good, whose chest is adorned with long garlands of gems and necklaces, who is the total destroyer of sins, who makes wicked people inactive, who can be won over by devotion, and who has made the great Udupi his home.",
        "Meditate till the end on that Hari, whose pretty slender golden belly is bewitching, who grants salvation and wealth to his devotees to provide a personal experience of himself, who is a great lover of Arjuna, a destroyer of wicked people, and lives in the blemish-less Udupi.",
        "Meditate till the end on that Hari, who is graced by a waist belt of golden bells, who cannot be cheated by bad ones, who wears a pearl-inlaid golden cloth around his pretty waist, whose body shines like black clouds, who has thighs like an elephant\u0027s trunk, who is free of blemishes, full of bliss and knowledge, and has made the great Udupi his home.",
        "Meditate till the end on that Hari, who has bewitching knees and shanks, who does not give illusion to his devotees but gives it to the wicked, who destroys the darkness of the mind with the luster of his pearl-like nails, who is the storehouse of all good, and who is daily worshipped by his consort Goddess Lakshmi herself in Udupi.",
        "Meditate till the end on that Hari, who by the brightness of his lotus feet brightens even the dense tufts of the prostrating devas, who destroys the evil of the kali age, wears ornaments suitable to a hero and exquisite anklets, resides within our bodies, and made Udupi his home.",
        "Meditate till the end on that Hari, who is far beyond the reach of feeble debaters but gives great happiness to the king of poets who understand holy books, who bestows eternal happiness on devotees, is worshipped by god-like sages, is the storehouse of good, and lives in Udupi which is beyond comparison.",
        "Oh brave man, get rid of all worries by meditating on the full moon-like Achyutha, who is dear to sage Narada, has lotus-like eyes, whose reality is himself alone, who protects his devotees, who is like the moon among star-like lamps, and who has made Dwaraka-like Udupi his home.",
        "This octet pertaining to the cowherd who made the temple of Udupi his home is dear to Lord Hari, removes all sorrows, is full of good qualities, and was composed by Sage Vadhiraja to provide happiness in this world, remove ignorance, and provide blemish-less well-being in the other world."
      ]
    },

    "187": {
      title: "परम करुण, पहूँ दुइ जन",
      transliterations: [
        "परम करुण, पहूँ दुइ जन, निताइ गौरचन्द्र।\nसब अवतार-सार-शिरोमणि, केवल आनन्द-कन्द॥",
        "भज भज भाइ, चैतन्य नितार, सुदृढ़ विश्वास करि’।\nविषय छाडिया, से रसे मडिया, मुखे बल हरि हरि॥",
        "देखा रे देखा रे, त्रिभुवन-माझे, एमन दयाल नाइ।\nपशु-पाखी काँदे, पाषाण विगले, यार प्रेम-गन्ध पाइ॥",
        "लोचन बले मोर, नितार-गौराङ्ग-गुणे, ना हइल रति।\nआपन करमे, बाधिया रहिनु, नाहिक मोर गति॥"
      ],
      translations: [
        "श्री नित्यानन्द प्रभु और श्री गौरचन्द्र दोनों परम दयालु प्रभु हैं! वे समस्त अवतारों के शिरोमणि और केवल आनन्द के मूल स्रोत हैं।",
        "हे भाई! पूर्ण विश्वास के साथ श्री चैतन्य और नित्यानन्द प्रभु का भजन करो। विषय-भोगों को त्यागकर, उस प्रेमरस में मग्न होकर मुख से 'हरि हरि' बोलो!",
        "तीनों लोकों में देखो, इनके समान दयालु और कोई नहीं है! जिनकी प्रेमाभक्ति की सुगंध पाकर पशु-पक्षी भी रोने लगते हैं और कठोर पाषाण भी पिघल जाता है।",
        "लोचन दास कहते हैं कि ऐसे परम दयालु निताई-गौरांग के गुणों में मेरी प्रीति नहीं हुई; मैं अपने ही कर्म-बन्धन में बँधा रहा, अतः मेरी कोई गति नहीं है।"
      ]
    },
    "196": {
      title: "पुरुष सूक्तम् (Puruṣa Sūktam)",
      transliterations: [
        "ओं सहस्र शीर्षा पुरुषः  सहस्राक्षः सहस्रपात्\nस भूमिम् विष्वतो वृत्वा  अत्यतिष्टद् दशान्गुलम्",
        "पुरुष एवेदगं सर्वम्  यद् भूतम् यच् च भव्यम्\nउतामृतत्वस्येषानः यद् अन्नेनातिरोहति",
        "एतावान् अस्य महिम  अतो ज्यायागंश्च पूरुषः\nपादो \u0027स्य विष्वा भूतानि  त्रिपादस्यामृतम् दिवि",
        "त्रिपाद् ऊर्ध्व उदैत् पुरुषः  पादो \u0027स्येहाभवत्पुनः\nततो विष्व.न् व्यक्रामत्  साशनानशने अभि",
        "तस्मात् विराद् अजायत  विराजो अधिपूरुष ः\nस जातो अत्यरिच्यत  पश्चाद् भूमिमथो पुरः",
        "यत्पुरुषेन हविषा  देवा यज्ञम् अतन्वत\nवसन्तो अस्यासी-दाज्यम्  ग्रीष्म इध्म शरद्धविः",
        "सप्तास्या सन् परिदयः  त्रिः सप्तः समिदः क्र्ताः\nदेव यद् यज्ञम् तन्वानाः  अबध्नन् पुरुषम् पशुम्",
        "तम् यज्ञम् बर्हिषि प्रोक्षन्  पुरुषम् जातम् अग्रतः\nतेन देवा अयजन्त  साध्या ऋषयश् च ये",
        "तस्माद् यज्ञत् सर्वहुतः  सम्भृतम् प्र्षदाज्यम्\nपषूगंस्त्य गश् चक्रे वायव्यान्  आरण्यान् ग्राम्यास् च ये",
        "तस्माद् यज्ञत् सर्वहुतः  ऋचः सामानि जज्निरे\nछन्दागंसि जज्निरे तस्मात्  यजुस् तस्माद् अजायन्त",
        "तस्मादष्वा अजायन्त  ये के चोभयादतः\nगावोहम् जग्न्यिरे तस्मात्  तस्मज्जता अजावयः",
        "यत् पुरुषम् व्यदधुः  कतिधा व्यकल्पयन्\nमुखम् किमस्य कौ बाहू  कवूरू पादा उच्येते",
        "ब्राह्मणो अस्य मुखमासीत्  बाहू राजन्यः क्र्तः\nऊरु तदस्य यद् वैष्य  पद्भ्याम् षूद्रो अजायत",
        "चन्द्रमा मनसो जातः  चक्षो सूर्यो अजायत\nमुखादीन्द्रस्चाग्निस्छ  प्राणाद्वायुरजायत",
        "नाभ्या आसीदन्तरिक्षम्  षीर्ष्णौ ध्यौः समवर्तत\nपद्भ्याम् भूमिर् दिषः ष्रोत्रात्  तथा लोकाम् अकल्पयन्",
        "वेदाहमेतम् पुरुषम् महान्तम्  आदित्यवर्णम् तमसस्तु पारे\nसर्वाणि रूपाणि विचित्य धीरः  नामानि क्र्त्वाभिवदन् यदास्ते",
        "धाता पुरस्ताध्यमुदाजहार  षक्रः प्रविद्वान् प्रदिषष्चतस्रः\nतमेवम् विध्वानम्र्त इह भवति  नान्यः पन्था अयनाय विध्यते",
        "यग्न्येन यग्न्य-मयजन्त देवः  तानि धर्माणि प्रथमानासन्न्\nते ह नाकम् महिमानः सचन्ते  यत्र पूर्वे साध्याः सन्ति देवाः",
        "अद्भ्यस्सम्भोओतः प्र्थिव्यै रसाच्च  विश्वकर्मणस्समवर्तताधि\nतस्य त्वष्टा विदधद्रोओपमेति  तत्पुरुषस्य विश्वमाजानमग्रे",
        "वेदाहमेतम् पुरुषम् महान्तम्  आदित्यवर्णम् तमसस् पारस्तात्\nतमेवम् विध्वानम्र्त इह भवति  नान्यः पन्था विध्यते अयनाय",
        "प्रजापतिस्छरति गर्भे अन्तः  अजायमानो बहुधा विजायते\nतस्य धीराः परिजानन्ति योनिम्  मरीछीनाम् पदमिच्चन्ति वेधसः",
        "यो देवेभ्य आतपति  यो देवानाम् पुरोहितः\nपुर्वो यो देवेभ्यो जातः  नमो रुचाय ब्राह्मये",
        "रुचम् ब्राम्हम् जनयन्तः  देव अग्रे तदब्रुवन्\nयस्त्वैवम् ब्राह्मणो विध्यात्  तस्य देव असन् वशे",
        "हृश्च ते लक्ष्मीश्च पत्न्यौ  अहोरात्रे पार्श्वे\nनक्षत्राणि रोओपम्  अश्विनौ व्यात्तम्\nइश्तम् मनिशन\nअमुन् मनिशन\nसर्वम् मनिशन\nओं शान्तिः शान्तिः शान्तिः"
      ],
      translations: [
        "The Purusa (the Supreme Being) has a thousand heads, a thousand eyes and a thousand feet. He has enveloped this world from all sides and has (even) transcended it by ten angulas or inches.",
        "All this is verily the Purusa. All that which existed in the past or will come into being in the future (is also the Purusa). Also, he is the Lord of immortality. That which grows profusely by food (is also the Purusa).",
        "So much is His greatness. However, the Purusa is greater than this. All the beings form only a quarter (part of) Him. The three-quarter part of His, which is eternal, is established in the spiritual domain.",
        "The Purusa with the three-quarters (of His energy) ascended above (the spiritual energy). His one quarter of material energy becomes this creation again (and again). Then He pervades this universe comprising a variety of sentient beings and insentient objects.",
        "From Him (the Adi Purusa or original Supreme Being) was born the Virat (or Virat Purusa, the immense universal form). Making this Virat as the substratum (another) Purusa (or being, Brahma) (was born). As soon as he was born, he multiplied himself. Later, he created this earth and then, the bodies (of the living beings).",
        "When the devas (the demigods or beings of light) performed a yajna (or sacrificial ritual), using the Purusa as the havis (sacrificial material) for the yajna (ritual), the Vasanta (spring) became the ajya (ghee), the Grishma (summer) served as idhma (pieces of wood) and the sharad (autumn) filled the place of havis (obligatory material like the purodasha or rice-cake).",
        "For this (yajna or spiritual ceremony) there were seven paridhis (fuel pieces serving as borders). And, twenty-one items were made the samit or sacrificial fuel sticks. When the devas were performing this yajna or ceremony, they tied the Purusa (himself) as the pasu (sacrificial animal).",
        "The devas, the sadhyas and the rsis performed the sacrifice by using that Purusa as the means of yajna, the Purusa who had been born in the beginning, after sprinkling him with water by the barhis (or sacrificial grass).",
        "From that yajna (or sacrificial ritual) wherein the Cosmic Being was Himself the oblation, was produced the prasajya (or curds mixed with ghee). Birds flying in the air, wild animals of the forest as also the domesticated animals of the villages were also produced.",
        "From that yajna (or sacrifice) wherein the Cosmic Being was Himself the oblation, were born the riks (the mantras of the Rg-veda) and the samans (the mantras of the Sama-veda). From that (yajna) the meters (like Gayatri) were born. From that (yajna again) the yujas (the Yajura-veda) was born.",
        "From that were born the horses, as also animals (like donkeys and mules) which have two rows of teeth. From that were born the cattle. From that (again) were born goats and sheep.",
        "(Now some questions are raised by the sages) When the gods decided to (mentally) sacrifice the ViratPurusa (and produce further creation), in how many ways did they do it? What became of his face or mouth? What became of his two arms? What became of His two thighs? What were (the products of) the two feet called?",
        "From His face (or the mouth) came the brahmanas. From His two arms came the rajanya (the ksatriyas). From His two thighs came the vaisyas. From His two feet came the sudras.",
        "From His mind was born the moon. From His two eyes was born the sun. From His mouth were born Indra and Agni. From His breath was born the air.",
        "From (His) navel was produced the antariksha (the space between the earth and the heavens). Dyuloka (or heaven) came into existence from His head. The bhumi (the earth) evolved out of His feet, and deek (or spacial directions) from His ears. Similarly (the demigods) produced the worlds (too).",
        "I know (through intuitive experience) this great Purusa (the Supreme Being), the wise one, who, having created the various forms and the nomenclatures (for those forms), deals with them by those names, and who is beyond darkness and is brilliant like the sun.",
        "In the ancient days, Prajapati (Brahma) praised Him. Indra who knows all the four quarters also spoke about Him. Anyone who knows Him thus, will become immortal even in this life. For attaining liberation there is no other path (than knowledge of this Purusa, the Supreme Lord).",
        "The (demi)gods worshiped (the Supreme Creator in the form of) yajna through yajna (sacrifical ceremonies). Those very processes became the primary dharmas (laws guiding humanity). Those great ones attain that heaven where the ancient devas (demigods) and sadhyas live.",
        "The ViratPurusa manifested Himself from out of (the all-pervading) water as also the essence of the element of earth. This ViratPurusa was born out of the greatness of the ParamaPurusa, the Creator. The (ParamaPurusa, known as) Tvashta engaged Himself in the act of creating (the fourteen planetary systems), (which form of the expanded) figure (of the ViratPurusa). (Thus) the entire creation (related to the ViratPurusa) came into existence in the very beginning of creation.",
        "I have known that great Purusa (Supreme Being) who is brilliant like the sun and who is beyond all darkness. One who knows Him thus becomes immortal (even) here. There is no other path for liberation than this.",
        "Prajapati (the Supreme Creator) moves inside the cosmic womb. (Though) unborn He takes birth in a variety of ways. The wise ones know His (real nature) as the origin (of the universe). The (secondary) creators desire to attain the positions of Marichi and others.",
        "Obeisances to Him, the self-luminous Brahman, who shines for the (demi)gods, who is the leader of the rituals of the gods and who was born even before the gods.",
        "In the beginning of creation, the gods, manifesting the light of Brahman, addressed Brahman thus: \u0027That brahmana who realizes (You) thus, all the gods will come under his control.\u0027",
        "O Purusa! The goddesses Hri (modesty) and Sri (Lakshmi, wealth) are Your consorts. Day and night are Your lateral limbs. The stars are Your form. The Ashvins are your widely opened (mouth). (O Purusa) fulfill our desire for self-knowledge as also our desire for the enjoyments of this world (like longevity, cows, and horses). Give us all that we need. Om, let there be peace, peace, peace."
      ]
    },

    "198": {
      title: "राधा-कृष्ण प्राण मोर युगल-किशोर",
      transliterations: [
        "राधा-कृष्ण प्राण मोर युगल-किशोर।\nजीवने मरणे गति आर नाहि मोर॥",
        "कालिन्दीर कूले केलि-कदम्बेर वन।\nरतन-वेदीर उपरे बसाब दु’जन॥",
        "श्याम-गौरी-अङ्गे चन्दन-लेपन।\nचामर ढूलाब कबे हेरब वदन॥",
        "नरोत्तम-दासेर आश एइ अभिमत।\nयुगल-चरण-सेवा हउक सम्मत॥"
      ],
      translations: [
        "श्री श्री राधा-कृष्ण युगल-किशोर ही मेरे प्राण हैं! जीवन में अथवा मृत्यु में, उनके अतिरिक्त मेरी कोई अन्य गति नहीं है।",
        "यमुना जी के तट पर कदम्ब वन में रत्न-जटित वेदी पर मैं दोनों (श्री राधा-कृष्ण) को विराजमान करूँगा।",
        "श्री राधा-श्यामसुन्दर के श्रीअंगों पर चन्दन का लेप करूँगा और चँवर डुलाते हुए उनके मनोहर मुख-मण्डल के दर्शन करूँगा।",
        "नरोत्तम दास की केवल यही अभिलाषा और प्रार्थना है कि मुझे सदा युगल-चरणों की दिव्य सेवा प्राप्त हो।"
      ]
    },
    "199": {
      title: "à¤°à¤¾à¤§à¤¾-à¤•à¥ƒà¤·à¥à¤£-à¤¸à¥‡à¤µà¥‹à¤‚ à¤®à¥à¤‡ à¤œà¥€à¤µà¤¨à¥‡ à¤®à¤°à¤£à¥‡",
      transliterations: [
        "à¤°à¤¾à¤§à¤¾-à¤•à¥ƒà¤·à¥à¤£-à¤¸à¥‡à¤µà¥‹à¤‚ à¤®à¥à¤‡ à¤œà¥€à¤µà¤¨à¥‡ à¤®à¤°à¤£à¥‡à¥¤\nà¤¤à¤¾à¤à¤° à¤¸à¥à¤¥à¤¾à¤¨ à¤¤à¤¾à¤à¤° à¤²à¥€à¤²à¤¾ à¤¦à¥‡à¤–à¥‹à¤‚ à¤°à¤¾à¤¤à¥à¤°à¤¿-à¤¦à¤¿à¤¨à¥‡à¥¥ (à¥§)",
        "à¤¯à¥‡ à¤¸à¥à¤¥à¤¾à¤¨à¥‡ à¤¯à¥‡ à¤²à¥€à¤²à¤¾ à¤•à¤°à¥‡ à¤¯à¥à¤—à¤²-à¤•à¤¿à¤¶à¥‹à¤°à¥¤\nà¤¸à¤–à¥€à¤° à¤¸à¤™à¥à¤—à¤¿à¤¨à¥€ à¤¹à¤žà¤¾ à¤¤à¤¾à¤à¤¹à¥‡ à¤¹à¤žà¤¾ à¤­à¥‹à¤°à¥¥ (à¥¨)",
        "à¤¶à¥à¤°à¥€-à¤°à¥‚à¤ª-à¤®à¤žà¥à¤œà¤°à¥€-à¤ªà¤¦ à¤¸à¥‡à¤µà¥‹à¤‚ à¤¨à¤¿à¤°à¤µà¤§à¤¿à¥¤\nà¤¤à¤¾à¤à¤° à¤ªà¤¾à¤¦-à¤ªà¤¦à¥à¤® à¤®à¥‹à¤° à¤®à¤¨à¥à¤¤à¥à¤°-à¤®à¤¹à¥Œà¤·à¤§à¤¿à¥¥ (à¥©)",
        "à¤¶à¥à¤°à¥€-à¤°à¤¤à¤¿-à¤®à¤žà¥à¤œà¤°à¥€ à¤¦à¥‡à¤µà¥€ à¤®à¥‹à¤°à¥‡ à¤•à¤° à¤¦à¤¯à¤¾à¥¤\nà¤…à¤¨à¥à¤•à¥à¤·à¤£ à¤¦à¥‡à¤¹ à¤¤à¥à¤¯à¤¾ à¤ªà¤¦-à¤ªà¤¦à¥à¤®-à¤›à¤¾à¤¯à¤¾à¥¥ (à¥ª)",
        "à¤¶à¥à¤°à¥€-à¤°à¤¸-à¤®à¤žà¥à¤œà¤°à¥€ à¤¦à¥‡à¤µà¥€ à¤•à¤° à¤…à¤µà¤§à¤¾à¤¨à¥¤\nà¤…à¤¨à¥à¤•à¥à¤·à¤£ à¤¦à¥‡à¤¹ à¤¤à¥à¤¯à¤¾ à¤ªà¤¦-à¤ªà¤¦à¥à¤®-à¤§à¥à¤¯à¤¾à¤¨à¥¥ (à¥«)",
        "à¤µà¥ƒà¤¨à¥à¤¦à¤¾à¤µà¤¨à¥‡ à¤¨à¤¿à¤¤à¥à¤¯ à¤¨à¤¿à¤¤à¥à¤¯ à¤¯à¥à¤—à¤²-à¤µà¤¿à¤²à¤¾à¤¸à¥¤\nà¤ªà¥à¤°à¤¾à¤°à¥à¤¥à¤¨à¤¾ à¤•à¤°à¤¯à¥‡ à¤¸à¤¦à¤¾ à¤¨à¤°à¥‹à¤¤à¥à¤¤à¤® à¤¦à¤¾à¤¸à¥¥ (à¥¬)"
      ],
      translations: [
        "à¤œà¥€à¤µà¤¨ à¤®à¥‡à¤‚ à¤”à¤° à¤®à¤°à¤£à¥‹à¤ªà¤°à¤¾à¤‚à¤¤ à¤­à¥€, à¤®à¥ˆà¤‚ à¤¶à¥à¤°à¥€à¤°à¤¾à¤§à¤¾-à¤•à¥ƒà¤·à¥à¤£ à¤•à¥€ à¤¹à¥€ à¤¸à¥‡à¤µà¤¾ à¤•à¤°à¥‚à¤à¥¤ à¤°à¤¾à¤¤ à¤”à¤° à¤¦à¤¿à¤¨ à¤®à¥ˆà¤‚ à¤‰à¤¨à¤•à¥‡ à¤¦à¤¿à¤µà¥à¤¯ à¤§à¤¾à¤® à¤”à¤° à¤‰à¤¨à¤•à¥€ à¤®à¤§à¥à¤° à¤²à¥€à¤²à¤¾à¤“à¤‚ à¤•à¥‡ à¤¦à¤°à¥à¤¶à¤¨ à¤•à¤°à¥‚à¤à¥¤",
        "à¤œà¤¿à¤¸-à¤œà¤¿à¤¸ à¤¸à¥à¤¥à¤¾à¤¨ à¤ªà¤° à¤¯à¥à¤—à¤²-à¤•à¤¿à¤¶à¥‹à¤° à¤…à¤ªà¤¨à¥€ à¤®à¤§à¥à¤° à¤²à¥€à¤²à¤¾à¤à¤ à¤•à¤°à¥‡à¤‚, à¤®à¥ˆà¤‚ à¤¸à¤–à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤—à¤¿à¤¨à¥€ à¤¬à¤¨à¤•à¤° à¤‰à¤¨ à¤²à¥€à¤²à¤¾à¤“à¤‚ à¤®à¥‡à¤‚ à¤ªà¥‚à¤°à¥à¤£à¤¤à¤ƒ à¤¤à¤¨à¥à¤®à¤¯ (à¤µà¤¿à¤­à¥‹à¤°) à¤°à¤¹à¥‚à¤à¥¤",
        "à¤®à¥ˆà¤‚ à¤¨à¤¿à¤°à¤¨à¥à¤¤à¤° à¤¶à¥à¤°à¥€ à¤°à¥‚à¤ª-à¤®à¤žà¥à¤œà¤°à¥€ à¤•à¥‡ à¤šà¤°à¤£-à¤•à¤®à¤²à¥‹à¤‚ à¤•à¥€ à¤¸à¥‡à¤µà¤¾ à¤•à¤°à¥‚à¤à¥¤ à¤‰à¤¨à¤•à¥‡ à¤šà¤°à¤£-à¤•à¤®à¤² à¤¹à¥€ à¤®à¥‡à¤°à¤¾ à¤œà¥€à¤µà¤¨-à¤®à¤¨à¥à¤¤à¥à¤° à¤”à¤° à¤®à¤¹à¤¾-à¤”à¤·à¤§à¤¿ à¤¹à¥ˆà¤‚à¥¤",
        "à¤¹à¥‡ à¤¶à¥à¤°à¥€ à¤°à¤¤à¤¿-à¤®à¤žà¥à¤œà¤°à¥€ à¤¦à¥‡à¤µà¥€! à¤®à¥à¤ à¤ªà¤° à¤•à¥ƒà¤ªà¤¾ à¤•à¥€à¤œà¤¿à¤ à¤”à¤° à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤·à¤£ à¤®à¥à¤à¥‡ à¤…à¤ªà¤¨à¥‡ à¤šà¤°à¤£-à¤•à¤®à¤²à¥‹à¤‚ à¤•à¥€ à¤¶à¥€à¤¤à¤² à¤›à¤¾à¤¯à¤¾ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¥€à¤œà¤¿à¤à¥¤",
        "à¤¹à¥‡ à¤¶à¥à¤°à¥€ à¤°à¤¸-à¤®à¤žà¥à¤œà¤°à¥€ à¤¦à¥‡à¤µà¥€! à¤•à¥ƒà¤ªà¤¯à¤¾ à¤®à¥‡à¤°à¥€ à¤ªà¥à¤°à¤¾à¤°à¥à¤¥à¤¨à¤¾ à¤ªà¤° à¤§à¥à¤¯à¤¾à¤¨ à¤¦à¥€à¤œà¤¿à¤ à¤”à¤° à¤®à¥à¤à¥‡ à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤·à¤£ à¤…à¤ªà¤¨à¥‡ à¤šà¤°à¤£-à¤•à¤®à¤²à¥‹à¤‚ à¤•à¤¾ à¤§à¥à¤¯à¤¾à¤¨ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¥€à¤œà¤¿à¤à¥¤",
        "à¤¶à¥à¤°à¥€ à¤µà¥ƒà¤¨à¥à¤¦à¤¾à¤µà¤¨ à¤®à¥‡à¤‚ à¤¨à¤¿à¤¤à¥à¤¯-à¤¨à¤¿à¤°à¤¨à¥à¤¤à¤° à¤¹à¥‹à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤¯à¥à¤—à¤²-à¤µà¤¿à¤²à¤¾à¤¸ à¤•à¥€ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤à¤¿ à¤¹à¥‡à¤¤à¥ à¤¯à¤¹ à¤¨à¤°à¥‹à¤¤à¥à¤¤à¤® à¤¦à¤¾à¤¸ à¤¸à¤¦à¥ˆà¤µ à¤ªà¥à¤°à¤¾à¤°à¥à¤¥à¤¨à¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤"
      ]
    },
    "202": {
      title: "à¤°à¤¾à¤§à¤¿à¤•à¤¾-à¤šà¤°à¤£-à¤°à¥‡à¤£à¥ à¤­à¥‚à¤·à¤£ à¤•à¤°à¤¿à¤¯à¤¾ à¤¤à¤¨à¥",
      transliterations: [
        "à¤°à¤¾à¤§à¤¿à¤•à¤¾-à¤šà¤°à¤£-à¤°à¥‡à¤£à¥ à¤­à¥‚à¤·à¤£ à¤•à¤°à¤¿à¤¯à¤¾ à¤¤à¤¨à¥à¥¤\nà¤…à¤¨à¤¾à¤¯à¤¾à¤¸à¥‡ à¤ªà¤¾à¤¬à¥‡ à¤—à¤¿à¤°à¤¿à¤§à¤¾à¤°à¥€à¥¥\nà¤°à¤¾à¤§à¤¿à¤•à¤¾-à¤šà¤°à¤£à¤¾à¤¶à¥à¤°à¤¯ à¤¯à¥‡ à¤•à¤°à¥‡ à¤¸à¥‡ à¤®à¤¹à¤¾à¤¶à¤¯à¥¤\nà¤¤à¤¾à¤à¤°à¥‡ à¤®à¥à¤žà¤¿ à¤¯à¤¾à¤‡ à¤¬à¤²à¤¿à¤¹à¤¾à¤°à¥€à¥¥ (à¥§)",
        "à¤œà¤¯ à¤œà¤¯ à¤°à¤¾à¤§à¤¾-à¤¨à¤¾à¤® à¤µà¥ƒà¤¨à¥à¤¦à¤¾à¤µà¤¨ à¤¯à¤¾à¤à¤° à¤§à¤¾à¤®à¥¤\nà¤•à¥ƒà¤·à¥à¤£-à¤¸à¥à¤–-à¤µà¤¿à¤²à¤¾à¤¸à¥‡à¤° à¤¨à¤¿à¤§à¤¿à¥¥\nà¤¹à¥‡à¤¨ à¤°à¤¾à¤§à¤¾-à¤—à¥à¤£-à¤—à¤¾à¤¨ à¤¨à¤¾ à¤¶à¥à¤¨à¤¿à¤² à¤®à¥‹à¤° à¤•à¤¾à¤¨à¥¤\nà¤µà¤žà¥à¤šà¤¿à¤¤ à¤•à¤°à¤¿à¤² à¤®à¥‹à¤°à¥‡ à¤µà¤¿à¤§à¤¿à¥¥ (à¥¨)",
        "à¤¤à¤¾à¤à¤° à¤­à¤•à¥à¤¤-à¤¸à¤™à¥à¤—à¥‡ à¤¸à¤¦à¤¾ à¤°à¤¸-à¤²à¥€à¤²à¤¾-à¤ªà¥à¤°à¥‡à¤®-à¤•à¤¥à¤¾à¥¤\nà¤¯à¥‡ à¤•à¤¹à¥‡ à¤¸à¥‡ à¤ªà¤¾à¤¯ à¤˜à¤¨à¤¶à¥à¤¯à¤¾à¤®à¥¥\nà¤‡à¤¹à¤¾à¤¤à¥‡ à¤µà¤¿à¤®à¥à¤– à¤¯à¥‡à¤‡ à¤¤à¤¾à¤° à¤•à¤­à¥ à¤¸à¤¿à¤¦à¥à¤§à¤¿ à¤¨à¤¾à¤‡à¥¤\nà¤¨à¤¾à¤¹à¤¿ à¤¯à¥‡à¤¨ à¤¶à¥à¤¨à¤¿ à¤¤à¤¾à¤° à¤¨à¤¾à¤®à¥¥ (à¥©)",
        "à¤•à¥ƒà¤·à¥à¤£-à¤¨à¤¾à¤®-à¤—à¤¾à¤¨à¥‡ à¤­à¤¾à¤‡ à¤°à¤¾à¤§à¤¿à¤•à¤¾-à¤šà¤°à¤£ à¤ªà¤¾à¤‡à¥¤\nà¤°à¤¾à¤§à¤¾-à¤¨à¤¾à¤®-à¤—à¤¾à¤¨à¥‡ à¤•à¥ƒà¤·à¥à¤£à¤šà¤¨à¥à¤¦à¥à¤°à¥¥\nà¤¸à¤‚à¤•à¥à¤·à¥‡à¤ªà¥‡ à¤•à¤¹à¤¿à¤² à¤•à¤¥à¤¾ à¤˜à¥à¤šà¤¾à¤¹ à¤®à¤¨à¥‡à¤° à¤µà¥à¤¯à¤¥à¤¾à¥¤\nà¤¦à¥à¤ƒà¤–-à¤®à¤¯ à¤…à¤¨à¥à¤¯ à¤•à¤¥à¤¾-à¤¦à¥à¤µà¤¨à¥à¤¦à¥à¤µà¥¥ (à¥ª)"
      ],
      translations: [
        "à¤¶à¥à¤°à¥€à¤°à¤¾à¤§à¤¿à¤•à¤¾ à¤•à¥‡ à¤šà¤°à¤£-à¤°à¤œ à¤•à¥‹ à¤…à¤ªà¤¨à¥‡ à¤¶à¤°à¥€à¤° à¤•à¤¾ à¤†à¤­à¥‚à¤·à¤£ à¤¬à¤¨à¤¾ à¤²à¥‹, à¤¤à¥‹ à¤¤à¥à¤® à¤…à¤¨à¤¾à¤¯à¤¾à¤¸ à¤¹à¥€ à¤—à¤¿à¤°à¤¿à¤§à¤¾à¤°à¥€ à¤¶à¥à¤°à¥€à¤•à¥ƒà¤·à¥à¤£ à¤•à¥‹ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤° à¤²à¥‹à¤—à¥‡à¥¤ à¤œà¥‹ à¤•à¥‹à¤ˆ à¤¶à¥à¤°à¥€à¤°à¤¾à¤§à¤¿à¤•à¤¾ à¤•à¥‡ à¤šà¤°à¤£-à¤•à¤®à¤²à¥‹à¤‚ à¤•à¤¾ à¤†à¤¶à¥à¤°à¤¯ à¤²à¥‡à¤¤à¤¾ à¤¹à¥ˆ, à¤µà¤¹ à¤µà¤¸à¥à¤¤à¥à¤¤à¤ƒ à¤®à¤¹à¤¾à¤¨ à¤†à¤¤à¥à¤®à¤¾ à¤¹à¥ˆ, à¤®à¥ˆà¤‚ à¤‰à¤¸ à¤ªà¤° à¤¬à¤¾à¤°à¤®à¥à¤¬à¤¾à¤° à¤¬à¤²à¤¿à¤¹à¤¾à¤°à¥€ à¤œà¤¾à¤¤à¤¾ à¤¹à¥‚à¤!",
        "à¤¶à¥à¤°à¥€à¤°à¤¾à¤§à¤¾-à¤¨à¤¾à¤® à¤•à¥€ à¤œà¤¯ à¤¹à¥‹, à¤œà¤¯ à¤¹à¥‹! à¤œà¤¿à¤¨à¤•à¤¾ à¤¨à¤¿à¤¤à¥à¤¯ à¤§à¤¾à¤® à¤¶à¥à¤°à¥€ à¤µà¥ƒà¤¨à¥à¤¦à¤¾à¤µà¤¨ à¤¹à¥ˆ à¤”à¤° à¤œà¥‹ à¤¶à¥à¤°à¥€à¤•à¥ƒà¤·à¥à¤£ à¤•à¥‡ à¤¸à¥à¤–à¤®à¤¯ à¤µà¤¿à¤²à¤¾à¤¸ à¤•à¤¾ à¤ªà¤°à¤® à¤­à¤£à¥à¤¡à¤¾à¤° à¤¹à¥ˆà¤‚à¥¤ à¤®à¥‡à¤°à¥‡ à¤•à¤¾à¤¨à¥‹à¤‚ à¤¨à¥‡ à¤à¤¸à¥€ à¤¶à¥à¤°à¥€à¤°à¤¾à¤§à¤¾ à¤•à¥‡ à¤¦à¤¿à¤µà¥à¤¯ à¤—à¥à¤£à¤—à¤¾à¤¨ à¤•à¤¾ à¤¶à¥à¤°à¤µà¤£ à¤¨à¤¹à¥€à¤‚ à¤•à¤¿à¤¯à¤¾â€”à¤¹à¤¾à¤¯! à¤µà¤¿à¤§à¤¾à¤¤à¤¾ à¤¨à¥‡ à¤®à¥à¤à¥‡ à¤µà¤‚à¤šà¤¿à¤¤ à¤•à¤° à¤¦à¤¿à¤¯à¤¾!",
        "à¤‰à¤¨à¤•à¥‡ à¤­à¤•à¥à¤¤à¥‹à¤‚ à¤•à¥‡ à¤¸à¤‚à¤— à¤®à¥‡à¤‚ à¤°à¤¹à¤•à¤° à¤œà¥‹ à¤¨à¤¿à¤°à¤¨à¥à¤¤à¤° à¤°à¤¾à¤¸-à¤²à¥€à¤²à¤¾ à¤•à¥€ à¤ªà¥à¤°à¥‡à¤®-à¤•à¤¥à¤¾ à¤•à¤¾ à¤—à¤¾à¤¨ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ, à¤µà¤¹ à¤˜à¤¨à¤¶à¥à¤¯à¤¾à¤® à¤¶à¥à¤°à¥€à¤•à¥ƒà¤·à¥à¤£ à¤•à¥‹ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤° à¤²à¥‡à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤œà¥‹ à¤‡à¤¸ à¤°à¤¸-à¤•à¤¥à¤¾ à¤¸à¥‡ à¤µà¤¿à¤®à¥à¤– à¤¹à¥ˆ, à¤‰à¤¸à¥‡ à¤•à¤­à¥€ à¤¸à¤¿à¤¦à¥à¤§à¤¿ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¤¤à¥€; à¤®à¥ˆà¤‚ à¤¤à¥‹ à¤à¤¸à¥‡ à¤µà¤¿à¤®à¥à¤– à¤µà¥à¤¯à¤•à¥à¤¤à¤¿ à¤•à¤¾ à¤¨à¤¾à¤® à¤­à¥€ à¤¨à¤¹à¥€à¤‚ à¤¸à¥à¤¨à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¤¾!",
        "à¤¹à¥‡ à¤­à¤¾à¤ˆ! à¤¶à¥à¤°à¥€à¤•à¥ƒà¤·à¥à¤£-à¤¨à¤¾à¤® à¤•à¥‡ à¤—à¤¾à¤¨ à¤¸à¥‡ à¤¶à¥à¤°à¥€à¤°à¤¾à¤§à¤¿à¤•à¤¾ à¤•à¥‡ à¤šà¤°à¤£-à¤•à¤®à¤² à¤®à¤¿à¤²à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤”à¤° à¤¶à¥à¤°à¥€à¤°à¤¾à¤§à¤¾-à¤¨à¤¾à¤® à¤•à¥‡ à¤—à¤¾à¤¨ à¤¸à¥‡ à¤•à¥ƒà¤·à¥à¤£à¤šà¤¨à¥à¤¦à¥à¤° à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¹à¥‹à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤¸à¤‚à¤•à¥à¤·à¥‡à¤ª à¤®à¥‡à¤‚ à¤®à¥ˆà¤‚à¤¨à¥‡ à¤¯à¤¹ à¤ªà¤°à¤® à¤¸à¤¤à¥à¤¯ à¤•à¤¹ à¤¦à¤¿à¤¯à¤¾ à¤¹à¥ˆ, à¤…à¤¬ à¤…à¤ªà¤¨à¥‡ à¤®à¤¨ à¤•à¥€ à¤¸à¤®à¤¸à¥à¤¤ à¤µà¥à¤¯à¤¥à¤¾ à¤•à¥‹ à¤¦à¥‚à¤° à¤•à¤°à¥‹; à¤•à¥à¤¯à¥‹à¤‚à¤•à¤¿ à¤‡à¤¸à¤•à¥‡ à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤…à¤¨à¥à¤¯ à¤¸à¤­à¥€ à¤¬à¤¾à¤¤à¥‡à¤‚ à¤•à¥‡à¤µà¤² à¤¦à¥à¤ƒà¤– à¤”à¤° à¤¦à¥à¤µà¤¨à¥à¤¦à¥à¤µ à¤¸à¥‡ à¤­à¤°à¥€ à¤¹à¥ˆà¤‚à¥¤"
      ]
    },
    "210": {
      title: "श्री श्री गुर्वाष्टकम्",
      transliterations: [
        "संसार-दावानल-लीढ-लोक-\nत्राणाय कारुण्य-घनाघनत्वम्।\nप्राप्तस्य कल्याण-गुणार्णवस्य\nवन्दे गुरोः श्रीचरणारविन्दम्॥",
        "महाप्रभोः कीर्तन-नृत्य-गीत-\nवादित्र-माद्यन्-मनसो रसेन।\nरोमाञ्च-कम्पाश्रु-तरङ्ग-भाजो\nवन्दे गुरोः श्रीचरणारविन्दम्॥",
        "श्री-विग्रहाराधन-नित्य-नाना-\nशृङ्गार-तन्-मन्दिर-मार्जनादौ।\nयुक्तस्य भक्तांश्च नियुञ्जतो ऽपि\nवन्दे गुरोः श्रीचरणारविन्दम्॥",
        "चतुर्-विधाश्री-भगवत्-प्रसाद-\nस्वाद्व-न्न-तृप्तान् हरि-भक्त-सङ्घान्।\nकृत्वैव तृप्तिं भजतः सदैव\nवन्दे गुरोः श्रीचरणारविन्दम्॥",
        "श्री-राधिका-माधवयोर् अपार-\nमाधुर्य-लीला-गुण-रूप-नाम्नाम्।\nप्रतिक्षणस्वादन-लोलुपस्य\nवन्दे गुरोः श्रीचरणारविन्दम्॥",
        "निकुञ्ज-यूनो रति-केलि-सिद्धयै\nया यालिभिर् युक्तिर् अपेक्षणीया।\nतत्राति-दाक्ष्याद् अति-वल्लभस्य\nवन्दे गुरोः श्रीचरणारविन्दम्॥",
        "साक्षाद्-धरित्वेन समस्त-शास्त्रैर्\nउक्तस् तथा भाव्यत एव सद्भिः।\nकिन्तु प्रभोर् यः प्रिय एव तस्य\nवन्दे गुरोः श्रीचरणारविन्दम्॥",
        "यस्य प्रसादाद् भगवत्-प्रसादो\nयस्याप्रसादान् न गतिः कुतो ऽपि।\nध्यायन् स्तुवंस् तस्य यशस् त्रिसन्ध्यं\nवन्दे गुरोः श्रीचरणारविन्दम्॥"
      ],
      translations: [
        "जो भौतिक संसार रूपी दावानल में जलते हुए बद्धजीवों के उद्धार हेतु करुणा रूपी सघन मेघ के सदृश हैं और जो कल्याणकारी गुणों के सागर हैं, ऐसे श्री गुरुदेव के श्रीचरण-कमलों की मैं वन्दना करता हूँ।",
        "जो श्री चैतन्य महाप्रभु के संकीर्तन में दिव्य भाव से नृत्य, गान एवं वाद्य बजाते हुए आनन्द-मग्न रहते हैं, जिनके शरीर में रोमांच, कम्पन और अश्रु-प्रवाह रूपी सात्विक भाव प्रकट होते हैं, ऐसे श्री गुरुदेव के श्रीचरणों की मैं वन्दना करता हूँ।",
        "जो श्री विग्रहों की नित्य अर्चना, विविध प्रकार के शृंगार तथा मन्दिर-मार्जन में स्वयं संलग्न रहते हैं तथा अपने शिष्यों को भी इसमें नियुक्त करते हैं, ऐसे श्री गुरुदेव के श्रीचरण-कमलों की मैं वन्दना करता हूँ।",
        "जो चार प्रकार के भगवान के अमृतमय महाप्रसाद को भक्तों में वितरित कर उन्हें तृप्त देखकर स्वयं परम आनन्दित होते हैं, ऐसे श्री गुरुदेव के श्रीचरणों की मैं वन्दना करता हूँ।",
        "जो श्री श्री राधा-माधव की अपार माधुर्यमयी लीला, गुण, रूप एवं नामों का प्रतिक्षण आस्वादन करने के लिए सदैव लालायित रहते हैं, ऐसे श्री गुरुदेव के श्रीचरण-कमलों की मैं वन्दना करता हूँ।",
        "जो वृन्दावन के निकुञ्जों में श्री राधा-कृष्ण की प्रेम-क्रीड़ाओं की सिद्धि हेतु सखियों की सेवा-व्यवस्था में अत्यन्त दक्ष एवं उनके परम प्रिय हैं, ऐसे श्री गुरुदेव के श्रीचरण-कमलों की मैं वन्दना करता हूँ।",
        "समस्त शास्त्रों द्वारा जिन्हें साक्षात् श्रीहरि के समान पूजनीय कहा गया है और सभी संत-महात्मा जिनका ऐसा ही आदर करते हैं, किन्तु जो भगवान के नितान्त अन्तरंग दास हैं, ऐसे श्री गुरुदेव के श्रीचरणों की मैं वन्दना करता हूँ।",
        "जिनकी कृपा से भगवान की कृपा प्राप्त होती है और जिनकी अप्रसन्नता से कहीं कोई गति नहीं रह जाती, ऐसे श्री गुरुदेव का तीनों सन्ध्याओं में ध्यान और यशोगान करते हुए मैं उनके श्रीचरण-कमलों की वन्दना करता हूँ।"
      ]
    },
    "219": {
      title: "श्री गुरु वन्दना (श्री-गुरु-चरण-पद्म)",
      transliterations: [
        "श्री-गुरु-चरण-पद्म, केवल-भकति-सद्म, वन्दों मुञि सावधान मते।\nयाँहार प्रसादे भाइ, ए भव तरिया याइ, कृष्ण-प्राप्ति हय याँहा ह’ते॥",
        "गुरु-मुख-पद्म-वाक्य, चित्तेते करिया ऐक्य, आर ना करिह मने आशा।\nश्री-गुरु-चरणे रति, सेइ से उत्तम-गति, जे प्रसादे पूरे सर्व आशा॥",
        "चक्षु-दान दिलो येइ, जन्मे जन्मे प्रभु सेइ, दिव्य-ज्ञान हृदे प्रकाशितो।\nप्रेम-भक्ति याँहा हइते, अविद्या विनाश याते, वेदे गाय याँहार चरितो॥",
        "श्री-गुरु करुणा-सिन्धु, अधम जनार बन्धु, लोक-नाथ लोकेर जीवन।\nहा हा प्रभु कर दया, देह मोरे पद-छाया, एबे यश घुषुक त्रिभुवन॥"
      ],
      translations: [
        "श्री गुरुदेव के चरण-कमल ही विशुद्ध भक्ति के एकमात्र धाम हैं, मैं अत्यन्त सावधान चित्त से उनकी वन्दना करता हूँ। जिनकी कृपा से यह भवसागर सहज ही पार हो जाता है और श्रीकृष्ण की प्राप्ति होती है।",
        "गुरुदेव के मुख-कमल से निकले वचनों को अपने चित्त में एकाकार कर लो और मन में कोई अन्य अभिलाषा मत रखो। श्री गुरुदेव के चरणों में अनन्य प्रीति ही सर्वोत्तम गति है, जिनकी कृपा से समस्त आध्यात्मिक कामनाएँ पूर्ण हो जाती हैं।",
        "जिन्होंने मुझे दिव्य दृष्टि प्रदान की है, वे ही जन्म-जन्मान्तर में मेरे प्रभु हैं। उन्होंने मेरे हृदय में दिव्य ज्ञान को प्रकाशित किया है। जिनसे प्रेमाभक्ति प्राप्त होती है और अविद्या का नाश होता है, वेदों में जिनके पावन चरित्र का गान किया गया है।",
        "हे गुरुदेव! आप करुणा के सागर हैं, पतित-अधम जीवों के सच्चे बन्धु हैं और समस्त जगत के जीवन हैं। हे प्रभु! मुझ पर कृपा कीजिए, अपने चरण-कमलों की छाया प्रदान कीजिए, ताकि तीनों लोकों में आपकी कीर्ति का विस्तार हो।"
      ]
    },
    "223": {
      title: "à¤¶à¥à¤°à¥€-à¤•à¥ƒà¤·à¥à¤£-à¤šà¥ˆà¤¤à¤¨à¥à¤¯ à¤ªà¥à¤°à¤­à¥ à¤¦à¤¯à¤¾ à¤•à¤°à¥‹ à¤®à¥‹à¤°à¥‡",
      transliterations: [
        "à¤¶à¥à¤°à¥€-à¤•à¥ƒà¤·à¥à¤£-à¤šà¥ˆà¤¤à¤¨à¥à¤¯ à¤ªà¥à¤°à¤­à¥ à¤¦à¤¯à¤¾ à¤•à¤°à¥‹ à¤®à¥‹à¤°à¥‡à¥¤\nà¤¤à¥‹à¤®à¤¾ à¤¬à¤¿à¤¨à¤¾ à¤•à¥‡ à¤¦à¤¯à¤¾à¤²à¥ à¤œà¤—à¤¤à¥-à¤¸à¤‚à¤¸à¤¾à¤°à¥‡à¥¥ (à¥§)",
        "à¤ªà¤¤à¤¿à¤¤-à¤ªà¤¾à¤µà¤¨-à¤¹à¥‡à¤¤à¥ à¤¤à¤µ à¤…à¤µà¤¤à¤¾à¤°à¥¤\nà¤®à¥‹ à¤¸à¤® à¤ªà¤¤à¤¿à¤¤ à¤ªà¥à¤°à¤­à¥ à¤¨à¤¾ à¤ªà¤¾à¤‡à¤¬à¥‡ à¤†à¤°à¥¥ (à¥¨)",
        "à¤¹à¤¾ à¤¹à¤¾ à¤ªà¥à¤°à¤­à¥ à¤¨à¤¿à¤¤à¥à¤¯à¤¾à¤¨à¤¨à¥à¤¦, à¤ªà¥à¤°à¥‡à¤®à¤¾à¤¨à¤¨à¥à¤¦ à¤¸à¥à¤–à¥€à¥¤\nà¤•à¥ƒà¤ªà¤¾à¤µà¤²à¥‹à¤•à¤¨ à¤•à¤°à¥‹ à¤†à¤®à¤¿ à¤¬à¤¡à¤¼à¥‹ à¤¦à¥à¤ƒà¤–à¥€à¥¥ (à¥©)",
        "à¤¦à¤¯à¤¾ à¤•à¤°à¥‹ à¤¸à¥€à¤¤à¤¾-à¤ªà¤¤à¤¿ à¤…à¤¦à¥à¤µà¥ˆà¤¤ à¤—à¥‹à¤¸à¤¾à¤‡à¥¤\nà¤¤à¤µ à¤•à¥ƒà¤ªà¤¾-à¤¬à¤²à¥‡ à¤ªà¤¾à¤‡ à¤šà¥ˆà¤¤à¤¨à¥à¤¯-à¤¨à¤¿à¤¤à¤¾à¤‡à¥¥ (à¥ª)",
        "à¤¹à¤¾ à¤¹à¤¾ à¤¸à¥à¤µà¤°à¥‚à¤ª, à¤¸à¤¨à¤¾à¤¤à¤¨, à¤°à¥‚à¤ª, à¤°à¤˜à¥à¤¨à¤¾à¤¥à¥¤\nà¤­à¤Ÿà¥à¤Ÿ-à¤¯à¥à¤—, à¤¶à¥à¤°à¥€-à¤œà¥€à¤µ à¤¹à¤¾ à¤ªà¥à¤°à¤­à¥ à¤²à¥‹à¤•à¤¨à¤¾à¤¥à¥¥ (à¥«)",
        "à¤¦à¤¯à¤¾ à¤•à¤°à¥‹ à¤¶à¥à¤°à¥€-à¤†à¤šà¤¾à¤°à¥à¤¯ à¤ªà¥à¤°à¤­à¥ à¤¶à¥à¤°à¥€à¤¨à¤¿à¤µà¤¾à¤¸à¥¤\nà¤°à¤¾à¤®à¤šà¤¨à¥à¤¦à¥à¤°-à¤¸à¤™à¥à¤— à¤®à¤¾à¤—à¥‡ à¤¨à¤°à¥‹à¤¤à¥à¤¤à¤®-à¤¦à¤¾à¤¸à¥¥ (à¥¬)"
      ],
      translations: [
        "à¤¹à¥‡ à¤¶à¥à¤°à¥€ à¤•à¥ƒà¤·à¥à¤£ à¤šà¥ˆà¤¤à¤¨à¥à¤¯ à¤®à¤¹à¤¾à¤ªà¥à¤°à¤­à¥! à¤®à¥à¤ à¤ªà¤° à¤•à¥ƒà¤ªà¤¾ à¤•à¥€à¤œà¤¿à¤à¥¤ à¤†à¤ªà¤•à¥‡ à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤‡à¤¸ à¤¸à¤®à¥à¤ªà¥‚à¤°à¥à¤£ à¤¸à¤‚à¤¸à¤¾à¤° à¤®à¥‡à¤‚ à¤”à¤° à¤•à¥Œà¤¨ à¤‡à¤¤à¤¨à¤¾ à¤ªà¤°à¤® à¤¦à¤¯à¤¾à¤²à¥ à¤¹à¥ˆ?",
        "à¤ªà¤¤à¤¿à¤¤ à¤œà¥€à¤µà¥‹à¤‚ à¤•à¤¾ à¤‰à¤¦à¥à¤§à¤¾à¤° à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¹à¥€ à¤†à¤ªà¤•à¤¾ à¤¯à¤¹ à¤¦à¤¿à¤µà¥à¤¯ à¤…à¤µà¤¤à¤¾à¤° à¤¹à¥à¤† à¤¹à¥ˆà¥¤ à¤¹à¥‡ à¤ªà¥à¤°à¤­à¥! à¤®à¥‡à¤°à¥‡ à¤¸à¤®à¤¾à¤¨ à¤ªà¤¤à¤¿à¤¤ à¤œà¥€à¤µ à¤†à¤ªà¤•à¥‹ à¤¦à¥‚à¤¸à¤°à¤¾ à¤•à¥‹à¤ˆ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¥‡à¤—à¤¾, à¤…à¤¤à¤ƒ à¤†à¤ªà¤•à¥‡ à¤‰à¤¦à¥à¤§à¤¾à¤° à¤•à¥€ à¤ªà¤¹à¤²à¥€ à¤ªà¤¾à¤¤à¥à¤°à¤¤à¤¾ à¤®à¥‡à¤°à¥€ à¤¹à¥€ à¤¹à¥ˆ!",
        "à¤¹à¤¾ à¤¹à¤¾! à¤¹à¥‡ à¤ªà¥à¤°à¥‡à¤®à¤¾à¤¨à¤¨à¥à¤¦ à¤®à¥‡à¤‚ à¤¸à¤¦à¥ˆà¤µ à¤¸à¥à¤–à¥€ à¤°à¤¹à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤ªà¥à¤°à¤­à¥ à¤¶à¥à¤°à¥€ à¤¨à¤¿à¤¤à¥à¤¯à¤¾à¤¨à¤¨à¥à¤¦! à¤®à¥à¤ à¤ªà¤° à¤…à¤ªà¤¨à¥€ à¤•à¥ƒà¤ªà¤¾à¤¦à¥ƒà¤·à¥à¤Ÿà¤¿ à¤¡à¤¾à¤²à¤¿à¤, à¤•à¥à¤¯à¥‹à¤‚à¤•à¤¿ à¤®à¥ˆà¤‚ à¤…à¤¤à¥à¤¯à¤¨à¥à¤¤ à¤¦à¥à¤ƒà¤–à¥€ à¤”à¤° à¤¦à¥€à¤¨-à¤¹à¥€à¤¨ à¤¹à¥‚à¤à¥¤",
        "à¤¹à¥‡ à¤¸à¥€à¤¤à¤¾-à¤ªà¤¤à¤¿ à¤¶à¥à¤°à¥€ à¤…à¤¦à¥à¤µà¥ˆà¤¤ à¤—à¥‹à¤¸à¤¾à¤ˆà¤‚! à¤®à¥à¤ à¤ªà¤° à¤•à¥ƒà¤ªà¤¾ à¤•à¥€à¤œà¤¿à¤; à¤•à¥à¤¯à¥‹à¤‚à¤•à¤¿ à¤†à¤ªà¤•à¥‡ à¤•à¥ƒà¤ªà¤¾-à¤¬à¤² à¤¸à¥‡ à¤¹à¥€ à¤®à¥à¤à¥‡ à¤¶à¥à¤°à¥€ à¤šà¥ˆà¤¤à¤¨à¥à¤¯ à¤®à¤¹à¤¾à¤ªà¥à¤°à¤­à¥ à¤”à¤° à¤¶à¥à¤°à¥€ à¤¨à¤¿à¤¤à¥à¤¯à¤¾à¤¨à¤¨à¥à¤¦ à¤ªà¥à¤°à¤­à¥ à¤•à¥‡ à¤šà¤°à¤£-à¤•à¤®à¤² à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¹à¥‹ à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
        "à¤¹à¤¾ à¤¹à¤¾! à¤¹à¥‡ à¤¸à¥à¤µà¤°à¥‚à¤ª à¤¦à¤¾à¤®à¥‹à¤¦à¤°, à¤¸à¤¨à¤¾à¤¤à¤¨ à¤—à¥‹à¤¸à¥à¤µà¤¾à¤®à¥€, à¤°à¥‚à¤ª à¤—à¥‹à¤¸à¥à¤µà¤¾à¤®à¥€, à¤°à¤˜à¥à¤¨à¤¾à¤¥ à¤¦à¤¾à¤¸ à¤—à¥‹à¤¸à¥à¤µà¤¾à¤®à¥€, à¤°à¤˜à¥à¤¨à¤¾à¤¥ à¤­à¤Ÿà¥à¤Ÿ à¤—à¥‹à¤¸à¥à¤µà¤¾à¤®à¥€, à¤—à¥‹à¤ªà¤¾à¤² à¤­à¤Ÿà¥à¤Ÿ à¤—à¥‹à¤¸à¥à¤µà¤¾à¤®à¥€, à¤¶à¥à¤°à¥€ à¤œà¥€à¤µ à¤—à¥‹à¤¸à¥à¤µà¤¾à¤®à¥€ à¤”à¤° à¤¹à¥‡ à¤®à¥‡à¤°à¥‡ à¤ªà¥à¤°à¤¾à¤£à¤¨à¤¾à¤¥ à¤²à¥‹à¤•à¤¨à¤¾à¤¥ à¤—à¥‹à¤¸à¥à¤µà¤¾à¤®à¥€!",
        "à¤¹à¥‡ à¤ªà¥à¤°à¤­à¥ à¤¶à¥à¤°à¥€à¤¨à¤¿à¤µà¤¾à¤¸ à¤†à¤šà¤¾à¤°à¥à¤¯! à¤®à¥à¤ à¤ªà¤° à¤…à¤ªà¤¨à¥€ à¤•à¥ƒà¤ªà¤¾ à¤•à¥€à¤œà¤¿à¤à¥¤ à¤¯à¤¹ à¤¨à¤°à¥‹à¤¤à¥à¤¤à¤® à¤¦à¤¾à¤¸ à¤¸à¤¦à¥ˆà¤µ à¤†à¤ªà¤•à¥‡ à¤¶à¤¿à¤·à¥à¤¯ à¤¶à¥à¤°à¥€ à¤°à¤¾à¤®à¤šà¤¨à¥à¤¦à¥à¤° à¤•à¤µà¤¿à¤°à¤¾à¤œ à¤•à¥‡ à¤¸à¤‚à¤— à¤•à¥€ à¤¯à¤¾à¤šà¤¨à¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤"
      ]
    },
    "229": {
      title: "श्री-रूप-मञ्जरी-पद",
      transliterations: [
        "श्री-रूप-मञ्जरी-पद, सेइ मोर सम्पद, सेइ मोर भजन-पूजन।\nसेइ मोर प्राण-धन, सेइ मोर आभरण, सेइ मोर जीवनेर जीवन॥",
        "सेइ मोर रस-निधि, सेइ मोर वाञ्छा-सिद्धि, सेइ मोर वेदेर धरम।\nसेइ ब्रत, सेइ तप, सेइ मोर मन्त्र-जप, सेइ मोर धरम करम॥",
        "अनुकूल हबे कबे, हे बाञ्छा पूरिबे, हेरब ए दुइ नयने।\nसे रूप-लावण्य-राशि, सखीर स्नेह-हासि, जुड़ाबे जीवन जुड़ाने॥",
        "श्री-रूप-मञ्जरी-सङ्गे, सेविब अमन्द-रङ्गे, जुगल-चरण-सुधा-रस।\nनरोत्तम दास कय, एइ कृपा हउक मय, सदा जेन हइ तव वश॥"
      ],
      translations: [
        "श्री रूप मंजरी के चरण-कमल ही मेरी वास्तविक सम्पत्ति हैं, वे ही मेरा भजन और पूजन हैं। वे ही मेरे प्राण-धन हैं, वे ही मेरे आभूषण हैं और वे ही मेरे जीवन के जीवन हैं।",
        "वे ही मेरे रस के सागर हैं, वे ही मेरी समस्त अभिलाषाओं की सिद्धि हैं और वे ही मेरे वेदोक्त धर्म हैं। वे ही मेरा व्रत हैं, वे ही तपस्या हैं, वे ही मन्त्र-जप और मेरा नित्य कर्म-धर्म हैं।",
        "कब वे मुझ पर प्रसन्न होंगी और मेरी अभिलाषा पूर्ण होगी, कब मैं अपने इन दोनों नेत्रों से उनके दिव्य रूप-लावण्य और सखियों की स्नेह-भरी मधुर मुस्कान के दर्शन कर अपने जीवन को शीतल करूँगा?",
        "श्री रूप मंजरी के अनुगत्य में परम आनन्द के साथ मैं श्री श्री राधा-कृष्ण के युगल-चरणों के सुधामृत रस की सेवा करूँगा। नरोत्तम दास कहते हैं कि मुझ पर ऐसी कृपा हो कि मैं सदा आपके वशीभूत रहूँ।"
      ]
    },
    "233": {
      title: "à¤®à¥à¤•à¥à¤¨à¥à¤¦à¤®à¤¾à¤²à¤¾ à¤¸à¥à¤¤à¥‹à¤¤à¥à¤° (Mukunda-mÄlÄ-stotra)",
      transliterations: [
        "श्रीवल्लभेति वरदेति दयापरेति\nभक्तप्रियेति भवलुण्ठनकोविदेति।\nनाथेति नागशयनेति जगन्निवासे-\nत्यालापिनं प्रति-दिनं कुरु मां मुकुन्द॥ १॥",
        "जयतु जयतु देवो देवकीनन्दनोऽयं\nजयतु जयतु कृष्णो वृष्णिवंशप्रदीपः।\nजयतु जयतु मेघश्यामलो कोमलाङ्गो\nजयतु जयतु पृथ्वीभारनाशो मुकुन्दः॥ २॥",
        "मुकुन्द मूर्ध्ना प्रणिपत्य याचे\nभवन्तमेकान्तमियन्तमर्थम्।\nअविस्मृतिस्त्वच्चरणारविन्दे\nभवे भवे मेऽस्तु भवत्प्रसादात्॥ ३॥",
        "नाहं वन्दे तव चरणयोर्द्वन्द्वमद्वन्द्वहेतोः\nकुम्भीपाकं गुरुमपि हरे नारकं नापनेतुम्।\nरम्यारामामृदुतनुुलतानन्दने नापि रन्तुं\nभावे भावे हृदयभवने भावयेयं भवन्तम्॥ ४॥",
        "नास्था धर्मे न वसुनिचये नैव कामोपभोगे\nयद्भाव्यं तद्भवतु भगवन्पूर्वकर्मानुरूपम्।\nएतत्प्रार्थ्यं मम बहु मतं जन्मजन्मान्तरेऽपि\nत्वत्पादाम्भोरुहयुगगता निश्चला भक्तिरस्तु॥ ५॥",
        "दिवि वा भुवि वा ममास्तु वासो\nनरके वा नरकान्तक प्रकामम्।\nअवधीरितशारदारविन्दौ\nचरणौ ते मरणेऽपि चिन्तयामि॥ ६॥",
        "चिन्तयामि हरिमेव सन्ततं\nमन्दहासमुदिताननाम्बुजम्।\nनन्दगोपतनयं परात्परं\nनारदादिमुनिवृन्दवन्दितम्॥ ७॥",
        "करचरणसरोजे कान्तिमान्नेत्रमीने\nश्रममुषि भुजवीचिव्याकुलेऽगाधमार्गे।\nहरिसरसि विगाह्यापीय तेजोजलौघं\nभवमरुपरिखिन्नः क्लेशमद्य त्यजामि॥ ८॥",
        "सरसिजनयने सशङ्खचक्रे\nमुरभिदि मा विरमस्व चित्त रन्तुम्।\nसुखतरमपरं न जातु जाने\nहरिचरणस्मरणामृतेन तुल्यम्॥ ९॥",
        "माभीर्मन्दमनो विचिन्त्य बहुधा यामीश्चिरं यातना\nनैवामी प्रभवन्ति पापरिपुवः स्वामी ननु श्रीधरः।\nआलस्यं व्यपनीय भक्तिसुलभं ध्यायस्व नारायणं\nलोकस्य व्यसनापनोदनकरो दासस्य किं न क्षमः॥ १०॥",
        "भवजलधिगतानां द्वन्द्ववाताहतानां\nसुतदुहितृकलत्रत्राणभारार्दितानाम्।\nविषमविषयतोये मज्जतामाप्लवानां\nभवति शरणमेको विष्णुपोतो नराणाम्॥ ११॥",
        "भवजलधिमगाधं दुस्तरं निस्तरेयं\nकथमहमिति चेतो मा स्म गाः कातरत्वम्।\nसरसिजदृशि देवे तारकी भक्तिरेका\nनरकभिदि निषण्णा तारयिष्यत्यवश्यम्॥ १२॥",
        "तृष्णातोये मदनपवनोद्धूतमोहोर्मिमाले\nदारावर्ते तनयसहजग्राहसङ्घाकुले च।\nसंसाराख्ये महति जलधौ मज्जतां नस्त्रिधामन्\nपादाम्भोजे वरद भवतो भक्तिनावं प्रयच्छ॥ १३॥",
        "पृथ्वी रेणुरणुः पयांसि कणिकाः फल्गुः स्फुलिङ्गो लघु-\nस्तेजो निःश्वसनं मरुत्तनुतरं रन्ध्रं सुसूक्ष्मं नभः।\nक्षुद्रा रुद्रपितामहप्रभृतयः कीटाः समस्ताः सुरा\nदृष्टे यत्र स तारको विजयते श्रीपादधूलिकणः॥ १४॥",
        "हे लोकाः शृणुत प्रसूतिमरणव्याधेश्चिकित्सामिमां\nयोगज्ञाः समुदाहरन्ति मुनयो यां याज्ञवल्क्यादयः।\nअन्तर्ज्योतिरमेयमेकममृतं कृष्णाख्यमापीयतां\nतत्पीतं परमौषधं वितनुते निर्वाणमात्यन्तिकम्॥ १५॥",
        "हे मर्त्याः परमं हितं शृणुत वो वक्ष्यामि संक्षेपतः\nसंसारार्णवमापदूर्मिबहुलं सम्यक् प्रविश्य स्थिताः।\nनानाज्ञानमपास्य चेतसि नमो नारायणायेत्यमुं\nमन्त्रं सप्रणवं प्रणामसहितं प्रावर्तयध्वं मुहुः॥ १६॥",
        "नाथे नः पुरुषोत्तमे त्रिजगतामेकाधिपे चेतसा\nसेव्ये स्वस्य पदस्य दातरि परे नारायणे तिष्ठति।\nयं कञ्चित्पुरुषाधमं कतिपयग्रामेशमल्पार्थदं\nसेवावै मृगयामहे नरमहो मूढा वराका वयम्॥ १७॥",
        "बद्धेनाञ्जलिना नतेन शिरसा गात्रैः सरोमोद्गमैः\nकण्ठेन स्वरगद्गदेन नयनेनोद्गीर्णबाष्पाम्बुना।\nनित्यं त्वच्चरणारविन्दयुगलध्यानामृतास्वादिना-\nमस्माकं सरसीरुहाक्ष सततं सम्पद्यतां जीवितम्॥ १८॥",
        "यत्कृष्णप्रणिपातधूलिधवलं तद्धर्म तद्वै शिर-\nस्ते नेत्रे तमसोझिते सुरुचिरे याभ्यां हरिर्दृश्यते।\nसा बुद्धिविमलेन्दुशङ्खधवला या माधवध्यायिनी\nसाजिह्वामृतवर्षिणी प्रतिपदं या स्तौति नारायणम्॥ १९॥",
        "जिह्वे कीर्तय केशवं मुररिपुं चेतो भज श्रीधरं\nपाणिद्वन्द्व समर्चयाच्युतकथाः श्रोत्रद्वय त्वं शृणु।\nकृष्णं लोकय लोचनद्वय हरेर्गच्छाङ्घ्रियुग्मालयं\nजिघ्र घ्राण मुकुन्दपादतुलसीं मूर्धन्नमाधोक्षजम्॥ २०॥",
        "आम्नायाभ्यसनान्यरन्यरुदितं वेदव्रतान्यन्वहं\nमेदश्छेदफलानि पूर्तविधयः सर्वं हुतं भस्मनि।\nतीर्थानामवगाहनानि च गजस्नानं विना यत्पद-\nद्वन्द्वाम्भोरुहसंस्मृतिं विजयते देवः स नारायणः॥ २१॥",
        "मदन परिहर स्थितिं मदीये\nमनसि मुकुन्दपदारविन्दधाम्नि।\nहरनयनकृशानुना कृशोऽसि\nस्मरसि न चक्रपराक्रमं मुरारेः॥ २२॥",
        "नाथे धातरि भोगिभोगशयने नारायणे माधवे\nदेवे देवकिनन्दने सुरवरे चक्रायुधे शार्ङ्गिणि।\nलीलाशेषजगत्प्रपञ्चजठरे विश्वेश्वरे श्रीधरे\nगोविन्दे कुरु चित्तवृत्तिमचलामल्यैस्तु किं वर्तनैः॥ २३॥",
        "मा द्राक्षं क्षीणपुण्यान् क्षणमपि भवतो भक्तिहीनान्पदाब्जे\nमा श्रौषं श्राव्यबन्धं तव चरितमपास्यान्यदाख्यानजातम्।\nमा स्मार्षं माधव त्वामपि भुवनपते चेतसापह्रुवानान्\nमा भूवं त्वत्सपर्याव्यतिकररहितो जन्मजन्मान्तरेऽपि॥ २४॥",
        "मज्जन्मनः फलमिदं मधुकैटभारे\nमत्प्रार्थनीयमदनुग्रह एष एव।\nत्वद्भृत्यभृत्यपरिचारकभृत्यभृत्य-\nभृत्यस्य भृत्य इति मां स्मर लोकनाथ॥ २५॥",
        "तत्त्वं ब्रुवाणानि परं परस्तान्\nमधु क्षरन्तीव मुदावहानि।\nप्रावर्तय प्राञ्जलिरस्मि जिह्वे\nनामानि नारायणगोचराणि॥ २६॥",
        "नमामि नारायणपादपङ्कजं\nकरोमि नारायणपूजनं सदा।\nवदामि नारायणनामनिर्मलं\nस्मरामि नारायणतत्त्वमव्ययम्॥ २७॥",
        "श्रीनाथ नारायण वासुदेव\nश्रीकृष्ण भक्तप्रिय चक्रपाणे।\nश्रीपद्मनाभाच्युत कैटभारे\nश्रीराम पद्माक्ष हरे मुरारे॥ २८॥",
        "अनन्त वैकुण्ठ मुकुन्द कृष्ण\nगोविन्द दामोदर माधवेति।\nवक्तुं समर्थोऽपि न वक्ति कश्चिद्\nअहो जनानां व्यसनाभिमुख्यम्॥ २९॥",
        "भक्तापायभुजाङ्गगारुडमणिस्त्रैलोक्यरक्षामणि-\nर्गोपीलोचनचातकाम्बुदमणिः सौन्दर्यमुद्रामणिः।\nयः कान्तामणिरुक्मिणीघनकुचद्वन्द्वैकभूषामणिः\nश्रेयो देवशिखामणिर्दिशतु नो गोपालचूड़ामणिः॥ ३०॥",
        "शत्रुच्छेदैकमन्त्रं सकलमुपनिषद्वक्यसम्पूज्यमन्त्रं\nसंसारोच्छेदमन्त्रं समुचिततमसः सङ्घनिर्याणमन्त्रम्।\nसर्वैश्वर्यैकमन्त्रं व्यसनभुजगसन्दष्टसन्त्राणमन्त्रं\nजिह्वे श्रीकृष्णमन्त्रं जप जप सततं जन्मसाफल्यमन्त्रम्॥ ३१॥",
        "व्यामोहप्रशमौषधं मुनिमनोवृत्तिप्रवृत्त्यौषधं\nदैत्येन्द्रार्तिकरौषधं त्रिभुवने सञ्जीवनैकौषधम्।\nभक्तात्यन्तहितौषधं भवभयप्रध्वंसनैकौषधं\nश्रेयःप्राप्तिकरौषधं पिब मनः श्रीकृष्णदिव्यौषधम्॥ ३२॥",
        "कृष्ण त्वदीयपदपङ्कजपञ्जरान्त-\nमद्यैव मे विशतु मानसराजहंसः।\nप्राणप्रयाणसमये कफवातपित्तैः\nकण्ठावरोधनविधौ स्मरणं कुतस्ते॥ ३३॥",
        "चेतश्चिन्तय कीर्तयस्व रसने नम्रीभव त्वं शिरो\nहस्तावाञ्जलिसम्पुटं रचयतं वन्दस्व दीर्घं वपुः।\nआत्मन्संश्रय पुण्डरीकनयनं नागाचलेन्द्रस्थितं\nधन्यं पुण्यतमं तदेव परमं दैवं हि तत्सिद्धये॥ ३४॥",
        "शृण्वञ्जनार्दनकथागुणकीर्तनानि\nदेहे न यस्य पुलकोद्गमोमराजिः।\nनोत्पद्यते नयनयोर्विमलाम्बुमाला\nधिक् तस्य जीवितमहो पुरुषाधमस्य॥ ३५॥",
        "अन्धस्य मे हृतविवेकमहाधनस्य\nचौरैः प्रभो बलिभिरिन्द्रियनामधेयैः।\nमोहान्धकूपकुहरे विनिपातितस्य\nदेवेश देहि कृपणस्य करावलम्बम्॥ ३६॥",
        "इदं शरीरं परिणामपेशलं\nपतत्यवश्यं शतसन्धिजर्जरम्।\nकिमौषधं पृच्छसि मूढ दुर्मते\nनिरामयं कृष्णरसायनं पिब॥ ३७॥",
        "आश्चर्यमेतद्धि मनुष्यलोके\nसुधां परित्यज्य विषं पिबन्ति।\nनामानि नारायणगोचराणि\nत्यक्त्वान्यवादः कुहकाः पठन्ति॥ ३८॥",
        "त्यजन्तु बान्धवाः सर्वे निन्दन्तु गुरवो जनाः।\nतथापि परमानन्दो गोविन्दो मम जीवनम्॥ ३९॥",
        "सत्यं ब्रवीमि मनुजाः स्वयमूर्ध्वबाहु-\nर्यो यो मुकुन्द नरसिंह जनार्दनेति।\nजीवो जपत्यनुदिनं मरणे रणे वा\nपाषाणकाष्ठसदृशाय ददात्यभीष्टम्॥ ४०॥",
        "नारायणाय नम इत्यमुमेव मन्त्रं\nसंसारघोरविषनिर्हरणाय नित्यम्।\nशृण्वन्तु भव्यमतयो यतयोऽनुरागाद्\nउच्चैस्तरामुपदिशाम्यहमूर्ध्वबाहुः॥ ४१॥",
        "चित्तं नैव निवर्तते क्षणमपि श्रीकृष्णपादाम्बुजान्\nनिन्दन्तु प्रियबान्धवा गुरुजना गृह्णन्तु मुञ्चन्तु वा।\nदुर्वादं परिघोषयन्तु मनुजा वंशे कलङ्कोऽस्तु वा\nतादृक्प्रेमधरानुरागमधुना मत्ताय मानं तु मे॥ ४२॥",
        "कृष्णो रक्षतु नो जगत्त्रयगुरुः कृष्णं नमध्वं सदा\nकृष्णेनाखिलशत्रवो विनिहताः कृष्णाय तस्मै नमः।\nकृष्णादेव समुत्थितं जगदिदं कृष्णस्य दासोऽस्म्यहं\nकृष्णे तिष्ठति विश्वमेतदखिलं हे कृष्ण रक्षस्व माम्॥ ४३॥",
        "हे गोपालक हे कृपाजलनिधे हे सिन्धुकन्यापते\nहे कंसान्तक हे गजेन्द्रकरुणापारीण हे माधव।\nहे रामानुज हे जगत्त्रयगुरो हे पुण्डरीकाक्ष मां\nहे गोपीजननाथ पालय परं जानामि न त्वां विना॥ ४४॥",
        "दारा वाराकरवरसुता ते तनूजो विरिञ्चिः\nस्तोता वेदस्तव सुरगणा भृत्यवर्गः प्रसादः।\nमुक्तिर्माया जगदविकलं तावकी देवकी ते\nमाता मित्रं बलरिपुसुतस्तत्त्वदन्यं न जाने॥ ४५॥",
        "प्रणाममीशस्य शिरःफलं विदु-\nस्तदर्चनं प्राणफलं दिवौकसः।\nमनःफलं तद्गुणतत्त्वचिन्तनं\nवचःफलं तद्गुणकीर्तनं बुधाः॥ ४६॥",
        "श्रीमन्नाम प्रोच्य नारायणाख्यं\nके न प्रापुर्वाञ्छितं पापिनोऽपि।\nहा नः पूर्वं वाक्प्रवृत्ता न तस्मिं-\nस्तेन प्राप्तं गर्भवासादिदुःखम्॥ ४७॥",
        "ध्यायन्ति ये विष्णुमनन्तमव्ययं\nहृत्पद्ममध्ये सततं व्यवस्थितम्।\nसमाहितानां सततभयप्रदं\nते यान्ति सिद्धिं परमां तु वैष्णवीम्॥ ४८॥",
        "तत्त्वं प्रसीद भगवन्कुरु मय्यनाथे\nविष्णो कृपां परमकारुणिकः खलु त्वम्।\nसंसारसागरनिमग्नमनन्त दीन-\nमुद्धर्तुमर्हसि हरे पुरुषोत्तमोऽसि॥ ४९॥",
        "क्षीरसागरतरङ्गशीकरा-\nसारतारकितचारुमूर्तये।\nभोगिभोगशयनीयशायिने\nमाधवाय मधुविद्विषे नमः॥ ५०॥",
        "अलमलमलमेका प्राणिनां पातकानां\nनिरसनविषये या कृष्ण कृष्णेति वाणी।\nयदि भवति मुकुन्दे भक्तिरानन्दसान्द्रा\nकरतलकलिता सा मोक्षसाम्राज्यलक्ष्मीः॥ ५१॥",
        "यस्य प्रियौ श्रुतिधरौ कविलोकवीरौ\nमित्रौ द्विजन्मवरपद्मशरावभूताम्।\nतेनाम्बुजाक्षचरणाम्बुजषट्पदेन\nराज्ञा कृता कृतिरियं कुलशेखरेण॥ ५२॥",
        "मुकुन्दमालां पठतां नराणा-\nमशेषसौख्यं लभते न कः स्वित्।\nसमस्तपापक्षयमेत्य देही\nप्रयाति विष्णोः परमं पदं तत्॥ ५३॥"
      ],
      translations: [
        "हे मेरे स्वामी मुकुन्द! कृपा करके आप मुझे अपने नामों का निरन्तर कीर्तन करने वाला बनने दीजिये, जिससे मैं आपको इस तरह सम्बोधित कर सकूं—श्रीवल्लभ (जो लक्ष्मी को अत्यन्त प्रिय हैं), वरद (जो वर देने वाले हैं), दयापर (जो अहैतुक रूप से दयालु हैं), भक्तप्रिय (जो अपने भक्तों को अति प्रिय हैं), भव-लुण्ठन-कोविद (जो जन्म-मृत्यु के चक्कर को समाप्त करने में दक्ष हैं), नाथ (परमेश्वर), जगन्-निवास (ब्रह्माण्ड के आश्रय) तथा नाग-शयन (नागशय्या पर लेटने वाले)।",
        "श्रीमती देवकीदेवी के पुत्र के रूप में विख्यात पुरुषोत्तम भगवान् की जय हो! वृष्णि वंश के उज्ज्वल प्रकाश भगवान् कृष्ण की जय हो! उन भगवान् की जय हो, जिनके कोमल शरीर का रंग नवीन बादल के श्यामल वर्ण जैसा है! उन भगवान् मुकुन्द की जय हो, जो पृथ्वी के भार को हटाने वाले हैं!",
        "हे भगवान् मुकुन्द! मैं आपके समक्ष नतमस्तक हूँ और आपसे आदरपूर्वक याचना करता हूँ कि आप मेरी इस एक इच्छा को पूरा करें कि मैं अपने प्रत्येक भावी जन्म में आपके चरणकमलों का सदा ही स्मरण करता रहूँ और उन्हें कभी न भूलूँ।",
        "हे भगवान् हरि! मैं न तो भौतिक संसार के द्वैतों से, न ही कुम्भीपाक नरक के दारुण कष्टों से अपने आपको बचाये जाने के लिए आपके चरणकमलों की वन्दना कर रहा हूँ। न ही मेरा उद्देश्य नन्दनकानन में निवास करने वाली कोमल त्वचा वाली सुन्दरियों का भोग करना है। मैं तो आपके चरणकमलों पर इसलिए प्रार्थना करता हूँ कि मैं जन्म-जन्मान्तर अपने हृदय के अन्तर्भाग में एकमात्र आपका स्मरण कर सकूँ।",
        "हे प्रभु! मेरी अनुरक्ति न तो धर्म में है, न ही धन संचय करने में और न ही इन्द्रियतृप्ति में। ये सब मेरे विगत कर्मों के अनुसार अनिवार्यतः आते हैं, तो आएँ। किन्तु मैं इस अत्यन्त मनवांछित वरदान के लिए प्रार्थना करता हूँ कि जन्म-जन्मान्तर आप मुझे अपने दोनों चरणकमलों की अचल भक्ति सम्पन्न करने दें।",
        "नरकासुर का वध करने वाले हे प्रभु! आप जहाँ भी चाहें—देवलोक, मनुष्यलोक या नरक में—मुझे निवास दें। मेरी एकमात्र यही विनती है कि मृत्यु के समय मैं आपके उन युगल चरणकमलों का स्मरण कर सकूँ, जिनका सौन्दर्य शरत्कालीन कमल को चुनौती देने वाला है।",
        "मैं सदैव भगवान् हरि का चिन्तन करता हूँ, जिनके कमल समान प्रसन्न मुखमण्डल में मृदु मुस्कान बनी रहती है। यद्यपि वे नन्द गोप के पुत्र हैं, वे परम पूर्ण सत्य भी हैं, जो नारद जैसे महान् मुनियों द्वारा पूजित हैं।",
        "भौतिक अस्तित्व रूपी मरुस्थल ने मुझे थका दिया है। किन्तु आज मैं भगवान् हरि रूपी झील में गोता लगाकर और उनके तेज रूपी अगाध जल का मुक्त भाव से पान करके सारे कष्टों को एक ओर फेंक दूँगा। भगवान् के हाथ पाँव उस झील में खिले कमल हैं और उनकी चमकीली आँखें मछलियाँ हैं। उस झील का जल समस्त थकान को मिटाने वाला है और वह भगवान् के हाथों द्वारा उत्पन्न लहरों से उद्वेलित रहता है। उसकी धारा अथाह गहरी बहती है।",
        "हे मन, तुम उन कमल सदृश नेत्रवाले तथा शंख एवं चक्र धारण करने वाले मुर राक्षस के संहारक के विषय में चिन्तन करने से मिलने वाले आनन्द को प्राप्त करने से कभी रुकना नहीं। वस्तुतः मुझे अन्य ऐसी कोई वस्तु ज्ञात नहीं है, जो भगवान् हरि के दैवी चरणों का ध्यान करने जैसा अगाध आनन्द देने वाली हो।",
        "अरे मूर्ख मन! तुम यमराज द्वारा दी जाने वाली यातनाओं के बारे में बार बार सोचना बन्द करो। तुम्हारे शत्रु, जो तुम्हारे द्वारा किये गये पापों के कर्मफल हैं, भला तुम्हें कैसे छू सकते हैं? क्या तुम्हारे स्वामी परमेश्वर नहीं हैं, जो लक्ष्मी देवी के पति हैं? तुम सारा संकोच दूर करके अपने विचारों को उन भगवान् नारायण पर एकाग्र करो, जिन्हें भक्तिमय सेवा द्वारा आसानी से प्राप्त किये जा सकते हैं। सम्पूर्ण संसार के कष्टों को दूर करने वाले भला अपने दास के लिए क्या नहीं कर सकते?",
        "जन्म-मृत्यु के इस विस्तृत सागर में भौतिक द्वन्द्वों के झोंके लोगों को उड़ाये ले जा रहे हैं। जब वे इन्द्रियलिप्तता के विषम जल में थपेड़े खाते रहते हैं और उनकी सहायता के लिए कोई नाव नहीं रहती, तो वे अपने पुत्रों, पुत्रियों तथा पत्नियों को बचाने की आवश्यकता के कारण अत्यन्त दुःखी रहते हैं। उन्हें केवल विष्णु रूपी नाव ही बचा सकती है।",
        "हे मन! तुम यह सोचकर मत व्यग्र हो कि मैं इस भौतिक अस्तित्व वाले संसार रूपी अगाध तथा दुर्लङ्घ्य सागर को कैसे पार कर सकूँगा? तुम्हें यदि कोई बचा सकता है, तो वह भक्ति है। यदि तुम इस भक्ति को नरकासुर के विनाशकर्ता कमलनयन भगवान् को अर्पित कर सको, तो यह भक्ति तुम्हें निश्चित रूप से समुद्र के उस पार ले जाएगी।",
        "हे तीनों लोकों के स्वामी! हम इस संसार रूपी अगाध सागर में डूब रहे हैं, जो भौतिक लालसाओं रूपी जल से भरा हुआ है, जिसमें मोह रूपी अनेक लहरें उठ रही हैं, जो वासना रूपी हवाओं के द्वारा विलोड़ित है। इस सागर में पत्नी रूपी भँवर हैं और हमारे पुत्र तथा भ्राता रूपी शार्कों तथा अन्य समुद्री दैत्यों के विशाल झुंड हैं। हे समस्त वरों के दाता! कृपा करके अपने चरणकमल रूपी भक्ति की नाव पर मुझे स्थान दें।",
        "एकबार अपने रक्षक के दर्शन पा लेने के बाद सारी पृथ्‍वी धूलकण सदृश बन जाती है, समुद्र का सारा जल मात्र बूंदें बन जाता है, अग्नि क्षुद्र चिनगारी बन जाती है, वायु हल्की आह बनकर रह जाती है और विस्तृत आकाश एक लघु छिद्र बन जाता है। रुद्र तथा पितामह ब्रह्मा जैसे महान् देवता तुच्छ बन जाते हैं और सारे देवता छोटे छोटे कीटों के समान लगने लगते हैं। निस्सन्‍देह, अपने प्रभु के चरणों की धूल का एक कण सभी को जीत लेता है।",
        "अरे लोगों! जन्म तथा मृत्यु के रोग के लिए यह उपचार सुनो! यह कृष्ण का नाम है। इसकी संस्तुति याज्ञवल्क्य तथा अन्य ज्ञानी पटु योगियों ने की है। यह असीम नित्य आन्तरिक प्रकाश सर्वश्रेष्ठ औषधि है, क्योंकि पीने पर यह पूर्ण तथा चरम मोक्ष देने वाली है। जरा इसे पियो तो!",
        "हे मरणशील मनुष्यों, तुम लोगों ने अपने आपको संसार-सागर में पूर्णतया डूबोकर रखा है, जो विपत्ति रूपी लहरों से पूरित है। कृपया सुनो, जैसे मैं तुम लोगों को संक्षेप में बतला रहा हूँ कि अपने परम लाभ को किस तरह प्राप्त किया जाये। तुम लोग ज्ञान प्राप्त करने के विविध प्रयासों को ताक में रखकर ॐ नमो नारायणाय मन्त्र का निरन्तर जप करना तथा भगवान् को सिर झुकाकर प्रणाम करना प्रारम्भ कर दो।",
        "हमारे स्वामी भगवान् नारायण, जो अकेले तीनों लोकों में शासन करते हैं, जिनकी सेवा ध्यान में की जा सकती है और जो अपने निजी धाम में प्रसन्नतापूर्वक सबों को स्थान देते हैं, वे हमारे समक्ष प्रकट हैं। फिर भी हम कुछ गाँवों के किसी छोटे स्वामी की, ऐसे निम्न पुरुष की, जो हमें छोटा पुरस्कार दे सकता है, सेवा करने की याचना करते हैं। हाय! हम कितने मूढ़ हैं!",
        "हे कमलनयन भगवान्! कृपया हमारे जीवन का भरणपोषण करें, क्योंकि हम आपके चरणकमलों के ध्यान रूपी अमृत का निरन्तर आस्वाद ले रहे हैं; हमारी हथेलियाँ स्तुति के लिए जुड़ी हुई हैं, हम नतमस्तक हैं, हर्ष में हमारे शरीर के सारे रोम खड़े हैं, भावुकता से हमारी वाणी रुद्ध है और हमारे नेत्रों से आँसू बह रहे हैं।",
        "जो सिर भगवान् कृष्ण के सामने झुकने से लगी धूल से धवल है, वही सर्वोच्च है। वे आँखें सर्वाधिक सुन्दर हैं, जिन्होंने भगवान् हरि का दर्शन करने के बाद अन्धकार को त्याग दिया है। वह बुद्धि जो भगवान् माधव पर एकाग्र रहती है, वह उसी तरह विमल है, जिस तरह चन्द्रमा या शंख का उज्ज्वल तेज होता है। और वह जीभ अमृत वर्षा करती है, जो निरन्तर भगवान् नारायण की महिमा का गान करती है।",
        "हे जीभ, तुम भगवान् केशव के यश का गुणगान करो। हे मन, तुम मुर के शत्रु की पूजा करो। हे हाथो, तुम श्रीपति की सेवा करो। हे कानो, तुम भगवान् अच्युत की कथाएँ सुनो। हे आँखो, तुम श्रीकृष्ण को निहारो। हे पाँवो, तुम भगवान् हरि के मन्दिर जाओ। हे नाक, तुम भगवान् मुकुन्द के चरणों पर चढ़ी तुलसी-मंजरियों को सूंघो। हे सिर, तुम भगवान् अधोक्षज को नमन करो।",
        "भगवान् नारायण की जय हो! उनके चरणकमलों के स्मरण के बिना शास्त्रों का पाठ यों ही अरण्यरोदन जैसा है, वेदों द्वारा आदिष्ट कठिन व्रतों का नियमित रूप से पालन करना शरीर का मोटापा कम करने की विधि के अलावा और कुछ नहीं है। निर्दिष्ट पुण्य कर्मों को सम्पन्न करना मानो राख में आहुतियाँ डालना है और विभिन्न पवित्र स्थानों में स्नान करना गजस्नान के समान है।",
        "हे कामदेव, तुम मेरे मन में बने अपने आवास को छोड़ दो, क्योंकि अब वह भगवान् मुकुन्द के चरणकमलों का निवास स्थान है। तुम पहले ही शिव की प्रचण्ड चितवन से भस्म किये जा चुके हो, तो फिर तुम भगवान् मुरारी के चक्र की शक्ति को क्यों भूल गये?",
        "हे मनुष्यो, अपने एकमात्र स्वामी तथा पालनकर्ता भगवान् का चिन्तन करो, जो नारायण तथा माधव कहलाते हैं और जो अनन्त नाग के शरीर पर शयन करते हैं। वे देवकी के लाड़ले पुत्र, देवताओं के नायक तथा गौवों के स्वामी हैं। वे शंख तथा शार्ङ्ग धनुष धारण करते हैं। वे लक्ष्मी के पति हैं तथा उन समस्त ब्रह्माण्डों के नियन्ता हैं, जिन्हें लीला के रूप में वे अपने उदर से प्रकट करते हैं। तुम उनके अतिरिक्त अन्य किसी के बारे में सोचकर क्या पाओगे?",
        "हे माधव, आप उन लोगों पर मेरी दृष्टि भी न जाने दें, जिनके पुण्यकर्म इतने क्षीण हो चुके हैं कि उन्हें आपके चरणकमलों में कोई अनुरक्ति नहीं है। कृपया आप मुझे अपनी लीलाओं के बारे में सुनने से ध्यान न हटाने दें, जिससे कि मैं अन्य कथाओं में रुचि लेने लगूँ। हे ब्रह्माण्ड के स्वामी! मैं उन लोगों पर ध्यान न दूँ, जो आपके विषय में चिन्तन करने से दूर रहना चाहते हैं और आप मुझे कभी भी जन्म-जन्मान्तर अपनी तुच्छ से भी तुच्छ सेवा करने में असमर्थ न बनने दें।",
        "हे मधु तथा कैटभ के शत्रु, हे ब्रह्माण्ड के स्वामी, मेरे जीवन की पूर्णता तथा मुझ पर आप जो सर्वाधिक अभिलषित दया दिखा सकते हैं, वह यही होगी कि आप मुझे अपने दास के दास के दास के दास के दास के दास का दास मानें।",
        "मेरी प्रिय जीभ, मैं हाथ जोड़कर तुम्हारे समक्ष खड़ा हूँ और तुम से भगवान् नारायण के नाम गाकर सुनाने के लिए प्रार्थना करता हूँ। परम पूर्ण सत्य का बखान करने वाले ये नाम अति आनन्द प्रदान करते हैं, मानो उनसे शहद टपक रहा हो।",
        "मैं प्रतिक्षण शीश झुकाकर नारायण के चरणकमलों को नमस्कार करता हूँ, नारायण की पूजा करता हूँ। मैं नारायण के शुद्ध नाम का उच्चारण करता हूँ और नारायण के अचूक सत्य का ध्यान करता हूँ।",
        "हे श्रीनाथ, नारायण, वासुदेव, दिव्य कृष्ण! हे अपने भक्तों के दयालु मित्र! हे चक्रपाणि, पद्मनाभ, अच्युत, कैटभारि, राम, पद्माक्ष, हरि, मुरारी!",
        "हे अनन्त, वैकुण्ठ, मुकुन्द, कृष्ण, गोविन्द, दामोदर, माधव! यद्यपि सारे लोग आपको (यों) पुकार सकते हैं किन्तु वे चुप रहते हैं। देखो न, वे अपने ही संकट के लिए कैसे उत्सुक हैं!",
        "अपने पंखों पर भगवद्भक्तों को ले जाने वाले गरुड़ की पीठ पर सवार वे (कृष्ण) मणि हैं। वे वह चमत्कारी मणि हैं, जो तीनों लोकों की रक्षा करने वाला है। वे मणि सदृश बादल हैं, जो गोपियों के चातक (पपीहा) सदृश नेत्रों को आकृष्ट करने वाले हैं और वे उन सबों के बीच मणितुल्य हैं, जो बहुत ही भद्रतापूर्वक भावभंगिमा दिखाते हैं। वे उन महारानी रुक्मिणी के विपुल स्तनों पर एकमात्र मणिजटित आभूषण हैं, जो स्वयं ही प्रेयसियों की मणिरूपा हैं। समस्त देवताओं के चूड़ामणि स्वरूप, गोपों में सर्वश्रेष्ठ, वे हमें परम आशीष प्रदान करें।",
        "हे जीभ, तुम कृपया श्रीकृष्ण के नामों से रचे गये मन्त्र का निरन्तर जप करो। यह समस्त शत्रुओं का विनाश करने के लिए एकमात्र मन्त्र है। यह मन्त्र उपनिषदों के प्रत्येक शब्द द्वारा पूजित है, यह मन्त्र संसार को समूल नष्ट करता है, यह मन्त्र अज्ञान के सारे अन्धकार को भगाता है। यह अनन्त ऐश्वर्य प्राप्त करने, सांसारिक क्लेश रूपी विषैले साँप द्वारा डसे गये लोगों को अच्छा करने और इस संसार में जन्म को सफल बनाने वाला मन्त्र है।",
        "मेरे मन! तुम कृपया श्रीकृष्ण की महिमा रूपी दिव्य औषधि का पान करो। यह मोह रूपी रोग को ठीक करने, मुनियों को अपने मन को ध्यान में लीन करने के लिए प्रोत्साहित करने तथा बलशाली दैत्यों को यातना देने के लिए परिपूर्ण औषधि है। यह तीनों लोकों को पुनः जीवनदान देने और भगवान् के भक्तों को असीम वर प्रदान करने के लिए एकमात्र औषधि है। वस्तुतः यह एकमात्र औषधि है, जो किसी के भी भौतिक अस्तित्व के भय को नष्ट कर सकती है तथा उसे परम कल्याण की प्राप्ति करा सकती है।",
        "हे भगवान् कृष्ण, इस समय मेरे मन रूपी राजहंस को अपने चरणकमल के डण्ठल के जाल में प्रवेश करने दें। मृत्यु के समय जब मेरा गला कफ, वात तथा पित्त से अवरुद्ध हो जाएगा, तब मेरे लिए आपका स्मरण करना कैसे सम्भव हो सकेगा?",
        "हे मन, उन कमलनयन भगवान् का चिन्तन करो, जो पर्वताकार अनन्त नाग पर लेटे हैं। हे जीभ, तुम उनकी महिमा का गायन करो। हे सिर, तुम उनके समक्ष झुको। ओ हाथो, अपनी हथेलियाँ जोड़कर उनकी प्रार्थना करो। हे शरीर, तुम उन्हें दण्डवत् प्रणाम करो। हे हृदय, उनकी पूर्ण शरण लो। वे परमेश्वर ही सर्वोच्च विग्रह हैं। एकमात्र वे ही पूर्ण मंगलकारी और परम विशुद्धकारी हैं। वे ही शाश्वत सिद्धि के प्रदायक हैं।",
        "जो व्यक्ति भगवान् जनार्दन की लीलाओं तथा उनके यशस्वी गुणों का वर्णन सुनता है, किन्तु जिसके शरीर में हर्ष से रोमांच नहीं होता तथा जिसकी आँखों में शुद्ध प्रेम के अश्रुओं का प्रवाह नहीं होता—ऐसा व्यक्ति निस्सन्‍देह अत्यन्त निम्न स्तर का धूर्त है। उसका जीवन कितना गर्हित है!",
        "हे प्रभु! मेरी इन्द्रियों रूपी शक्तिशाली चोरों ने मेरी सर्वाधिक मूल्यवान सम्पत्ति, मेरा विवेक चुराकर मुझे अंधा कर दिया है और मुझे मोह के गहरे अन्धकूप में फेंक दिया है। हे देवाधिदेव! अपना हाथ बढ़ायें और इस दुष्टात्मा को बचा लें।",
        "इस शरीर का सौन्दर्य क्षणिक है और बुढ़ापे में जब इसके सैकड़ों जोड़ ऐंठ जाएँगे, तो इसकी मृत्यु होनी निश्चित है। तो फिर मोहग्रस्त मूर्ख! तू क्यों दवा माँग रहा है? बस, कृष्णामृत को ग्रहण कर, जो अचूक उपचार है।",
        "मानव समाज का सबसे बड़ा आश्चर्य यह है कि लोग न सुधरने पर इतने अड़े हुए हैं कि वे नारायण के नामों के जीवनदायी अमृत को छोड़कर अन्य सब कुछ बोल कर विषपान कर लेते हैं।",
        "चाहे मेरे सारे कुटुम्बीजन मेरा परित्याग कर दें और मेरे वरिष्ठजन मेरी निन्दा करें, फिर भी परम आनन्दमय गोविन्द मेरे प्राणाधार बने हुए हैं।",
        "हे मनुष्यो! मैं अपनी भुजाएँ ऊँची उठाकर सत्य वचन कह रहा हूँ। जो भी मर्त्य प्राणी मुकुन्द, नृसिंह तथा जनार्दन नामों का नित्यप्रति जप करता है, वह चाहे युद्ध में हो या मृत्यु के समक्ष हो, अपनी सर्वाधिक अभीष्ट आकांक्षाओं को पत्थर या काठ के टुकड़े जैसा मानने लगेगा।",
        "मैं अपनी भुजाएँ उठाकर उच्च स्वर में यह दयापूर्ण सलाह यथासम्भव जोर से पुकारकर दे रहा हूँ—यदि संन्यासी लोग भीषण विषाक्त भौतिक जीवन से उबरना चाहते हैं, तो उन्हें इतना सद्ज्ञान होना चाहिए कि वे ॐ नमो नारायणाय मन्त्र का निरन्तर श्रवण करें।",
        "मेरा मन क्षणभर के लिए भी श्रीकृष्ण के चरणकमलों से विमुख नहीं हो सकता, चाहे मेरे प्रियजन तथा अन्य सम्बन्धी मेरी निन्दा करें, चाहे मेरे वरिष्ठजन मुझे स्वीकारें या त्याग दें, सामान्यजन मेरे विषय में दुष्प्रचार करें, भले ही मेरे कुल की प्रतिष्ठा कलंकित हो। मुझ जैसे पागल व्यक्ति के लिए यही सम्मान पर्याप्त है कि ईश्वर के प्रेम की इस बाढ़ का अनुभव करूँ, जो मेरे प्रभु के प्रति आकर्षण का अनुराग लाने वाली है।",
        "तीनों लोकों के गुरु, कृष्ण हमारी रक्षा करें। कृष्ण के समक्ष सदा शीश झुकाएँ। कृष्ण ने हमारे समस्त शत्रुओं का वध किया है। कृष्ण को हमारा नमस्कार है। कृष्ण से ही यह जगत अस्तित्व में आया है। मैं कृष्ण का दास हूँ। यह सम्पूर्ण ब्रह्माण्ड कृष्ण के भीतर स्थित है। हे कृष्ण! कृपा करके मेरी रक्षा करें।",
        "हे युवा गोप! हे करुणासिन्धु! हे सागरकन्या लक्ष्मी के पति! हे कंस के संहारक! हे गजेन्द्र के करुणामय उद्धारक! हे माधव! हे बलराम के अनुज! हे तीनों लोकों के गुरु! हे गोपियों के कमलनयन प्रभु! मैं अन्य किसी को आपसे बढ़कर महान् नहीं जानता। कृपया मेरी रक्षा करें।",
        "आपकी सुन्दर सी पत्नी सागर की पुत्री हैं और आपके पुत्र ब्रह्माजी हैं। वेद आपके वंदीजन (चारण) हैं, देवतागण आपके दास हैं और मोक्ष आपका वरदान है, जबकि यह सम्पूर्ण ब्रह्माण्ड आपकी चमत्कारी शक्ति का प्रदर्शन है। श्रीमती देवकी आपकी माता हैं और इन्द्रपुत्र अर्जुन आपका सखा है। इसलिए मुझे आपके अलावा अन्य किसी में कोई रुचि नहीं है।",
        "स्वर्गलोक के चतुर निवासी जानते हैं कि सिर की पूर्णता भगवान् को दण्डवत् प्रणाम करने, प्राण की पूर्णता भगवान् की पूजा करने, मन की पूर्णता उनके दिव्य गुणों के बारे में विस्तार से मनन करने तथा वाणी की पूर्णता उनके गुणों के यश का कीर्तन करने में है।",
        "क्या कभी ऐसा हुआ है कि पापी से पापी व्यक्ति की, जिसने कभी उच्च स्वर से नारायण के शुभ नाम का उच्चारण किया हो, इच्छाएँ पूरी न हुई हों? किन्तु हाय! हमने कभी भी उस तरह से अपनी वाक्शक्ति का प्रयोग नहीं किया; इसलिए हमें गर्भ में रहने जैसे कष्ट भोगने पड़े।",
        "असीम तथा अव्यय विष्णु, जो हृदय रूपी कमल में सदैव विद्यमान रहते हैं, उन लोगों को निर्भीकता प्रदान करते हैं, जो अपनी बुद्धि को उन पर स्थिर करते हैं। जो भक्त उनका ध्यान करते हैं, वे वैष्णवों की सर्वोच्च सिद्धि को प्राप्त करेंगे।",
        "हे परमेश्वर! हे विष्णु! आप परम दयालु हैं। अतः अब आप मुझ पर प्रसन्न हों और इस असहाय प्राणी को अपनी कृपा प्रदान करें। हे अनन्त भगवान्, भवसागर में डूब रहे इस दुखियारे को आप उबार लें। हे भगवान् हरि, आप ही पूर्ण पुरुषोत्तम भगवान् हैं।",
        "मधु दैत्य के शत्रु, भगवान् माधव को नमस्कार है। शेषनाग की शैया पर लेटा हुआ उनका सुन्दर रूप क्षीरसागर की तरंगों से उठने वाले छींटों से सुशोभित है।",
        "\u0027कृष्ण कृष्ण\u0027 ये शब्द स्वयं में समस्त जीवों के पापों से छुटकारा पाने के लिए पर्याप्त हैं। जो व्यक्ति अत्यधिक आनन्द से युक्त भगवान् मुकुन्द की भक्ति में संलग्न है, वह अपनी हथेली में मोक्ष, सांसारिक प्रभाव तथा सम्पत्ति के उपहार धारण करता है।",
        "यह ग्रन्थ राजा कुलशेखर द्वारा रचा गया, जो कमलनेत्र भगवान् के चरणकमलों में मधुमक्खी के समान हैं। राजा के दो प्रिय मित्र ब्राह्मण जाति के अति सुंदर कमल के दो नालों के समान हैं, जो कवि समुदाय के नायकों के रूप में विख्यात कुशल वैदिक पंडित हैं।",
        "इस मुकुन्दमाला का पाठ करने वालों में से ऐसा कौन है, जिसे पूर्ण सुख प्राप्त नहीं होगा? जो भी देहधारी जीव इन स्तुतियों का उच्चारण करता है, उसके सारे पापफल समूल नष्ट हो जाते हैं और वह सीधे भगवान् विष्णु के परम धाम को जाता है।"
      ]
    },
    "240": {
      title: "श्री नन्दनन्दनाष्टकम् (Śrī Nanda-Nandanāṣṭakam)",
      transliterations: [
        "श्री नन्द-नन्दनाष्टक\nसु-चारु-वक्त्र-मण्डलं\nसु-कर्ण-रत्न-कुण्डलम्\nसु-चर्चिताङ्ग-चन्दनं\nनमामि नन्द-नन्दनम्",
        "सु-दीर्घ-नेत्र-पङ्कजं\nशिखी-शिखण्ड-मूर्धजम्\nअनङ्ग-कोटि-मोहनं\nनमामि नन्द-नन्दनम्",
        "सु-नासिकाग्र-मौक्तिकं\nस्वच्छन्द-दन्त-पङ्क्तिकम्\nनवाम्बुदाङ्ग-चिक्कणं\nनमामि नन्द-नन्दनम्",
        "करेण वेणु-रञ्जितम्\nगती-करीन्द्र-गञ्जितम्\nदुकूल-पीत-शोभनं\nनमामि नन्द-नन्दनम्",
        "त्रि-भङ्ग-देह-सुन्दरं\nनख-द्युति-सुधाकरम्\nअमूल्य-रत्न-भूषणं\nनमामि नन्द-नन्दनम्",
        "सु-गन्ध-अङ्ग-सौरभं\nउरो-विराजि-कौस्तुभम्\nस्फुरच्-छ्रीवत्स-लञ्छनं\nनमामि नन्द-नन्दनम्",
        "वृन्दावन-सु-नागरं\nविलासानुग-वाससम्\nसुरेन्द्र-गर्व-मोचनं\nनमामि नन्द-नन्दनम्",
        "व्रजाङ्गना-सु-नायकं\nसदा सुख-प्रदायकम्\nजगन्-मनः-प्रलोभनं\nनमामि नन्द-नन्दनम्",
        "श्री-नन्द-नन्दनाष्टकं\nपठेद् यः श्रद्धयान्वितः\nतरेद् भवाब्धि-दुस्तरं\nलभेत् तद्-अङ्घ्रि-युग्मकम्"
      ],
      translations: [
        "The circle of His fcae is graceful and handsome. Jewel earrings adorn His graceful ears. Sandal paste anoints His graceful limbs. To Nanda\u0027s son I offer my respectful obeisances.",
        "His large eyes are lotus flowers. A peacock feather decorates the hair of His head. He is more charming than millions of Kāmadevas. To Nanda\u0027s son I offer my respectful obeisances.",
        "A pearl decorates the tip of His nose. His teeth are splendid. His form glistens like a new raincloud. To Nanda\u0027s son I offer my respectful obeisances.",
        "A glorious flute rests in His hand. His motions are more graceful than the king of elephants\u0027. He wears glistening yellow silk garments. To Nanda\u0027s son I offer my respectful obeisances.",
        "His graceful form bends in three places. He is like a moon shining in the sky. He is adorned with priceless jewel ornaments. To Nanda\u0027s son I offer my respectful obeisances.",
        "His limbs are fragrant. A Kaustubha jewel glistens on His chest. He bears the glorious Śrīvatsa mark. To Nanda\u0027s son I offer my respectful obeisances.",
        "He is the playful hero of Vṛndāvana. His garments are glorious. He removed great Indra\u0027s pride. To Nanda\u0027s son I offer my respectful obeisances.",
        "He enjoys pastimes with Vraja\u0027s girls. He is always delightful. He charms the hearts of all the worlds. To Nanda\u0027s son I offer my respectful obeisances.",
        "I pray that the faithful person who reads or recites this Śrī Nanda-nandanāṣṭaka will cross the impassable ocean of birth and death and attain the feet of Nanda\u0027s son."
      ]
    },

    "241": {
      title: "शुद्ध-भकत-चरण-रेणु",
      transliterations: [
        "शुद्ध-भकत-चरण-रेणु, भजन-अनुकूल।\nभकत-सेवा, परम-सिद्धि, प्रेम-लतिका-मूल॥",
        "माधव-तिथि, भक्ति-जननी, यतने पालन करि।\nकृष्ण-वसति, वसति बलि’, परम आदरे वरी॥",
        "गौर आमार, ये-सब स्थाने, करलो भ्रमण रङ्गे।\nसे-सब स्थान, हेरब आमि, प्रणयी-भकत-सङ्गे॥",
        "मृदङ्ग-वाद्य, शुनिते मन, अविरत धावे।\nगौर-विहित, कीर्तन शुनि’, आनन्दे हृदय नाचे॥",
        "भकतिविनोद, कृष्णेर भजने, अनुकूल पाय याहा।\nप्रति-दिवसे, परम-सुखे, स्वीकार करये ताहा॥"
      ],
      translations: [
        "शुद्ध भक्तों के चरण-कमलों की धूलि भक्ति और भजन के लिए परम अनुकूल है। भक्तों की निष्कपट सेवा ही भक्ति की सर्वोच्च सिद्धि है और यह प्रेम-रूपी लता का मूल कारण है।",
        "एकादशी आदि श्री माधव-तिथियाँ भक्ति की जननी हैं, मैं यत्नपूर्वक उनका पालन करता हूँ। जहाँ भगवान् श्रीकृष्ण का वास है (श्री धाम), उसे परम आदर के साथ अपने निवास हेतु स्वीकार करता हूँ।",
        "मेरे श्री गौरांग महाप्रभु ने जिन-जिन पवित्र स्थानों में दिव्य लीला-भ्रमण किया, उन सभी तीर्थों के मैं प्रेमी भक्तों के संग में दर्शन करूँगा।",
        "मृदंग की ध्वनि सुनते ही मेरा मन निरन्तर उसकी ओर दौड़ता है और श्री गौरांग विहित संकीर्तन सुनते ही मेरा हृदय आनन्द से नाच उठता है।",
        "भक्तिविनोद श्रीकृष्ण के भजन में जो कुछ भी अनुकूल है, प्रतिदिन परम आनन्द के साथ केवल उसी को स्वीकार करते हैं।"
      ]
    },
    "257": {
      title: "उदिला अरुण पूरव-भागे (अरुणोदय कीर्तन १)",
      transliterations: [
        "उदिला अरुण पूरव-भागे, द्विज-मणि गोरा अवनि जागे।\nतसिय’ वैकुण्ठ-शुक-शारिका, गाओय’ हरि-नाम-लतिका॥",
        "मुखे बोल हरि हरि, आर कत निद्रा जाओ।\nचैतन्य-मङ्गल-कथा शुनि’ जुड़ाओ॥"
      ],
      translations: [
        "पूर्व दिशा में सूर्योदय हो गया है और द्विज-मणि श्री गौरसुन्दर इस धरातल पर जाग गए हैं। वैकुण्ठ के शुक और सारिका पक्षी जागकर श्री हरिनाम की अमृतमयी लीलाओं का गान कर रहे हैं।",
        "मुख से 'हरि हरि' बोलो! अब और कितनी नींद सोओगे? श्री चैतन्य महाप्रभु की मंगलमयी कथाओं को सुनकर अपने जीवन को शीतल करो।"
      ]
    },
    "261": {
      title: "वन्दे विश्वम्भर पद कमलम (Vande Viśvambhara)",
      transliterations: [
        "वन्दे विश्वम्भर-पद-कमलम्\nखण्डित-कलियुग-जन-मल-समलम्",
        "सौरभ-कर्षित निज-जन-मधुपम्\nकरुणा खण्डित-विरह-वितापम्",
        "नाशित-हृद्-गत-माया-तिमिरम्\nवर-निज-कान्त्या जगताम् अचिरम्",
        "सतत-विराजित-निरुपम-शोभम्\nराधा-मोहन कल्पित विलोभम्"
      ],
      translations: [
        "I offer prayers to the lotus feet of Visvambhara, who cuts away the defective consciousness of those who are influenced by Kali-yuga.",
        "With the fragrance of His supremely sweet philosophy, name, qualities, etc., Mahaprabhu attracts His honeybee-like followers. By His causeless mercy, He removes the anguish of separation of His dear associates (like Advaita Acarya).",
        "For a long time the hearts of the jivas in this world have been afflicted with ignorance due to maya, which He instantly destroys with His brilliant effulgence.",
        "Radha-mohana, having become greatly attracted to Mahaprabhu whose unmatched splendor is always radiating out, is broadcasting His glories to all."
      ]
    },

    "262": {
      title: "विभावरी शेष (अरुणोदय कीर्तन २)",
      transliterations: [
        "विभावरी शेष, आलोक-प्रवेश, निद्रा छाडि’ उठ’ जीव।\nबोलो हरि हरि, मुकुन्द मुरारि, राम कृष्ण हयग्रीव॥",
        "नृसिंह वामन, श्रीमधुसूदन, ब्रजेन्द्र-नन्दन श्याम।\nपूतना-घातन, कंस-निषूदन, गोवर्धन-धर राम॥",
        "श्री-कृष्ण-यादव, मुरली-माधव, गोपी-चन्द्र-वल्लभ।\nकालिय-मर्दन, दामोदर धन, राधिका-रमण देव॥",
        "नाम-संकीर्तन, करहु वन्दन, भक्तिविनोद कय।\nनामेर प्रभावे, सकल स्वभावे, कृष्ण-प्रेम उपजय॥"
      ],
      translations: [
        "रात्रि समाप्त हो गई है और प्रकाश का प्रवेश हो रहा है। हे जीव! निद्रा का त्याग करके जागो और 'हरि हरि', 'मुकुन्द', 'मुरारी', 'राम', 'कृष्ण', 'हयग्रीव' के नामों का संकीर्तन करो।",
        "नृसिंह, वामन, श्री मधुसूदन, ब्रजेन्द्र-नन्दन श्याम, पूतना का उद्धार करने वाले, कंस का संहार करने वाले और गोवर्धन पर्वत को धारण करने वाले बलराम-श्याम के नामों का गान करो।",
        "श्रीकृष्ण, यादव, मुरलीधर माधव, गोपियों के प्राणवल्लभ, कालियानाग का दमन करने वाले, दामोदर और श्री राधिका-रमण भगवान् के पावन नामों का उच्चारण करो।",
        "नाम-संकीर्तन की वन्दना करो! भक्तिविनोद कहते हैं कि नाम के दिव्य प्रभाव से जीव के समस्त अनर्थ नष्ट हो जाते हैं और हृदय में विशुद्ध कृष्ण-प्रेम प्रकट हो जाता है।"
      ]
    },
    "267": {
      title: "वैष्णव वन्दना (वृन्दावन-वासी यत वैष्णवेर गण)",
      transliterations: [
        "वृन्दावनवासी यत वैष्णवेर गण।\nप्रथमे वन्दना करि सबार चरण॥ (१)",
        "नीलाचलवासी यत महाप्रभुर गण।\nभूमिते पड़िया वन्दो सबार चरण॥ (२)",
        "नवद्वीपवासी यत महाप्रभुर भक्त।\nसबार चरण वन्दों हञा अनुरक्त॥ (३)",
        "महाप्रभुर भक्त यत गौड़ देशे स्थिति।\nसबार चरण वन्दों करिया प्रणति॥ (४)",
        "ये-देशे, ये देशे वैसे गौराङ्गेर गण।\nऊर्ध्वबाहु करि’ वन्दों सबार चरण॥ (५)",
        "हञाछेन हइबेन प्रभुर यत दास।\nसबार चरण वन्दों दन्ते करि घास॥ (६)",
        "ब्रह्माण्ड तारिते शक्ति धरे जने-जने।\nए वेद-पुराणे गुण गाय येबा सुने॥ (७)",
        "महाप्रभुर गण सब पतितपावन।\nताइ लोभे मुञि पापी लइनु शरण॥ (८)",
        "वन्दना करिते मुञि कत शक्ति धरि।\nतमो-बुद्धिदोषे मुञि दम्भ मात्र करि॥ (९)",
        "तथापि मूकेर भाग्य मनेर उल्लास।\nदोष क्षमि' मो-अधमे कर निज दास॥ (१०)",
        "सर्ववाञ्छासिद्धि हय, यमबंध छूटे।\nजगते दुर्लभ हञा प्रेमधन लूटे॥ (११)",
        "मनेर वासना पूर्ण अचिराते हय।\nदेवकीनन्दन दास एइ लोभे कय॥ (१२)"
      ],
      translations: [
        "सर्वप्रथम मैं वृन्दावन में रहने वाले सभी वैष्णवों के चरणकमलों पर प्रणाम करता हूँ।",
        "उसके पश्चात् मैं नीलाचल में रहने वाले श्रीचैतन्य महाप्रभु के भक्तों के चरणकमलों पर दण्डवत् प्रणाम करता हूँ।",
        "मैं नवद्वीप में रहने वाले महाप्रभु के सभी प्रिय भक्तों के चरणकमलों में प्रणाम करता हूँ।",
        "मैं गौड़देश में रहने वाले महाप्रभु के सभी भक्तों को प्रणाम करता हूँ।",
        "श्रीगौरांग महाप्रभु के प्रिय भक्त विश्व के किसी भी कोने में क्यों न रह रहे हों मैं उनके चरणकमलों में प्रणाम करता हूँ।",
        "मैं भविष्य में आने वाले महाप्रभु के सभी भक्तों को भी प्रणाम करता हूँ। अपने दाँतों में तृण रखकर मैं उनके चरणकमलों की वंदना करता हूँ।",
        "सभी वेदों और पुराणों में यह कहा गया है कि महाप्रभु के प्रिय भक्त पतित-पावन हैं, और चूँकि मैं इतना पतित और निकृष्ट हूँ, मेरे हृदय में श्रीचैतन्य महाप्रभु के प्रिय भक्तों का आश्रय लेने की लालसा जागृत होने लगी है। अन्यथा मेरे उद्धार का कोई मार्ग नहीं है।",
        "यदि मैं ऐसा सोचता हूँ, 'हाँ, मैं वैष्णवों का गुणगान कर सकता हूँ,' तो यह मेरी धृष्टता होगी। मुझमें यह घमण्ड है। मैं गूँगा हूँ और मुझमें वैष्णवों का गुणगान करने की शक्ति नहीं है। फिर भी अपने मन में मैं आनन्दित हूँ।",
        "हे वैष्णवों! कृपया मेरे अपराधों को क्षमा करें। कृपया मुझे अपने एक दास के रूप में स्वीकार करें!",
        "केवल वैष्णवों की कृपा से व्यक्ति यमराज के पाश से मुक्त होकर प्रेमभक्ति प्राप्त कर सकता है, जो इस संसार में अत्यन्त दुर्लभ है।",
        "अन्य कोई मार्ग नहीं है। जब आप गुरु अथवा ऐसे वैष्णवों की कृपा प्राप्त करेंगे तो आपकी सभी मनोवांछायें पूर्ण हो जायेंगी।",
        "इसलिए देवकीनन्दन दास वैष्णवों की महिमा में यह भजन लिखता है।"
      ]
    },
    "271": {
      title: "यशोमती-नन्दन ब्रज-वर-नागर",
      transliterations: [
        "यशोमती-नन्दन, ब्रज-वर-नागर, गोकुल-रञ्जन कान्ह।\nगोपी-पराण-धन, मदन-मनोहर, कालिय-दमन-विधान॥",
        "अमल कोमल अरुण चरण-कमल, मञ्जुल मञ्जीर-रुआ।\nनूपुर-निक्वण, भुवन-मोहन, वंशी-वदन सुभा॥",
        "रूप-मनोहर, वेणु-कर-धर, पीताम्बर-धर श्याम।\nत्रिभुवन-मोहन, मन्मथ-मन्मथ, वृन्दावन-धन नाम॥"
      ],
      translations: [
        "माता यशोदा के नन्दन, ब्रज के श्रेष्ठ नागर, गोकुल को आनन्दित करने वाले कन्हैया, गोपियों के प्राण-धन, कामदेव को भी मोहित करने वाले मनोहर और कालियानाग का दमन करने वाले श्रीकृष्ण की जय हो!",
        "जिनके निर्मल, कोमल और रक्ताभ चरण-कमलों में सुन्दर पैंजनी और नूपुरों की मधुर झंकार सम्पूर्ण त्रिभुवन को मोहित करती है और जो अधरों पर वंशी धारण किए हुए हैं।",
        "जिनका रूप परम मनोहर है, जो हाथों में वेणु धारण किए हुए हैं, पीताम्बरधारी श्यामसुन्दर हैं, जो तीनों लोकों को और कामदेव को भी मोहित करने वाले 'मन्मथ-मन्मथ' हैं और जिनका नाम वृन्दावन का परम धन है।"
      ]
    },
    "116": {
      title: "श्रीजगन्नाथाष्टकम् (कदाचित् कालिन्दीतट)",
      transliterations: [
        "कदाचित् कालिन्दीतट-विपिन-सङ्गीतकरवो\nमुदाभीरी-नारी-वदनकमलास्वाद-मधुपः।\nरमा-शम्भु-ब्रह्मामरापति-गणेशार्चितपदो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे॥ (१)",
        "भुजे सव्ये वेणुं शिरसि शिखिपिच्छं कटितटे\nदुकूलं नेत्रान्ते सहचरि-कटाक्षं विदधते।\nसदा श्रीमद्वृन्दावन-वसति-लीलापरिचयो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे॥ (२)",
        "महाम्भोधेस्तीरे कनकरुचिरे नीलशिखरे\nवसन् प्रासादान्तः सहज-बलभद्रेण बलिना।\nसुभद्रा-मध्यस्थः सकल-सुर-सेवावसरदो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे॥ (३)",
        "कृपा-पारावारः सजल-जलद-श्रेणि-रुचिरो\nरमावाणीरामः स्फुरदमल-पङ्केरुहमुखः।\nसुरेन्द्रैराराध्यः श्रुतिगणशिखा-गीतचरितो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे॥ (४)",
        "रथारूढो गच्छन् पथि मिलित-भूदेव पटलैः\nस्तुति प्रादुर्भावं प्रतिपदमूपाकर्ण्य सदयः।\nदयासिन्धुर्बन्धुः सकलजगतां सिन्धुसुतया\nजगन्नाथः स्वामी नयनपथगामी भवतु मे॥ (५)",
        "परंब्रह्मापीडः कुवलय-दलोत्फुल्ल-नयनो\nनिवासी नीलाद्रौ निहित-चरणोऽनन्त-शिरसि।\nरसानन्दी राधा-सरस-वपुरालिङ्गन-सुखो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे॥ (६)",
        "न वै याचे राज्यं न च कनक-माणिक्य-विभवं\nन याचेऽहं रम्यां सकल-जन-काम्यां वरवधूम्।\nसदा काले काले प्रमथपतिना गीतचरितो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे॥ (७)",
        "हर त्वं संसारं द्रुततरमसारं सुरपते\nहर त्वं पापानां विततिमपरां यादवपते!।\nअहो दीनेऽनाथे निहित-चरणो निश्चितमिदं\nजगन्नाथः स्वामी नयनपथगामी भवतु मे॥ (८)",
        "जगन्नाथाष्टकं पुण्यं यः पठेत् प्रयतः शुचिः।\nसर्वपाप-विशुद्धात्मा विष्णुलोकं स गच्छति॥ (९)"
      ],
      translations: [
        "कभी-कभी अत्यन्त आनन्द में भगवान् जगन्नाथ अपनी बाँसुरी बजाते हुए यमुना के तटपर मधुर संगीत बजाते हैं। वे एक भ्रमर के समान हैं जो ब्रज की कमलमुख सदृश गोपियों के मधु का आस्वादन करते हैं और उनके चरणकमल लक्ष्मीजी, शिवजी, ब्रह्माजी, इन्द्र एवं गणेश द्वारा वंदनीय हैं। वे भगवान् जगन्नाथ मेरे नेत्रमार्गों के पथिक बनें।",
        "भगवान् जगन्नाथ अपने बायें हाथ में वेणु धारण करते हैं। उनके सिर पर मोरपंख एवं कटि पर पीला रेशमी वस्त्र है। अपने नेत्रों के कोनों से वे अपने प्रेमी भक्तों पर कृपा-कटाक्ष करते हैं और अपने दिव्य धाम वृन्दावन में अपनी लीलाओं के माध्यम से स्वयं को उजागर करते हैं। वे भगवान् जगन्नाथ मेरे नेत्रमार्गों के पथिक बनें।",
        "महासमुद्र के तट पर स्थित सुनहरे नीलाचल पर्वत पर अपने भाई बलभद्र और बहन सुभद्रा के साथ निवास करने वाले भगवान् जगन्नाथ सभी भक्तों को भक्ति करने का सौभाग्य प्रदान करते हैं। वे भगवान् जगन्नाथ मेरे नेत्रमार्गों के पथिक बनें।",
        "भगवान् जगन्नाथ कृपा के समुद्र हैं और जल से भरे बादलों की श्रृंखला के समान प्रतीत होते हैं। वे श्रीमती लक्ष्मी एवं सरस्वती के लिए आनन्द के भण्डार हैं और उनका मुख निर्मल कमल के समान सुन्दर है। वे देवाधिदेवों और ऋषियों द्वारा पूजित हैं और उपनिषद् उनकी महिमाओं का गान करते हैं। वे भगवान् जगन्नाथ मेरे नेत्रमार्गों के पथिक बनें।",
        "जब भगवान् जगन्नाथ रथयात्रा के दौरान रथ पर सवार होकर मार्ग पर निकलते हैं तो प्रत्येक पग पर ब्राह्मणों के समूह उनकी स्तुति में गीत गाते हैं। उन्हें सुनकर भगवान् जगन्नाथ उनके प्रति दया से भर जाते हैं। वे दया के सागर हैं और सम्पूर्ण जगत् के बन्धु हैं। वे भगवान् जगन्नाथ, अमृत के सागर से जन्म लेने वाली अपनी संगिनी श्रीमती लक्ष्मी के साथ मेरे नेत्रमार्गों के पथिक बनें।",
        "वे ब्रह्माजी के सिर के रत्न हैं और उनके नेत्र पूरे खिले कमल की पंखुड़ियों के समान विशाल हैं। वे नीलाचल पर्वत पर निवास करते हैं और उनके चरणकमल अनन्तदेव अपने सिर पर धारण करते हैं। भगवान् जगन्नाथ प्रेम के रसों में आनन्दित रहते हैं और उन्हें श्रीमती राधारानी की शीतल कुण्ड सदृश दिव्य देह के आलिंगन से परमसुख की अनुभूति होती है। वे भगवान् जगन्नाथ मेरे नेत्रमार्गों के पथिक बनें।",
        "मैं राज्य की याचना नहीं करता और न ही सोने, मणियों अथवा वैभव की। मैं सभी पुरुषों द्वारा अभिलाषित सुन्दर पत्नी की कामना भी नहीं करता। मैं केवल यही प्रार्थना करता हूँ कि भगवान् जगन्नाथ, जिनकी महिमा भगवान् शिव सदा गाते हैं, वे मेरे नेत्रमार्गों के पथिक बनें।",
        "हे देवों के देव, कृपया इस व्यर्थ भौतिक जीवन को तुरन्त समाप्त कर दें। हे यदुपति, कृपया मेरे पापों के सीमारहित समुद्र को नष्ट कर दे। अहो, यह सत्य है कि भगवान् जगन्नाथ के चरणकमल उन्हें निश्चित् प्राप्त होते हैं जो स्वयं को दीन मानते हैं तथा भगवान् के अतिरिक्त किसी अन्य आश्रय को स्वीकार नहीं करते। वे भगवान् जगन्नाथ मेरे नेत्रमार्गों के पथिक बनें।",
        "जो इस पुण्य जगन्नाथाष्टकम् को पढ़ता है वह पूर्णतः पवित्र हो जाता है। सभी पापों से मुक्त होकर वह शुद्धात्मा भगवान् विष्णु के धाम में प्रवेश करता है।"
      ]
    }
,
    "136": {
      title: "श्रीषड्गोस्वाम्यष्टकम् (कृष्णोत्कीर्तन-गान-नर्तन-परौ)",
      transliterations: [
        "कृष्णोत्कीर्तन-गान-नर्तन-परौ प्रेमामृताम्भोनिधी\nधीराधीरजन-प्रियौ प्रियकरौ निर्मत्सरौ पूजितौ।\nश्रीचैतन्यकृपाभरौ भुवि भुवो भारावहन्तारकौ\nवन्दे रूप-सनातनौ रघुयुगौ श्रीजीव-गोपालकौ॥ (१)",
        "नानाशास्त्र-विचारणैक-निपुणौ सद्धर्म-संस्थापकौ\nलोकानां हितकारिणौ त्रिभुवने मान्यौ-शरण्यौकरौ।\nराधाकृष्ण-पदारविन्द-भजनानन्देन मत्तालिकौ\nवन्दे-रूप सनातनौ रघुयुगौ श्रीजीव-गोपालकौ॥ (२)",
        "श्रीगौराङ्ग-गुणानुवर्णन-विधौ श्रद्धा-समृद्ध्यान्वितौ\nपापोत्ताप-निकृन्तनौ तनुभृतां गोविन्द-गानामृतैः।\nआनन्दाम्बुधि-वर्धनैक-निपुणौ कैवल्य-निस्तारकौ\nवन्दे रूप-सनातनौ रघुयुगौ श्रीजीव-गोपालकौ॥ (३)",
        "त्यक्त्वा तूर्णमशेष-मण्डलपति-श्रेणीं सदा तुच्छवत्\nभूत्वा दीनगणेशकौ करुणया कौपीन-कन्थाश्रितौ।\nगोपीभाव-रसामृताब्धि-लहरी-कल्लोल-मग्नौ मुहुः-\nवन्दे रूप-सनातनौ रघुयुगौ श्रीजीव-गोपालकौ॥ (४)",
        "कूजत्-कोकिल-हंस-सारस-गणाकीर्णे मयूराकुले\nनानारत्न-निबद्ध-मूल-विटप-श्रीयुक्त-वृन्दावने।\nराधाकृष्णमहर्निशं प्रभजतौ जीवार्थदौ यौ मुदा\nवन्दे रूप-सनातनौ रघुयुगौ श्रीजीव-गोपालकौ॥ (५)",
        "संख्यापूर्वक-नामगाननतिभिः कालावसानीकृतौ\nनिद्राहार-विहारकादि-विजितौ चात्यन्त-दीनौ च यौ।\nराधाकृष्ण-गुणस्मृतेर्मधुरिमानन्देन सम्मोहितौ\nवन्दे रूप-सनातनौ रघुयुगौ श्रीजीव-गोपालकौ॥ (६)",
        "राधाकुण्ड-तटे कलिन्द-तनया तीरे च वंशीवटे\nप्रेमोन्माद-वशादशेष-दशया ग्रस्तौ प्रमत्तौ सदा।\nगायन्तौ च कदा हरेर्गुणवरं भावाविभूतौ मुदा\nवन्दे रूप-सनातनौ रघुयुगौ श्रीजीव-गोपालकौ॥ (७)",
        "हे राधे! व्रजदेविके! च ललिते! हे नन्दसूनो! कुतः\nश्रीगोवर्धन-कल्पपादप-तले कालिन्दिवन्ये कुतः।\nघोषन्ताविति सर्वतो व्रजपुरे खेदैर्महाविह्वलौ\nवन्दे रूप-सनातनौ रघुयुगौ श्रीजीव-गोपालकौ॥ (८)"
      ],
      translations: [
        "मैं श्रील रूप, सनातन, रघुनाथभट्ट, रघुनाथदास, श्रील जीव एवं गोपालभट्ट नामक छह गोस्वामियों की वन्दना करता हूँ कि, जो श्रीकृष्ण के नाम-रूप-गुण-लीलाओं के कीर्तन, गायन एवं नृत्यपरायण थे, प्रेमामृत के समुद्रस्वरूप थे, सज्जन एवं दुर्जन सभी प्रकार के लोगों में प्रिय थे तथा सभी के प्रिय कार्यों को करने वाले थे। वे ईर्ष्यारहित एवं सभी द्वारा पूजित थे। वे श्रीचैतन्यदेव की अतिशय कृपा से युक्त थे और भूतल पर भक्ति का विस्तार करके भूमि का भार उतारने वाले थे।",
        "मैं श्रील रूप-सनातनादि उन छह गोस्वामियों की वंदना करता हूँ जो अनेक शास्त्रों के गूढ़ अर्थों पर विचार करने में परमनिपुण थे, भक्तिरूप-परमधर्म के संस्थापक थे, जनमात्र के परमहितैषी थे, तीनों लोकों में माननीय थे, शरणागतवत्सल थे एवं श्रीराधाकृष्ण के पदारविन्द के भजनरूप आनन्द से मत्त मधुप के समान थे।",
        "मैं श्रील रूप-सनातनादि उन छह गोस्वामियों की वंदना करता हूँ कि जो श्रीगौरांगदेव के गुणानुवाद की विधि में श्रद्धारूप-सम्पत्ति से युक्त थे, श्रीकृष्ण के गुणगानरूप-अमृत वृष्टि के द्वारा प्राणीमात्र के पाप-ताप को दूर करने वाले थे तथा आनन्दरूप-समुद्र को बढ़ाने में परमकुशल थे, भक्ति का रहस्य समझाकर जीवों को कैवल्य मुक्ति से बचाने वाले थे।",
        "मैं श्रील रूप-सनातनादि उन छह गोस्वामियों की वंदना करता हूँ जो लोकोत्तर वैराग्य से समस्त मण्डलों के आधिपत्य के पद को शीघ्र ही तुच्छ की तरह सदा के लिए छोड़कर, कृपापूर्वक अतिशय दीन होकर, कौपीन एवं कंथा (गुदड़ी) को धारण करने वाले थे तथा गोपीभावरूप रसामृत सागर की तरंगों में आनन्दपूर्वक निमग्न रहते थे।",
        "मैं श्रील रूप-सनातनादि उन छह गोस्वामियों की वंदना करता हूँ जो कलरव करने वाले कोकिल-हंस-सारस आदि पक्षियों से व्याप्त तथा मयूरों के स्वर से आकुल, तथा अनेक प्रकार के रत्नों से निबद्ध मूलवाले वृक्षों के द्वारा शोभायमान श्रीवृन्दावन में, रात-दिन श्रीराधाकृष्ण का भजन करते रहते थे तथा जीवनमात्र के लिए हर्षपूर्वक भक्तिरूप परम पुरुषार्थ देने वाले थे।",
        "मैं श्रील रूप-सनातनादि उन छह गोस्वामियों की वंदना करता हूँ जो अपने समय को संख्यापूर्वक नामजप, नाम-संकीर्तन एवं प्रणाम आदि के द्वारा व्यतीत करते थे, जिन्होंने निद्रा-आहार-विहार आदि पर विजय प्राप्त कर ली थी एवं जो स्वयं को अत्यन्त दीन मानते थे तथा श्रीराधाकृष्ण के गुणों की स्मृति से प्राप्त माधुर्यमय आनन्द के द्वारा विमुग्ध रहते थे।",
        "मैं श्रील रूप-सनातनादि उन छह गोस्वामियों की वंदना करता हूँ जो प्रेमोन्माद के वशीभूत होकर विरह की समस्त दशाओं के द्वारा ग्रस्त होकर, प्रमादी की भाँति, कभी राधाकुण्ड के तट पर, कभी यमुना के तट पर, तो कभी वंशीवट पर सदैव घूमते रहते थे, और कभी श्रीहरि के उत्तम गुणों को हर्षपूर्वक गाते हुए भावविभोर रहते थे।",
        "मैं श्रील रूप-सनातनादि उन छह गोस्वामियों की वंदना करता हूँ जो 'हे व्रज की पूजनीय देवी, राधिके! आप कहाँ हैं? हे ललिते! आप कहाँ हैं? हे व्रजराजकुमार! आप कहाँ हैं? श्रीगोवर्धन के कल्पवृक्षों के नीचे बैठे हैं अथवा कालिन्दी के सुन्दर तटों पर स्थित वनों में भ्रमण कर रहे हैं?' इस प्रकार पुकारते हुए वे विरहजनित पीड़ाओं से महान् विह्वल होकर व्रजमण्डल में सर्वत्र भ्रमण करते थे।"
      ]
    }
,
    "166": {
      title: "श्री नृसिंह कवचम् (Śrī Nṛsiṁha Kavacam)",
      transliterations: [
        "नृसिंह-कवचं वक्ष्ये\nप्रह्लादेनोदितं पुरा\nसर्व-रक्षा-करं पुण्यं\nसर्वोपद्रव-नाशनम्",
        "सर्व-सम्पत्-करं चैव\nस्वर्ग-मोक्ष-प्रदायकम्\nध्यात्वा नृसिंहं देवेशं\nहेम-सिंहासन-स्थितम्",
        "विवृतास्यं त्रि-नयनं\nशरद्-इन्दु-सम-प्रभम्\nलक्ष्म्य्-आलिङ्गित-वामाङ्गं\nविभूतिभिर् उपाश्रितम्",
        "चतुर्-भुजं कोमलाङ्गं\nस्वर्ण-कुण्डल-शोभितम्\nसरोज-शोभितोरस्कं\nरत्न-केयूर-मुद्रितम्",
        "तप्त-काञ्चन-सङ्काशं\nपीत-निर्मल-वाससम्\nइन्द्रादि-सुर-मौलिष्ठः\nस्फुरन् माणिक्य-दीप्तिभिः",
        "विराजित-पद-द्वन्द्वं\nशङ्ख-चक्रादि-हेतिभिः\nगरुत्मता च विनयात्\nस्तूयमानं मुदान्वितम्",
        "स्व-हृत्-कमल-संवासं\nकृत्वा तु कवचं पठेत्\nनृसिंहो मे शिरः पातु\nलोक-रक्षार्थ-सम्भवः",
        "सर्वगो ’पि स्तम्भ-वासः\nफालं मे रक्षतु ध्वनिम्\nनृसिंहो मे दृशौ पातु\nसोम-सूर्याग्नि-लोचनः",
        "स्मृतिं मे पातु नृहरिः\nमुनि-वर्य-स्तुति-प्रियः\nनासां मे सिंह-नासस् तु\nमुखं लक्ष्मी-मुख-प्रियः",
        "सर्व-विद्याधिपः पातु\nनृसिंहो रसनां मम\nवक्त्रं पात्व् इन्दु-वदनं\nसदा प्रह्लाद-वन्दितः",
        "नृसिंहः पातु मे कण्ठं\nस्कन्धौ भू-भरणान्त-कृत्\nदिव्यास्त्र-शोभित-भुजः\nनृसिंहः पातु मे भुजौ",
        "करौ मे देव-वरदो\nनृसिंहः पातु सर्वतः\nहृदयं योगि-साध्यश् च\nनिवासं पातु मे हरिः",
        "मध्यं पातु हिरण्याक्ष\nवक्षः-कुक्षि-विदारणः\nनाभिं मे पातु नृहरिः\nस्व-नाभि-ब्रह्म-संस्तुतः",
        "ब्रह्माण्ड-कोटयः कट्यां\nयस्यासौ पातु मे कटिम्\nगुह्यं मे पातु गुह्यानां\nमन्त्राणां गुह्य-रूप-धृक्",
        "ऊरू मनोभवः पातु\nजानुनी नर-रूप-धृक्\nजङ्घे पातु धरा-भार\nहर्ता यो ’सौ नृ-केशरी",
        "सुर-राज्य-प्रदः पातु\nपादौ मे नृहरीश्वरः\nसहस्र-शीर्षा-पुरुषः\nपातु मे सर्वशस् तनुम्",
        "महोग्रः पूर्वतः पातु\nमहा-वीराग्रजो ’ग्नितः\nमहा-विष्णुर् दक्षिणे तु\nमहा-ज्वालस् तु नैरृतौ",
        "पश्चिमे पातु सर्वेशो\nदिशि मे सर्वतो-मुखः\nनृसिंहः पातु वायव्यां\nसौम्यां भूषण-विग्रहः",
        "ईशान्यां पातु भद्रो मे\nसर्व-मङ्गल-दायकः\nसंसार-भयतः पातु\nमृत्योर् मृत्युर् नृ-केशरी",
        "इदं नृसिंह-कवचं\nप्रह्लाद-मुख-मण्डितम्\nभक्तिमान् यः पठेन् नित्यं\nसर्व-पापैः प्रमुच्यते",
        "पुत्रवान् धनवान् लोके\nदीर्घायुर् उपजायते\nयं यं कामयते कामं\nतं तं प्राप्नोत्य् असंशयम्",
        "सर्वत्र जयम् आप्नोति\nसर्वत्र विजयी भवेत्\nभूम्य्-अन्तरीक्ष-दिव्यानां\nग्रहाणां विनिवारणम्",
        "वृश्चिकोरग-सम्भूत\nविषापहरणं परम्\nब्रह्म-राक्षस-यक्षाणां\nदूरोत्सारण-कारणम्",
        "भूर्जे वा ताल-पत्रे वा\nकवचं लिखितं शुभम्\nकर-मूले धृतं येन\nसिध्येयुः कर्म-सिद्धयः",
        "देवासुर-मनुष्येषु\nस्वं स्वम् एव जयं लभेत्\nएक-सन्ध्यं त्रि-सन्ध्यं वा\nयः पठेन् नियतो नरः",
        "सर्व-मङ्गल-माङ्गल्यं\nभुक्तिं मुक्तिं च विन्दति\nद्वा-त्रिंशति-सहस्राणि\nपठेच् छुद्धात्मनां नृणाम्",
        "कवचस्यास्य मन्त्रस्य\nमन्त्र-सिद्धिः प्रजायते\nअनेन मन्त्र-राजेन\nकृत्वा भस्माभिमन्त्रणम्",
        "तिलकं विन्यसेद् यस् तु\nतस्य ग्रह-भयं हरेत्\nत्रि-वारं जपमानस् तु\nदत्तं वार्य् अभिमन्त्र्य च",
        "प्राशयेद् यो नरो मन्त्रं\nनृसिंह-ध्यानम् आचरेत्\nतस्य रोगाः प्रणश्यन्ति\nये च स्युः कुक्षि-सम्भवाः",
        "किम् अत्र बहुनोक्तेन\nनृसिंह-सदृशो भवेत्\nमनसा चिन्तितं यत् तु\nस तच् चाप्नोत्य् असंशयम्",
        "गर्जन्तं गर्जयन्तं निज-भुज-पटलं स्फोटयन्तं हठन्तं\nरूप्यन्तं तापयन्तं दिवि भुवि दितिजं क्षेपयन्तं क्षिपन्तम्\nक्रन्दन्तं रोषयन्तं दिशि दिशि सततं संहरन्तं भरन्तं\nवीक्षन्तं घूर्णयन्तं शर-निकर-शतैर् दिव्य-सिंहं नमामि\nइति श्री-ब्रह्माण्ड-पुराणे प्रह्लादोक्तं श्री-नृसिंह-कवचं सम्पूर्णम्"
      ],
      translations: [
        "I shall now recite the Nrsimha-kavaca, formerly spoken by Prahlada Maharaja. It is most pious, vanquishes all kinds of impediments, and provides one all protection.",
        "It bestows upon one all opulences and can give one elevation to the heavenly planets or liberation. One should meditate on Lord Nrsimha, Lord of the universe, seated upon a golden throne.",
        "His mouth is wide open, He has three eyes, and He is as radiant as the autumn moon. He is embraced by Laksmidevi on his left side, and His form is the shelter of all opulences, both material and spiritual.",
        "The Lord has four arms, and His limbs are very soft. He is decorated with golden earrings. His chest is resplendent like the lotus flower, and His arms are decorated with jewel-studded ornaments.",
        "He is dressed in a spotless yellow garment, which exactly resembles molten gold. He is the original cause of existence, beyond the mundane sphere, for the great demigods headed by Indra. He appears bedecked with rubies which are blazingly effulgent.",
        "His two feet are very attractive, and He is armed with various weapons such as the conch, disc, etc. Garuda joyfully offers prayers with great reverence.",
        "Having seated Lord Nrsimhadeva upon the lotus of one\u0027s heart, one should recite the following mantra: May Lord Nrsimha, who protects all the planetary systems, protect my head.",
        "Although the Lord is all-pervading, He hid Himself within a pillar. May He protect my speech and the results of my activities. May Lord Nrsimha, whose eyes are the sun, and fire, protect my eyes.",
        "May Lord Nrhari, who is pleased by the prayers offered by the best of sages, protect my memory. May He who has the nose of a lion protect my nose, and may He whose face is very dear to the goddess of fortune protect my mouth.",
        "May Lord Nrsimha, who is the knower of all sciences, protect my sense of taste. May He whose face is beautiful as the full moon and who is offered prayers by Prahlada Maharaja protect my face.",
        "May Lord Nrsimha protect my throat. He is the sustainer of the earth and the performer of unlimitedly wonderful activities. May He protect my shoulders. His arms are resplendent with transcendental weapons. May He protect my shoulders.",
        "May the Lord, who bestows benedictions upon the demigods, protect my hands, and may He protect me from all sides. May He who is achieved by the perfect yogis protect my heart, and may Lord Hari protect my dwelling place.",
        "May He who ripped apart the chest and abdomen of the great demon Hiranyaksa protect my waist, and may Lord Nrhari protect my navel. He is offered prayers by Lord Brahma, who has sprung from his own navel.",
        "May He on whose hips rest all the universes protect my hips. May the Lord protect my private parts. He is the knower of all mantras and all mysteries, but He Himself is not visible.",
        "May He who is the original Cupid protect my thighs. May He who exhibits a human-like form protect my knees. May the remover of the burden of the earth, who appears in a form which is half-man and half-lion, protect my calves.",
        "May the bestower of heavenly opulence protect my feet. He is the Supreme Controller in the form of a man and lion combined. May the thousand-headed Supreme enjoyer protect my body from all sides and in all respects.",
        "May that most ferocious personality protect me from the east. May He who is superior to the greatest heroes protect me from the southeast, which is presided over by Agni. May the Supreme Visnu protect me from the south, and may that person of blazing luster protect me from the southwest.",
        "May the Lord of everything protect me from the west. His faces are everywhere, so please may He protect me from this direction. May Lord Nrsimha protect me from the northwest, which is predominated by Vayu, and may He whose form is in itself the supreme ornament protect me from the north, where Soma resides.",
        "May the all-auspicious Lord, who Himself bestows all-auspiciousness, protect from the northeast, the direction of the sun-god, and may He who is death personified protect me from fear of death and rotation in this material world.",
        "This Nrsimha-kavaca has been ornamented by issuing from the mouth of Prahlada Maharaja. A devotee who reads this becomes freed from all sins.",
        "Whatever one desires in this world he can attain without doubt. One can have wealth, many sons, and a long life.",
        "He becomes victorious who desires victory, and indeed becomes a conqueror. He wards off the influence of all planets, earthly, heavenly, and everything in between.",
        "This is the supreme remedy for the poisonous effects of serpents and scorpions, and Brahma-raksasa ghosts and Yaksas are driven away.",
        "One may write this most auspicious prayer on his arm, or inscribe it on a palm-leaf and attach it to his wrist, and all his activities will become perfect.",
        "One who regularly chants this prayer, whether once or thrice (daily), he becomes victorious whether among demigods, demons, or human beings.",
        "One who with purified heart recites this prayer 32,000 times attains the most auspicious of all auspicious things, and material enjoyment and liberation are already understood to be available to such a person.",
        "This Kavaca-mantra is the king of all mantras. One attains by it what would be attained by anointing oneself with ashes and chanting all other mantras.",
        "Having marked one’s body with tilaka, taking acamana with water, and reciting this mantra three times, one will find that the fear of all inauspicious planets is removed.",
        "That person who recites this mantra, meditating upon Lord Nrsimhadeva, has all of his diseases vanquished, including those of the abdomen.",
        "Why should more be said? One acquires qualitative oneness with Narasimha Himself. There is no doubt that the desires in the mind of one who meditates will be granted.",
        "Lord Nrsimha roars loudly and causes others to roar. With His multitudes of arms He tears the demons asunder and kills them in this way. He is always seeking out and tormenting the demoniac descendants of Diti, both on this earth planet and in the higher planets, and He throws them down and scatters them. He cries with great anger as He destroys the demons in all directions, yet with His unlimited hands He sustains, protects, and nourishes the cosmic manifestation. I offer my respectful obeisances to the Lord, who has assumed the form of a transcendental lion."
      ]
    },

    "167": {
      title: "श्री नृसिंह नख स्तुति (Śrī Nṛsiṁha Nakha Stuti)",
      transliterations: [
        "पान्त्वस्मान् पुरुहूतवैरि-बलवन्-मातङ्ग माद्यद्घटा\nकुम्भोच्चाद्रि-विपाटनाधिक-पटु प्रत्येक वज्रायिताः\nश्रीमत्-कण्ठीरवास्य-प्रतत-सुनखरा दारितारातिदूर\nप्रध्वस्त-ध्वान्त शान्त प्रवितत मनसा भाविता भूरिभागैः",
        "लक्ष्मीकान्त समन्ततो:\u0027पि कलयन् नैवेशितुस्ते समं\nपश्याम्युत्तमवस्तु दूरतरतोपास्तं रसो यो:\u0027ष्टमः\nयद्रोषोत्करदक्ष नेत्र कुटिल प्रान्तोत्थिताग्नि स्फुरत्\nखद्योतोपम विश्फुलिङ्ग-भसिता ब्रह्मेशशक्रोत्कराः\nइति श्रीमद् आनन्दतीर्थ भगवत् पादाचार्य विरचिता श्री नरसिंह नखस्तुतिः सम्पूर्णम्"
      ],
      translations: [
        "May the expansive and sharp nails of the beautiful lion-faced Lord protect us; nails which are each like a Vajra weapon, exceptionally skilled in tearing open the mountain-like frontal globes of the intoxicated elephants of Indra’s enemies (the demons), and which are meditated upon by the fortunate whose minds are peaceful and expansive after the darkness of ignorance has been utterly destroyed from afar.",
        "O Lord of Lakshmi, even after searching everywhere, I do not see any superior object equal to You, the Lord; You are far beyond all else, like an eighth flavor beyond the known seven. The groups of Brahmas, Shivas, and Indras are reduced to ashes by the sparks, resembling fireflies, rising from the fire born of the curved corners of Your eyes during Your intense anger."
      ]
    },

    "168": {
      title: "श्री नारायण कवचम् (Śrī Nārāyaṇa Kavacam)",
      transliterations: [
        "ओम् हरिर् विदध्यान् मम सर्व-रक्षां\nन्यस्ताङ्घ्रि-पद्मः पतगेन्द्र-पृष्ठे\nदरारि-चर्मासि-गदेषु-चाप\nपाशान् दधानो ’ष्ट-गुनो ’ष्ट-बाहुः",
        "जलेषु मां रक्षतु मत्स्य-मूर्तिर्\nयादो-गणेभ्यो वरुणस्य पाशात्\nस्थलेषु मायावटु-वामनो व्यात्\nत्रिविक्रमः खे वतु विश्वरूपः",
        "दुर्गेष्व् अटव्य्-आजि-मुखादिषु प्रभुः\nपायान् नृसिंहो ’सुर-यूथपारिः\nविमुञ्चतो यस्य महाट्ट-हासं\nदिशो विनेदुर् न्यपतंश् च गर्भाः",
        "रक्षत्व् असौ माध्वनि यज्ञ-कल्पः\nस्व-दंष्ट्रयोन्नीत-धरो वराहः\nरामो ’द्रि-कूटेष्व् अथ विप्रवासे\nसलक्ष्मणो ’व्याद् भरताग्रजो ’स्मान्",
        "माम् उग्र-धर्माद् अखिलात् प्रमादान्\nनारायणः पातु नरश् च हासात्\nदत्तस् त्व् अयोगाद् अथ योग-नाथः\nपायाद् गुणेशः कपिलः कर्म-बन्धात्",
        "सनत्-कुमारो ’वतु कामदेवाद्\nधयशीर्षा मां पथि देव-हेलनात्\nदेवर्षि-वर्यः पुरुषार्चनान्तरात्\nकूर्मो हरिर् मां निरयाद् अशेषात्",
        "धन्वन्तरिर् भगवान् पात्व् अपथ्याद्\nद्वन्द्वाद् भयाद् ऋषभो निर्जितात्मा\nयज्ञश् च लोकाद् अवताज् जनान्ताद्\nबलो गणात् क्रोध-वशाद् अहीन्द्रः",
        "द्वैपायनो भगवान् अप्रबोधाद्\nबुद्धस् तु पाषण्ड-गण-प्रमादात्\nकल्किः कलेः काल-मलात् प्रपातु\nधर्मावनायोरु-कृतावतारः",
        "मां केशवो गदया प्रातर् अव्याद्\nगोविन्द आसङ्गवम् आत्त-वेणुः\nनारायणः प्राह्ण उदात्त-शक्तिर्\nमध्यन्-दिने विष्णुर् अरीन्द्र-पाणिः",
        "देवो ’पराह्णे मधु-होग्रधन्वा\nसायं त्रि-धामावतु माधवो माम्\nदोषे हृषीकेश उतार्ध-रात्रे\nनिशीथ एको ’वतु पद्मनाभः",
        "श्रीवत्स-धामापर-रात्र ईशः\nप्रत्यूष ईशो ’सि-धरो जनार्दनः\nदामोदरो ’व्याद् अनुसन्ध्यं प्रभाते\nविश्वेश्वरो भगवान् काल-मूर्तिः",
        "चक्रं युगान्तानल-तिग्म-नेमि\nभ्रमत् समन्ताद् भगवत्-प्रयुक्तम्\nदन्दग्धि दन्दग्ध्य् अरि-सैन्यम् आशु\nकक्षं यथा वात-सखो हुताशः",
        "गदे ’शनि-स्पर्शन-विस्फुलिङ्गे\nनिष्पिण्ढि निष्पिण्ढ्य् अजित-प्रियासि\nकुष्माण्ड-वैनायक-यक्ष-रक्षो\nभूत-ग्रहांश् चूर्णय चूर्णयारीन्",
        "त्वं यातुधान-प्रमथ-प्रेत-मातृ\nपिशाच-विप्रग्रह-घोर-दृष्टीन्\nदरेन्द्र विद्रावय कृष्ण-पूरितो\nभीम-स्वनो ’रेर् हृदयानि कम्पयन्",
        "त्वं तिग्म-धारासि-वरारि-सैन्यम्\nईश-प्रयुक्तो मम छिन्धि छिन्धि\nचक्षूंषि चर्मञ् छत-चन्द्र छादय\nद्विषाम् अघोनां हर पाप-चक्षुषाम्",
        "यन् नो भयं ग्रहेभ्यो ’भूत्\nकेतुभ्यो नृभ्य एव च\nसरीसृपेभ्यो दंष्ट्रिभ्यो\nभूतेभ्यो ’ंहोभ्य एव च",
        "सर्वाण्य् एतानि भगवन्\nनाम-रूपानुकीर्तनात्\nप्रयान्तु सङ्क्षयं सद्यो\nये नः श्रेयः-प्रतीपकाः",
        "गरुडो भगवान् स्तोत्र\nस्तोभश् छन्दोमयः प्रभुः\nरक्षत्व् अशेष-कृच्छ्रेभ्यो\nविष्वक्सेनः स्व-नामभिः",
        "सर्वापद्भ्यो हरेर् नाम\nरूप-यानायुधानि नः\nबुद्धीन्द्रिय-मनः-प्राणान्\nपान्तु पार्षद-भूषणाः",
        "यथा हि भगवान् एव\nवस्तुतः सद् असच् च यत्\nसत्येनानेन नः सर्वे\nयान्तु नाशम् उपद्रवाः",
        "यथैकात्म्यानुभावानां\nविकल्प-रहितः स्वयम्\nभूषणायुध-लिङ्गाख्या\nधत्ते शक्तीः स्व-मायया",
        "तेनैव सत्य-मानेन\nसर्व-ज्ञो भगवान् हरिः\nपातु सर्वैः स्वरूपैर् नः\nसदा सर्वत्र सर्व-गः",
        "विदिक्षु दिक्षूर्ध्वम् अधः समन्ताद्\nअन्तर् बहिर् भगवान् नारसिंहः\nप्रहापयḻ लोक-भयं स्वनेन\nस्व-तेजसा ग्रस्त-समस्त-तेजाः",
        "मघवन्न् इदम् आख्यातं\nवर्म नारायणात्मकम्\nविजेष्यसे ’ञ्जसा येन\nदंशितो ’सुर-यूथपान्",
        "एतद् धारयमाणस् तु\nयं यं पश्यति चक्षुषा\nपदा वा संस्पृशेत् सद्यः\nसाध्वसात् स विमुच्यते",
        "न कुतश्चिद् भयं तस्य\nविद्यां धारयतो भवेत्\nराज-दस्यु-ग्रहादिभ्यो\nव्याध्य्-आदिभ्यश् च कर्हिचित्"
      ],
      translations: [
        "The Supreme Lord, who sits on the back of the bird Garuḍa, touching him with His lotus feet, holds eight weapons — the conchshell, disc, shield, sword, club, arrows, bow and ropes. May that Supreme Personality of Godhead protect me at all times with His eight arms. He is all-powerful because He fully possesses the eight mystic powers [aṇimā, laghimā, etc.].",
        "May the Lord, who assumes the body of a great fish, protect me in the water from the fierce animals that are associates of the demigod Varuṇa. By expanding His illusory energy, the Lord assumed the form of the dwarf Vāmana. May Vāmana protect me on the land. Since the gigantic form of the Lord, Viśvarūpa, conquers the three worlds, may He protect me in the sky.",
        "May Lord Nṛsiṁhadeva, who appeared as the enemy of Hiraṇyakaśipu, protect me in all directions. His loud laughing vibrated in all directions and caused the pregnant wives of the asuras to have miscarriages. May that Lord be kind enough to protect me in difficult places like the forest and battlefront.",
        "The Supreme indestructible Lord is ascertained through the performance of ritualistic sacrifices and is therefore known as Yajñeśvara. In His incarnation as Lord Boar, He raised the planet earth from the water at the bottom of the universe and kept it on His pointed tusks. May that Lord protect me from rogues on the street. May Paraśurāma protect me on the tops of mountains, and may the elder brother of Bharata, Lord Rāmacandra, along with His brother Lakṣmaṇa, protect me in foreign countries.",
        "May Lord Nārāyaṇa protect me from unnecessarily following false religious systems and falling from my duties due to madness. May the Lord in His appearance as Nara protect me from unnecessary pride. May Lord Dattātreya, the master of all mystic power, protect me from falling while performing bhakti-yoga, and may Lord Kapila, the master of all good qualities, protect me from the material bondage of fruitive activities.",
        "May Sanat-kumāra protect me from lusty desires. As I begin some auspicious activity, may Lord Hayagrīva protect me from being an offender by neglecting to offer respectful obeisances to the Supreme Lord. May Devarṣi Nārada protect me from committing offenses in worshiping the Deity, and may Lord Kūrma, the tortoise, protect me from falling to the unlimited hellish planets.",
        "May the Supreme Personality of Godhead in His incarnation as Dhanvantari relieve me from undesirable eatables and protect me from physical illness. May Lord Ṛṣabhadeva, who conquered His inner and outer senses, protect me from fear produced by the duality of heat and cold. May Yajña protect me from defamation and harm from the populace, and may Lord Balarāma as Śeṣa protect me from envious serpents.",
        "May the Personality of Godhead in His incarnation as Vyāsadeva protect me from all kinds of ignorance resulting from the absence of Vedic knowledge. May Lord Buddhadeva protect me from activities opposed to Vedic principles and from laziness that causes one to madly forget the Vedic principles of knowledge and ritualistic action. May Kalkideva, the Supreme Personality of Godhead, who appeared as an incarnation to protect religious principles, protect me from the dirt of the Age of Kali.",
        "May Lord Keśava protect me with His club in the first portion of the day, and may Govinda, who is always engaged in playing His flute, protect me in the second portion of the day. May Lord Nārāyaṇa, who is equipped with all potencies, protect me in the third part of the day, and may Lord Viṣṇu, who carries a disc to kill His enemies, protect me in the fourth part of the day.",
        "May Lord Madhusūdana, who carries a bow very fearful for the demons, protect me during the fifth part of the day. In the evening, may Lord Mādhava, appearing as Brahmā, Viṣṇu and Maheśvara, protect me, and in the beginning of night may Lord Hṛṣīkeśa protect me. At the dead of night [in the second and third parts of night] may Lord Padmanābha alone protect me.",
        "May the Supreme Personality of Godhead, who bears the Śrīvatsa on His chest, protect me after midnight until the sky becomes pinkish. May Lord Janārdana, who carries a sword in His hand, protect me at the end of night [during the last four ghaṭikās of night]. May Lord Dāmodara protect me in the early morning, and may Lord Viśveśvara protect me during the junctions of day and night.",
        "Set into motion by the Supreme Personality of Godhead and wandering in all the four directions, the disc of the Supreme Lord has sharp edges as destructive as the fire of devastation at the end of the millennium. As a blazing fire burns dry grass to ashes with the assistance of the breeze, may that Sudarśana cakra burn our enemies to ashes.",
        "O club in the hand of the Supreme Personality of Godhead, you produce sparks of fire as powerful as thunderbolts, and you are extremely dear to the Lord. I am also His servant. Therefore kindly help me pound to pieces the evil living beings known as Kuṣmāṇḍas, Vaināyakas, Yakṣas, Rākṣasas, Bhūtas and Grahas. Please pulverize them.",
        "O best of conchshells, O Pāñcajanya in the hands of the Lord, you are always filled with the breath of Lord Kṛṣṇa. Therefore you create a fearful sound vibration that causes trembling in the hearts of enemies like the Rākṣasas, pramatha ghosts, Pretas, Mātās, Piśācas and brāhmaṇa ghosts with fearful eyes.",
        "O king of sharp-edged swords, you are engaged by the Supreme Personality of Godhead. Please cut the soldiers of my enemies to pieces. Please cut them to pieces! O shield marked with a hundred brilliant moonlike circles, please cover the eyes of the sinful enemies. Pluck out their sinful eyes.",
        "May the glorification of the transcendental name, form, qualities and paraphernalia of the Supreme Personality of Godhead protect us from the influence of bad planets, meteors, envious human beings, serpents, scorpions, and animals like tigers and wolves. May it protect us from ghosts and the material elements like earth, water, fire and air, and may it also protect us from lightning and our past sins...",
        "...We are always afraid of these hindrances to our auspicious life. Therefore, may they all be completely destroyed by the chanting of the Hare Kṛṣṇa mahā-mantra.",
        "Lord Garuḍa, the carrier of Lord Viṣṇu, is the most worshipable lord, for he is as powerful as the Supreme Lord Himself. He is the personified Vedas and is worshiped by selected verses. May he protect us from all dangerous conditions, and may Lord Viṣvaksena, the Personality of Godhead, also protect us from all dangers by His holy names.",
        "May the Supreme Personality of Godhead’s holy names, His transcendental forms, His carriers and all the weapons decorating Him as personal associates protect our intelligence, senses, mind and life air from all dangers.",
        "The subtle and gross cosmic manifestation is material, but nevertheless it is nondifferent from the Supreme Personality of Godhead because He is ultimately the cause of all causes. Cause and effect are factually one because the cause is present in the effect. Therefore the Absolute Truth, the Supreme Personality of Godhead, can destroy all our dangers by any of His potent parts.",
        "The Supreme Personality of Godhead, the living entities, the material energy, the spiritual energy and the entire creation are all individual substances. In the ultimate analysis, however, together they constitute the supreme one, the Personality of Godhead. Therefore those who are advanced in spiritual knowledge see unity in diversity. For such advanced persons, the Lord’s bodily decorations, His name, His fame, His attributes and forms and the weapons in His hand are manifestations of the strength of His potency...",
        "...According to their elevated spiritual understanding, the omniscient Lord, who manifests various forms, is present everywhere. May He always protect us everywhere from all calamities.",
        "Prahlāda Mahārāja loudly chanted the holy name of Lord Nṛsiṁhadeva. May Lord Nṛsiṁhadeva, roaring for His devotee Prahlāda Mahārāja, protect us from all fear of dangers created by stalwart leaders in all directions through poison, weapons, water, fire, air and so on. May the Lord cover their influence by His own transcendental influence. May Nṛsiṁhadeva protect us in all directions and in all corners, above, below, within and without.",
        "Viśvarūpa continued: O Indra, this mystic armor related to Lord Nārāyaṇa has been described by me to you. By putting on this protective covering, you will certainly be able to conquer the leaders of the demons.",
        "If one employs this armor, whomever he sees with his eyes or touches with his feet is immediately freed from all the above-mentioned dangers.",
        "This prayer, Nārāyaṇa-kavaca, constitutes subtle knowledge transcendentally connected with Nārāyaṇa. One who employs this prayer is never disturbed or put in danger by the government, by plunderers, by evil demons or by any type of disease."
      ]
    },

    "169": {
      title: "श्रीशचीसुताष्टकम् (नव गौरवरं)",
      transliterations: [
        "नव गौरवरं नवपुष्प-शरं नवभाव-धरं नवलास्य-परम्।\nनवहास्य-करं नवहेम-वरं प्रणमामि शचीसुत-गौरवरम्॥ (१)",
        "नवप्रेम-युतं नवनीत-शुचं नववेश-कृतं नवप्रेम-रसम्।\nनवधा विलसत शुभप्रेममयं प्रणमामि शचीसुत-गौरवरम्॥ (२)",
        "हरिभक्ति-परं हरिनाम-धरं कर-जाप्य-करं हरिनाम-परम्।\nनयने सततं प्रणयाश्रु-धरं प्रणमामि शचीसुत-गौरवरम्॥ (३)",
        "सततं जनता-भव-ताप-हरं परमार्थ-परायण-लोक-गतिम्।\nनव-लेह-करं जगत्-ताप-हरम् प्रणमामि शचीसुत-गौरवरम्॥ (४)",
        "निज-भक्ति-करं प्रिय-चारुतरं नट-नर्तन-नागर-राज-कुलम्।\nकुल-कामिनी-मानस-लास्य-करम् प्रणमामि शचीसुत-गौरवरम्॥ (५)",
        "करताल-वलं कल-कण्ठ-रवं मृदु-वाद्य-सुवीणिकया मधुरम्।\nनिज-भक्ति-गुणावृत-नाट्य-करम् प्रणमामि शचीसुत-गौरवरम्॥ (६)",
        "युगधर्म-युतं पुनर्नन्द-सुतं धरणी-सुचित्रं भव-भावोचितम्।\nतनु-ध्यान-चितं निज-वास-युतं प्रणमामि शचीसुत-गौरवरम्॥ (७)",
        "अरुणं नयनं चरणं वसनं वदने स्खलितं स्वक्-नाम-धरम्।\nकुरुते सुरसं जगतः जीवनम् प्रणमामि शचीसुत-गौरवरम्॥ (८)"
      ],
      translations: [
        "उनकी देह का रंग कुमकुम मिश्रित ताजे माखन की कान्ति के समान है। वे नवपुष्पों के बाणों से प्रहार करने वाले सुन्दर कामदेव हैं। वे सदैव भक्तिरस के नये-नये भावों का प्रदर्शित करते हैं। भाव-भंगिमाओं के साथ नृत्य उन्हें भाता है। वे हर समय नये-नये मजाक करते हैं जिससे सभी हँसते हैं। उनका रंग पिघले सोने के समान है। मैं शचीमाता के पुत्र श्रीगौरांग महाप्रभु को प्रणाम करता हूँ।",
        "वे सदैव भगवत्प्रेम के नवनवायमान प्रेम से युक्त रहते हैं। उनकी कान्ति नवनीत के समान है। वे सदैव नये स्वच्छ वस्त्र धारण करते हैं और श्रीकृष्ण-प्रेम के नये-नये रसों का आस्वादन करते हैं। भक्ति की नौ-विधियों का पालन करते हुए वे नौ प्रकार से प्रकाशित होते हैं। वे सर्वाधिक शुभकारी प्रेम से युक्त हैं। मैं शचीमाता के पुत्र श्रीगौरांग महाप्रभु को प्रणाम करता हूँ।",
        "वे श्रीहरि की भक्ति में लीन रहते हैं। वे नियमित रूप से हरि के नामों का जप करते हैं। जप करते समय वे अपनी अँगुलियों से उसे गिनते हैं। वे हरिनाम से आसक्त हैं और उनकी आँखों में सदैव प्रेम के आँसु भरे रहते हैं। मैं शचीमाता के पुत्र श्रीगौरांग महाप्रभु को प्रणाम करता हूँ।",
        "वे सदैव मनुष्यों के त्रितापों को हरते हैं। अपने परम लाभ को समझने वाले लोगों के लिए वे सर्वोच्च लक्ष्य हैं। वे लोगों को मधुमक्खी बनने के लिए प्रेरित करते हैं (जो कृष्णप्रेम रूपी शहद के लिए आतुर रहती है)। वे भौतिक जगत् की दावाग्नि को दूर करते हैं। मैं शचीमाता के पुत्र श्रीगौरांग महाप्रभु को प्रणाम करता हूँ।",
        "वे स्वयं अपनी भक्ति को बढ़ावा देते हैं। वे अपने प्रिय सेवकों के लिए सर्वाकर्षक हैं। अपने मधुर नृत्य से वे नटवर-नागर-राज के लक्षण दर्शाते हैं। वे गाँव की युवा स्त्रियों के मनों को नृत्य करने के लिए बाध्य करते हैं। मैं शचीमाता के पुत्र श्रीगौरांग महाप्रभु को प्रणाम करता हूँ।",
        "वे करताल बजाते हैं और उनके कण्ठ से मधुर ध्वनि प्रवाहित होती है तथा वीणा के राग धीरे-धीरे बजते हैं। इस प्रकार वे भक्तों को ऐसे नाट्य करने के लिए प्रेरित करते हैं जो स्वयं उनकी भक्ति से युक्त होते हैं। मैं शचीमाता के पुत्र श्रीगौरांग महाप्रभु को प्रणाम करता हूँ।",
        "वे युगधर्म संकीर्तन लेकर आये हैं, जो कलियुग का एकमात्र धर्म है। उनके रूप में नन्द महाराज के पुत्र पुनः प्रकट हुए हैं। वे पृथ्वी के असाधारण प्रदिप्त आभूषण हैं। जन्म-मृत्यु के संसार में उनके प्रचार का भाव अत्यन्त उपयुक्त है। उनका मन स्वयं अपने कृष्ण-रूप के चिन्तन पर स्थित रहता है। वे सदैव अपने धाम में निवास करते हैं। मैं शचीमाता के पुत्र श्रीगौरांग महाप्रभु को प्रणाम करता हूँ।",
        "उनके नेत्र, उनके तलवे और उनके वस्त्र प्रातःकालीन सूर्य के समान लालिमायुक्त हैं। जब वे स्वयं अपने नामों का उच्चारण करते हैं तो उनकी वाणी कम्पकम्पा उठती है। सम्पूर्ण जगत् में वे मधुर रसों को उजागर करते हैं। मैं शचीमाता के पुत्र श्रीगौरांग महाप्रभु को प्रणाम करता हूँ।"
      ]
    }
,
    "188": {
      title: "परमानन्द हे माधव (Paramānanda He Mādhava)",
      transliterations: [
        "परमानन्द हे माधव\nपादुन्गलुची मकराण्ड",
        "से-मकराण्ड पन-करि\nआनन्दे बोलो \u0027हरि हरि\u0027",
        "हरिङ्क नामे वन्ध वेल\nपरि करिवे चक-दोल",
        "से-चक-दोलाङ्क-पायारे\nमन-मो रहु निरन्तरे",
        "मन मो निरन्तरे रहू\n\u0027हा-कृष्ण\u0027 बोलि जिवा जाउ\nमोते उधार राधा-धव"
      ],
      translations: [
        "O supremely blissful Madhava! The nectar is coming from Your lotus feet.",
        "Drinking that nectar, I blissfully sing “Hari! Hari!”",
        "With the name of Hari, I am binding a raft on which Lord Jagannatha will ferry me across this ocean of material existence.",
        "My mind always remains at the lotus feet of that Lord Jagannatha who has very large round eyes.",
        "In this way, I call out \"Ha Krishna!\" and give up my life. O husband of Radharani, please deliver me."
      ]
    },

    "191": {
      title: "दशावतार स्तोत्र (प्रलयपयोधिजले धृतवानसि वेदम्)",
      transliterations: [
        "प्रलयपयोधिजले धृतवानसि वेदम्\nविहितवहित्र-चरित्रमखेदम्।\nकेशव धृत-मीनशरीर जय जगदीश हरे॥ (१)",
        "क्षितिरिह विपुलतरे तिष्ठति तव पृष्ठे\nधरणिधरणकिण-चक्रगरिष्ठे।\nकेशव धृत-कूर्मशरीर जय जगदीश हरे॥ (२)",
        "वसति दशनशिखरे धरणी तव लग्ना\nशशिनि कलङ्ककलेव निमग्ना।\nकेशव धृत-शूकररूप जय जगदीश हरे॥ (३)",
        "तव करकमलवरे नखमद्भुतशृङ्गम्\nदलितहिरण्यकशिपु-तनुभृङ्गम्।\nकेशव धृत-नरहरिरूप जय जगदीश हरे॥ (४)",
        "छलयसि विक्र मणे बलिमद्भुतवामन\nपदनखनीर-जनितजनपावन।\nकेशव धृत-वामनरूप जय जगदीश हरे॥ (५)",
        "क्षत्रियरुधिरमये जगदपगतपापं\nस्नपयसि पयसि शमितभवतापम्।\nकेशव धृत-भृगुपतिरूप जय जगदीश हरे॥ (६)",
        "वितरसि दिक्षु रणे दिक्पतिकमनीयं\nदशमुख-मौलिबलिं रमणीयम्।\nकेशव धृत-रामशरीर जय जगदीश हरे॥ (७)",
        "वहसि वपुषि विशदे वसनं जलदाभं\nहलहतिभीति-मिलित-यमुनाभम्।\nकेशव धृत-हलधररूप जय जगदीश हरे॥ (८)",
        "निन्दसि यज्ञविधेरहह श्रुतिजातं\nसदयहृदय दर्शित-पशुघातम्।\nकेशव धृत-बुद्धशरीर जय जगदीश हरे॥ (९)",
        "म्लेच्छनिवहनिधने कलयसि करवालं\nधूमकेतुमिव किमपि करालम्।\nकेशव धृत-कल्किशरीर जय जगदीश हरे॥ (१०)",
        "श्रीजयदेवकवेरिदमुदितमुदारं\nशृणु सुखदं शुभदं भवसारम्।\nकेशव धृत-दशविधरूप जय जगदीश हरे॥ (११)",
        "वेदानुद्धरते जगन्ति वहते भूगोलमुद्बिभ्रते\nदैत्यं दारयते बलिं छलयते क्षत्रक्षयं कुर्वते।\nपौलस्त्यं जयते हलं कलयते कारुण्यमातन्वते\nम्लेच्छान् मूर्च्छयते दशाकृतिकृते कृष्णाय तुभ्यं नमः॥ (१२)"
      ],
      translations: [
        "हे केशव! हे जगदीश! प्रलय के विशाल समुद्र में वेद नष्ट होने जा रहे थे और उनकी रक्षा करने के लिए आप एक विशाल मछली बनकर आये। मछली का रूप धारण करने वाले हे हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! दिव्य कछुवे के रूप में आपने अपनी विशाल पीठ पर मंदार पर्वत को धारण किया और क्षीरसागर के मंथन में देव-दानवों की सहायता की। विशाल पर्वत को अपनी पीठ पर धारण करने से आपकी पीठ पर एक चक्र का चिह्न बन गया, जो अत्यन्त सुन्दर है। कछुवे का रूप धारण करने वाले हे हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! पृथ्वी गर्भोदक सागर में जा गिरी थी और आपने अपने नथुनों के ऊपर उठाकर उसे उसके मूल स्थान पर स्थापित किया। शूकर रूप धारण करने वाले हे हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! जिस प्रकार कोई सरलता से अपनी अँगुलियों के बीच एक भौंरे को मसल देता है उसी प्रकार आपने भौंरे जैसे असुर हिरण्यकशिपु को अपने हस्तकमलों के सुन्दर तीक्ष्ण नाखूनों से विदीर्ण कर दिया। आधे नर एवं आधे सिंह का रूप धारण करने वाले हे हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! हे अद्भुत वामन (बौना)! अपने तीन विशाल पगों से आपने महाराज बलि को छला और अपने चरणकमलों के नाखून से बह निकले गंगाजल से आप सम्पूर्ण जगत् के लोगों को पवित्र करते हैं। एक बौने का रूप धारण करने वाले हे हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! कुरुक्षेत्र में आपने आसुरी राजाओं का वध करके पृथ्वी को उनके रक्त से स्नान करवाया। आपके द्वारा विश्वभर के पाप धुल गये और आपने जीवों को भौतिक जगत् के ताप से राहत दी। हे भृगुपति (परशुराम) का रूप धारण करने वाले हे हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! लंका के युद्ध में आपने दस सिर वाले असुर रावण का वध किया और उसके सिरों को इंद्र सहित दस दिशाओं के स्वामियों को भेंट दिया। इस असुर से पीड़ित वे सभी लम्बे काल से इस कार्य की प्रतीक्षा कर रहे थे। श्रीरामचन्द्र का रूप धारण करने वाले हे हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! अपने श्वेत रंग के शरीर पर आप नीले बादलों जैसे वस्त्र पहनते हैं। ये वस्त्र उस यमुना नदी के गहरे रंग के समान हैं जो आपके हल के प्रहार से भयभीत रहती है। हे बलराम, हे हल धारण करने वाले हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! हे करुणाभरे हृदय वाले बुद्ध, आपने वैदिक यज्ञों के अनुसार होने वाली निष्पाप पशुओं की हत्या को रोका। बुद्ध का रूप धारण करने वाले हे हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! कलियुग के अंत में आप एक धूमकेतु के समान प्रकट होते हैं और अपने हाथ में भयंकर तलवार द्वारा दुष्ट जंगली मनुष्य का विनाश करते हैं। कल्कि का रूप धारण करने वाले हे हरि! आपकी जय हो!",
        "हे केशव! हे जगदीश! इन दस अवतारों को धारण करने वाले हे हरि! आपकी जय हो! हे पाठकों कृपया कवि जयदेव के इस मधुर गीत को सुनिए क्योंकि यह सुख और सौभाग्य प्रदान करने वाला है और अंधकारमय जगत् की सर्वोत्तम वस्तु है।",
        "हे श्रीकृष्ण, मैं आपको प्रणाम करता हूँ। आप इन दस रूपों में प्रकट हुए। मत्स्य रूप में आपने वेदों की रक्षा, कूर्म रूप में अपनी पीठ पर मंदार पर्वत उठाया, वराह रूप में अपने नथुनों पर पृथ्वी को धारण किया, नरसिंह रूप में असुर हिरण्यकशिपु की छाती को विदीर्ण किया, वामन रूप में महाराज बलि को छला, परशुराम रूप में दुष्ट क्षत्रियों को दण्डित किया, रामचन्द्र रूप में पुलस्त्य पुत्र रावण का वध किया, बलराम रूप में आप हल धारण करने वाले हैं, बुद्ध रूप में सभी पर करुणा दर्शायी और कल्कि रूप में म्लेच्छों का वध किया।"
      ]
    }
,
    "128": {
      title: "श्री गुरु-परम्परा (कृष्ण हइते चतुर्मुख)",
      transliterations: [
        "कृष्ण हइते चतुर्मुख, हय कृष्ण सेवोन्मुख,\nब्रह्मा हइते नारदेर मति।\nनारद हइते व्यास, मध्व कहे व्यासदास,\nपूर्णप्रज्ञ पद्मनाभ-गति॥ (१)",
        "नृहरि माधव वंशे, अक्षोभ्य-परमहंसे,\nशिष्य बलि' अङ्गीकार करि।\nअक्षोभ्येर शिष्य जयतीर्थ नामे परिचय,\nताँर दास्ये ज्ञानसिन्धु तरे॥ (२)",
        "ताँहा हइते दयानिधि, ताँर दास विद्यानिधि,\nराजेन्द्र हइल ताँहा हइते।\nताँहार किंकर जयधर्म नामे परिचय,\nपरम्परा जान भाल मते॥ (३)",
        "जयधर्म दास्ये ख्याति, श्रीपुरुषोत्तम यति,\nताँहा हइते ब्रह्मण्यतीर्थ सूरि।\nव्यासतीर्थ ताँर दास, लक्ष्मीपति व्यासदास,\nताँहा हइते माधवेन्द्र पुरी॥ (४)",
        "माधवेन्द्रपुरीवर, शिष्यवर श्रीईश्वर,\nनित्यानन्द श्रीअद्वैत विभु।\nईश्वर पुरी के धन्य, करिलेन श्रीचैतन्य,\nजगद्गुरु गौर महाप्रभु॥ (५)",
        "महाप्रभु श्रीचैतन्य, राधाकृष्ण नहे अन्य,\nरूपानुग जनेर जीवन।\nविश्वम्भर प्रियवर, श्रीस्वरूप-दामोदर,\nश्रीगोस्वामी रूप-सनातन॥ (६)",
        "रूपप्रिय महाजन, जीव रघुनाथ हन,\nताँर प्रिय कवि कृष्णदास।\nकृष्णदासप्रियवर, नरोत्तम सेवावर,\nयाँर पद विश्वनाथ आश॥ (७)",
        "विश्वनाथ भक्तसाथ, बलदेव जगन्नाथ,\nताँर प्रियभक्तिविनोद।\nमहाभागवतवर, श्रीगौरकिशोरवर,\nहरि भजनेते याँर मोद॥ (८)",
        "इहाँरा परमहंस, गौराङ्गेर निज-वंश,\nताँदेर चरणे मम गति।\nआमि-सेवा-उदासीन, नामेते त्रिदंडी दीन,\nश्रीभक्तिसिद्धान्त सरस्वती॥ (९)",
        "श्रीवार्षभानवीवरा, सदा सेव्यसेवा परा\nताहार दयितदास नाम।\nतार प्रधान प्रचारक, श्रीभक्तिवेदान्त नाम,\nपतित जनेते दया धाम॥ (१०)"
      ],
      translations: [
        "सृष्टि के आरम्भ में चतुर्मुखी ब्रह्माजी ने भगवान् श्रीकृष्ण से भक्ति का ज्ञान प्राप्त किया। ब्रह्माजी ने यह ज्ञान देवर्षि नारद को तथा नारदमुनि ने इसे कृष्णद्वैपायन व्यास को दिया। श्रीपाद मध्वाचार्य जो पूर्णप्रज्ञ तीर्थ के नाम से भी जाने जाते हैं वे स्वयं को व्यासदेव के सेवक कहते थे और वे पद्मनाभ तीर्थ के गुरु एवं एकमात्र आश्रय थे।",
        "मध्वाचार्य के दो अन्य प्रमुख शिष्य थे नृहरि तीर्थ और माधवतीर्थ। माधव तीर्थ ने महान् परमहंस अक्षोभ्य तीर्थ को शिष्य के रूप में स्वीकार किया। अक्षोभ्य तीर्थ के प्रमुख शिष्य थे जयतीर्थ, और जिनकी सेवा करना ज्ञानसिन्धु के जीवन का एकमात्र उद्देश्य था।",
        "ज्ञानसिन्धु ने भक्ति का यह ज्ञान दयानिधि को दिया, जिनके सेवक थे विद्यानिधि। विद्यानिधि ने इसे राजेन्द्र तीर्थ को दिया और उन्होंने जयधर्म को अपने सेवक के रूप में स्वीकार किया। इस प्रकार आप ध्यानपूर्वक इस गुरु-शिष्य परम्परा को समझिये।",
        "महान् संन्यासी श्रीपुरुषोत्तम तीर्थ ने भक्ति का यह ज्ञान जयधर्म से स्वीकार किया। पुरुषोत्तम तीर्थ के प्रमुख शिष्य थे महान् संत सुब्रह्मण्य तीर्थ, जिनके सेवक हुए व्यासतीर्थ। व्यासतीर्थ के सेवक थे लक्ष्मीपति तीर्थ और उनके शिष्य थे माधवेन्द्र पुरी गोस्वामी।",
        "माधवेन्द्र पुरी के प्रमुख शिष्यों थे ईश्वर पुरी और भगवान् के दो प्रसिद्ध अवतार श्रीनित्यानन्द प्रभु और श्रीअद्वैत प्रभु। सम्पूर्ण जगत् के गुरु श्रीचैतन्य महाप्रभु ने ईश्वर पुरी को परम सौभाग्य प्रदान करते हुए उन्हें अपना गुरु बनाया।",
        "श्रीचैतन्य महाप्रभु श्री राधा-कृष्ण से अभिन्न हैं और श्रील रूप गोस्वामी के चरणचिह्नों का अनुगमन करने वैष्णवों के प्राणस्वरूप हैं। श्रील स्वरूपदामोदर गोस्वामी, श्रील रूप गोस्वामी और श्रील सनातन गोस्वामी ने श्रीविश्वम्भर (श्रीचैतन्य महाप्रभु) को महान् आनन्द प्रदान किया।",
        "जीव एवं रघुनाथदास गोस्वामी रूपगोस्वामी के अत्यन्त प्रिय हुए। रघुनाथदास कृष्णदास कविराज गोस्वामी के प्रिय शिष्य थे, जो लोकनाथ गोस्वामी के घनिष्ठ मित्र थे। लोकनाथ गोस्वामी के एकमात्र शिष्य थे नरोत्तम दास ठाकुर, जो सदैव अपने गुरु की सेवा में संलग्न रहते तथा कृष्णदास कविराज के अत्यन्त प्रिय थे। नरोत्तमदास ठाकुर के चरणकमलों की सेवा विश्वनाथ चक्रवर्ती की एकमात्र अभिलाषा थी।",
        "विश्वनाथ चक्रवर्ती ठाकुर बलदेव विद्याभूषण के शिक्षा गुरु थे। जगन्नाथदास बाबाजी बलदेव विद्याभूषण के बाद आचार्यों में सर्वप्रमुख थे और श्रीभक्तिविनोद ठाकुर के प्रिय शिक्षा गुरु थे। भक्तिविनोद ठाकुर के घनिष्ठ मित्र थे महाभागवत श्रीगौरकिशोरदास बाबाजी, जो सदैव हरिभजन में आनन्द लेते।",
        "ये सभी महान् वैष्णव परमहंस श्रीगौरांग महाप्रभु के आध्यात्मिक परिवार के सदस्य हैं। इनके चरणकमल ही मेरा आश्रय हैं। मैं भक्ति के प्रति उदासीन हूँ और दीन हूँ तथा मेरा नाम है श्रीभक्तिसिद्धान्त सरस्वती।",
        "श्रीवार्षभानवी दयित (श्रील भक्तिसिद्धान्त सरस्वती का दीक्षित नाम जिसका अर्थ है वृषभानुपुत्री श्रीराधारानी के प्रिय) सदैव अपने गुरुदेव श्रील गौरकिशोर दास बाबाजी की सेवा में रत है। उनके प्रमुख शिष्य श्रील ए.सी.भक्तिवेदान्त स्वामी प्रभुपाद ने श्रीचैतन्य महाप्रभु के संदेश को विश्वभर में फैलाया है और इस प्रकार वे सभी पतित जीवों के लिए दया और करुणा के स्रोत हैं।"
      ]
    }
,
    "242": {
      title: "श्री सुदर्शन अष्टकम् (Śrī Sudarśana Aṣṭakam)",
      transliterations: [
        "प्रतिभटश्रेणी भीषण वरगुणस्तोम भूषण\nजनिभयस्थान तारण जगदवस्थान कारण\nनिखिलदुष्कर्म कर्शन निगमसद्धर्म दर्शन\nजय जय श्री सुदर्शन जय जय श्री सुदर्शन",
        "शुभजगद्रूप मण्डन सुरगणत्रास खण्डन\nशतमखब्रह्मवन्दित शतपथब्रह्मनन्दित\nप्रथितविद्वत् सपक्षित भजदहीर्बुध्न्यलक्षित\nजय जय श्री सुदर्शन जय जय श्री सुदर्शन",
        "स्फुटतटिज्जाल पिञ्जर पृथुतरज्वाल पञ्जर\nपरिगतप्रत्नविग्रह पटुतरप्रज्ञदुर्ग्रह\nप्रहरणग्राम मण्डित परिजनत्राणपण्डित\nजय जय श्री सुदर्शन जय जय श्री सुदर्शन",
        "निजपदप्रीतसद्गुण निरुपधिइस्फीत षड्गुण\nनिगमनिर्व्यूढवैभव निजपरव्यूहवैभव\nहरिहयद्वेषिदारण हरपुरप्लोषकारण\nजय जय श्री सुदर्शन जय जय श्री सुदर्शन",
        "दनुजविस्तारकर्तन जनितमिस्राविकर्तन\nदनुजविद्यानिकर्तन भजदविद्यानिवर्तन\nअमरदृष्टस्वविक्रम समर जुष्टभ्रमिक्रम\nजय जय श्री सुदर्शन जय जय श्री सुदर्शन",
        "प्रथिमुखालीढबन्धुर पृथुमहाहेतिदन्तुर\nविकटमाया बहिष्कृत विविधमाला परिष्कृत\nस्थिरमहायन्त्र तन्त्रित दृढदयातन्त्रयन्त्रित\nजय जय श्री सुदर्शन जय जय श्री सुदर्शन",
        "महितसम्पत् सदक्षर विहितसम्पत् षडक्षर\nषडरचक्र प्रतिष्ठित सकलतत्त्व प्रतिष्ठित\nविविधसकल्प कल्पक विबुधसङ्कल्प कल्पक\nजय जय श्री सुदर्शन जय जय श्री सुदर्शन",
        "भुवननेत्र त्रयीमय सवनतेजस्त्रयीमय\nनिरवधिस्वादु चिन्मय निखिलशक्ते जगन्मय\nअमितविश्वक्रियामय शमितविश्वग्भयामय\nजय जय श्री सुदर्शन जय जय श्री सुदर्शन",
        "द्वीचतुष्कमिदं प्रभूतसारं पठतां वेङ्कटनायकप्रणीतम्\nविषमे’पि मनोरथः प्रधावन् न विहन्येत रथाङ्गधुर्यगुप्तः"
      ],
      translations: [
        "Victory and Victory to you, oh Sudarshana, who is fearsome to hoards of enemies of devotees, who is ornament for all blessed actions, who helps one to cross the sea of samsara, who stabilizes the entire universe, who cuts off accumulated sins of bad actions, and who teaches righteous conduct.",
        "Victory and Victory to you, oh Sudarshana, who is the ornament of the Lord of the universe, who removes the fear of all asuras towards devas, who is worshipped by Lord Brahma and hosts of others, who is worshipped by the Sat Patha Brahmana, who is on the part of devotees for overcoming contestants, and who is worshipped by Lord Shiva.",
        "Victory and Victory to you, oh Sudarshana, who is surrounded by resplendent light like a halo, who is surrounded by forms of Vishnu, who is difficult for even great scholars to grasp, and who helps devotees to cross problems.",
        "Victory and Victory to you, oh Sudarshana, who is firmly attached to righteous people, who is the natural home for six good assets, who took the form with a horse\u0027s neck (Hayagriva connection), and who was the reason for the destruction of the cities by Shiva.",
        "Victory and Victory to you, oh Sudarshana, who destroys the spread of asuras, who removes the sorrows of birth, aging and death, who wins over the art of war of asuras, who removes the false knowledge from his devotees, whose valour is praised by devas, and who rotates in various ways in a war.",
        "Victory and Victory to you, oh Sudarshana, who appeared with a fast forward gait which appeared very pretty, who is surrounded by several weapons, who expels the illusions sent by enemy in case of war, who decorates himself with several garlands, and who wears mercy while blessing devotees who worship him through tantra and yantras.",
        "Victory and Victory to you, oh Sudarshana, who gives the wealth of salvation and incomparable wealth to those who chant your six-lettered mantra, who is available in the yantra of six corners, who is a form in which all knowledge exists, who is able to complete all deeds that you take up, and who is the Kalpaka tree fulfilling all wishes.",
        "Victory and Victory to you, oh Sudarshana, who is the three Vedas which are the eye of the world, who is the form of the three fires of yagas, who is the eternal knowledge of true knowledge, who is a form of the power of the universe, who is the accomplisher of deeds that you take up, and who destroys all fears occurring in the world.",
        "This octet which fulfills all desires and gives the inner meaning of Lord Sudarshana, composed by Venkata Natha, if read, would fulfill desires and remove obstacles because of the glorious boon-granting powers of the Lord."
      ]
    },

    "245": {
      title: "सुन्दर बाला शचीर-दुलाल",
      transliterations: [
        "सुन्दर-बाला शचीर-दुलाल\nनाचत श्रीहरिकीर्तन में।\nभाले चन्दन तिलक मनोहर\nअलका शोभे कपोलन में॥ (१)",
        "शिरे चुड़ा दरशि बाले\nवन-फुल-माला हियापर डोले।\nपहिरन पीत-पीतांबर शोभे\nनूपुर रुणु-झुणु चरणों में॥ (२)",
        "राधा-कृष्ण एक तनु है\nनिधुवन-माझे वंशी बाजाये।\nविश्वरूप कि प्रभुजी सहि\nआओत प्रकटहि नदीया में॥ (३)",
        "कोई गायत है राधा-कृष्ण नाम\nकोई गायत है हरि-गुण गान।\nमंगल-तान मृदंग रसाल\nबाजत है कोई रंगन में॥ (४)"
      ],
      translations: [
        "श्रीहरि के नाम-कीर्तन पर नृत्य करता यह सुन्दर बालक शचीमाता का दुलारा पुत्र है। उसके कपाल पर चन्दन का मनोहारी तिलक लगा है और उसके घुँघराले बालों की लटें उसके गालों पर लटकती हुई अत्यन्त शोभायमान हैं।",
        "उसके सिर पर बालों का जूड़ा बना है और उसके हृदयस्थल पर वनफूलों की माला इधर-उधर डोल रही है। उसने पीले रंग के जगमगाते वस्त्र पहने हुए हैं और नाचते समय उसके पैरों में बँधे नूपुर रुण-झुण की ध्वनि करते हैं।",
        "श्री श्रीराधा और कृष्ण एक ही शरीर में मिल गये हैं और दोनों मिलकर निधुवन में बाँसुरी बजाते हैं। विश्वरूप के नाथ (श्रीगौरांग महाप्रभु) ने स्वयं को नदिया में इस भाव में प्रकट किया है।",
        "उस कीर्तन में कोई भक्त राधा-कृष्ण के नामों का कीर्तन कर रहा है, कोई भगवान् हरि के गुणों की महिमायें गा रहा है, जबकि कुछ अन्य मृदंग की मधुर मंगलतान बजा रहे हैं। पूरा दृश्य ऐसा है मानो रंग बरस रहा हो।"
      ]
    }
,
    "246": {
      title: "सुन्दर कुण्डल नैन विशाला",
      transliterations: [
        "सुन्दर कुण्डल नैन विशाला, गले सोहे वैजयन्तीमाला।\nया छवि की बलिहारी॥ राधेश्याम ...\nजय माधव मदनमुरारी राधेश्याम श्यामाश्याम।\nजय केशव कलिमलहारी राधेश्याम श्यामाश्याम॥ (१)",
        "कबहूँ लूट-लूट दधि खायो, कबहूँ मधुबन रास रचायो।\nनाचत विपिनविहारी॥ राधेश्याम ... (२)",
        "ग्वालबाल संग धेनु चराई, वन वन भ्रमत फिरे यदुराई।\nकाँधे कामर कारी॥ राधेश्याम ... (३)",
        "चुरा चुरा नवनीत जो खायो, ब्रज-वनितन पै नाम धरायो।\nमाखनचोर मुरारि॥ राधेश्याम ... (४)",
        "एकदिन मान इन्द्र को मार्यो, नख ऊपर गोवर्धन धार्यो।\nनाम पड्यो गिरिधारी॥ राधेश्याम ... (५)",
        "दुर्योधन का भोग न भायो, रूखो साग विदुर घर खायो।\nऐसे प्रेम-पुजारी॥ राधेश्याम ... (६)",
        "करुणा कर द्रौपदी पुकारी, पट में लिपट गये बनवारी।\nनिरख रहे नर नारी॥ राधेश्याम ... (७)",
        "भक्त-भक्त सब तुमने तारे, बिना भक्ति हम ठाड़े द्वारे।\nलीजौ खबर हमारी॥ राधेश्याम ... (८)",
        "अर्जुन के रथ हाँकन हारे, गीता के उपदेश तुम्हारे।\nचक्र-सुदर्शनधारी॥ राधेश्याम ... (९)"
      ],
      translations: [
        "हे कृष्ण, आप सुन्दर कुण्डल धारण करते हैं और आपके मधुर नयन अत्यन्त विशाल हैं। आपके कण्ठ में वैजयन्ती माला सुशोभित है। आपकी यह छवि अत्यन्त मनोहर है - राधेश्याम, श्यामा-श्याम!",
        "कई बार आप गुपचुप माखन चुराकर खाते हैं और कई बार आप मधुबन में गोपियों के साथ रासलीला रचाते हैं। आप वृन्दावन के वनों में विहार करते हैं - राधेश्याम, श्यामा-श्याम!",
        "अपने ग्वालमित्रों के संग आप गायें चराते हैं। आप यदुवंश-शिरोमणि हैं और अपने कंधे पर काला कम्बल लिए विभिन्न वनों में भ्रमण करते हैं - राधेश्याम, श्यामा-श्याम!",
        "हे मुरारि! चूँकि आपने बार-बार ब्रजगोपियों के घरों से ताजा माखन चुराया है, उन्होंने आपका नाम रखा है 'माखनचोर' - राधेश्याम, श्यामा-श्याम!",
        "एक दिन आपने गोवर्धन पर्वत को अपने नाखून पर उठाकर इन्द्र का गर्व चूर-चूर किया और इसलिए आपका नाम पड़ा गिरिधारी - राधेश्याम, श्यामा-श्याम!",
        "आपने दुष्ट दुर्योधन द्वारा अर्पित छप्पन भोग त्याग दिये और अपने भक्त विदुर द्वारा अर्पित रूखा साग खाया। इसलिए केवल प्रेम द्वारा ही आपकी पूजा की जा सकती है, बाह्य आडम्बरों से नहीं - राधेश्याम, श्यामा-श्याम!",
        "जब द्रौपदी ने कातर भाव में आपको पुकारा तो वनों में भ्रमण करने वाले हे श्रीकृष्ण! आपने वस्त्र प्रदान करके उसकी लाज बजाई। सभी लोग इस अद्भुत दृश्य को देखते रह गये - राधेश्याम, श्यामा-श्याम!",
        "आप अपने प्रत्येक भक्त की विशेष प्रकार से रक्षा करते हैं। किन्तु दुर्भाग्य से हम भक्तिहीन आपके द्वार पर खड़े हैं। कृपया हमारी ओर भी थोड़ा ध्यान दीजिए - राधेश्याम, श्यामा-श्याम!",
        "आप अर्जुन के सारथी बने और युद्धभूमि में उन्हें भगवद्गीता के उपदेश सुनाये। युद्धभूमि में आपने सुदर्शनधारी का अपना रूप प्रकट किया - राधेश्याम, श्यामा-श्याम!"
      ]
    }
,
    "127": {
      title: "कृष्ण देव भवन्तं वन्दे (श्रील रूप गोस्वामी)",
      transliterations: [
        "(ध्रुवपद)\nकृष्ण देव भवन्तं वन्दे।\nमन-मानस-मधुकरम् अर्पय निज-पद-पङ्कज-मकरन्दे॥\n(१)\nयदि अपि समाधिषु विधिरपि पश्यति\nन तव नखाग्रमरीचिम्।\nइदं इच्छामि निशम्य तवाच्युत\nतदपि कृपाद्भुतवीचिम्॥",
        "(२)\nभक्तिरुदञ्चति यद्यपि माधव\nन त्वयि मम तिलमात्री।\nपरमेश्वरता तदपि तवाधिक\nदुर्घटना-विधान-विधात्री॥",
        "(३)\nअयं अविलोलतयाद्य सनातन\nकलिताद्भुत-रस-भारम्।\nनिवसतु नित्यमिहामृत निन्दति\nविन्दं मधुरिमा-सारम्॥"
      ],
      translations: [
        "हे श्रीकृष्ण! मैं आपकी वन्दना करता हूँ। कृपया मेरे मधुमक्खी जैसे मन को अपने चरणकमलों से बहते अमृत पर स्थित कर दीजिए। हे अच्युत! यद्यपि ब्रह्माजी समाधि में भी आपके चरणकमलों के नखशिखरों से प्रस्फुटित प्रकाशकणों को देखने में अक्षम रहते हैं, फिर भी मैं उन्हें देखना चाहता हूँ, क्योंकि मैंने आपकी अद्भुत कृपा की महिमाओं के विषय में सुना है।",
        "हे माधव! यद्यपि आपके प्रति मेरे हृदय में रंचमात्र भी भक्ति नहीं है, किन्तु क्योंकि आप परम भगवान् हैं आप असम्भव को भी सम्भव कर सकते हैं।",
        "हे सनातन! आपके चरणकमल से प्रवाहित होता अमृत देवताओं को भी मात दे देता है। आपके कमलरूपी चरणों में मधुरता के सार को प्राप्त करके मैं आज प्रार्थना करता हूँ कि मेरा मन सदा-सदा के लिए वहीं निवास करे।"
      ]
    }
,
    "122": {
      title: "के याबि के याबि भाई भव-सिन्धु पार (Ke Jābi Ke Jābi Bhāi)",
      transliterations: [
        "के याबे के याबे भा-इ भब-सिन्धु पार\nधन्य कलि-युगेर चैतन्य अबतार",
        "आमार गौराङ्गेर घाटे आदान खेलाय\nजड अन्ध बधिर अबधि पार हय",
        "हरि-नामेर नौका-खानि श्री-गुरु खाण्डारी\nसङ्कीर्तन केरोयाल दु बाहु पसारि",
        "सब जीब हैल पार प्रेमेर बातासे\nपडिया रहिल लोचन आपनार दोषे"
      ],
      translations: [
        "Who will cross? O my brothers, who will cross this ocean of birth and death?",
        "My Lord Gaurāṅga is accepting everyone at His boat-landing. Everyone, including even the fools, the blind, and the deaf have come there to make the crossing.",
        "The ferry-boat is Lord Kṛṣṇa\u0027s holy names. The boat-captain is the spiritual master. The oars in the outstretched hands are saṅkīrtana.",
        "The favorable breeze is ecstatic love for Lord Kṛṣṇa. Now every fallen soul has crossed to the farther shore of the ocean. Only Locana dāsa, by his own fault, is left behind."
      ]
    },

    "123": {
      title: "केशव! तुया जगत विचित्र (भक्तिविनोद ठाकुर)",
      transliterations: [
        "केशव! तुया जगत विचित्र।\nकरम-विपाके, भव-वन भ्रमहूँ,\nपेखलूँ रंग बहु चित्र॥ (१)",
        "तुआ पद-विस्मृति, आ-मर जंत्रणा,\nक्लेश-दहने दोहि’ जाई।\nकपिल, पतञ्जलि, गौतम, कणाद,\nजैमिनि, बौद्ध आओवे धाई॥ (२)",
        "तब कोइ निज-मते, भुक्ति, मुक्ति जाचत,\nपातई नाना-विध फाँद।\nसो-सबु वञ्चक, तुआ भक्ति बहिर्मुख,\nघटाओये विषम प्रमाद॥ (३)",
        "वैमुख-वञ्चने, भट सो-संबु,\nनिर्मिल विविध पसार।\nदंडवत् दूरत, भक्तिविनोद भेल,\nभक्त-चरण करि' सार॥ (४)"
      ],
      translations: [
        "हे केशव! आपका यह जगत् अत्यन्त विचित्र है। अपने स्वार्थी कार्यों के परिणामस्वरूप मैंने इस ब्रह्माण्ड रूपी वन का भ्रमण किया है और अनेक चित्र-विचित्र वस्तुएँ देखी हैं।",
        "आपके चरणों की विस्मृति मृत्यु की कटु यातना तक ले जाती है और मेरे हृदय को नाना क्लेशों से जलाती है। इस निसहाय अवस्था में मेरे तथाकथित रक्षक जैसे महान् दार्शनिक कपिल, गौतम, कणाद, जैमिनी और बुद्ध मेरी रक्षा के लिए दौड़े आये हैं।",
        "सभी ने निज मत दिये हैं और अपने दार्शनिक फंदे में भोगों और मुक्ति रूपी भोजन लटकाया है। किन्तु ये सब व्यर्थ के धोखेबाज हैं क्योंकि ये आपकी भक्ति से विमुख हैं और इसलिए ये सभी खतरनाक हैं।",
        "इनमें से प्रत्येक कर्म, ज्ञान, योग एवं तप में पारंगत है और आपसे विमुख आत्माओं को धोखा देते हुए ये विभिन्न प्रलोभनों का निर्माण करते हैं। इन धोखेबाजों को दूर से ही प्रणाम करके भक्तिविनोद आपके चरणकमलों को अपने जीवन के साररूप में स्वीकार करते हैं।"
      ]
    }
,
    "254": {
      title: "तुमि सर्वेश्वरेश्वर, ब्रजेन्द्रकुमार!",
      transliterations: [
        "तुमि सर्वेश्वरेश्वर, ब्रजेन्द्रकुमार!\nतोमार इच्छाय विश्वे सृजन संहार॥ (१)",
        "तव इच्छामत ब्रह्मा करेन सृजन।\nतव इच्छामत विष्णु करेन पालन॥ (२)",
        "तव इच्छामते शिव करेन संहार।\nतव इच्छामते माया सृजे कारागार॥ (३)",
        "तव इच्छामते जीवेर जनम-मरण।\nसमृद्धि-निःपात-दुःख-सुख-संघटन॥ (४)",
        "मिछे मायाबद्ध-जीव आशापाशे फिरे।\nतव इच्छा बिना किछु करिते ना पारे॥ (५)",
        "तुमि त' रक्षक आर पालक आमार।\nतोमार चरण बिना आशा नाहि आर॥ (६)",
        "निज बल चेष्टा-प्रति भरोसा छाड़िया।\nतोमार इच्छाय आछि निर्भर करिया॥ (७)",
        "भकतिविनोद अति दीन अकिञ्चन।\nतोमार इच्छाय ता'र जीवन-मरण॥ (८)"
      ],
      translations: [
        "हे व्रजेन्द्रकुमार कृष्ण! आप सभी ईश्वरों के ईश्वर हैं। आपकी इच्छाम मात्र से ही ब्रह्माण्ड का सृजन एवं संहार होता है।",
        "आपकी इच्छाम मात्र से ब्रह्माजी सृजन करते हैं और आपकी इच्छाम मात्र से ही भगवान् विष्णु पालन करते हैं।",
        "आपकी इच्छाम मात्र से शिवजी संहार करते हैं और आपकी इच्छाम मात्र से ही माया संसार रूपी इस कारागार का निर्माण करती है।",
        "आपकी इच्छा से ही जीवात्मा जन्म-मरण का अनुभव करते हैं और आपकी इच्छा से ही वे समृद्धि, विनाश, सुख अथवा दुःख से गुजरते हैं।",
        "क्षुद्र जीव अकारण ही सांसारिक आशाओं में बँधकर संघर्ष करता है। आपकी इच्छा के बिना वह कुछ नहीं कर पाता।",
        "आप मेरे एकमात्र पालनहार और संरक्षक हैं। आपके चरणकमलों के अतिरिक्त मेरे लिए अन्य कोई आशा नहीं है।",
        "अपने निजी बल और प्रयासों पर भरोसा छोड़कर मैं अब पूर्णतः आपकी इच्छा पर निर्भर करता हूँ।",
        "भक्तिविनोद अत्यन्त दीन है और उसका घमण्ड चूर-चूर हो गया है। उसका जन्म और मरण अब आपकी इच्छानुसार ही है।"
      ]
    }
,
    "212": {
      title: "श्री नित्यानन्दाष्टकम् (Śrī Nityānandāṣṭakam)",
      transliterations: [
        "शरच्-चन्द्र-भ्रान्ति-स्फुरद्-अमल-कान्तिं गज-गतिं\nहरि-प्रेमोन्मत्तं धृत-परम-सत्त्वं स्मित-मुखम् |\nसमाघूर्णन्-नेत्रं कर-कलित-वेत्रं कलि-भिदं\nभजे नित्यानन्दं भजन-तरु-कन्दं निरवधि || 1 ||",
        "रसानाम् आसारं स्व-जन-गण-सर्वस्वम् अतुलं\nतदीयैक-प्राण-प्रतिम-वसुधा-जाह्नवि-पतिम् |\nसदा प्रेमोन्मादं परम् अविदितं मन्द-मनसां\nभजे नित्यानन्दं भजन-तरु-कन्दं निरवधि || 2 ||",
        "शची-सूनु-प्रेष्ठं निखिल-जगद्-इष्टं सुख-मयं\nकलौ मज्जज्-जीवोद्धरण-करणोद्दाम-करुणम् |\nहरेर् आख्यानाद् वा भव-जलधि-गर्वोन्नति-हरं\nभजे नित्यानन्दं भजन-तरु-कन्दं निरवधि || 3 ||",
        "अये भ्रातर् नॄणां कलि-कलुषिणां किं नु भविता\nतथा प्रायश्चित्तं रचय यद् अनायासत इमे |\nव्रजन्ति त्वाम् इत्थं सह भगवता मन्त्रयति यो\nभजे नित्यानन्दं भजन-तरु-कन्दं निरवधि || 4 ||",
        "यथेष्टं रे भ्रातः कुरु हरि-हरि-ध्वानम् अनिशं\nततो वः संसाराम्बुधि-तरण-दायो मयि लगेत् |\nइदं बाहु-स्फोटैर् अटति विरटन् यः प्रतिगृहं\nभजे नित्यानन्दं भजन-तरु-कन्दं निरवधि || 5 ||",
        "बलात् संसाराम्भोनिधि-हरण-कुम्भोद्भवम् अहो\nसतां श्रेयः-सिन्धून्नति-कुमुद-बन्धुं समुदितम् |\nखल-श्रेणी-स्फूर्जत्-तिमिर-हर-सूर्य-प्रभम् अहं\nभजे नित्यानन्दं भजन-तरु-कन्दं निरवधि || 7 ||",
        "नटन्तं गायन्तं हरिम् अनुवदन्तं पथि पथि\nव्रजन्तं पश्यन्तं स्वम् अपि सुदुरन्तं जन-गणम् |\nप्रकुर्वन्तं सन्तं करुण-सुदृग्-अन्तं प्रवलनाद्\nभजे नित्यानन्दं भजन-तरु-कन्दं निरवधि || 6 ||",
        "सुबिभ्राणं भ्रातुः कर-सरसिजं कोमलतरं\nमिथो वक्त्रालोकोच्चलित-परमानन्द-हृदयम् |\nभ्रमन्तं माधुर्यैर् अहह मदयन्तं पुर-जनान्\nभजे नित्यानन्दं भजन-तरु-कन्दं निरवधि || 8 ||",
        "सुखानाम् आधानं रसिक-वर-सद्-वैष्णव-धनं\nरसागारं सारं पतित-तति-तारं स्मरणतः |\nपरं नित्यानन्दाष्टकम् इदम् अपूर्वं पठति यस्\nतद्-अङ्घ्रि-द्वन्द्वाब्जं स्फुरतु नितरां तस्य हृदये || 9 ||",
        "इति श्री-प्रबोधानन्द-सरस्वती-विरचितं श्री-नित्यानन्दाष्टकं सम्पूर्णम्॥"
      ],
      translations: [
        "His shining spotless beauty bewilders the autumn moon. With a smiling face and rolling eyes, intoxicated with love for Lord Hari, He walks like an elephant. He holds the supreme truth and carries a stick that breaks the effects of Kali-yuga. I always worship Lord Nityānanda, the root of the tree of devotional service.",
        "He is the husband of Vasudhā and Jāhnavī, and their life and soul. Always mad with love for God, He is incomparable and a shower of transcendental rasas. He is the all in all for His devotees but is unknown to the fools. I always worship Lord Nityānanda, the root of the tree of devotional service.",
        "He is worshipped by the whole universe and is the dearest associate of the son of mother Śacī. He is bliss personified and His unlimited mercy is the cause of salvation for the souls drowning in the ocean of Kali. By preaching the glories of Lord Hari, He removes the rising pride of the ocean of material existence. I always worship Lord Nityānanda, the root of the tree of devotional service.",
        "\"O brother, what will happen to these people contaminated by the Age of Kali? Please arrange a process of atonement so that they may easily go to You.\" I always worship Lord Nityānanda, the root of the tree of devotional service, Who speaks to Lord Caitanya in this way.",
        "According to His own will, He went from house to house shouting with raised arms, “O brother, incessantly chant \"Hari, Hari\" and in this way you will cross the ocean of birth and death. Please give me such a charity.” I always worship Lord Nityānanda, the root of the tree of devotional service.",
        "Like Agastya Muni, He forcibly annihilates the ocean of material existence.26 He is like a risen moon increasing the ocean of happiness for the saintly persons. He is similar to the radiance of the sun dissipating darkness-like rogues. I always worship Lord Nityānanda, the root of the tree of devotional service.",
        "Repeatedly saying “Hari, Hari,” He was dancing and chanting along every road. He would see endless saintly persons approaching Him, and by turning around He would cast His compassionate side-glances upon them from the corner of His beautiful eyes. I always worship Lord Nityānanda, the root of the tree of devotional service.",
        "Oh! Holding the very soft lotus hand of His brother Nimāi, His heart full of increasing transcendental bliss by glancing at each other’s face, He roams about delighting the people with His sweetness. I always worship Lord Nityānanda, the root of the tree of devotional service.",
        "May Lord Nityānanda’s lotus feet become always manifest in the heart of one who reads this transcendental and unprecedented Nityānandāṣṭakam, which is the reservoir of all happiness, the treasure of saintly Vaiṣṇavas and best of rasikas, the repository of rasa, and the essence. Multitudes of fallen souls can be saved by simply remembering it.",
        "Thus ends Śrī Nityānandāṣṭakam composed by Śrīla Prabodhānanda Sarasvatī."
      ]
    },

    "214": {
      title: "श्री गुरोरष्टकम् (Śrī Guroraṣṭakam)",
      transliterations: [
        "शरीरम् सुरूपम् तथा वा कलत्रं\nयशश्चारु चित्रम् धनम् मेरुतुल्यम्\nगुरोरङ्घ्रिपद्मे ंअनश्चेन्न लग्नं\nततः किं ततः किं ततः किं ततः किं",
        "कलत्रं धनं पुत्रपोउत्रादि सर्वं\nगृहं बान्धवाः सर्वमेतद्धि जातम्\nगुरोरङ्घ्रिपद्मे ंअनश्चेन्न लग्नं\nततः किं ततः किं ततः किं ततः किं",
        "षडङ्गादिवेदो मुखे शस्त्रविद्या\nकवित्चादि गद्यं सुपद्यं करोति\nगुरोरङ्घ्रिपद्मे ंअनश्चेन्न लग्नं\nततः किं ततः किं ततः किं ततः किं",
        "विदेशेषु मान्यः स्वदेशेषु धन्यः\nसदाचारवृत्तेषु मत्तो न चान्यः\nगुरोरङ्घ्रिपद्मे ंअनश्चेन्न लग्नं\nततः किं ततः किं ततः किं ततः किं",
        "क्षमामण्डले भूपभूपालबृन्दैः\nसदा सेवितं यस्य पादारविन्दम्\nगुरोरङ्घ्रिपद्मे ंअनश्चेन्न लग्नं\nततः किम् ततः किं ततः किं ततः किं",
        "यशो मे गतं दिक्षु दानप्त्रतापाज्\nजगद्वस्तु सर्वं करे यत्प्रसादात्\nगुरोरङ्घ्रिपद्मे ंअनश्चेन्न लग्नं\nततः किं ततः किं ततः किं ततः किं",
        "न भोगे न योगे न वा वाजिराजौ\nन कान्तामुखे नैव वित्तेषु चित्तम्\nगुरोरङ्घ्रिपद्मे ंअनश्चेन्न लग्नं\nततः किं ततः किं ततः किं ततः किं",
        "अरण्ये न वा स्वस्य गेहे न कार्ये\nन देहे मनो वर्तते मे त्वनर्घ्ये\nगुरोरङ्घ्रिपद्मे ंअनश्चेन्न लग्नं\nततः किं ततः किं ततः किं ततः किं",
        "अनर्घ्याणि रत्नानि मुक्तानि संयक्\nसमालिङ्गता कामिनी यमिनीषु\nगुरोरङ्घ्रिपद्मे ंअनश्चेन्न लग्नं\nततः किं ततः किं ततः किं ततः किं",
        "गुरोरष्टकं यः पठेत्पुण्यदेही\nयतिर्भूपतिर्ब्रह्मचारी च गेही\nलभेद्वाञ्छिआर्थं पदं ब्रह्मसम्ञ्ज्ञं\nगुरोरुक्तवाक्ये मनो यस्य लग्नं"
      ],
      translations: [
        "The body is handsome, the wife is attractive, the fame is spread far and wide, the wealth is enormous and stable like mount Meru; but of what consequence are all these, if the mind is not fixed in devotion to the lotus feet of Guru? Really of what use is all this, what use, what use?",
        "Wife, wealth, son, grandson, and the like, house, relations, even if all these are there fate is certain, of what consequence is one\u0027s life if his mind is not devoted to the feet of Guru? Ascertain, what use is any possession, person or object? Of what use, of what use, of what use indeed?",
        "All the Vedas are mastered and ever present on the lips; likewise, knowledge of all the sciences is well gained. The ability to write prose or verse is also present. Even then, of what ultimate benefit is all this, if one\u0027s mind does not devoutly rest on the feet of Guru? By whose grace along can one\u0027s soul be liberated? Of what use, of what use, of what use indeed?",
        "I am honored well even in far off places, held in high esteem in my own locality; in good conduct and noble deeds there is no one to excel me. If one has occasion to think like this, of what avail is it if the mind is not steeped in devotion and humility towards the feet of the Guru from whom alone can flow wisdom and immortality?",
        "Your feet may be worshipped constantly even by the great kings and emperors of the world for reason of your greatness and scholarship; but of what real consequence is that if the mind is not graced by the blessing of unflinching devotion to the Guru, by whose loving \u0027touch\u0027 alone can redemption and peace be realized?",
        "Of what avail if one has enough merits to think my fame has already spread in several places due to my unique generosity and a result, all things of the world stand within my easy reach? For, the virtue and quality that count ultimately is only one\u0027s unflinching loyalty and devotion towards the Guru whose blessings are the ultimate factor for realization of Truth by a devoted seeker.",
        "The mind may have turned away from external delights through dispassion and from attainments like Yogic concentration, possessions like horses and the like, the enchanting face of the beloved, in short, the entire wealth of the earth; yet it will be of no real merit if the mind is not absorbed in piety and devotion to the feet of Guru. Bereft of this devotion, of what benefit is anything, of what benefit, of what benefit?",
        "The mind may have lost its charm to live in forests, and likewise in the house; may have lost all desire to achieve whatever; even the concern for the body\u0027s welfare may have been outlived; the most invaluable treasure of the world may not hold any allurement. Even then, of what avail are all these if the supreme devotion to the Guru is not held by the aspirant? Determine, of what use? Of what use?",
        "Even if I find in my possession precious stones or pearls and well decorated and dressed lovable bride, yet if my mind is not absorbed in devotion to the lotus feet of the Guru, of what use is any other possession?",
        "Whoever reads, studies and recites this collection of eight verses on Guru and remains devoted and attentive to the sayings of the Guru, he, no matter if he is a holy person, ascetic, king, neophyte, or householder, attains his coveted object, namely the supreme abode of Brahman, the unassailable seat of immortality."
      ]
    },

    "215": {
      title: "सर्वस्व तोमार, चरणे सम्पिया",
      transliterations: [
        "सर्वस्व तोमार, चरणे सम्पिया, पड़ेछि तोमार घरे।\nतुमि तो' ठाकुर, तोमार कुक्कुर, बोलिया जानहो मोरे॥ (१)",
        "बान्धिया निकटे, आमारे पालिबे, रहिबो तोमार द्वारे।\nप्रतीप-जनेरे, आसिते ना दिबो, राखिबो गडेर पारे॥ (२)",
        "तव निजजन, प्रसाद सेविया, उच्छिष्ट राखिबे जाहाँ।\nआमार भोजन, परम-आनन्दे, प्रतिदिन ह'बे ताँहा॥ (३)",
        "बोसिया शुइया, तोमार चरण, चिन्तिबो सतत आमि।\nनाचिते नाचिते, निकटे जाइबो, जखोन डाकिबे तुमि॥ (४)",
        "निजेर पोषण, कभु ना भाविबो, रहिबो भावेर भोरे।\nभकतिविनोद, तोमारे पालक, बोलिया वरण करे॥ (५)"
      ],
      translations: [
        "आपके चरणकमलों पर अपना सर्वस्व समर्पित करके मैं आपके घर के सामने पड़ा हूँ। आप मेरे स्वामी हैं, कृपया मुझे अपने कुत्ते के रूप में स्वीकार करें।",
        "मुझे अपने निकट ही बाँधकर आप मेरा पालन करेंगे और मैं आपके द्वार पर ही रहूँगा। मैं प्रतिकूल लोगों को अन्दर नहीं आने दूँगा और उन्हें बाहर ही रखूँगा।",
        "आपके प्रसाद को स्वीकार करने के बाद भक्तगण जो उच्छिष्ट छोड़ेंगे वह मेरा प्रतिदिन का भोजन होगा। परम आनन्द से मैं उसे स्वीकार करूँगा।",
        "बैठे अथवा लेटे हुए मैं निरन्तर आपके चरणकमलों पर ध्यान करूँगा। आप जब भी मुझे बुलायेंगे मैं नाचते हुए दौड़कर आ जाऊँगा।",
        "मैं कभी भी अपने पालन-पोषण की चिन्ता नहीं करूँगा और सदैव अपने स्वामी के प्रति प्रेम में मग्न रहूँगा। भक्तिविनोद आपको अपने एकमात्र पालनकर्ता के रूप में स्वीकार करते हैं।"
      ]
    }
,
    "200": {
      title: "राधाकुण्डतट-कुञ्जकुटीर (भक्तिविनोद ठाकुर)",
      transliterations: [
        "राधाकुण्डतट-कुंजकुटीर।\nगोवर्धन-पर्वत, यामुनतीर॥ (१)",
        "कुसुमसररोवर, मानसगंगा।\nकालिन्दिनन्दिनी विपुल तरंगा॥ (२)",
        "वंशीवट, शशांक गोकुल, धीरसमीर।\nवृन्दावन-तरुलतिका-कनीर॥ (३)",
        "खगमृगकुल, मलय-वातास।\nमयूर, भ्रमर, मुरली, विलास॥ (४)",
        "वेणु, शृंग, पदचिह्न मेघमाला।\nवसन्त, शशांक, शंख, करताला॥ (५)",
        "युगलविलासे अनुकूल जानि।\nलीला-विलास उद्दीपक मानि॥ (६)",
        "ए सब छोडत कँहि नाहि जाँउ।\nए सब छोडत पराण हाराँउ॥ (७)",
        "भक्तिविनोद कहे, सुन कान।\nतुया उद्दीपक हामारा पराण॥ (८)"
      ],
      translations: [
        "श्रीराधाकुण्ड के तट पर स्थित कुंज में कुटीर, महान् गोवर्धन पर्वत, यमुना नदी का तट...",
        "...कुसुम सरोवर, मानसी गंगा, अनेकानेक लहरों से पूरित कलिन्द पर्वत की पुत्री यमुना...",
        "...वंशीवट, गोकुल, धीर समीर नामक पवित्र स्थल, वृन्दावन के वृक्ष, लतायें और बाँस...",
        "नाना प्रकार के पक्षी और मृग, मलय पर्वत से आती शीतल पवन, मयूर, भ्रमर, मंद स्वर में बजती मुरली की लीलायें...",
        "...उच्चस्वर में वेणु का गीत, भैंस के सींग से बना बिगुल, ब्रजधूल में भगवान् एवं उनकी प्रिया के पदचिह्न, काले बादलों की माला, वसंत ऋतु, चन्द्रमा, शंख और करताल...",
        "...दिव्य युगल राधा-कृष्ण की आनन्दभरी लीलाओं के लिए मैं इन सभी को अत्यन्त अनुकूल मानता हूँ। भगवान् की मनमोहक लीलाओं को और तीव्र करने के लिए मैं इन्हें उद्दीपक के रूप में देखता हूँ।",
        "इन सभी को छोड़कर मैं अन्य कहीं नहीं जाऊँगा क्योंकि इन्हें छोड़ने का अर्थ अपने प्राणों को छोड़ना है।",
        "भक्तिविनोद कहते हैं, 'हे कान्हा! कृपया सुनो! जो भी वस्तुएँ आपके स्मरण को बढ़ावा देती हैं, मेरे लिए वे प्राणस्वरूप हैं।'"
      ]
    }
,
    "110": {
      title: "कबे गौर-वने, सुरधुनी-तटे (भक्तिविनोद ठाकुर)",
      transliterations: [
        "कबे गौर-वने, सुरधुनी-तटे,\n'हा राधे हा कृष्ण' बोले'।\nकाँदिया बेडा'ब, देहसुख छाड़ि',\nनाना लता-तरु-तले॥ (१)",
        "श्वपच-गृहेते, मागिया खाइब,\nपिब सरस्वती-जल।\nपुलिने-पुलिने, गडा-गडी दिबो,\nकरि' कृष्ण-कोलाहल॥ (२)",
        "धामवासी जने, प्रणति कोरिया,\nमागिब कृपार लेश।\nवैष्णव-चरण-रेणु गाय माखि',\nधरि' अवधूत-वेश॥ (३)",
        "गौड़-ब्रज-जने, भेद ना देखिब,\nहोइब ब्रज-बासी।\nधामेर स्वरूप, स्फुरिबे नयने,\nहोइब राधार दासी॥ (४)"
      ],
      translations: [
        "ओह! वह दिन कब आयेगा जब मैं सब प्रकार के शारीरिक सुखों का त्याग करके नवद्वीप धाम में गंगाजी के किनारे 'हे राधे! हे कृष्ण!' पुकारते हुए लताओं और वृक्षों के नीचे भ्रमण करूँगा?",
        "मैं चाण्डाल के घर से भिक्षा माँगकर अपना जीवन निर्वाह करूँगा और सरस्वती नदी का जल पीऊँगा। नदी के एक तट से दूसरे तट तक आनन्द में मैं लोट-पोट होता हुआ उच्चस्वर में 'कृष्ण! कृष्ण!' का कीर्तन करूँगा।",
        "मैं समस्त धामवासियों को प्रणाम करके उनकी कृपा के एक बिन्दु की याचना करूँगा। मैं वैष्णवों की चरणधूलि अपने पूरे शरीर पर मलूँगा और एक अवधूत का वेश धारण करूँगा।",
        "अहो! कब मैं नवद्वीप और वृन्दावनवासियों के बीच भेद न देखकर एक ब्रजवासी होऊँगा? इससे भगवान् के धाम का सच्चा स्वरूप मेरी आँखों के सम्मुख प्रकट होगा और मैं श्रीमती राधारानी की दासी बन पाऊँगा।"
      ]
    }
,
    "117": {
      title: "कलि-कुक्कुर-कदन यदि चाओ (हे)",
      transliterations: [
        "कलि-कुक्कुर-कदन यदि चाओ (हे)\nकलि-युग-पावन, कलि-भय-नाशन,\nश्रीशचीनन्दन गाओ (हे)॥ (१)",
        "गदाधर-मादन, निता'येर प्राण-धन,\nअद्वैतेर प्रपूजित गोरा।\nनिमाई विश्वम्भर, श्रीनिवास-ईश्वर,\nभक्त-समूह-चित्-चोर॥ (२)",
        "नादीया-शशधर, मायापूर-ईश्वर,\nनाम-प्रवर्तन सुर।\nगृहि-जन-शिक्षक, न्यासि-कुल-नायक,\nमाधव राधा-भाव-पूर॥ (३)",
        "सार्वभौम-शोधन, गजपति-तारण,\nरामानन्द-पोषण वीर।\nरूपानन्द-वर्धन, सनातन-पालन,\nहरिदास-मोदन धीर॥ (४)",
        "ब्रज-रस भावन, दुष्ट-मत-शातन,\nकपटी विघातन काम।\nशुद्ध-भक्त पालन, शुष्क-ज्ञान ताडन,\nछल-भक्ति-दूषण राम॥ (५)"
      ],
      translations: [
        "अरे भाइयों! यदि आप इस कलिरूपी कुक्कुर (कुत्ते) से बचना चाहते हो तो कलियुग को पवित्र करने वाले और कलियुग के भय को नष्ट करने वाले श्रीशचीनन्दन के नामों का कीर्तन करो।",
        "वे गौरहरि श्रीगदाधर पण्डित और श्रीनित्यानन्द प्रभु के प्राण एवं धन स्वरूप हैं तथा अद्वैताचार्य द्वारा पूजित हैं। उनके निमाई एवं विश्वम्भर जैसे अनेक नाम हैं। वे श्रीनिवास आचार्य के पूजनीय ईश्वर हैं तथा समस्त भक्तवृन्द के चित्त को चुराने वाले हैं।",
        "वे नदिया के चन्द्रस्वरूप हैं तथा श्रीमायापुर धाम के ईश्वर हैं। वे हरिनाम प्रदान करने के लिए अवतरित हुए हैं। वे गृहस्थ आश्रम में रहने वाले भक्तों को शिक्षा देने आये हैं; वे समस्त संन्यासियों के शिरोमणि हैं तथा राधारानी के भाव एवं कान्ति से युक्त श्रीमाधव ही हैं।",
        "उन्होंने सार्वभौम भट्टाचार्य का मायावाद से उद्धार करके उनके हृदय को शुद्ध किया और महाराज प्रतापरुद्र का भी उद्धार किया। उन्होंने रामानन्द राय को अपनी भक्ति प्रदानकर उनका पालन किया। वे श्रील रूप गोस्वामी के आनन्द को बढ़ाने वाले तथा श्रील सनातन गोस्वामी का पालन करने वाले हैं। वे हरिदास ठाकुर के लिए आनन्द के स्रोत हैं, तथा वे अत्यन्त धीर हैं।",
        "श्रीगौरहरि वृन्दावन के भावों पर ध्यान करते रहते हैं, वे दुष्ट मानसिकता का नाश करने वाले हैं, और वे अपनी कृपा से कपट एवं काम को खण्डित कर देते हैं। वे अपने शुद्ध भक्तों का पालन करते हैं और शुष्क ज्ञानियों को प्रताड़ित करते हैं। वे छलयुक्त भक्ति को नष्ट करते हैं तथा परम आनन्दमय हैं।"
      ]
    }
,
    "263": {
      title: "विद्यार विलासे, काटाइनु काल",
      transliterations: [
        "विद्यार विलासे, काटाइनु काल,\nपरम साहसे आमि।\nतोमार चरण, ना भजिनु कभु,\nएखन शरण तुमि॥ (१)",
        "पढ़िते, पढ़िते भरसा बाढ़िल,\nज्ञाने गति हबे मानि।\nसे आशा विफल, से ज्ञान दुर्बल,\nसे ज्ञान अज्ञान जानि॥ (२)",
        "जड़ विद्या यत, मायार वैभव,\nतोमार भजने बाधा।\nमोह जनमिया, अनित्य संसारे,\nजीव के करये गाधा॥ (३)",
        "सेइ गाधा ह'ये, संसारेर बोझा,\nबहिनु अनेक काल।\nवार्धक्ये एखन, शक्तिर अभावे,\nकिच्छु नाहि लागे भाल॥ (४)",
        "जीवन यातना, हइल एखन,\nसे विद्या अविद्या भेल।\nअविद्यार ज्वाला, घटिल विषम,\nसे विद्या हइल शेल॥ (५)",
        "तोमार चरण बिना किछु धन,\nसंसारे ना आछे आर।\nभकतिविनोद, जड़ विद्या छाड़ि,\nतुया पद कर सार॥ (६)"
      ],
      translations: [
        "बड़े उत्साह के साथ मैंने भौतिक विद्या अर्जित करने के सुख में बिताया और कभी भी आपके चरणकमलों की सेवा नहीं की। हे भगवन्! अब आप मेरे एकमात्र आश्रय हैं।",
        "विद्या अर्जित करते-करते मेरी आशायें बढ़ने लगीं और मैं ज्ञानार्जन को ही जीवन का सच्चा लक्ष्य मानने लगा। किन्तु वे आशायें कितनी व्यर्थ सिद्ध हुईं क्योंकि मेरा सम्पूर्ण ज्ञान दुर्बल पड़ गया है। अब मैं जान पाया हूँ कि वह सब विद्वता शुद्ध अज्ञानता थी।",
        "इस संसार का समस्त ज्ञान आपकी माया की क्षणभंगुर शक्ति द्वारा उत्पन्न है। यह आपकी भक्ति में एक बाधा है। भौतिक ज्ञान इस अस्थाई जगत् के प्रति मोह जागृत करके शाश्वत आत्मा को गधा बना देता है।",
        "यहाँ एक व्यक्ति है जो वैसा गधा बन हुआ है और उसने इतने लम्बे काल से भौतिक अस्तित्व रूपी व्यर्थ बोझे को ढोया हुआ है। अब वृद्धावस्था में शक्ति के अभाव में कुछ भी अच्छा नहीं लगता।",
        "अब मेरा जीवन एक यातना बन गया है क्योंकि मेरी तथाकथित विद्वता और ज्ञान व्यर्थ अज्ञानता सिद्ध हो चुकी है। भौतिक ज्ञान एक तीक्ष्ण शूल बनकर अज्ञानता की असहनीय ज्वलनशील पीड़ा द्वारा मेरे हृदय को भेद रहा है।",
        "हे भगवन्, आपके चरणकमलों के अतिरिक्त इस संसार में अन्य कोई भी वस्तु आश्रय के योग्य नहीं है। भक्तिविनोद अपने समस्त भौतिक ज्ञान को त्यागकर आपके चरणकमलों को अपने जीवन के एकमात्र सार के रूप में स्वीकार करते हैं।"
      ]
    }
,
    "268": {
      title: "यदि गौर ना होइतो, तब कि होइतो",
      transliterations: [
        "यदि गौर ना होइतो, तबे कि होइतो,\nकेमोने धरिताम दे।\nराधार महिमा, प्रेमरस सीमा,\nजगते जानातो के॥ (१)",
        "मधुर वृन्दा, विपिन-माधुरी,\nप्रवेश चातुरी सार।\nब्रज-युवति, भावेर भकति,\nसकति होइत कार॥ (२)",
        "गाओ गाओ पुनः, गौरांगेर गुण,\nसरल करिया मन।\nए भव-सागरे, एमन दयाल,\nना देखिये एक-जन॥ (३)",
        "(आमि) गौरांग बोलिया, ना गेनु गलिया,\nकेमोने धरिनु दे।\nवासुर हिया, पाषाण दिया,\nकेमोने गडियाछे॥ (४)"
      ],
      translations: [
        "यदि भगवान् गौरहरि इस कलियुग में अवतरित न हुए होते तो हमारा क्या होता? किस प्रकार हम अपनी देह को धारण कर पाते? यदि वे न होते तो इस संसार में कौन राधारानी के सर्वोच्च प्रेमरस की सीमाओं को जान पाता?",
        "किसके पास व्रजगोपियों के चरणचिह्नों का अनुगमन करते हुए भक्ति करने की शक्ति थी? और वृन्दादेवी के परम मधुर वन वृन्दावन में प्रवेश करने के लिए ब्रजगोपियों की चतुरता ही एकमात्र योग्यता है।",
        "अरे मन, कृपया बार-बार श्रीगौरांग के गुणों का कीर्तन करो! बस अपने हृदय को सरल रखो। इस अज्ञानता के सागर में श्रीगौरहरि जैसा दयालु अन्य कोई नहीं है।",
        "यद्यपि मैं श्रीगौरांग महाप्रभु के नामों का कीर्तन करता हूँ, न जाने क्यों मेरा हृदय प्रेम से पिघलता नहीं है। क्यों मैंने अभी तक अपना शरीर धारण किया हुआ है? विधाता ने वासुघोष के शरीर में हृदय के स्थान पर पाषाण क्यों रखा है?"
      ]
    }
,
    "165": {
      title: "नारद मुनि, बजाय वीणा",
      transliterations: [
        "नारद मुनि, बजाय वीणा, राधिकारमण-नामे।\nनाम अमनि, उदित हय, भकत-गीत-सामे॥ (१)",
        "अमिय-धारा, वरिषे घन, श्रवण-युगले गिया।\nभकतजन, सघने नाचे, भरिया आपन हिया॥ (२)",
        "माधुरी-पुर, आसव पशि, माताय जगत-जने।\nकेह वा काँदे, केह वा नाचे, केह माते मने मने॥ (३)",
        "पञ्चवदन, नारदे धरि, प्रेमेर सघन रोल।\nकमलासन, नाचिया बले, 'बोल बोल हरिबोल'॥ (४)",
        "सहस्रानन, परमसुखे, 'हरि हरि' 'बलि' गाय।\nनाम-प्रभावे, मातिल विश्व, नाम-रस सबे पाय॥ (५)",
        "श्रीकृष्णनाम, रसने स्फुरि, पूराल आमार आश।\nश्रीरूप-पदे, याचये इहा, भकतिविनोद दास॥ (६)"
      ],
      translations: [
        "जब नारदमुनि अपनी वीणा बजाते हैं तो उससे राधिका-रमण नाम अवतरित होता है और भक्तों द्वारा किये जा रहे कीर्तन में तुरन्त प्रकट हो जाता है।",
        "मानसून बादल के समान हरिनाम भक्तों के कानों में शुद्ध अमृत की धारा बरसाता है। दिव्य आनन्द के कारण सभी भक्त उत्साहपूर्वक हृदय भरकर नृत्य करते हैं।",
        "सम्पूर्ण ब्रह्माण्डवासी दिव्य मधुरता की मदोन्मत्त करने वाली बौछारों में भीगकर पागल हो जाते हैं। कुछ लोग रोते हैं, कुछ नृत्य करते हैं और अन्य अपने मन में पूरी तरह भावविभोर हो जाते हैं।",
        "पंचमुखी शिवजी नारदमुनि का आलिंगन करते हैं और दिव्य उन्माद में बारम्बार चिल्लाते हैं, जबकि ब्रह्माजी उत्साहपूर्वक नृत्य करते हुए पुकारते हैं, 'आप सभी हरि बोल! हरि बोल! का कीर्तन करो!'",
        "परमसुख का अनुभव करते हुए सहस्र मुखों वाले अनन्तशेष गाते हुए 'हरि बोल! हरि बोल!' पुकारते हैं। हरिनाम की दिव्य ध्वनि के प्रभाव से सम्पूर्ण विश्व दिव्य आनन्द में पागल हो जाता है और सभी हरिनाम के रस का आस्वादन करते हैं।",
        "श्रीकृष्ण के पवित्र नाम ने मेरी जिह्वा पर प्रकट होकर मेरी समस्त इच्छायें पूरी कर दी हैं। भगवान् का यह तुच्छ सेवक भक्तिविनोद श्रील रूप गोस्वामी के चरणों पर निवेदन करता है कि हरिनाम का यह कीर्तन सदैव होता रहे।"
      ]
    }
,
    "155": {
      title: "नाचे नाचे निताई गौर गुण मणिया (Nāce Nāce Nitāi Gaura)",
      transliterations: [
        "नचे नचे निताइ गौर् गुण मणिय\nनाचे नाचे निताइ गौर् गुण मणिया\n(नचे नचे निताइ गौर् द्वीज मणिय)\nबामे प्रिय गदाधर, श्रीवास अद्वैत बर,\nपारिशद तारागण जिन्या",
        "बाजे खोल करताल, मधुर सण्गीत भाल,\nगगन भोरिलो हरिध्वनिया",
        "चन्दन चर्चित गाय्, फागु बिन्दु बिन्दु ताय्,\nवनमाला दोले भालो बोलिया",
        "गले शुभ्र उपवीत, रूप कोटि काम जित,\nचरणे नूपुर रणरणिया",
        "दुइ भाइ नाचि जाय्, सहचर गण गाय्,\nगदाधर अन्गे पोरे ढूलिया",
        "पूरुब रभस लीला, एबे पहु प्रकाशिला,\nसेइ ब्रिन्दाबन् एइ नदिया",
        "बिहरे गन्गातीरे, सेइ धीर समीरे,\nवृन्दावन दास कोहे जानिया"
      ],
      translations: [
        "Nitai and Gaura gunamani are dancing and dancing, with beloved Gadadhara on Their left, and Srivasa and Advaita [on the right] while Their associates defeat the stars [that surround the Gaura-moon].",
        "The mridangas and karatalas are played and sweet songs are sung. The sky is filled with the chanting of harinama.",
        "His body is anointed with sandal paste and drops of Holi juice, and a forest flower garland dangles nicely across His chest.",
        "A white brahmin thread hangs across His neck, His form defeats millions of Cupids and anklebells jingle on His feet.",
        "The two brothers are dancing and Their associates sing while Gadadhara\u0027s body is pelted with powder.",
        "Now the Lord re-manifests His previous joyful Vrindaban pastimes in this Nadiya.",
        "Now He enjoys on the bank of the Ganga just like in Vrindavan\u0027s Dhira samira kunja. Vrndavana dasa tells you, for he knows it."
      ]
    },

    "156": {
      title: "नदिया गोद्रुमे नित्यानन्द महाजन",
      transliterations: [
        "नदिया गोद्रुमे नित्यानन्द महाजन\nपतियाछे नामहट्ट जीवेर कारण॥ (१)",
        "(श्रद्धावान जन हे, श्रद्धावान जन हे)\nप्रभुर आज्ञाय भाइ मागि एइ भिक्षा\nबोलो 'कृष्ण', भजो 'कृष्ण', कर कृष्ण शिक्षा॥ (२)",
        "अपराध-शून्य हये लह कृष्ण-नाम\nकृष्ण माता, कृष्ण पिता, कृष्ण धन-प्राण॥ (३)",
        "कृष्णेर संसार करि छाड़ि अनाचार\nजीवे दया, कृष्ण-नाम सर्वधर्म सार॥ (४)"
      ],
      translations: [
        "नदिया के गोद्रुम क्षेत्र में नित्यानन्द महाजन ने पतित जीवों के उद्धार के लिए हरिनाम का बाजार खोला है।",
        "श्रद्धावान लोगों! श्रद्धावान लोगों! श्रीगौरांग महाप्रभु की आज्ञा से हे भाइयों, मैं आपसे तीन बातों की भिक्षा माँगता हूँ - श्रीकृष्ण के नामों का कीर्तन करों, श्रीकृष्ण की पूजा करो, और अन्य को इसकी शिक्षा दो।",
        "अपराधों से ध्यानपूर्वक बचो और केवल श्रीकृष्ण के नामों का कीर्तन करो। श्रीकृष्ण तुम्हारी माता हैं, श्रीकृष्ण तुम्हारे पिता हैं और श्रीकृष्ण ही तुम्हारे धन-प्राण हैं।",
        "सभी अनाचार और पापों को त्यागकर श्रीकृष्ण सम्बन्धित कार्य करो। दूसरों पर करुणा दिखाना और हरिनाम कीर्तन करना सब प्रकार के धर्मों का सार है।"
      ]
    }
,
    "129": {
      title: "कृष्ण जिनका नाम है, गोकुल जिनका धाम है",
      transliterations: [
        "कृष्ण जिनका नाम है, गोकुल जिनका नाम है।\nऐसे श्रीभगवान् को बारम्बार प्रणाम है॥ (१)",
        "यशोदा जिनकी मैया है, नन्दजी बापैय्या है।\nऐसे श्रीगोपाल को बारम्बार प्रणाम है॥ (२)",
        "राधा जिनकी छाया है, अद्भुत जिनकी माया है।\nऐसे श्रीघनश्याम को बारम्बार प्रणाम है॥ (३)",
        "लुटलुट दधि माखन खायो, ग्वालबाल संग धेनु चरायो।\nऐसे लीलाधाम को बारम्बार प्रणाम है॥ (४)",
        "द्रुपद-सुता की लाज बचायो, ग्रह से गज को फंद छुडायो।\nऐसे कृपाधाम को बारम्बार प्रणाम है॥ (५)",
        "कुरु पांडव में युद्ध मचायो, अर्जुन को उपदेश सुनायो।\nऐसे दीनानाथ को बारम्बार प्रणाम है॥ (६)"
      ],
      translations: [
        "ऐसे भगवान् जिनका नाम कृष्ण है और जिनका धाम गोकुल वृन्दावन है, मैं उन्हें बार-बार प्रणाम करता हूँ।",
        "यशोदा जिनकी माता हैं और नन्दमहाराज जिनके पिता हैं, गायों को चराने वाले उन श्रीगोपाल को मैं बार-बार प्रणाम करता हूँ।",
        "राधारानी जिनकी प्रिया हैं और जिनकी माया अत्यन्त अद्भुत है, काले बादलों के रंग वाले उन घनश्याम को मैं बार-बार प्रणाम करता हूँ।",
        "जो गोपियों से लूट-लूटकर दही और माखन खाते, तथा जो अपने ग्वालमित्रों के साथ गायों को चराते, मधुर लीला करने वाले ऐसे भगवान् को मैं बार-बार प्रणाम करता हूँ।",
        "जिन्होंने द्रुपद महाराज की पुत्री द्रौपदी की लाज बचाई और गजेन्द्र को मगरमच्छ के मुख से मुक्त किया, कृपा के अनन्त भण्डार ऐसे भगवान् को मैं बार-बार प्रणाम करता हूँ।",
        "जिन्होंने कौरवों और पाण्डवों के बीच युद्ध करवाया और उस युद्ध के दौरान अर्जुन को भगवद्गीता के उपदेश दिये, दीन-हीन लोगों के ऐसे स्वामी को मैं बार-बार प्रणाम करता हूँ।"
      ]
    }
,
    "266": {
      title: "वृन्दावन रम्य स्थान (नरोत्तम दास ठाकुर)",
      transliterations: [
        "वृन्दावन रम्य-स्थान दिव्य-चिन्तामणि-धाम\nरतन-मन्दिर मनोहर।\nआवृत कालिन्दी-नीरे राज-हंस केलि करे\nताहे शोभे कनक-कमल॥ (१)",
        "तार मध्ये हेम-पीठ अष्ट-दले वेष्टित\nअष्ट-दले प्रधाना नायिका।\nतार मध्ये रत्नासने ब'सि आछेन दुइ-जने\nश्याम-सङ्गे सुन्दरी राधिका॥ (२)",
        "ओ-रूप-लावण्य-राशि अमिय परिछे खसि\nहास्य-परिहास-सम्भाषणे।\nनरोत्तम-दास कय नित्य-लीला सुख-मय\nसदाई स्फुरुका मोर मने॥ (३)"
      ],
      translations: [
        "सुन्दर वृन्दावन चिन्तामणि मणियों से परिपूर्ण दिव्य धाम है जहाँ अनेक मनोहारी रत्न-मन्दिर हैं। यमुना के जल में राजहंस क्रीड़ा कर रहे हैं और उसमें सुवर्ण कमल शोभायमान हैं।",
        "उस कमल के मध्य में आठ पंखुड़ियों वाला स्वर्ण-पीठ है जहाँ आठ प्रमुख सखियाँ विराजमान हैं। उस रत्न-सिंहासन पर श्यामसुन्दर के संग परम सुन्दरी श्रीमती राधारानी विराजमान हैं।",
        "युगल-किशोर के उस अद्भुत रूप-लावण्य से तथा उनके हास्य-परिहास से निरन्तर अमृत की वर्षा हो रही है। नरोत्तम दास प्रार्थना करते हैं कि यह नित्य सुखमय लीला सदा मेरे मन में स्फुरित रहे।"
      ]
    }

,
    "131": {
      title: "कृष्ण-नाम धरे कतो बल",
      transliterations: [
        "कृष्ण-नाम धरे कतो बल।\nविषय-वासनानले, मोर चित्त सदा ज्वले,\nरवि-तप्त मरु-भूमि-सम।\nकर्ण-रन्ध्र-पथ दिया, हृदि माझे प्रवेशिया,\nवरिषय सुधा अनुपम॥ (१)",
        "हृदय हइते बले, जिह्वार अग्रेते चले,\nशब्द-रूपे नाचे अनुक्षण।\nकण्ठे मोर भाङ्गे स्वर, अङ्ग काँपे थर थर,\nस्थिर हइते ना पारे चरण॥ (२)",
        "चक्षे धारा, देहे घर्म, पुलकित सब चर्म,\nविवर्ण हइल कलेवर।\nमूर्च्छित हइल मन, प्रलयेर आगमन,\nभावे सर्व-देह जर जर॥ (३)",
        "करि’ एतो उपद्रव, चित्ते वर्षे सुधा-द्रव,\nमोरे डारे प्रेमेर सागरे।\nकिछु ना बुझिते दिल, मोरे त’ बातुल कैल,\nमोर चित्त-वित्त सब हरे॥ (४)",
        "लइनु आश्रय याँ’र, हेन व्यवहार ताँ’र,\nवर्णिते ना पारि ए सकल।\nकृष्ण-नाम इच्छा-मय, याहे याहे सुखी हय,\nसेइ मोर सुखेर सम्बल॥ (५)",
        "प्रेमेर कलिका नाम, अद्भुत रसेर धाम,\nहेन बल करये प्रकाश।\nईषत् विकशि’ पुनः, देखाय निज-रूप-गुण,\nचित्त हरि’ लय कृष्ण-पाश॥ (६)",
        "पूर्ण विकसित हइया, ब्रजे मोरे याय लइया,\nदेखाय मोरे स्वरूप-विलास।\nमोरे सिद्ध-देह दिया, कृष्ण-पाशे राखे गिया,\nए देहेर करे सर्व-नाश॥ (७)",
        "कृष्ण-नाम-चिन्तामणि, अखिल रसेर खनि,\nनित्य-मुक्त शुद्ध-रस-मय।\nनामेर बालाइ यत, सब ल’ये हइ हत,\nतबे मोर सुखेर उदय॥ (८)"
      ],
      translations: [
        "श्रीकृष्ण के पवित्र नाम में कितना अद्‍भुत बल है! सूर्य की प्रचण्ड धूप से तपी हुई मरुभूमि के समान मेरा चित्त भौतिक कामनाओं की अग्नि में निरन्तर जलता रहता है। किन्तु कर्ण-छिद्रों के मार्ग से हृदय में प्रवेश कर यह हरिनाम मेरी आत्मा पर अनुपम अमृत की वर्षा कर देता है।",
        "यह पवित्र नाम मेरे हृदय से उद्‍भूत होकर जिह्वा के अग्रभाग पर आ जाता है और दिव्य ध्वनि के रूप में निरन्तर नृत्य करता है। मेरा कण्ठ रुँध जाता है, सम्पूर्ण शरीर थर-थर काँपने लगता है और मेरे चरण स्थिर नहीं रह पाते।",
        "नेत्रों से अश्रु-धारा बहने लगती है, शरीर पसीने से भीग जाता है, रोम-रोम पुलकित हो उठता है और शरीर का वर्ण फीका पड़ जाता है। मन मूर्च्छित हो जाता है, मानो प्रलय आ गई हो, और भाव-विभोर होकर सम्पूर्ण देह शिथिल हो जाती है।",
        "ऐसा दिव्य उपद्रव मचाते हुए भी यह नाम मेरे चित्त पर तरल अमृतरस की वर्षा करता है और मुझे भगवत्प्रेम के महासागर में डुबो देता है। यह मुझे कुछ भी समझने नहीं देता, इसने मुझे सचमुच मतवाला (पागल) बना दिया है और मेरे चित्त की सारी सुध-बुध हर ली है।",
        "जिनका मैंने आश्रय लिया है, उनका ऐसा ही अद्भुत स्वभाव है, जिसका मैं पूर्ण वर्णन नहीं कर सकता। श्रीकृष्ण का नाम अपनी इच्छा से स्वतंत्र रूप से कार्य करता है; जिस-जिस प्रकार से वे सुखी होते हैं, वही मेरे सुख का एकमात्र सम्बल है।",
        "यह हरिनाम भगवत्प्रेम रूपी पुष्प की कली है और अद्भुत रसों का परम धाम है। यह ऐसा प्रभाव प्रकट करता है कि जब यह कली थोड़ी और खिलती है, तो यह अपने दिव्य रूप और गुणों को प्रकट कर देती है, और इस प्रकार मेरे चित्त को हरकर सीधे श्रीकृष्ण के चरणों में ले जाती है।",
        "पूर्ण रूप से विकसित होकर यह नाम-कुसुम मुझे ब्रजधाम ले जाता है और मुझे श्रीकृष्ण की अपनी स्वरूप-लीलाओं का दर्शन कराता है। यह मुझे मेरा नित्य सिद्ध आध्यात्मिक देह प्रदान कर श्रीकृष्ण के पास स्थापित कर देता है और इस नश्वर भौतिक शरीर के समस्त बंधनों का पूर्ण नाश कर देता है।",
        "श्रीकृष्ण का नाम चिन्तामणि स्वरूप है, समस्त दिव्य रसों की खान है, नित्य-मुक्त और शुद्ध रस से परिपूर्ण है। जब नाम के प्रति होने वाले समस्त अपराध और विघ्न नष्ट हो जाएँगे, तभी मेरे वास्तविक नित्य आनन्द का उदय होगा।"
      ]
    },
    "153": {
      title: "ना करलुँ करम",
      transliterations: [
        "ना करलुँ करम, गेयान नाहि भेल,\nना सेविलुँ चरण तोहार।\nजड़-सुखे मातिया, आपनकु वञ्चइ,\nपेखहुँ चौदिश आँधियार॥ (१)",
        "तुहुँ नाथ! करुणा-निदान।\nतुवा पद-पङ्कजे, आत्म समर्पिलुँ,\nमोरे कृपा करबि विधान॥ (२)",
        "प्रतिज्ञा तोहार ओइ, जो हि शरणागत,\nनाहि सो जानब परमाद।\nसो हाम दुष्कृति, गति ना हेरइ आन,\nआब मागों तुवा परसाद॥ (३)",
        "आन मनो-रथ, निःशेष छोड़त,\nकब हाम हउबुँ तोहारा।\nनित्य-सेव्य तुहुँ, नित्य-सेवक मुइ,\nभकतिविनोद भाव सारा॥ (४)"
      ],
      translations: [
        "मैंने न तो कोई पुण्य कर्म किए हैं और न ही कोई आध्यात्मिक ज्ञान अर्जित किया है। मैंने कभी आपके चरणकमलों की सेवा भी नहीं की। भौतिक सुखों के मद में मतवाले होकर मैंने केवल अपने आपको ही धोखा दिया है। अब मुझे चारों दिशाओं में केवल अंधकार ही दिखाई दे रहा है।",
        "हे नाथ! आप ही समस्त करुणा के मूल स्रोत हैं। मैंने आपके चरणकमलों में अपना आत्म-समर्पण कर दिया है; कृपा करके मुझ पर अपनी दया का विधान कीजिए।",
        "आपकी यही प्रतिज्ञा है कि जो भी आपकी शरण में आता है, वह कभी किसी विपत्ति या संकट में नहीं पड़ता। मुझ जैसे पापी को आपके अतिरिक्त कोई अन्य आश्रय नहीं दिखता; इसलिए अब मैं आपसे केवल आपकी कृपा की भिक्षा माँगता हूँ।",
        "अपनी अन्य समस्त भौतिक कामनाओं का समूल त्याग करके, मैं कब केवल आपका और केवल आपका ही हो सकूँगा? आप नित्य सेव्य (सेवा के योग्य) हैं और मैं आपका नित्य सेवक हूँ—भक्तिविनोद के समस्त विचारों का यही सार है।"
      ]
    },
    "255": {
      title: "तुमि तो’ मारिबे यारे",
      transliterations: [
        "तुमि तो’ मारिबे यारे, के तारे राखिते पारे,\nइच्छा-वश त्रिभुवन।\nब्रह्मा-आदि देव-गण, तव दास अगणन,\nकरे तव आज्ञार पालन॥ (१)",
        "तव इच्छा-मते यत, ग्रह-गण अविरत,\nशुभाशुभ फल करे दान।\nरोग-शोक-मृति-भय, तव इच्छा-मते हय,\nतव आज्ञा सदा बलवान॥ (२)",
        "तव भये वायु वय, चन्द्र सूर्य समुदय,\nस्व-स्व नियमित कार्य करे।\nतुमि तो’ परमेश्वर, पर-ब्रह्म परात्पर,\nतव वास भकत-अन्तरे॥ (३)",
        "सदा-शुद्ध सिद्ध-काम, ‘भकत-वत्सल’ नाम,\nभकत-जनेर नित्य-स्वामी।\nतुमि तो’ राखिबे यारे, के तारे मारिते पारे,\nसकल विधिर विधि तुमि॥ (४)",
        "तोमार चरणे नाथ! करियाछे प्रणिपात,\nभकतिविनोद तव दास।\nविपद हइते स्वामी! अवश्य ताहारे तुमि,\nरक्षिबे,—ताहार ए विश्वास॥ (५)"
      ],
      translations: [
        "यदि आप किसी का संहार करना चाहें, तो उसकी रक्षा कौन कर सकता है? तीनों भुवन आपकी ही इच्छा के वशीभूत हैं। ब्रह्मादि समस्त देवता आपके अनगिनत दास हैं, जो सदैव आपकी आज्ञा का पालन करने के लिए तत्पर रहते हैं।",
        "आपकी इच्छानुसार ही समस्त नवग्रह निरंतर अपना शुभ अथवा अशुभ फल प्रदान करते हैं। रोग, शोक, मृत्यु और भय—यह सब आपकी ही इच्छा से होता है। आपकी आज्ञा सदैव सर्वशक्तिमान है।",
        "आपके भय से ही वायु बहती है, तथा सूर्य और चन्द्रमा उदित होकर अपने-अपने नियत कर्तव्य का पालन करते हैं। आप ही परमेश्वर हैं, परात्पर परब्रह्म हैं, और आप अपने प्रेमी भक्तों के हृदय में निवास करते हैं।",
        "आप नित्य-शुद्ध और पूर्ण-काम (जिनकी समस्त इच्छाएं स्वतः पूर्ण हैं) हैं। आपका नाम 'भक्त-वत्सल' है, क्योंकि आप अपने भक्तों के नित्य स्वामी और स्नेही हैं। यदि आप किसी की रक्षा करना चाहें, तो उसका वध कौन कर सकता है? आप सभी नियमों और विधानों के परम विधान हैं।",
        "हे नाथ! आपका यह तुच्छ दास भक्तिविनोद आपके चरणकमलों में नतमस्तक होकर प्रणाम करता है। हे स्वामी! उसको यह दृढ़ विश्वास है कि आप समस्त विपत्तियों से उसकी निश्चित रूप से रक्षा करेंगे।"
      ]
    },
    "256": {
      title: "(प्रभु हे!) तुवा पदे ए मिनति मोर",
      transliterations: [
        "(प्रभु हे!) तुवा पदे ए मिनति मोर।\nतुवा पद-पल्लव, त्यजत मरु-मन,\nविषम विषये भेल भोर॥ (१)",
        "उठयिते ताकत, पुन नाहि मिलो-इ,\nअनुदिन करहुँ हुताश।\nदीन-जन-नाथ, तुहुँ कहायसि,\nतुमारि चरण मम आश॥ (२)",
        "ऐछन दीन-जन, कहि नाहि मिलो-इ,\nतुहुँ मोरे कर परसाद।\nतुवा जन-सङ्गे, तुवा कथा-रङ्गे,\nछाड़हुँ सकल परमाद॥ (३)",
        "तुवा धाम-माहे, तुवा नाम गाओत,\nगोवा़यबुँ दिवा-निशि आश।\nतुवा पद-छाया, परम सुशीतल,\nमागे भकतिविनोद दास॥ (४)"
      ],
      translations: [
        "हे प्रभु! आपके चरणों में मेरी यही विनीत प्रार्थना है। आपके चरणकमल नवीन कोमल पल्लवों के समान मृदुल हैं, किन्तु उनका आश्रय त्याग देने के कारण घोर भौतिक विषयों की ज्वाला से झुलसकर मेरा मन मरुभूमि के समान सूख गया है।",
        "मुझमें पुनः उठ खड़े होने की तनिक भी शक्ति नहीं बची है, अतः मैं दिन-रात केवल विषाद और विलाप करता रहता हूँ। आप दीनों के नाथ कहलाते हैं, इसलिए आपके चरणकमल ही मेरी एकमात्र आशा हैं।",
        "मुझ जैसा दीन-हीन और पतित प्राणी कहीं अन्यत्र नहीं मिल सकता। अतः कृपा करके मुझ पर अपनी दया दृष्टि कीजिए। आपके शुद्ध भक्तों के संग में और आपकी अमृतमयी कथाओं के आनन्द में मग्न होकर मैं अपने समस्त प्रमादों और बुराइयों का त्याग कर दूँगा।",
        "मेरे प्राणों में केवल एक ही अभिलाषा स्पंदित हो रही है—कि आपके दिव्य धाम में वास करते हुए रात-दिन आपके पवित्र नाम का संकीर्तन करूँ। आपका यह दास भक्तिविनोद आपके चरणकमलों की परम शीतल छाया में तनिक सा स्थान माँगता है।"
      ]
    }

,
    "175": {
      title: "निताइ कि नाम एनेछे रे",
      transliterations: [
        "(ध्रुवपद)\nहरे कृष्ण हरे॥",
        "निताइ कि नाम एनेछे रे।\n(निताइ) नाम एनेछे, नामेर हाटे,\nश्रद्धा-मूल्ये नाम दितेछे रे॥ (१)",
        "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे रे।\nहरे राम हरे राम राम राम हरे हरे रे॥ (२)",
        "(निताइ) जीवेर दशा, मलिन देखे’,\nनाम एनेछे ब्रज थेके रे।\nए नाम शिव जपे पञ्च-मुखे रे\n(मधुर ए हरिनाम)\nए नाम ब्रह्मा जपे चतुर-मुखे रे\n(मधुर ए हरिनाम)\nए नाम नारद जपे वीणा-यन्त्रे रे\n(मधुर ए हरिनाम)\nए नामाभासे अजामिल वैकुण्ठे गेल रे।\nए नाम बोलते बोलते ब्रजे चल रे\n(भक्तिविनोद बले)॥ (३)"
      ],
      translations: [
        "(टेक) हरे कृष्ण हरे!",
        "अहो! दयामय श्री नित्यानन्द प्रभु कितना अनुपम दिव्य नाम लेकर आए हैं! निताई इस हरिनाम को 'नामहट' (हरिनाम के हाट/बाज़ार) में लेकर आए हैं और केवल तुम्हारी श्रद्धा रूपी मूल्य के बदले में इसे मुक्त हस्त से बाँट रहे हैं!",
        "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे! हरे राम हरे राम राम राम हरे हरे!",
        "अहो! इस संसार के बद्धजीवों की मलिन और शोचनीय दशा देखकर निताई इस दिव्य नाम को साक्षात् ब्रजधाम से लेकर आए हैं! इस नाम का जप भगवान् शिव अपने पाँचों मुखों से करते हैं (यह हरिनाम कितना मधुर है)! इस नाम का जप ब्रह्मा जी अपने चारों मुखों से करते हैं (यह हरिनाम कितना मधुर है)! देवर्षि नारद अपनी वीणा बजाकर इस नाम का नित्य गान करते हैं (यह हरिनाम कितना मधुर है)! इस नाम के केवल आभास (नामाभास) मात्र से पापी अजामिल भी वैकुण्ठ धाम को प्राप्त हो गया! भक्तिविनोद कहते हैं—'अरे भाई, इस पावन नाम का निरन्तर संकीर्तन करते हुए सीधे ब्रजधाम चले चलो!'"
      ]
    },
    "204": {
      title: "रमणी-शिरोमणि, वृषभानु-नन्दिनी",
      transliterations: [
        "रमणी-शिरोमणि, वृषभानु-नन्दिनी, नील-वसन-परिधान।\nछिन्न-पुरट जिनि’, वर्ण-विकाशिनी, बद्ध-कबरी हरि-प्राण॥ (१)",
        "आभरण-मण्डित, हरि-रस-पण्डित, तिलक-सुशोभित-भाला।\nकञ्चुलिकाच्छादिता, स्तन-मणि-मण्डिता, कज्जल-नयनी रसाला॥ (२)",
        "सकल त्यजिया से राधा-चरणे।\nदासी ह’ये भज परम-यतने॥ (३)",
        "सौन्दर्य-किरण देखिया याँहार।\nरति-गौरी-लीला गर्व-परिहार॥ (४)",
        "शची-लक्ष्मी-सत्या सौभाग्य बोलने।\nपराजित हय याँहार चरणे॥ (५)",
        "कृष्ण-वशीकारे चन्द्रावली-आदि।\nपराजय माने हइया विवादी॥ (६)",
        "हरि-दयित राधा-चरण प्रयासी।\nभकतिविनोद श्री-गोद्रुम-बासी॥ (७)"
      ],
      translations: [
        "राजा वृषभानु की नन्दिनी श्रीराधारानी समस्त तरुण रमणियों की शिरोमणि हैं। वे नील-वर्ण के वस्त्र (नीलाम्बर) धारण करती हैं। उनकी दिव्य अंग-कान्ति तपे हुए शुद्ध स्वर्ण की कान्ति को भी पराजित करती है, उनकी वेणी अति मनोहर रूप से सजी हुई है और वे श्रीकृष्ण की प्राण-स्वरूपा हैं।",
        "वे विविध दिव्य आभूषणों से अलंकृत हैं, भगवत्प्रेमामृत (हरि-रस) के विज्ञान में परम विदुषी हैं, और उनका ललाट सुन्दर तिलक से सुशोभित है। उनकी वक्षःस्थली मनोहर कंचुकी से आच्छादित और मूल्यवान मणियों से सुशोभित है। उनके नेत्र कज्जल से अंजनित हैं और वे साक्षात् माधुर्य-रस का विग्रह प्रतीत होती हैं।",
        "अन्य समस्त भौतिक उपाधियों का त्याग करके, श्रीराधारानी के श्रीचरणकमलों की दासी बनकर परम यत्नपूर्वक उनका भजन और सेवा करो!",
        "श्रीराधा के दिव्य सौन्दर्य की एक किरण का दर्शन करके रति, गौरी (पार्वती) और लीला जैसी देवियाँ भी अपने सौन्दर्य के समस्त गर्व का त्याग कर देती हैं।",
        "सौभाग्य के वर्णन में इन्द्राणी शची, महालक्ष्मी और सत्यभामा का परम सौभाग्य भी श्रीराधारानी के चरणकमलों के सम्मुख पराजित हो जाता है।",
        "श्रीकृष्ण को अपने प्रेम-वश में करने के विषय में चन्द्रावली आदि प्रतिस्पर्धी गोपियाँ भी अपनी पराजय स्वीकार कर लेती हैं, क्योंकि केवल श्रीराधा ही श्रीकृष्ण को पूर्णतः वशीभूत रखती हैं।",
        "श्रीगोद्रुम द्वीप के निवासी भक्तिविनोद श्रीहरि की परम प्रिया श्रीराधारानी के चरणकमलों की नित्य सेवा प्राप्त करने के लिए ही सदैव प्रार्थना करते हैं।"
      ]
    }

    ,"119": {
      title: "Bala Mukundastakam (Kararavindena Padaravindam)",
      transliterations: [
        "करारविन्देन पदारविन्दं\nमुखारविन्दे विनिवेशयन्तम\nवटस्य पत्रस्य पुटेशयानं\nबालं मुकुन्दं मनसा स्मरामि",
        "सम्ह्रुत्य लोकान वटपत्रमध्ये\nशयनमाद्यन्त विहीनरूपम\nसर्वेश्वरं सर्वहितावतारं\nबालं मुकुन्दं मनसा स्मरामि",
        "इन्दीवरश्यामल कोमलाङ्गम\nइन्द्रादिदेवार्चित पादपद्मम\nसन्तानकल्पद्रुममाश्रितानां\nबालं मुकुन्दं मनसा स्मरामि",
        "लम्बालकं लम्बितहारयष्टिं\nशृउङ्गारलीलाङ्कित दन्त पङ्क्तिम\nबिम्बाधरं चारुविशालनेत्रं\nबालं मुकुन्दं मनसा स्मरामि",
        "शिक्ये निधायापि पयोदधीनि\nबहिर्गताय व्रजनायिकायाम\nभुक्त्वायथेष्टं कपटेनसुप्तं\nबालं मुकुन्दं मनसा स्मरामि",
        "कालिजलस्थित कालियस्य\nफणाग्ररङ्गेनटनप्रियन्तम\nतत्प्रुच्छहस्तं शरदिन्दुवक्त्रं\nबालं मुकुन्दं मनसा स्मरामि",
        "उलूखलेबद्धमुदारशौर्यम\nउत्तुङ्गयुग्मार्जुन भङ्गलीलाम\nउत्फुल्लपद्मायत चारुनेत्रं\nबालं मुकुन्दं मनसा स्मरामि",
        "आलोक्य मातुमुख मादरेण\nस्तन्यं पिबन्तं सरसीरुहाक्षम\nसच्चिन्मयं देवमनन्तरूपं\nबालं मुकुन्दं मनसा स्मरामि"
      ],
      translations: [
        "I meditate on that infant Mukunda (Krsna) who is sleeping on the leaf of a banyan tree with his the lotus like foot placed in his lotus like mouth with his lotus like hand.",
        "I meditate on that infant Mukunda who is sleeping holding all the worlds together on the leaf of a banyan tree in such form, which has no beginning or no end. He is the incarnation of God for the welfare of all mankind and the Lord of all.",
        "I meditate on Bala Mukunda in my heart, who has a delicate body like a blue lotus and whose foot is worshipped by all the gods and Indra etc. He is the wish-fulfilling tree for those who take refuge in him.",
        "I meditate on that Bala Mukunda in my heart, who has hanging curls and hanging necklaces, a beautiful row of teeth which are shown playfully. His lower lip is as red as a Bimba fruit and has beautiful wide eyes.",
        "I meditate on that Bala Mukunda in my heart, who pretended as if he was sleeping, having eaten the yogurt to his contentment from the hanging pots of the Gopis when they had gone out.",
        "I meditate on Bala Mukunda whose beautiful face resembles the autumnal moon and is dancing happily on the hood of the serpent Kaliya holding its tail with his hand in the Kalinda pond.",
        "I meditate on Bala Mukunda with beautiful eyes like the petals of a full- bloomed lotus and who with great valor broke the pair of tall yamala-arjuna trees even though he was tied to a mortar (a large heavy stone bowl for pounding grain).",
        "I meditate on Bala Mukunda, God filled with sat and cit, i.e., infinite consciousness, of infinite divine form, the lotus eyed one who cast his looks at his mother’s face with affection, while drinking milk from her breast."
      ]
    }
    ,"152": {
      title: "Sri Radha Krpa Kataksa Stava Raja",
      transliterations: [
        "मुनीन्द्रवृन्दवन्दिते त्रिलोकशोकहारिणि\nप्रसन्नवक्त्रपङ्कजे निकुञ्जभूविलासिनि\nव्रजेन्द्रभानुनन्दिनि व्रजेन्द्रसूनुसङ्गते\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "अशोकवृक्षवल्लरीवितानमण्डपस्थिते\nप्रवालवालपल्लवप्रभारुनाङ्घ्रिकोमले\nवराभयस्पुरत्करे प्रभूतसम्पदालये\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "अनङ्गरङ्गमङ्गलप्रसङ्गभङ्गुरभ्रुवां\nसविभ्रमं ससंभ्रमं दृगन्तबाणपातनैः\nनिरन्तरं वशीकृतप्रतीतिनन्दनन्दने\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "तडित्सुवर्णचम्पकप्रदीप्तगौरविग्रहे\nमुखप्रभापरास्तकोटिशारदेन्दुमण्डले\nविचित्रचित्रसञ्चरच्चकोरशावलोचने\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "मदोन्मदातियौवने प्रमोदमानमण्डिते\nप्रियानुरागरञ्जिते कलाविलासपण्डिते\nअनन्यधन्यकुञ्जराज्यकामकेलिकोविदे\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "अशेषहावभावधीरहीरहारभूषिते\nप्रभूतशातकुम्भकुम्भकुम्भि कुम्भसुस्तनि\nप्रशस्तमन्दहास्यचूर्णपूर्णसौक्यसागरे\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "मृनालवालवल्लरीतरङ्गरङ्गदोर्लते\nलताग्रलास्यलोलनीललोचनावलोकने\nललल्लुलन्मिलन्मनोज्ञमुग्धमोहनाश्रिते\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "सुवर्णमालिकाञ्चितत्रिरेखकम्बुकण्ठगे\nत्रिसूत्रमङ्गलीगुणत्रिरत्नदीप्तिदीधिति\nसलोलनीलकुन्तलप्रसूनगुच्छगुम्फिते\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "नितम्बबिम्बलम्बमानपुष्पमेखलागुणे\nप्रशस्तरत्नकिङ्किणीकलापमध्यमञ्जुले\nकरीन्द्रशुण्डदण्डिकावरोहसौभगोरके\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "अनेकमन्त्रनादमञ्जुनूपुरारवस्खलत\nसमाजराजहंसवंशनिक्वणातिगौरवे\nविलोलहेमवल्लरीविडम्बिचारुचङ्क्रमे\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "अनन्तकोटिविष्णुलोकनम्रपद्मजार्चिते\nहिमाद्रिजापुलोमजाविरिञ्चिजावरप्रदे\nअपारसिद्धिऋद्धिदिग्धसत्पदाङ्गुलीनखे\nकदा करिष्यसीह मां कृपाकताक्षभाजनम",
        "मखेश्वरि क्रियेश्वरि स्वधेश्वरि सुरेश्वरि\nत्रिवेदभारतीश्वरि प्रमाणशासनेश्वरि\nरमेश्वरि क्षमेश्वरि प्रमोदकाननेश्वरि\nव्रजेश्वरि व्रजाधिपे श्रीराधिके नमो ऽस्तु ते",
        "इती ममाद्भुतं स्तवं निशम्य भानुनन्दिनी\nकरोतु सन्ततं जनं कृपाकटाक्षभाजनम\nभवेत तदैव सञ्चितत्रिरूपकर्मनाशनं\nभवेत तदा व्रजेन्द्रसूनुमण्डलप्रवेशनम"
      ],
      translations: [
        "\"Oh You who are adorned by the leaders of multitude of sages! Oh You who takes away the miseries of the three worlds! Oh You whose face joyfully blooms like a lotus flower! Oh You who delights in playing love-sports throughout the secret forest bower-houses! Oh most charming daughter of Vrsabhanu, beloved of the King of Vraja, Sri Krsna! Oh You who are always associated with the King of Vraja Sri Krsna! When? Oh, When will You make me the object of Your side-long glance of causeless mercy?\"",
        "\"O You who dwells in a pavilion with a canopy of creepers spread over the branches of asoka trees! Oh You whose soft delicate feet radiate the pink-coral color of freshly sprouted tree- buds! Oh You whose upraised hand bestow the benediction of fearlessness! Oh You who are the source of divine opulences! When? Oh, When will You make me the object of Your side-long glance of causeless mercy?\"",
        "\"Oh You, with the bow of Cupid, Your delightful auspicious crooked bending eyebrows, You shoot Your arrow messages of love from the corners of Your eyes, which cause the charming son of Nanda to be struck with amorous delusions of noble submission to you for all eternity! Oh, When will you make me the object of Your side-long glance of causeless mercy.\"",
        "\"Oh You, whose golden form is brilliantly effulgent like lightning and campaka flowers! Oh You whose effulgent face eclipses the beauty of millions of full autumn moons! Oh You whose restless eyes are like cakora partridges moving to and fro! Oh, When will You make me the object of Your side-long glance of causeless mercy?\"",
        "\"Oh You Who are an extremely joyful love-happy youth! Oh You who are decorated with the great happiness of love- intoxicated jealousy, pouting and anger! Oh You who has extreme pure loving affection for Your beloved Sri Krsna! Oh You, the most expert in all the various acts of amorous love! Oh You, the most learned in arranging amorous pastimes of pure love in super opulent secret bower houses in the best of forests! When? Oh, When will make me the object of Your side-long glance of causeless mercy?\"",
        "\"Oh You who are decorated with the diamond necklace of a limitless variety of feminine charms like artistic amorous gestures, ecstatic loving moods, and gentle mannerisms! Oh You, whose incomparable ecstatic love makes Your perfect breasts very plump like golden water jugs or like the temple mounds of a young elephant! Oh You whose enchanting mild sweet smile is like a line of flower pollen on the ocean of joy! When? Oh when, will you make me the object of Your side-long glance of causeless mercy?\"",
        "\"Oh You whose arms are like fresh creepers of lotus stems playfully swaying in waves of the river of Your youthful pastimes! Oh you whose seductive very dark-blue (nila) eyes are like the tip of a creeper blown by a gentle breeze! Oh You whose playful sports and alluring movements so enchant Mohan Krsna that He appears hypnotized by You into wonderful meetings! Oh When will You make me the object of your sidelong glance of causeless mercy?\"",
        "\"Oh You smooth conch shell like neck, marked with three lines is decorated with a pure gold necklace! Oh You whose three strand necklace of woven jasmine garlands decorated with diamonds, emeralds, and pearls radiates splendid effulgence! Oh You whose every dark blue (nila) braids of hair are interwoven the bunches of flowers! When oh when will you make me the object of Your side long glance of causeless mercy?\"",
        "\"Oh You whose round hips are decorated with a belt of dangling flowers! Oh You whose charmingly thin waist is decorated by a belt of tiny tinkling jeweled bells! Oh you, whose beautifully shaped legs taper gracefully from Your thigh like the trunk of the king of elephants! When, oh When will You make me the object of Your side-long glance of causeless mercy?\"",
        "\"Oh You whose captivating ankle bells make the sounds of various kinds of divine mantras resembling a group of royal swans singing! Oh You whose extreme superexcellent movements put to shame the swaying of a golden creeper! Oh, when will You make me the object of Your side-long glance of causeless mercy?\"",
        "\"Oh You who is humbly worshipped by all the Lord Brahmas in unlimited millions of universes created by Lord Visnu! Oh You who is the bestower of benedictions to the daughter of the Himalayas, Parvati (Siva's wife), the daughter of Puloma, Saci (Indra's wife), and to Brahma's wife, Sarasvati! Oh You Whose toenails glow with the radiance of boundless mystic perfections and opulences! When oh, When will you make me the object of Your side-long glance of causeless mercy?\"",
        "\"O Goddess, Leader of Vedic sacrifices! Oh Goddess leader of pious activities! Oh Goddess Leader of spontaneous devotional service! Oh Goddess Leader of all the demigods and Goddesses! O Goddess, leader of all knowledge in the three Vedas! Oh Goddess leader of enforcing scriptural principles! Oh Goddess Leader of all Goddesses of fortune! Oh Goddess Leader of forgiveness! Oh Goddess Leader of the pleasure forest of Vrindavana! Oh Goddess Leader of Vraja! Oh One and only authority who regulates entrance into Vraja! Oh Sri Radhika! I offer my most respectful obeisances unto You!\"",
        "May Sri Vrsabhanu-nandini, upon hearing my astonishing prayer recited, bestow Her most merciful side-long glance upon the speaker. At that time one will feel all the effects of past, present and future karma completely destroyed and gain entrance into the assembly of Nanda-nandana's Krsna's eternal loving devotees. That aspiring devotee who chants this prayer on the full moon day, waxing eight lunar day, tenth lunar day, eleventh lunar day (ekadasi), and thirteenth lunar day will find that his mind and intelligence become pure, each and every desire will be fulfilled without fail, and by the most merciful sidelong glance of Sri Radha, one will obtain pure ecstatic love (prema). The aspiring devotee who recites this prayer one hundred times while in the waters of Sri Radha Kunda up to the thighs, navel, chest or neck attains complete perfection in religiosity, economic development, fulfillment of desires, and liberation - the power by which everything spoken will come true, and great opulence from attaining transcendental majesty. At that time one gets to meet Sri Radhika face to face, seeing Her even with one's own present eyes and Sri Radhika becomes so pleased that She instantly bestows the greatest benediction of being able to see her own beloved Shyamasundara Krsna with one's present eyes. Then Lord Krsna, the Lord of Vraja-dhama, grants one entrance into His eternal ecstatic pastimes, which is the only goal for which true Vaisnavas hanker."
      ]
    }
    ,"162": {
      title: "Sri Sivastakam",
      transliterations: [
        "नमो नमस ते त्रिदशेश्वराय\nभूतादिनाथाय मृडाय नित्यम\nगङ्गातरङ्गोत्थितबालचन्द्र\nचूडाय गौरीनयनोत्सवाय",
        "सुतप्तचामीकरचन्द्रनील\nपद्मप्रवालाम्बुदकान्तिवस्त्रैः\nसुनृत्यरङ्गेष्टवरप्रदाय\nकैवल्यनाथाय वृषध्वजाय",
        "सुधांशुसूर्याग्निविलोचनेन\nतमोभिदे ते जगतः शिवाय\nसहस्रशुभ्रांशुसहस्ररश्मि\nसहस्रसञ्जित्त्वरतेजसेऽस्तु",
        "नागेशरत्नोज्ज्वलविग्रहाय\nशार्दूलचर्मांशुकदिव्यतेजसे\nसहस्रपत्रोपरि संस्थिताय\nवराङ्गदामुक्तभुजद्वयाय",
        "सुनूपुरारञ्जितपादपद्म\nक्षरत्सुधाभृत्यसुखप्रदाय\nविचित्ररत्नौघविभूषिताय\nप्रेमानम एवाद्य हरौ विधेहि",
        "श्रीराम गोविन्द मुकुन्द शौरे\nश्रीकृष्ण नारायण वासुदेव\nइत्य आदिनामामृतपानमत्त\nभृङ्गाधिपायाखिलदुःखहन्त्रे",
        "श्रीनारदाद्यैः सततं सुगोप्य\nजिज्ञासितायाशु वरप्रदाय\nतेभ्यो हरेर भक्तिसुखप्रदाय\nशिवाय सर्वगुरवे नमः",
        "श्रीगौरीनेत्रोत्सवमङ्गलाय\nतत्प्राणनाथाय रसप्रदाय\nसदा समुत्कण्ठगोविन्दलीला\nगानप्रवीणाय नमोऽस्तु तुभ्यम",
        "एतत शिवस्याष्टकम अद्भुतं महत\nशृण्वन हरिप्रेम लभेत शीघ्रम\nज्ञानञ च विज्ञानम अपूर्ववैभवं\nयो भावपूर्णः परमं समादरम"
      ],
      translations: [
        "I perpetually offer obeisances unto you, the lord of the thirty primal devas, who are the original father of created beings, whose character is gracious, upon whose head, which is crested by the sickle moon, the Ganga springs, and who are a festival for the eyes of Gauri, the fair goddess.",
        "I offer my obeisances to you who resemble a moon of molten gold, who are dressed in garments colored like a group of budding blue lotuses or lustrous rain clouds, who bestow the most desirable boon to your devotees by your delightful dancing, who offer shelter to those who seek to become one with the transcendental effulgence of Godhead, and whose flag bears the image of the bull.",
        "I offer my obeisances to you who dispel darkness with your three eyes - the moon, the sun, and fire - and thus cause auspiciousness for all the living entities of the universe, and whose potency easily defeats thousands of moons and suns.",
        "I offer my obeisances to you, whose form is brilliantly illuminated by the jewels of Ananta-deva, the king of snakes, who possess divine potencies and are clothed in a tiger-skin, who stands in the midst of a thousand-petalled lotus, and whose two arms are adorned by lustrous bangles.",
        "I offer my obeisances to you who bestow happiness to your servitors as you pour upon them the liquid nectar flowing from your reddish lotus feet, upon which charming anklebells ring. Obeisances unto you who are adorned by an abundance of gems! Please endow Me today with pure love for Sri Hari.",
        "“O Sri Rama! O Govinda! O Mukunda! O Sauri! O Sri Krsna! O Narayana! O Vasudeva!” I bow to you, Sri Siva, who are the monarch ruling over all the bee-like devotees who are mad to drink the nectar of these and other innumerable names of Hari, and who thus destroys all grief.",
        "I offer my respectful obeisances to you, Sri Siva, who are forever inquired of confidentially by Sri Narada and other great sages, who very easily bestow boons on them, who bestow the happiness of Hari-bhakti to those who seek boons of you, who thereby create auspiciousness and are thus the guru of everyone.",
        "I offer my obeisances to you who are a festival of auspiciousness for the eyes of Gauri, who are the lord of her life-energy, who bestow rasa and are expert in forever singing songs with eagerness of the pastimes of Govinda.",
        "The person who hears these great eight prayers glorifying Lord Siva with loving feelings and with great attention can quickly gain the love of Lord Sri Hari as well as transcendental knowledge, the application of the knowledge, and unparalleled endless opulences.\""
      ]
    }
    ,"164": {
      title: "श्री नाम सङ्कीर्तन अधिवास (Śrī Nāma Saṅkīrtana Adhivāsa - वृन्दावन दास ठाकुर कृत)",
      transliterations: [
        "नाना द्रव्य आयोजन, करि’ करे निमन्त्रण,\nकृपा करि’ कर आगमन।",
        "तोमार वैष्णव-गण, मोर एइ निवेदन,\nदृष्टि करि’ कर समापन।",
        "करि’ अतो निवेदन, आनिल महन्त-गण,\nकीर्तनेर करे अधिवास।",
        "अनेक भाग्यर फले, वैष्णव आसिया मिले,\nकालि हबे महोत्सव-विलास।",
        "श्री-कृष्णेर लीला-गान, करिबेन आस्वादन,\nपूरिबेन सबार अभिलाष।",
        "श्री-कृष्ण-चैतन्य-चन्द्र, सकल भकत-वृन्द,\nगुण गाय वृन्दावन दास।"
      ],
      translations: [
        "विविध प्रकार की पूजन सामग्रियों का आयोजन करके हम आप सभी को सादर आमंत्रित करते हैं; कृपा करके आप सभी इस पावन सभा में पधारें।",
        "हे प्रभु के प्रिय वैष्णव-वृन्द! मेरा आप सभी से यही विनम्र निवेदन है कि अपनी कृपामयी दृष्टि डालकर इस अधिवास अनुष्ठान को पूर्ण व पवित्र करें।",
        "इस प्रकार विनीत प्रार्थना करके समस्त महान वैष्णवों और आचार्यों का स्वागत कर संकीर्तन-यज्ञ का पावन अधिवास अनुष्ठान संपन्न किया जाता है।",
        "अनेक-अनेक जन्मों के महान सौभाग्य से ही ऐसे परम वैष्णवों का पावन संग प्राप्त होता है। कल इस दिव्य संकीर्तन का भव्य महोत्सव संपन्न होगा।",
        "वहाँ आप सभी भगवान् श्रीकृष्ण की मधुर लीलाओं के गान का आस्वादन करेंगे, और आप सभी की समस्त आध्यात्मिक अभिलाषाएं पूर्ण होंगी।",
        "इस प्रकार श्री चैतन्य-चन्द्र और उनके समस्त प्रिय भक्तों के दिव्य गुणों का गान यह दीन वृन्दावन दास करता है।"
      ]
    }
    ,"179": {
      title: "Nityananda Candrasya Nama Dvadasakam",
      transliterations: [
        "नित्यानन्दो ऽवधूतेन्दुर वसुधाप्राणवल्लभः\nजाह्नवीजीवितपतिः कृष्णप्रेमप्रदः प्रभुः",
        "पद्मावतीसुतः श्रीमान शचीनन्दनपूर्वजः\nभावोन्मत्तो जगत्त्राता रक्तगौरकलेवरः",
        "स्रि नित्यानन्द चन्द्रस्य नामद्वादशकं शुभम य इदं प्रत्यहं प्रतः प्रत्य उत्थाय पठेन नरः",
        "स क्लेशरहितो भूत्वा प्राप्नुयात स्वमनोरथम तूर्णं चैतन्यदेवस्य करुणाभाजनं भवेत"
      ],
      translations: [
        "Sri Nityananda Prabhu is the embodiment of eternal bliss. He is the moon of all avadhutas and the beloved of the life-breath of Vasudha (His wife). Lord Nityananda is the husband, enthusing Jahnavi with life. Nityananda Rama bestows ecstatic love for Krishna and He is the Lord and Master of the devotees.",
        "Sri Nityananda is the dear son of Padmavati and He is full of splendorous transcendental majesty. Nitai is the older brother of Sacimata's son Nimai. Nityananda Avadhuta is maddened in overwhelming ecstatic emotions. Sri Nityananda Prabhu is the savior of the universe. His complexion is golden tinged with red. 3-4) That person who recites these twelve auspicious holy names of the moonlike Nityananda-candra every day upon arising in the morning such a person becomes free from all difficulties and attains all their most cherished desires. Very soon they become the object of Lord Caitanya-deva's mercy.",
        "English meaning not yet written for this verse.",
        "English meaning not yet written for this verse."
      ]
    }
    ,"190": {
      title: "प्रभुपाद चरणाश्रय (Prabhupāda Caraṇāśraya - जयपताका स्वामी कृत)",
      transliterations: [
        "प्रभुपाद-चरणाश्रय, शुद्ध-भक्ति-भावोदय,\nप्रणमामि शरण लये\nभक्त-गोष्ठी याँहार देह, सर्व-जीव-आश्रय गेह,\nगौराङ्गेर पाश आमारे नि’ जये",
        "कृष्ण-कथामृत-लेखक, गौर-तत्त्व-जगत्-शिक्षक,\nकरि तुँहार नित्य-सङ्गेर आशा।\nप्रभुपाद-पथ बाहिरे, कलि-कालेर माया, भाइ रे!,\nउद्धार पाइबार नहि कोनो आशा",
        "प्रचार-अमृत दिलो ये, गुरु-गौराङ्ग-प्राण से,\nकीर्तने कराइबे राधा-दास...\nश्रील प्रभुपाद जय, पतित-पावन हय,\nतव पदे मोर नित्य वास",
        "पश्चाद्-देश शून्यवादী दुराचारी मायावादी,\nउद्धार पाइलो केवल तुँहार दये।\nप्रभुपाद दया कर, कृष्ण-भक्त ए-बार कर,\nतुँहार दया – असम्भव सम्भव हय, रे!"
      ],
      translations: [
        "श्रील प्रभुपाद के चरणकमलों का आश्रय ही हृदय में शुद्ध भक्ति-भाव को जागृत करने वाला है। उनके चरणों में साष्टांग प्रणाम कर मैं पूर्ण शरणागति ग्रहण करता हूँ। शुद्ध भक्तों का समाज (इस्कॉन) ही उनका दिव्य स्वरूप है, जो समस्त जीवों के लिए परम आश्रय-गृह है। हे प्रभुपाद! आप हमें भी अपने साथ श्रीगौरांग महाप्रभु के समीप ले चलिए।",
        "आप श्रीकृष्ण-कथामृत के दिव्य रचयिता और सम्पूर्ण जगत को गौर-तत्त्व की शिक्षा देने वाले जगद्गुरु हैं। मैं आपके नित्य संग की अभिलाषा करता हूँ। हे भाई! श्रील प्रभुपाद द्वारा प्रदर्शित भक्ति-मार्ग के बाहर केवल कलि की माया ही व्याप्त है, उस मार्ग के बिना इस कलिकाल में उद्धार की कोई आशा नहीं है।",
        "जिन्होंने विश्वभर में भगवन्नाम प्रचार का अमृत वितरित किया, जो गुरु और गौरांग के प्राण-स्वरूप हैं, वे संकीर्तन-यज्ञ के द्वारा सभी को श्रीमती राधारानी की नित्य सेवा में नियुक्त करते हैं। हे पतित-पावन श्रील प्रभुपाद! आपके चरणकमलों में मेरा नित्य वास हो।",
        "पश्चिमी जगत के शून्यवाद, मायावाद और तमोगुण में डूबे हुए जीव केवल आपकी अहैतुकी करुणा से ही भवबंधन से मुक्त हुए। हे प्रभुपाद! मुझ पर भी दया कीजिए और मुझे एक बार श्रीकृष्ण का सच्चा भक्त बना दीजिए। आपकी कृपा से असंभव भी संभव हो जाता है!"
      ]
    }
    ,"203": {
      title: "Radhikastakam",
      transliterations: [
        "राधिका शरदैन्दूनिन्दि मूखमण्डली\nकुन्तले विचित्रवेणी चम्पपुष्पशोभनी\nनील पट्ट अङ्गे शोभे ताहे आध ओटनी\nवन्दिये श्रीपादपद्म वृसभानुनन्दिनी",
        "तरुण अरुण जिनि सिन्दूरेर मण्डली\nयैछे अलि मत्त भरे मलयजगन्धिनी\nभुरूर भङ्गिम कोटी कोटी कामगञ्जिनी\nवन्दिये श्रीपादपद्म वृसभानुनन्दिनी",
        "खञ्जनगञ्जनदिठि बङ्किमसुचाहनी\nअञ्जन रञ्जित ताहे कामशरसन्धिनी\nतिलपुष्प जिनि नासा वेसरसुदोलनी\nवन्दिये श्रीपादपद्म वृसभानुनन्दिनी",
        "पक्क विस्वफल जिनि अधर सुरङ्गिनी\nदशन दाडिस्वबीज जिनि अति शोभनी\nवसन्त कोकिल जिनि सुमधुरबोलनी\nवन्दिये श्रीपादपद्म वृसभानुनन्दिनी",
        "कनक मूकुर जिनि गण्डयुग शोभनी\nरतन मञ्जीर पाये बङ्कराजदोलनी\nकेशर मुकुताहार उरपर झोलनी\nवन्दिये श्रीपादपद्म वृसभानुनन्दिनी",
        "कनक कलस जिनि कुचयुग शोभनी\nकरिबरकर जिनि बाहुयुग दोलनी\nसुललित अङ्गुलिते मुद्रिकार साजनी\nवन्दिये श्रीपादपद्म वृसभानुनन्दिनी",
        "गजअरि जिनि माजा गुरुया नितस्विनी\nताऽपर शोभित भाल कनकेर किङ्किनी\nकनक उलट रम्भा जानुयुगशोभनी\nवन्दिये श्रीपादपद्म वृसभानुनन्दिनी",
        "हंसराजगति जिनि सुमन्थरचलनी\nरातुल चरणे राजे कनया सुपञ्जिनी\nयुगल चरणे शोभे यावक सुरञ्जिनी\nवन्दिये श्रीपादपद्म वृसभानुनन्दिनी"
      ],
      translations: [
        "Srimati Radhika’s face makes the full moon of the Sarat (Autumn) season feel bashful. Multitudes of flowers adorn her beautifully braided hair. She is dressed in a blue sari and the upper part of her body is covered with a veil. I worship the lotus feet of Srimati Radhika, the daughter of King Vrsabhanu",
        "The dot of sindur on the forehead of Srimati Radhika defeats the redness of the early morning sun. The fragrance of lotus from Her body causes the bumble bees to go wild and fly around her. The gesture of her eyebrows defeats the pride of million of Cupids. I worship the lotus feet of that Srimati Radharani, the daughter of King Vrsabhanu.",
        "Her eyes, which move like the khanjana bird, are anointed with mascara. From the corner of Her eyes, She shoots her beautiful glance, ust like the flower arrows from the bow of Cupid. Her beautiful nose defeats the beauty of sesame-flowers and from it a nose-ring swings very beautifully. I worship the lotus feet of that Srimati Radhika, the daughter of King Vrsabhanu.",
        "Her lips are more reddish than a ripe bimba-fruit, and Her teeth are as beautifully set as the seeds of pomegrantes. Her voice is more melodious than that of a cuckoo. I worship the lotus feet of that Srimati Radhika, the daughter of King Vrsabhanu.",
        "She has cheeks that are blossoming with gracefully with a golden complexion. Her jeweled ankle bells tied to Her feet sways freely. Her long hair and necklace of pears lie on Her breasts. I worship the lotus feet of that Srimati Radhika, the daughter of King Vrsabhanu.",
        "The beauty of Her cheeks defeats the beauty of a golden mirror. She wears jeweled ankle bells and Her ear-rings swing beautifully. Her slender fingers are decorated with jewel-studded rings. I worship the lotus feet of that Srimati Radhika, the daughter of King Vrsabhanu.",
        "She moves more majestically than the king of elephants. A golden girdle shines beautifully around her slender waist, and the small gold bells in them tinkle sweetly. Her thighs are smooth and slender like an upturned trunk of a golden banana tree. I worship the lotus feet of that Srimati Radhika, the daughter of King Vrsabhanu.",
        "Her movement is more graceful than a swan’s. Jewelled ankle-bells adorn her feet. I worship the lotus-feet of that Srimati Radhika, the daughter of King Vrsabhanu."
      ]
    }
    ,"217": {
      title: "से शुभ दिनेर आराधना करे (Se Śubha Diner - भक्ति चारु स्वामी कृत)",
      transliterations: [
        "से शुभदिनेर आराधना करे जागरे जगत्वासी।\nचैत्र मधुर, स्वर्ग-मेदुर शुभ लगनेर राशि॥\nयेदिन आमार हृदयेर राज गुरुदेव महाराज।\nपूत पुरीधामे प्रकाशि आपनि हरे पृथिवीर त्रास॥",
        "देवदूत-सम गुरुमहाराज आलोके प्लावित कर।\nजीवन-युद्धे पराजित मोर भय-संत्रास हर॥\nदुर्लभतम मानव जीवन, तथापि भरोसाहीन।\nतव कृपा बिना आमि असहाय अपारग उदासीन॥",
        "मायार प्रभावे आपन स्वभावे सदाइ अधम मति।\nत्राण करा एइ अधम जेनेरे, कृपा बिना नेइ गति॥\nजीव कल्याणे तव अवदान जगते घोषित आज।\nतव श्रीचरण, आमार जीवन गुरुदेव महाराज॥",
        "कृष्णके भुले मायार कबले क्लेश पाइ अविरत।\nमरुभूमि माझे मृगतृष्णा सम प्रलोभन भरे यत॥\nभीति-भीषिका भरा अन्ध तिमिर अमानिशा सम।\nमानि मम आशा आज गुरुमहाराज—तव श्रीमुखेर वाणी,\nभकतिर वाणी पृथिवीते आनि॥"
      ],
      translations: [
        "उस परम पावन दिन की आराधना करते हुए हे जगत के वासियों, जाग उठो! वह दिन स्वर्ग से भी अधिक मधुर और अत्यंत शुभ लगन से परिपूर्ण था, जब श्री पुरुषोत्तम पुरी धाम में मेरे हृदय के राजा श्रील गुरुमहाराज (श्रील भक्तिसिद्धांत सरस्वती ठाकुर) प्रकट हुए और उन्होंने सम्पूर्ण पृथ्वी के संताप को हर लिया।",
        "देवदूत के समान हे गुरुमहाराज! आप दिव्य ज्ञान के प्रकाश से सम्पूर्ण जगत को आप्लावित कर दीजिए। इस भौतिक जीवन-संग्राम में पराजित हुए मुझ अभागे के भय और संत्रास को दूर कीजिए। यह मानव जीवन अत्यंत दुर्लभ है, फिर भी मैं असहाय और आश्रयहीन हूँ; आपकी कृपा के बिना मेरी कोई अन्य गति नहीं है।",
        "माया के प्रभाव से मेरी बुद्धि सदैव अधम और पतित रहती है। मुझ दीन-हीन पर करुणा कर मेरा उद्धार कीजिए, आपकी दया के बिना मुझे कोई त्राण नहीं मिल सकता। समस्त जीवों के कल्याण के लिए आपका पावन योगदान आज विश्वभर में घोषित है। हे गुरुदेव! आपके श्रीचरण ही मेरा सर्वस्व जीवन हैं।",
        "श्रीकृष्ण को विस्मृत करके हम माया के चंगुल में निरंतर घोर क्लेश भोग रहे हैं। यह संसार मरुभूमि की मृगतृष्णा के समान झूठे प्रलोभनों से भरा है और अमावस्या के गहन अंधकार के समान भयानक है। ऐसे में हे गुरुमहाराज, आपकी वाणी ही मेरी एकमात्र आशा है, जो इस धराधाम पर शुद्ध भगवद्-भक्ति का संदेश लेकर आई है।"
      ]
    }
    ,"231": {
      title: "Srila Prabhupadevastakam",
      transliterations: [
        "श्रीश्रीनवद्वीपपरप्रदीपः\nसन्दीप्यमानह सततो भुवीह\nचेतस्तमो हन्ति हि यस्य यत्नान\nनमामि तं श्रीप्रभुपाददेवम",
        "श्रीभक्तिसिद्धान्तप्रचोदितः श्री\nव्यासाद्यकोशं कुशलं कृपालुः\nसन म्लेच्छवाग्देशचये ऽदधद यस\nनमामि तं श्रीप्रभुपाददेवम",
        "आच्छद्यते यत्परतर्कदृश्य\nगोविन्दम्ःर्त्युज्ज्वलभस्करेण\nअद्वैतिखद्योतकुलं जगत्यां\nनमामि तं श्रीप्रभुपाददेवम",
        "यस्यैव यत्नेन पुराणराज\nगङ्गामला केशवकेलिहंसा\nसत्स्तोत्ररत्ना वहतीह लोके\nनमामि तं श्रीप्रभुपाददेवम",
        "श्रीराधिकाकृष्णपदारविन्दे\nसहस्रहृत्सु शतमन्दिरेषु\nअरोपयद यो मधुरे पृथिव्यां\nनमामि तं श्रीप्रभुपाददेवम",
        "कौशल्यदैर यस्य सहस्रशास्त्र\nशस्त्रातिवर्षैः प्रतिहन्यते हि\nचण्डा कलेर मोहचम्ःर हठेन\nनमामि तं श्रीप्रभुपाददेवम",
        "नानालसद्गौरसुधाप्रकाश\nफलः क्षितौ स्थापित एव येन\nकृष्णानुचिन्ताजनसङ्घवृक्षस\nनमामि तं श्रीप्रभुपाददेवम",
        "यो नित्यदा जीवति दैविकीषु\nनिजासु शिक्षासु सहानुगामि\nकृपाम्बुधिर नन्दसुताश्रितात्मा\nनमामि तं श्रीप्रभुपाददेवम"
      ],
      translations: [
        "I bow to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada. Because of his efforts, the eternal, brilliant lamp of Navadvipa (Sri Caitanya Mahaprabhu) is now destroying the darkness of ignorance within the hearts of the living entities in this world.",
        "I bow to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada. Being especially ordered by Sri Srimad Bhaktisiddhanta Sarasvati Thakura, and being very merciful, he placed in the Western countries, where English and other such degraded languages are spoken, the auspicious treasure house of devotional literature written by Srila Vyasadeva, Srila Krsnadasa Kaviraja, and others.",
        "I bow to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada. Because of his expert logic, the brilliant sun of Lord Govinda's transcendental form is now illuminating this world and completely eclipsing the insignificant glowworms of the impersonalists.",
        "I bow to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada. Because of his efforts, the pure and crystal-clear Ganges River of the Srimad-Bhagavatam, the king of puranas, is now flowing all over the world. The pebbles in that river are the jewels of the pure devotees' prayers, and playing within its waters are the swans of Lord Kesava's pastimes.",
        "I bow to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, who planted the charming lotus feet of Sri Sri Radha and Krsna in hundreds of temples and thousands of hearts throughout this world.",
        "I bow to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada. Showering thousands of arrows, which are his books, he has violently destroyed the fierce army of illusions presented by the Age of Kali.",
        "I bow to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada. Upon this earth he has planted the desire tree of the International Society for Krishna Consciousness, whose many splendid fruits are the many different methods of distributing the nectarean message of Sri Caitanya Mahaprabhu.",
        "I bow to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, who is like and ocean of mercy, and who has completely taken shelter of Lord Krsna, the transcendental son of Nanda Maharaja, with his body, mind, words, and self. Srila Prabhupada lives forever by his divine instructions, and his sincere followers live with him."
      ]
    }
    ,"244": {
      title: "Sri Narasimha Stuti (Sanaiscara-krta)",
      transliterations: [
        "सुलभो भक्ति युक्तानां दुर्दर्शो दुष्ट चेतसाम\nअनन्य गतिकानां च प्रभुर भक्तैक वत्सलः\nशनैश्चरस तत्र नृसिंहदेव चकाराऽमलचित्तव्रित्तिः\nप्रणम्य साष्टाङ्गम अशेषलोक किरीट नीराजित पाद पद्मम",
        "(श्री शनिरुवाच)\nयत पादपङ्कजरजः परमादरेन\nसंसेवितं सकल कल्मष राशिनाशम\nकल्याण कारकम अशेषनिजानुगानां\nस त्वं नृसिंह मयि धेहि कृपावलोकम",
        "सर्वत्र चञ्चलतया स्थितयाऽपि लक्ष्म्याः\nब्रह्मादि वन्द्य पदया स्थिरयान्य सेवि\nपादारविन्द युगलं परमादरेन\nस त्वं नृसिंह मयि धेहि कृपावलोकम",
        "यद रूपम आगमशिरः प्रतिपाद्य माध्यं\nआध्यात्मिकादि परिताप हरं विचिन्त्यम\nयोगीश्वरैर अपगताऽखिल दोष सङ्घैः\nस त्वं नृसिंह मयि धेहि कृपावलोकम",
        "प्रह्लाद भक्त वचसा हरिर आविरास\nस्थम्बे हिरण्यकशिपुं य उदारभावः\nऊर्वोर निधाय उदरं नखरैर ददार\nस त्वं नृसिंह मयि धेहि कृपावलोकम",
        "यो नैज भक्तम अनलाम्बुधि भूधरोग्र\nशृङ्गप्रपात विषदन्ति सरीसृपेभ्यः\nसर्वात्मकः परमकारुनिको ररक्ष\nस त्वं नृसिंह मयि धेहि कृपावलोकम",
        "यन्निर्विकार पररूप विचिन्तनेन\nयोगीश्वरा विषय सागर वीत रागाः\nविश्रान्तिम आपुर विनाश वतीम पराख्याम\nस त्वं नृसिंह मयि धेहि कृपावलोकम",
        "यद रूपमुग्र परिमर्दन भाव शालि\nसञ्चिन्तनेन सकलाघ विनाश कारि\nभूत ज्वर ग्रह समुद्भव भीति नाशम\nस त्वं नृसिंह मयि धेहि कृपावलोकम",
        "यस्योत्तमं यश उमापति पद्म जन्म\nशक्रादि दैवत सभासु समस्त गीतं\nशक्तैव सर्वशमल प्रशमैक दक्षं\nस त्वं नृसिंह मयि धेहि कृपावलोकम",
        "एवं श्रुत्वा स्तुतिम देवः शनिनां कल्पितां हरिः\nउवाच ब्रह्म वृन्दस्थं शनिं तं भक्तवत्सलः",
        "(श्री नृसिम्होवाच)\nप्रसन्नोऽहं शने तुभ्यं वरं वरय शोभनम\nयं वाञ्छसि तमेव त्वं सर्वलोक हितावहम",
        "(श्री शनिरुवाच)\nनृसिम्ह त्वं मयि कृपां कुरु देव दयानिधे\nमद वासरस तव प्रीति करस्यात देवतापते",
        "मत कृतं त्वत परं स्तोत्रं शृन्वन्ति च पठन्ति च\nसर्वान कामान पूरयेथास तेषां त्वं लोकभावन",
        "(श्री नृसिंहोवाचः)\nतथैवास्तु शनेऽहं वै रक्षोभुवन संस्थितः\nभक्त कामान पूरयिष्ये त्वं ममैकं वचः शृनु\nत्वत कृतं मत परं स्तोत्रं यः पठेच्छृनुयाच्चयः\nद्वादशाष्टम जन्मस्थाद त्वद भयं मास्तु तस्य वै",
        "शनिर नरहरिं देवं तथेति प्रत्युवाच ह\nततः परम संतुष्टो जयेति मुनयोऽवदन",
        "(श्री कृष्ण उवाच)\nइत्थं शनैश्चरस्याथ नृसिम्ह देव\nसंवादम एतत स्तवनं च मानवः\nशृनोति यः श्रावयते च भक्त्या\nसर्वाण्य भीष्टानि च विन्दते ध्रुवम"
      ],
      translations: [
        "Lord Nrsimhadeva is easily accessible to the devotees and punishes those who are evil-minded. He is the savior for those who are helpless who desire to seek refuge in Him. When the demigods of innumerable planets bow down to His lotus feet, the bright jewels from their crowns are reflected on His toenails which gives the impression that lamps are being waved in front of them. Unto these lotus feet, Sanideva (the personification of the planet, Saturn) prostrated and prayed (in the court of Brahma).",
        "Sani-deva said: By the mercy of the dust of Your lotus feet which destroy a multitude of sins, grant infinite auspiciousness to Your devotee who always worships Your lotus feet with devotion. O Lord Nrsimha, please bestow upon me Your merciful side-long glance.",
        "Your lotus feet are worshipped by Laksmi Devi, even though She never remains at one place. Your lotus feet are worshipped with great respect by Her, just as Lord Brahma and others who serve You worship Your lotus feet with great devotion. O Lord Nrsimha, please bestow Your merciful side-long glance upon me.",
        "By contemplating or meditating upon Your appearance, which is expounded in the Vedas extensively, the best of the saints are liberated from the three-fold miseries and from all misfortunes. O Lord Nrsimha, please bestow upon me Your merciful side-long glance.",
        "By the word of His devotee named Prahlada, Lord Hari, who is generous and kind, appeared from a pillar and by placing Hiranyakasipu on His thighs split open the his stomach with His nails. O Lord Nrsimha, please bestow upon me Your merciful side-long glance.",
        "You protected your own devotee Prahlada from a raging fire, the deep ocean, from falling from a tall mountain peak, poison, a mad elephant and the fangs of poisonous serpents. You are omnipresent and supremely generous. O Lord Nrsimha, please bestow upon me Your merciful side-long glance.",
        "By meditating upon He whose great form is devoid of imperfections, the best of the saints attained liberation from the ocean of materialistic attachments and obtained unmitigated salvation. O Lord Nrsimha, please bestow upon me Your merciful side-long glance.",
        "By meditating upon He whose form is fearsome, all peace, happiness and prosperity can be obtained, all sins can be obliterated, the fear arising from evil spirits, fevers and unfavorable planetary positions can be removed, O Lord Nrsimha, please bestow upon me Your merciful side-long glance.",
        "Your transcendental fame is sung gloriously in all the divine assemblies of Shiva, Brahma and Indra, and other demigods. Your power is steadfast in wiping out all impurities, O Lord Nrsimha, please bestow upon me Your merciful side-long glance.",
        "On listening to the heartfelt prayer composed by Sanideva in the assembly of Lord Brahma, Lord Hari who is ever compassionate to His devotees, spoke to Sanideva as follows.",
        "Lord Nrsimhadeva said, “O Sani, I am pleased with your devotion. Whatever you desire that will benefit the world, ask for that kind of boon and I will grant it.” 12-13) Shri Sanideva replied, “O Lord Nrsimhadeva, O reservoir of compassion, please be kind to me. O Lord of all gods, let my week-day (Saturday) be Your favorite day. O Purifier of all the worlds, may You fulfill the desires of all those who listen to or read this great prayer to You composed by me.\"",
        "English meaning not yet written for this verse.",
        "English meaning not yet written for this verse.",
        "Then, Lord Nrsimhadeva said, “O Sani! Let it be so! By virtue of My being the universal protector, I fulfill the desires of all My devotees. Please listen to My words! Let there be no fear of the twelfth and eighth birth positions (and implicitly any unfavorable birth positions) and consequent troubles from you for anyone who reads or listens to this prayer to Me composed by you.",
        "Then Sanideva replied to Lord Narahari that he would follow the Lord's instructions. Then the joyful saints and sages present there (in Brahma's assembly) responded with cries of “jaya! jaya!”",
        "Sri Krsna told Dharma-raja (Yamaraja), \"Whoever listens to or recites this conversation between Sanideva and Lord Nrsimhadeva in the form of this prayer of devotion will definitely have all desires fulfilled and will always rejoice.\""
      ]
    }
    ,"249": {
      title: "Gadadharastakam",
      transliterations: [
        "(1) स्वभक्तियोगलसिनम सद व्रजे विहरिनम\nहरिप्रियगनग्रगम चचिसुतप्रियेच्वरम\nसरधक्र्स्नसेवनप्रकचकम महचयम\nभजम्य अहम गदधरम सुपन्दितम गुरुम प्रभुम\n(2) नवोज्ज्वलदि भवनविधनकर्मपरगम\nविचित्रगौरभक्तिसिन्धुरग्गभग्गलसिनम\nसुरगमर्गदर्सकम व्रजदिवसदयकम\nभजम्य अहम गदधरम सुपन्दितम गुरुम प्रभुम",
        "सचिसुतग्घ्रिसरभक्तव्र्न्दवन्द्यगौरवम\nगौरभवचित्तपद्ममध्यक्र्स्नवल्लभम\nमुकुन्दगौररुपिनम स्वभवधर्मदयकम\nभजम्य अहम गदधरम सुपन्दितम गुरुम प्रभुम",
        "निकुन्जसेवनदिकप्रकसनैककरनम\nसद सखिरतिप्रदम महरसस्वरुपकम\nसदच्रितग्घ्रिपन्कजम सरिरिसद्गुरुम वरम\nभजम्य अहम गदधरम सुपन्दितम गुरुम प्रभुम",
        "महप्रभोर महरसप्रकसनग्कुरम प्रियम\nसद महरसग्कुरप्रकचनदिवसनम\nमहप्रभोर व्रजग्गनदिभवमोदकरकम\nभजम्य अहम गदधरम सुपन्दितम गुरुम प्रभुम",
        "द्विजेन्द्रव्र्न्दवन्द्यपदयुग्मभक्तिवर्धकम\nनिजेसु रधिकत्मतवपुह्प्रकचनग्रहम\nअसेसभक्तिसस्त्रसिक्सयोज्ज्वलम्र्तप्रबम\nभजम्य अहम गदधरम सुपन्दितम गुरुम प्रभुम",
        "मुद निजप्रियदिकस्वपदपद्मसिन्धुभिर\nमहरसर्नवम्र्तप्रदेस्तगौरभक्तिदम\nसदस्त्सत्त्विकन्वितम निजेस्तभक्तिदयकम\nभजम्य अहम गदधरम सुपन्दितम गुरुम प्रभुम",
        "यदियरितिरगरग्गभग्गदिग्धमनसो\nनरो `अपि यति तुर्नम एव नर्यभवभजनम\nतम उज्ज्वलक्तचित्तम एतु चित्तमत्तचत्पदो\nभजम्य अहम गदधरम सुपन्दितम गुरम प्रभुम",
        "महरसम्र्तप्रदम सद गदधरअस्तकम\nपथेत तु यह सुभक्तितो व्रजग्गनगनोत्सवम\nसचितनुजपदपद्मभक्तिरत्नयोग्यतम\nलभेत रधिकगदधरग्घ्रिपद्मसेवय"
      ],
      translations: [
        "I worship the greatly learned and exalted spiritual master, Srila Gadadhara Prabhu, who appears very splendid, engaged in the Lord's devotional service. He always performs pastimes in Vraja, where he is very prominent among the gopis, who are very dear to Lord Hari. Lord Caitanya, the Son of Saci is the dear Lord of Gadadhara Prabhu, who is preaching the service of Radha and Krsna.",
        "I worship the greatly learned spiritual master, Srila Gadadhara Prabhu. The best of those who are devoted to the lotus feet of Lord Caitanya, the Son of Saci-devi, offer respectful obeisances to him and treat him with great importance, and he is very dear to Lord Krsna, Who is seated in the middle of the lotus flower which is his heart, assuming His golden form of Caitanya Mahaprabhu. He preaches that Lord Mukunda has assumed the golden form of Lord Caitanya, and he returns the living entities to their constitutional position as servants of the Lord.",
        "I worship the greatly learned and exalted spiritual master, Srila Gadadhara Prabhu. It is only because of him that the truth of the exalted devotional service performed by the intimate associates of Krsna in the forests and groves of Vrndavana has been revealed. He is preaching the ecstatic love attained by the gopis, and he is indeed a personification of the mellows of devotional service. The saintly devotees take shelter of his lotus feet, and he teaches the truth of spiritual life to the living entities.",
        "I worship the greatly learned spiritual master, Srila Gadadhara Prabhu. He is very dear to Lord Caitanya Mahaprabhu, and it is as if he had sprouted from the manifestation of the Lord’s ecstatic love. He is always adorned with the garments of ecstatic love of Godhead, and He delights Lord Caitanya Mahaprabhu by arousing in the Lord the ecstatic emotional love experienced by the gopis of Vraja.",
        "I worship the greatly learned spiritual master, Srila Gadadhara Prabhu, who expands the mellows of devotional service and whose lotus feet are worshipped by the kings of the brahmanas. Among his confidential associates, he reveals his actual form as Srimati Radharani. He distributes the nectar of the ecstatic mellow of the gopis conjugal love, strictly following the instructions of all the devotional scriptures.",
        "I worship the greatly learned spiritual master, Srila Gadadhara Prabhu. With delight he is giving the devotional service of Lord Caitanya which reveals the nectarean ocean of the most exalted mellows of devotional service, along with the nectar flowing from the lotus feet of the gopis, headed by Srimati Radharani, who is most dear to Krsna. Gadadhara Prabhu is decorated with the eight transcendental ecstatic symptoms of sattvika-bhava, and he is distributing devotional service to his worshipable Lord Krsna.",
        "I worship the greatly learned spiritual master, Srila Gadadhara Prabhu. Even a conditioned soul, whose mind becomes anointed by the colorful waves of spontaneous devotional service as delineated by Srila Gadadhara Prabhu, quickly attains the highest level of devotional service. He becomes like a maddened bumble bee whose mind is anointed with the mellow of ujjvala-rasa (conjugal love).",
        "These eight verses glorifying Srila Gadadhara Prabhu distribute the nectar of the most exalted mellow of devotional service, and they are like a festival for the gopis of Vraja. If one regularly reads these verses and serves the lotus feet of Srila Gadadhara Prabhu, who is an incarnation of Srimati Radharani, then he will become qualified to attain the jewel of pure devotional service for the lotus feet of Lord Caitanya, the son of Sacidevi."
      ]
    }
  };

  const ORIGINAL_CUSTOM_HINDI_SONGS = JSON.parse(JSON.stringify(CUSTOM_HINDI_SONGS));

  function normalizeKey(str) {
    if (!str) return '';
    return String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function initDataset() {
    for (const key of Object.keys(HINDI_SONGS_BY_KEY)) {
      delete HINDI_SONGS_BY_KEY[key];
    }
    for (const [k, meta] of Object.entries(CUSTOM_HINDI_SONGS)) {
      HINDI_SONGS_BY_KEY[k] = meta;
      HINDI_SONGS_BY_KEY['vs-' + k] = meta;
      if (meta.title) {
        HINDI_SONGS_BY_KEY[meta.title] = meta;
        HINDI_SONGS_BY_KEY[normalizeKey(meta.title)] = meta;
      }
    }
  }

  function resetCustom(songNumber) {
    if (songNumber) {
      const sKey = String(songNumber).replace(/^vs-/, '');
      if (ORIGINAL_CUSTOM_HINDI_SONGS[sKey]) {
        CUSTOM_HINDI_SONGS[sKey] = JSON.parse(JSON.stringify(ORIGINAL_CUSTOM_HINDI_SONGS[sKey]));
      } else {
        delete CUSTOM_HINDI_SONGS[sKey];
      }
      delete CUSTOM_HINDI_SONGS['vs-' + sKey];
    } else {
      for (const k of Object.keys(CUSTOM_HINDI_SONGS)) {
        delete CUSTOM_HINDI_SONGS[k];
      }
      Object.assign(CUSTOM_HINDI_SONGS, JSON.parse(JSON.stringify(ORIGINAL_CUSTOM_HINDI_SONGS)));
    }
    initDataset();
  }

  function getHindiMetadata(songOrId) {
    if (!songOrId) return null;
    if (Object.keys(HINDI_SONGS_BY_KEY).length === 0) initDataset();

    if (typeof songOrId === 'object') {
      const s = songOrId;
      const sNum = String(s.songNumber || '');
      const sId = String(s.id || '').replace(/^vs-/, '');

      // 1. If song is directly marked as user edited, return its own data immediately
      if (s.isUserEdited) {
        return {
          title: s.title || '',
          transliterations: Array.isArray(s.hindiDevanagariStanzas) ? s.hindiDevanagariStanzas : [],
          translations: Array.isArray(s.hindiTranslations) ? s.hindiTranslations : [],
          isUserEdited: true
        };
      }

      // 2. If overridden in CUSTOM_HINDI_SONGS
      if (CUSTOM_HINDI_SONGS[sNum]) return CUSTOM_HINDI_SONGS[sNum];
      if (CUSTOM_HINDI_SONGS[sId]) return CUSTOM_HINDI_SONGS[sId];
      if (CUSTOM_HINDI_SONGS[s.id]) return CUSTOM_HINDI_SONGS[s.id];

      // 3. Built-in dataset lookups
      if (s.songNumber && HINDI_SONGS_BY_KEY[String(s.songNumber)]) return HINDI_SONGS_BY_KEY[String(s.songNumber)];
      if (s.id && HINDI_SONGS_BY_KEY[s.id]) return HINDI_SONGS_BY_KEY[s.id];
      if (s.title && HINDI_SONGS_BY_KEY[s.title]) return HINDI_SONGS_BY_KEY[s.title];
      if (s.title && HINDI_SONGS_BY_KEY[normalizeKey(s.title)]) return HINDI_SONGS_BY_KEY[normalizeKey(s.title)];
    }

    const strKey = String(songOrId).replace(/^vs-/, '').trim();
    if (CUSTOM_HINDI_SONGS[strKey]) return CUSTOM_HINDI_SONGS[strKey];
    if (CUSTOM_HINDI_SONGS['vs-' + strKey]) return CUSTOM_HINDI_SONGS['vs-' + strKey];

    if (HINDI_SONGS_BY_KEY[strKey]) return HINDI_SONGS_BY_KEY[strKey];
    if (HINDI_SONGS_BY_KEY['vs-' + strKey]) return HINDI_SONGS_BY_KEY['vs-' + strKey];
    if (HINDI_SONGS_BY_KEY[normalizeKey(strKey)]) return HINDI_SONGS_BY_KEY[normalizeKey(strKey)];

    return null;
  }

  function getHindiTranslation(songOrId, stanzaIndex) {
    if (typeof songOrId === 'object' && songOrId.isUserEdited) {
      if (Array.isArray(songOrId.hindiTranslations)) {
        return songOrId.hindiTranslations[stanzaIndex] || null;
      }
      if (typeof songOrId.hindiTranslation === 'string' && songOrId.hindiTranslation.trim()) {
        return stanzaIndex === 0 ? songOrId.hindiTranslation.trim() : null;
      }
      return null;
    }
    const meta = getHindiMetadata(songOrId);
    if (meta && Array.isArray(meta.translations) && meta.translations[stanzaIndex]) {
      return meta.translations[stanzaIndex];
    }
    return null;
  }

  function hasHindiTranslation(songOrId) {
    const meta = getHindiMetadata(songOrId);
    return Boolean(meta && Array.isArray(meta.translations) && meta.translations.length > 0);
  }

  try {
    initDataset();
  } catch (e) {
    console.warn('initDataset error:', e);
  }

  global.VsTranslationsHindi = {
    CUSTOM: CUSTOM_HINDI_SONGS,
    init: initDataset,
    resetCustom: resetCustom,
    getHindiTranslation: getHindiTranslation,
    getHindiMetadata: getHindiMetadata,
    hasHindiTranslation: hasHindiTranslation
  };
})(typeof window !== 'undefined' ? window : globalThis);
