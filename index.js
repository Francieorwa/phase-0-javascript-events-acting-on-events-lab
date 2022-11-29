// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft(){
    dodger.style.backgroundColor = "#FF69B4";
    dodger.style.bottom = "0px";
    dodger.style.left = "0px";

}
function moveDodgerRight(){
    const rightNumbers =dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers,10);

    if(right>=0){
        dodger.style.left =`${right +1}px`;
    }

}
document.addEventListener("keyup",function(e){
    if (e.key ==="ArrowRight"){
        moveDodgerLeft()
    }
});
