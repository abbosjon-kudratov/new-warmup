module.exports = function warmup(temperature) {
  if (temperature === -20) {
    return -4;
  }
  if (temperature === 0) {
    return 32;
  }

  else return (9*temperature/5+32);
};
