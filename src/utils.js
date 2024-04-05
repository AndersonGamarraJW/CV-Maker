function getKeyByIndex(obj, index) {
  return Object.keys(obj).find((key) => obj[key].index === index.toString());
}
function nextDisplay(displays, currentDisplay) {
  const nextIndex = parseInt(currentDisplay.index) + 1;
  if (nextIndex > Object.keys(displays).length) return currentDisplay;
  const key = getKeyByIndex(displays, nextIndex);
  return displays[key];
}
function prevDisplay(displays, currentDisplay) {
  const prevIndex = parseInt(currentDisplay.index) - 1;
  if (prevIndex < 1) return currentDisplay;
  const key = getKeyByIndex(displays, prevIndex);
  return displays[key];
}

export { getKeyByIndex, nextDisplay, prevDisplay };
