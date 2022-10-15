function attachEvents() {
    let locationCode;
    let weatherSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    let inputLocation = document.getElementById('location')

    let submitBtn = document.getElementById('submit')
    submitBtn.addEventListener('click', showWeather)

    let forecastDiv = document.getElementById('forecast')
    let currentWeatherDiv = document.getElementById('current')
    let upcomingWeatherDiv = document.getElementById('upcoming')

    async function showWeather() {
        currentWeatherDiv.innerHTML = '<div class="label">Current conditions</div>'
        upcomingWeatherDiv.innerHTML = '<div class="label">Three-day forecast</div>'

        try {
            let responseLocations = await fetch('http://localhost:3030/jsonstore/forecaster/locations')
            let locations = await responseLocations.json()

            for (let loc of locations) {
                if (loc.name == inputLocation.value) {
                    locationCode = loc.code;
                }
            }

            let responseCurrentWeather = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
            let currentWeatherObject = await responseCurrentWeather.json()

            let responseUpcomingWeather = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`)
            let upcomingWeatherObject = await responseUpcomingWeather.json()

            forecastDiv.style.display = 'block';

            // current weather
            let conditionSymbolSpan = document.createElement('span')
            conditionSymbolSpan.innerHTML = weatherSymbols[currentWeatherObject.forecast.condition]
            conditionSymbolSpan.className = 'condition symbol'

            let conditionSpan = document.createElement('span')
            conditionSpan.className = 'condition'

            let locationSpan = document.createElement('span')
            locationSpan.textContent = currentWeatherObject.name
            locationSpan.className = 'forecast-data';

            let currentDegreesSpan = document.createElement('span')
            currentDegreesSpan.innerHTML = `${currentWeatherObject.forecast.low}${weatherSymbols.Degrees}/${currentWeatherObject.forecast.high}${weatherSymbols.Degrees}`;
            currentDegreesSpan.className = 'forecast-data';

            let currentConditionSpan = document.createElement('span')
            currentConditionSpan.textContent = currentWeatherObject.forecast.condition
            currentConditionSpan.className = 'forecast-data';

            conditionSpan.appendChild(locationSpan)
            conditionSpan.appendChild(currentDegreesSpan)
            conditionSpan.appendChild(currentConditionSpan)

            let newDivSection = document.createElement('div')
            newDivSection.className = 'forecasts'

            newDivSection.appendChild(conditionSymbolSpan)
            newDivSection.appendChild(conditionSpan)

            currentWeatherDiv.appendChild(newDivSection)

            // upcoming weather
            let forecastInfoDiv = document.createElement('div')

            for (let i = 0; i < 3; i++) {
                let upcomingSpan = document.createElement('span')
                upcomingSpan.className = 'upcoming'

                let upcomingSymbolSpan = document.createElement('span')
                upcomingSymbolSpan.innerHTML = weatherSymbols[upcomingWeatherObject.forecast[i].condition]
                upcomingSymbolSpan.className = 'symbol'

                let upcomingDegreesSpan = document.createElement('span')
                upcomingDegreesSpan.innerHTML = `${upcomingWeatherObject.forecast[i].low}${weatherSymbols.Degrees}/${upcomingWeatherObject.forecast[i].high}${weatherSymbols.Degrees}`;
                upcomingDegreesSpan.className='forecast-data'

                let upcomingConditionSpan=document.createElement('span')
                upcomingConditionSpan.textContent=upcomingWeatherObject.forecast[i].condition;
                upcomingConditionSpan.className='forecast-data'

                upcomingSpan.appendChild(upcomingSymbolSpan)
                upcomingSpan.appendChild(upcomingDegreesSpan)
                upcomingSpan.appendChild(upcomingConditionSpan)

                forecastInfoDiv.appendChild(upcomingSpan)
            }

            upcomingWeatherDiv.appendChild(forecastInfoDiv)

        } catch (error) {
            forecastDiv.textContent = "Error";
        }

    }
}

attachEvents();