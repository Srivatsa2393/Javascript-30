var button = document.querySelector('button');
//var isGreen = false;
//button.addEventListener('click', function(){
//    if (isGreen) {
//        document.body.style.background = 'white';
//    }else{
//        document.body.style.background = 'green';
//    }
//    isGreen = !isGreen;
//})

button.addEventListener('click', function(){
    document.body.classList.toggle('green');
})