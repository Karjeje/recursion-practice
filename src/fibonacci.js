function fibs(n) {
  if (n === 0) {
    return [];
  }

  if (n === 1) {
    return [0];
  }

  const fibArr = [0, 1];

  for (let i = 2; i < n; i++) {
    const firstNum = fibArr[fibArr.length - 2];
    const secondNum = fibArr[fibArr.length - 1];

    const newNum = firstNum + secondNum;
    fibArr.push(newNum);
  }
  return fibArr;
}

console.log(fibs(2));

// function fibsRec(n) {
//   console.log("This was printed recursively");

//   if (n === 0) {
//     return [];
//   }

//   if (n === 1) {
//     return [0];
//   }

//   if (n === 2) {
//     return [0, 1];
//   }

//   const prev = fibsRec(n - 1);

//   const firstNum = prev[prev.length - 2];
//   const secondNum = prev[prev.length - 1];

//   const newNum = firstNum + secondNum;

//   prev.push(newNum);

//   return prev;
// }

function fibsRec(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);

  const nextNumber = prev[prev.length - 1] + prev[prev.length - 2];

  return [...prev, nextNumber];
}

console.log(fibsRec(8));
