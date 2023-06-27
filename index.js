const imagePaths = [
  './images/1.svg',
  './images/2.png',
  './images/3.png',
  './images/4.png',
  './images/5.png',
  './images/6.png',
  './images/7.png',
  './images/8.png',
  './images/9.png'
];

const randomIndex = Math.floor(Math.random() * imagePaths.length);
const randomImageSrc = imagePaths[randomIndex];

const randomImage = document.getElementById('random-image');
randomImage.src = randomImageSrc;
