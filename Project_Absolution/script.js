let imgSources = ["img/Title.jpg"];
let backgroundImg = document.getElementsByClassName("background");
let index = 0;
backgroundImg[0].style.backgroundImage = "url(" + imgSources[index] + ")";

if (backgroundImg.length > 0 && imgSources.length > 1)
{
    Carousel(backgroundImg[0]);
}

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
