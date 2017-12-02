'use strict'

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

console.log(obj.prop.getFullName())

let test = obj.prop.getFullName
let testX = test.bind(obj.prop)
console.log(testX())
