const TimeInterval = 10000;
let slideshows = document.getElementsByClassName("slideshow");
// console.log(slideshows.length);
let slides = new Map();
if (slideshows.length !== 0){
    // Initialize the slides ids
    for (let i = 0; i < slideshows.length; ++i){
        // Register slide
        slides.set(
            slideshows[i].id,
            {index: 0, handle: -1}
        );
        // console.log(slideshows[i].id);

        // Init display
        showSlides(0, slideshows[i].id);
    }
}
// console.log(slides);

function incrementSlides(id) {
    plusSlides(1, id);
}

function plusSlides(increment, id) {
    showSlides(slides.get(id).index += increment, id);
}

function showSlides(num, id) {
    // console.log(id);
    // console.log(slides.get(id));

    // Clear current timeout if exists
    if (slides.get(id).handle > -1){
        clearTimeout(slides.get(id).handle);
        // console.log("CLEAR timeout of slideshow")
    }
    else {
        // console.log("LEAVE timeout of slideshow")
    }

    // Get the slide container whose display to update
    let slideContainer = document.getElementById(id);
    // console.log(slideContainer)
    // The list of all the slides in the container
    let slideList = slideContainer.getElementsByClassName("slides");
    // console.log(slideList.length)

    // Check given slide index value
        // If the given slide index surpass the current number of slide, reset the index to start
    if (num >= slideList.length) {slides.get(id).index = 0;}
        // If the given slide index is bellow 0, reset the index to end
    else if (num < 0) {slides.get(id).index = slideList.length;}
        // Update the current slide index
    else {slides.get(id).index = num;}

    // Hide all slides in the container
    for (let i = 0; i < slideList.length; i++) {
        slideList[i].style.display = "none";
    }
    // Display the current slide
    slideList[slides.get(id).index].style.display = "block";

    // Save new timeout handle
    slides.get(id).handle = setTimeout(incrementSlides, TimeInterval, id); // Change image every 2 seconds
}