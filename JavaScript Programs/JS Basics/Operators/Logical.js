// Logical Operators are used to perform the logical relationship between two values
// There are Mainly 3 types of Logical Operators. They are
// 1 AND --> if both conditions are true the result is true

let at = 50 ;
let bt = 25;
let ct = (at>bt && bt<at)
console.log("AND Operator:", ct)

// 2 OR --> if one condition is true the result is true

let ae = 20 ;
let be = 10;
let ce = (at==bt || bt>at)
console.log("OR Operator:", ce)

// 3 NOT --> if condition is true the result is false

let aaaa = 50;
console.log("NOT Operator: ", aaaa!=50)

// Logical Operators with Boolean

let d = (false || 'Love')
console.log("With Boolean:", d)