var sign = "X";
var playerDetail = document.getElementById("player")
function boxClicked(id){
    var clickedElement = document.getElementById(id);
    if(clickedElement.innerText == ""){
        clickedElement.innerText = sign;
        winner(sign)
        if(sign == "X"){
            sign = "O"
            player.innerText = "Player 2"
            clickedElement.style.backgroundColor = "yellow"
        }else{
            sign = "X"
            player.innerText = "Player 1"
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
            alert("Player 1 is winner")
            location.reload()
        }else if(sign=="O"){
            alert("Player 2 is winner")   
            location.reload()
        }else{
            
        }
    }
}

