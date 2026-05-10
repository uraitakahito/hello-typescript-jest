import primeNumber from '../primeNumber';

describe('primeNumber', () => {
  it.concurrent('should return false when n is less than 1', () => {
    const isprime = primeNumber(0);
    expect(isprime).toBe(false);
  });

  it.concurrent('should return false when n is not a prime number', () => {
    const isprime = primeNumber(4);
    expect(isprime).toBe(false);
  });

  it.concurrent('should return true when n is a prime number', () => {
    const isprime = primeNumber(7);
    expect(isprime).toBe(true);
  });

  it.concurrent('should return true when n is a large prime number', () => {
    const isprime = primeNumber(997);
    expect(isprime).toBe(true);
  });
});
