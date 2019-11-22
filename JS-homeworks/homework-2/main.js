 let num;
 while (!num) {
     let number = prompt("enter your number");
     if (+number) { // eger inputun icinde  = regexdekiler olmazsa alerti goster
         if (parseInt(number) == number) {
             num = number;
             for (let i = 0; i < num; i += 5) {
                 console.log(i);
             }
         } else {
             alert('Sorry,enter the integer number');
         }


     } else {
         alert('Sorry, no numbers');
     }

 }
 console.log("\n the second part of the task....\n");


 let smallNum;
 let largeNum;
 while (!smallNum && !largeNum) {

     let m = +prompt("enter your smaller num(more than 2)");
     let n = +prompt("enter your larger num");

     if (parseInt(Number(m)) == m && parseInt(Number(n)) == n) {
         smallNum = m;
         largeNum = n;
         nextPrime: for (let i = smallNum; i <= largeNum; i++) { // for each i

             for (let j = 2; j < i; j++) {
                 if (i % j == 0) continue nextPrime;
             }

             console.log(i); // a prime
         }
     } else {
         alert("enter valid number!")
     }

 }