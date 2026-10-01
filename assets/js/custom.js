
// language change js
let currentLang = sessionStorage.getItem("lang");
if (!currentLang) {
    val("English");
} else {
    val(currentLang);
}

function val(selectedLang) {
    sessionStorage.setItem("lang", selectedLang);

    let English = document.getElementById("en");
    let Hindi = document.getElementById("hi");
    let Gujrati = document.getElementById("gu");

    if (selectedLang === "English") {

        document.getElementById("body");
        $(".english").show();
        $(".hindi, .gujrati").hide();

        English.checked = true;
        Hindi.checked = false;
        Gujrati.checked = false;
    }

    if (selectedLang === "Hindi") {
        document.getElementById("body");
        $(".hindi").show();
        $(".english, .gujrati").hide();
        English.checked = false;
        Hindi.checked = true;
        Gujrati.checked = false;
    }

    if (selectedLang === "Gujrati") {
        document.getElementById("body");
        $(".gujrati").show();
        $(".english, .hindi").hide();
        English.checked = false;
        Hindi.checked = false;
        Gujrati.checked = true;
    }
}

// ---------- Shared UI sounds ----------
// One Audio object per sound, reused (currentTime reset) on every play so
// rapid repeat clicks restart the sound instead of queuing overlapping
// playbacks.
function playSound(audio) {
    try {
        audio.currentTime = 0;
        var p = audio.play();
        if (p !== undefined) p.catch(function () {});
    } catch (e) {}
}

// Navigating on the same tick as the click kills the page (and the Audio
// object with it) before playback has actually started, so the sound never
// makes a sound at all — not even a "half". Waiting `delayMs` before
// navigating lets that much of the clip play; default is just enough for
// playback to audibly begin, without making the user wait for the whole clip.
function playSoundThenNavigate(audio, href, delayMs) {
    playSound(audio);
    setTimeout(function () {
        audio.pause();
        window.location.href = href;
    }, delayMs || 120);
}

// Language toggle — plays only on an actual click of the E/H/G radio, never
// on the programmatic val() calls custom.js/slides.js make to re-apply the
// stored language on page load.
var langAudio = {
    English: new Audio("./assets/audio/Eng.mpeg"),
    Hindi: new Audio("./assets/audio/Hin.mpeg"),
    Gujrati: new Audio("./assets/audio/Guj.mpeg"),
};
document.querySelectorAll('#language input[type="radio"]').forEach(function (input) {
    input.addEventListener("click", function () {
        var audio = langAudio[input.value];
        if (audio) playSound(audio);
    });
});

// Home / back buttons (index.html's back-btn, every topic page's home-btn,
// pranam.html's home-btn-1) — plays pop.mp3, lets it start, then navigates;
// doesn't wait for it to finish.
var popAudio = new Audio("./assets/audio/pop.mp3");
document.querySelectorAll(".home-btn, .back-btn, .home-btn-1").forEach(function (el) {
    el.addEventListener("click", function (e) {
        var href = el.getAttribute && el.getAttribute("href");
        if (href) {
            e.preventDefault();
            playSoundThenNavigate(popAudio, href);
        } else {
            playSound(popAudio);
        }
    });
});

// Slide prev/next arrows on the topic pages (what/gyanpanchami/how/improve).
var swiperAudio = new Audio("./assets/audio/swiper.mp3");
document.querySelectorAll(".slide-nav-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        playSound(swiperAudio);
    });
});

// Topic sub-nav dots (the vertical 1-4 track linking between topic pages) —
// and index.html's 4 topic cards, same sound for both "subpoint" navs. Only
// the first 1s of topic.mp3 should be heard, so it's cut off explicitly
// instead of just letting navigation truncate it.
var topicAudio = new Audio("./assets/audio/topic.mp3");
document.querySelectorAll(".topic-nav-item .topic-dot, .topic-card").forEach(function (link) {
    link.addEventListener("click", function (e) {
        var href = link.getAttribute("href");
        if (href) {
            e.preventDefault();
            playSoundThenNavigate(topicAudio, href, 1000);
        }
    });
});