function updateInventory(...args) {
  const [currentInventory, newInventory] = [...args];

  newInventory.map((newItem, newIndex) => {
    currentInventory.forEach((curItem, curIndex) => {
      if (curItem[1] === newItem[1]) {
        const finalQuantity = newItem[0] + curItem[0];
        currentInventory[curIndex][0] = finalQuantity;
        newInventory.splice(newIndex, 1);
      }
    });
    return newItem;
  });
  return [...currentInventory, ...newInventory].sort((a, b) => a[1].localeCompare(b[1]));
}

export { updateInventory };
