// ******************REVERSE********************
function reversestring(str){
    return str.split('').reverse().join('')
}
console.log(reversestring('Hello'))

// *****************FACTORIAL*******************
function factorial(n){
    if(n==0||n==1)
    return 1;
    else 
    return n*factorial(n-1)
}
console.log(factorial(5))

// *****************PALINDROME*********************
function palindrome(str){
    reversed=str.split('').reverse().join('')

    return str===reversed;
}
console.log(palindrome('madam'))

// *******************Maximun***********************
function max(arr){
    maximun=Math.max(...arr)
    return maximun
}
console.log(max([3,45,6,7,2,4,21,4,3,5,5,0,453]))

// ******************MINIMUM***********************
function min(arr){
    minimum=Math.min(...arr)
    return minimum
}
console.log(min([3,45,6,7,2,4,21,4,3,5,5,0,453]))

// *************DEBOUNCE***********************
function debounce(func, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Test
  const debouncedFunction = debounce(() => console.log('Debounced function called'), 13000);
  debouncedFunction(); // This will be executed after 1 second

//   **********************FLATENING ARRAY*************************
function flattenArray(arr){
    return arr.flat(Infinity)//Infity is the depth we can have 1 or 2 any depth if not sure use"Infinity"
}
console.log(flattenArray([[1,2,[4,5,4,3,6,7]],[6,8,3,9,],2,1,4,7,]))

//output
// [
//     1, 2, 4, 5, 4, 3,
//     6, 7, 6, 8, 3, 9,
//     2, 1, 4, 7
// //   ]
  

// ********************THROTLING****************************************
function throttle(func, delay) {
    let canCall = true;
    return function(...args) {
      if (canCall) {
        func.apply(this, args);
        canCall = false;
        setTimeout(() => canCall = true, delay);
      }
    };
  }
  
  // Test
  const throttledFunction = throttle(() => console.log('Throttled function called'), 1000);
  throttledFunction(); // This will be executed immediately
  throttledFunction(); // This will be ignored

//   ***************************ANGRAM**********************************************
function isAnagram(str1,str2){
    sot1=str1.split('').sort().join('')
    sot2=str2.split('').sort().join('')
    console.log(sot1,sot2)
    return sot1===sot2
}
console.log(isAnagram('listen','silent'))
//output true

// *********************************Fibonnaci series*************************************
function fibanaci(n){
    const sequence=[0,1]
    for(i=2;i<=n;i++){
        sequence.push(sequence[i-1]+sequence[i-2])
    }
    return sequence;
}
console.log(fibanaci(10))
// output 
// [
//     0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34,
//    55
//  ]

// ********************REMOVE DUPLICATE**************************************************
function dupe(arr){
    return Array.from(new Set[arr])
}
console.log(dupe([1,1,1,1,1,3,4,4,4,4,56,6,6,6,6,6,78,8,8,8,8,9,9]))
// output  
// [
//     1,  3, 4, 56,
//     6, 78, 8,  9
//   ]



// ********************************Reverse a Linked List******************************
class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  
  // Test
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(4);
  
  const reversedList = reverseLinkedList(list);
  console.log(reversedList); // Output: ListNode { value: 4, next: ListNode { value: 3, next: ListNode { value: 2, next: ListNode { value: 1, next: null } } } }
  