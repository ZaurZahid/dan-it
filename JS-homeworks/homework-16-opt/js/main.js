function fact(num) {
    return (num === 1) ? 1 : num * fact(num - 1) //5 * 4 * 3 * 2 * 1
}
let number;
while (!number) {
    let num = +prompt('write your number');
    if (+num) {
        number = num;
        document.body.append(`Factorial of ${number} is ` + fact(number));
    } else {
        alert('Please write the number.')
    }
}
// alert(num) num=5   1*2*3*4*5