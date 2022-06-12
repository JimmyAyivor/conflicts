

function fn(...nums) {
  if (!nums.every((num) => Number.isNumber(num)))
    throw "All arguments must be numbers.";
  return nums.reduce((numA, numB) => numA + numB);
}

fn(1, 2, 3); //> 6 ( 1+2+3)
fn(10, "B", 20); //> error All arguments must be numbers
//Can not be letters
