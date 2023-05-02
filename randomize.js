// This variable identifies the form in html by the id "country"
let form = document.getElementById("country");
//These arrays contains strings that are the country names
let asia = ["Thailand", "Cambodia"];
let africa = ["Morocco", "South-Africa"];

//This function stops the page from refreshing by preventing the default event (refreshes) when the button id clicked.
function submitForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', submitForm); //This is submit form. event listener checks the form when there is an acttion and reacts to it. this case it reacts to "submit".

// This function retrieves information (country name) from the dropdown list with id "where". From the selected region of the world, a randomised country will be selected (from whats available in the arrays.) It then links to the appropriate pages via concatenation.
function randomCountry() {
    let country = document.getElementById("where").value;
    console.log(country)
    if (country == "africa" || country == "asia") {
        if (country == "africa") {
            let randomNumber = Math.floor(Math.random() * 2)
            location.assign("countries/" + africa[randomNumber] + ".html");
        }
        if (country == "asia") {
            let randomNumber = Math.floor(Math.random() * 2)
            location.assign("countries/" + asia[randomNumber] + ".html");
        }
    } //fun little alert to incorporate the idea we only have a few pages :)
    else {
        alert("We currently only have available holidays in Asia and Africa. Please come back later!")
    }
}