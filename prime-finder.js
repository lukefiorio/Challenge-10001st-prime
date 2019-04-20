module.exports = function(n) {
  function isPrime(candidate) {
    // loop up to sqrt of a number to determine whether it's prime
    for (i = 2; i <= Math.sqrt(candidate); i++) {
      // if divisible by any numbers along the way, then not prime
      if (candidate % i === 0 || candidate === 1) {
        return false;
      }
    }
    return true;
  }

  let primeCounter = 0;
  let candidates = 2;
  while (primeCounter < n) {
    if (isPrime(candidates)) {
      primeCounter++;
    }
    candidates++;
  }

  return candidates - 1;
};
