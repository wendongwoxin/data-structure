function selectSort(numbers: number[]): number[] {
    let index = 0
    while (index < numbers.length) {
        let min = numbers[index]
        let pointer = index
        for (let i = index + 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                pointer = i
                min = numbers[i]
            }
        }
        [numbers[pointer], numbers[index]] = [numbers[index], numbers[pointer]]
        index++
    }
    return numbers
}

const arr = [64, 34, 25, 12, 22, 11, 90]; 
const sortedArr = selectSort(arr);  
console.log(sortedArr);