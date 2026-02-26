(function () {
  "use strict";
  console.log("reading js");

  let currentIndex = 0;
  const totalImages = 3;

//---------------hide all labels--------------//

  function hideAllLabels() {
    document.querySelectorAll(".xray-label").forEach(function (eachLabel) {
      eachLabel.style.opacity = "0";
    });
  }


//---------------show or hide labels--------------//

function setupHovers() {
  document.querySelectorAll(".hotspot").forEach(function (spot) {
   
    const spotId = spot.getAttribute("id").replace("hotspot", ""); 
    const label = document.querySelector("#label" + spotId);

    spot.onmouseenter = function () {
      if (label) label.style.opacity = "1";
    };

    spot.onmouseleave = function () {
      if (label) label.style.opacity = "0";
    };
  });
}

//––––––––––––––hide all img + overlay––––––––––––––––––//

  function updateDisplay() {
    for (let i = 0; i <= 2; i++) {
      document.querySelector("#xray" + i).style.display = "none";
      document.querySelector("#overlay" + i).style.display = "none";
    }

    //––––––––––––––show current
    document.querySelector("#xray" + currentIndex).style.display = "block";
    document.querySelector("#overlay" + currentIndex).style.display = "block";

    hideAllLabels();
  }


function previousBtn() {
  currentIndex--; 
  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }
  updateDisplay(); 
}

function nextBtn() {
  currentIndex++; 
  if (currentIndex > totalImages-1) {
    currentIndex = 0;
  }
  updateDisplay();
}
document.querySelector("#previous-btn").addEventListener("click",previousBtn);
document.querySelector("#next-btn").addEventListener("click", nextBtn);

setupHovers();
updateDisplay();


})();