// Add smooth scrolling for buttons
document.querySelector('.catalogue').addEventListener('click', function() {
    document.querySelector('.items-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.querySelector('.contact').addEventListener('click', function() {
    document.querySelector('.floating-button a').click();
});