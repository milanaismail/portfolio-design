document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.project-image-container img');
    const descriptionText = document.querySelector('.project-description-text span');
    const skillsContainer = document.querySelector('.skills');

    const initialDescription = 'For my college assignment, I had to create a useless website. That\'s right. A website that is useless and serves no purpose. Some of these websites were group projects.';
    const initialSkills = ['Javascript', 'CSS', 'Illustrator'];

    const descriptions = {
        'pointer-mockup': 'This is the perfect website to find your lost cursor.',
        'growing-dot-mockup': 'The slower you move your cursor, the larger the dot grows.',
         'bottle-mockup': "You can fill your bottle, drink it and do it all over again.",
        'flip-coin-mockup': 'Flipping a coin is not useless you might think, but it is when the coin only flips one side.',
        'book-mockup': 'Book.',
        'magic-mockup': 'Magic.',
        'scale-mockup': 'Scale.',
        'home-mockup': 'Home.'
    };

    const skillsToAdd = ['bottle-mockup', 'flip-coin-mockup', 'magic-mockup','scale-mockup', 'home-mockup'];

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

document.getElementById('pointer-mockup').addEventListener('click', function() {
    window.location.href = './pointer/index.html';
});

document.getElementById('growing-dot-mockup').addEventListener('click', function() {
    window.location.href = './growing-dot/index.html';
});

document.getElementById('bottle-mockup').addEventListener('click', function() {
    window.location.href = './bottle/index.html';
});

document.getElementById('flip-coin-mockup').addEventListener('click', function() {
    window.location.href = './flip-coin/index.html';
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