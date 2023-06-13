function bubbleSort(array) {
    try {
        let swapped 
        do{
            swapped = false
        for(i=0;i<array.length-1;i++) {
            if(array[i]>array[i+1]) {
                let temp = array[i]
                array[i] =array[i+1]
                array[i+1] = temp
                swapped = true
            }

           
        }
    } while(swapped)
      
        
    } catch (error) {
        console.log(error.message);
    }
}

let array =[-6,20,8,4,-2]

bubbleSort(array)
console.log(array);