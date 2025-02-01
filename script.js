let table = document.querySelector("#table");

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