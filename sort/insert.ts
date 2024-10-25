function insertSort(numbers: number[]): number[] {
  const length = numbers.length;
  if (length <= 1) return numbers;
  let index = 1;
  while (index < length) {
    const curNum = numbers[index];
    for (let i = index - 1; i >= 0; i--) {
      if (curNum < numbers[i]) {
        numbers[i + 1] = numbers[i];
        numbers[i] = curNum;
      } else break;
    }
    index++;
  }
  return numbers;
}

// const arr = [64, 34, 25, 12, 22, 11, 90];
// const sortedArr = insertSort(arr);
// console.log(sortedArr);
