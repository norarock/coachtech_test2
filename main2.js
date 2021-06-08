const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (a, i, item) {
  return item.indexOf(a) === i;
});

console.log(result);