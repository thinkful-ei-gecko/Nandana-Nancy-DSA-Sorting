const LinkedList = require('./LinkedList2')


function display(ll) { 
    // console.log('this is getting passed into display',ll)
    
    let string = ''
  
    let current = ll.head
    // console.log('this is the ll.head',ll.head)
    while(current !== null) {
      // console.log('current value', current.value)
      string += current.value + ', '
      current = current.next
    }
    console.log(string)

  }


let ll = new LinkedList
ll.insertFirst(10)
ll.insertLast(90)
// ll.insertLast(34)
// ll.insertLast(80)
ll.insertLast(7)
ll.insertLast(8)
ll.insertLast(9)
ll.insertLast(12)
// console.log(JSON.stringify(ll))

//traverse through the list to find the length 
//get the middle node 
//make 2 linked-list (left and right)

//in merge(left, right, ll)
// if(left.value < right.value)
// insert to a new linkedlist 

//10 - 90 - 7 - 8 - 9 - 12
function mergeLL(left, right) {
    let result = new LinkedList() 

    let resultPointer = result.head
    let pointerLeft = left
    let pointerRight = right

    while(pointerLeft && pointerRight) {
        let tempNode = null 
        if(pointerLeft.value > pointerRight.value){
            tempNode = pointerRight.value
            pointerRight = pointerRight.mext
        }

    }

    while(currLeft && currRight){
        if(currLeft.value < currRight.value){
            mergeList.insertLast(currLeft.value)
            currLeft = currLeft.next
        }
        else {
            mergeList.insertLast(currRight.value)
        }
    }
    while(left !== null){
        mergeList.insertLast(currLeft.value)
        currLeft = currLeft.next
    }

}
function mSortLinkedList(ll){
    let count = 0
    let countll = ll
    let leftPart = ll
    let leftPointer = ll
    let rightPart = null
    let rightPointer = null 

    if(countll.next !== null) {
        return ll
    }


    const middle = Math.floor(count / 2)
    let count2 = 0

    while(count2 < middle) {
        count2++
        leftPointer = leftPointer.next
    }
    rightPart = new LinkedList(leftPointer.next)
    leftPointer.next = null
    return mergeLL(mSortLinkedList(leftPart), mSortLinkedList(rightPart))
}


console.log(mSortLinkedList(ll))

