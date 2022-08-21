Array.prototype.myReduce = function(func, init) {
    let accum = init;
    for (let i=0; i<this.length; i++) {
        accum = func(accum,this[i]);
    }
    console.log('total scores: ',accum);
    return accum;
};
 
function adder(a,b) {
    return a + b;
};
 
const arr1 = [90,98,89,100,100,86,94];
const arr2 = [40,65,77,82,80,54,73,63,95,49];

console.log((arr1.myReduce(adder,0)/arr1.length).toFixed(2)); // output = 93.86
console.log((arr2.myReduce(adder,0)/arr2.length).toFixed(2)); // output = 67.8
//--------------------------------------------------------------------------------------------

Array.prototype.myMap = function(callback) {
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
      let counter = callback(this[i]);
      newArray.push(counter);
    }
    return newArray;
  };
  
  let arr = [1, 2, 3];
  arr = arr.myMap(e => e * 2);
  console.log(arr);