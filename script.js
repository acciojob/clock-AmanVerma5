//your JS code here. If required.
let timer=document.getElementById("timer");

function changeTime(){
	let date=new Date();
	timer.innerText=date;
}
setInterval(changeTime,1000);