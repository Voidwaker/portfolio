document.getElementById('mode-toggle').addEventListener('change', function(event){
    if(event.target.checked) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  });
  
