var navbar = document.querySelector(".navbar");

// adjust navbar on scrolling

window.addEventListener("scroll", function() {
    if (window.scrollY < 100 && document.body.clientWidth >= 992) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    } else {
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "0 1px 2px -2px #999999";
    }
});

// adjust navbar on resizing

window.addEventListener("resize", function () {
    if (document.body.clientWidth >= 992 && window.scrollY < 100 ) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    } else {
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "0 1px 2px -2px #999999";
    }
});

// Make scrolling smooth when link is clicked

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
