function user(name, surname) {
    return {
        name,
        surname
    }
}
let name = prompt(' name')
let surname = prompt('surname');
let Student = user(name, surname)

let grades = {}
let i = 0;
do { //promptu cixart ta ki  herhansi birinin icindeki deyer bos olmayacan

    let sub = prompt(`${Student.name+' ' + Student.surname} subject name`)
    let grade = prompt('my grade');
    i++
    grades[i] = { sub, grade }

} while (grades[i].sub !== '' && grades[i].grade !== '');
var arr = [];
let sum = 0;
for (const key in grades) {
    if (grades[key].grade >= 4 && grades[key].grade !== '') {
        arr.push(1)
    }
    if (grades[key].grade < 4 && grades[key].grade !== '') {
        arr.push(0)
    }
    sum += parseInt(Number(grades[key].grade), 10);
}
var avg = sum / (Object.keys(grades).length - 1);

if (!arr.includes(0)) {
    if (avg > 4) {
        document.body.append('The student has a scholarship ')
    }
    document.body.append('The student is transferred to the next course.')
}
if (arr.includes(0)) {
    document.body.append('The student isnt transferred to the next course.')
}