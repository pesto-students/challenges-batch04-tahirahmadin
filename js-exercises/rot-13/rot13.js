function rot13(args) {
  const inputString = args.split(',');
  let decodedString = '';

  function myFunction(item) {
    let result = '';
    let charcode = 0;
    for (let i = 0; i < item.length; i += 1) {
      if (item[i].charCodeAt() < 65 || item[i].charCodeAt() > 123) {
        result += item[i];
      } else {
        charcode = item[i].charCodeAt() - 13;
        if (charcode < 65) {
          charcode += 26;
        }
        result += String.fromCharCode(charcode);
      }
    }
    decodedString = decodedString.concat(result);
  }

  inputString.forEach(myFunction);

  return decodedString;
}

export { rot13 };
