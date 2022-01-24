var box = document.getElementById('changeMe');

function changeBoxColor() {
    if(document.getElementById("butt1").innerHTML == "Now Blue") {
        box.style.background = "blue";
    }
    else if (document.getElementById("butt1").innerHTML == "Now Red") {
        box.style.background = 'red';
    }

    }
function handleButtonClick() {
    if(document.getElementById("butt1").innerHTML == "Now Blue")
        document.getElementById("butt1").innerHTML = "Now Red"
    else if (document.getElementById("butt1").innerHTML == "Now Red")
        document.getElementById("butt1").innerHTML = "Now Blue"
    changeBoxColor();
    }