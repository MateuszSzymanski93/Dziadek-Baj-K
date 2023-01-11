const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close"); 

let numer = 0
// -----------------------------------------------------------------------------CLOSE POPUP VER. MINI
POPUP_CLOSE.addEventListener("click", () =>
{
    POPUP.classList.add("hidden");
    numer = 0;
});

// -----------------------------------------------------------------------------OPEN STORY VER. MINI
const TOM_MINI  = document.getElementById("tom-mini");
TOM_MINI.addEventListener("click", function()
{
    popupMini("tom")
});

const BAŁWAN_MINI = document.getElementById("bałwan-mini");
BAŁWAN_MINI.addEventListener("click", function()
{
    popupMini("Bałwan")

});

function popupMini(name)
{
    document.getElementById("popup_mini").classList.remove("hidden");

    let plik = "<img src=\"img/" + name + "/"+ name + "mini" + numer + ".jpg\">";

    document.getElementById("mini-img").innerHTML = plik;
    
    x = name;
    return x;    
}

// -----------------------------------------------------------------------------NEXT PAGE VER. MINI
const NEXT_MINI = document.getElementById("popup_mini_arrow_right");
NEXT_MINI.addEventListener("click", function()
{
    if(x == "tom")
    {
        y = 7;
    }
    else if(x == "Bałwan")
    {
        y = 10;
    }
    console.log(x);
    console.log(y);
    next(x,y)
});

function next(name, pages)
{
    
    numer ++; if (numer > pages) numer =0;

    let plik = "<img src=\"img/" + name + "/"+ name + "mini" + numer + ".jpg\">";

    document.getElementById("mini-img").innerHTML = plik;
    console.log(numer);
}

// -----------------------------------------------------------------------------PREVIOUS PAGE VER. MINI
const PREVIOUS_MINI = document.getElementById("popup_mini_arrow_left");
PREVIOUS_MINI.addEventListener("click", function()
{
    previous(x)
});

function previous(name)
{
    numer --; if (numer<0) numer =11;

    var plik = "<img src=\"img/" + name + "/"+ name + "mini" + numer + ".jpg\">";

    document.getElementById("mini-img").innerHTML = plik;
}

// -----------------------------------------------------------------------------READ STORY DESCRIPTION
function balwanek__opis()
{
    document.getElementById("balwanek-opis").classList.remove("hidden");
}

function balwanek__opis__close()
{
    document.getElementById("balwanek-opis").classList.add("hidden");
}