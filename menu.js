const showHelpWindow = () => {

    //Get elements from DOM.
    const helpLink = document.querySelector('.help-link')
    const helpPage = document.querySelector('.help')
    const menu = document.querySelector('.menu__list')
    const closeButton = document.querySelector('.close-button')
    const aboutPage = document.querySelector('.about')
    const aboutLink = document.querySelector('.about-link')

    // Function to open help window.
    helpLink.addEventListener('click', () => {
        helpPage.classList.remove('help--hidden')
        menu.classList.add('menu--hidden')
        closeButton.classList.add('close-button--active')
        
    })

        // Function to open help window.
        aboutLink.addEventListener('click', () => {
            aboutPage.classList.remove('about--hidden')
            menu.classList.add('menu--hidden')
            closeButton.classList.add('close-button--active')
        })

    // Function to close help window
    closeButton.addEventListener('click', () => {
        helpPage.classList.add('help--hidden')
        menu.classList.remove('menu--hidden')
        closeButton.classList.remove('close-button--active')
        aboutPage.classList.add('about--hidden')
        
    })

}

showHelpWindow()