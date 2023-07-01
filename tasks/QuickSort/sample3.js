function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivotIndex = randomizedPartition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
  }
  
  function randomizedPartition(arr, low, high) {
    const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    swap(arr, randomIndex, high);
    return partition(arr, low, high);
  }
  
  function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }
  
    swap(arr, i + 1, high);
    return i + 1;
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
  