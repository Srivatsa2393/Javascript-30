var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 101)"
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');

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
            alert('correct');
        }else {
            alert('wrong');
        }
    })
}



