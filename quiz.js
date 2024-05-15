const generateRandomCountries = () => {

    //Get elements from DOM
    const populationElement = document.querySelector('.pop__example')
    const fertilityElement = document.querySelector('.tfr__example')

    // Get API
    const URL_pop = 'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&mrnev=1&per_page=1500'
    const URL_tfr = 'https://api.worldbank.org/v2/country/all/indicator/SP.DYN.TFRT.IN?format=json&mrnev=1&per_page=1500'

    const getCountry = async () => {

        // Fetch data for population
        const responsePop = await fetch(URL_pop)
        const dataPop = await responsePop.json()

        // Only include countries in array
        const countries = dataPop[1]

        // Pick country at random
        const randomIndex = [Math.floor(Math.random() * countries.length)];
        const randomCountry = countries[randomIndex]
        const countryId = randomCountry.country.id

        // Fetch data for fertility rate
        const responseTfr = await fetch(URL_tfr);
        const dataTfr = await responseTfr.json();

        // Find fertility rate for the selected country
        const fertilityData = dataTfr[1].find(entry => entry.country.id === countryId);
        console.log(fertilityData)

        // Display data
        populationElement.innerText = randomCountry.value
        fertilityElement.innerText = fertilityData.value

    }


    getCountry()

}

generateRandomCountries()