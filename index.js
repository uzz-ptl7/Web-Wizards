const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuContainer = document.getElementById('mobile-menu-container');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
const closeMenuByLinks = document.querySelectorAll('.mobile-menu-link');

// Function to open mobile menu
menuBtn.addEventListener('click', () => {
    mobileMenuContainer.classList.remove('hidden');
    mobileMenu.classList.remove('translate-x-full');
    
    // Add animation to menu links
    mobileMenuLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.remove('opacity-0');
            link.classList.remove('translate-x-4');
        }, 100 * index); // Delay each link's animation
    });
});

// Function to close mobile menu
closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    setTimeout(() => {
        mobileMenuContainer.classList.add('hidden');
    }, 300); // Wait for animation to finish before hiding container
});

// Function to close mobile menu by clicking on links
closeMenuByLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenuContainer.classList.add('hidden');
        }, 300); // Wait for animation to finish before hiding container
    });
});