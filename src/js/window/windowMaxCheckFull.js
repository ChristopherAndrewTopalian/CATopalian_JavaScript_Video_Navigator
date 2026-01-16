// windowMaxCheckFull.js

// fill the screen with the video - resizes video to available screen width
function windowMaxCheckFull()
{
    let windowWidthMax = screen.availWidth - window.innerWidth === 0;

    if (!windowWidthMax)
    {
        alert("Maximize Your Window.");

        ge("video1").style.width = screen.availWidth;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

