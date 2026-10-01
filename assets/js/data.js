// Single source of truth for every topic sub-page's slides (what.html,
// gyanpanchami.html, how.html, improve.html). Each topic's `folder` is the
// assets/images/<folder>/ directory holding its illustrations (named
// 1.png, 2.png, ... in slide order). `slides` holds one entry per
// illustration — caption text is placeholder until real copy is supplied,
// except "what" (topic 1) which already has real captions from Figma.
var TOPIC_SLIDES = {
    what: {
        folder: "1",
        pageTitle: { english: "What is Gyan Panchami ?", hindi: "ज्ञान पंचमी क्या है ?", gujrati: "જ્ઞાન પાંચમ શું છે ?" },
        slides: [
    {
        image: "1.png",
        captions: {
            english: "Gyan Panchami is the festival of knowledge.",
            hindi: "ज्ञान पंचमी ज्ञान का पर्व है।",
            gujrati: "જ્ઞાન પાંચમ એ જ્ઞાનનો પર્વ છે."
        }
    },
    {
        image: "2.png",
        captions: {
            english: "This festival is celebrated on Kartik Sud 5 (the fifth day after Diwali).",
            hindi: "यह पर्व कार्तिक सुद 5 (दिवाली के बाद पाँचवें दिन ) को मनाया जाता है।",
            gujrati: "આ પર્વ કારતક સુદ પાંચમના દિવસે ઉજવવામાં આવે છે."
        }
    },
    {
        image: "3.png",
        captions: {
            english: "On this day, we should perform Gyan Pujan of the Agam scriptures.",
            hindi: "इस दिन हमें आगम ग्रंथों का ज्ञान पूजन करना चाहिए।",
            gujrati: "આ દિવસે આપણે આગમ ગ્રંથોનું જ્ઞાન પૂજન કરવું જોઈએ."
        }
    },
    {
        image: "4.png",
        captions: {
            english: "We must perform Pujan of Saraswati Devi (Goddess of Shrut).",
            hindi: "हमें सरस्वती देवी का पूजन करना चाहिए (श्रुत की देवी )",
            gujrati: "આપણે સરસ્વતી દેવી (શ્રુતદેવી)ની પૂજા કરવી જોઈએ."
        }
    },
    {
        image: "5.png",
        captions: {
            english: "We must perform the Gyan Panchami Vidhi.",
            hindi: "हमें ज्ञान पंचमी की विधि करनी चाहिए।",
            gujrati: "આપણે જ્ઞાન પાંચમની વિધિ કરવી જોઈએ."
        }
    }
]
    },

    gyanpanchami: {
        folder: "2",
        pageTitle: { english: "Gyan Panchami Vidhi", hindi: "ज्ञान पंचमी विधि ", gujrati: "જ્ઞાન પંચમી વિધિ" },
        // Shown as a popup overlay (not a swiper slide) when "next" is
        // clicked on the last slide (Pratikaman) — see slides.js.
        endOverlay: {
            captions: {
                english: "The above vidhi must be performed on every Sud 5 for 5 years and 5 months.",
                hindi: "उपरोक्त विधि हर सुद पंचमी को 5 साल और 5 महीने तक करनी चाहिए।",
                gujrati: "ઉપરોક્ત વિધિ દર સુદ પાંચમના દિવસે 5 વર્ષ અને 5 મહિના સુધી કરવી જોઈએ."
            }
        },
        slides: [
    {
        image: "1.png",
        captions: {
            english: "Upvas on Gyan Panchami - Kartik sud 5",
            hindi: "ज्ञान पंचमी ( कार्तिक सूद 5) पर उपवास",
            gujrati: "જ્ઞાન પાંચમ પર ઉપવાસ - કારતક સુદ 5"
        }
    },
    {
        image: "2.png",
        captions: {
            english: "Gyan Pujan",
            hindi: "ज्ञान पूजन",
            gujrati: "જ્ઞાન પૂજન"
        }
    },
    {
        image: "3.png",
        captions: {
            english: "51 Logass Kaussagg",
            hindi: "51 लोगस्स का काउस्सग्ग",
            gujrati: "51 લોગસ્સનો કાઉસ્સગ્ગ"
        }
    },
    {
        image: "4.png",
        captions: {
            english: "51 Khamasaman",
            hindi: "51 खमासमण",
            gujrati: "51 ખમાસમણા"
        }
    },
    {
        image: "5.png",
        captions: {
            english: "51 Sathiya + Fal + Naivedhya",
            hindi: "51 साथिया + फल + नैवेद्य",
            gujrati: "51 સાથિયા + ફળ + નૈવેદ્ય"
        }
    },
    {
        image: "6.png",
        captions: {
            english: "20 Mala of “OM HRIM NAMO NANASSA”",
            hindi: "20 माला : “ॐ ह्रीँ नमो नाणस्स”",
            gujrati: "“ૐ હ્રીઁઁ નમો નાણસ્સ”ની 20 માળા"
        }
    },
    {
        image: "7.png",
        captions: {
            english: "Dev - Vandan",
            hindi: "देव - वंदन",
            gujrati: "દેવ - વંદન"
        }
    },
    {
        image: "8.png",
        captions: {
            english: "Pratikaman",
            hindi: "प्रतिक्रमण",
            gujrati: "પ્રતિક્રમણ"
        }
    }
]
    },

    how: {
        folder: "3",
        pageTitle: { english: "How to do Guru Pujan ?", hindi: "गुरु पूजन कैसे करें ?", gujrati: "ગુરુ પૂજન કેવી રીતે કરવું ?" },
      slides: [
    {
        image: "1.png",
        captions: {
            english: "We can perform Guru Pujan of Sadhu Bhagwant and take their blessings.",
            hindi: "हम साधु भगवंत का गुरु पूजन कर सकते हैं और उनका आशीर्वाद ले सकते हैं।",
            gujrati: "આપણે સાધુ ભગવંતનું ગુરુપૂજન કરી શકીએ અને તેમના આશીર્વાદ લઈ શકીએ છીએ."
        }
    },
    {
        image: "2.png",
        captions: {
            english: "We must keep money in the thali (dish) and perform Vasakshep Puja of their Right Toe.",
            hindi: "हमें थाली में धन रखना चाहिए और उनके दाहिने पैर के अंगूठे की वासक्षेप पूजा करनी चाहिए।",
            gujrati: "આપણે થાળીમાં ધન રાખવું જોઈએ અને તેમના જમણા પગના અંગૂઠાની વાસક્ષેપ પૂજા કરવી જોઈએ."
        }
    },
    {
        image: "3.png",
        captions: {
            english: "We must do Pujan of Guru and not of the Money.",
            hindi: "हमें गुरु का पूजन करना चाहिए, धन का नहीं।",
            gujrati: "આપણે પૈસાની નહીં, પણ ગુરુની પૂજા કરવી જોઈએ."
        }
    },
    {
        image: "4.png",
        captions: {
            english: "Guru Pujan removes our ignorance and increases our Knowledge.",
            hindi: "गुरु पूजन हमारे अज्ञान को दूर करता है और हमारे ज्ञान को बढ़ाता है।",
            gujrati: "ગુરુ પૂજન આપણું અજ્ઞાન દૂર કરે છે અને આપણા જ્ઞાનમાં વધારો કરે છે"
        }
    },
    {
        image: "5.png",
        captions: {
            english: "While performing Guru Pujan, a book is not required.",
            hindi: "गुरु पूजन के समय, किताब की आवश्यकता नहीं पड़ती।",
            gujrati: "ગુરુપૂજન કરતી વખતે પુસ્તકની જરૂર હોતી નથી."
        }
    }
]
    },

    improve: {
        folder: "4",
        pageTitle: { english: "How to improve memory", hindi: "स्मरणशक्ति बढ़ाने के उपाय", gujrati: "યાદશક્તિ વધારવાની રીતો" },
        endLink: { href: "./pranam.html", label: { english: "Pranam", hindi: "प्रणाम", gujrati: "પ્રણામ" } },
       slides: [
    {
        image: "1.png",
        captions: {
            english: "Give 5 Gyan Khamasaman everyday.",
            hindi: "प्रतिदिन ज्ञान के ५ खमासमण दें।",
            gujrati: "દરરોજ જ્ઞાનના 5 ખમાસમણા આપો."
        }
    },
    {
        image: "2.png",
        captions: {
            english: "Do Gyan Pujan everyday.",
            hindi: "प्रतिदिन ज्ञान पूजन करें।",
            gujrati: "દરરોજ જ્ઞાન પૂજન કરો."
        }
    },
    {
        image: "3.png",
        captions: {
            english: "Perform Pujan of Saraswati Mata.",
            hindi: "सरस्वती माता की पूजा करें,",
            gujrati: "સરસ્વતી માતાનું પૂજન કરો."
        }
    },
    {
        image: "4.png",
        captions: {
            english: "Perform Gyan Panchami Aaradhna regularly.",
            hindi: "ज्ञान पंचमी की नियमित आराधना करें।",
            gujrati: "જ્ઞાન પાંચમની નિયમિત આરાધના કરો"
        }
    },
    {
        image: "5.png",
        captions: {
            english: "Help someone in studies.",
            hindi: "पढ़ाई में दूसरों की मदद करें।",
            gujrati: "અભ્યાસમાં કોઈની મદદ કરો."
        }
    },
    {
        image: "6.png",
        captions: {
            english: "Learn a new Gatha everyday.",
            hindi: "प्रतिदिन नई गाथा सीखें।",
            gujrati: "રોજ નવી ગાથા શીખો."
        }
    },
    {
        image: "7.png",
        captions: {
            english: "Share your knowledge with others.",
            hindi: "अपने ज्ञान को दूसरों के साथ बाँटे।",
            gujrati: "તમારા જ્ઞાનને અન્ય લોકો સાથે શેર કરો."
        }
    },
    {
        image: "8.png",
        captions: {
            english: "Praise knowledgeable people.",
            hindi: "ज्ञानी की प्रशंसा करें।",
            gujrati: "જ્ઞાનીની પ્રશંસા કરો."
        }
    },
    {
        image: "9.png",
        captions: {
            english: "Show respect towards Sadhu - Sadhviji Bhagwant, Teachers, Pathshala Teachers, and Gyan Upkarans.",
            hindi: "साधु - साध्वीजी भगवंत, शिक्षक, पाठशाला के शिक्षक - शिक्षिका और ज्ञान के उपकरणों प्रति आदर व्यक्त करें।",
            gujrati: "સાધુ - સાધ્વીજી ભગવંત, શિક્ષક, પાઠશાળાના શિક્ષક-શિક્ષિકાઓ અને જ્ઞાનના સાધનો પ્રત્યે આદર વ્યક્ત કરો."
        }
    },
    {
        image: "10.png",
        captions: {
            english: "Contribute towards Pathshala or Gyan Khata.",
            hindi: "पाठशाला या ज्ञान खाता के लिए योगदान करें।",
            gujrati: "પાઠશાળા અથવા જ્ઞાન ખાતામાં યોગદાન આપો."
        }
    },
    {
        image: "11.png",
        captions: {
            english: "Keep books at a proper place.",
            hindi: "पुस्तकें उचित स्थान पर रखें।",
            gujrati: "પુસ્તકોને યોગ્ય જગ્યાએ રાખો."
        }
    },
    {
        image: "12.png",
        captions: {
            english: "Learn with proper concentration.",
            hindi: "एकाग्रता के साथ पढ़ाई करें।",
            gujrati: "એકાગ્રતા સાથે અભ્યાસ કરો."
        }
    },
    {
        image: "13.png",
        captions: {
            english: "Sit in proper posture while studying",
            hindi: "पढ़ते समय उचित मुद्रा में बैठें।",
            gujrati: "અભ્યાસ કરતી વખતે યોગ્ય મુદ્રામાં બેસો."
        }
    },
    {
        image: "14.png",
        captions: {
            english: "Study early in the morning instead of late at night",
            hindi: "देर रात में पढ़ने के बजाय सुबह जल्दी उठकर पढ़ें।",
            gujrati: "મોડી રાત્રે અભ્યાસ કરવાને બદલે વહેલી સવારે અભ્યાસ કરો."
        }
    },
    {
        image: "15.png",
        captions: {
            english: "Chant \"ૐ‌ ऐंँ नमः\" 108 times everyday",
            hindi: "\"ૐ ऐंँ नमः\" का प्रतिदिन 108 बार जाप करें।",
            gujrati: "દરરોજ 108 વાર \"ૐ ऐंँ નમઃ\" નો જાપ કરો"
        }
    },
    {
        image: "16.png",
        captions: {
            english: "Chant \"ૐ ह्रीँ नमो नाणस्स\" 108 times everyday",
            hindi: "\"ૐ ह्रीँ नमो नाणस्स\" का प्रतिदिन 108 बार जाप करें।",
            gujrati: "દરરોજ 108 વાર \"ૐ હ્રીઁઁ નમો નાણસ્સ\" નો જાપ કરો."
        }
    },
    {
        image: "17.png",
        captions: {
            english: "Meditate on “ऐंँ”",
            hindi: "“ऐंँ” का ध्यान करें",
            gujrati: "“ऐंँ” પર ધ્યાન કરો"
        }
    }
]
    }
};
