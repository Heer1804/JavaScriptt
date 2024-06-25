let API_key_CountryStateCity = "dzBCd2FHQWNXVExCTDFuZmpVeVVHUVIyVEx4cXBobGlHNTdydHJjdg==";
let API_key_OpenWeather = "12688b263087c9dfd38943264c751aae"

$.ajax({
    url: `https://api.countrystatecity.in/v1/countries`,
    method: 'get',
    headers: {
        "X-CSCAPI-KEY": API_key_CountryStateCity
    },
    success: function (countries) {
        var options = `<option value="">Select Country</option>`;
        countries.forEach((country, index) => {
            options += `<option value="${country.iso2}">${country.name}</option>`;

        });
        document.querySelector("#country").innerHTML = options;
    },
});

function ChangeCountry() {
    var countryID = document.getElementById('country').value;
    $.ajax({
        url: `https://api.countrystatecity.in/v1/countries/${countryID}/states`,
        method: 'get',
        headers: {
            "X-CSCAPI-KEY": API_key_CountryStateCity
        },
        success: function (states) {
            var options = `<option value="">Select</option>`;
            states.forEach((state, index) => {
                options += `<option value="${state.iso2}">${state.name}</option>`;

            });
            document.querySelector("#states").innerHTML = options;
        },
    });

}


function ChangeState() {
    var countryID = document.getElementById('country').value;
    var stateID = document.getElementById('states').value;
    $.ajax({
        url: `https://api.countrystatecity.in/v1/countries/${countryID}/states/${stateID}/cities`,
        method: 'get',
        headers: {
            "X-CSCAPI-KEY": API_key_CountryStateCity
        },
        success: function (cites) {
            var options = `<option value="">Select</option>`;
            cites.forEach((city, index) => {
                options += `<option value="${city.name}">${city.name}</option>`;

            });
            document.querySelector("#cities").innerHTML = options;
        },
    });

}


function ChangeCity() {
    var city = document.getElementById('cities').value;
    $.ajax({
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key_OpenWeather}`,
        method: "GET",
        type: 'json',
        async: false,
        success: function (res) {
           
                   var lat = res[0].lat
                   var lon = res[0].lon
                   GetWeather(lat,lon);
        }
    })


}


function GetWeather(lat,lon){

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=hi&appid=${API_key_OpenWeather}&units=metric`,
        method: "GET",
        type: 'json',
        async: false,
        success: function (res) {
            document.getElementById('temp').innerHTML=res.main.temp + `°`;
            document.getElementById('humidity').innerHTML=res.main.humidity + `%`;
            document.getElementById('pressure').innerHTML=res.main.pressure + ` hPa`;
        }
    })
}


