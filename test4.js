function getLargest(array) {
  return array
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join('');
}

console.log(getLargest([1, 3, 34, 44, 4, 45, 6, 76, 9, 98, 23]));

// Source: https://stackoverflow.com/questions/49530968/how-to-form-the-largest-number-from-a-set-of-an-array-in-javascript
