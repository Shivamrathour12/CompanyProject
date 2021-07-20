const menu=document.querySelector("#mobile-menu");
const menu_links=document.querySelector(".navbar_menu");
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
})

const model=document.getElementById('email-model');
const openBtn=document.querySelector('.main-btn');
const closeBtn=document.querySelector('.close-Btn');

openBtn.addEventListener('click',()=>{
    model.style.display='block';
});

closeBtn.addEventListener('click',()=>{
    model.style.display='none';
});

window.addEventListener('click',(e)=>{
    if(e.target === model){
        model.style.display='none';
    }
});

const form=document.getElementById('form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const Password=document.getElementById('password');
const passwordConfirm=document.getElementById('password-confirm');

function showError(input,message){
    const formValidation=input.parentElement;
    formValidation.className='form-validation error';

    const errorMessage=formValidation.querySelector('p');
    errorMessage.innerText=message;
}
function getFieldName(input){
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

function showValid(input){
    const formValidation=input.parentElement;
    formValidation.className='form-validation valid';
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showValid(input);
        }
    })
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showValid(input);
    }
}
function passwordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Password do not match');
    }
}

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    checkRequired([name, email, Password, passwordConfirm]);
    checkLength(name,3,30);
    checkLength(password,8,25);
    checkLength(passwordConfirm,8,25);
    passwordMatch(password,passwordConfirm);
})

