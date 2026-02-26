(function () {
  "use strict";
  console.log("reading js");

  var currentIndex = 0;

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

  document.querySelector("#next-btn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % 3;
    updateDisplay();
  });

  document.querySelector("#previous-btn").addEventListener("click", function () {
    currentIndex = (currentIndex + 2) % 3; // go back
    updateDisplay();
  });

  setupHovers();
  updateDisplay();
})();