<<<<<<< HEAD``
function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return c.reduce((a, b) => a + b);
  }
  

  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.

  
=======
function fn(...nums) {
  if (!nums.every((num) => Number.isNumber(num)))
    throw "All arguments must be numbers.";
  return nums.reduce((numA, numB) => numA + numB);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.
>>>>>>> 450c7618dbf3c9413c7294b9e8a63c2aaf3afca5
