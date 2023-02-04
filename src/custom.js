let specials = "~!@#$%^&*()_+{}|\":?><`\=\];'\,.\\";
let fChecker = false, globalChecker=true;
let as ="";
function custom_main()
{
    const form = document.querySelector("form");

    const onSubmit2= () => {
    globalChecker = true;
    as="";
    //* Check Username
    let message = checkUsername(document.getElementById("username").value);
    modify(document.getElementById("idMessage"), message, fChecker);

    //* Check Password
    message = checkPassword(document.getElementById("password").value);
    modify(document.getElementById("passwordMessage"), message, fChecker);
    
    //*Check Name
    message = checkName(document.getElementById("name").value);
    modify(document.getElementById("nameMessage"), message, fChecker);
    
    //* Check Address
    modify(document.getElementById("addressMessage"), "Looks good!", true);

    //*Check Country
    message = checkCountry(document.getElementById("country").value);
    modify(document.getElementById("countryMessage"), message, fChecker);

    //*Check ZIP
    message = checkZIP(document.getElementById("zip").value);
    modify(document.getElementById("zipMessage"), message, fChecker);
    
    //*Check EMAIL
    message = checkEmail(document.getElementById("email").value);
    modify(document.getElementById("emailMessage"), message, fChecker);
    
    //*Check gender
    message = checkSex(document.getElementById("gender").value);
    modify(document.getElementById("genderMessage"), message, fChecker);
    
    //*Check language
    message = checkLanguage(document.getElementById("language").value);
    modify(document.getElementById("languageMessage"), message, fChecker);
    
    //*Check Bio
    modify(document.getElementById("bioMessage"), "Looks good!", true);

    console.log(globalChecker);
    console.log(fChecker);
    if (globalChecker == true && fChecker == true) {
        let formData = new FormData(form);
        as = "";
        for (let entry of formData.entries()) {
            as = as + entry[0] + ": " + entry[1] + '\n';
        console.log(as);
        }
        alert(as);
    }
    }
    form.addEventListener("submit", onSubmit2);
    
    

}

function modify(element, message, fChecker)
{
    globalChecker = (globalChecker && fChecker);
    element.innerHTML = message;
    if(fChecker)
        element.style.color="green";
    else element.style.color="red";
}
function checkUsername(username)
{
    fChecker = false;
    if(username == null || username =="")
        return "This field is required!";
    if(!(username.length >= 5 &&username.length <=12))
        return "Username must be between 5 and 12 characters long!";
    let first = username.charAt(0);
    if(!(first>='A' && first<='Z'))
        return "Username must start with a capital letter!";
    let last = username.charAt(username.length - 1);
    if(!((last>='0'&&last<='9')||(specials.includes(last))))
        return "Username must end with digit or special character!";
    fChecker = true;
    return "Looks good!";
}

function checkPassword(password)
{
    fChecker = false;
    if(password == null || password == "")
        return "This field is required!";
    if(password.length < 12)
        return "Password must be at least 12 characters long!";
    let hasD = false, hasU = false, hasL = false, hasS = false;
    for(let i = 0 ; i < password.length; ++i)
        {
            let c = password.charAt(i);
            if(c>='0'&&c<='9')
                hasD = true;
            if(c>='A'&&c<='Z')
                hasU = true;
            if(c>='a' && c<='z')
                hasL = true;
            if(specials.includes(c))
                hasS = true;
        }
    if(!hasD || !hasU || !hasL || !hasS)
        return "Password must contain at least an uppercase letter, "+
         "a lowercase letter, a number and a special character!";
    //TODO: dictionary
    fChecker = true;
    if(password.length<14)
        return "Looks good, but minimum 14 characters are recommended!"
    return "Looks good and safe!";
    
}

function checkName(name)
{
    fChecker = false;
    if(name == null || name == "")
        return "This field is required!";
    for(let i = 0; i < name.length ; ++i)
    {
        let c = name.charAt(i);
        if(!isChar(c) && c!=' ')
            return "Name must only contain letters!";
    }
    fChecker = true;
    return "Looks good!";
}

function checkCountry(country)
{
    fChecker = false;
    if(country == null || country == "")
        return "This field is required!";
    fChecker = true;
    return "Looks good!";
}

function checkZIP(ZIP)
{
    fChecker = false;
    let invalid = "ZIP code must be 6 characters long, having 4 digits and 2 letters!";
    if(ZIP == null || ZIP =="")
        return invalid;
    if(ZIP.length!=6)
        return invalid;
    if(!isDigit(ZIP[0]) || !isDigit(ZIP[1]) || !isDigit(ZIP[2])|| !isDigit(ZIP[3]) || !isChar(ZIP[4]) ||!isChar(ZIP[5]))
        return invalid;
    fChecker = true;
    return "Looks good!";
}

function isChar(c)
{
    return (c>='a'&&c<='z') || (c>='A'&&c<='Z');
}
function isDigit(c)
{
    return (c>='0'&&c<='9');
}
function isSpecial(c)
{
    return specials.contains(c);
}

function checkEmail(email) ///a bunch of pastacode to make it work
{
    let specialMail = "!#$%&'*+-/=?^_`{|}~."
    fChecker = false;
    if(email == null || email =="")
        return "This field is required!";
    let invalid = "Not a valid e-mail address!";
    //*check name
    if(email[0] == '.')
        return invalid;
    let i =0, flag= false;
    while(i<email.length &&( isDigit(email[i]) || isChar(email[i]) || specialMail.includes(email[i])))
        {
            if(i+1<email.length && email[i]=='.'&&email[i+1]=='.')
                return invalid;
            i++;
            flag=true;
        }
    //*check @
    if(flag == false || i==email.length || email[i]!='@' || (i>0&&email[i-1]=='.'))
        return invalid;
    ++i;
    //*check host
    flag = false;
    while(i<email.length && (isDigit(email[i])||isChar(email[i]) || email[i]=='-'))
        ++i,flag = true;
    if(flag == false || i==email.length || email[i]!='.')
        return invalid;
    ++i;
    if(email[i] == '.')
        return invalid;
    flag = false;
    while(i<email.length && (isDigit(email[i])||isChar(email[i]||email[i]=='-'||(email[i]=='.'&&!email[i-1]=='.'))))
        ++i;
    if(i<email.length)
        return invalid;
    fChecker = true;
    return "Looks good!"
}

function checkSex(sex)
{
    fChecker = false;
    if(sex == null || sex =="")
        return "This field is required!";
    fChecker = true;
    return "Looks good!";
}

function checkLanguage(lang)
{
    fChecker = false;
    if(lang == null || lang =="")
        return "This field is required!";
    fChecker = true;
    return "Looks good!";
}

