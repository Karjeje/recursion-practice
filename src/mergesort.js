function mergeSort(arr) {
  if (arr.length === 1 || arr.length === 0) return arr;

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  const result = mergeHelper(leftSorted, rightSorted);

  return result;
}

function mergeHelper(arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

console.log(mergeSort([105, 79, 100, 110]));
