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

//
// Carousel Slider
//

var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide img");

// Button
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

nextBtn.addEventListener("click", function() {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    dots[counter - 1].classList.toggle("dot-fill");
    dots[counter - 2].classList.toggle("dot-fill");
});

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

var count = 0;

setInterval(function(){
    document.querySelectorAll("label").checked = true;
    count++;

    if (count > 3) {
        count = 0;
    };
}, 1000);


// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.querySelectorAll(".carousel-slide img");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
