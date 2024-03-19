// discord_id() funct
function discord_id()
{
    // Local var data type assignment
    var txt1 = "retr0.bat";
    var txt2 = "Discord";
    var elem = document.getElementById("demo");

    // switch-loop for elem.innerHTML
    switch (elem.innerHTML)
    {
        // if elem.innerHTML = Discord
        // ? This is for changing from the "Discord" to ID
        case txt2 :
            elem.innerHTML = txt1;
            break;
        
        // if elem.innerHTML = retr0#3244
        // ? This is for changing back from ID to "Discord" when clicked again
        case txt1 : 
            elem.innerHTML = txt2;
            break;

        // this is likely not needed, placeholder.
        default : 
            elem.innerHTML = "error!";
            break;
    }
}

// dark_mode() funct
function dark_mode()
{
    // Local var data type assignment
    var element = document.body;

    // toggle to .dark-mode in second.bundle.css
    // ? When clicked again it should return to default css style
    element.classList.toggle("dark-mode");
    element.classList.toggle("dark-mode-markdown-body");
}