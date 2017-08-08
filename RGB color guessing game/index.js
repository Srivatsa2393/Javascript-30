var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 101)"
];

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDispaly = document.querySelector('#message');

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
        if (clickedColor === pickedColor){
            //alert('correct');
            messageDispaly.textContent = "Correct";
            changeColors(clickedColor);
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