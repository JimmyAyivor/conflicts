function fn(...c) {
    if (!c.every((result) => Number.isNumber(result)))
      throw "All arguments must be numbers.";
    return c.reduce((result, b) => result + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.