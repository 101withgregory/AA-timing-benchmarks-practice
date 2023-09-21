const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  const sums = [];
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += addNums(i * increment);
    sums.push(sum);
  }
  return sums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  const sums = [];
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += addManyNums(i * increment);
    sums.push(sum);
  }
  return sums;
}

module.exports = [addNums10, addManyNums10];