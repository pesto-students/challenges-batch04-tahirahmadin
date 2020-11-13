const deepCopyObject = (objToCopy) => {
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }

  const copiedObject = Object.fromEntries(
    Object.entries(objToCopy).map(([key, value]) => [key, deepCopyObject(value)]),
  );

  return copiedObject;
};

export { deepCopyObject };
