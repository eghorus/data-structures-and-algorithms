/* Big O Rules */
/*
  Rule 1: Worst case
  Rule 2: Remove constants
  Rule 3: Different terms for inputs
  Rule 4: Drop non dominant terms 
*/

/* Notes */
/*
  1. Iterating through half of a list is still O(n)
  2. Iterating through two separate input lists is O(a * b) if nested and (a + b) if adjacent
  3. What causes time in a function:
    1. Operations (+, -, *, /)
    2. Comparisons (<, >, ===)
    3. Looping
    4. Outside function call
  4. What causes space in a function:
    1. Variables
    2. Data structures
    3. Function call
    4. Allocations
  5. Data Structures (Ways to store data) + Algorithms (Ways to act on or use data) = Programs
     Selecting the right data structures and the right algorithms results in good programs
  6. Good Code is:
    1. Readable
    2. Scalable
      1. Time efficient
      2. Memory efficient
  7. The Big O notation of string.length depends on the language used and the implementation of this method
     In JavaScript 'length' is a property that accesses the value and returns it so it is O(1)
  8. Divide and conquer algorithms is O(log n)
*/

const nums = new Array(10000).fill(null);
for (let i = 0; i < nums.length; i++) {
  nums[i] = i;
}

export function printPerformance(arr = nums) {
  const t0 = performance.now();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
    console.log(i);
  }
  console.log(count);
  const t1 = performance.now();

  console.log(`Time Elapsed: ${t1 - t0} ms`);
}
