var dots = document.getElementById('container__dots');
var masterContent = document.querySelector('.master');

setTimeout(function(){
dots.parentNode.removeChild(dots);
}, 2500);

setTimeout(function(){
    masterContent.classList.remove('hide');
    }, 2600);
    

