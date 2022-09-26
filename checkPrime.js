function checkPrime(num) {

  let isPrime = true;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }

  return isPrime;
}