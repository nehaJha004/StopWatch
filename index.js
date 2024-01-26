const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minuesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

//Converting seconds, minutes, hours, days
const second = 1000, 
    minute = 60 * second, 
    hour = 60 * minute, 
    day = 24 * hour;

const timerFunction = () => {

    //Generating Current State in mm/dd/yyyy
    let now = new Date(),
    dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth()+1).padStart(2,"0"),
    yyyy = now.getFullYear();
    
    //Taking Target Date from User
    const enterDay = prompt("Enter Day").padStart(2,"0");
    const enterMonth = prompt("Enter Month").padStart(2,"0");
    now = `${mm}/${dd}/${yyyy}`;
    let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;
    console.log(now);
    console.log(targetDate);

    //Checking if Date is for next year
    if(now > targetDate){
        console.log(`${enterMonth}/${enterDay}/${yyyy+1}`);
        targetDate= `${enterMonth}/${enterDay}/${yyyy + 1}`;
    }
    
    const intervalId = setInterval(() => {
    //Converting Target Date in mmilisecondss    
    const timer = new Date(targetDate).getTime();

    //Taking Current Date in miliseconds
    const today = new Date().getTime();

    //Finding Difference between targetDate and currentDate
    const difference = timer - today;
    
    //Finding Days , hours , and seconds
    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSeconds = Math.floor((difference % minute) / second);
    
    //Showing Timer in DOM
    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minuesElement.innerText = leftMinute;
    secondsElement.innerText = leftSeconds;

    //Stoping Set interval after reaching target Time
    if(difference<0){
        counterTimer.style.display = "none";
        heading.innerText = "Time's Up";
        clearInterval(intervalId);
    }
}, 0)
};


timerFunction();