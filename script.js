// Get the button element
const scrollToTopBtn = document.getElementById("scroll-to-top");

// Function to handle the scroll event
window.onscroll = function() {
    // Show the button if the user has scrolled more than 200px
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

// Function to handle the click event
scrollToTopBtn.onclick = function() {
    // Smoothly scroll to the top of the document
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
