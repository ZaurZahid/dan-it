 function filterBy(data, data_type) {
     let newArr = [];
     for (let val of data) { //gelen datani donguye sal
         if (typeof(val) != data_type) { //eger gonderilen data-type ile beraber olmazsa , onda  bos arrayin icine elave ele
             newArr.push(val);
             /*              console.log(val + "da basqa data typedir " + typeof(val));
              */
         }
         /*  else {
                      console.log("sadece " + val + " datasinda " + data_type + " data-type duzdur");
                  } */
     }
     return newArr //bayira cixart
 }
 let data = ['hello', 'world', 23, '23', null];
 let data_type = prompt("Enter your data type for array ....", 'string');

 let div = document.createElement('div');
 div.className = "content";

 for (let val of filterBy(data, data_type)) {
     div.innerHTML += `<h2>${val} <p>doesn't respond to specified data type.Because of its data type is <span>${typeof val}</span></p></h2>`;
 }
 document.body.append(div)

 /*  console.log(filterBy(data, data_type)) */