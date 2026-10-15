// Shared renderer for every topic sub-page (what.html, gyanpanchami.html,
// how.html, improve.html). Reads TOPIC_SLIDES (see data.js) for the topic
// named on the stage's data-topic attribute, builds the illustration +
// caption swiper-slide markup, then initializes both swipers exactly as
// what.js originally did as a single hardcoded page.
document.addEventListener("DOMContentLoaded", function () {
    var stage = document.querySelector(".stage[data-topic]");
    var topic = stage.dataset.topic;
    var data = TOPIC_SLIDES[topic];

    // The .title element's spans are static placeholders in each HTML file
    // (English text duplicated into all 3) — overwrite them with the real
    // per-language text from data.pageTitle so switching language actually
    // changes the heading.
    var titleEl = document.querySelector(".title");
    if (titleEl) {
        var titleEnglish = titleEl.querySelector(".english");
        var titleHindi = titleEl.querySelector(".hindi");
        var titleGujrati = titleEl.querySelector(".gujrati");
        if (titleEnglish) titleEnglish.textContent = data.pageTitle.english;
        if (titleHindi) titleHindi.textContent = data.pageTitle.hindi;
        if (titleGujrati) titleGujrati.textContent = data.pageTitle.gujrati;
    }

    var illustrationWrapper = document.querySelector(".illustration-swiper .swiper-wrapper");
    var captionWrapper = document.querySelector(".caption-swiper .swiper-wrapper");

    data.slides.forEach(function (slide, i) {
        var imgSlide = document.createElement("div");
        imgSlide.className = "swiper-slide";
        // Only the first slide's video preloads; the rest stay at preload "none" until their
        // slide becomes active (see syncSlideVideos below). No autoplay for the same reason.
        imgSlide.innerHTML =
            '<video src="./assets/videos/' + data.folder + "/" + slide.video + '" ' +
            'class="slide-illustration" preload="' + (i === 0 ? "auto" : "none") + '" ' +
            'muted loop playsinline aria-label="' + data.pageTitle.english + " video " + (i + 1) + '"></video>';
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

    // The active slide's video preloads fully and plays; every other slide's video is paused
    // and set to preload "none" so it does not download until its slide is reached.
    function syncSlideVideos() {
        illustrationWrapper.querySelectorAll("video").forEach(function (video, index) {
            if (index === illustrationSwiper.activeIndex) {
                video.preload = "auto";
                var playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(function () {});
                }
            } else {
                video.preload = "none";
                video.pause();
                video.currentTime = 0;
            }
        });
    }
    illustrationSwiper.on("slideChange", syncSlideVideos);
    syncSlideVideos();

    // browsers refuse to start video in a hidden tab, so pick the active one back up when shown
    document.addEventListener("visibilitychange", function () {
        if (!document.hidden) {
            syncSlideVideos();
        }
    });

    illustrationSwiper.controller.control = captionSwiper;
    captionSwiper.controller.control = illustrationSwiper;

    // Topics can flag an `endOverlay` (see gyanpanchami.html's TOPIC_SLIDES
    // entry) — a popup shown over the stage, not a swiper slide, triggered
    // by clicking "next" on the last slide instead of advancing further.
    // Closed again by its own back button.
    if (data.endOverlay) {
        var overlayEl = document.createElement("div");
        overlayEl.className = "topic-end-overlay";
        overlayEl.innerHTML =
            '<div class="topic-end-overlay-card">' +
            '<p class="caption-text">' +
            '<span class="english">' + data.endOverlay.captions.english + "</span>" +
            '<span class="hindi">' + data.endOverlay.captions.hindi + "</span>" +
            '<span class="gujrati">' + data.endOverlay.captions.gujrati + "</span>" +
            "</p>" +
            "</div>";
        stage.appendChild(overlayEl);

        // Close (X) button, hanging off the card's top-right corner. Same action as the
        // top-left back button (closeEndOverlay below).
        var overlayCloseBtn = document.createElement("button");
        overlayCloseBtn.type = "button";
        overlayCloseBtn.className = "topic-end-overlay-close";
        overlayCloseBtn.setAttribute("aria-label", "Close");
        overlayCloseBtn.innerHTML =
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>';
        overlayEl.appendChild(overlayCloseBtn);

        // Reuses the page's own back button slot (same spot as .home-btn,
        // top-left) instead of a button on the card itself — .home-btn
        // hides while this is open, this shows in its place.
        var homeBtnEl = document.querySelector(".home-btn");
        var overlayBackBtn = document.createElement("button");
        overlayBackBtn.type = "button";
        overlayBackBtn.className = "topic-end-overlay-back";
        overlayBackBtn.setAttribute("aria-label", "Back");
        overlayBackBtn.innerHTML = '<img src="./assets/images/back.png" alt="Back">';
        document.body.appendChild(overlayBackBtn);

        if (typeof val === "function") {
            val(sessionStorage.getItem("lang") || "English");
        }

        function openEndOverlay() {
            overlayEl.classList.add("is-visible");
            stage.classList.add("is-overlay-open");
            overlayBackBtn.classList.add("is-visible");
            if (homeBtnEl) homeBtnEl.classList.add("is-hidden-by-overlay");
        }
        function closeEndOverlay() {
            // Same click sound as the page's own home/back buttons (custom.js
            // defines playSound/popAudio globally and loads before this).
            if (typeof playSound === "function" && typeof popAudio !== "undefined") {
                playSound(popAudio);
            }
            overlayEl.classList.remove("is-visible");
            stage.classList.remove("is-overlay-open");
            overlayBackBtn.classList.remove("is-visible");
            if (homeBtnEl) homeBtnEl.classList.remove("is-hidden-by-overlay");
        }

        // Swiper dims "next" at the last slide (nothing more to swipe to),
        // but here there IS something more — the overlay — so that dimmed/
        // disabled look would hide the fact that clicking it still does
        // something. Keep it looking live instead.
        var nextBtn = document.querySelector(".slide-nav-next");
        nextBtn.classList.add("has-end-overlay");

        // Swiper's own click handler (bound when the Swiper was constructed,
        // so it runs before this one) already advances the slide by the time
        // this "click" listener fires — checking activeIndex here would also
        // be true for the click that just ARRIVED at the last slide, popping
        // the overlay a click too early. Capturing isEnd on pointerdown,
        // before that handler runs, tells us whether this click found us
        // already sitting on the last slide (overlay) vs. just landing on it
        // (no overlay yet).
        var wasAtEndBeforeClick = false;
        nextBtn.addEventListener("pointerdown", function () {
            wasAtEndBeforeClick = illustrationSwiper.isEnd;
        });
        nextBtn.addEventListener("click", function () {
            if (wasAtEndBeforeClick) {
                openEndOverlay();
            }
        });
        overlayBackBtn.addEventListener("click", closeEndOverlay);
        overlayCloseBtn.addEventListener("click", closeEndOverlay);
    }

    // Topics can flag an `endLink` (see improve.html's TOPIC_SLIDES entry) —
    // an arrow link, bottom-right of the stage, that only appears on the
    // last slide and jumps to another page (e.g. pranam.html).
    if (data.endLink) {
        var endLinkEl = document.createElement("a");
        endLinkEl.className = "pranam-end-link";
        endLinkEl.href = data.endLink.href;
        endLinkEl.innerHTML =
            '<img src="./assets/images/arowAsset.png" alt="">' +
            '<span class="pranam-end-link-label">' +
            '<span class="english">' + data.endLink.label.english + "</span>" +
            '<span class="hindi">' + data.endLink.label.hindi + "</span>" +
            '<span class="gujrati">' + data.endLink.label.gujrati + "</span>" +
            "</span>";
        stage.appendChild(endLinkEl);
        if (typeof val === "function") {
            val(sessionStorage.getItem("lang") || "English");
        }

        var syncEndLink = function () {
            var isLast = illustrationSwiper.activeIndex === data.slides.length - 1;
            endLinkEl.classList.toggle("is-visible", isLast);
        };
        illustrationSwiper.on("slideChange", syncEndLink);
        syncEndLink();
    }


    // Once the entrance fade-in finishes, release its held "forwards" state
    // so the swiper-button-disabled opacity (loop is off, so the arrows
    // disable at either end) can take over normally.
    document.querySelectorAll(".slide-nav-btn").forEach(function (btn) {
        btn.addEventListener(
            "animationend",
            function () {
                btn.classList.add("entrance-done");
            },
            { once: true }
        );
    });
});
