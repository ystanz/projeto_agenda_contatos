const form = document.getElementById('contact_form');
const names = [];
const numbers = [];

let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLines();
    upgradeTable();
});

function addLines() {
    const inputContactName = document.getElementById('contact_name');
    const inputContactNumber = document.getElementById('contact_number');

    if (names.includes(inputContactName.value)) {
        alert(`${inputContactName.value} já foi adicionado a lista de contatos`);
    } else {
        names.push(inputContactName.value);
        numbers.push(inputContactNumber.value);

        let line = '<tr>';
        line += `<td id="names_list">${inputContactName.value}</td>`;
        line += `<td>${inputContactNumber.value}</td>`;
        line += `</tr>`

        lines += line;
    }

    inputContactName.value = '';
    inputContactNumber.value = '';
}

function upgradeTable() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;
}
