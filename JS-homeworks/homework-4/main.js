  function createNewUser(name, surname) {
      let newUser = {
          name,
          surname,

          getLogin: function() {
              let userName;
              userName = (name.charAt(0) + surname).toLowerCase();
              return userName;
          },
          setFirstName: function(newName) {
              name = newName
          },
          setLastName: function(newLAstName) {
              surname = newLAstName
          }
      }
      return newUser
  }

  let user1 = createNewUser("zaur", "aliyev");
  console.log(user1.getLogin())
      /* Teacher i have other option but i dont not is it true or not? */
      /* 
       function createNewUser(name, surname) {


           this.name = name;
           this.set = function(name) {
               this.name = name;
               return this;
           };
           this.surname = surname;
           this.set = function(surname) {
               this.surname = surname;
               return this;
           };
           this.getLogin = function() {
               let userName;
               userName = (name.charAt(0) + surname).toLowerCase();
               return userName;
           }
       }
       let user1 = new createNewUser("zaur", "aliyev");
       let user2 = new createNewUser("Donald", "Duck ");

       console.log(user1.getLogin());
       console.log(user2.getLogin());  */