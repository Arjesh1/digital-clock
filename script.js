function displayTime(){

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

   let dateTime = new Date();
   let hrs = dateTime.getHours();
   let min = dateTime.getMinutes();
   let sec = dateTime.getSeconds();
   let session = document.getElementById('session');
   
   let year = dateTime.getFullYear()
   let month = dateTime.getMonth()
   let date = dateTime.getDate()
   let day = days[dateTime.getDay()]


    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
    document.getElementById('year').innerHTML=year
    document.getElementById('month').innerHTML=month
    document.getElementById('date').innerHTML=date
    document.getElementById('day').innerHTML=day
}
setInterval(displayTime, 10);
