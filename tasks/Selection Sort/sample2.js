function selectionSortObj(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < len; j++) {
        if (arr[j].score < arr[minIndex].score) {
          minIndex = j;
        }
      }
  
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  
    return arr;
  }
  
  const input = [
    { name: "John", score: 80 },
    { name: "Alice", score: 70 },
    { name: "Bob", score: 90 },
    { name: "Eva", score: 70 },
  ];
  const sorted = selectionSortObj(input);
  console.log(sorted);
  