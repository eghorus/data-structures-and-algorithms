/* O(2^n) */
export function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/* O(n) */
export function fibonacci(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

/* O(n) */
export function fibonacciCached() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    }

    if (n < 2) {
      return n;
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}
