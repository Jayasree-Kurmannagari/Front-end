document.getElementById('row2').hidden = true;
document.getElementById("switchAndWin").hidden = true;
document.getElementById("switchAndLose").hidden = true;
document.getElementById("NoSwitchAndWin").hidden = true;
document.getElementById("NoSwitchAndLose").hidden = true;
document.getElementById('d1').hidden = true;
document.getElementById('d2').hidden = true;
document.getElementById('d3').hidden = true;
element1 = document.querySelectorAll(".door");

doorImage1 = document.getElementById('door1');
doorImage2 = document.getElementById('door2');
doorImage3 = document.getElementById('door3');
winPath = "https://image.flaticon.com/icons/svg/3118/3118467.svg";
losePath = "https://image.flaticon.com/icons/svg/836/836069.svg";
var openDoor1, openDoor2, openDoor3, winner;
switchChoiceYes = document.getElementById('btn-1');
switchChoiceNo = document.getElementById('btn-2');
winDoorGenerator();

function winDoorGenerator() {
    winner = Math.floor(Math.random() * 3);
    if (winner === 1) {
        openDoor1 = winPath;
        openDoor2 = losePath;
        openDoor3 = losePath;
    } else if (winner === 2) {
        openDoor2 = winPath;
        openDoor1 = losePath;
        openDoor3 = losePath;
    } else {
        openDoor3 = winPath;
        openDoor2 = losePath;
        openDoor1 = losePath;
    }
}
doorImage1.onclick = () => {
    document.getElementById('row1').hidden = true;
    document.getElementById('d1').hidden = false;


    setTimeout(() => { document.getElementById('d1').hidden = true; }, 1000);
    setTimeout(() => { document.getElementById('row2').hidden = false; }, 1000)

    if (openDoor2 === losePath) {
        setTimeout(() => { doorImage2.src = openDoor2; }, 3000);

    } else if (openDoor3 === losePath) {
        setTimeout(() => { doorImage3.src = openDoor3; }, 3000);
    }

    switchChoiceYes.onclick = () => {
        if (doorImage2.src === "https://image.flaticon.com/icons/svg/836/836069.svg") {
            document.getElementById("row2").hidden = true;
            document.getElementById("instructions").innerHTML = "You switched to door3"
            setTimeout(() => { document.getElementById("instructions").innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
            if (openDoor3 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        } else if (doorImage3.src === "https://image.flaticon.com/icons/svg/836/836069.svg") {
            document.getElementById("row2").hidden = true;
            document.getElementById("instructions").innerHTML = "You switched to door2"
            setTimeout(() => { document.getElementById("instructions").innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
            if (openDoor2 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        }
    }
    switchChoiceNo.onclick = () => {
        document.getElementById("row2").hidden = true;
        document.getElementById("instructions").innerHTML = "Your choice is still door1"
        setTimeout(() => { document.getElementById("instructions").innerHTML = "Revealing your chosen door......"; }, 1000);
        setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
        if (openDoor1 === losePath) {
            setTimeout(() => { noSwitchAndLose(); }, 3500)
        } else {
            setTimeout(() => { noSwitchAndWin(); }, 3500)
        }
    }
}
doorImage2.onclick = () => {
    document.getElementById('row1').hidden = true;
    document.getElementById('d2').hidden = false;


    setTimeout(() => { document.getElementById('d2').hidden = true; }, 1000);
    setTimeout(() => { document.getElementById('row2').hidden = false; }, 1000)

    if (openDoor1 === losePath) {
        setTimeout(() => { doorImage1.src = openDoor1; }, 3000);

    } else if (openDoor3 === losePath) {
        setTimeout(() => { doorImage3.src = openDoor3; }, 3000);
    }

    switchChoiceYes.onclick = () => {
        if (doorImage1.src === "https://image.flaticon.com/icons/svg/836/836069.svg") {
            document.getElementById("row2").hidden = true;
            document.getElementById("instructions").innerHTML = "You switched to door3"
            setTimeout(() => { document.getElementById("instructions").innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
            if (openDoor3 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        } else if (doorImage3.src === "https://image.flaticon.com/icons/svg/836/836069.svg") {
            document.getElementById("row2").hidden = true;
            document.getElementById("instructions").innerHTML = "You switched to door1"
            setTimeout(() => { document.getElementById("instructions").innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
            if (openDoor1 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        }
    }
    switchChoiceNo.onclick = () => {
        document.getElementById("row2").hidden = true;
        document.getElementById("instructions").innerHTML = "Your choice is still door2"
        setTimeout(() => { document.getElementById("instructions").innerHTML = "Revealing your chosen door......"; }, 1000);
        setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
        if (openDoor2 === losePath) {
            setTimeout(() => { noSwitchAndLose(); }, 3500)
        } else {
            setTimeout(() => { noSwitchAndWin(); }, 3500)
        }
    }
}
doorImage3.onclick = () => {
    document.getElementById('row1').hidden = true;
    document.getElementById('d3').hidden = false;


    setTimeout(() => { document.getElementById('d3').hidden = true; }, 1000);
    setTimeout(() => { document.getElementById('row2').hidden = false; }, 1000)

    if (openDoor1 === losePath) {
        setTimeout(() => { doorImage1.src = openDoor1; }, 3000);

    } else if (openDoor2 === losePath) {
        setTimeout(() => { doorImage2.src = openDoor2; }, 3000);
    }

    switchChoiceYes.onclick = () => {
        if (doorImage1.src === "https://image.flaticon.com/icons/svg/836/836069.svg") {
            document.getElementById("row2").hidden = true;
            document.getElementById("instructions").innerHTML = "You switched to door2"
            setTimeout(() => { document.getElementById("instructions").innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
            if (openDoor2 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        } else if (doorImage2.src === "https://image.flaticon.com/icons/svg/836/836069.svg") {
            document.getElementById("row2").hidden = true;
            document.getElementById("instructions").innerHTML = "You switched to door1"
            setTimeout(() => { document.getElementById("instructions").innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
            if (openDoor1 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        }
    }
    switchChoiceNo.onclick = () => {
        document.getElementById("row2").hidden = true;
        document.getElementById("instructions").innerHTML = "Your choice is still door3"
        setTimeout(() => { document.getElementById("instructions").innerHTML = "Revealing your chosen door......"; }, 1000);
        setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
        if (openDoor3 === losePath) {
            setTimeout(() => { noSwitchAndLose(); }, 3500)
        } else {
            setTimeout(() => { noSwitchAndWin(); }, 3500)
        }
    }
}

const switchAndWin = () => {
    document.getElementById('body').hidden = true;
    document.getElementById("switchAndWin").hidden = false;
}
const switchAndLose = () => {
    document.getElementById('body').hidden = true;
    document.getElementById("switchAndLose").hidden = false;
}
const noSwitchAndWin = () => {
    document.getElementById('body').hidden = true;
    document.getElementById("NoSwitchAndWin").hidden = false;
}
const noSwitchAndLose = () => {
    document.getElementById('body').hidden = true;
    document.getElementById("NoSwitchAndLose").hidden = false;
}