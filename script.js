let projectButton = document.getElementsByClassName("projectButton");
let targetWord = "en savoir plus";
let index = 0;
let interval = null;

if (projectButton.length > 0)
{

    for(let i = 0; i < projectButton.length; i++)
    {
        projectButton[i].offsetWidth = projectButton[i].children.offsetWidth;

        projectButton[i].addEventListener("mouseover", () =>
        {
            projectButton[i].textContent = targetWord.charAt(index);
            ChangeText(projectButton[i]);
        });
        
        projectButton[i].addEventListener("mouseleave", () =>
        {
            projectButton[i].textContent = "+";
            clearTimeout(interval);
            index = 0;
        });
        }
}

function ChangeText(buttonText)
{
    interval = setInterval( () => 
    {
        buttonText.textContent += targetWord.charAt(++index);
        if (index == targetWord.length)
        {
            clearInterval(interval);
            index = 0;
        }
    }, 10);
}

