 let name;
 let age;
 while (!name) {
     var regex = /^[a-zA-Z]+$/;
     let inputName = prompt("enter your name");
     if (!inputName.match(regex)) { // eger inputun icinde  = regexdekiler olmazsa alerti goster
         alert('You cant use integer');
     } else {
         name = inputName
     }
 }

 while (!age) {
     let inputAge = prompt("enter your age");
     if (+inputAge) { //  +number edir  
         age = inputAge;

         if (age <= 18) {
             alert("You are not allowed to visit this website.")
         } else if (age > 18 && age < 22) {
             let result = confirm("Are you sure you want to continue?");
             if (result) {
                 alert("Welcome-" + name)
             }
         } else if (age >= 22) {
             alert("Welcome-" + name)
         }

     } else {
         alert('please enter the number');
     }
 }