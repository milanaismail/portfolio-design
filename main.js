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
        headerContainer.style.backgroundColor = '#F9F9F9'; // Change background color on hover
    });

    flower.addEventListener('mouseout', function() {
        flower.src = 'images/flower.png'; // Revert image source when not hovered
        flower.style.width = '50px';
        headerContainer.style.backgroundColor = '#EAD2FF'; // Revert background color when not hovered
    });
});