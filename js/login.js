// console.log('first')

// search: form submit reloading the page


// step-1: set event handler
document.getElementById('button-login').addEventListener('click', function(event) {
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    // console.log('login buttonl clicked');

    // step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
});