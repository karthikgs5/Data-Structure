
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size =0
    }

    addToFirst (value) {
        const node = new Node(value)
        if(this.size == 0) {
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size ++
    }

    removeFrom(index) {
        let removeValue
        if(index < 0 || index >= this.size){
            return "Invalid Index"
        }
        else {
          
            let prev = this.head
           
            for( let i = 0 ; i<index-1 ; i++) {
               prev = prev.next
            }
           removeValue = prev.next
            prev.next = removeValue.next
        }
        this.size --
        return removeValue.value
    }



    print() {
        if (this.size == 0) {
          console.log("List is empty");
        } else {
          let current = this.head;
          let listValues = "";
      
          while (current) {
            listValues += `${current.value} `;
            current = current.next;
          }
      
          console.log(listValues);
        }

      }

}

const list = new linkedList
list.addToFirst(10)
list.addToFirst(20)
list.addToFirst(30)
list.addToFirst(40)
list.addToFirst(50)
list.print()
console.log(list.removeFrom(2));
list.print()