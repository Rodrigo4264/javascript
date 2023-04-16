let contenedor_retiro=document.getElementById("contenedor_retiro")
let contenedor_formulario_retiro= document.getElementById("contenedor_formulario_retiro")
let contenedor_formaDePago= document.getElementById("contenedor_formaDePago")
let contenedor_formularioPago = document.getElementById("contenedor_formularioPago")
let precioFinal=JSON.parse(localStorage.getItem("precioFinal"))
let contenedor_monto= document.getElementById("contenedor_monto")

let monto=document.createElement("div")
monto.innerHTML=`
<div class="col-9 gracia">Gracias por su compra</div>
<div class="preciofinal"> <p>El monto a pagar es de $${precioFinal}</p></div>
`
contenedor_monto.append(monto)

let opcioneRetiro= document.createElement("div")
opcioneRetiro.className="row"
opcioneRetiro.innerHTML=`
            <div class="col-12 pago-op d-flex justify-content-center"><p>Seleccione como deces recibir su pedido</p></div>
            <div class="col-6 retiro-input d-flex justify-content-center">
                <label for="Retiroenlocal">Retiro en local</label>
                <input type="radio" name="retiro" value="retiroEnLocal" id="Retiroenlocal">
            </div>   

            <div class="col-6 retiro-input d-flex justify-content-center">
                <label for="Adomicilio">A domicilio</label>
                <input type="radio" name="retiro" value="adomicilio" id="Adomicilio">
            </div>
`
contenedor_retiro.append(opcioneRetiro)

let retiroEnLocal = document.getElementById("Retiroenlocal")
let adomicilio = document.getElementById("Adomicilio")
retiroEnLocal.addEventListener("click",formulario_retiro)
adomicilio.addEventListener("click",formulario_retiro)
//************************************************************************************************** */
let selectModoDePago = document.createElement("div")
selectModoDePago.className="row"
selectModoDePago.innerHTML=`
<div class="col-12 d-flex justify-content-center pago-op"><p>Seleccione el modo de pago</p></div>
        <div class="col-12 d-flex justify-content-center">
            <select name="" id="modoDePago">
                 <option value="">Seleccione el modo de pago</option>
                 <option value="debito">Tarjeta de debito</option>
                 <option value="credito">Tarjeta de credito</option>
                 <option value="efectivo">Efectivo</option>
                 <option value="tranferencia">Tranferencia bancaria</option>           
            </select>
        </div>
`
contenedor_formaDePago.append(selectModoDePago)

//*********************************************************************************************************************************** */
let modoDePago= document.getElementById("modoDePago")
modoDePago.addEventListener("change",() =>{
    console.log(modoDePago.value)
    let modoDePago_opcion =modoDePago.value
    if (modoDePago_opcion==="efectivo"){
        formularioefectivo()
    }else if(modoDePago_opcion=="debito"){
        formularioTarjeta()
    }else if(modoDePago_opcion=="credito"){
        formularioTarjeta()
    }
  })
//************************IONESFUNC*********************************************************************************************** */
function formulario_retiro(){
contenedor_formulario_retiro.innerHTML=""
let formularioRetiro = document.createElement("div")
formularioRetiro.className=" row formularioretiro"
formularioRetiro.id="formularioretiro"
formularioRetiro.innerHTML=`
<form enctype="text/plain" class="container border rounded" id="formRetiro" >
  <div class="row">
    <div class="col-12 col-md-6 mb-3 mt-3">
      <label class="label__text" for="userName">Nombre: </label>
      <input class="form-control" type="text" name="userName" id="retiro_userName" placeholder="Ingrese su nombre" required>
    </div>
    <div class="col-12 col-md-6 mb-3 mt-3">
        <label class="label__text" for="userLastName">Apellido: </label>
       <input class="form-control" type="text" name="userLastName" id="retiro_userLastName" placeholder="Ingrese su apellido" required>
    </div>
    <div class="col-12 mb-3">
      <label class="label__text" for="userEmail">direccion: </label>
      <input class="form-control" type="email" name="userEmail" id="retiro_useraddres" placeholder="Ingrese su direccion" required>
    </div>
    <div class="col-12 mb-3">
      <label class="label__text" for="userNumber">Telefono: </label>
      <input class="form-control" type="tel" name="userNumber" id="retiro_userNumber" placeholder="Ingrese su numero de telefono" required>
    </div>
    <div class="col-12 col-md-6  mb-3 d-flex align-items-center">
      <label class="form__text pe-3" for="userAddInfo">Desea recibir promociones a s telefono?</label>
        <input type="checkbox" name="userAddInfo" id="retiro_userAddInfo" value="si">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">dejenos cualquier informacion relevante para el servicio</label>
      <textarea class="form-control" id="retiro_infoadicional" rows="4"></textarea>
    </div>
    <div class="d-flex justify-content-center mb-2">
      <input class="botton bg-primary-subtle border-1 rounded " type="submit" id="validarFormularioRetiro" value="validar">
    </div>
  </div>
</form>
`
contenedor_formulario_retiro.append(formularioRetiro)

const formRetiro = document.getElementById("formRetiro")
formRetiro.addEventListener("submit",(event)=>{
  event.preventDefault()
  validarDatos()
  let  retiro_userName = document.getElementById("retiro_userName").value
  let retiro_userLastName = document.getElementById("retiro_userLastName").value
  let retiro_useraddres = document.getElementById("retiro_useraddres").value
  let retiro_userNumber = document.getElementById("retiro_userNumber").value
  let retiro_userAddInfo = document.getElementById("retiro_userAddInfo").value
  let retiro_infoadicional = document.getElementById("retiro_infoadicional").value
  let DatosFormREtiro=[retiro_userName, retiro_userLastName, retiro_userNumber, retiro_userAddInfo,retiro_infoadicional ]
  localStorage.setItem("datosRetiro",JSON.stringify(DatosFormREtiro)) 
})
}
//********************************************************************* */
function formularioefectivo(){
                                contenedor_formularioPago.innerHTML=""
                                let formulario_efectivo = document.createElement("div")
                                formulario_efectivo.innerHTML = `
                                <h3>Gracias por comprar en MANATI</h3>
                                <h4>El montto total es de: </h4>
                                <div>
                                <label for="montoquepaga">Con cuanto va a pagar</label>
                                <input type="number" name="" id="montoquepaga">
                                </div>
                                `
                                contenedor_formularioPago.append(formulario_efectivo)
                                finalizarCompra()
                            }
function formularioTarjeta(){
                                contenedor_formularioPago.innerHTML=""
                            let formularioTarjeta = document.createElement("div")
                            formularioTarjeta.className="container"
                            formularioTarjeta.innerHTML=`
                             <section class="tarjeta">
                                          <div class="frente_tarjeta"><img src="../imagen/tarjeta/frente-tarjeta.avif" alt="">
                                              <div class="numero_tarjeta" id="numero_tarjeta">**** **** **** ****</div>
                                              <p class="vencimiento_tarjeta">
                                                  <span id="vencimiento-mes">00</span>/<span id="vencimiento-anio">00</span>
                                              </p>
                                              <div class="nombre_tarjeta" id="nombre_tarjeta"> Juan Carlo</div>
                                              <img src="../imagen/tarjeta/dorso-tarjeta.png" class="dorso-tarjeta" alt="">
                                              <div class="ccv-tarjeta" id="ccv-tarjeta">CCV</div> 
                                          </div>
                            </section>
                               
                            <form action="#" method="get" enctype="text/plain" class="container border rounded" id="formPago" >
                            <div class="row">
                              <div class="col-12 mb-3 mt-3">
                                <label class="label__text" for="NumeroDearjeta">numero de tarjeta: </label>
                                <input class="form-control" type="text" name="NumeroDearjeta" id="formulario_numero" placeholder="numero de tarjeta " required>
                              </div>
                              <div class="col-12 mb-3 mt-3">
                                  <label class="label__text" for="nombreDelTitular">Nombre del titular: </label>
                                 <input class="form-control" type="text" name="nombreDelTitular" id="formulario_nombre" placeholder="Nombre del titular" required>
                              </div>
                              <div class="col-12 col-md-4 mb-3">
                                <label class="label__text" for="mesDeVencimiento">Mes de vencimiento: </label>
                                <input class="form-control" type="text" name="mesDeVencimiento" id="formulario_mes" placeholder="MM" maxlength="2" required>
                              </div>
                              <div class="col-12 col-md-4 mb-3">
                                  <label class="label__text" for="anioDeVencimiento">anio de vencimiento: </label>
                                 <input class="form-control" type="text" name="anioDeVencimiento" id="formulario_anio" placeholder="YY" maxlength="2" required>
                              </div>
                              <div class="col-12 col-md-4  mb-3">
                                <label class="form__text" for="pasNumber">CCV:</label>
                                  <input class="form-control" type="number" name="pasNumber" id="formulario_ccv" placeholder="CCV" maxlength="3" required>
                              </div>
                              <div class="d-flex justify-content-center mb-2">
                                <input class="botton bg-primary-subtle border-1 rounded " type="submit" value="validar">
                              </div>
                            </div>                    
                          </form>                         
                            `
                            contenedor_formularioPago.append(formularioTarjeta)
                            
                            if(modoDePago.value==="credito"){
                                let formulario_credito=document.createElement("div")
                                formulario_credito.className="container"
                                formulario_credito.innerHTML=`
                                <div class="row">
                                    <div class="col-12"> <h3>Seleccione las cuotas</h3></div>
                                </div>
                                <div class="row">
                                <div class="col-12 col-md-3  mb-3">
                                  <label for="couta1">1 cuota sin interes</label>
                                  <input type="radio" name="cant_cuotas" id="couta1" class="coutas" >
                                </div>

                                <div class="col-12 col-md-3  mb-3">
                                  <label for="couta3">3 cuota sin interes</label>
                                  <input type="radio" name="cant_cuotas" id="couta3" class="coutas" >
                                </div>

                                <div class="col-12 col-md-3  mb-3">
                                  <label for="couta6">6 cuota 10% interes</label>
                                  <input type="radio" name="cant_cuotas" id="couta6" class="coutas" >
                                </div>

                                <div class="col-12 col-md-3  mb-3">
                                  <label for="cuota12">12 cuota 15% interes</label>
                                  <input type="radio" name="cant_cuotas" id="cuota12" class="coutas" >
                                </div>
                                </div>
                                `
                            contenedor_formularioPago.append(formulario_credito)
                            }
                                      
                              let nombre_tarjeta = document.getElementById("nombre_tarjeta")
                              let formulario_nombre = document.getElementById("formulario_nombre")
                            
                              formulario_nombre.addEventListener("input",()=>{
                                nombre_tarjeta.innerText = formulario_nombre.value
                                if(formulario_nombre.value.length===0){
                                    nombre_tarjeta.innerText="Juan Carlo"
                                }
                              })
                            
                              let numero_tarjeta =document.getElementById("numero_tarjeta")
                              let formulario_numero = document.getElementById("formulario_numero")
                            
                              formulario_numero.addEventListener("input",()=>{
                                numero_tarjeta.innerText=formulario_numero.value
                                if(formulario_numero.value.length===0){
                                  numero_tarjeta.innerText="0000 0000 0000 0000"
                                }
                              })
                              
                              let mes_tarjeta = document.getElementById("vencimiento-mes")
                              let formulario_mes = document.getElementById("formulario_mes")
                            
                              formulario_mes.addEventListener("input",()=>{
                                mes_tarjeta.innerText=formulario_mes.value
                                if(formulario_mes.value.length===0){
                                  mes_tarjeta.innerText="00"
                                }
                                })
                            
                              let anio_tarjeta = document.getElementById("vencimiento-anio")
                              let formulario_anio = document.getElementById("formulario_anio")
                            
                              formulario_anio.addEventListener("input",()=>{
                                anio_tarjeta.innerText=formulario_anio.value
                                if(formulario_anio.value.length===0){
                                  anio_tarjeta.innerText="00"
                                }
                                })
                            
                              let ccv_tarjeta = document.getElementById("ccv-tarjeta")
                              let formulario_ccv = document.getElementById("formulario_ccv")
                              
                              formulario_ccv.addEventListener("input",()=>{
                                ccv_tarjeta.innerText = formulario_ccv.value
                                if(formulario_ccv.value.length===0){
                                    ccv_tarjeta.innerText="CCV"
                                }
                              })
                              
                              finalizarCompra()   
                              
const formPago = document.getElementById("formPago")
formPago.addEventListener("submit",(event)=>{
  event.preventDefault()
  validarDatos()
  
  let  formulario_numero = document.getElementById("formulario_numero").value
  let formulario_nombre = document.getElementById("formulario_nombre").value
  let formulario_mes = document.getElementById("formulario_mes").value
  let formulario_anio = document.getElementById("formulario_anio").value
  let formulario_ccv = document.getElementById("formulario_ccv").value
  let DatosFormPago=[formulario_numero,formulario_nombre,formulario_mes, formulario_anio, formulario_ccv ]
  localStorage.setItem("datosPago",JSON.stringify(DatosFormPago)) 
})
}
 function finalizarCompra(){
  const finalizar = document.createElement("div")
  finalizar.className="boton-finalizar row"
  finalizar.innerHTML=`
  <div class="col-12 d-flex justify-content-center mt-2">
  <button id="boton-realizar-pago" class="boton-realizar-pago">Realizar Pago </button>
  </div>
  `
   contenedor_formularioPago.append(finalizar)
const btnReliazarPago= document.getElementById("boton-realizar-pago")
 btnReliazarPago.addEventListener("click",()=>{
  Swal.fire(
        'Gracias por su compra',
        '<button type="button" class="btn btn-primary"> <a href="../index.html" class="finCompra">Volver a comprar</a> </button>',
         'success',        
      )
 })
 }
 function validarDatos(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Sus datos han sido registrados',
    showConfirmButton: false,
    timer: 1500
  })
 }


