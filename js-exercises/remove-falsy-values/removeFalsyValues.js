function removeFalsyValues(array) {
  const correctArray = array.filter((element) => {
    if (element) {
      return element;
    }
    return null;
  });
  return correctArray;
}

export { removeFalsyValues };
