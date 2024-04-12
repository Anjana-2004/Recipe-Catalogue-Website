document.addEventListener('DOMContentLoaded', function() {
    // Selecting navigation links
    const homeLink = document.querySelector('.nav-bar ul li:nth-child(1) a');
    const aboutLink = document.querySelector('.nav-bar ul li:nth-child(2) a');
    const recipesLink = document.querySelector('.nav-bar ul li:nth-child(3) a');
    const categoriesLink = document.querySelector('.nav-bar ul li:nth-child(4) a');
    const contactLink = document.querySelector('.nav-bar ul li:nth-child(5) a');

    // Selecting corresponding sections
    const homeSection = document.querySelector('.hero');
    const aboutSection = document.querySelector('.about');
    const recipesSection = document.querySelector('.recipe');
    const categoriesSection = document.querySelector('.categories');
    const contactSection = document.querySelector('.contact');

    // Smooth scrolling function for each link
    homeLink.addEventListener('click', scrollToSection(homeSection));
    aboutLink.addEventListener('click', scrollToSection(aboutSection));
    recipesLink.addEventListener('click', scrollToSection(recipesSection));
    categoriesLink.addEventListener('click', scrollToSection(categoriesSection));
    contactLink.addEventListener('click', scrollToSection(contactSection));

    // Smooth scrolling for "Start Cooking" button
    const startCookingButton = document.querySelector('.button');
    startCookingButton.addEventListener('click', scrollToSection(recipesSection));
});

function scrollToSection(section) {
    return function(event) {
        event.preventDefault();
        const offsetTop = section.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    };
}
