// we can use the loop can copy the same data to the other one
let src = {
    a :10,
    b:45,
    c:34
};
let dest = {};

for(let key in src){
    dest[key]= src[key];
}
console.log(dest);

src.a++;
console.log(src);