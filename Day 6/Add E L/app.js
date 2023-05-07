
let h=document.getElementById("h1");
function btn(){
    window.console.log("hello sai!");
    h.style.color="red";

};
const btnElement=document.getElementById("BtnEl");

btnElement.onclick=function(){
    console.log("This is on Event listener");
    h.textContent="On Event Listener";
    h.style.color="red";
}
//important
 
// addEventListener = element.addEventListener(event, function);
const al=document.getElementById("vt");
 
al.addEventListener("click", function(){
    console.log("addEventListener");
    h.textContent="addEventListener";
    h.style.color="aqua";

});
