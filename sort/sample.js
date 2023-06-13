

const a = [-5, 9, -3, 0, 7, -2, 4, -8, 1, -6]

function bubble (a) {
    let swapped 
    do{
        swapped = false 
        for(let i =0 ; i<a.length-1 ; i++ ) {

            if(a[i]>a[i+1]){
                let temp = a[i]
                a[i]=a[i+1]
                a[i+1] = temp
                swapped = true
            }
        
        }
    }while(swapped)
}

bubble(a)
console.log("Bubble sorted :");
console.log(a);

function insertion (a) {
    for(let i=1 ; i<Array.length ; i++) {
        let num = a[i]
        j=i-1
        while(j>=0 && a[j]>num) {
            a[j+1] = a[j]
            j--
        }
        a[j+1] = num
    }
}


insertion(a)
console.log("Insertion sorted :");
console.log(a);

function quick (a) {
    if(a.length<2) {
        return a
    }
    let pivon = a.length-1
    let left = []
    let right = []
    for(let i =0 ; i<a.length-1 ; i++) {
        if(a[i]<pivon){
            left.push(a[i])
        }else {
            right.push(a[i])
        }
    }
    return [...quick(left),pivon,...quick(right)]

}

quick(a)
console.log("Quick sorted  : ");
console.log(a);



