var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var card4 = document.querySelector(".card4");
var card5 = document.querySelector(".card5");
var card6 = document.querySelector(".card6");
var card7 = document.querySelector(".card7");
var img1 = document.querySelector(".img__1");
var img3 = document.querySelector(".img3");
var a = true;
var fdiv = document.querySelector(".sec3-time-inner") 
function closefunction() {
    document.getElementById("hide").style.display = "none";
}

card1.addEventListener("click", () => {
    if (a) {
        img1.style.zIndex = "3";
        img1.style.position = "relative";
        a = false;
    } else {
        img1.style.zIndex = "0";
        img1.style.position = "relative";
        a = true;
    }
})
card2.addEventListener("click", () => {
    img3.style.zIndex = "3";
    img3.style.position = "relative";
})




console.log(card1);

