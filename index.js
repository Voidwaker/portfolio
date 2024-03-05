document.getElementById('mode-toggle').addEventListener('change', function(event){
    if(event.target.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        document.getElementById('theme-text').textContent = 'Dark Mode'; 
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-text').textContent = 'Light Mode'; 
    }
});

  // Når brukeren scroller ned 20px fra toppen av dokumentet, vis knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Når brukeren klikker på knappen, scroll til toppen av dokumentet
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE og Opera
}

  

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
