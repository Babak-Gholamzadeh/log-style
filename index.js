const StyledString = require('./lib/styled-string');

String.prototype.styles = function(stylesObject) {
  return new StyledString(this, stylesObject);
}

const log = console.log;
console.log = function(...args) {
  const newArgs = [];
  for(let i = 0; i < args.length; i++) {
    if(args[i] instanceof StyledString) {
      let string = `%c${args[i].string}`;
      let styles = args[i].styles;
      newArgs.push(string, styles);
    } else {
      newArgs.push(args[i]);
    }
  }
  log(...newArgs);
}
