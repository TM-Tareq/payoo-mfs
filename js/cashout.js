document.getElementById('btn-cash-out').addEventListener('click', function(event) {
    event.preventDefault();
    // console.log('cash out button clicked');

    // const cashOut = document.getElementById('input-cash-out').value;
    // const cashOutNumber = parseFloat(cashOut);

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    // const pinNumber = document.getElementById('input-cash-out-pin').value;
    // console.log(cashOut, pinNumber);

    // wrong way to varify the pin number
    if(!isNaN(cashOut) && pinNumber === 123) {
        // console.log('Money is reducing');
        // const balance = document.getElementById('account-balance').innerText;
        // const balanceNumber = parseFloat(balance);
        const balance = getTextFieldValueById('account-balance');

        if(cashOut > balance)
            return;
        // reduce the balance
        // const newBalance = balanceNumber - cashOut;
        const newBalance = balance - cashOut;

        // update the UI
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-red-700');
        div.innerHTML = `
            <h4 class ="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} withdraw. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    } else {
        alert('failed to cash out. Please try again later.');
    }
})