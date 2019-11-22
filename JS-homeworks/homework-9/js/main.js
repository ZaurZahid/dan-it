 let tabs = document.querySelectorAll('.tabs-title'); //menunun li -lerini array kimi gotururem
 let tabs_content = document.querySelectorAll('.content'); //contentde li-leri array kimi gotururem


 for (let i = 0; i < tabs.length; i++) {
     tabs[i].dataset.index = i;
     tabs_content[i].dataset.key = i;
     tabs[i].addEventListener('click', () => { //her hansi birinin ustune click edende 
         tabs.forEach((x) => {
             x.classList.remove("active"); //hamsinnan activi sil
         })
         tabs_content.forEach((x) => {
             x.style.display = "none"; //hamsina none elave ele
         })
         tabs_content[i].style.display = "block"; //click etdiyimize block elave ele
         tabs[i].classList.add("active"); //ve active ele
     })

 }

 tabs_content.forEach((x) => { //baslangicda her bir li ucun none ele
     if (x.dataset.key == 0) { //indexi 0 olandan basqa
         return;
     }
     x.style.display = "none";
 })