// reportTextArea.js

function reportTextArea()
{
    var myText = "";

    myText += "<textarea style = 'width:98%; height: 98%; background-color: rgb(40, 40, 40); color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'>";

    myText  += "records = [\n { ";

    for(var i = 0; i < records.length; i++)
    {
        myText += "\n";
        myText += "\"recordId\":" + '\"' + records[i].recordId+'\",';

        myText += '\n';
        myText += "\"start\":" + '\"' + records[i].start+'\",';

        myText += '\n';
        myText += "\"end\":" + '\"' + records[i].end+'\",';

        myText += '\n';
        myText += "\"startMins\":" + JSON.stringify(records[i].startMins) + ",";

        myText += '\n';
        myText += "\"endMins\":" + JSON.stringify(records[i].endMins) + ",";

        myText += '\n';
        myText += "\"note\":" + JSON.stringify(records[i].note) + ",";

        myText += '\n';
        myText += "\"words\":" + JSON.stringify(records[i].words) + ",";

        myText += '\n';
        myText += "\"conclusion\":" + JSON.stringify(records[i].conclusion);

        myText += '\n},\n{';
    }
    myText += '\n} ];';

    let newWindow = window.open("", "test", "left = 10 top = 10 width = 1200, height = 600, scrollbars = 1, resizable = 1", true);

    newWindow.document.open();
    newWindow.document.write(myText);
    newWindow.document.close();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

