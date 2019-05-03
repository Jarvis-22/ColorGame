var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeBtns = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;

init();

function init()
{
    setupModeButtons();
    setUpSquares();
    r();
}

function setupModeButtons()
{
    for(var i = 0; i < modeBtns.length; i++)
    {
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            r();
        });
    }
}

function setUpSquares()
{
    for (var i = 0; i < squares.length; i++)
    {
    
        squares[i].addEventListener("click", function() 
        {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor)
            {
                //alert("CORRECT");
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else
            {
                // alert("WRONG");
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}

function r()
{
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
           
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
    r();
});



function changeColors(color)
{
    for (var i = 0; i < colors.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
   var rdm = Math.floor(Math.random() * colors.length);
   return colors[rdm];
}
function generateRandomColors(num)
{
    var arr = [];
    for (var i = 0; i < num; i++)
    {
        arr.push(randomColor());

    }

    return arr;
}

function randomColor()
{
   var red =  Math.floor(Math.random() * 256);
   var green =  Math.floor(Math.random() * 256);
   var blue =  Math.floor(Math.random() * 256);

   return "rgb(" + red + ", " + green + ", " + blue +")";

}


/*
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
*/