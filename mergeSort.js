/* O(n log n) */
export default function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex);

  return mergeSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
}

/* O(n) */
function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (arr1Index < arr1.length) {
    if (arr1[arr1Index] > arr2[arr2Index]) {
      result.push(arr2[arr2Index]);
      arr2Index++;
    } else {
      result.push(arr1[arr1Index]);
      arr1Index++;
    }
  }
  return result.concat(arr1.slice(arr1Index)).concat(arr2.slice(arr2Index));
}
