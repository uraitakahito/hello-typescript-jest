function fizzbuzz(n: number): number | 'Fizz' | 'Buzz' | 'FizzBuzz' {
  if (n % 15 === 0) {
    return 'FizzBuzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }
  return n;
}

for (let i = 2; i <= 6; i += 1) {
  console.log(fizzbuzz(i));
}
