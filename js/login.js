// console.log('first')

// search: form submit reloading the page


// // step-1: set event handler
// document.getElementById('button-login').addEventListener('click', function(event) {
//     // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault();
//     // console.log('login buttonl clicked');

//     // step-3: get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     // console.log(phoneNumber, pinNumber);


//     // step-4: validate phone & pin
//     // this is temporary. You should not do like this
//     if(phoneNumber === '5' && pinNumber === '123') {
//         console.log('you are loged in');
//         // step-5: allow user to use the website

//     } else {
//         console.log('wrong phone number or pin')
//     }
// });


document.getElementById('button-login').addEventListener('click', function(event) {
    event.preventDefault();

    // get phone number & pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // bad way to validate
    if(phoneNumber === '5' && pinNumber === '123') {
        console.log('you are logged in');
    } else {
        alert('wrong phone number or pin')
    }
})