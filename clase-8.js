/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array 
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
    // seleccionamos todos lo botones de like
    const botonesLike = document.querySelectorAll('.fa-heart');
    // 👇 por cada boton escuchamos su click
    botonesLike.forEach((boton) => {

        boton.addEventListener("click", function () {
            console.log(boton.id)

            albumesFamosos.forEach((album) => {
                if (album.id === boton.id) {
                }
            })
            renderizarAlbumes(albumesFamosos)
            marcarFavorito()
        })
    })
}


// recorreremos el listado de albumes
// si encontramos al que coincide con el boton apretado,
// le cambiamos la propiedad like por lo contrario

//👇 post click debemos renderizar nuevamente las tarjetas

//👇 post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior




marcarFavorito()



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
    // desarrollar la función 👇
    let preguntar
    window.addEventListener("keypress", function (e) {
        if (e.key === "f") {
            preguntar = prompt("Que album desea eliminar")
        }
        console.log(preguntar)

        for (let index = 0; index < albumesFamosos.length; index++) {
            if (albumesFamosos[index].nombre === preguntar) {
                delete (albumesFamosos[index])
            }
        }
        console.log(albumesFamosos)
        renderizarAlbumes(albumesFamosos)
    })
    marcarFavorito()
}
eliminarAlbum();