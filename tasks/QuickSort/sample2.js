function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSort(arr, low, pivotIndex);
      quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
  }
  
  function partition(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)];
    let i = low - 1;
    let j = high + 1;
  
    while (true) {
      do {
        i++;
      } while (arr[i] < pivot);
  
      do {
        j--;
      } while (arr[j] > pivot);
  
      if (i >= j) {
        return j;
      }
  
      swap(arr, i, j);
    }
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  
  const array = [7, 2, 1, 6, 8, 5, 3, 4];
  console.log("Before sorting:", array);
  const sortedArray = quickSort(array);
  console.log("After sorting:", sortedArray);
  