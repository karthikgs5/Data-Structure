const a = [-5, 9, -3, 0, 7, -2, 4, -8, 1, -6]

function mergeSort(a) {
    if(a.length<2){
        return a
    }
    const mid = Math.floor(a.length/2)
    const left = a.slice(0,mid)
    const right = a.slice(mid)
   return merge(mergeSort(left),mergeSort(right))

}

function merge (left , right) {
    const sorted =[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else {
            sorted.push(right.shift())
        }
    }
    return [...sorted , ...left , ...right]
}

console.log(mergeSort(a));


