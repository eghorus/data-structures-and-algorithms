/* O(n) */
export const findFactorialRecursive = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * findFactorialRecursive(n - 1);
};

/* O(n) */
export const findFactorial = (n) => {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};
