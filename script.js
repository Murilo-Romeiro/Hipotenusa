array = []

function calcular(){
    catop = document.getElementById("a").value
    catad = document.getElementById("b").value
    Hipotenusa = document.getElementById("hipo")
    somacatetos = Math.hypot(catop, catad)
    Hipo = document.getElementById("hipo").value = somacatetos
    array.push(Hipo)
    console.log(array)
}
