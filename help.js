const showHelpWindow = () => {

    //Get elements from DOM.
    const helpLink = document.querySelector('.help-link')
    const helpPage = document.querySelector('.help')
    const menu = document.querySelector('.menu__list')
    const closeButton = document.querySelector('.close-button')

    // Function to open help window.
    helpLink.addEventListener('click', () => {
        helpPage.classList.remove('help--hidden')
        menu.classList.add('menu--hidden')
        closeButton.classList.add('close-button--active')
        
    })

    // Function to close help window
    closeButton.addEventListener('click', () => {
        helpPage.classList.add('help--hidden')
        menu.classList.remove('menu--hidden')
        closeButton.classList.remove('close-button--active')
        
    })

}

showHelpWindow()