let imgSources = ["img/placeholder.jpg", "img/placeholder_2.jpg", "img/placeholder_3.jpg"];
let backgroundImg = document.getElementsByClassName("background");
let index = 0;

if (backgroundImg.length > 0)
{
    Carousel(backgroundImg[0]);
}

function Carousel (element)
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
