var foo = false
function bar(){
  foo = true
  return foo
}
foo = false
console.log(foo, bar(), foo)
