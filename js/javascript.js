//
// Navigation Bar
//
function navSlide () {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", function () {
        // Toggle nav
        nav.classList.toggle("nav-active");
        // Slide the body while nav toggle
        burger.classList.toggle("body-slide-active");

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
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

// Navbar scroll effect

function navBarColorChange() {

    if(this.scrollY > this.innerHeight / 2) {
        document.querySelector("nav").classList.add("nav-scroll");
        document.querySelector(".content").classList.add("bg-change");
    } else {
        document.querySelector("nav").classList.remove("nav-scroll");
        document.querySelector(".content").classList.add("bg-change");
    }
};

window.addEventListener("scroll", navBarColorChange);


//
// Carousel Slider
//

var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide img");

// Buttons
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");

// Dots
var dots = document.querySelectorAll("label");

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
dots[counter - 1].classList.add("dot-fill");

// Button Listener

// Next Button Listener
nextBtn.addEventListener("click", function() {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if(counter <= 4) {
        dots[counter - 1].classList.toggle("dot-fill");
        dots[counter - 2].classList.toggle("dot-fill");
    }

});

// Previous Button Listener
previousBtn.addEventListener("click", function() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    dots[counter - 1].classList.toggle("dot-fill");
    dots[counter].classList.toggle("dot-fill");
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

// Using Dots for Navigation in Carousel

dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
        carouselSlide.style.transition = "transform 0.6s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * (index + 1)) + 'px)';
        // Yet to do --> to fill the dots with background color when selected and remove from other dots
        dots[index].classList.add("dot-fill");
        if ((index - 1) >= 0) {
            dots[index - 1].classList.remove("dot-fill");
        };
        if ((index + 1) <= 3) {
            dots[index + 1].classList.remove("dot-fill");
        };
    });
});


// Image Autoplay
setInterval(function(){
    document.querySelector("#nextBtn").click();
}, 5000);
