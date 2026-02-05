(function(){
    'use strict';
    console.log('reading js');

    const form = document.querySelector('form');
    const inputView = document.querySelector('#input-view');
    const outputView = document.querySelector('#output-view');
    const mantraPara = document.querySelector('#mantra');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const place = document.querySelector('#place').value;
        const item = document.querySelector('#item').value;
        const combo = document.querySelector('#combo').value;
        const animal = document.querySelector('#animal').value;
        const adverb = document.querySelector('#adverb').value;
   
    
    mantraPara.innerHTML = `Yesterday I walked to the <span>${place}</span>. It was then I discovered I had forgotten my <span>${item}</span>. I will have to <span> ${combo}</span> over the weekend. I went home and saw the <span>${animal}</span>. And I felt <span>${adverb}</span>`;
   

    inputView.style.display = "none";
    outputView.style.display = "flex";


    });
})();