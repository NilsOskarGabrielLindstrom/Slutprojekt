let guessCount = 0
let countryList = []

const generateCountryData = () => {

    // Get elements from DOM
    const populationElement = document.querySelector('.pop__example')
    const fertilityElement = document.querySelector('.tfr__example')
    const mortalityElement = document.querySelector('.life-expectancy__example')
    const sexRatioElement = document.querySelector('.sex-ratio__example')
    const gdpElement = document.querySelector('.gdp__example')
    const gdpPcElement = document.querySelector('.gdp-capita__example')
    const povertyElement = document.querySelector('.poverty__example')
    const giniElement = document.querySelector('.gini__example')
    const regionElement = document.querySelector('.region__example')
    const densityElement = document.querySelector('.density__example')
    const urbanElement = document.querySelector('.urban__example')
    const cityElement = document.querySelector('.city__example')
    const feedback = document.querySelector('.hint__feedback')
    const inputField = document.getElementById('input')
    const dataList = document.getElementById('country')


    // Get API
    const URL_pop = 'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&mrnev=1&per_page=1500'
    const URL_tfr = 'https://api.worldbank.org/v2/country/all/indicator/SP.DYN.TFRT.IN?format=json&mrnev=1&per_page=1500'
    const URL_le = 'https://api.worldbank.org/v2/country/all/indicators/SP.DYN.LE00.IN/?format=json&mrnev=1&per_page=1500'
    const URL_sexR = 'https://api.worldbank.org/v2/country/all/indicators/SP.POP.TOTL.FE.ZS/?format=json&mrnev=1&per_page=1500'
    const URL_gdp = 'https://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&mrnev=1&per_page=1500'
    const URL_gdpPc = 'https://api.worldbank.org/v2/country/all/indicators/NY.GDP.PCAP.CD/?format=json&mrnev=1&per_page=1500'
    const URL_poverty = 'https://api.worldbank.org/v2/country/all/indicators/SI.DST.50MD?format=json&mrnev=1&per_page=1500'
    const URL_gini = 'https://api.worldbank.org/v2/country/all/indicators/SI.POV.GINI?format=json&mrnev=1&per_page=1500'
    const URL_region = 'https://api.worldbank.org/v2/country/all?format=json&mrnev=1&per_page=1500'
    const URL_density = 'https://api.worldbank.org/v2/country/all/indicators/EN.POP.DNST?format=json&mrnev=1&per_page=1500'
    const URL_urban = 'https://api.worldbank.org/v2/country/all/indicators/SP.URB.TOTL.IN.ZS?format=json&mrnev=1&per_page=1500'
    const URL_city = 'https://api.worldbank.org/v2/country/all/indicators/EN.URB.LCTY?format=json&mrnev=1&per_page=1500'

    // List of invalid country codes
    const invalidCountryCodes = [ 
        "ZH", "ZI", "1A", "S3", "B8", "V2", "Z4", "4E", "T4", "XC", "Z7", "7E", "T7", "EU", "F1", "XE", "XD", "XF", "ZT", "XH", "XI", "XG", "V3", "ZJ", "XJ", "T2", "XL", "XO", "XM", "XN", "ZQ", "XQ", "T3", "XP", "XU", "OE", "S4", "S2", "V4", "V1", "S1", "8S", "T5", "ZG", "ZF", "T6", "XT", "1W"
    ]

    const getCountryData = async () => {

        // Fetch data for population
        const responsePop = await fetch(URL_pop)
        const dataPop = await responsePop.json()

        // Filter out invalid countries
        const validCountries = dataPop[1].filter(country => !invalidCountryCodes.includes(country.country.id))
        countryList = validCountries.map(country => country.country.value)

        // Pick country at random
        const randomIndex = Math.floor(Math.random() * validCountries.length)
        const randomCountry = validCountries[randomIndex]
        const countryId = randomCountry.country.id

        // Variable with name of selected country.
        const countryName = randomCountry.country.value

        // Fetch data for fertility rate
        const responseTfr = await fetch(URL_tfr)
        const dataTfr = await responseTfr.json()

        // Find fertility rate for the selected country
        const fertilityData = dataTfr[1].find(entry => entry.country.id === countryId)

        // Fetch data for life expectancy
        const responseLe = await fetch(URL_le)
        const dataLe = await responseLe.json()

        // Find life expectancy for the selected country
        const mortalityData = dataLe[1].find(entry => entry.country.id === countryId)

        // Fetch data for sex ratio
        const responseSexR = await fetch(URL_sexR)
        const dataSexR = await responseSexR.json()

        // Find sex ratio for the selected country
        const sexRatioData = dataSexR[1].find(entry => entry.country.id === countryId)
        const sexRatio = (100*(100-sexRatioData.value)/sexRatioData.value)

        // Fetch data for GDP
        const responseGdp = await fetch(URL_gdp)
        const dataGdp = await responseGdp.json()

        // Find GDP for the selected country
        const gdpData = dataGdp[1].find(entry => entry.country.id === countryId)

        // Fetch data for GDP/capita
        const responseGdpPc = await fetch(URL_gdpPc)
        const dataGdpPc = await responseGdpPc.json()

        // Find Gdp/capita for the selected country
        const gdpPcData = dataGdpPc[1].find(entry => entry.country.id === countryId)

        // Fetch data for relative poverty
        const responsePoverty = await fetch(URL_poverty)
        const dataPoverty = await responsePoverty.json()

        // Find relative poverty for the selected country
        const povertyData = dataPoverty[1].find(entry => entry.country.id === countryId)

        // Fetch data for gini
        const responseGini = await fetch(URL_gini)
        const dataGini = await responseGini.json()

        // Find gini for the selected country
        const giniData = dataGini[1].find(entry => entry.country.id === countryId)

        // Fetch data for region
        const responseRegion = await fetch(URL_region)
        const dataRegion = await responseRegion.json()

        // Find region for the selected country
        const regionData = dataRegion[1].find(entry => entry.iso2Code === countryId)
        const regionValue = regionData.region.value.trim()

        // Fetch data for population density
        const responseDensity = await fetch(URL_density)
        const dataDensity = await responseDensity.json()

        // Find pop density for the selected country
        const densityData = dataDensity[1].find(entry => entry.country.id === countryId)

        // Fetch data for urban population
        const responseUrban = await fetch(URL_urban)
        const dataUrban = await responseUrban.json()

        // Find urban population for the selected country
        const urbanData = dataUrban[1].find(entry => entry.country.id === countryId)

        // Fetch data for largest city
        const responseCity = await fetch(URL_city)
        const dataCity = await responseCity.json()

        // Find largest city for the selected country
        const cityData = dataCity[1].find(entry => entry.country.id === countryId)

        // Display data
        if(randomCountry.value >= 1000000000) {
            populationElement.innerText = `${Number(randomCountry.value.toPrecision(3)/1000000000)} billion inhabitants.`
        } else if (randomCountry.value >= 1000000) {
            populationElement.innerText = `${Number(randomCountry.value.toPrecision(3)/1000000)} million inhabitants.`
        } else if (randomCountry.value < 1000000) {
            populationElement.innerText = `${Number(randomCountry.value.toPrecision(3))} inhabitants.`
        }
        
        if(fertilityData) {
            fertilityElement.innerText = `${Number(fertilityData.value.toFixed(2))} children per woman.`
        } else {
            fertilityElement.innerText = '-'
        }
        
        if(mortalityData) {
            mortalityElement.innerText = `${Number(mortalityData.value.toFixed(1))} years.`
        } else {
            mortalityElement.innerText = '-'
        }
        
        if (sexRatio) {
            sexRatioElement.innerText = `${Number(sexRatio.toFixed(1))} men per 100 women.`
        } else {
            sexRatioElement.innerText = '-'
        }
        
        if (!gdpData){
            gdpElement.innerText = '-'
        } else if(gdpData.value>=1000000000000) {
            gdpElement.innerText = `${Number(gdpData.value.toPrecision(3)/1000000000000)} trillion USD.`
        } else if(gdpData.value>=1000000000) {
            gdpElement.innerText = `${Number(gdpData.value.toPrecision(3)/1000000000)} billion USD.`
        } else if (gdpData.value>=1000000) {
            gdpElement.innerText = `${Number(gdpData.value.toPrecision(3)/1000000)} million USD.`
        } else if (gdpData.value<1000000) {
            gdpElement.innerText = `${Number(gdpData.value.toPrecision(3))} USD.`
        } 
        
        if(gdpPcData) {
            gdpPcElement.innerText = `${Number(gdpPcData.value.toPrecision(3))} USD. `
        } else {
            gdpPcElement.innerText = '-'
        }
        
        if(povertyData) {
            povertyElement.innerText = `${Number(povertyData.value.toPrecision(3))}%. `
        } else {
            povertyElement.innerText = '-'
        }
        
        if (giniData) {
            giniElement.innerText = `${Number(giniData.value.toPrecision(3))}. `
        } else {
            giniElement.innerText = '-'
        }
        
        regionElement.innerText = `${regionValue}. `
        
        if(densityData) {
            densityElement.innerHTML = `${Number(densityData.value.toPrecision(3))} inhabitants per km<sup>2</sup>.`
        } else {
            densityElement.innerText = '-'
        }
        
        if(urbanData) {
            urbanElement.innerText = `${Number(urbanData.value.toPrecision(3))}% of the population. `
        }
        
        if (!cityData) {
            cityElement.innerText = '-'
        } else if (cityData.value>=1000000){
            cityElement.innerText = `${Number((cityData.value/1000000).toPrecision(3))} million inhabitants. `
        } else if (cityData.value<1000000) {
            cityElement.innerText = `${Number((cityData.value).toPrecision(3))} inhabitants. `
        } 

        // Add list for guesses
        countryList.forEach(countryName => {
            const option = document.createElement('option')
            option.value = countryName
            dataList.appendChild(option)
        })

        // Add event listener for guesses.
        const submitButton = document.querySelector('.guess__submit')
        submitButton.addEventListener('click', () => {
            guessCountry(countryName, regionData)
        })

        // Add event listener for "Enter" key
        inputField.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                guessCountry(inputField.value.trim());
            }
        });

        // Add surrender-functionality
        const giveUpButton = document.querySelector('.guess__give-up')
        giveUpButton.addEventListener('click', () => {
            feedback.innerText = `The correct answer was ${countryName}.`
            inputField.disabled = true // Disable input field
            submitButton.disabled = true // Disable submit button
    
        })


    }

    getCountryData()

}

const guessCountry = (countryName, regionData) => {
    const inputField = document.getElementById('input')
    const feedback = document.querySelector('.hint__feedback')
    const capitalElement = document.querySelector('.capital__example')

    // Retrieve data from the input field
    const userInput = inputField.value

    // Check if all guesses have been used
    if (guessCount >= 3) {
        inputField.disabled = true // Disable input field
        submitButton.disabled = true // Disable submit button
        return
    }

    // Increment guess count
    guessCount++

    // Check whether the guess is correct
    if (userInput.toLowerCase() === countryName.toLowerCase()) {
        feedback.innerText = 'Correct!'
    } else if (guessCount===1) {
        feedback.innerText = 'Incorrect! Two guesses left.'
    } else if (guessCount===2) {
        feedback.innerText = `Incorrect! Only one guess left. The capital of this country is ${regionData.capitalCity}`
        capitalElement.innerText = regionData.capitalCity

    } else if (guessCount===3) {
        feedback.innerText = `Incorrect! The correct answer was ${countryName}.`
    }

    // Clear input field
    inputField.value = ''

}


generateCountryData()