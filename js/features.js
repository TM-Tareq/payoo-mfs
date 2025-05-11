// show the cash out form
// document.getElementById('btn-show-cash-out').addEventListener('click', function() {
    
//     // show cash out button clicked
//     document.getElementById('cash-out-form').classList.remove('hidden');

//     // hide the add-money form
//     document.getElementById('add-money-form').classList.add('hidden');
// });

// // show add money form & hide the cash out form
// document.getElementById('btn-show-add-money').addEventListener('click', function() {

//     document.getElementById('add-money-form').classList.remove('hidden');
//     document.getElementById('cash-out-form').classList.add('hidden');
// });

document.getElementById('btn-show-add-money').addEventListener('click', function() {
    showSectionById('add-money-form');
});

document.getElementById('btn-show-cash-out').addEventListener('click', function() {
    showSectionById('cash-out-form');
});

document.getElementById('show-transaction-history').addEventListener('click', function() {
    showSectionById('transaction-section');
});