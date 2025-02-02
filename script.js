let table = document.querySelector("#table");
let left = document.querySelector("#left");
let topDiv = document.querySelector("#top")

// CHESS BOARD UI USING LOOPS, DOM

for(let i = 1 ; i <= 8 ; i++){
    const tr = document.createElement("tr");
    for(let j = 1 ; j <= 8 ; j++){
        const td = document.createElement("td");
        tr.appendChild(td);

        td.style.height = "4rem";
        td.style.width = "4rem";
        td.style.backgroundColor = (((i+j)%2==0) ? "#fff" : "black");
    }
    table.appendChild(tr);
}

// ROWS AND COLUMN UI
const rows = [1, 2, 3, 4, 5, 6, 7, 8];
const column = ["A", "B", "C", "D", "E", "F", "G", "H"];

// LEFT DIV ELEMENTS
rows.forEach(leftElement => {
    let leftDiv = document.createElement("div");
    leftDiv.textContent = leftElement;
    left.appendChild(leftDiv);
});

// RIGHT DIV ELEMENTS
rows.forEach(rightElement => {
    let rightDiv = document.createElement("div");
    rightDiv.textContent = rightElement;
    right.appendChild(rightDiv);
})

// TOP DIV ELEMENTS
column.forEach(topElement => {
    let topDivChild = document.createElement("div");
    topDivChild.textContent = topElement;
    topDiv.appendChild(topDivChild);
})


