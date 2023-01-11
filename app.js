const POPUP_CLOSE = document.querySelector(".popup__close"); 
const MINI1 = document.querySelector("#mini1");
const BALWAN_MINI = document.querySelector(".balwan-mini");
const BALWAN_MINI_IMG = document.querySelectorAll(".balwan-mini-slides img")
const POPUP_IMG = document.querySelector("popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;
var numer = 1

MINI1.addEventListener("click", (e) =>
{
    BALWAN_MINI.classList.remove("hidden");
    var plik = "<img src=\"img/balwan/bałwanmini" + numer + ".jpg\"/ class=\"balwan-mini-oneslide\">"

    document.getElementsById("popup__img").innerHTML = plik;
});

function slajd()
{
    numer++; if (numer>3) numer =1;

    var plik = "<img src=\"img/B" + numer + ".jpg\"/ class=\"title_picture\">"

    document.getElementById("slidebud").innerHTML = plik;

    $("#slidebud").fadeIn(2000);

    setTimeout("slajd()", 10000);
    setTimeout("slajdout()", 8000);
}

POPUP_CLOSE.addEventListener("click", () =>
{
    BALWAN_MINI.classList.add("hidden");
});

ARROW_RIGHT.addEventListener("click", () =>
{
    currentImgIndex = currentImgIndex + 1; 
});