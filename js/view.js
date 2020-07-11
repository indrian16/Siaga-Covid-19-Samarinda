/** 
 * 
 * view.js Adalah tempat memanipulasi view
*/

function darkTheme() {

    // Init View
    const btnTheme = document.getElementById('btn-theme')
    const nav = document.getElementById('navbar')
    const main = document.getElementById('main')
    const table = document.getElementById('table')

    // Init View dengan Class Name
    // Otomatis berupa List
    const cards = document.getElementsByClassName('card')
    for (let i = 0; i < cards.length; i++) {
        card = cards[i]

        card.classList.remove("card-light")
        card.classList.remove("bg-light")

        card.classList.add("card-dark")
        card.classList.add("bg-dark")
    }
    
    // Set Text Button
    btnTheme.innerText = "Light Mode"

    // Remove Light Theme
    nav.classList.remove("navbar-light")
    nav.classList.remove("bg-light")

    main.classList.remove("bg-light")
    main.classList.remove("text-dark")

    card.classList.remove("card-light")
    card.classList.remove("bg-light")

    table.classList.remove("table-light")

    // Add Dark Theme
    nav.classList.add("navbar-dark")
    nav.classList.add("bg-dark")

    main.classList.add("bg-dark")
    main.classList.add("text-light")

    card.classList.add("card-dark")
    card.classList.add("bg-dark")

    table.classList.add("table-dark")
}

function lightTheme() {
    
    // Init View
    const btnTheme = document.getElementById('btn-theme')
    const nav = document.getElementById('navbar')
    const table = document.getElementById('table')

    // Init View dengan Class Name
    // Otomatis berupa List
    const cards = document.getElementsByClassName('card')
    for (let i = 0; i < cards.length; i++) {
        card = cards[i]

        card.classList.remove("card-dark")
        card.classList.remove("bg-dark")

        card.classList.add("card-light")
        card.classList.add("bg-light")
    }
    
    // Set Text Button
    btnTheme.innerText = "Dark Mode"

    // Remove Light Theme
    nav.classList.remove("navbar-dark")
    nav.classList.remove("bg-dark")

    main.classList.remove("bg-dark")
    main.classList.remove("text-light")
    
    table.classList.remove("table-dark")

    // Add Dark Theme
    nav.classList.add("navbar-light")
    nav.classList.add("bg-light")

    main.classList.add("bg-light")
    main.classList.add("text-dark")

    table.classList.add("table-light")
}