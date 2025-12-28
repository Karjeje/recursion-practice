function mergeSort(arr) {
  if (arr.length === 1 || arr.length === 0) return arr;

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  const result = mergeHelper(leftSorted, rightSorted);

  return result;
}

console.log(mergeSort([105, 79, 100, 110]));
