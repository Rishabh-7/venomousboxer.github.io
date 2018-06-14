var colorDisplay = document.querySelector("#colorDisplay")
var resetButton = document.querySelector("#reset")
var messageText = document.querySelector("#message")
var square = document.querySelectorAll(".square")
var colors = [];
var numSquare = 6;
var pickedColor;
var easyButton = document.querySelector("#easy")
var hardButton = document.querySelector("#hard")

resetButton.addEventListener('click', () => {reset();});
easyButton.addEventListener('click', () => {
    hardButton.style.background = "#ffffff"  // White
    hardButton.style.color = "#4682b4"  // SteelBlue
    easyButton.style.background = "#4682b4"  // SteelBlue
    easyButton.style.color = "#ffffff"  // White
    numSquare = 3;
    reset();
});
hardButton.addEventListener('click', () => {
    easyButton.style.background = "#ffffff"  // White
    easyButton.style.color = "#4682b4"  // SteelBlue
    hardButton.style.background = "#4682b4"  // SteelBlue
    hardButton.style.color = "#ffffff"  // White
    numSquare = 6;
    reset();
});

reset();  // reset function called to initialize the page

function reset() {
    messageText.textContent = '';
    resetSquareColors();
    colorDisplay.textContent = pickColor();
    setupSquareOnClickListeners();
}

function setupSquareOnClickListeners() {
    for(let i=0; i<numSquare; i++){
        square[i].addEventListener('click', () => {
            if(i===pickedColor){
                messageText.textContent = "Correct !!"
                resetButton.textContent = "Play Again ?"
                afterEndingOfGame(colors[i]);
            }
            else{
                square[i].style.background = "#232323"
                messageText.textContent = 'Try Again'
            }
        });
    }
}

function afterEndingOfGame(color){
    for(let i=0; i<numSquare; i++){
        square[i].style.background = color;
    }
}

function pickColor(){
    pickedColor = Math.floor(Math.random() * numSquare);
    return colors[pickedColor];
}

function resetSquareColors() {
    colors = generateRandomColors(numSquare);
    for(let i=0; i<numSquare; i++){
        square[i].style.background = colors[i];
    }
    if(numSquare === 3){
        for (let i = 3; i < 6; i++) {
            square[i].style.background = "#232323";
        }
    }
}

function changeBackgroundOfSquare(color) {
    //function to turn the background of all squares same
    for(let i=0; i<numSquare; i++){
        square[i].style.background = color;
    }
}

function generateRandomColors(numSquare) {
    var arr = []
    for(let i=0; i<numSquare; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    return( "rgb(" + r + ", " + g + ", " + b + ")")
}
