let input = document.querySelectorAll("input");
// input[0].value = 43;


function liveTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    input[0].value = hours;
    input[1].value = minutes;
    input[2].value = seconds;
    // console.log(time.getSeconds());
};

setInterval(()=>{
    liveTime();
    console.log("hii");
},1000)
// liveTime();

