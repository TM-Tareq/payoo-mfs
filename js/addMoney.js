
/**
 * 1. Add event listener to the add Money button (from submit)
 * Make sure to preventDefault so that page does not reloads
 * 2. get the money user wants to add
 * also, get te pin number provided
 * 3. verify the pin number. for, wrong pin number ==> failed to add
 * for right pin number, allow to add the number to the current balance
 * 
 * 4. get the current balance
 * 
 * 5. add money to be added with the current balance
 * 
 * 6. display/update the balance in the DOM/UI
 * 
 */

document.getElementById('btn-add-money').addEventListener('click', function(event) {
    event.preventDefault();

    // get money & the pin Number
    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber = parseFloat(addMoney);
    // getInputFieldValueById();
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number'); 

    // const pinNumber = document.getElementById('input-pin-number').value;

    // console.log(addMoney, pinNumber)

    if(!isNaN(addMoney) && pinNumber === 123) {
        // add money to the account
        // const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);
        // const balanceNumber = parseFloat(balance);

        const balance = getTextFieldValueById('account-balance');
        // new balance
        const newBalance = balance + addMoney;

        // update DOM with the updated balance
        document.getElementById('account-balance').innerText = newBalance;
        // add to transiction history
        const div = document.createElement('div');
        div.classList.add('bg-green-700');
        div.innerHTML = `
            <h4 class ="text-2xl font-bold">Cash Out</h4>
            <p>${addMoney} Added. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    
    } else {
        alert('Failed to add money. Please try again later');
    }
})