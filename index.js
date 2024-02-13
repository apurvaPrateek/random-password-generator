var btn = document.querySelector("button");
var password = document.querySelector(".password-field h2");
var copyIcon = document.querySelector(".password-field i");

copyIcon.addEventListener("click",()=>{
    
    password.focus();
    var range = document.createRange();
    range.selectNode(password);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range);
    console.log("hi");
    navigator.clipboard.writeText(password.textContent)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.log('Error copying text: ', err);
        });

        setTimeout(() => {
            window.getSelection().removeAllRanges();
        }, 1000);
        
});


function generatePassword(){
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$";
    var pass="";
    
    for(var i=0;i<12;i++){
        var randomIdx = Math.floor(Math.random()*str.length);
        pass=pass+str[randomIdx];

    }

    password.textContent = pass;

}

btn.addEventListener("click",()=>{
    generatePassword();
});