
 const form = document.querySelector('#regfrom'),
NameInput = form.nameadd,
emailInput = form.emailadd,
passwordInput = form.password,
confirmInput = form.conpassword;

// field validation 
// we will check if input is required 

// Funtion = (paramter) => paramter & argument ? value:value;

const requiredInput = value => value === '' ? false:true,

checkMinMax = (len,min,max) => len < min || len > max ? false:true,


emailValid = (emailval) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailval);

},

showMessage = (input,message,status) => {

         // grabbing the current Target input element and getting the error message span 
         const inputEle = input.parentElement,
         textEle = inputEle.querySelector('form-text');
         textEle.textContent = message;

        if(status === false){

        // it triggers the border style of the Input container
        inputEle.classList.remove("success");
        inputEle.classList.add("error");
        // error message within the Input Container
        textEle.style.color = red;

    } else{

        inputEle.classList.remove("error");
        inputEle.classList.add("success");
        textEle.style.color = green;
        
    }

   
},



isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return re.test(password);
};


document.addEventListener('DOMContentLoaded', function(){

    form.addEventListener('submit', e =>{
        e.preventDefault();
        e.stopPropagation();
        
    })
})