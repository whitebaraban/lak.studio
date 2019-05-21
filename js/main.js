var doc = document;

var btn = doc.getElementsByClassName('online-singup-btn');
var modalwin = doc.getElementsByClassName('modal-window-root');

  btn[0].addEventListener('click', function () {
    console.log(modalwin.classList);  
    modalwin[0].classList.toggle("hidden-win");
  });

