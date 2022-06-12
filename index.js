const fn = (...nums) => {
  return !nums.every((num) => Number.isNumber(num)) ? "All arguments must be numbers." : nums.reduce((numA, numB) => numA + numB);
  // if (!nums.every((num) => Number.isNumber(num)))
  //   throw "All arguments must be numbers.";
  // return nums.reduce((numA, numB) => numA + numB);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.
