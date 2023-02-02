/* O(n^2) */
export default function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        arr = [...arr.slice(0, j), ...arr.splice(i, 1), ...arr.slice(j)];
        break;
      }
    }
  }
  return arr;
}
