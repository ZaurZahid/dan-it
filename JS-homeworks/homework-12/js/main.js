let stopButton = document.querySelector('.stop');
let resumeButton = document.querySelector('.resume');
let images = document.querySelectorAll('.image-to-show');
let i = 0;

function showImage(image) {
    if (i >= image.length) { i = 0; }
    document.querySelector('.active').classList.remove('active');
    image[i].classList.add('active');
    i++;
};
let timer = setInterval('showImage(images)', 1000);
stopButton.addEventListener('click', () => {
    clearInterval(timer);
});
resumeButton.addEventListener('click', () => {
    timer = setInterval('showImage(images)', 1000);
});