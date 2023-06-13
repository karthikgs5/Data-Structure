class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(value) {
    const node = new Node(value);
    if (this.size == 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.size == 0) {
      console.log("List is Empty");
    } else {
     let printValue = "";
     let current = this.head;
      while (current) {
        printValue += `${current.value} `;
        current = current.next;
      }
      console.log(printValue );
    }
  }
}

const list = new linkedList();

list.addFirst(10);
list.print();
list.addFirst(50)
list.print()
