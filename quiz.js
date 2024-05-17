let guessCount = 0

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
    ];

    const getCountryData = async () => {

        // Fetch data for population
        const responsePop = await fetch(URL_pop)
        const dataPop = await responsePop.json()

        // Filter out invalid countries
        const validCountries = dataPop[1].filter(country => !invalidCountryCodes.includes(country.country.id));

        // Pick country at random
        const randomIndex = Math.floor(Math.random() * validCountries.length);
        const randomCountry = validCountries[randomIndex];
        const countryId = randomCountry.country.id;
        console.log(randomCountry)

        // Variable with name of selected country.
        const countryName = randomCountry.country.value;

        // Fetch data for fertility rate
        const responseTfr = await fetch(URL_tfr);
        const dataTfr = await responseTfr.json();

        // Find fertility rate for the selected country
        const fertilityData = dataTfr[1].find(entry => entry.country.id === countryId);
        console.log(fertilityData)

        // Fetch data for life expectancy
        const responseLe = await fetch(URL_le);
        const dataLe = await responseLe.json();

        // Find life expectancy for the selected country
        const mortalityData = dataLe[1].find(entry => entry.country.id === countryId);
        console.log(mortalityData)

        // Fetch data for sex ratio
        const responseSexR = await fetch(URL_sexR);
        const dataSexR = await responseSexR.json();

        // Find sex ratio for the selected country
        const sexRatioData = dataSexR[1].find(entry => entry.country.id === countryId);
        const sexRatio = (100*(100-sexRatioData.value)/sexRatioData.value)
        console.log(sexRatioData)
        console.log(sexRatio)

        // Fetch data for GDP
        const responseGdp = await fetch(URL_gdp);
        const dataGdp = await responseGdp.json();

        // Find GDP for the selected country
        const gdpData = dataGdp[1].find(entry => entry.country.id === countryId);
        console.log(gdpData)

        // Fetch data for GDP/capita
        const responseGdpPc = await fetch(URL_gdpPc);
        const dataGdpPc = await responseGdpPc.json();

        // Find Gdp/capita for the selected country
        const gdpPcData = dataGdpPc[1].find(entry => entry.country.id === countryId);
        console.log(gdpPcData)

        // Fetch data for relative poverty
        const responsePoverty = await fetch(URL_poverty);
        const dataPoverty = await responsePoverty.json();

        // Find relative poverty for the selected country
        const povertyData = dataPoverty[1].find(entry => entry.country.id === countryId);
        console.log(povertyData)

        // Fetch data for gini
        const responseGini = await fetch(URL_gini);
        const dataGini = await responseGini.json();

        // Find gini for the selected country
        const giniData = dataGini[1].find(entry => entry.country.id === countryId);
        console.log(giniData)

        // Fetch data for region
        const responseRegion = await fetch(URL_region);
        const dataRegion = await responseRegion.json();

        // Find region for the selected country
        const regionData = dataRegion[1].find(entry => entry.iso2Code === countryId)
        const regionValue = regionData.region.value
        console.log(regionData)

        // Fetch data for population density
        const responseDensity = await fetch(URL_density);
        const dataDensity = await responseDensity.json();

        // Find pop density for the selected country
        const densityData = dataDensity[1].find(entry => entry.country.id === countryId);
        console.log(densityData)

        // Fetch data for urban population
        const responseUrban = await fetch(URL_urban);
        const dataUrban = await responseUrban.json();

        // Find urban population for the selected country
        const urbanData = dataUrban[1].find(entry => entry.country.id === countryId);
        console.log(urbanData)

        // Fetch data for largest city
        const responseCity = await fetch(URL_city);
        const dataCity = await responseCity.json();

        // Find largest city for the selected country
        const cityData = dataCity[1].find(entry => entry.country.id === countryId);
        console.log(cityData)

        // Display data
        populationElement.innerText = Number(randomCountry.value.toPrecision(3)/1000000)
        fertilityElement.innerText = fertilityData.value
        mortalityElement.innerText = Math.trunc(mortalityData.value)
        sexRatioElement.innerText = Number(sexRatio.toFixed(1))
        gdpElement.innerText = Math.trunc(gdpData.value/1000000)
        gdpPcElement.innerText = Number(gdpPcData.value.toPrecision(3)/1000)
        povertyElement.innerText = Number(povertyData.value.toPrecision(3))
        giniElement.innerText = Number(giniData.value.toPrecision(3))
        regionElement.innerText = regionValue
        densityElement.innerText = Number(densityData.value.toPrecision(3))
        urbanElement.innerText = Number(urbanData.value.toPrecision(3))
        cityElement.innerText = Number(cityData.value.toPrecision(3)/1000000)

        // Add event listener for guesses.
        const submitButton = document.querySelector('.submit')
        submitButton.addEventListener('click', () => {
            guessCountry(countryName)
        })


    }

    getCountryData()

}

const guessCountry = (countryName) => {
    const inputField = document.getElementById('guess');

    // Retrieve data from the input field
    const userInput = inputField.value;

    // Check if all guesses have been used
    if (guessCount >= 3) {
        console.log("Out of guesses!")
        inputField.disabled = true; // Disable input field
        submitButton.disabled = true; // Disable submit button
        return
    }

    // Increment guess count
    guessCount++

    // Check whether the guess is correct
    if (userInput.toLowerCase() === countryName.toLowerCase()) {
        console.log("Correct!");
    } else {
        console.log("Incorrect!");
    }

    // Clear input field
    inputField.value = ''
}

const  nextCountry = () => {
    
}

generateCountryData()