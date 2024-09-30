
const endDate = new Date("23 Sep, 2024 25:00:00").getTime();
const startDate = new Date().getTime();



let x = setInterval(function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    //time - milisec
    const distancePending = endDate - now;
    //calculate days, min ,hrs, sec
    // 1 day = 24* 60* 60* 1000ms
    const oneDaysInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60 * 60 * 1000);
    const oneMinInMillis = (60 * 1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distancePending / (oneDaysInMillis));
    const hrs = Math.floor((distancePending%(oneDaysInMillis)/ (oneHourInMillis)));
    const min = Math.floor((distancePending%(oneHourInMillis))/ (oneMinInMillis));
    const sec =  Math.floor((distancePending%(oneMinInMillis))/ (oneSecondInMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    //calculate width % for progresss bar
    const totalDistance = endDate - startDate;

    const percentageDistance = (distanceCovered/totalDistance)*100;

    //set width for progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending <0){
        clearInterval();
        document.getElementById("countdown").innerHTML = "12:00 PASS 1 MORE STEP NEAR TO OUR DEATH";
        document.getElementById("progress-bar").style.width = "100%";
    }


}, 1000);