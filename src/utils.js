function getKeyByIndex(obj, index) {
  return Object.keys(obj).find((key) => obj[key].index === index.toString());
}
export { getKeyByIndex };
