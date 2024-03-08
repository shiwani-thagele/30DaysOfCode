const form =  document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Cpassword = document.getElementById("confirm-password");
const submit  = document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
})

const validateInputs = ()=>{
    const usernameValue =  username.value.trim();
    const emailValue = email.value.trim();
    const passwordlValue = password.value.trim();
    const CpasswordValue = Cpassword.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is required');

    }else{
        setSuccess(username);
    }
if(emailValue === ''){
    setError(email,'Email is required')
}else if(!isValidEmail(emailValue)){
    setError(email,'provide a valid Email Address')
}else{
    setSuccess(email);
}

    if(passwordlValue === ''){
        setError(password,'password is required')
    }else if(passwordlValue.length < 8){
        setError(password , 'password must be atleast 8 characters')
    }
    else
    {
        setSuccess(password);
    }
    if(CpasswordValue === ''){
        setError(Cpassword,'please confirm your password')
    }else if(CpasswordValue !== passwordlValue){
        setError(password,'password is not match');
    }else{
        setSuccess(Cpassword);
    }

}

const setError = (element , message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl
    .querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText= '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(e){
   var reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return reg.test(e);  
}
// function vital(a,b){
//     return a+b
// }
// vital(2,3);