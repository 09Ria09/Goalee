function fillCountries()
{
    let countries = null;
    fetch('./countries.json')
        .then(response => response.json())
        .then((data)=>{
            countries = data;
            let cList= document.getElementById("country");
            let keys = Object.keys(countries);
            keys.sort();
            for(let i = 0 ;i < keys.length; i++)
            {
                let newOption = document.createElement("option");
                newOption.setAttribute("value", keys[i]);
                newOption.innerHTML = countries[keys[i]];
                cList.appendChild(newOption);
            //   var option = '<option value = ${keys[0]}> countries[keys[0]] <\\option>'
            }
        })
    
}

function track()
{
    let clicks = 0;
    let keyPresses = 0;
    let characters = 0;
    let entryTime = Date.now();
    const body = document.querySelector("body");
    const onClick = () => {
        ++clicks;
    };
    const onKeyPress = () => {
        ++characters;
    };
    const onKeyDown = () => {
        ++keyPresses;
    };
    body.addEventListener("click", onClick);
    body.addEventListener("keypress", onKeyPress);
    body.addEventListener("keydown", onKeyDown);
    const form = document.querySelector("form");
    const tracker = document.querySelector("#tracker");
    const onSubmit = () => {
        tracker.innerHTML = "Clicks: " + clicks + "<br>Key presses: " + keyPresses + "<br>Characters: " + characters +
            "<br>Time Spent (in seconds): " + ((Date.now() - entryTime) / 1000);
        tracker.style.display = "block";
    };
    form.addEventListener("submit", onSubmit);
}
