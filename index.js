// header toggle

let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
    // body...
});

// typing effect 
let typed = new Typed('.auto-input', {
    strings: ['Frontend Web Developer!!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 200,
    loop: true,
});
let typeds = new Typed('.auto-inputs', {
    strings: ['together!!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 200,
    loop: true,
});
//active links 
//get all links
let navLinks = document.querySelectorAll('nav ul li a');
//get all sections
let sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY + 20;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
    // body...
});
// Show/Hide Scroll Buttons Based on Position
const scrollUpButton = document.getElementById('scroll-up');
const scrollDownButton = document.getElementById('scroll-down');
const progressBar = document.getElementById('progress-bar');

// Initially show only the down button
scrollUpButton.style.display = 'none';
scrollDownButton.style.display = 'block';

// Function to check the scroll position and update the progress bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Current scroll position from the top
    const windowHeight = window.innerHeight; // Viewport height
    const documentHeight = document.body.scrollHeight; // Total document height

    // Update progress bar width based on scroll
    const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = `${scrollProgress}%`;

    // If the user is at the top, show only the down button
    if (scrollTop === 0) {
        scrollUpButton.style.display = 'none';
        scrollDownButton.style.display = 'block';
    } 
    // If the user is at the bottom, show only the up button
    else if (scrollTop + windowHeight >= documentHeight) {
        scrollDownButton.style.display = 'none';
        scrollUpButton.style.display = 'block';
    } 
    // In between, show both buttons
    else {
        scrollUpButton.style.display = 'block';
        scrollDownButton.style.display = 'block';
    }
});

// Scroll up functionality
scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Scroll down functionality
scrollDownButton.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
    });
});
