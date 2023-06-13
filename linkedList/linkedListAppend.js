class Node  {
    constructor(value) {
      this.value = value
      this.next =null
        }
  }
  
  class linkedList {
    constructor(){
      this.head = null
    this.size = 0
    }
    addLast (value) {
      const node = new Node(value)
      if(this.size ===0) {
        this.head = node 
      }else {
        let prev = this.head
        while(prev.next){
          prev = prev.next
        }
        prev.next = node
      }
      this.size ++
    }
    print() {
      let printValue = ""
      let current = this.head
      if(this.size=0){
        console.log("List is Empty")
      }
      else{
      while(current) {
        printValue += `${current.value} `
        current = current.next
      }
      console.log(printValue)
      }
    }
    
  }
  const list = new linkedList()
  list.addLast(10)
    
  list.addLast(20)
  list.addLast(30)
  list.print()