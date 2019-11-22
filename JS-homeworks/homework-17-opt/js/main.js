 //1 1 2 3 5 8 13 21 dont use high numbers
 function fib(num) {
     return num <= 1 ? num : fib(num - 2) + fib(num - 1)
 }
 let num = +prompt('write your number'); //fib(4)=5

 document.body.append(fib(num));