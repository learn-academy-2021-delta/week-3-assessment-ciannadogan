// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe('fibSequence', ()=>{
  it('returns array of Fibonacci Sequence if greater than two', ()=>{
    expect(fibSequence(number > 2)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSequence(number < 2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
//GOT RED

// b) Create the function that makes the test pass.

// create a function that takes in a number > 2 as an argument.
// evaluate the input to break it down into a sequence
// return an array of the numbers in the sequence
// I got stuck with this one, but this was my line of thinking

const fibSequence = (number) => {
  let newArr = []
  if (number > 2){
    return fibSequence(number-1) + fibSequence(number-2)
  }else {
    return "false"
  }
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe('onlyOdds', ()=>{
  it('determines if the values in an array are odd numbers', ()=>{
    expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
  })
})

// GOT RED

// b) Create the function that makes the test pass.

// create a function that takes in an array as an arguement
// determines .filter() which numbers are odd
// rearranges them from least to greatest
// returns a new array of only odd numbers sorted from least to greatest


const onlyOdds = (array) => {
  let newArr = [];
  for (let i=0; i<array.length; i++){
    if (typeof array[i]) === "number" && array[i]% 2 !==0){
      newArr.push(array[i])
    }
      return newArr.sort((a, b) => a - b)
  }

// GOT GREEN



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe('increaseSum', ()=>{
  it('returns an array of an accumulating sum', ()=>{
    expect(increaseSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(increaseSum(numberToAdd2)).toEqual([0, 7, -1, 11])
  })
})

// GOT RED

// b) Create the function that makes the test pass.

// create a function that takes in an array as an arguement
// iterates through the existing array using .map()
// adds the previous value in the array to the next value
// returns an array (same length) of an accumulated sum

// I also got stuck here using my original thought process^ I wasn't successful so I tried researching to find a solution
// like the function written below, but I still wasn't able to get the output I wanted

const increaseSum = (array) => {
  const creds = array.reduce((acc, val) => {
    let {sum, res} = acc;
    sum += val;
    res.push(sum)
    return {sum, res};
  }, {
    sum: 0,
    res: []
  });
    return creds.res;
};
console.log(increseSum(array));
