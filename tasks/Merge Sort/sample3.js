function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const sortedArray = array.slice(); 
    const tempArray = array.slice(); 
    const len = array.length;
  
    for (let blockSize = 1; blockSize < len; blockSize *= 2) {
      for (let start = 0; start < len; start += 2 * blockSize) {
        const leftStart = start;
        const mid = Math.min(start + blockSize, len);
        const rightStart = Math.min(start + 2 * blockSize, len);
  
        merge(sortedArray, tempArray, leftStart, mid, rightStart);
      }
  
      const temp = sortedArray;
      sortedArray = tempArray;
      tempArray = temp;
    }
  
    return sortedArray;
  }
  
  function merge(array, tempArray, leftStart, mid, rightStart) {
    let leftIndex = leftStart;
    let rightIndex = mid;
    let tempIndex = leftStart;
  
    while (leftIndex < mid && rightIndex < rightStart) {
      if (array[leftIndex] <= array[rightIndex]) {
        tempArray[tempIndex] = array[leftIndex];
        leftIndex++;
      } else {
        tempArray[tempIndex] = array[rightIndex];
        rightIndex++;
      }
      tempIndex++;
    }
  
    while (leftIndex < mid) {
      tempArray[tempIndex] = array[leftIndex];
      leftIndex++;
      tempIndex++;
    }
  
    while (rightIndex < rightStart) {
      tempArray[tempIndex] = array[rightIndex];
      rightIndex++;
      tempIndex++;
    }
  }
  
  const arr = [5, 2, 9, 1, 7, 6, 4, 8, 3];
  const sortedArr = mergeSort(arr);
  console.log(sortedArr);
  