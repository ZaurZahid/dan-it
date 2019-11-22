function createNewUser(name, surname, age) {
    this.name = name,
        this.surname = surname,

        this.age = age,

        birthday = "",
        birthday += age,

        this.getAge = function() {
            var today = new Date();
            var birthDate = new Date(this.age);
            var age = today.getFullYear() - birthDate.getFullYear();
            if (today.getDate() < birthDate.getDate()) {
                age = age - 1;
            }
            return age;
        },

        this.getPassword = function() {
            let userPassword;
            let year = new Date(birthday).getFullYear();
            userPassword = name.charAt(0).toUpperCase() + surname.toLowerCase() + year;
            return userPassword;
        }
}

let user1 = new createNewUser("Zaur", "Aliyev", "01.03.1999");
console.log(user1.getAge());
console.log(user1.getPassword())