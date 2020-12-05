function chunkArrayInGroups(array, chunkSize) {
  const resultArray = [];
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength / chunkSize; i += 1) {
    const arrayGroup = array.splice(0, chunkSize);
    resultArray.push(arrayGroup);
  }
  return resultArray;
}

export { chunkArrayInGroups };
