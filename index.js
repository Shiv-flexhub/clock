setInterval(()=> {
    d= new Date();
    hrs=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    hrotation= 30*hrs + min/2;
    mrotation= 6*min;
    srotation= 6*sec;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
}, 1000);
