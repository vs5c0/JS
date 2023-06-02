document.getElementById("bt").addEventListener("click" ,
async ()=>{
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response);
    const jsondata = await response.text()
    console.log(jsondata);

    document.getElementById("display").innerText=jsondata
    }catch(err){
        console.log(err);
    }
    
})


const b=document.getElementById("btn")
b.addEventListener("click",async function fun(){
    b.textContent='Wait'
    console.log("\n\t Button Clicked")
    try{
        const response=await fetch("api.json")
        console.log(response);
        const data = await r.text()
        console.log(data);
        document.getElementById("display").innerText=data;

    }catch (error){
        console.log(error);
        document.getElementById("display").innerText=error;
    }
}
)


