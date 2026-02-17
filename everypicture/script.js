(function(){
    'use strict';
    console.log('reading js');

    document.addEventListener('mousemove', reportPos);
    
    const theImg = document.querySelector('img');
    let preLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        const percent2px = windowSize / 4; 
        const xPos = event.clientX;
        const changePhoto = Math.floor(xPos / percent2px)

        if (changePhoto !==preLoc) {
        theImg.src = `images/anatomy-0${changePhoto + 1}.png`;
        preLoc = changePhoto;
        console.log(preLoc);
        }

    }


})();