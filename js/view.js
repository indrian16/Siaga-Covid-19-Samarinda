/** 
 * 
 * view.js Adalah tempat memanipulasi view
*/

function btnThemeText(text) {

    // Init View
    const btnTheme = document.getElementById('btn-theme')
    
    // Set Text Button
    btnTheme.innerText = text
}

function navbarLight() {

    // Init View
    const nav = document.getElementById('navbar')

    // Remove Light Theme
    nav.classList.remove("navbar-dark")
    nav.classList.remove("bg-dark")

    // Add Dark Theme
    nav.classList.add("navbar-light")
    nav.classList.add("bg-light")
}

function navbarDark() {

    // Init View
    const nav = document.getElementById('navbar')

    // Remove Light Theme
    nav.classList.remove("navbar-light")
    nav.classList.remove("bg-light")

    // Add Dark Theme
    nav.classList.add("navbar-dark")
    nav.classList.add("bg-dark")
}

function cardDark() {

    // Init View
    const card = document.getElementById('card')

    // Remove Light Theme
    card.classList.remove("card-light")
    card.classList.remove("bg-light")
    card.classList.remove("text-dark")

    // Add Dark Theme
    card.classList.add("card-dark")
    card.classList.add("bg-dark")
    card.classList.add("text-light")
}

function cardLight() {

    // Init View
    const card = document.getElementById('card')

    // Remove Light Theme
    card.classList.remove("card-dark")
    card.classList.remove("bg-dark")
    card.classList.remove("text-light")

    // Add Dark Theme
    card.classList.add("card-light")
    card.classList.add("bg-light")
    card.classList.add("text-dark")
}

function tableDark() {

    // Init View
    const table = document.getElementById('table')

    // Remove Light Theme
    table.classList.remove("table-light")

    // Add Dark Theme
    table.classList.add("table-dark")
}

function tableLight() {

    // Init View
    const table = document.getElementById('table')

    // Remove Light Theme
    table.classList.remove("table-dark")

    // Add Dark Theme
    table.classList.add("table-light")
}