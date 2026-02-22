(function(){
    'use strict';
    console.log('reading js');
 
    /*------------xray images---------------*/

    const myImages = [
        "xray0.jpg",
        "xray1.jpg",
        "xray2.jpg"
    ];

    const slide = document.querySelector('#myImage');
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#previous');

    let currentImage = 0;

    const svgs = [
        document.querySelector('#svg0'),
        document.querySelector('#svg1'),
        document.querySelector('#svg2')
    ];


    /* ---------- LABEL ARRAY ---------- */

    const labels = [
        document.querySelector('#label1'),
        document.querySelector('#label2'),
        document.querySelector('#label3'),
        document.querySelector('#label4'),
        document.querySelector('#label5'),
    ];


    /* ---------- HOTSPOT ARRAY ---------- */

    const dots = [
        document.querySelector('#dot0'),
        document.querySelector('#dot1'),
        document.querySelector('#dot2'),
        document.querySelector('#dot3'),
        document.querySelector('#dot4')
    ];


    /* --------- HIDE FUNCTIONS -------- */

    function hideAllSvg() {
        for (let i = 0; i<svgs.length; i++){
            svgs[i].style.display = "none";
        }
    }

    function hideAllLabels() {
        for (let i = 0; i < labels.length; i++)
            labels[i].style.display = "none";
    }

    /* -------- show SVG -------- */

    function showCorrectSVG() {
        hideAllSvg();
        svgs[currentImage].style.display = "block";
    }

    /* ---------- next---------- */

    function nextPhoto() {
        currentImage++;

        if(currentImage > myImages.length - 1) {
            currentImage = 0;
        }
        slide.src = `images/${myImages[currentImage]}`;
        hideAllLabels();
        showCorrectSVG();
    }

    /* ---------- previous------- */

    function previousPhoto() {

        currentImage--;

        if(currentImage < 0 ){
            currentImage = myImages.length -1;
        }
        slide.src = `images/${myImages[currentImage]}`;
        hideAllLabels();
        showCorrectSVG();
    }

    nextBtn.addEventListener('click', nextPhoto);
    prevBtn.addEventListener('click', previousPhoto);

    /* ---------- hotspot hover--------- */

    for (let i=0; i < dots.length; i++) {
        dots[i].addEventListener('mouseenter',function (){
            hideAllLabels();

            if (i === 0) labels [0].style.display = "block";
            else if (i=== 1) labels[1].style.display = "block";
            else if (i=== 2) labels[2].style.display = "block";
            else if (i=== 3) labels[3].style.display = "block";
            else if (i=== 4) labels[4].style.display = "block"; 
        });

        dots[i].addEventListener('mouseleave',function() {
            hideAllLabels();
        });
    }

hideAllLabels();
showCorrectSVG();




})();