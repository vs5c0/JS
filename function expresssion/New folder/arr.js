let myArray = [12.4,"Gone", 1,0.4523,true,false];

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray[4]);
console.log(myArray[1]);

myArray[1] = 6;
console.log(myArray); 

let lengthOfArray = myArray.length;
console.log(lengthOfArray);


// Array Methods
// push()
// The push() method adds new items to the end of the array.
myArray.push(true);
console.log(myArray);
myArray.pop();
console.log(myArray);