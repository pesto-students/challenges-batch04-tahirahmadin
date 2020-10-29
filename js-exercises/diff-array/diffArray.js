function diffArray(arr1, arr2) {
  // Comparing arrays with each other and then mergin them.
  const Assyemtric1 = arr1.filter((element) => arr2.indexOf(element) === -1);
  const Assyemtric2 = arr2.filter((element) => arr1.indexOf(element) === -1);
  return Assyemtric1.concat(Assyemtric2);
}
export { diffArray };
