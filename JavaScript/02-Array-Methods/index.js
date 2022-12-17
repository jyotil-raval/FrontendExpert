Array.prototype.myMap = function (callback) {
  const newArr = [];
  let counter = 0;
  for (let item of this) {
    newArr.push(callback(item, counter, this));
    counter++;
  }
  return newArr;
};

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  let counter = 0;
  for (let item of this) {
    if (callback(item, counter, this) === true) {
      newArray.push(item);
    }
    counter++;
  }
  return newArray;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulation = initialValue != null ? initialValue : this[0];
  let counter = 0;
  for (let item of this) {
    if (initialValue == null && counter === 0) {
      counter++;
    } else {
      accumulation = callback(accumulation, item, counter, this);
      counter++;
    }
  }
  return accumulation;
};
