document.addEventListener('DOMContentLoaded', function() {
    var soundBox = document.getElementById('soundBox');
    var audio = new Audio('edgar_die_vo_01.mp3'); // Tutaj dodaj ścieżkę do pliku dźwiękowego.
  
    soundBox.addEventListener('click', function() {
      audio.play();
    });
  });
  