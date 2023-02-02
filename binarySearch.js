/* O(log n) */
export default function binarySearch(arr, start = 0, end = arr.length - 1, target) {
  if (start > end) return -1;
  let midIndex = Math.floor((start + end) / 2);

  if (arr[midIndex] === target) return midIndex;
  if (arr[midIndex] > target) return binarySearch(arr, start, midIndex - 1, target);
  else return binarySearch(arr, midIndex + 1, end, target);
}
