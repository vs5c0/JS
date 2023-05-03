//function Declaration

function add(a,b){
    return a+b;

}
console.log(add(4,5));



//Funtion expression
let mul = function(x,y){
    return x*y;
};
console.log(mul(3,4));


//Arrow function symbol =>
let sub = (m,n) =>{
    let result = m-n;
    return result;
};
console.log(sub(9,7));