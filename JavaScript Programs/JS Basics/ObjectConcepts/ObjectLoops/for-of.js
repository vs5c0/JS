//for fo --> used to iterate the code 
//keys and entires plays a keyrole to access the values

let rec = {
    length:32,
    breadth:23
};
for(let key of Object.entries(rec)){
    console.log(key)
}

//we can use condtional stms for finding the propeteries are present are not in the objects

if('length' in rec){
    console.log("Present");
}
else{
    console.log("Absent");
}