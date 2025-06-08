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
