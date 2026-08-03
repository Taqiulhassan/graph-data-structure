// const boxes = [1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[1]);
//   console.log(boxes[0]);
// }

// logFirstTwoBoxes(boxes);

// FUN Exercise 1:::

// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (i = 0; i < input.length; i++) {
//     //O(n)
//     anotherFunction(); //O(n)
//     let stranger = true; //O(n)
//     a++; //O(1)
//   }
//   return a; //O(1)
// }

// funChallenge();
// // BIG O(3 + 4n)

// // FUN Exercise 2::

// function anotherFunChallenge(input) {
//   let a = 5;
//   let b = 10;
//   let c = 50;
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; // O(n)
//     let y = 1 + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let i = 0; j < input; i++) {
//     let p = j * 2; //O(n)
//     let q = j * 2; //O(n)
//   }
//   let whoAmI = "I Don't know"; //O(1)
// }

//BIG O(4 + 7n)

//BIG O Rule 2: Exercise:

// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]);

//   var middleIndex = Math.floor(items.length / 2);
//   var index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }

//   for (var i = 0; i < 100; i++) console.log('hi');
// }
// const items = [];
// printFirstItemThenFirstHalfThenSayHi100Times(['a', 'b', 'c', 'd', 'e', 'f']);

//BIG O(1 + n/2 + 100)

//Drop Constant::
// function compressBoxesTwice(boxes, boxes2) {
//   boxes.forEach(function (boxes) {
//     console.log(boxes);
//   });

//   boxes2.forEach(function (boxes) {
//     console.log(boxes);
//   });
// }

// //O(a + b);

//Log all pairs of array::

// const boxes = [1, 2, 3, 4, 5];

// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(i, j);
//     }
//   }
// }

// logAllPairsOfArray(boxes);

//Drop Non_Dominants::

function printAllNumbersThenAllPairsSums(numbers) {
  console.log('these are the numbers:');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function (firtsNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firtsNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairsSums([1, 2, 3, 4, 5]);
