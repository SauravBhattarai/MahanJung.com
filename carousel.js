//
// Navigation Bar
//
function navSlide () {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");
    var body = document.querySelector("body");

    burger.addEventListener("click", function () {
        // Toggle nav
        nav.classList.toggle("nav-active");
        // Slide the body while nav toggle
        body.classList.toggle("body-slide-active");

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                if (link.style.animation == `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.2}s`) {
                    link.style.animation = `navLinkFadeOut 0.5s ease backwards ${index / 7 + 0.2}s`;
                } else {
                    link.style.animation = "";
                }
            }
            else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle("toggle");
    });
};

navSlide();

//
// Carousel Slider
//

var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide img");

// Button
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listener

nextBtn.addEventListener("click", function() {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

previousBtn.addEventListener("click", function() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener("transitionend", function () {
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };

    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
});
