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
