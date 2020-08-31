//
// Navigation Bar
//
function navSlide () {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");
    var slide = document.getElementById("slides");

    burger.addEventListener("click", function () {
        // Toggle nav
        nav.classList.toggle("nav-active");

        // Slide the body while nav toggle
        burger.classList.toggle("body-slide-active");
        slide.classList.toggle("slides-active");

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

    if(this.scrollY > this.innerHeight / 4) {
        // Change navbar color
        document.querySelector("nav").classList.add("nav-scroll");

        // Change navbar logo color
        document.querySelector("nav .logo h4").classList.add("nav-items-whiten");

        // Change burger background color
        document.querySelector("nav .burger .line1").style.background = "#fcfafa";
        document.querySelector("nav .burger .line2").style.background = "#fcfafa";
        document.querySelector("nav .burger .line3").style.background = "#fcfafa";

        // Change links color
        document.querySelector("nav .nav-links .link2 a").style.color = "#fcfafa";
        document.querySelector("nav .nav-links .link1 a").style.color = "#ff0000";
        document.querySelector("nav .nav-links .link3 a").style.color = "#fcfafa";
    } else {
        document.querySelector("nav").classList.remove("nav-scroll");

        document.querySelector("nav .logo h4").classList.remove("nav-items-whiten");

        document.querySelector("nav .burger .line1").style.background = "#141414";
        document.querySelector("nav .burger .line2").style.background = "#141414";
        document.querySelector("nav .burger .line3").style.background = "#141414";

        document.querySelector("nav .nav-links .link2 a").style.color = "#141414";
        document.querySelector("nav .nav-links .link1 a").style.color = "#ff0000";
        document.querySelector("nav .nav-links .link3 a").style.color = "#141414";

    }
};

window.addEventListener("scroll", navBarColorChange);



// 
// window redirect
// 

// when clicked on logo
var logo = document.querySelector(".logo");

logo.addEventListener("click", function() {
    window.location.href = "index.html";
});
