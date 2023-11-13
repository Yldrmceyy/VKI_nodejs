'use strict';


let button=document.querySelector("#btn");

button.addEventListener('click',calculateBMI);
function calculateBMI() {
  let weight=parseInt(document.querySelector("#weight").value);
  let height=parseInt(document.querySelector("#height").value);
  let result=document.querySelector('#result').value;
  result=(weight/((height*height)/10000)).toFixed(1);
  let imageEl=document.querySelector('.image');
  
  let bodytype;
  
            if ( result < 18.5) {
              document.querySelector('#result').textContent = "Zayıf : "+`${result}` ;
              bodytype="zayif";
          } else if (result >= 18.5 && result < 24.9) {
            document.querySelector('#result').textContent = "Normal : "+`${result}` ;
              bodytype="normal";

          } else if (result >= 25 && result < 29.9) {
            document.querySelector('#result').textContent = "Fazla Kilolu : "+`${result}` ;
            bodytype="fazlakilolu";

            } else if (result >= 30 && result < 39.9) {
              document.querySelector('#result').textContent = "Obez : "+`${result}`;
              bodytype="obezite";
          } else {
            document.querySelector('#result').textContent = "Aşırı Obez :"+`${result}` ;
            bodytype="asiriobezite";
          };
          console.log(result);

          imageEl.src = `./img/${bodytype}.png`;
       
};




