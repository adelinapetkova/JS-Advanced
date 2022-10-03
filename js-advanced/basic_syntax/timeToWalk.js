function timeToWalk(steps, stepLengthInMeters, speedKmPerHour){
    let distanceInMeters=steps*stepLengthInMeters;
    let breaksInSeconds=Math.floor(distanceInMeters/500) * 60;
    let distanceInKm=distanceInMeters/1000;

    let neededTimeInHours=distanceInKm/speedKmPerHour;
    let seconds=neededTimeInHours*60*60+breaksInSeconds;

    let hh=Math.floor(seconds/3600);
    seconds%=3600;
    let mm=Math.floor(seconds/60);
    seconds%=60;
    let ss=Math.ceil(seconds);

    if (hh < 10) {hh = "0"+hh;}
    if (mm < 10) {mm = "0"+mm;}
    if (ss < 10) {ss = "0"+ss;}

    let t = hh+":"+mm+":"+ss;
    console.log(t);
}

timeToWalk(2564, 0.70, 5.5)