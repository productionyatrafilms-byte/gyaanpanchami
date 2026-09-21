// Shared renderer for every topic sub-page (what.html, gyanpanchami.html,
// how.html, improve.html). Reads TOPIC_SLIDES (see data.js) for the topic
// named on the stage's data-topic attribute, builds the illustration +
// caption swiper-slide markup, then initializes both swipers exactly as
// what.js originally did as a single hardcoded page.
document.addEventListener("DOMContentLoaded", function () {
    var stage = document.querySelector(".stage[data-topic]");
    var topic = stage.dataset.topic;
    var data = TOPIC_SLIDES[topic];

    var illustrationWrapper = document.querySelector(".illustration-swiper .swiper-wrapper");
    var captionWrapper = document.querySelector(".caption-swiper .swiper-wrapper");

    data.slides.forEach(function (slide, i) {
        var imgSlide = document.createElement("div");
        imgSlide.className = "swiper-slide";
        imgSlide.innerHTML =
            '<img src="./assets/images/' + data.folder + "/" + slide.image + '" ' +
            'class="slide-illustration" alt="' + data.pageTitle + " illustration " + (i + 1) + '">';
        illustrationWrapper.appendChild(imgSlide);

        var captionSlide = document.createElement("div");
        captionSlide.className = "swiper-slide";
        captionSlide.innerHTML =
            '<p class="caption-text">' +
            '<span class="english">' + slide.captions.english + "</span>" +
            '<span class="hindi">' + slide.captions.hindi + "</span>" +
            '<span class="gujrati">' + slide.captions.gujrati + "</span>" +
            "</p>";
        captionWrapper.appendChild(captionSlide);
    });

    // custom.js already ran its show/hide pass on page load, before these
    // spans existed — re-apply it now so the dynamically-inserted captions
    // respect the current language too.
    if (typeof val === "function") {
        val(sessionStorage.getItem("lang") || "English");
    }

    var captionSwiper = new Swiper(".caption-swiper", {
        direction: "vertical",
        speed: 500,
        loop: false,
        allowTouchMove: false,
    });

    var illustrationSwiper = new Swiper(".illustration-swiper", {
        direction: "vertical",
        speed: 500,
        loop: false,
        pagination: {
            el: ".what-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".slide-nav-next",
            prevEl: ".slide-nav-prev",
        },
    });

    illustrationSwiper.controller.control = captionSwiper;
    captionSwiper.controller.control = illustrationSwiper;

    // Scale the pagination dots down as slide count grows, so 15 dots
    // (improve.html) don't overflow the same gap that fits 5 (what.html) —
    // targets a roughly constant total footprint (~9vw of dots) regardless
    // of count. See the CSS custom properties this feeds in what.css.
    var pagination = document.querySelector(".what-pagination");
    var count = data.slides.length;
    var bulletSize = Math.max(0.5, Math.min(1.51, 9 / count));
    var gap = Math.max(0.15, bulletSize * 0.3);
    pagination.style.setProperty("--pagination-bullet-size", bulletSize + "vw");
    pagination.style.setProperty("--pagination-gap", gap + "vw");

    // Once the entrance fade-in finishes, release its held "forwards" state
    // so the swiper-button-disabled opacity (loop is off, so the arrows
    // disable at either end) can take over normally.
    document.querySelectorAll(".slide-nav-btn").forEach(function (btn) {
        btn.addEventListener(
            "animationend",
            function () {
                btn.style.animation = "none";
            },
            { once: true }
        );
    });
});
