document.addEventListener(`DOMContentLoaded`, () => {
   // Select Elements
    let forwardBtn = document.querySelector(`.forward-btn`);
    let backwardBtn = document.querySelector(`.backward-btn`);
    let songTitle = document.querySelector(`.title-wrapper h1`);
    let artistTitle = document.querySelector(`.title-wrapper h2`);

    //Create Array for controls
    let controlArray = [forwardBtn, backwardBtn];

    //ADD eventListeners to controls and call functions
    controlArray.forEach((control) => {
        control.addEventListener(`click`, () => {
            switch (control) {
                case forwardBtn:
                    nextSong();
                    break;
                case backwardBtn:
                    prevSong();
                    break;
            }
        })
    })

    //music info
    let songArray = [`columbiana`, `money`, `diggi`, `you`, `dystopia`];
    let artistArray = [`Music sing & song`, `Jamule`, `Selmon`, `Besmorph`, `Disastar`];

    //Set initial song number + load animation
    let songNumber = 2;
    songTitle.innerHTML = songArray[songNumber];
    
    anime({
        targets: `.diggi`,
        scale:[0.8, 1.1],
        easing: `easeOutExpo`,
        duration: 1500,
    })

    function nextSong() {
        if (songNumber == 4) {
            songNumber == 0;
            setSong();

            //Animate to first cover when end of songArray reached
            anime({
                targets: `.cover-row`,
                translateX: `510px`,
                easing: `easeOutExpo`,
            })
        }else {
            songNumber += 1;
            setSong();
            scaleCoverDownNext();

            //animate to  next cover
            anime({
                targets: `.cover-row`,
                translateX: `-=255px`,
                easing: `easeOutExpo`,
            })
        }
    }

    function prevSong() {
        if (songNumber == 0) {
            // Do nothing when prev is clicked at begining of list
        }else {
            songNumber -= 1;
            setSong();
            scaleCoverDownPrev();

            //Animate to next cover
            anime({
                targets: `.cover-row`,
                translateX: `+=255px`,
                easing: `easeOutExpo`,
            })
        }
    }

    //Set Song information cover
    function setSong() {
        songTitle.innerHTML = songArray[songNumber];
        artistTitle.innerHTML = artistArray[songNumber];

        //scale up current cover
        anime({
            targets: `.${songArray[songNumber]}`,
            scale: 1.1,
            easing: `easeOutExpo`,
            duration: 1500,
        })
    }

    function scaleCoverDownNext() {
     let prevSongNumber = songNumber -1;
     anime({
         targets: `.${songArray[prevSongNumber]}`,
         scale: 1,
         easing: `easeOutExpo`,
         duration: 1500,
     })
    }
 
    function scaleCoverDownPrev() {
     let nextSongNumber = songNumber +1;
     anime({
         targets: `.${songArray[nextSongNumber]}`,
         scale: 1,
         easing: `easeOutExpo`,
         duration: 1500,
     })
    }

    //Play and Pause Button
    let playBtn = document.querySelector(`.play-icon`);
    playBtn.addEventListener(`click`, () => {
        playBtn.classList.toggle(`paused`);
    } )
})