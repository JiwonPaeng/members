const NUMBER_OF_MEMBERS = 3;

const ARRAY_PREFIX = ["입대까지", "전역까지", "휴가까지"]
const ARRAY_NAMES = ["팽지원", "허채민", "허채민"];
const ARRAY_DATES = ["Mar 20, 2023 14:00:00", "Apr 3, 2024 00:00:00", "Feb 16, 2023 00:00:00"];

document.body.onload = main;
function main()
{ 
    addElements();
}

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
    // const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, null);

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