const NUMBER_OF_MEMBERS = 7;

const ARRAY_PREFIX = ["입대까지", "전역까지", "전역까지", "발표까지", "발표까지", "발표까지", "휴가까지"]
const ARRAY_NAMES = ["팽지원", "허채민", "예지민", "이성민", "김형빈", "심우재", "허채민"];
const ARRAY_DATES = ["Mar 20, 2023 14:00:00", "Apr 3, 2024 00:00:00", "Jul 29, 2024 00:00:00", "Feb 15, 2023 10:00:00", "Feb 15, 2023 10:00:00", "Feb 23, 2023 10:00:00", "Feb 16, 2023 00:00:00"];

let PAGE_YOURE_LOOKING_AT = 0;

document.body.onload = init;

function addElements()
{
    for (let i = 0; i < NUMBER_OF_MEMBERS; i++)
    {
        addElement(i);
    }
}

// 하나의 객체를 로딩시키는 함수-------------------------------------------------------------

function addElement(number)
{
    const newDiv = document.createElement("h2");
    const newContent = document.createTextNode("test text");

    newDiv.appendChild(newContent);
    newDiv.setAttribute("id", "timeDisplayer" + number);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("bottomdiv");
    document.getElementById("wrapper").insertBefore(newDiv, currentDiv);

    const countDownDate = new Date(ARRAY_DATES[number]).getTime();

    const x = setInterval(function() {
        
        let now = new Date().getTime();
        
        let distance = countDownDate - now;
        
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let miliseconds = Math.floor((distance % 1000) / 10);
        if (days < 10) days = "00" + days;
        else if (days < 100) days = "0" + days;
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        if (miliseconds < 10) miliseconds = "0" + miliseconds;
        
        let timerContent = days + "일 " + hours + "시간 " + minutes + "분 " + seconds + "." + miliseconds + "초";
        timerContent = ARRAY_NAMES[number] + " : " + ARRAY_PREFIX[number] + " " + timerContent;
        document.getElementById("timeDisplayer" + number).innerHTML = timerContent;
        
        if (distance < 0)
        {
            // clearInterval(x);
            document.getElementById("timeDisplayer" + number).innerHTML = "Rest In Peace.. ㅠㅠ";
        }
    }, 10);
}

function onButtonClick(buttonContent) {
    if (buttonContent == "타이머") PAGE_YOURE_LOOKING_AT = 0;
    else if (buttonContent == "당신이 지금 당장 백준을 해야하는 이유") PAGE_YOURE_LOOKING_AT = 1;
    else if (buttonContent == "순발력 게임") PAGE_YOURE_LOOKING_AT = 2;
    myRenderFunction();
}

function init() {
    const buttonList = document.querySelectorAll('.nav-buttons');
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener("click", function(event) {
            onButtonClick(event.target.innerHTML);
            // alert(event.target.innerHTML + "clicked!");
        });
    }
    myRenderFunction();
}

function myRenderFunction() {
    // what to do in this function
    // 1. delete all rendered elements
    // 2. add all new elements according to PAGE_YOURE_LOOKING_AT
    console.log("MYRENDERFUNCTION CALLED WITH PAGE=" + PAGE_YOURE_LOOKING_AT);
    document.getElementById("screen").replaceChildren();

    if (PAGE_YOURE_LOOKING_AT == 0) renderTimer();
    else if (PAGE_YOURE_LOOKING_AT == 1) renderBOJ();
    else if (PAGE_YOURE_LOOKING_AT == 2) renderTimerGame();
}

/*
<div class = "wrapper" id="gameWrapper">
    <h2 id="timerDisplayer"><h2>
    <button>시작하기</button>
    <button>정지!</button>
</div>
*/

function renderTimerGame() {
    
    // wrapper 추가
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("class", "wrapper");
    wrapperElement.setAttribute("id", "wrapper");
    document.getElementById("screen").insertBefore(wrapperElement, null);

    // h1추가
    const tempElement = document.createElement("h1");
    const tempElementContent = document.createTextNode("work in progress");
    tempElement.appendChild(tempElementContent);
    document.getElementById("wrapper").insertBefore(tempElement, null);
}


/* <div class = "wrapper" id="wrapper">
    <h3>나도 추가됐으면 좋겠다 -> 연락주세요~</h3>
    <div id="bottomdiv"></div>
</div> */
function renderTimer() {

    // wrapper 추가
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("class", "wrapper");
    wrapperElement.setAttribute("id", "wrapper");
    document.getElementById("screen").insertBefore(wrapperElement, null);
    
    // h3 추가
    const h3Element = document.createElement("h3");
    const h3ElementContent = document.createTextNode("나도 추가됐으면 좋겠다 -> 연락주세요~");
    h3Element.appendChild(h3ElementContent);
    document.getElementById("wrapper").insertBefore(h3Element, null);
    
    // botdiv 추가
    const botDivElement = document.createElement("div");
    botDivElement.setAttribute("id", "bottomdiv");
    document.getElementById("wrapper").insertBefore(botDivElement, null);

    addElements();
}

/*<div class = "wrapper" id="youtube-wrapper">
    <h1>당신이 지금 당장 백준을 해야하는 이유</h1>
    <iframe width="480" height="270" src="https://www.youtube.com/embed/saVwTNb1wzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>*/
function renderBOJ() {
    // wrapper 추가
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("class", "wrapper");
    wrapperElement.setAttribute("id", "youtube-wrapper");
    document.getElementById("screen").insertBefore(wrapperElement, null);

    // h1추가
    const h1Element = document.createElement("h1");
    const h1ElementContent = document.createTextNode("당신이 지금 당장 백준을 해야하는 이유");
    h1Element.appendChild(h1ElementContent);
    document.getElementById("youtube-wrapper").insertBefore(h1Element, null);

    // iframe추가
    const iframeElement = document.createElement("iframe");
    iframeElement.setAttribute("width", "480");
    iframeElement.setAttribute("height", "270");
    iframeElement.setAttribute("src", "https://www.youtube.com/embed/saVwTNb1wzk");
    iframeElement.setAttribute("title", "YouTube video player");
    iframeElement.setAttribute("frameborder", "0");
    iframeElement.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    document.getElementById("youtube-wrapper").insertBefore(iframeElement, null);
}