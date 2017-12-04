//'use strict'

let fullname = 'John Doe'

let obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullName: function(){
      return this.fullname
    }
  }
}

console.log(obj.prop.getFullName()) //Aurelio de Rosa

let test = obj.prop.getFullName
console.log(test()) // undefined if use-strict is omitted
let testX = test.bind(obj.prop)
console.log(testX()) //Aurelio de Rosa cause of bind
