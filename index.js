// Use when frequent : insertion/ deletion at beginning 

class Node {
  constructor(val){
    this.val = val;
    this.next=null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

//   O(1)
  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this
  }

   // O(n)
  pop(){
   if(!this.head) return;
   if(this.head===this.tail){
     this.head=this.tail= null;
   }else{
     let current = this.head;
   let prev = current; 
   while(current.next){
     prev = current;
     current = current.next;
   }
   this.tail = prev;
   this.tail.next = null;
   this.length--;
   return current
   }
   
  }

  //   O(n)
  print(){ 
    let current = this.head;
    let arr = [];
    while(current){
      arr.push(current.val);
      current = current.next;
    }
    return arr
  }

 
  // O(1) 
  shift(){ // delete first element of the array
   if(!this.head) return undefined;
   let head = this.head;
    if(this.length==1){
     this.head = this.tail = null;
    }else{
     this.head = head.next;
    }
    this.length--;
    return head;
  }

//   O(1)
  unshift(val){
  let newHead = new Node(val);
  if(!this.head){
    this.head = this.tail = newHead;
  }else{
    newHead.next = this.head;
    this.head = newHead;
  }
  this.length++;
  return this
  }


// O(n)
  getItem(index){
    if(index<0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index){
        current = current.next;
        counter +=1;
    }
    return current;
  }     

  
  setItem(index,value){
    let node = this.getItem(index);
    if(node){
      node.val = value;
      return true;
    }
    return false
  }


 // O(1)
  insert(index,value){
    if(index<0 || index >= this.length) return null;
    if(index === 0){
      this.unshift(value);
      return this;
    }
    if(index===this.length){
      this.push(value);
      return this;
    }
    let prevNode = this.getItem(index - 1);
    if(prevNode){
      let newNode = new Node(value);
      let temp = prevNode.next;
      prevNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return this;
    }
  }

 // depends 
  remove(index){
    if(index<0 || index >= this.length) return null;
    if(index===0){
      return this.shift();
    }
    if(index === this.length){
      return this.pop();
    }
    let prevNode = this.getItem(index-1);
    if(prevNode){
      let removeNode = prevNode.next;
      prevNode.next = removeNode.next;
      this.length--;
      return removeNode;
    }
  }


  reverse(){
    // [1 -> 2-> 3 -> 4 -> 5]. -> [1 <- 2 <- 3 <- 4 <- 5]
    let node = this.head;   //  node = 1
    this.head = this.tail;   // head = 5
    this.tail = node;       //  tail = 1
    let next;
    let prev = null;
    for(let i=0; i< this.length ; i++){
      next = node.next;   // next = 2
      node.next= prev;  // 1 -> null  ;  2-> 1
      prev = node;     // prev = 1
      node = next;      // node = 2
    }
    return this;
  }

}

var ll = new SinglyLinkedList();
ll.push('Hi');
ll.push('How');
ll.push('are');
ll.push('you');
ll.push('!');
console.log(ll.print());
// console.log('pop output',ll.pop());
// ll.shift();
//  console.log(ll.unshift('Hey'))
//  console.log('Final List',ll.print());
// console.log(ll.getItem(4))
// console.log(ll.print());
// console.log(ll.setItem(-1,"?"))
// console.log(ll.insert(2,'Kanchan'))
// console.log(ll.remove(9))
// console.log(ll.print());
console.log(ll.reverse())
console.log(ll.print());
