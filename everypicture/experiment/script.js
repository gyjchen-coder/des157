(function(){
    'use strict';
    console.log('reading js');

    const shoulderOverlay= document.querySelector('#xrayOverlay');
    const chestOverlay = document.querySelector('#xrayOverlayChest')

    const area1 = document.querySelector('#area1');
    const area2 = document.querySelector('#area2');


    area1.addEventListener('mouseover', function() {
        shoulderOverlay.style.opacity = "1";
    });
    area1.addEventListener('mouseout', function(){
        shoulderOverlay.style.opacity = "0";
    });

    area2.addEventListener('mouseover', function(){
        chestOverlay.style.opacity = "1";
    });
    area2.addEventListener('mouseout', function(){
        chestOverlay.style.opacity = "0";
    });

    // document.addEventListener('mousemove', reportPos);
    
    // const theImg = document.querySelector('img');
    // let preLoc = 0;

    // function reportPos(event) {
    //     const windowSize = window.innerWidth;
    //     const percent2px = windowSize / 4; 
    //     const xPos = event.clientX;
    //     const changePhoto = Math.floor(xPos / percent2px)

    //     if (changePhoto !==preLoc) {
    //     theImg.src = `images/anatomy-0${changePhoto + 1}.png`;
    //     preLoc = changePhoto;
    //     console.log(preLoc);
    //     }

    // }


})();