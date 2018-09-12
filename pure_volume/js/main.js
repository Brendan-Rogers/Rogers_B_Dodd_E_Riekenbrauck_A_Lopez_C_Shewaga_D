// JavaScript Document
(() => {
  console.log("Linked");

  // VARIABLE STACK
  let play = document.querySelector('.play'),
      pause = document.querySelector('.pause'),
      mute = document.querySelector('.mute'),
      unmute = document.querySelector('.unmute'),
      bannerVid = document.querySelector('.bannerVid'),
      desktopQ = window.matchMedia("(min-width: 1024px)");


  //FUNCTIONS

  function pausePlay(){

    if (bannerVid.paused == true) {
    bannerVid.play();
    play.classList.add('hidden');
    pause.classList.remove('hidden');
    }
    else {
    bannerVid.pause();
    pause.classList.add('hidden');
    play.classList.remove('hidden');
    }
  }

  function muted(){

    if (bannerVid.volume == 0.0) {
      bannerVid.volume = 1.0;
      mute.classList.add('hidden');
      unmute.classList.remove('hidden');
    }
    else {
      bannerVid.volume = 0.0;
      unmute.classList.add('hidden');
      mute.classList.remove('hidden');
    }
  }

  function reassignImages(x) {
    if (x.matches) { // If media query matches
        document.getElementById('drake').src='images/desktop_images/drake.png'
        document.getElementById('gucci').src='images/desktop_images/gucci.png'
        document.getElementById('john').src='images/desktop_images/john.png'
        document.getElementById('niel').src='images/desktop_images/niel.png'
        document.getElementById('alicia').src='images/desktop_images/alicia.png'
        document.getElementById('star').src='images/desktop_images/star.png'
        document.getElementById('ryan').src='images/desktop_images/ryan.png'
        document.getElementById('car').src='images/desktop_images/car.png'
        document.getElementById('paul').src='images/desktop_images/paul.png'
        document.getElementById('pump').src='images/desktop_images/pump.png'
        document.getElementById('trippie').src='images/desktop_images/trippie.png'
        document.getElementById('tekashi').src='images/desktop_images/tekashi.png'
    } else {
    
    }
  }

  // call FUNCTIONS
  reassignImages(desktopQ);

  // EVENT HANDLING
  pause.addEventListener('click', pausePlay);
  play.addEventListener('click', pausePlay);
  unmute.addEventListener('click', muted);
  mute.addEventListener('click', muted);
  desktopQ.addListener(reassignImages);

})();
