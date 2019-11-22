 function runCode(...codes) {
     let btn = document.querySelectorAll('.btn')
     for (let i = 0; i < btn.length; i++) {
         document.addEventListener('keyup', function(e) { //basib buraxanda
             btn[i].classList.remove('active'); //hamsindan active  sil 
             if (codes[i] == e.key.toLowerCase()) {
                 btn[i].classList.add('active') //hansina uygun olarsa active elave ele
             }
         })
     }
 }

 runCode('enter', 'z', 'a', 'u', 'r', 'tab', 'capslock')