
const sum = function(a,b){
    return a+b;
};console.log(sum(23,54));

const str = function(s){
    return s.length;
}
console.log(str("mark"));
 
const array = function(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    } 
    return sum;
};console.log(array([1,2,3,4,5,6,7,8]));
 
const even = function(n){
    return n%2===0;
};console.log(even(4));
console.log(even(5));
 

const p = function(a){
    let l="";
    for(let i=0;i<a.length;i++){
        if(a[i].length>l.length){
            l=a[i];
        } 
    } return l;
};console.log(p(["Vikram","sivaavaa","moon","vik","vicky"]));