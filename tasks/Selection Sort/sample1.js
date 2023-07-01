function selectionSort(arr) {
    const len = arr.length;
    
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      
     
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      
     
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    
    return arr;
  }
  
  const input = [64, 25, 12, 22, 11];
  const sorted = selectionSort(input);
  console.log(sorted);
  