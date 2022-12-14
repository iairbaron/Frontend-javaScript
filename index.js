const albumesFamosos = [{
    id: "a987",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
},
{
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
},
{
    id: "c321",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
}
];

let pregunta="Origin of Symmetry"

    // function nombreDisco (){
    //     let nombre;
    //      albumesFamosos.forEach(element => {
    // if(element.nombre===pregunta){


    // }});
    // return nombre
    // }
    


function eliminarAlbum() {
    window.addEventListener('keydown', (e) => {
        console.log(e);
        if (e.key === 'f') {
        const album = prompt('¿Que album desea eliminar?')
        
        const posicionBuscado = albumesFamosos.findIndex(obj => obj.nombre === album)
        console.log(posicionBuscado)
        
        // si fue encontrado el nombre del almbum..
        if (posicionBuscado !== -1) {
        // 👇eliminamos elemento
        albumesFamosos.splice(posicionBuscado, 3)
        
        
        //👇 post click debemos renderizar nuevamente las tarjetas
        renderizarAlbumes(albumesFamosos);
        //👇 post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior
        marcarFavorito();
        }
        }
        })
        
        }
        eliminarAlbum();