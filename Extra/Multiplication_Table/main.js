let table = document.getElementById("multip-table");
createTable();
let row = document.getElementById('row-input');
let column = document.getElementById('column-input');
let calcBtn = document.getElementById('calc-btn');

calcBtn.addEventListener('click',e =>{
    createTable(column.value,row.value);

})
function createTable(col = 20,row = 20){
    let output = "";
for (let i = 1; i <= row; i++) {
    output += "<tr>";
    for (let j = 1; j <= col; j++) {
        if (i == 1 && j == 1) {
            output += "<th>&times;</th>";
        } else {
            if (i == 1 || j == 1) {
                output += `<th>${i * j}</th>`;
            } else {
                if(i == j){
                    output += `<td id="equal">${i * j}</td>`;
                }else{
                    output += `<td>${i * j}</td>`;
                }
                
            }
        }
    }
    output += "</tr>";
}
table.innerHTML = output;
}
