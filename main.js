
 const form = document.querySelector('#regfrom'),
NameInput = form.nameadd,
emailInput = form.emailadd,
passwordInput = form.password,
confirmInput = form.conpassword;

// field validation functions
// we will check if input is required 

// Funtion = (paramter) => paramter & argument ? value:value;


//  grabbing input value and checking if it's empty;

const inputValue = (input) =>{
    let inputval = input.value.trim()
    if(inputval === ''){
        status = false
    }else{
        status = true 
    }
    return inputval;
},


// variable checks minimum and maximum value of target Element
checkMinMax = (len,min,max) => len < min || len > max ? false:true,

// check if email input value posses the email @ tag 
emailValid = (emailval) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailval);

},

// show error and success message 
showMessage = (inputEle,message,status) => {

        let inputParent = inputEle.parentElement;
         // grabbing the current Target input element and getting the error message span 

         let textEle = inputParent.querySelector('.message');
         textEle.textContent = message;

        if(status === false){
        // it triggers the border style of the Input container
        inputEle.classList.remove("success");
        inputEle.classList.add("error");
        // error message within the Input Container
        textEle.style.color = 'red';

    } else{
        inputEle.classList.remove("error");
        inputEle.classList.add("success");
        textEle.style.color = 'green';
        
    }
},

// this variable checks password strength
isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return re.test(password);
};


// functions to check inputs 

// variable check name checks name input value and also it length 
const checkName = ()=>{

    let status = false;
    const min = 3,
    max = 10;

    if(!inputValue(NameInput)){
        showMessage(NameInput,"Username can't be blank" ,false)
    }else if(!checkMinMax(inputValue(NameInput).length,min,max)){
            showMessage(NameInput,`Username must be between ${min} and ${max} characters.`,false)     
    }else{
        showMessage(NameInput,'',true)
        status = true;
    }

    return status;

};


// variable checks if email is valid
const checkEmail = () => {

    let status = false;

    if(!inputValue(emailInput)){
        showMessage(emailInput,"Email can't be blank" ,false) 
    }else if(!emailValid(inputValue(emailInput))){
        showMessage(emailInput,"Email is not valid", false)
    }else{
        showMessage(emailInput,'',true)
        status = true;
    }

    return status
}

// varible checks if password is equal to required format we want it
const checkPassword = () => {
    let status = false;

    if(!inputValue(passwordInput)){
        showMessage(passwordInput,"Password can't be blank", false)
    }else if(!isPasswordSecure(inputValue(passwordInput))){
        showMessage(passwordInput,"Password must contain a number and capital letter", false)
    }else{
        status = true;
        showMessage(passwordInput,"Secure Password",true);
    }
    return status 
}

// variable checks if confirm password input is not empty and equals to the passsword input  value
const confirmPassword = () =>{

    let status = false;
    if(!inputValue(confirmInput)){
        showMessage(confirmInput,"Please confirm your password",false)
    }else if(inputValue(confirmInput) !== inputValue(passwordInput)){
        showMessage(confirmInput,"Password does not match",false)
    }else{
        showMessage(confirmInput,"",true)
        status = true;
    }

    return status
}







document.addEventListener('DOMContentLoaded', function(){


    const boucingInfo = (fn,delay = 1000) =>{
        let timeoutId;
        return(...args) => {

            // cancel the previous timer
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            // setup  a new timer 
            timeoutId = setTimeout(() => {
                fn.apply(null,args)
            },delay);
        };
    };


    form.addEventListener('input', boucingInfo(function (e){

        switch (e.target.name){
            case 'nameadd':
                checkName();
                break;
            case 'emailadd':
                checkEmail();
                break;
            case 'password':
                checkPassword();
                break;
            case 'conpassword':
                confirmPassword();
                break;
        }

    }));

    form.addEventListener('submit', e => {

        e.preventDefault();

        let validname = checkName();
        validEmail = checkEmail(),
        validPassword = checkPassword(),
        validConfirmpassword = confirmPassword();

        let formisValid = validname && validEmail && validPassword && validConfirmpassword;

       if(formisValid === true ){
            console.log('ready to server');
       }
    })

    

    
})