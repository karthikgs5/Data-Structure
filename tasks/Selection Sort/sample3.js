function selectionSortStrings(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < len; j++) {
        if (compareStrings(arr[j], arr[minIndex]) < 0) {
          minIndex = j;
        }
      }
  
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  
    return arr;
  }
  
  function compareStrings(a, b) {
    return a.localeCompare(b);
  }
  
  const input = ["banana", "apple", "cherry", "date"];
  const sorted = selectionSortStrings(input);
  console.log(sorted);
  