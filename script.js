let container=document.querySelector("#big-container");
const body=document.querySelector("body");
function box(size=16){
    for(let i=0;i<size;i++){
        const row=document.createElement("div");
        row.className="row";
        for(let j=0;j<size;j++){
            const box=document.createElement("div");
            box.className="box";
            row.appendChild(box);
            box.addEventListener("mouseenter",(event)=>{
                event.target.style.backgroundColor="black";
            })
        }
        container.appendChild(row);
    }
}
box();
const button=document.querySelector("button");
button.addEventListener("click",()=>{
   let size= prompt("How many squares wide and long should it be?");
   if(isNaN(size*1)){
    alert("Invalid input");
    return;
   }
   container.remove();
   container=document.createElement("div");
   container.id="big-container";
   body.appendChild(container);
    box(size);
});