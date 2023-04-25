//reset scrolla
jQuery(function($)
{
    $.scrollTo(0);
    $('.logo').click(function() { $.scrollTo($('.release'), 800); })
    $('.navi__sliding-li--szafa').click(function() { $.scrollTo($('.tales__img--szafa'), 800); })
    $('.navi__sliding-li--tom').click(function() { $.scrollTo($('.tales__img--tom'), 900); })
    $('.navi__sliding-li--balwan').click(function(){$.scrollTo($('.tales__img--balwan'), 1000); });
});

// -----------------------------------------------------------------------------OPEN POPUP 
const SZAFA_MINI = document.querySelector(".tales__read--szafa");
SZAFA_MINI.addEventListener("click", function()
{
    popupNewArr("szafa")
});

const TOM_MINI  = document.querySelector(".tales__read--tom");
TOM_MINI.addEventListener("click", function()
{
    popupNewArr("Tom")
});

const BAŁWAN_MINI = document.querySelector(".tales__read--balwan");
BAŁWAN_MINI.addEventListener("click", function()
{
    popupNewArr("Bałwan")
});

// -----------------------------------------------------------------------------CREATE POPUP ARRAY
const POPUP_PAGE = document.getElementById("mini-img")
let storyArr = []
let page = 0

function popupNewArr(name)
{
    let pageNumber = 0
    let miniTitle = name;

    if(miniTitle == "szafa")
    {
        numberOfPages = 8;
    }
    else if(miniTitle == "Tom")
    {
        numberOfPages = 7;
    }
    else if(miniTitle == "Bałwan")
    {
        numberOfPages = 11;
    }    

    for (pageNumber; pageNumber < numberOfPages; pageNumber++)
    {
        storyArr.push(`<img src=\"img/${name}/${name}mini${pageNumber}.jpg\">`)
    }

    POPUP.classList.remove("hidden");
    POPUP_PAGE.innerHTML = storyArr[0];
    return storyArr;
}

// -----------------------------------------------------------------------------CLOSE POPUP 
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");

const ESCAPE = document.addEventListener("keydown", (e) =>
{
    if (e.code === "Escape" || e.keyCode === 27)
    
        closePopup();
});

POPUP_CLOSE.addEventListener("click", () =>
{
    closePopup();
});

function closePopup()
{
    POPUP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("fade-out")
    }, "700");
    page = 0
    storyArr = []
    return storyArr;
}

// -----------------------------------------------------------------------------NEXT PAGE
const NEXT_MINI = document.querySelector(".popup__arrow--right");
NEXT_MINI.addEventListener("click", function()
{
    next(storyArr);
});
 
const ARROW_RIGHT = document.addEventListener("keydown", (e) =>
{
    if(e.code === "ArrowRight" || e.keyCode === 39)
    next(storyArr);
});

function next(storyArr)
{ 
    if(page < (storyArr.length -1))
    {
        page += 1
    }
    else
    {
        page = 0
    }
    POPUP_PAGE.innerHTML = storyArr[page]; 
    /*numer ++; if (numer > pages) numer =0;

    let plik = `<img src=\"img/${name}/${name}mini${numer}.jpg\">`;
    
    document.getElementById("mini-img").innerHTML = plik;
    */
}

// -----------------------------------------------------------------------------PREVIOUS PAGE
const PREVIOUS_MINI = document.querySelector(".popup__arrow--left");
PREVIOUS_MINI.addEventListener("click", function()
{
    previous(storyArr)
});

const ARROW_LEFT = document.addEventListener("keydown", (e) =>
{
    if(e.code === "ArrowLeft" || e.keyCode === 37)
    previous(storyArr)
});

function previous(storyArr)
{
    if(page > 0)
    {
        page -= 1
    }
    else
    {
        page = (storyArr.length -1)
    }
    POPUP_PAGE.innerHTML = storyArr[page];
}

// -----------------------------------------------------------------------------AUTHOR
const AUTHOR = document.querySelector(".author");
const AUTHOR_OPEN = document.querySelector(".navi__list-item--author");
const AUTHOR_CLOSE = document.querySelector(".author__close");

AUTHOR_OPEN.addEventListener("click", function ()
{
    openAuthor()
});

function openAuthor()
{
    AUTHOR.classList.remove("hidden")
    document.body.classList.add("lock-scroll")
}

// -----------------------------------------------------------------------------CLOSE AUTHOR

const ESCAPE_AUTHOR = document.addEventListener("keydown", (e) =>
{
    if (e.code === "Escape" || e.keyCode === 27)    
        closeAuthor();
});

AUTHOR_CLOSE.addEventListener("click", function ()
{
    closeAuthor();
});

function closeAuthor()
{
    AUTHOR.classList.add("fade-out")
    document.body.classList.remove("lock-scroll")
    setTimeout(() => {
        AUTHOR.classList.add("hidden")
        AUTHOR.classList.remove("fade-out")
    }, "700");
}

// -----------------------------------------------------------------------------TOUCHMOVE TEST

let startTouch 
let endTouch 

function show() {
    document.getElementById("menu").checked = true;
}

function hide() {
    document.getElementById("menu").checked = false;
}

addEventListener("touchstart", (event) => {
    startTouch = event.touches[0].clientX;
    return startTouch;
});

addEventListener("touchend", (event) => {

    endTouch = event.changedTouches[0].clientX;
    console.log("start touch X position", startTouch);
    console.log("end touch X position", endTouch);
    if(endTouch > (startTouch + 80))
    {
        hide();
    }
    if((startTouch > 920) && (startTouch > (endTouch + 100)))
    {
        show();
    }
});

/*      
        let Ystart
        let Yend

        Ystart = event.touches[0].clientY;  
        Yend = event.changedTouches[0].clientY; 

        console.log("start touch Y position", Ystart);
        console.log("end touch Y position",Yend);
*/

