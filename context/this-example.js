function User(first, last){
  this.name = first + " " + last;
}

window.name = "Resig";
// without "new" name would be polluted
//var user = User("John", name); 
var user = new User("John", name);

console.log(name);