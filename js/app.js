'use strict';

const form = document.getElementById('tableForm');
const table = document.getElementById('myTable');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const numRows = parseInt(document.getElementById('rows').value);
    const numColumns = parseInt(document.getElementById('columns').value);

    generateTable(numRows, numColumns);
});

function generateTable(rows, columns) {
    table.innerHTML = '';

    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= columns; j++) {
            const cell = document.createElement('td');
            const cellValue = (i - 1) * columns + j;
            cell.textContent = cellValue;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}