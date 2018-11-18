window.onscroll = () => {
    const arrow = document.getElementById('arrow-up');
    if (parseInt(window.pageYOffset) >= 900) {
        arrow.classList.remove('fadeOut');
        arrow.style.opacity = '1';   
        arrow.classList.add('fadeIn');
    } else {
        arrow.classList.remove('fadeIn');
        arrow.style.opacity = '0';   
        arrow.classList.add('fadeOut');
    }
};

// Scroll to a certain element
document.getElementById('arrow-up').addEventListener('click', () => {
document.querySelector('#top').scrollIntoView({ 
    behavior: 'smooth' 
});
})
