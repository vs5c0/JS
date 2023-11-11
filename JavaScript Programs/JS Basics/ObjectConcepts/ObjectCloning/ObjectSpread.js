//we can use to access the data or copy the data by using another way

//Syntax :: let var_name = {...var_name}

let rsc = {
    f :3432,
    e:2342,
    w:54
};
let de = {...rsc};
console.log(de);
rsc.f++;
console.log(rsc);