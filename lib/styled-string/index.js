function StyledString(string, stylesObject) {
  this.styles = stringify(stylesObject);
  this.string = string;
  function stringify(stylesObject) {
    return JSON.stringify(stylesObject)
      .replace(/[{}"]/g, '')
      .replace(',', ';');
  }
}

module.exports = StyledString;