let input = document.querySelectorAll("input");
// input[0].value = 43;

let time = new Date();
console.log(time);
console.log(time.getHours())

function liveTime(){
    input[0].value = time.getHours();
    input[1].value = time.getMinutes();
    input[2].value = time.getSeconds();
    console.log(time.getSeconds());
};

setInterval(()=>{
    liveTime();
    console.log("hii");
},1000)
// liveTime();

