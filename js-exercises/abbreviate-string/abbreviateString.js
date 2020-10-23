function abbreviateString(str) {
  const stringArray = str.split(' ');
  const abbreviatedString = `${stringArray[0]} ${stringArray[stringArray.length - 1].charAt(0).toUpperCase()}.`;
  return abbreviatedString;
}

export { abbreviateString };
