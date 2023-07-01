function quickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
      const index = partition(arr, left, right);
      if (left < index - 1) {
        quickSort(arr, left, index - 1);
      }
      if (index < right) {
        quickSort(arr, index, right);
      }
    }
    return arr;
  }
  
  function partition(arr, left, right) {
    const pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }
    return i;
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
  