let vercarrito=document.getElementById("img_carrito")
let listaDeCompras = document.getElementById("listaDeCompras")


vercarrito.addEventListener("click",()=>{
  
listaDeCompras.style.display = "flex"                   
  listaDeCompras.innerHTML=""
  const listaDeagregados = document.createElement("div")
listaDeagregados.innerHTML =`
<div class="row">
  <div class="col encabezado"> <h3>Tu lista de compras</h3>  </div>
  <div class="col-3"> <p id="cierra_carrito" class="cierra_carrito">seguir comprando</p>  </div>
</div>
<div class="row">
  <div class="col-3">     </div>
  <div class="col-3">     <p class="card-text"><b>Nombre</b></p></div>     
  <div class="col-2">     <p class="card-text"><b>Precio</b></p></div>
  <div class="col-2">     <p class="card-text"><b>Cantidad</b></p></div>
  <div class="col-2">     <p class="card-text"><b>Subtotal</b></p></div>
</div>
`
listaDeCompras.append(listaDeagregados)

for (const producto of carrito) {
  let carritocompra = document.createElement("div")

 carritocompra.className ="col-12 mt-4"
  carritocompra.id = `carritocompra-${producto.id}`
  carritocompra.innerHTML = `
  <div class="row justify-content-center">
  <div class="col-3"><img src="${producto.imagen}" class="img-fluid imagen-producto-carrito " alt="producto"></div>
  <div class="col-3"><p ><b>${producto.nombre}</b></p>  </div>
  <div class="col-2"><p class="card-text "><b>$${producto.precio}</b></p> </div>
  <div class="col-2"><p class="card-text "><b>${producto.cantidad}</b></p>  </div>
  <div class="col-2"><p class="card-text "><b>$${producto.cantidad * producto.precio}</b></p> </div>
</div>`;
    listaDeCompras.append(carritocompra)
}
let totalFinal= carrito.map(itemCompra=> itemCompra.precio * itemCompra.cantidad).reduce((acc, el) => acc+el,0)
const totalDeCompra= document.createElement("div")
totalDeCompra.className="row"
totalDeCompra.innerHTML =`
<div class="col-10">  <H2>total a pagar: $</H2></div>
<div class="col-2 totalApagarn">${totalFinal}</div>
`
listaDeCompras.append(totalDeCompra)



const cierreCarrito= document.getElementById("cierra_carrito")
cierreCarrito.addEventListener("click",()=>{
  listaDeCompras.style.display ="none"
})


const botonPagar = document.createElement("div")
botonPagar.className = "row"
botonPagar.innerHTML =`
<button id="botonPagar" class="botonPagar"><a href="../pages/pago.html">FINALIZAR COMPRA</a> </button>
`;
listaDeCompras.append(botonPagar)


})

