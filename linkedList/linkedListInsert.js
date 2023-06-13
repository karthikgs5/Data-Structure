class Node {
    constructor(value) {
      this.value= value
      this.next = null
    }
  }
  
  class linkedList {
    constructor() {
      this.head = null
      this.size = 0
    }
    addFirst(value) {
      const node = new Node(value)
      if(this.size ===0) {
        this.head=node
      }else {
        node.next = this.head
        this.head = node
      }
      this.size ++
    }
    addLast(value){
      const node = new Node(value)
      if(size === 0) {
        this.head=node
      }
      else {
        let prev=this.head
        while(prev.next) {
          prev =prev.next
        }
        prev.next=node
      }
      this.size++
    }
    insert(value, index) {
      if(index<0 || index > this.size) {
        return
      }
      if(index===0) {
        this.addFirst(value) 
      }
      else {
        const node = new Node (value)
        let prev = this.head
        for(let i=0 ; i< index-1 ; i++){
          prev =prev.next
        }
        node.next = prev.next
        prev.next = node
        
      }
       this.size++
     
    }
    print() {
      let printValue =""
      let current = this.head
      while(current) {
        printValue += `${current.value} `
        current = current.next
      }
      console.log(printValue)
    }
    
  }
  
  
  const list = new linkedList()
  
  list.insert (11,0)
  list.print()