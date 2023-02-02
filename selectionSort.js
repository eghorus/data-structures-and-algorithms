/* O(n^2) */
export default function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    arr[minIndex] = arr[i];
    arr[i] = min;
  }
  return arr;
}
