const track = document.querySelector('.slider-track');
const images = document.querySelectorAll('.slider-track img');
const visible = 3; // number of images visible
let index = 0;

function slide() {
    index++;
    if (index > images.length - visible) {
        index = 0; // reset back to start
    }
    track.style.transform = `translateX(${-220 * index}px)`; 
    // 200px width + 20px margin = 220px per image
}

setInterval(slide, 2500); // change every 2.5s
