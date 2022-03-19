const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const password = document.querySelector('#password');

const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    var valid = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

    if(nameInput.value === '' || emailInput.value === '' || password.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } 
    else if(password.value.length <= 8 || !password.value.match(valid)){
        alert('Enter Valid Password!');
    }
    else {
        const li = document.createElement('li');
        const text = document.createTextNode(`${nameInput.value}: ${emailInput.value}`);
        li.appendChild(text);
        userList.appendChild(li); 
        nameInput.value = '';
        emailInput.value = '';
        password.value = '';
    }
}
