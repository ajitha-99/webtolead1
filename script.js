function beforesubmit(event) {
    if(captchaChecked){
   let outputdate =  document.querySelector(".outputdate");
   let inputdate = document.querySelector(".inputdate");
   console.log("inputdate.value", inputdate.value);//string -->date(en_US)

   let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
   outputdate.value = formattedDate;
   console.log(outputdate.value);
    }else{
        alert('Please check the reCAPTCHA checkbox' );
        event.preventDefault(); // it will prevent the submission of the form

    }
}

function timestamp() { 
var response = document.getElementById("g-recaptcha-response"); 
if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); }
 } 
    setInterval(timestamp, 500); 

    function captchasuccess(){
        captchaChecked = true;
    }