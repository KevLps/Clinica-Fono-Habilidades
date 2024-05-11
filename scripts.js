const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}
function cliqueiFora(){
    form.style.left = "-322px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}