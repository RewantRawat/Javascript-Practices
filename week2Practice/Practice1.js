////MAP FUNCTION PROTOTYPE////

Array.prototype.mymap =function(callback){
let res = []
for(let i =0;i<this.length;i++){
    res.push(callback(this[i],i,this))

}
return res;
}

console.log([1,2,3].mymap(x=>x*2));


// Array.prototype.map = function(r){
//     let result = []
//     for(let i =0;i<this.length;i++){
//         result.push(r(this[i],i,this))
//     }
//     return result;
// }


    // Array.prototype.newmapp = function(back){
    //     let result1 = []
    //     for(let i =0;i<this.length;i++){
    //         result1.push(back(this[i],i,this))
    //     }
    //     return result1
    // }

    // console.log([2,4,6].newmapp(x=>x+3));

   Array.prototype.mymap =function(callback){
let res = []
for(let i =0;i<this.length;i++){
    res.push(callback)
}
}

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completed = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(res => {
          result[i] = res;
          completed++;
          if (completed === promises.length) resolve(result);
        })
        .catch(reject);
    });
  });
};


Promise.myAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(console.log);
