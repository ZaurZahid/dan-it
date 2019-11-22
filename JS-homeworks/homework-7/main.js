let arr = [
    'hello', ['world', 'Baku'], 'IBA Tech Academy', '2019', "asas", ['hi', 'welcome', 'how are u']
];

/* function buildList(array) { //recursive function
    let list;
    for(let value of array) {
        let element;
        if(typeof value == 'object') {
            element = buildList(value)
        } else {
            ...
            element = li
        }
        list.appendChild(element)

    }
    return list;
} */

function listItem(arr) {
    let map = arr.map(function(el) {
        //eger array olarsa ul->li seklinde yaz
        if (Array.isArray(el)) {
            let ul = document.createElement("ul");
            ul.className = "sub-menu"

            let map2 = el.map(function(elm) { ul.innerHTML += `<li>${elm}</li>`; })
            return ul
        } else {
            //array olmazsa promoy li kimi yaz
            return `<li>${el}</li>`
        }
    });
    return map;
}

console.log(listItem(arr));

let ul = document.createElement("ul");
//butun gelenleri for-a sal
for (let val of listItem(arr)) {

    if (typeof(val) == 'object') { //eger object olsa outerle yaz
        //outerhtml nedir? tekce li-ni yox onun parentini de gotursun yeni ulni goturmekcun use edirik
        ul.innerHTML += val.outerHTML
    } else { //olmazsa sadece yeni yaratdigim ul-nin icine val-i yaz
        ul.innerHTML += val
    }
}
ul.className = "alert";
document.body.append(ul); //ve ekrana yazdir

var timeleft = 20; //optional zaman yaziram
var downloadTimer = setInterval(function() {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if (timeleft < 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished"
    }
}, 1000);