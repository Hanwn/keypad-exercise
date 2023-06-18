export function _randomInt(n) {
  if (n <= 0) return -1;
  const limit = Math.pow(10, n);
  let value = Math.floor(Math.random() * limit);
  if (value < limit / 10 && value !== 0) {
    return _randomInt(n);
  }
  return value;
}
