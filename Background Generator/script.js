var css = document.querySelector('p');
var angle = document.querySelector(".angle");
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var button = document.querySelector('button');
var body = document.getElementById('gradient');
var randomButton = false;

function setGradient() {
    if (!randomButton) {
        body.style.background = "linear-gradient(" +
            angle.value + "deg," +
            color1.value + "," +
            color2.value + ")";
        css.textContent = body.style.background + ';';

    } else {
        body.style.background = "linear-gradient(" +
            angle + "deg," +
            color1 + "," +
            color2 + ")";
        css.textContent = body.style.background + ';';
        randomButton = false;
    }
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

angle.addEventListener("input", setGradient);

function random() {
    randomButton = true;
    var hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    function generate(val) {
        for (let i = 0; i < 6; i++) {
            var randomNum = Math.floor(Math.random() * 14);
            val += hexValues[randomNum];
        }
        return val
    }
    color1 = generate('#');
    color2 = generate("#");
    angle = Math.floor(Math.random() * 360);
    setGradient()

}

button.onclick = random;