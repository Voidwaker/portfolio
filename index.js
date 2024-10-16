document.getElementById('mode-toggle').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.documentElement.style.setProperty('--background-color-light', '#424242');
        document.documentElement.style.setProperty('--text-color-light', '#fff');
        document.getElementById('theme-text').textContent = 'Dark Mode';
    } else {
        document.documentElement.style.setProperty('--background-color-light', '#fff');
        document.documentElement.style.setProperty('--text-color-light', '#000');
        document.getElementById('theme-text').textContent = 'Light Mode';
    }
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        const offsetPosition = targetElement.offsetTop - 150;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});