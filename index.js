const countdown = function(){
    const countDate = new Date("december 30, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    

    //How the fuck does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate the shit
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    console.log(gap);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    if(gap > 4000){
        console.log("pay your fees");
    }
};
setInterval(countdown, 1000);
