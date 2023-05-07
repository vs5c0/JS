let headingElement = document.createElement("h1");
headingElement.textContent="Web Developer";
// headingElement.style.color="blue";
// headingElement.style.fontSize= "40px";
// headingElement.style.fontFamily="Caveat";
headingElement.classList.add("heading");
document.body.appendChild(headingElement);


let buttonElement=document.createElement("button");
buttonElement.textContent="Change";
buttonElement.style.color="blue";
document.body.appendChild(buttonElement);



let con = document.getElementById("c");
con.appendChild(headingElement);
con.appendChild(buttonElement);


buttonElement.classList.add("bt");



let button=document.createElement("button");
button.textContent="Remove";


button.classList.add("bt1");
con.appendChild(button);

button.onclick=function(){
    headingElement.classList.remove("heading");
}



buttonElement.onclick=function(){
    headingElement.textContent="Front Developer";
    headingElement.style.color="black";

}




let img=document.getElementById("img");
let input=document.getElementById("input");

input.onchange=(f)=>{
    if(input.files[0])
    img.src=URL.createObjectURL(input.files[0]);

};

