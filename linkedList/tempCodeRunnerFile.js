// const set = new Set([1,2,3])
// set.add(5)

// for( item of set){
//     console.log(item);
// }



class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList  {
     constructor() {
        this.head = null
        this.tail = null
        this.size=0
     }
     isEmpty() {
        return this.size===0
     }
     getSize() {
        return this.size
     }
   prepnd(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node 
      this.tail = node
    }else {
      node.next = this.head
      this.head = node
    }
    this.size++
   }
   append(value){
    const node = new Node(value)
    if(this.isEmpty){
      this.head = node
      this.tail = node
    }else {
      this.tail.next =node
      this.tail = node
    }
    this.size++
   }
   removeFromFront() {
    if (this.isEmpty()) {
      return null
    }
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
   }
   removeFromEnd(){
    if (this.isEmpty()) {
      return null
    }
    const value = this.tail.value
    if(this.size === 1) {
      this.head =null
      this.tail == null
    }else {
      let prev = this.head 
      while(prev.next !== this.tail) {
        prev.next
      }
      prev.next = null
      this.tail = prev
    }
    this.size--
    return value
   }
   reverse () {
    let prev = null
    let curr = this.head
    while(curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
    }
    this.head = prev
   }

     print() {
        if (this.isEmpty()) {
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

const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)
console.log(list.getSize());
list.print()



// list.reverse()
// list.print()















