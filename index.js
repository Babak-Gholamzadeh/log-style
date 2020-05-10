const StyledString = require('./lib/styled-string');

String.prototype.styles = function(stylesObject) {
  return new StyledString(this, stylesObject);
}

