document.getElementById('row2').hidden = true;
element1 = document.querySelectorAll(".door");

doorImage1 = document.getElementById('door1');
doorImage2 = document.getElementById('door2');
doorImage3 = document.getElementById('door3');
winPath = "./supercar.svg";
losePath = "./158047.svg";
var openDoor1, openDoor2, openDoor3, winner;
allDoors = [openDoor1, openDoor2, openDoor3];

const change = () => {
    document.getElementById('row2').hidden = false;
    document.getElementById('row1').hidden = true;
}
element1.forEach(function(item) {
    item.addEventListener('click', change);
});
doorImage1.onclick = () => {
    if (openDoor2 === losePath) {
        doorImage2.src = openDoor2;
    } else if (openDoor3 === losePath) {
        doorImage3.src = openDoor3;
    }
}
doorImage2.onclick = () => {
    if (openDoor1 === losePath) {
        doorImage1.src = openDoor1;
    } else if (openDoor3 === losePath) {
        doorImage3.src = openDoor3;
    }
}
doorImage3.onclick = () => {
    if (openDoor2 === losePath) {
        doorImage2.src = openDoor2;
    } else if (openDoor1 === losePath) {
        doorImage1.src = openDoor1;
    }
}
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