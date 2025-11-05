// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    mainDiv.style.height = '100vh';
    ba(mainDiv);

    //-//

    let leftContainer = ce('div');
    leftContainer.id = 'leftContainer';
    leftContainer.style.position = 'fixed';
    leftContainer.style.top = '0px';
    leftContainer.style.left = '0px';
    leftContainer.style.width = '300px';
    leftContainer.style.height = '100vh';
    leftContainer.style.display = 'flex';
    leftContainer.style.flexDirection = 'column';
    leftContainer.style.zIndex = '1000';
    mainDiv.append(leftContainer);

    //-//

    let rightContainer = ce('div');
    rightContainer.id = 'rightContainer';
    rightContainer.style.marginLeft = '360px'; 
    rightContainer.style.display = 'flex';
    rightContainer.style.flexDirection = 'column';
    mainDiv.append(rightContainer);

    //-//

    let theVideo = ce('video');
    theVideo.id = 'video1';
    theVideo.className = 'videoLook';
    theVideo.controls = true;
    theVideo.src = "src/media/videos/Vice President Harris on the Inflation Reduction Act.mp4";
    theVideo.style.width = '100%'; // fills container width
    leftContainer.append(theVideo);

    //-//

    let currentTimeTopLeftDiv = ce('div');
    currentTimeTopLeftDiv.id = 'currentTimeTopLeft';
    currentTimeTopLeftDiv.className = 'currentTimeStyle';
    currentTimeTopLeftDiv.title = 'Current Time of Video';
    rightContainer.append(currentTimeTopLeftDiv);

    //-//

    let continueButton = ce('button');
    continueButton.id = 'continueButton';
    continueButton.className = 'videoButtons';
    continueButton.title = 'continueVideo(\'video1\')'; // note the escaping quotes
    continueButton.textContent = 'Plays to End';
    continueButton.onclick = function()
    {
        continueVideo();
    };
    rightContainer.append(continueButton);

    //-//

    let skipContainer = ce('div');
    skipContainer.style.display = 'flex';
    skipContainer.style.flexDirection = 'row';
    rightContainer.append(skipContainer);

    //-//

    let backButton = ce('button');
    backButton.id = 'back2SecondsButton100';
    backButton.className = 'videoButtons skipColor';
    backButton.title = 'back2Seconds(StartTimeEntered, EndTimeEntered, \'video1\', 1.0)';
    backButton.textContent = '<= 100%';
    backButton.onclick = function()
    {
        back2Seconds(StartTimeEntered, EndTimeEntered, 'video1', 1.0);
    };
    skipContainer.append(backButton);

    //-//

    let backButton50 = ce('button');
    backButton50.id = 'back2SecondsButton50';
    backButton50.className = 'videoButtons skipColor';
    backButton50.title = 'back2Seconds(StartTimeEntered, EndTimeEntered, \'video1\', 0.5)';
    backButton50.textContent = '<= 50%';
    backButton50.onclick = function()
    {
        back2Seconds(StartTimeEntered, EndTimeEntered, 'video1', 0.5);
    };
    skipContainer.append(backButton50);

    //-//

    let forwardButton50 = ce('button');
    forwardButton50.id = 'forward2SecondsButton50';
    forwardButton50.className = 'videoButtons skipColor';
    forwardButton50.title = 'forward2Seconds(StartTimeEntered, EndTimeEntered, \'video1\', 0.5)';
    forwardButton50.textContent = '=> 50%';
    forwardButton50.onclick = function()
    {
        forward2Seconds(StartTimeEntered, EndTimeEntered, 'video1', 0.5);
    };
    skipContainer.append(forwardButton50);

    //-//

    let forwardButton100 = ce('button');
    forwardButton100.id = 'forward2SecondsButton100';
    forwardButton100.className = 'videoButtons skipColor';
    forwardButton100.title = 'forward2Seconds(StartTimeEntered, EndTimeEntered, \'video1\', 1.0)';
    forwardButton100.textContent = '=> 100%';
    forwardButton100.onclick = function()
    {
        forward2Seconds(StartTimeEntered, EndTimeEntered, 'video1', 1.0);
    };
    skipContainer.append(forwardButton100);

    //-//

    // startContainer
    let startContainer = ce('div');
    startContainer.style.display = 'flex';
    startContainer.style.flexDirection = 'row';
    rightContainer.append(startContainer);

    //-//

    let markStartBtn = ce('button');
    markStartBtn.id = 'markStartVideoButton';
    markStartBtn.className = 'videoButtons';
    markStartBtn.title = 'markStartVideo()';
    markStartBtn.style.width = '80px';
    markStartBtn.textContent = '🕑Start';
    markStartBtn.onclick = function()
    {
        markStartVideo();
    };
    startContainer.append(markStartBtn);

    //-//

    let decreaseBtn = ce('button');
    decreaseBtn.id = 'decreaseItStartButton';
    decreaseBtn.className = 'videoButtons';
    decreaseBtn.title = 'decreaseItStart()';
    decreaseBtn.textContent = '▼';
    decreaseBtn.onclick = function()
    {
        decreaseItStart();
    };
    startContainer.append(decreaseBtn);

    //-//

    let increaseBtn = ce('button');
    increaseBtn.id = 'increaseItStartButton';
    increaseBtn.className = 'videoButtons';
    increaseBtn.title = 'increaseItStart()';
    increaseBtn.textContent = '▲';
    increaseBtn.onclick = function()
    {
        increaseItStart();
    };
    startContainer.append(increaseBtn);

    //-//

    let startInput = ce('input');
    startInput.id = 'startInput';
    startInput.type = 'text';
    startInput.title = 'setStartTime()';
    startInput.style.width = '100px';
    startInput.value = '00:00:00';
    startInput.onchange = function()
    {
        setStartTime();
    };
    startContainer.append(startInput);

    //-//

    let endContainer = ce('div');
    endContainer.style.display = 'flex';
    endContainer.flexDirection = 'row';
    rightContainer.append(endContainer);

    //-//

    let markEndBtn = ce('button');
    markEndBtn.id = 'markEndVideoButton';
    markEndBtn.className = 'videoButtons';
    markEndBtn.title = "markEndVideo('video1')";
    markEndBtn.style.width = '80px';
    markEndBtn.textContent = 'End🕔';
    markEndBtn.onclick = function()
    {
        markEndVideo();
    };
    endContainer.append(markEndBtn);

    //-//

    let decreaseEndBtn = ce('button');
    decreaseEndBtn.id = 'decreaseItEndButton';
    decreaseEndBtn.className = 'videoButtons';
    decreaseEndBtn.title = 'decreaseItEnd()';
    decreaseEndBtn.textContent = '▼';
    decreaseEndBtn.onclick = function()
    {
        decreaseItEnd();
    };
    endContainer.append(decreaseEndBtn);

    //-//

    let increaseEndBtn = ce('button');
    increaseEndBtn.id = 'increaseItEndButton';
    increaseEndBtn.className = 'videoButtons';
    increaseEndBtn.title = 'increaseItEnd()';
    increaseEndBtn.textContent = '▲';
    increaseEndBtn.onclick = function()
    {
        increaseItEnd();
    };
    endContainer.append(increaseEndBtn);

    //-//

    let endInput = ce('input');
    endInput.id = 'endInput';
    endInput.type = 'text';
    endInput.title = 'setEndTime()';
    endInput.style.width = '100px';
    endInput.value = '00:00:00';
    endInput.onchange = function()
    {
        setEndTime();
    };
    endContainer.append(endInput);

    //-//

    let playContainer = ce('div');
    playContainer.style.display = 'flex';
    playContainer.style.flexDirection = 'row';
    rightContainer.append(playContainer);

    //-//

    let playVideo100Btn = ce('button');
    playVideo100Btn.id = 'playVideo100Button';
    playVideo100Btn.className = 'playButtons';
    playVideo100Btn.title = 'playVideo(StartTimeEntered, EndTimeEntered, \'video1\', 1.0 )';
    playVideo100Btn.textContent = '▶ 100%';
    playVideo100Btn.onclick = function()
    {
        playVideoMAIN(StartTimeEntered, EndTimeEntered, 'video1', 1.0);
    };
    playContainer.append(playVideo100Btn);

    //-//

    let playVideo50Btn = ce('button');
    playVideo50Btn.id = 'playVideo50Button';
    playVideo50Btn.className = 'playButtons';
    playVideo50Btn.title = 'playVideo(StartTimeEntered, EndTimeEntered, \'video1\', 0.5 )';
    playVideo50Btn.textContent = '▶ 50%';
    playVideo50Btn.onclick = function()
    {
        playVideoMAIN(StartTimeEntered, EndTimeEntered, 'video1', 0.5);
    };
    playContainer.append(playVideo50Btn);

    //-//

    let playVideo25Btn = ce('button');
    playVideo25Btn.id = 'playVideo25Button';
    playVideo25Btn.className = 'playButtons';
    playVideo25Btn.title = 'playVideo(StartTimeEntered, EndTimeEntered, \'video1\', 0.25 )';
    playVideo25Btn.textContent = '▶ 25%';
    playVideo25Btn.onclick = function()
    {
        playVideoMAIN(StartTimeEntered, EndTimeEntered, 'video1', 0.25);
    };
    playContainer.append(playVideo25Btn);

    //-//

    let noteTextarea = ce('textarea');
    noteTextarea.id = 'noteInput';
    noteTextarea.placeholder = 'Write Notes';
    noteTextarea.style.width = '350px';
    noteTextarea.style.minHeight = '50px';
    noteTextarea.onkeyup = function()
    {
        setNote();
    };
    rightContainer.append(noteTextarea);

    //-//

    let wordsTextarea = ce('textarea');
    wordsTextarea.id = 'wordsInput';
    wordsTextarea.placeholder = 'Write Words Spoken';
    wordsTextarea.style.width = '350px';
    wordsTextarea.style.minHeight = '50px';
    wordsTextarea.onkeyup = function()
    {
        setWords();
    };
    rightContainer.append(wordsTextarea);

    //-//

    let conclusionTextarea = ce('textarea');
    conclusionTextarea.id = 'conclusionInput';
    conclusionTextarea.placeholder = 'Write Conclusion';
    conclusionTextarea.style.width = '350px';
    conclusionTextarea.style.minHeight = '50px';
    conclusionTextarea.onkeyup = function()
    {
        setConclusion();
    };
    rightContainer.append(conclusionTextarea);

    //-//

    let currentTimeBtn = ce('button');
    currentTimeBtn.className = 'videoButtons';
    currentTimeBtn.id = 'videoCurrentTimeToLastEntry';
    currentTimeBtn.title = 'videoCurrentTimeToLastEntry';
    currentTimeBtn.textContent = 'Current Time to Last Entry';
    currentTimeBtn.onclick = function()
    {
        videoCurrentTimeToLastEntry();
    };
    rightContainer.append(currentTimeBtn);

    //-//

    let clearTextBtn = ce('button');
    clearTextBtn.className = 'videoButtons myVideoButtonSmaller';
    clearTextBtn.id = 'clearTextButton';
    clearTextBtn.title = 'clearText()';
    clearTextBtn.textContent = 'Clear All Text ⌦';
    clearTextBtn.onclick = function()
    {
        clearText();
    };
    rightContainer.append(clearTextBtn);

    //-//

    let volumeDetails = ce('details');
    rightContainer.append(volumeDetails);

    //-//

    let summary = ce('summary');
    summary.className = 'summaryStyle';
    summary.textContent = 'VOLUME';
    volumeDetails.append(summary);

    //-//

    let soundIcon = ce('font');
    soundIcon.className = 'fontColor';
    soundIcon.textContent = '🔊';
    volumeDetails.append(soundIcon);

    // define volume buttons data
    let volumeButtonsData = [
    { id: 'volume100Button', label: '100', volume: 1.0, title: 'setVolume(1.0)' },
    { id: 'volume50Button', label: '50', volume: 0.5, title: 'setVolume(0.5)' },
    { id: 'volume25Button', label: '25', volume: 0.25, title: 'setVolume(0.25)' },
    { id: 'volume15Button', label: '15', volume: 0.15, title: 'setVolume(0.15)' },
    { id: 'volume5Button', label: '5', volume: 0.05, title: 'setVolume(0.05)' },
    { id: 'volume0Button', label: '🔇', volume: 0.0, title: 'setVolume(0.0)' }
    ];

    //-//

    for (let i = 0; i < volumeButtonsData.length; i++)
    {
        let btnData = volumeButtonsData[i];
        let btn = ce('button');
        btn.id = btnData.id;
        btn.className = 'videoButtons';
        btn.title = btnData.title;
        btn.textContent = btnData.label;
        btn.onclick = (function(volume)
        {
            return function()
            {
                setVolume(volume);
            };
        })(btnData.volume);
        volumeDetails.append(btn);
    }

    //-//

    let timeCodeDiv = ce('div');
    timeCodeDiv.className = 'timeCode';
    timeCodeDiv.id = 'theStartMinutes2';
    timeCodeDiv.textContent = '00:00:00';
    rightContainer.append(timeCodeDiv);

    //-//

    let endTimeCodeDiv = ce('div');
    endTimeCodeDiv.className = 'timeCode';
    endTimeCodeDiv.id = 'theEndMinutes2';
    endTimeCodeDiv.textContent = '00:00:00';
    rightContainer.append(endTimeCodeDiv);

    //-//

    let displayNoteDiv = ce('div');
    displayNoteDiv.className = 'displayNote';
    displayNoteDiv.id = 'displayNote';
    displayNoteDiv.textContent = 'Note Info';
    rightContainer.append(displayNoteDiv);

    //-//

    let displayWordsDiv = ce('div');
    displayWordsDiv.className = 'displayWords';
    displayWordsDiv.id = 'displayWords';
    displayWordsDiv.textContent = 'Words Said';
    rightContainer.append(displayWordsDiv);

    //-//

    let displayConclusionDiv = ce('div');
    displayConclusionDiv.className = 'displayConclusion';
    displayConclusionDiv.id = 'displayConclusion';
    displayConclusionDiv.textContent = 'Conclusion';
    rightContainer.append(displayConclusionDiv);

    //-//

     rightContainer.append(ce('hr'));

    //-//

    let addRecordBtn = ce('button');
    addRecordBtn.id = 'addRecordButton';
    addRecordBtn.title = 'addRecord()';
    addRecordBtn.textContent = 'Add Record Ѫ';
    addRecordBtn.onclick = function()
    {
        addRecord();
    };
    rightContainer.append(addRecordBtn);

    //-//

    rightContainer.append(ce('hr'));

    //-//

    let displayCountBtn = ce('button');
    displayCountBtn.className = 'addRecordButton';
    displayCountBtn.id = 'displayCount';
    displayCountBtn.align = 'left';
    displayCountBtn.title = 'Total # of Records';
    displayCountBtn.textContent = '';
    displayCountBtn.onclick = function()
    {
        addRecord();
    };
    rightContainer.append(displayCountBtn);

    //-//

    let jsonDownloadBtn = ce('button');
    jsonDownloadBtn.id = 'jsonDownloadButton';
    jsonDownloadBtn.className = 'videoButtons';
    jsonDownloadBtn.value = 'download';
    jsonDownloadBtn.title = 'jsonDownload(records)';
    jsonDownloadBtn.textContent = '⎙ Download Records';
    jsonDownloadBtn.onclick = function()
    {
        jsonDownload();
    };
    rightContainer.append(jsonDownloadBtn);

    //-//

    let downloadAnchor = ce('a');
    downloadAnchor.id = 'downloadAnchorElem';
    downloadAnchor.style.display = 'none';
    rightContainer.append(downloadAnchor);

    //-//

    let fullReportBtn = ce('button');
    fullReportBtn.className = 'videoButtons';
    fullReportBtn.id = 'fullReportNewWindowButton';
    fullReportBtn.title = 'fullReportCodeNewWindow()';
    fullReportBtn.textContent = 'Report to New Window - Unformatted';
    fullReportBtn.onclick = function()
    {
        fullReportCodeNewWindow();
    };
    rightContainer.append(fullReportBtn);

    //-//

    let reportAreaBtn = ce('button');
    reportAreaBtn.className = 'videoButtons';
    reportAreaBtn.id = 'reportAreaId';
    reportAreaBtn.title = 'reportTextArea()';
    reportAreaBtn.textContent = 'Report to New Window - Formatted (Editable)';
    reportAreaBtn.onclick = function()
    {
        reportTextArea();
    };
    rightContainer.append(reportAreaBtn);

    //-//

    let fullReportCodeBtn = ce('button');
    fullReportCodeBtn.className = 'videoButtons';
    fullReportCodeBtn.id = 'fullReportCodeButton';
    fullReportCodeBtn.title = 'fullReportCode()';
    fullReportCodeBtn.textContent = 'Report to Console (Press F12)';
    fullReportCodeBtn.onclick = function()
    {
        fullReportCode();
    };
    rightContainer.append(fullReportCodeBtn);

    //-//

    let deleteRecordInput = ce('input');
    deleteRecordInput.id = 'deleteRecordInput';
    deleteRecordInput.type = 'number';
    deleteRecordInput.title = 'deleteThisRecord(i)';
    deleteRecordInput.min = 0;
    deleteRecordInput.style.width = '100px';
    rightContainer.append(deleteRecordInput);

    //-//

    let deleteRecordBtn = ce('button');
    deleteRecordBtn.className = 'videoButtons';
    deleteRecordBtn.id = 'deleteThisRecordButton';
    deleteRecordBtn.title = 'deleteThisRecord()';
    deleteRecordBtn.textContent = 'Record # to Delete';
    deleteRecordBtn.onclick = function()
    {
        deleteThisRecord();
    };
    rightContainer.append(deleteRecordBtn);

    //-//

    let clearAllRecordsBtn = ce('button');
    clearAllRecordsBtn.className = 'videoButtons';
    clearAllRecordsBtn.id = 'clearAllRecordsButton';
    clearAllRecordsBtn.title = 'clearAllRecords()';
    clearAllRecordsBtn.textContent = 'Clear All Records';
    clearAllRecordsBtn.onclick = function()
    {
        clearAllRecords();
    };
    rightContainer.append(clearAllRecordsBtn);

    //-//

    let displayDeletedRecordDiv = ce('div');
    displayDeletedRecordDiv.className = 'note';
    displayDeletedRecordDiv.id = 'displayDeletedRecord';
    ba(displayDeletedRecordDiv);

    //-//

    let showReverseOrderBtn = ce('button');
    showReverseOrderBtn.className = 'videoButtons';
    showReverseOrderBtn.id = 'showReverseOrderButton';
    showReverseOrderBtn.title = 'showReverseOrder()';
    showReverseOrderBtn.textContent = 'Reverse Record Order';
    showReverseOrderBtn.onclick = function() {
        showReverseOrder();
    };
    rightContainer.append(showReverseOrderBtn);

    //-//

    let displayRecordDiv = ce('div');
    displayRecordDiv.id = 'displayRecord';
    rightContainer.append(displayRecordDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

