document.addEventListener('DOMContentLoaded', function() {
    const flower = document.querySelector('.flower');
    const headerContainer = document.querySelector('.header-container');
    // Preload images
    const flowerHoverImage = new Image();
    flowerHoverImage.src = 'images/logo.png';
    
    const flowerOriginalImage = new Image();
    flowerOriginalImage.src = 'images/flower.png';
    
    flower.addEventListener('mouseover', function() {
        flower.src = 'images/logo.png'; // Change image source on hover
        flower.style.width = '120px'; 
        flower.classList.add('no-rotate'); 
        headerContainer.style.backgroundColor = '#F9F9F9'; // Change background color on hover
    });

    flower.addEventListener('mouseout', function() {
        flower.src = 'images/flower.png'; // Revert image source when not hovered
        flower.style.width = '50px';
        flower.classList.remove('no-rotate'); 
        headerContainer.style.backgroundColor = '#EAD2FF'; // Revert background color when not hovered
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const imageUrl = project.getAttribute('data-image');
        const title = project.getAttribute('data-title');
        const overlayText = project.getAttribute('data-overlay');
        const url = project.getAttribute('data-url');

        project.querySelector('.project-image').style.backgroundImage = `url(${imageUrl})`;
        project.querySelector('h3').innerText = title;

        // If data-overlay attribute exists, split the text and create span elements
        if (overlayText) {
            const overlayContainer = project.querySelector('.overlay');
            const overlayTexts = overlayText.split(', '); // Assuming multiple values are comma-separated

            overlayContainer.innerHTML = ''; // Clear existing overlay content

            overlayTexts.forEach(text => {
                const span = document.createElement('span');
                span.innerText = text;
                overlayContainer.appendChild(span);
            });
        }

        project.addEventListener('click', () => {
            window.location.href = url;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu-mobile');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle the menu
    hamburgerIcon.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.style.display = 'none';
        });
    });

    // Set active link based on the current URL
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPath)) {
            link.classList.add('active');
        }
    });
});