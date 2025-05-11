/**
 * Common shared functions here
 */

// function getInputFieldValueById() {
//     // console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;

// }

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textvalue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textvalue);
    return textNumber;
}


function showSectionById(id) {
    // hide all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}