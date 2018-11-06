window.onscroll = () => {
    if (parseInt(window.pageYOffset) >= 900) {
        document.getElementById('arrow-up').style.opacity = '1';
    } else {
        document.getElementById('arrow-up').style.opacity = '0';   
    }
};

// Scroll to a certain element
document.getElementById('arrow-up').addEventListener('click', () => {
document.querySelector('#top').scrollIntoView({ 
    behavior: 'smooth' 
});
})
