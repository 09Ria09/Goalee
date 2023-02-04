function checkRegex()
{
    const form = document.querySelector("form");
    
    const idRegex = /[A-Z].{3,10}([0-9]|[~!@#$%^&*()_+{}|":?><`\=\];'\,.\\])/;
    const idMessage = document.querySelector("#idMessage");
    const passwordRegex = /(?=.*[a-z].*)(?=.*[0-9].*)(?=.*[~!@#$%^&*()_+{}|":?><`=\];',.\\].*)(?=.*[A-Z].*).{12,}/;
    const passwordMessage = document.querySelector("#passwordMessage");
    const zipRegex = /\d{4}[A-Za-z]{2}/;
    const zipMessage = document.querySelector("#zipMessage");
    const emailRegex = /([A-Za-z0-9]|[!#$%&'*+-/=?^_`{|}~.])+@[A-Za-z0-9]+\.[A-Za-z]{2,}/;
    const emailMessage = document.querySelector("#emailMessage");
    const languageRegex = /.+/;
    const languageMessage = document.querySelector("#languageMessage");
    const genderRegex = /.+/;
    const genderMessage = document.querySelector("#genderMessage");
    const countryRegex = /.+/;
    const countryMessage = document.querySelector("#countryMessage");
    const nameRegex = /[A-Za-z]+/;
    const nameMessage = document.querySelector("#nameMessage");
    const addressMessage = document.querySelector("#addressMessage");
    const bioMessage = document.querySelector("#bioMessage");

    const onSubmit1 = () => {
        let checker = true;

        if (passwordRegex.test(document.querySelector("#password").value))
            passwordMessage.innerHTML = "Looks good!";
        else {
            passwordMessage.innerHTML = "Password must be at least 12 characters long and it must contain at least " +
                "a lowercase and capitalized letter, a digit and a special character!";
            checker = false;
        }
        if (idRegex.test(document.querySelector("#username").value))
            idMessage.innerHTML = "Looks good!";
        else {
            idMessage.innerHTML = "Must be between 5 and 12 characters long and it must " +
                "start with a capitalized letter and end with a digit or a special character!"
            checker = false;
        }
        if (zipRegex.test(document.querySelector("#zip").value))
            zipMessage.innerHTML = "Looks good!";
        else {
            zipMessage.innerHTML = "Must have 4 digits followed by 2 letters!";
            checker = false;
        }
        if (emailRegex.test(document.querySelector("#email").value))
            emailMessage.innerHTML = "Looks good!";
        else {
            emailMessage.innerHTML = "Must be a valid email address!";
            checker = false;
        }
        if (countryRegex.test(document.querySelector("#country").value))
            countryMessage.innerHTML = "Looks good!";
        else {
            countryMessage.innerHTML = "This field can't be empty!";
            checker = false;
        }
        if (genderRegex.test(document.querySelector("#gender").value))
            genderMessage.innerHTML = "Looks good!";
        else {
            genderMessage.innerHTML = "This field can't be empty!";
            checker = false;
        }
        if (languageRegex.test(document.querySelector("#language").value))
            languageMessage.innerHTML = "Looks good!";
        else {
            languageMessage.innerHTML = "This field can't be empty!";
            checker = false;
        }
        if (nameRegex.test(document.querySelector("#name").value))
            nameMessage.innerHTML = "Looks good!";
        else {
            nameMessage.innerHTML = "This field can't be empty and must contain only letters!";
            checker = false;
        }
        addressMessage.innerHTML = "Looks good!";
        bioMessage.innerHTML = "Looks good!";
        if (checker === true) {
            let formData = new FormData(form);
            let as = "";
            for (let entry of formData.entries()) {
                as = as + entry[0] + ": " + entry[1] + '\n';
            }
            alert(as);
        }
    };
    form.addEventListener("submit", onSubmit1);
}

