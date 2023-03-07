//reset scrolla
jQuery(function($)
{
    $.scrollTo(0);
    $('.navi__sliding-li--szafa').click(function() { $.scrollTo($('#tales-szafa'), 800); })
    $('.navi__sliding-li--tom').click(function() { $.scrollTo($('#tales-tom'), 900); })
    $('.navi__sliding-li--balwan').click(function(){$.scrollTo($('#tales-bałwan'), 1000); });
});
// -----------------------------------------------------------------------------CLOSE POPUP 
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");

const ESCAPE = document.addEventListener("keydown", (e) =>
{
    if (e.code === "Escape" || e.keyCode === 27)
    
        POPUP.classList.add("hidden");
});

POPUP_CLOSE.addEventListener("click", () =>
{
    POPUP.classList.add("hidden");
});

// -----------------------------------------------------------------------------OPEN POPUP 
const SZAFA_MINI = document.querySelector(".tales__read--szafa");
SZAFA_MINI.addEventListener("click", function()
{
    popupMini("szafa")

});

const TOM_MINI  = document.querySelector(".tales__read--tom");
TOM_MINI.addEventListener("click", function()
{
    popupMini("tom")
});

const BAŁWAN_MINI = document.querySelector(".tales__read--balwan");
BAŁWAN_MINI.addEventListener("click", function()
{
    popupMini("Bałwan")

});

function popupMini(name)
{
    numer = 0;
    POPUP.classList.remove("hidden");

    let plik = `<img src=\"img/${name}/${name}mini${numer}.jpg\">`;
    

    document.getElementById("mini-img").innerHTML = plik;
    
    miniTitle = name;
    if(miniTitle == "szafa")
    {
        numberOfPages = 8;
    }
    else if(miniTitle == "tom")
    {
        numberOfPages = 7;
    }
    else if(miniTitle == "Bałwan")
    {
        numberOfPages = 11;
    }    
}

// -----------------------------------------------------------------------------NEXT PAGE
const NEXT_MINI = document.getElementById("popup_mini_arrow_right");
NEXT_MINI.addEventListener("click", function()
{
    next(miniTitle,numberOfPages);
});
 
const ARROW_RIGHT = document.addEventListener("keydown", (e) =>
{
    if(e.code === "ArrowRight" || e.keyCode === 39)
    next(miniTitle,numberOfPages);
});

function next(name, pages)
{
    
    numer ++; if (numer > pages) numer =0;

    let plik = `<img src=\"img/${name}/${name}mini${numer}.jpg\">`;
    
    document.getElementById("mini-img").innerHTML = plik;
}

// -----------------------------------------------------------------------------PREVIOUS PAGE
const PREVIOUS_MINI = document.getElementById("popup_mini_arrow_left");
PREVIOUS_MINI.addEventListener("click", function()
{
    previous(miniTitle, numberOfPages)
});

const ARROW_LEFT = document.addEventListener("keydown", (e) =>
{
    if(e.code === "ArrowLeft" || e.keyCode === 37)
    previous(miniTitle,numberOfPages);
});

function previous(name, pages)
{
    numer --; if (numer<0) numer =pages;

    let plik = `<img src=\"img/${name}/${name}mini${numer}.jpg\">`;

    document.getElementById("mini-img").innerHTML = plik;
}
