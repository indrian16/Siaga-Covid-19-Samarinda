/***
 * 
 * logic.js tempat menaruh banyak funsi
 */

function changeMode(dark) {

    if (dark) {
        console.log("Mode Dark")

        // Menganti Tema Dark
        darkTheme()
    } else {
        console.log("Mode Light")

        // Menganti Tema Light
        lightTheme()
    }
}