// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    loadRecord();

    // show current time of video
    ge("currentTimeTopLeft").textContent = ge("video1").currentTime;

    // when playing, show the current time of video
    ge("video1").addEventListener("timeupdate", function()
    {
        ge("currentTimeTopLeft").textContent = ge("video1").currentTime;
    }, false);

    //-//

    window.addEventListener("keydown", whichKeyPressed, false);

    fullReportCode();

    windowMaxCheck();

    window.addEventListener("resize", windowMaxCheck, false);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

