// Open Gift Box
function openGift() {
    document.querySelector(".gift-box").style.display = "none";
    document.getElementById("surprise-content").classList.remove("hidden");
    startSlideshow();
}

// Slideshow Function with Animations
let slideIndex = 0;
function startSlideshow() {
    const slides = document.querySelectorAll(".slide");

    function showSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            if (index === slideIndex) slide.classList.add("active");
        });
        slideIndex = (slideIndex + 1) % slides.length;
    }

    showSlide();
    setInterval(showSlide, 3000);
}
