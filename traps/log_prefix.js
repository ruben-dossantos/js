function log(){
  var args = Array.prototype.slice.call(arguments)
  args.unshift('(app)')
  console.log.apply(console, args)
}

log('my message')
log('my message', 'your message')
