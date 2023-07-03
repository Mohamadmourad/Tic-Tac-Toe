let all = document.getElementsByClassName('divs');
let result = document.getElementById('result');
let resultBox = document.getElementById('resultBox');
let again = document.getElementById('again');

again.addEventListener('click', function(){
    resultBox.style.display = "none";
    for(let i = 0;i<all.length;i++){
        all[i].style.backgroundColor = "#F5FAFD";
        all[i].innerHTML = "";
    }
     turn = "X";
    turnCounter = 0;
    moveCounter = 0;
    isVictory = true;
   endGameCounter = 0; 
    comparisiontArray = [[10,11,12],     
                         [13,14,15],
                         [16,17,18]];

});


let comparisiontArray = [[10,11,12],     
                         [13,14,15],
                         [16,17,18]];
