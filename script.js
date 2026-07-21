const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg"
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
