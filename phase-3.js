const [addNums, addManyNums] = require("./phase-1");


function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  const sums = [];
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += addNums(i * increment);
    sums.push(sum);
  }

  // Then, add timing code
  console.time("addNums10Timing");
  console.timeLog("addNums10Timing");
  
  // Your code here

  console.timeEnd("addNums10Timing");

  return sums;
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  const sums = [];
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += addManyNums(i * increment);
    sums.push(sum);
  }

  // Then, add timing code
  console.time("addManyNums10Timing");
  console.timeLog("addManyNums10Timing");

  // Your code here

  console.timeEnd("addManyNums10Timing");

  return sums;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);