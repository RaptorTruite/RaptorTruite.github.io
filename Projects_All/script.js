const projectAnchor = document.querySelectorAll(".project");

for (let i = 0; i < projectAnchor.length; i++)
{
    projectAnchor[i].addEventListener("click", () => 
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
                    window.location.href = "../Project_Blossom/index.html";
                    break;    
                }
                default:
                {
                    window.location.href = "../Project_Template/index.html";
                }
        }
    });
}