document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.project-image-container img');
    const descriptionText = document.querySelector('.project-description-text span');
    const skillsContainer = document.querySelector('.skills');

    const initialDescription = 'For my college assignment, I was given a random word and had to create a CSS animation of that word. Some of these were group projects.';
    const initialSkills = ['CSS'];

    const descriptions = {
        'book-mockup': 'Book.',
        'magic-mockup': 'Magic.',
        'scale-mockup': 'Scale.',
        'home-mockup': 'Home.'
    };

    const skillsToAdd = ['magic-mockup','scale-mockup', 'home-mockup'];

    images.forEach(image => {
        image.addEventListener('mouseenter', function () {
            const id = this.id;
            if (descriptions[id]) {
                descriptionText.textContent = descriptions[id];
            }

            if (skillsToAdd.includes(id)) {
                const teamworkSkill = document.createElement('p');
                teamworkSkill.textContent = 'Teamwork';
                teamworkSkill.classList.add('teamwork-skill');
                if (!skillsContainer.querySelector('.teamwork-skill')) {
                    skillsContainer.appendChild(teamworkSkill);
                }
            } else {
                const teamworkSkill = skillsContainer.querySelector('.teamwork-skill');
                if (teamworkSkill) {
                    skillsContainer.removeChild(teamworkSkill);
                }
            }
        });

        image.addEventListener('mouseleave', function () {
            descriptionText.textContent = initialDescription;

            // Clear existing skills
            while (skillsContainer.firstChild) {
                skillsContainer.removeChild(skillsContainer.firstChild);
            }

            // Add initial skills
            initialSkills.forEach(skill => {
                const skillElement = document.createElement('p');
                skillElement.textContent = skill;
                skillsContainer.appendChild(skillElement);
            });
        });
    });
});

document.getElementById('book-mockup').addEventListener('click', function() {
    window.location.href = './book/index.html';
});

document.getElementById('magic-mockup').addEventListener('click', function() {
    window.location.href = './magic/animation.html';
});

document.getElementById('scale-mockup').addEventListener('click', function() {
    window.location.href = './scale/index.html';
});

document.getElementById('home-mockup').addEventListener('click', function() {
    window.location.href = './home/index.html';
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu-mobile');
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('hamburgerIcon:', hamburgerIcon); // Log the hamburger icon
    console.log('navMenu:', navMenu); // Log the nav menu
    console.log('navLinks:', navLinks); // Log
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