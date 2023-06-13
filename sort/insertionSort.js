 function insertionSort (a) {
    
    for( let i =1 ; i<a.length ; i++){
        let num = a[i]
        let j = i-1
        while(j>=0 && a[j]>num){
            a[j+1] = a[j]
            j = j-1
        }
        a[j+1] = num

    }

 }
   

 const array = [8,20,-2,4,-6]
 insertionSort(array) 
 console.log(array);












