function fibonacci(num) {
  // type your code here
  // have an array of [0, 1]
  // if num is < 2
    // return array[num]
  // otherwise, loop num -1 times and push value to array that is the sum of the last number and second to last number
  // return array[num]

  // [0, 1, 1, 2, 3, 5]

  let arr = [0, 1];

  if (num < 2) {
    return arr[num]
  } else {
    for (let i =0; i < num -1; i++) {
      arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
  }
  return arr[arr.length - 1]
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting: 2")
  console.log("=>", fibonacci(3))
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
