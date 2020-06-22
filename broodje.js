// lijst voor boordje kaas
// get a slice of bread
// get a another slice of bread
// get a slice of cheese

const makeSandwich = (filling) => {
  console.log(
    " get a slice of bread" +
      "" +
      "get a" +
      filling +
      "get a another slice of bread"
  );
};

//calculateDiscountedPrice

const calculateDiscountedApproved = function (totalAmount, discount) {
  if (totalAmount > 25) {
    return totalAmount - discount;
  } else {
    return totalAmount;
  }
};

console.log(calculateDiscountedApproved(26, 25));
