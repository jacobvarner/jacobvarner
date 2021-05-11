document.querySelectorAll("div.book-sideways").forEach((el) => {
    el.addEventListener("click", toggleBookCover);
});

function toggleBookCover(e) {
    var targetCover = e.target.nextElementSibling;

    // close all book covers and re-show their spine
    document.querySelectorAll("img.book-cover").forEach((el) => {
        el.style.width = 0;
        el.previousElementSibling.style.display = "flex";
    });

    // hide the clicked spine
    e.target.style.display = "none";

    //open the cover for clicked book
    targetCover.style.width = "auto";
}