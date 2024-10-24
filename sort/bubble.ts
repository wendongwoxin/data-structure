function bubbleSort(numbers: number[]): number[] {  
    let len = numbers.length;  
    let swapped: boolean; // 用于标记当前轮次是否发生了交换  
  
    // 当数组长度大于1时继续排序  
    while (len > 1) {  
        swapped = false; // 每轮开始前重置交换标记  
  
        // 从数组的第二个元素开始，到当前未排序部分的最后一个元素结束  
        for (let i = 1; i < len; i++) {  
            // 如果前一个元素比后一个元素大，则交换它们  
            if (numbers[i - 1] > numbers[i]) {  
                [numbers[i - 1], numbers[i]] = [numbers[i], numbers[i - 1]]; // 使用解构赋值交换元素  
                swapped = true; // 标记发生了交换  
            }  
        }  
  
        // 如果没有发生交换，说明数组已经有序，可以提前退出  
        if (!swapped) {  
            break;  
        }  
  
        len--; // 每轮排序后，未排序部分的长度减1  
    }  
  
    return numbers; // 返回排序后的数组  
}  
  
// 测试冒泡排序函数  
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];  
const sortedArray = bubbleSort(unsortedArray);  
console.log(sortedArray); // 输出排序后的数组