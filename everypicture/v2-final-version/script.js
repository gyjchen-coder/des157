(function(){
    'use strict';
    console.log

    let currentIndex = 0;
    const totalImages = 3;

    const xrayImg = document.querySelector("#xray0");
    const OverlayDiv = document.querySelector("#overlay");

    /*-----------find label and turn on/off ----------*/
    function setupHovers() {
        const hotspots = document.querySelectorAll('.hotspot');
        
        hotspots.forEach(function(spot) {
            const spotId = spot.getAttribute('id');
            const targetLabel = document.querySelector("#label" + spotId);

            spot.addEventListener('mouseenter', function() {
                if (targetLabel) { 
                    targetLabel.style.opacity = "1"; 
                }
            });

            spot.addEventListener('mouseleave', function() {
                if (targetLabel) { 
                    targetLabel.style.opacity = "0"; 
                }
            });
        });
    }

    /*--------------------RESET-------------*/
    function updateDisplay() {

        xrayImg.src = "images/xray" + currentIndex + ".jpg";

        const template = document.querySelector("#overlay-" + currentIndex);
        OverlayDiv.innerHTML = template.innerHTML

        document.querySelectorAll('.xray-label').forEach(function(eachlabel) {
            eachlabel.style.opacity = "0";
        });

        setupHovers();
    }

    /*-----------------CONTROL-------------*/

    document.querySelector("#next-btn").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateDisplay();
    });

    document.querySelector("#previous-btn").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateDisplay();
    });
    /*----------------LOAD FIRST IMG-------------*/
    updateDisplay();

    
})();