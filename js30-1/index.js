// // function adBtn() {
// //     // document.getElementsByTagName('div')[13].setAttribute('id', 'portfolio-images');
// //     // document.getElementsByTagName('div')[14].setAttribute('id', 'portfolio-images2');
// //     // document.getElementsByTagName('div')[15].setAttribute('id', 'portfolio-images3');
// //     document.getElementById('ad-menu-btn').classList.add('images-activ');
// //     document.getElementById('ad-menu-btn').removeAttribute('id');
// //   };

// // const adMenuBtn = document.querySelector('#ad-menu-btn');
// // const noadMenu = document.querySelector('.ul');

// // function adBtn() {
// //     adMenuBtn.classList.toggle('open');
// //     noadMenu.setAttribute('id', 'menu-btn-activ');
// //     noadMenu.removeAttribute('class');
// // }



// const audio = document.querySelector('audio');
// // const playBtn = document.querySelector('.play');
// // const pauseBtn = document.querySelector('.pause');
// let isPlay = false;

// function playAudio() {
//   audio.play();
// };
// playBtn.addEventListener('click', playAudio);

// function pauseAudio() {
//   audio.pause();
// };
// pauseBtn.addEventListener('click', pauseAudio);

// function playAudio() {
//   if (!isPlay) {
//     audio.play();
//   } else {
//     audio.pause();
//   };
// };
  

// button.addEventListener('click', playAudio);

// function toggleBtn() {
//   button.classList.toggle('pause');
// }
// button.addEventListener('click', toggleBtn);

// // function shiftBtn() {
// //   playBtn.classList.toggle('play_');
// //   pauseBtn.classList.toggle('pause');
// //   // playBtn.removeAttribute('class');
// //   // pauseBtn.removeAttribute('class');
// // };
// // playBtn.addEventListener('click', shiftBtn);



// //Переключение аудио
// const main = document.querySelector('.main');
// const forest = document.querySelector('#forest');
// const nightingale = document.querySelector('#nightingale');
// const thrush = document.querySelector('#thrush');
// const robin = document.querySelector('#robin');
// const lark = document.querySelector('#lark');
// const warbler = document.querySelector('#warbler');
// const audioForest = document.querySelector('#f');
// const audioNightingale = document.querySelector('#solovey');
// const audioThrush = document.querySelector('#drozd');
// const audioRobin = document.querySelector('#zarynka');
// const audioLark = document.querySelector('#javoronok');
// const audioWarbler = document.querySelector('#slavka');


// function forestFunc() {
//   main.style.backgroundImage = 'url(./assets/img/forest.jpg)'
//   audioForest.currentTime = 0;
//   audioForest.play();
//   audioNightingale.pause();
//   audioThrush.pause();
//   audioRobin.pause();
//   audioLark.pause();
//   audioWarbler.pause();
//   nightingale.setAttribute('class', 'li');
//   thrush.setAttribute('class', 'li');
//   robin.setAttribute('class', 'li');
//   lark.setAttribute('class', 'li');
//   warbler.setAttribute('class', 'li');
//   forest.classList.add('activ');
//   // playBtn.setAttribute('id', 'play_');
//   // pauseBtn.setAttribute('id', 'pause_');
//   // playBtn.removeAttribute('class');
//   // pauseBtn.removeAttribute('class');
// };
// forest.addEventListener('click', forestFunc);
// forest.addEventListener('click', toggleBtn);

// function nightingaleFunc() {
//   main.style.backgroundImage = 'url(./assets/img/solovey.jpg)'
//   audioNightingale.currentTime = 0;
//   audioNightingale.play();
//   audioForest.pause();
//   audioThrush.pause();
//   audioRobin.pause();
//   audioLark.pause();
//   audioWarbler.pause();
//   forest.setAttribute('class', 'li');
//   thrush.setAttribute('class', 'li');
//   robin.setAttribute('class', 'li');
//   lark.setAttribute('class', 'li');
//   warbler.setAttribute('class', 'li');
//   nightingale.classList.toggle('activ');
//   // playBtn.setAttribute('id', 'play_');
//   // pauseBtn.setAttribute('id', 'pause_');
//   // playBtn.removeAttribute('class');
//   // pauseBtn.removeAttribute('class');
// };
// nightingale.addEventListener('click', nightingaleFunc);

// function thrushFunc() {
//   main.style.backgroundImage = 'url(./assets/img/drozd.jpg)'
//   audioThrush.currentTime = 0;
//   audioThrush.play();
//   audioNightingale.pause();
//   audioForest.pause();
//   audioRobin.pause();
//   audioLark.pause();
//   audioWarbler.pause();
//   nightingale.setAttribute('class', 'li');
//   forest.setAttribute('class', 'li');
//   robin.setAttribute('class', 'li');
//   lark.setAttribute('class', 'li');
//   warbler.setAttribute('class', 'li');
//   thrush.classList.toggle('activ');
//   // playBtn.setAttribute('id', 'play_');
//   // pauseBtn.setAttribute('id', 'pause_');
//   // playBtn.removeAttribute('class');
//   // pauseBtn.removeAttribute('class');
// };
// thrush.addEventListener('click', thrushFunc);
// thrush.addEventListener('click', toggleBtn);

// function robinFunc() {
//   main.style.backgroundImage = 'url(./assets/img/zarynka.jpg)'
//   audioRobin.currentTime = 0;
//   audioRobin.play();
//   audioNightingale.pause();
//   audioForest.pause();
//   audioThrush.pause();
//   audioLark.pause();
//   audioWarbler.pause();
//   nightingale.setAttribute('class', 'li');
//   forest.setAttribute('class', 'li');
//   thrush.setAttribute('class', 'li');
//   lark.setAttribute('class', 'li');
//   warbler.setAttribute('class', 'li');
//   robin.classList.toggle('activ');
//   // playBtn.setAttribute('id', 'play_');
//   // pauseBtn.setAttribute('id', 'pause_');
//   // playBtn.removeAttribute('class');
//   // pauseBtn.removeAttribute('class');
// };
// robin.addEventListener('click', robinFunc);

// function larkFunc() {
//   main.style.backgroundImage = 'url(./assets/img/javoronok.jpg)'
//   audioLark.currentTime = 0;
//   audioLark.play();
//   audioNightingale.pause();
//   audioForest.pause();
//   audioRobin.pause();
//   audioThrush.pause();
//   audioWarbler.pause();
//   nightingale.setAttribute('class', 'li');
//   forest.setAttribute('class', 'li');
//   robin.setAttribute('class', 'li');
//   thrush.setAttribute('class', 'li');
//   warbler.setAttribute('class', 'li');
//   lark.classList.toggle('activ');
//   // playBtn.setAttribute('id', 'play_');
//   // pauseBtn.setAttribute('id', 'pause_');
//   // playBtn.removeAttribute('class');
//   // pauseBtn.removeAttribute('class');
// };
// lark.addEventListener('click', larkFunc);

// function warblerFunc() {
//   main.style.backgroundImage = 'url(./assets/img/slavka.jpg)'
//   audioWarbler.currentTime = 0;
//   audioWarbler.play();
//   audioNightingale.pause();
//   audioForest.pause();
//   audioRobin.pause();
//   audioLark.pause();
//   audioThrush.pause();
//   nightingale.setAttribute('class', 'li');
//   forest.setAttribute('class', 'li');
//   robin.setAttribute('class', 'li');
//   lark.setAttribute('class', 'li');
//   warbler.classList.toggle('activ');
//   thrush.setAttribute('class', 'li');
//   // playBtn.setAttribute('id', 'play_');
//   // pauseBtn.setAttribute('id', 'pause_');
//   // playBtn.removeAttribute('class');
//   // pauseBtn.removeAttribute('class');
// };
// warbler.addEventListener('click', warblerFunc);









const audio = document.querySelector('#audio');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause_');
const main = document.querySelector('.main');
const forest = document.querySelector('#forest');
const nightingale = document.querySelector('#nightingale');
const thrush = document.querySelector('#thrush');
const robin = document.querySelector('#robin');
const lark = document.querySelector('#lark');
const warbler = document.querySelector('#warbler');
const forest2 = document.querySelector('#forest2');
const nightingale2 = document.querySelector('#nightingale2');
const thrush2 = document.querySelector('#thrush2');
const robin2 = document.querySelector('#robin2');
const lark2 = document.querySelector('#lark2');
const warbler2 = document.querySelector('#warbler2');
const ul2 = document.querySelector('.ul2');
const btnAdapt = document.querySelector('#ad-menu-btn');

let adapt = true;
function adMenu() {
  if (adapt == true) {
    ul2.style.display = 'flex';
    adapt = false;
  } else {
    ul2.style.display = 'none';
    adapt = true;
  };
};

function audioPlay() {
  buttonPlay.classList.add('play_');
  buttonPause.classList.add('pause');
  buttonPlay.classList.remove('play');
  buttonPause.classList.remove('pause_');
  audio.play();
};
buttonPlay.addEventListener('click', audioPlay);

function audioPause() {
  buttonPlay.classList.add('play');
  buttonPause.classList.add('pause_');
  buttonPlay.classList.remove('play_');
  buttonPause.classList.remove('pause');
  audio.pause();
};
buttonPause.addEventListener('click', audioPause);

function audioForest() {
  audio.src = './assets/audio/forest.mp3';
  main.style.backgroundImage = 'url(./assets/img/forest.jpg)';
  forest.classList.toggle('activ');
  nightingale.setAttribute('class', 'li');
  thrush.setAttribute('class', 'li');
  robin.setAttribute('class', 'li');
  lark.setAttribute('class', 'li');
  warbler.setAttribute('class', 'li');
  adapt = false;
  adMenu(); 
};
forest.addEventListener('click', audioForest);
forest.addEventListener('click', audioPlay);
forest2.addEventListener('click', audioForest);
forest2.addEventListener('click', audioPlay);

function audioNightingale() {
  audio.src = './assets/audio/solovey.mp3';
  main.style.backgroundImage = 'url(./assets/img/solovey.jpg)';
  forest.setAttribute('class', 'li');
  nightingale.classList.toggle('activ');
  thrush.setAttribute('class', 'li');
  robin.setAttribute('class', 'li');
  lark.setAttribute('class', 'li');
  warbler.setAttribute('class', 'li');
  adapt = false;
  adMenu();
};
nightingale.addEventListener('click', audioNightingale);
nightingale.addEventListener('click', audioPlay);
nightingale2.addEventListener('click', audioNightingale);
nightingale2.addEventListener('click', audioPlay);

function audioThrush() {
  audio.src = './assets/audio/drozd.mp3';
  main.style.backgroundImage = 'url(./assets/img/drozd.jpg)';
  forest.setAttribute('class', 'li');
  nightingale.setAttribute('class', 'li');
  thrush.classList.toggle('activ');
  robin.setAttribute('class', 'li');
  lark.setAttribute('class', 'li');
  warbler.setAttribute('class', 'li');  
  adapt = false;
  adMenu();
};
thrush.addEventListener('click', audioThrush);
thrush.addEventListener('click', audioPlay);
thrush2.addEventListener('click', audioThrush);
thrush2.addEventListener('click', audioPlay);

function audioRobin() {
  audio.src = './assets/audio/zarynka.mp3';
  main.style.backgroundImage = 'url(./assets/img/zarynka.jpg)';
  forest.setAttribute('class', 'li');
  nightingale.setAttribute('class', 'li');
  thrush.setAttribute('class', 'li');
  robin.classList.toggle('activ');
  lark.setAttribute('class', 'li');
  warbler.setAttribute('class', 'li');  
  adapt = false;
  adMenu();
};
robin.addEventListener('click', audioRobin);
robin.addEventListener('click', audioPlay);
robin2.addEventListener('click', audioRobin);
robin2.addEventListener('click', audioPlay);

function audioLark() {
  audio.src = './assets/audio/javoronok.mp3';
  main.style.backgroundImage = 'url(./assets/img/javoronok.jpg)';
  forest.setAttribute('class', 'li');
  nightingale.setAttribute('class', 'li');
  thrush.setAttribute('class', 'li');
  robin.setAttribute('class', 'li');
  lark.classList.toggle('activ');
  warbler.setAttribute('class', 'li');  
  adapt = false;
  adMenu();
};
lark.addEventListener('click', audioLark);
lark.addEventListener('click', audioPlay);
lark2.addEventListener('click', audioLark);
lark2.addEventListener('click', audioPlay);

function audioWarbler() {
  audio.src = './assets/audio/slavka.mp3';
  main.style.backgroundImage = 'url(./assets/img/slavka.jpg)';
  forest.setAttribute('class', 'li');
  nightingale.setAttribute('class', 'li');
  thrush.setAttribute('class', 'li');
  robin.setAttribute('class', 'li');
  lark.setAttribute('class', 'li');
  warbler.classList.toggle('activ');
  adapt = false;
  adMenu();
};
warbler.addEventListener('click', audioWarbler);
warbler.addEventListener('click', audioPlay);
warbler2.addEventListener('click', audioWarbler);
warbler2.addEventListener('click', audioPlay);

const body = document.querySelector ('body');
const logo = document.querySelector ('.header-logo');
const li = document.querySelector ('.li');

// function changeTheme() {
//   body.style.backgroundColor = '#ffffff';
//   body.style.color = '#000000';
//   logo.style.filter = 'var(--filter-black)';
// };
// logo.addEventListener('click', changeTheme);




btnAdapt.addEventListener('click', adMenu);