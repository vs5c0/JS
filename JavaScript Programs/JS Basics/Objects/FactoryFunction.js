// In this factory function we can send a request to create a object in factory function will give the created objects

// without parameters 
function createRectangle(){
    return rectangle =
    {
        length:1,
        breadth:4,
        draw(){
            console.log("Drawing Rectangle");
        }
    }
};
// creating a object by using the factory function
let obj1 = createRectangle();



// with parameters 
function newRectangles(len,bre){
    return rectangles =
    {
        length:len,
        breadth:bre,
        draw(){
            console.log("Drawing Rectangle");
        }
    }
};
// creating a object by using the factory function
let obj2 = newRectangles(5,10);