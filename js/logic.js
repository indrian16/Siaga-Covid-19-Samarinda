/***
 * 
 * logic.js tempat menaruh banyak funsi
 */

function changeMode(dark) {

    if (dark) {
        console.log("Mode Dark")
        btnThemeText("Mode Light")
        navbarDark()
        cardDark()
        tableDark()
    } else {
        console.log("Mode Light")
        btnThemeText("Mode Dark")
        navbarLight()
        cardLight()
        tableLight()
    }
}