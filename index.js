
function multiplyArrayElements(array) {
  let result = 1;
  for (let num of array) {
    result = result * num;
  }
  return result;
}

console.log(multiplyArrayElements([2, 3, 5, 7])); 
// 210
