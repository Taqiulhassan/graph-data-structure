// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['a', 'y', 'z'];

// function containCommonItem (arr1, arr2) {
//   for(let i = 0; i < arr1.length; i++) {
//     for(let j = 0; j < arr2.length; j++) {
//       if(arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// // Big 0(n^2) Time complexity
//O(1) - space complexity

// console.log(containCommonItem(array1, array2))




//array ==> obj {
// a:true,
// b: true,
// c: true,
// x: true
// }

//array2[index] === obj.properties
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['a', 'y', 'z'];


function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 3 params?
  let map = {}
  for (let i =0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true;
    }
  }
  // loop through second array and check if item in
  //  second array exists on created object.
  for(let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false
 }

 //O(a + b) Time Complexity.
// O(a) spacew complexity.

//  console.log(containsCommonItem2(array1, array2))

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItem3(array1, array2))

//O()