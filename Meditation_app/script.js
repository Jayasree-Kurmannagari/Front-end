const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
play.addEventListener('click',(e)=>{
        play.style.display = "none";
        pause.style.display = "flex";
});
pause.addEventListener('click',(e)=>{
        play.style.display = "flex";
        pause.style.display = "none";
});
