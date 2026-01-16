// fullReportCodeNewWindow.js

function fullReportCodeNewWindow()
{
    let mytext = "";

    mytext += ("records = " + JSON.stringify(records, null, ' ') + ";");

    let newWindow = window.open("", "test", "left = 10 top = 10 width = 1200, height = 600, scrollbars = 1, resizable = 1", true);

    newWindow.document.open();

    newWindow.document.write(mytext);

    newWindow.document.close();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

