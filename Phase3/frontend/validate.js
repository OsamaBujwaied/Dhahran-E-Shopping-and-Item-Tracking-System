
const re = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    pwd: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/ ,
    name: /^[a-zA-Z\s]{2,50}$/ ,
    phone: /^[\d]{10}$/ ,
    number: /^[\d]{16}$/ ,
    date: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/ ,
    ccv: /^[\d]{3}$/
    
}
function validateSignin(){
    let signin_email = document.querySelector('#signinEmail').value;
    let signin_pwd = document.querySelector('#signinPwd').value;
    var checkEmail = re.email.test(signin_email);
    var checkPwd = re.pwd.test(signin_pwd);
    
    if(!checkEmail){
        alert("Enter a valid email");
    }
    else if(!checkPwd){
        alert("Enter a valid password");
    }
    else {
        $.ajax({
            type: "POST",
            url: "signin.php",
            data: {signin_email: signin_email, signin_pwd: signin_pwd},
            success: function(){
                window.location = "functions.php";
            },
            error: function(status){
              alert(status);
            }
          });
    }
}

function validateSignup(){
    let signup_name = document.querySelector('#signupName').value;
    let signup_phone = document.querySelector('#signupPhone').value;
    let signup_email = document.querySelector('#signupEmail').value;
    let signup_pwd = document.querySelector('#signupPwd').value;
    let signup_pwd2 = document.querySelector('#signupPwd2').value;
    let checkName = re.name.test(signup_name);
    let checkPhone = re.phone.test(signup_phone);
    let checkEmail = re.email.test(signup_email);
    let checkPwd = re.pwd.test(signup_pwd);
    let checkPwd2 = re.pwd.test(signup_pwd2);
    
    if (!checkName){
        alert("Enter a valid name");
    }
    else if (!checkPhone){
        alert("Enter a valid 10-digits phone number");
    }
    else if (!checkEmail){
        alert("Enter a valid email");
    }
    else if (!checkPwd || !checkPwd2){
        alert("Enter a valid password");
    }
    
    else if (signup_pwd !== signup_pwd2){
        alert("passwords doesn't match");
    }
    else {
        $.ajax({
            type: "POST",
            url: "signup.php",
            data: {
                signup_name: signup_name, 
                signup_phone: signup_phone,
                signup_email: signup_email,
                signup_pwd: signup_pwd
            },
            success: function(){
                window.location = "functions.php";
            },
            error: function(status){
              alert(status);
            }
          });
    }
    
}

function validateCard(){
    let card_name = document.querySelector('#cardName').value;
    let card_number = document.querySelector('#cardNumber').value;
    let card_date = document.querySelector('#cardDate').value;
    let card_ccv = document.querySelector('#cardCCV').value;
    let checkName = re.name.test(card_name);
    let checkNumber = re.number.test(card_number);
    let checkDate = re.date.test(card_date);
    let checkCCV = re.ccv.test(card_ccv);
    
    if (!checkName){
        alert("Enter a valid card holder name")
    }
    else if (!checkNumber){
        alert("Enter a valid 16-digits card number")
    }
    else if (!checkDate){
        alert("Enter a valid card expiration date")
    }
    else if (!checkCCV){
        alert("Enter a valid 3-digits CCV number")
    }
    else {
        $.ajax({
            type: "POST",
            url: "card.php",
            data: {
                card_name: card_name, 
                card_number: card_number,
                card_date: card_date,
                card_ccv: card_ccv
            },
            success: function(){
                window.location = "functions.php";
            },
            error: function(status){
              alert(status);
            }
          });
    }
    
}