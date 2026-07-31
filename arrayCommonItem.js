const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['a', 'y', 'z'];

function containCommonItem (arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// Big 0(n^2)
console.log(containCommonItem(array1, array2))