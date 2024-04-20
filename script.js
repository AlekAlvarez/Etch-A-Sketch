const container=document.querySelector("#big-container");
for(let i=0;i<16;i++){
    const row=document.createElement("div");
    row.className="row";
    for(let j=0;j<16;j++){
        const box=document.createElement("div");
        box.className="box";
        row.appendChild(box);
    }
    container.appendChild(row);
}