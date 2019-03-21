var dots = document.getElementById('container__dots');
var header = document.getElementById('header__trilla');

setTimeout(function(){
dots.parentNode.removeChild(dots);
}, 2500);

setTimeout(function(){
    header.innerHTML = "Trilla.";
    header.classList.add('fadeIn');
    }, 2600);
    

