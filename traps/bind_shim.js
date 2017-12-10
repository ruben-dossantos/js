Function.prototype.bind = Function.prototype.bind || function(context){
  var self = this;
  return function(){
    return self.apply(context, arguments);
  }
}


var monica = {
  name: 'Monica',
  total: 400,
  deduct: function(fee){
    this.total = this.total - fee;
    return this.name + ' remaining balance is ' + this.total;
  }
}

var rachel = {name: 'Rachel', total: 1500}
var rachelDeduct = monica.deduct.bind(rachel, 200)

console.log(rachelDeduct())
console.log(rachelDeduct())
