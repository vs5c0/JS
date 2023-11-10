// reference types --> used to copy the address/refference of variable

let x = {
    value:10
};
let y = x;
x++;
console.log(x.value);

//Using functions

let p = {
    value:12
};
function inc(p){
p++;
}
inc(p);
console.log(p.value);