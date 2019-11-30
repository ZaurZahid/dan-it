  /**
   * 
   * @constructor
   * @param size        size of the hamburger
   * @param stuffing    selected stuffing
   * @throws {HamburgerException}  In case of incorrect usage
   */
  class Hamburger {
      constructor(size, stuffing) {
          try {
              if (size == undefined) {
                  throw new HamburgerException("No size given");
              }
              if (stuffing == undefined) {
                  throw new HamburgerException("No stuffing given");
              }
              if (size.type != "size") {
                  throw new HamburgerException("Invalid Size");
              }
              if (stuffing.type != "stuffing") {
                  throw new HamburgerException("Invalid stuffing");
              }
              this.size = size;
              this.stuffing = stuffing;
              this.toppings = []
          } catch (error) {
              console.log(`${error.name} :  ${error.message}`) //if i have error throw here and write message and name of error
          }

      }

      /**
       * Add topping to  Several toppings can be added, only if they are diferent. You can't add same topping two times. 
       * 
       * @param topping     type of topping
       * @throws {HamburgerException}  in case of incorrect usage
       */
      addTopping = function(topping) {
          if (this.toppings.includes(topping)) {
              throw new HamburgerException('duplicate topping ' + topping.name)
          }
          this.toppings.push(topping)
      }

      /**
       * Delete the toppping, only if it was added earlier.
       * 
       * @param topping   topping type
       * @throws {HamburgerException}  in case of incorrect usage
       */
      removeTopping = function(topping) {
          if (!this.toppings.includes(topping)) {
              throw new HamburgerException('you dont have this topping in array ' + topping.name)
          }
          this.toppings.splice(this.toppings.findIndex((element) => element == topping.name), 1)
      }

      /**
       * Get list of toppings
       *
       * @return {Array} an Array with the list of constants like TOPPING_* inside
       */
      getToppings = function() {
          return this.toppings
      }

      /**
       * Find out the size of the Hamburger
       */
      getSize = function() {
          return this.size
      }

      /**
       * Find out the stuffing of the Hamburger
       */
      getStuffing = function() {
          return this.stuffing
      }

      /**
       * Find out the price of the hamburger
       * @return {Number} the number of price in AZN
       */
      calculatePrice = function() {
              let sum = this.stuffing.price + this.size.price
              for (let i = 0; i < this.toppings.length; i++) {
                  sum += this.toppings[i].price
              }
              return sum
          }
          /**
           * Find out callories amount of the hamburger
           * @return {Number} Number of calories
           */
      calculateCalories = function() {
          let sumKal = this.stuffing.kkal + this.size.kkal
          for (let i = 0; i < this.toppings.length; i++) {
              sumKal += this.toppings[i].kkal
          }
          return sumKal
      }

      static SIZE_SMALL = { price: 50, kkal: 20, name: "SIZE SMALL", type: "size" }
      static SIZE_LARGE = { price: 100, kkal: 40, name: "SIZE_LARGE", type: "size" }
      static STUFFING_CHEESE = { price: 10, kkal: 20, name: "STUFFING_CHEESE", type: "stuffing" }
      static STUFFING_SALAD = { price: 20, kkal: 5, name: "STUFFING_SALAD", type: "stuffing" }
      static STUFFING_POTATO = { price: 15, kkal: 10, name: "STUFFING_POTATO", type: "stuffing" }
      static TOPPING_MAYO = { price: 20, kkal: 0, name: "TOPPING_MAYO", type: "mayo" }
      static TOPPING_SPICE = { price: 15, kkal: 5, name: "TOPPING_SPICE", type: "mayo" }

  }
  /**
   * Provides information about an error while working with a  
   * Details are stored in the message property.
   * @constructor 
   */
  class HamburgerException extends Error {
      constructor(message) {
          super()
          this.message = message;
          this.name = 'HamburgerException';
      }
  }