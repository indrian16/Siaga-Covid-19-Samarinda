/** 
 * 
 * Variable mode adalah merepresentasikan
 * keadaan tema pada website ini
 * false Adalah Mode Light
 * true Adalah Mode Dark
*/
var dark = false
changeMode(dark) // Default Mode Light


// Listener
function btnThemeOnClick() {

    // Menganti State
    dark = !dark
    changeMode(dark)
}