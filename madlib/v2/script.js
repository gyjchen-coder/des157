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
    const adjective = document.querySelector('#adjective').value;
    
    
    let myText;
    
    if (place == '') {
            alert("Please name a place.");
            document.querySelector('#place').focus();
            // added below to put the error on the page for each field
            
        } else if (item == '') {
            alert("Please provide an item name.");
            document.querySelector('#item').focus();
            
        } else if (combo == '') {
            alert("Please provide a verb and adverb combo.");
            document.querySelector('#combo').focus();
            
        } else if (animal == '') {
            alert("Please name an animal.");
            document.querySelector('#animal').focus();
            
        } else if (adjective == '') {
            alert("Please provide an adjective.");
            document.querySelector('#adjective').focus();
          
        } else {

            myText = `<span>Yesterday</span> I walked to the <span>${place}</span>. It was then I discovered I had forgotten my <span>${item}</span>. I will have to  <span>${combo}</span> over the weekend. I went home and saw the <span>${animal}</span>. And I felt <span>${adjective}</span>`;
       
            document.querySelector('#place').value='';
            document.querySelector('#item').value='';
            document.querySelector('#combo').value='';
            document.querySelector('#animal').value='';
            document.querySelector('#adjective').value='';

            mantraPara.innerHTML = myText
        
            inputView.style.display = "none";
            outputView.style.display = "flex";
        }

    });


})();