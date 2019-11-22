 let show = document.querySelectorAll('i');
 let input = document.querySelectorAll('input');
 let btn = document.querySelector('.btn');
 for (let i = 0; i < show.length; i++) {
     show[i].addEventListener('click', () => { //hansina click elese onun inputunun typeni deyisir
         if (input[i].type == "password") {
             input[i].type = "text";
             show[i].classList.remove('fa-eye');
             show[i].classList.add('fa-eye-slash');
         } else {
             input[i].type = "password";
             show[i].classList.remove('fa-eye-slash');
             show[i].classList.add('fa-eye');
         }
     })
 }

 btn.addEventListener('click', function(e) {
     if (input[0].value == input[1].value && input[0].value != '' & input[1].value != '') { //deyerleri eyni ve bos olmazsa -> olarsa alert ver
         alert("Welcome,friend)");
     } else {
         alert('You need to enter the identical values');
         input[0].focus()
     }
     input[0].value = '';
     input[1].value = ''

     e.preventDefault()
 })