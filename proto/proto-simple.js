let cat = { breed: 'munchkin' }
let myCat = { name: 'Fluffykins' }

Object.setPrototypeOf(myCat, cat)

console.log(myCat) // res: { name: 'Fluffykins' }
console.log(myCat.breed) // res: munchkin
console.log(myCat.__proto__) // res: { breed: 'munchkin' }
cat.legs = 4
console.log(myCat.__proto__) // res: { breed: 'munchkin', legs: 4 }
