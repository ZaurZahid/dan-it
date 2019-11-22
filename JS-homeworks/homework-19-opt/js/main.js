let user = {
    name: "John",
    vehicles: {
        car: "limousine",
        bike: "ktm-duke",
        plane: "lufthansa"
    },
    age: 20
};

let arr = []

function run(user) {

    for (const key in user) {
        arr.push('<ul>' +
                '<li>' +
                key + '=' + user[key] +
                typeof(user[key]) == 'object' ? run(user[key]) : "" +

                '</li>' +
                '</ul>')
            // arr.push()


    }
    console.log(arr);
}
run(user);