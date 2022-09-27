function checkPrime(num) {

  if(num <=1){
    return false;
  }
  
  let isPrime = true;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }

  return isPrime;
}