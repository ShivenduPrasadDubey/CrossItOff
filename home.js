function getCookie(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");

    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
            return unescape(y);
        }
     }
}
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
if (minutes < 10){
minutes = "0" + minutes
}
document.getElementById('time').innerHTML=hours + ":" + minutes + " ";
if(hours > 11){
    document.getElementById('ampm').innerHTML="PM";
} else {
    document.getElementById('ampm').innerHTML="AM"
}
var nam = localStorage.getItem('current');
if(hours<12){
    document.getElementById('greet').innerHTML="Good Morning "+nam;
} else if(hours<16 && hours>12 || hours==16){
    document.getElementById('greet').innerHTML="Good Afternoon "+nam;
}
else if(hours>16 && hours<19 || hours==12){
    document.getElementById('greet').innerHTML="Good Afternoon "+nam;
} 
else {
    document.getElementById('greet').innerHTML="Good Night "+nam;
}

document.getElementById('text').innerHTML=nam;

