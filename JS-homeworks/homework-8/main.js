document.addEventListener('DOMContentLoaded', run);

function run() {
    //input yarat
    let input = document.createElement('input')
    input.type = "number";
    input.placeholder = 'Write your price'
    document.body.append(input);
    //span yarat
    let span = document.createElement("span");
    //error mesaji ucun span yarat
    let error = document.createElement("span");
    error.innerHTML = "Please enter corrent price";

    //button yarat
    let btn = document.createElement('button')
    btn.innerHTML = "X";

    btn.addEventListener('click', function(e) { //silme islemi
        e.preventDefault()
        e.target.parentElement.remove();
        input.value = ""
    })


    input.addEventListener('focus', function() { //focus olanda yasil olsun
        input.style.borderColor = "green";
    })
    input.addEventListener('blur', function(e) { //eger 0 dan kicik deyilse onda borderi sil 
        if (!(e.target.value < 0)) {
            input.style.borderColor = "";
        }
    })
    input.addEventListener('change', (e) => { //neise bir deyisiklik olanda 
        span.remove(); //spani sil
        if (e.target.value < 0) {
            input.parentElement.append(error) //eger kicikdise 0dan error goster
            input.style.border = "2px solid red"
        } else {
            error.remove() //eger error yoxdusa error mesajini sil
            span.innerHTML = `Current price is ${input.value}`;
            span.appendChild(btn);
            document.body.appendChild(span)
        }

    })
}