document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const themeText = document.getElementById('theme-text');
  
    // Sett dark mode hvis togglen er sjekket
    if (modeToggle.checked) {
      document.documentElement.style.setProperty('--background-color-light', '#424242');
      document.documentElement.style.setProperty('--text-color-light', '#fff');
      themeText.textContent = 'Dark Mode';
    } else {
      document.documentElement.style.setProperty('--background-color-light', '#fff');
      document.documentElement.style.setProperty('--text-color-light', '#000');
      themeText.textContent = 'Light Mode';
    }
    
    modeToggle.addEventListener('change', function(event) {
      if (event.target.checked) {
        document.documentElement.style.setProperty('--background-color-light', '#424242');
        document.documentElement.style.setProperty('--text-color-light', '#fff');
        themeText.textContent = 'Dark Mode';
      } else {
        document.documentElement.style.setProperty('--background-color-light', '#fff');
        document.documentElement.style.setProperty('--text-color-light', '#000');
        themeText.textContent = 'Light Mode';
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
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.projects-container').forEach(container => container.classList.remove('active'));
        button.classList.add('active');
        const target = document.querySelector(button.getAttribute('data-target'));
        target.classList.add('active');
      });
    });
  });
  