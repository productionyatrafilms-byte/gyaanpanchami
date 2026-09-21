// Single source of truth for every topic sub-page's slides (what.html,
// gyanpanchami.html, how.html, improve.html). Each topic's `folder` is the
// assets/images/<folder>/ directory holding its illustrations (named
// 1.png, 2.png, ... in slide order). `slides` holds one entry per
// illustration — caption text is placeholder until real copy is supplied,
// except "what" (topic 1) which already has real captions from Figma.
var TOPIC_SLIDES = {
    what: {
        folder: "1",
        pageTitle: "What is Gyan Panchami ?",
        slides: [
            { image: "1.png", captions: { english: "Gyan Panchami is the festival of knowledge.", hindi: "Gyan Panchami is the festival of knowledge.", gujrati: "Gyan Panchami is the festival of knowledge." } },
            { image: "2.png", captions: { english: "This festival is celebrated on Kartik Sud 5 (the fifth day after Diwali).", hindi: "This festival is celebrated on Kartik Sud 5 (the fifth day after Diwali).", gujrati: "This festival is celebrated on Kartik Sud 5 (the fifth day after Diwali)." } },
            { image: "3.png", captions: { english: "On this day, we should perform Gyan Pujan of the Agam scriptures.", hindi: "On this day, we should perform Gyan Pujan of the Agam scriptures.", gujrati: "On this day, we should perform Gyan Pujan of the Agam scriptures." } },
            { image: "4.png", captions: { english: "We must perform Pujan of Saraswati Devi (Goddess of Shrut).", hindi: "We must perform Pujan of Saraswati Devi (Goddess of Shrut).", gujrati: "We must perform Pujan of Saraswati Devi (Goddess of Shrut)." } },
            { image: "5.png", captions: { english: "We must perform the Gyan Panchami Vidhi.", hindi: "We must perform the Gyan Panchami Vidhi.", gujrati: "We must perform the Gyan Panchami Vidhi." } }
        ]
    },

    gyanpanchami: {
        folder: "2",
        pageTitle: "Gyan Panchami Vidhi:",
        slides: [
            { image: "1.png", captions: { english: "Placeholder text for Gyan Panchami Vidhi — slide 1.", hindi: "Placeholder text for Gyan Panchami Vidhi — slide 1.", gujrati: "Placeholder text for Gyan Panchami Vidhi — slide 1." } },
            { image: "2.png", captions: { english: "Placeholder text for Gyan Panchami Vidhi — slide 2.", hindi: "Placeholder text for Gyan Panchami Vidhi — slide 2.", gujrati: "Placeholder text for Gyan Panchami Vidhi — slide 2." } },
            { image: "3.png", captions: { english: "Placeholder text for Gyan Panchami Vidhi — slide 3.", hindi: "Placeholder text for Gyan Panchami Vidhi — slide 3.", gujrati: "Placeholder text for Gyan Panchami Vidhi — slide 3." } },
            { image: "4.png", captions: { english: "Placeholder text for Gyan Panchami Vidhi — slide 4.", hindi: "Placeholder text for Gyan Panchami Vidhi — slide 4.", gujrati: "Placeholder text for Gyan Panchami Vidhi — slide 4." } },
            { image: "5.png", captions: { english: "Placeholder text for Gyan Panchami Vidhi — slide 5.", hindi: "Placeholder text for Gyan Panchami Vidhi — slide 5.", gujrati: "Placeholder text for Gyan Panchami Vidhi — slide 5." } },
            { image: "6.png", captions: { english: "Placeholder text for Gyan Panchami Vidhi — slide 6.", hindi: "Placeholder text for Gyan Panchami Vidhi — slide 6.", gujrati: "Placeholder text for Gyan Panchami Vidhi — slide 6." } },
            { image: "7.png", captions: { english: "Placeholder text for Gyan Panchami Vidhi — slide 7.", hindi: "Placeholder text for Gyan Panchami Vidhi — slide 7.", gujrati: "Placeholder text for Gyan Panchami Vidhi — slide 7." } },
            { image: "8.png", captions: { english: "Placeholder text for Gyan Panchami Vidhi — slide 8.", hindi: "Placeholder text for Gyan Panchami Vidhi — slide 8.", gujrati: "Placeholder text for Gyan Panchami Vidhi — slide 8." } }
        ]
    },

    how: {
        folder: "3",
        pageTitle: "How to do Guru Pujan ?",
        slides: [
            { image: "1.png", captions: { english: "Placeholder text for Guru Pujan — slide 1.", hindi: "Placeholder text for Guru Pujan — slide 1.", gujrati: "Placeholder text for Guru Pujan — slide 1." } },
            { image: "2.png", captions: { english: "Placeholder text for Guru Pujan — slide 2.", hindi: "Placeholder text for Guru Pujan — slide 2.", gujrati: "Placeholder text for Guru Pujan — slide 2." } },
            { image: "3.png", captions: { english: "Placeholder text for Guru Pujan — slide 3.", hindi: "Placeholder text for Guru Pujan — slide 3.", gujrati: "Placeholder text for Guru Pujan — slide 3." } },
            { image: "4.png", captions: { english: "Placeholder text for Guru Pujan — slide 4.", hindi: "Placeholder text for Guru Pujan — slide 4.", gujrati: "Placeholder text for Guru Pujan — slide 4." } },
            { image: "5.png", captions: { english: "Placeholder text for Guru Pujan — slide 5.", hindi: "Placeholder text for Guru Pujan — slide 5.", gujrati: "Placeholder text for Guru Pujan — slide 5." } }
        ]
    },

    improve: {
        folder: "4",
        pageTitle: "How to improve memory",
        slides: [
            { image: "1.png", captions: { english: "Placeholder text for improving memory — slide 1.", hindi: "Placeholder text for improving memory — slide 1.", gujrati: "Placeholder text for improving memory — slide 1." } },
            { image: "2.png", captions: { english: "Placeholder text for improving memory — slide 2.", hindi: "Placeholder text for improving memory — slide 2.", gujrati: "Placeholder text for improving memory — slide 2." } },
            { image: "3.png", captions: { english: "Placeholder text for improving memory — slide 3.", hindi: "Placeholder text for improving memory — slide 3.", gujrati: "Placeholder text for improving memory — slide 3." } },
            { image: "4.png", captions: { english: "Placeholder text for improving memory — slide 4.", hindi: "Placeholder text for improving memory — slide 4.", gujrati: "Placeholder text for improving memory — slide 4." } },
            { image: "5.png", captions: { english: "Placeholder text for improving memory — slide 5.", hindi: "Placeholder text for improving memory — slide 5.", gujrati: "Placeholder text for improving memory — slide 5." } },
            { image: "6.png", captions: { english: "Placeholder text for improving memory — slide 6.", hindi: "Placeholder text for improving memory — slide 6.", gujrati: "Placeholder text for improving memory — slide 6." } },
            { image: "7.png", captions: { english: "Placeholder text for improving memory — slide 7.", hindi: "Placeholder text for improving memory — slide 7.", gujrati: "Placeholder text for improving memory — slide 7." } },
            { image: "8.png", captions: { english: "Placeholder text for improving memory — slide 8.", hindi: "Placeholder text for improving memory — slide 8.", gujrati: "Placeholder text for improving memory — slide 8." } },
            { image: "9.png", captions: { english: "Placeholder text for improving memory — slide 9.", hindi: "Placeholder text for improving memory — slide 9.", gujrati: "Placeholder text for improving memory — slide 9." } },
            { image: "10.png", captions: { english: "Placeholder text for improving memory — slide 10.", hindi: "Placeholder text for improving memory — slide 10.", gujrati: "Placeholder text for improving memory — slide 10." } },
            { image: "11.png", captions: { english: "Placeholder text for improving memory — slide 11.", hindi: "Placeholder text for improving memory — slide 11.", gujrati: "Placeholder text for improving memory — slide 11." } },
            { image: "12.png", captions: { english: "Placeholder text for improving memory — slide 12.", hindi: "Placeholder text for improving memory — slide 12.", gujrati: "Placeholder text for improving memory — slide 12." } },
            { image: "13.png", captions: { english: "Placeholder text for improving memory — slide 13.", hindi: "Placeholder text for improving memory — slide 13.", gujrati: "Placeholder text for improving memory — slide 13." } },
            { image: "14.png", captions: { english: "Placeholder text for improving memory — slide 14.", hindi: "Placeholder text for improving memory — slide 14.", gujrati: "Placeholder text for improving memory — slide 14." } },
            { image: "15.png", captions: { english: "Placeholder text for improving memory — slide 15.", hindi: "Placeholder text for improving memory — slide 15.", gujrati: "Placeholder text for improving memory — slide 15." } }
        ]
    }
};
