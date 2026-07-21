const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

function changeImage() {
    slide.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        slide.src = images[index];
        slide.style.opacity = 1;
    }, 500);
}

setInterval(changeImage, 3000);
