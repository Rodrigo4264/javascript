let contenedor_prductos = document.getElementById("contenedor_productos")
let contenedor_filtro =document.getElementById("contenedor_filtro")
let contenedorProductosPorCategoria =document.getElementById("mostrar-productos-categoria")

let carrito=[]
let categorias=[]


//*********************************************************Genera el filtro para buscar por grupo************************************************************************ */

const categoriasUnicas = [...new Set(listaProductos.map(producto => producto.grupo))];
console.log(categoriasUnicas);
categoriasUnicas.unshift("seleccione")

const select = document.createElement("select");
select.id="filtroPorCategoria"
categoriasUnicas.forEach(categoria => {
  const opcion = document.createElement("option");
  opcion.value = categoria;
  opcion.text = categoria;
  select.appendChild(opcion);
});
contenedor_filtro.appendChild(select);

//***********************************************************Trae los elementos del lista que son llamados por el filtro de cgrupo************************************* */

let selecionPoCategoria=document.getElementById("filtroPorCategoria")
selecionPoCategoria.addEventListener("change",()=>{
  contenedorProductosPorCategoria.innerHTML=""    // para que me limpie el buscador 
  let selecionPoCategoria_option= selecionPoCategoria.value;
  console.log(selecionPoCategoria_option)
  let selecionPoCategoria_productos = listaProductos.filter((selec)=> selec.grupo === selecionPoCategoria_option)
  
console.log(selecionPoCategoria_productos)
  inyectarProductoHTML(selecionPoCategoria_productos,contenedorProductosPorCategoria)
  
if (selecionPoCategoria_option!="seleccione"){

  let separa = document.createElement("div")
  separa.innerHTML=`
  <hr>
  <hr>`
  contenedorProductosPorCategoria.append(separa)}

})

//*****************************************************Pone los elementos de listaporductos en el HTML****************************************************************** */
inyectarProductoHTML(listaProductos,contenedor_prductos)

//**************************************************************             FUNCUINES    ***************************************************************************** */

function inyectarProductoHTML(array,ubicacion){
    array.forEach((producto) => {
        let item = document.createElement("div")
        item.className= "col-3 item"
        item.id=`item-${producto.id}`
        item.innerHTML=`
       
        <div>
             <img src="${producto.img}" class="img-fluid imagen_card" alt="producto">
        </div>
        <div>
            <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
            <p class="card-text">Precio: <b>$${producto.precio}</b></p>
            <button id="agregar${producto.id}" class="boton-agregar">Agregar </button>
        </div> 
       
        `
        ubicacion.append(item)
    
        const botonAgregar = document.getElementById(`agregar${producto.id}`)
          botonAgregar.addEventListener("click",()=>{
            agregarAlCarrito(producto.id)
            console.log(carrito)
          })
    });
}

//*******************************************************************Agrega elementos al carrito */
const agregarAlCarrito=(productoId)=>{
    const existencia = carrito.some ((carrito) => carrito.id === productoId)

    if (existencia){
        const prod = carrito.map ((itemcarrito) => { 
            if (itemcarrito.id === productoId){
                itemcarrito.cantidad ++
            }
        })
    } else { 
        const item = listaProductos.find((listadeproductos) => listadeproductos.id === productoId)
        item.cantidad =1
        carrito.push({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          imagen: item.img,
          cantidad: item.cantidad
        })
    }
}