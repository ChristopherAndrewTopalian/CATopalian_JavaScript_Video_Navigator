// loadRecord.js

function loadRecord()
{
    let script = ce('script');

    script.onload = function()
    {
        printRecords();
    };

    script.src = nameOfRecords;

    document.getElementsByTagName('head')[0].append(script);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

