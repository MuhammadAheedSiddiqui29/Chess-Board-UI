let table = document.querySelector("#table");

// CALLING THE DIVS THROUGH DOM
let leftDiv = document.querySelector("#left");
let rightDiv = document.querySelector("#right");
let topDiv = document.querySelector("#top")
let bottomDiv = document.querySelector("#bottom");

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
    let leftDivChild = document.createElement("div");
    leftDivChild.textContent = leftElement;
    leftDiv.appendChild(leftDivChild);
    leftDiv.style.display = "flex";
    leftDiv.style.flexDirection = "column";
    leftDiv.style.gap = "2.4rem";
    leftDiv.style.color = "#fff";
    leftDiv.style.fontSize = "1.5rem";
});

// RIGHT DIV ELEMENTS
rows.forEach(rightElement => {
    let rightDivChild = document.createElement("div");
    rightDivChild.textContent = rightElement;
    rightDiv.appendChild(rightDivChild);
    rightDiv.style.display = "flex";
    rightDiv.style.flexDirection = "column-reverse";
    rightDiv.style.gap = "2.4rem";
    rightDiv.style.color = "#fff"; 
    rightDiv.style.fontSize = "1.5rem";
})

// TOP DIV ELEMENTS
column.forEach(topElement => {
    let topDivChild = document.createElement("div");
    topDivChild.textContent = topElement;
    topDiv.appendChild(topDivChild);
    topDiv.style.display = "flex";
    topDiv.style.gap = "3.1rem";
    topDiv.style.color = "#fff";
    topDiv.style.fontSize = "1.5rem";
})

// BOTTOM DIV ELEMENTS
column.forEach(bottomElement => {
    let bottomDivChild = document.createElement("div");
    bottomDivChild.textContent = bottomElement;
    bottomDiv.appendChild(bottomDivChild);
    bottomDiv.style.display = "flex";
    bottomDiv.style.gap = "3.1rem";
    bottomDiv.style.flexDirection = "row-reverse";
    bottomDiv.style.color = "#fff";
    bottomDiv.style.fontSize = "1.5rem";
})


