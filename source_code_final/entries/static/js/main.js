let button = document.querySelector('#ajax-button');
let dataDiv = document.querySelector('#ajax-data');
let weatherDiv = document.querySelector('#weather');
let affirmationButton = document.querySelector('#affirmation');
let affirmationText = document.querySelector('#affirmation-data');

let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=Durham,North Carolina&appid=27f7ac7950d6b41f650c9d0e32b7afc7'

let affirmationURL = "https://type.fit/api/quotes"

// AJAX = Asynchronous JavaScript and XML
button.addEventListener('click', (event) => {
    fetch('ajax', {
        headers: {
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        dataDiv.innerText = `You have ${data['entry_count']} entries`
    })
})

fetch(weatherURL)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        weatherDiv.innerText = `The temperature is ${Math.round((data['main'].temp - 273.5) * 9/5 + 32)} degrees F`
    })

affirmation.addEventListener('click', (event) => {
    fetch(affirmationURL, {
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        let affirmationEntry = document.createElement("p");
        affirmationEntry.innerText = data[12].text;
        affirmationText.appendChild(affirmationEntry);
    })
})    