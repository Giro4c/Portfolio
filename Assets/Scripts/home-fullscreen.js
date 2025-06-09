// Video Management
const video = document.getElementById("home-video");
const videoContainer = document.getElementById("home-video-container");
const backupBackground = document.getElementById("split-background");

var sources = video.querySelectorAll('source');

if (sources.length !== 0) {
    var lastSource = sources[sources.length-1];

    lastSource.addEventListener('error', function() {
        // Show backup background
        backupBackground.classList.remove('hidden')
        // Remove video from document
        videoContainer.remove();
        // Debug message
        console.log('Video failed to load, replaced with backup background.')
    });
}

/* Get the element you want displayed in fullscreen mode (a video in this example): */
var body = document.documentElement;


/* View in fullscreen */
function openFullscreen() {
    console.log('Try Enter fullscreen mode.');
    if (body.requestFullscreen) {
        body.requestFullscreen();
    } else if (body.webkitRequestFullscreen) { /* Safari */
        body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) { /* IE11 */
        body.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

function toggleFullscreen(){
    if (document.fullscreenElement) { // Is in fullscreen, must close
        closeFullscreen();
    } else { // Is not in fullscreen, must open
        openFullscreen();
    }
}


document.addEventListener('fullscreenchange', function(event) {
    if (document.fullscreenElement) {
        console.log('Entered fullscreen mode.');
    } else {
        console.log('Exited fullscreen mode.');
    }
});
