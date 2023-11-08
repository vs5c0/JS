//Constructor function follows the pascal notation
//Pascal Notation--> 1st letter in everyword is capital
//in the function we can use the this keyword for refer the current objects

//Without Parameters

function Square() {
    this.length=23,
    this.breadth=45,
    this.draw = function(){
        console.log("This is an Constrctor Function");
    }

};
//creating object by using constructor function
let ob = new Square();


//With Parameters

function Squares(leng,brea) {
    this.length=leng,
    this.breadth=brea,
    this.draw = function(){
        console.log("This is an Constrctor Function");
    }

};
//creating object by using constructor function
let obe = new Squares(34,25);