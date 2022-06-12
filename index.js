

function fn(...apples) {
  if (!apples.every((apple) => Number.isNumber(apple)))
    throw "All arguments must be numbers.";
  return apples.reduce((numA, numB) => numA + numB);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.
