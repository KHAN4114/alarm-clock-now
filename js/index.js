const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function timer() {
    const elHour = document.querySelector(".hour");
    const elMinute = document.querySelector(".minute");
    const elSecond = document.querySelector(".second");

    const elDay = document.querySelector(".day");
    const elMonth = document.querySelector(".month");
    const elYear = document.querySelector(".year");

    const nowDate = new Date();

    const today = nowDate.getDay();
    const month = nowDate.getMonth();
    const year = nowDate.getFullYear();

    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();

    elYear.textContent = year;
    elMonth.textContent = months[month];
    elDay.textContent = daysInWeek[today];

    elHour.textContent = hours < 10 ? `0${hours}` : hours;
    elMinute.textContent = minutes < 10 ? `0${minutes}` : minutes;;
    elSecond.textContent = seconds < 10 ? `0${seconds}` : seconds;;
}

timer()

setInterval(()=> {
    timer()
})
