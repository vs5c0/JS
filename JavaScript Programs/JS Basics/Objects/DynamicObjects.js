//In js Objects are in Dynamic nature they can easily modify and easily delete

function Rainbow()
{
    this.length=34,
    this.breadth=54
}
let Rain = new Rainbow();
//Add the data in the rainbow function

Rain.color="blue";
console.log(Rain);

//We can delete the data in the rainbow function
delete Rain.color;
console.log(Rain);