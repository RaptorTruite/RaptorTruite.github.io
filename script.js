let projectButton = document.getElementsByClassName("projectButton");
let index = 0;
let interval = null;

let title = document.querySelector(".title");
let section = document.getElementsByClassName("section");
let previousSection = -1;

if (projectButton.length > 0)
{
    for(let i = 0; i < projectButton.length; i++)
    {
        projectButton[i].offsetWidth = projectButton[i].children.offsetWidth;

        projectButton[i].addEventListener("click", () => 
        {
            switch(i)
            {
                case 0:
                {
                    window.location.href = "../Project_Absolution/index.html";
                    break;
                }
                case 1:
                {
                    window.location.href = "../Project_Basile/index.html";
                    break;
                }
                case 2:
                {
                    window.location.href = "../Project_Blossome/index.html";
                    break;    
                }
                default:
                {
                    window.location.href = "..7Project_Template/index.html";
                }
            }
            
        });

        projectButton[i].addEventListener("mouseover", () =>
        {
            ChangeText(projectButton[i], "en savoir plus");
        });
        
        projectButton[i].addEventListener("mouseleave", () =>
        {
            projectButton[i].textContent = "+";
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
    for (let index = 0; index < section.length; index++) 
{
    if(isInViewport(section[index]))
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