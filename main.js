let contenedor_prductos = document.getElementById("contenedor_productos")
let contenedor_filtro =document.getElementById("contenedor_filtro")
let contenedorProductosPorCategoria =document.getElementById("mostrar-productos-categoria")
let carrito=JSON.parse(localStorage.getItem("carrito")) || []
let categorias=[]

consultarJson()  // //Trea los archivos del JSON, llama a inyectasHTML para hacer las card y crearcategoriFiltro para el select

//**************************************************************   FUNCUINES    ************************************************************* */
//*************************************************************Fetch para consultar archivo json de productos */
function consultarJson(donde) {
  fetch("./json/productos.json")
    .then((response) => response.json())
    .then((jsonResponse) => {
      listaProductoss= jsonResponse;
      inyectarProductoHTML(listaProductoss,contenedor_prductos)  //pone los productos en el HTML 
      crearCategoriaFiltro(listaProductoss) // Llama a las funciones para hacer el filtro
    });
}
//*****************************************Genera el filtro para buscar por grupo********************************* */
function crearCategoriaFiltro(){
  const categoriasUnicas = [...new Set(listaProductoss.map(producto => producto.grupo))];
  categoriasUnicas.unshift("seleccione")
  const select = document.createElement("select");
  select.id="filtroPorCategoria"
  categoriasUnicas.forEach(categoria => {
    const opcion = document.createElement("option");
    opcion.value = categoria;
    opcion.text = categoria;
    select.appendChild(opcion);
  });
  contenedor_filtro.append(select);
  generaCArdDelFiltro()
  }
  //*************************Trae los elementos del lista que son llamados por el filtro de cgrupo**************** */
  function generaCArdDelFiltro(){
    let selecionPoCategoria=document.getElementById("filtroPorCategoria")
    selecionPoCategoria.addEventListener("change",()=>{
      contenedorProductosPorCategoria.innerHTML=""    // para que me limpie el buscador 
      let selecionPoCategoria_option= selecionPoCategoria.value;
      let selecionPoCategoria_productos = listaProductoss.filter((selec)=> selec.grupo === selecionPoCategoria_option)
      inyectarProductoHTML(selecionPoCategoria_productos,contenedorProductosPorCategoria)
    if (selecionPoCategoria_option!="seleccione"){
      let separa = document.createElement("div")
      separa.innerHTML=`
      <hr>
      <hr>`
      contenedorProductosPorCategoria.append(separa)}
    })   
    }
//****************************************************************** Hace las card de los productos  */
function inyectarProductoHTML(array,ubicacion){
    array.forEach((producto) => {
        let item = document.createElement("div")
        item.className= "col-12 col-md-4 col-lg-3 item"
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
//******************Agrega elementos al carrito compara si no exixte lo agrega y si existe le aumenta la cantidad */
const agregarAlCarrito=(productoId)=>{
    const existencia = carrito.some ((carrito) => carrito.id === productoId)
    if (existencia){
        const prod = carrito.map ((itemcarrito) => { 
            if (itemcarrito.id === productoId){
                itemcarrito.cantidad ++
            }
        })
    } else { 
        const item = listaProductoss.find((listadeproductos) => listadeproductos.id === productoId)
        item.cantidad =1
        carrito.push({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          imagen: item.img,
          cantidad: item.cantidad
        })    
    }
    guardadolocal()
    mostrartoast()
}
//*****************************************************************Localstorage de productos del carrito  */
const guardadolocal=()=>{  localStorage.setItem("carrito",JSON.stringify(carrito)) } 
//******************************************************************toast para el agregado de productos al carrito */
function mostrartoast(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    title: 'Producto agregado'
  })
}