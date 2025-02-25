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



document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Fjern "active" fra alle knapper
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      // Skjul alle prosjektscontainere
      document.querySelectorAll('.projects-container').forEach(container => container.classList.remove('active'));
      
      // Legg til "active" på den klikkede knappen og vis riktig container
      button.classList.add('active');
      const target = document.querySelector(button.getAttribute('data-target'));
      target.classList.add('active');
    });
  });
  