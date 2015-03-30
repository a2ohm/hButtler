/* Update the weather */

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'paris,france',
    'units':'metric',
    'lang':'fr'
};

// Define some functions
function roundVal(temp)
{
    return Math.round(temp * 10) / 10;
}

// Main function
jQuery(document).ready(function($) {

(function updateCurrentWeather()
{
    var iconTable = {
        '01d':'wi-day-sunny',
        '02d':'wi-day-cloudy',
        '03d':'wi-cloudy',
        '04d':'wi-cloudy-windy',
        '09d':'wi-showers',
        '10d':'wi-rain',
        '11d':'wi-thunderstorm',
        '13d':'wi-snow',
        '50d':'wi-fog',
        '01n':'wi-night-clear',
        '02n':'wi-night-cloudy',
        '03n':'wi-night-cloudy',
        '04n':'wi-night-cloudy',
        '09n':'wi-night-showers',
        '10n':'wi-night-rain',
        '11n':'wi-night-thunderstorm',
        '13n':'wi-night-snow',
        '50n':'wi-night-alt-cloudy-windy'
    }

    $.getJSON('http://api.openweathermap.org/data/2.5/weather', weatherParams, function(json, textStatus) {
        var temp = roundVal(json.main.temp);
        var temp_min = roundVal(json.main.temp_min);
        var temp_max = roundVal(json.main.temp_max);
        var wind = roundVal(json.wind.speed);
        var iconClass = iconTable[json.weather[0].icon];
        var icon = $('<span/>').addClass('icon').addClass('dimmed').addClass('wi').addClass(iconClass);

        //$('#weather').updateWithText(icon.outerHTML()+temp+'&deg;', 1000);
        $('#weather').html(icon[0].outerHTML+temp+'°');
    });

    setTimeout(function() {
        updateCurrentWeather();
    }, 60000);
})();

})
