// ###########Implement a function to flatten an array without using the flat() method:#####
function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
  }
  
  // Test
  console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]

//   ##########Implement a function to find the intersection of two arrays:#########
function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
  }
  
  // Test
  console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]

// ####################IS PRIME OR NOT################################################

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      console.log(Math.sqrt(num))
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Test
  console.log(isPrime(11)); // Output: true

//   ###############################################LONGEST WORD############################
  function longestWord(str) {
    const words = str.split(' ');
    let longest = '';
    for (const word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  
  // Test
  console.log(longestWord('The quick brown fox jumps over the lazy dog')); // Output: 'quick'
  
  
  