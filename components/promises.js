export function promise_demo(){

var x = new Promise(function(resolve, reject) { 
    setTimeout(() => resolve(4), 2000); });

    var y = new Promise(function(resolve, reject) { 
    setTimeout(() => resolve(4), 2000); });



Promise.all([x, y]).then(function (promises) {
    let sum=0;
promises.forEach(function (text) 
{   sum = sum+text;
     });
     console.log(sum); //Output: bar foo after 2 secs.
});
}