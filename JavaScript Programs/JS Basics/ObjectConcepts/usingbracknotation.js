//we can use the brack notation can ascces all the code using constructor function

let rectangle = new function(){
    
'length','breadth',
    `this.length:length;
    this.breadth:breadth;
    this.draw=function(){
        console.log("Draw");
    }`;

}
let rectan = new rectangle(12,43);
console.log(rectan);