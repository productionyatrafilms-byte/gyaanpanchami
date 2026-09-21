document.addEventListener("DOMContentLoaded", function () {
    var stage = document.getElementById("homeStage");
    var btnReveal = document.getElementById("btnReveal");
    var btnBack = document.getElementById("btnBack");
    // One continuous 1.8s "zoom-through": main-card and .reveal-group run
    // as a single synchronized timeline (see the two keyframe animations in
    // index.css), so there's no held pause on a fullscreen frame — the next
    // screen is already growing from the center while main-card is still
    // expanding outward.
    var ZOOM_MS = 1800;

    btnReveal.addEventListener("click", function () {
        stage.classList.add("is-animating");

        // Once the shared timeline finishes, lock in the resting state:
        // main-card hides and page-bg appears in the same frame (both are
        // plain, non-transitioning swaps — see the CSS comments), and
        // .reveal-group's children become interactive.
        setTimeout(function () {
            stage.classList.remove("is-animating");
            stage.classList.add("is-revealed");
            document.body.classList.add("is-revealed");
        }, ZOOM_MS);
    });

    btnBack.addEventListener("click", function () {
        stage.classList.remove("is-animating");
        stage.classList.remove("is-revealed");
        document.body.classList.remove("is-revealed");
    });
});
