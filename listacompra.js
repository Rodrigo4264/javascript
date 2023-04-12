let vercarrito=document.getElementById("img_carrito")
let listaDeCompras = document.getElementById("listaDeCompras")
let totalFinal

vercarrito.addEventListener("click",()=>{
  llamarcarrito()
})


//*************************************************************************************************************** */
const llamarcarrito=()=>{

                     
  listaDeCompras.innerHTML=""

encabezadoCArrito()
productoDelCarrito(carrito)
totalFinalDelCarrito()







guardadolocal()
}


//*******************************************************************PARTES DEL CARRITO************************************************************************* */

//************************************************************************ENCABEZADO */
const encabezadoCArrito=()=>{
  const listaDeagregados = document.createElement("div")
  listaDeagregados.innerHTML =`
 
  <div class="row ">
   
    <div class="col-3 ">     <p class="card-text"><b>Nombre</b></p></div>     
    <div class="col-2 d-none d-lg-block">     <p class="card-text"><b>Precio</b></p></div>
    <div class="col-3 ">     <p class="card-text"><b>Cantidad</b></p></div>
    <div class="col-1 ">     <p class="card-text"><b>Subtotal</b></p></div>
    <div class="col-1 d-none d-lg-block">     </div>
  </div>
  `
  listaDeCompras.append(listaDeagregados)
}

//***********************************************************************LISTA DEL CARRITO */
// <div class="col-2 d-none d-lg-block">     </div>

//<div class="col-2 d-none d-lg-block"><img src="${producto.imagen}" class="img-fluid imagen-producto-carrito " alt="producto"></div>




const productoDelCarrito=(carrito)=>{

  for (const producto of carrito) {
      let carritocompra = document.createElement("div")
    
     carritocompra.className ="col-12  mt-4"
      carritocompra.id = `carritocompra-${producto.id}`
      carritocompra.innerHTML = `
      <div class="row">
      
      <div class="col-3"><p ><b>${producto.nombre}</b></p>  </div>
      <div class="col-2 d-none d-lg-block"><p class="card-text "><b>$${producto.precio}</b></p> </div>
      <div class="col-3"><p class="card-text "><b>${producto.cantidad}</b> <span id="mas${producto.id}" class="boton-inre">🔼</span>/<span id="menos${producto.id}" class="boton-inre">🔽</span> </p> </div>
      <div class="col-2"><p class="card-text "><b>$${producto.cantidad * producto.precio}</b></p> </div>
      <div class="col-1"><button id="eliminar${producto.id}" class="boton-eliminar">✖️ </button></div>
    </div>`;
        listaDeCompras.append(carritocompra)
    
    
        const incrementarCantidad = document.getElementById(`mas${producto.id}`)
        incrementarCantidad.addEventListener("click",()=>{
          incrementarCantidadCarrito(producto.id)
          console.log(carrito)
        })
    
        const disminuirCantidad = document.getElementById(`menos${producto.id}`)
        disminuirCantidad.addEventListener("click",()=>{
          disminuirCantidadCarrito(producto.id)
          console.log(carrito)
        })
    
        const eliminarProducto = document.getElementById(`eliminar${producto.id}`)
        eliminarProducto.addEventListener("click",()=>{
          eliminarProductoCArrito(producto.id)
          console.log(carrito)
        })
    }

}

//***********************************************************************************MONTOFINAL Y BOTONPAGO */
  function totalFinalDelCarrito() {
  let totalFinal= carrito.map(itemCompra=> itemCompra.precio * itemCompra.cantidad).reduce((acc, el) => acc+el,0)
  const totalDeCompra= document.createElement("div")
  totalDeCompra.className="row"
  totalDeCompra.innerHTML =`
  <div class="col-8">  <H2>total a pagar: </H2></div>
  <div class="col-4 totalApagarn">$${totalFinal}</div>
  `
  listaDeCompras.append(totalDeCompra)
 
  localStorage.setItem("precioFinal",JSON.stringify(totalFinal))
}

//*****************************************************************incrementar, disminuir o eliminar producto******** */

const incrementarCantidadCarrito=(productoid)=>{
  const item = carrito.find((listadeproductos) => listadeproductos.id === productoid)
  if (item.cantidad!==0){
    item.cantidad ++
    llamarcarrito()
  }}

const disminuirCantidadCarrito= (productoid)=>{
  const item = carrito.find((listadeproductos) => listadeproductos.id === productoid)
  if (item.cantidad!==0){
    item.cantidad --
    if(item.cantidad==0){
      eliminarProductoCArrito(productoid)
    }
    llamarcarrito()
  }}

const eliminarProductoCArrito = (productoid)=>{
  const item = carrito.find((listadeproductos) => listadeproductos.id === productoid)
  const indice = carrito.indexOf(item)
  carrito.splice(indice,1)
  llamarcarrito()
}







