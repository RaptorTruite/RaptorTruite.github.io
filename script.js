let projectButtons = document.querySelectorAll(".projectButton");
let index = 0;
let interval = null;

const title = document.querySelector(".title");
const sections = document.querySelectorAll(".section");
let previousSection = -1;

if (projectButtons.length > 0)
{
    for(let i = 0; i < projectButtons.length; i++)
    {
        projectButtons[i].offsetWidth = projectButtons[i].children.offsetWidth;

        projectButtons[i].addEventListener("click", () => 
        {
            switch(i)
            {
                case 0:
                {
                    window.location.href = "./Project_Absolution/index.html";
                    break;
                }
                case 1:
                {
                    window.location.href = "./Project_Basile/index.html";
                    break;
                }
                case 2:
                {
                    window.location.href = "./Project_Blossom/index.html";
                    break;    
                }
                default:
                {
                    window.location.href = "./Project_Template/index.html";
                }
            }
            
        });

        projectButtons[i].addEventListener("mouseover", () =>
        {
            ChangeText(projectButtons[i], "en savoir plus");
        });
        
        projectButtons[i].addEventListener("mouseleave", () =>
        {
            projectButtons[i].textContent = "+";
            clearTimeout(interval);
            index = 0;
        });
    }
}

function ChangeText(buttonText, targetWord, speed = 25)
{
    buttonText.textContent = targetWord.charAt(index);

    interval = setInterval( () => 
    {
        buttonText.textContent += targetWord.charAt(++index);
        if (index == targetWord.length)
        {
            clearInterval(interval);
            index = 0;
        }
    }, speed);
}

document.addEventListener("scroll", () =>
{
    for (let index = 0; index < sections.length; index++) 
{
    if(isInViewport(sections[index]))
    {
        switch (index)
        {
            case 0:
            {
                if (previousSection != 0)
                {
                    clearInterval(interval);
                    title.textContent = "";
                    previousSection = 0;
                }
                break;
            }
            case 1:
            {
                if (previousSection != 1)
                {
                    clearInterval(interval);
                    ChangeText(title,"A Propos");
                    previousSection = 1;
                }
                break;   
            }
            case 2:
            {
                if (previousSection != 2)
                {
                    clearInterval(interval);
                    ChangeText(title,"Mes Projets");
                    previousSection = 2;
                }
                break;    
            }
            case 3:
            {
                if (previousSection != 3)
                {
                    clearInterval(interval);
                    ChangeText(title,"Contact");
                    previousSection = 3;
                }
                break;
            }
            default:
                title.textContent = " ";
        }  
    }
}
});

function isInViewport(element) 
{
    let rect = element.getBoundingClientRect();
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    let rectTop = rect.top;
    let rectBottom = rect.bottom;
    let offset = (rect.height / 2);

    return (viewportHeight - rectTop >= offset && rectBottom > offset);
}