module.exports = {
  add,
};

function add(args) {
// return numbers.reduce((sum, number) =>{
//   return sum + number;
// },0)
  const numbers = Array.isArray(args) ? args : Array.from(arguments);

  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return Number(sum);
}
