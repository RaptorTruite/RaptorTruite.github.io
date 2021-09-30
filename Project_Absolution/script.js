const imgSources = ["img/Title.jpg", "img/Absolution_01.PNG"];
const backgroundImg = document.querySelector(".background");
let index = 0;
backgroundImg.style.backgroundImage = "url(" + imgSources[index] + ")";

Carousel(backgroundImg);

function Carousel(element)
{
    setInterval( () => 
    {
        index++;

        if (index > imgSources.length - 1)
            index = 0;

        setTimeout( () => {element.classList.add("out");}, 100);

        setTimeout( () => {
            element.classList.remove("out");
            element.style.backgroundImage = "url(" + imgSources[index] + ")";
            element.classList.add("in")
        }, 3000);
        
        setTimeout( () => {element.classList.remove("in");}, 6500);

    },10000);    
}

const modal = document.querySelector("#modal");
modal.style.display = "none";
const pics = document.querySelectorAll(".carouselItem");
const modalPic = document.querySelector("#img");     

if (pics.length > 0)
{
    for (let i = 0; i < pics.length; i++) {
        pics[i].addEventListener("click", () => 
        {
            let style = pics[i].currentStyle || window.getComputedStyle(pics[i], false);
            let bgImg = style.backgroundImage;
            let url = bgImg.substring(4, bgImg.length - 1);
            console.log(url);

            modal.style.display = "block";
            modalPic.style.backgroundImage = "url(" + url + ")";
        });
    }
}

const span = document.querySelector(".close");
span.onclick = ()=> {
    modal.style.display = "none"; 
    modalPic.style.backgroundImage = "none";
}

