var sign = "X";

var winningMessageElement = document.getElementById("winningMessage")
var playerDetail1 = document.getElementById("player1")
var playerDetail2 = document.getElementById("player2")
var winnerMessageElement = document.getElementById("winner-message")
var congratsMessageElement = document.getElementById("congrats-message")

function boxClicked(id){
    var clickedElement = document.getElementById(id);
    if(clickedElement.innerText == ""){
        clickedElement.innerText = sign;
        player1.style.color = "red"
        winner(sign)
        if(sign == "X"){
            sign = "O"
            player1.style.color = "black"
            player1.style.backgroundColor = "bisque"
            player2.style.backgroundColor = "white"
            player2.style.color = "red"
            clickedElement.style.backgroundColor = "yellow"
        }else{
            sign = "X"
            player2.style.color = "black"
            player2.style.backgroundColor = "bisque"
            player1.style.backgroundColor = "white"
            player1.style.color = "red"
            clickedElement.style.backgroundColor = "orange"
        }
    }
}
function winner(sign){
    if(document.getElementById("box1").innerHTML == sign && document.getElementById("box2").innerHTML == sign && document.getElementById("box3").innerHTML == sign 
    || document.getElementById("box4").innerHTML == sign && document.getElementById("box5").innerHTML == sign && document.getElementById("box6").innerHTML == sign
    || document.getElementById("box7").innerHTML == sign && document.getElementById("box8").innerHTML == sign && document.getElementById("box9").innerHTML == sign
    || document.getElementById("box1").innerHTML == sign && document.getElementById("box5").innerHTML == sign && document.getElementById("box9").innerHTML == sign
    || document.getElementById("box3").innerHTML == sign && document.getElementById("box5").innerHTML == sign && document.getElementById("box7").innerHTML == sign
    || document.getElementById("box1").innerHTML == sign && document.getElementById("box4").innerHTML == sign && document.getElementById("box7").innerHTML == sign
    || document.getElementById("box2").innerHTML == sign && document.getElementById("box5").innerHTML == sign && document.getElementById("box8").innerHTML == sign
    || document.getElementById("box3").innerHTML == sign && document.getElementById("box6").innerHTML == sign && document.getElementById("box9").innerHTML == sign){
        if(sign == "X"){
            setTimeout(function(){
                winningMessageElement.style.display = "block"
                winnerMessageElement.innerText = "Player 1,You are the Winner"
            },200)
            setTimeout(function(){
                location.reload()
            },3000)
            
        }else{   
            setTimeout(function(){
                winningMessageElement.style.display = "block"
                winnerMessageElement.innerText = "Player 2,You are the Winner"
            },200)
            setTimeout(function(){
                location.reload()
            },3000)
        }
    }else if(document.getElementById("box1").innerText != "" && document.getElementById("box2").innerText != "" && document.getElementById("box3").innerText != "" &&
    document.getElementById("box4").innerText != ""&& document.getElementById("box5").innerText != "" && document.getElementById("box6").innerText != "" &&
    document.getElementById("box7").innerText != "" && document.getElementById("box8").innerText != "" && document.getElementById("box9").innerText != ""){
        setTimeout(function(){
            winningMessageElement.style.display = "block"
            congratsMessageElement.innerText = ""
            winnerMessageElement.innerText = "Tie, Please restart the game!!"
        },200)
        setTimeout(function(){
            location.reload()
        },3000)
        
    }
}
