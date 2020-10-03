const lapDiv = document.getElementById('Lap');
const resetDiv = document.getElementById('Reset');
const playPauseDiv = document.getElementById('PlayPause');

let centiseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let displayCentiseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let watchInterval = null;
let playPause = false;

const stopwatch = () => {
    centiseconds++;
    if(centiseconds/100 === 1){
        centiseconds = 0;
        seconds++;
        
        if(seconds/60 === 1){
            seconds = 0;
            minutes++;

            if(minutes/60 === 1){
                minutes = 0;
                hours++;
            }
        }
    }
    if(centiseconds < 10){
        displayCentiseconds = "0" + centiseconds.toString();
    }else{
        displayCentiseconds = centiseconds.toString();
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }else{
        displaySeconds = seconds.toString();
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }else{
        displayMinutes = minutes.toString();
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }else{
        displayHours = hours.toString();
    }
    document.querySelector('.watch').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + "." + displayCentiseconds;
}



const handlePlayPause = () => {
    if (!playPause){
        watchInterval = window.setInterval(stopwatch, 10);
        document.getElementById('PlayPause').innerHTML = "Pause";
        playPause = !playPause;
    }else{
        window.clearInterval(watchInterval);
        document.getElementById('PlayPause').innerHTML = "Play";
        playPause = !playPause;
    }
}
playPauseDiv.addEventListener('click', handlePlayPause);


const handleReset = () => {
    window.clearInterval(watchInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    centiseconds = 0;
    document.querySelector('.watch').innerHTML = "00:00:00.00";
    playPause = false;
    document.getElementById('PlayPause').innerHTML = "Play/Pause";
    records = document.querySelector('.records').innerHTML = "";

}
resetDiv.addEventListener('click', handleReset);


const handleLap = () => {
    let records = document.querySelector('.records');
    const lap = document.createElement('h3');
    //console.log(lap);
    stopwatch();
    lap.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + "." + displayCentiseconds;
    records.appendChild(lap);
}
lapDiv.addEventListener('click', handleLap);