var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDispaly = document.querySelector('#message');
var h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener('click', function(){
        //alert('clicked the square');
        //grab the color of clicked square and compare it with the picked color
        //alert(this.style.background);
        var clickedColor = this.style.background;
        //compare color to pickedcolor
        //console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor){
            //alert('correct');
            messageDispaly.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }else {
            //alert('wrong');
            this.style.background = '#232323';
            messageDispaly.textContent = "Try Again"
        }
    })
}

function changeColors(color) {
    //loop thro all squares 
    for(var i = 0; i < squares.length; i++){
        //change each color to match color
        squares[i].style.background = color;
    } 
}

function pickColor(){
    //picking a random number
    //save it to a variable and access the element to an array
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to arr
    for(var i =0 ; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a red from 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}