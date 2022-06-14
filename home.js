

function getTime() {
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[d.getDay()];
    var date = d.getDate();
    const time = day + ", " + month + date;
    const weekends="Yay, it is weekendsヾ(^▽^*)))";
    const weekday="Boo, it is a weekday ╥﹏╥..."
    document.getElementById("date").innerHTML=time;
    if(day==="Saturday" || day==="Sunday"){
        document.getElementById("date").style.color= "purple";
        document.getElementById("info").innerHTML=weekends;
        document.getElementById("info").style.color="#F15412";

    }else{
        document.getElementById("date").style.color= "darkblue";
        document.getElementById("info").innerHTML=weekday;
        document.getElementById("date").style.color= "#827397";
    }
}

