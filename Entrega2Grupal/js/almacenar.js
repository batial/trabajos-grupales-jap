const item = document.getElementById ('item')
const boton = document.getElementById ('agregar')
const contenedor = document.getElementById ('contenedor')
const limpiar = document.getElementById ('limpiar')

let listado = window.localStorage.getItem('listado');
listado = JSON.parse(listado)

if (listado == null)
        listado = []
    else 
        for (const value of listado)
            contenedor.innerHTML += `<li> ${value}</li>`;


boton.addEventListener ('click',() => {
    contenedor.innerHTML += agregarHtml (item)
    listado.push (item.value)
    window.localStorage.setItem('listado', JSON.stringify(listado))
    item.value= ''
})

function agregarHtml (item) {
    return `<li> ${item.value} </li>`
}

limpiar.addEventListener ('click',() => {
    contenedor.innerHTML = ''
    localStorage.removeItem("listado");
    listado = []
})