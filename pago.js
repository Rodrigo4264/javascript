let contenedor_retiro=document.getElementById("contenedor_retiro")
let contenedor_formulario_retiro= document.getElementById("contenedor_formulario_retiro")

let contenedor_formaDePago= document.getElementById("contenedor_formaDePago")
let contenedor_formularioPago = document.getElementById("contenedor_formularioPago")

let opcioneRetiro= document.createElement("div")
opcioneRetiro.className="row retiro-format"
opcioneRetiro.innerHTML=`
<div class="col-12 pago-op"><p>Seleccione como deces recibir su pedido</p></div>
           
        
            <div class="col-6 retiro-input">
                <label for="Retiroenlocal">Retiro en local</label>
                <input type="radio" name="retiro" value="retiroEnLocal" id="Retiroenlocal">
            </div>   

            <div class="col-6 retiro-input">
                <label for="Adomicilio">A domicilio</label>
                <input type="radio" name="retiro" value="adomicilio" id="Adomicilio">
            </div>
`
contenedor_retiro.append(opcioneRetiro)


let retiroEnLocal = document.getElementById("Retiroenlocal")
let adomicilio = document.getElementById("Adomicilio")
retiroEnLocal.addEventListener("click",formulario_retiro)
adomicilio.addEventListener("click",formulario_retiro)


//*************************************************************************************************************************************************** */
let selectModoDePago = document.createElement("div")
selectModoDePago.innerHTML=`
<div class="col-12 pago-op"><p>Seleccione el modo de pago</p></div>
        <div class="col-9">
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

//*************************************************************************************************************************************************** */
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

//****************************************************IONESFUNC*********************************************************************************************** */

function formulario_retiro(){
                                contenedor_formulario_retiro.innerHTML=""
                                let formularioRetiro = document.createElement("div")
                                formularioRetiro.className=" row formularioretiro"
                                formularioRetiro.id="formularioretiro"
                                formularioRetiro.innerHTML=`
                                <form action="">
                                    <label for="retiro_nombre">Nombre</label>
                                    <input type="text" name="retiro_nombre" id="retiro_nombre">
                                    <label for="retiro_direccion">Direccion</label>
                                    <input type="text" name="retiro_direccion" id="retiro_direccion">
                                    <label for="retiro_numerocalle">Numero</label>
                                    <input type="number" name="retiro_numerocalle" id="retiro_numerocalle">
                                    <label for="retiro_telefono">Numeor de telefono</label>
                                    <input type="tel" name="retiro_telefono" id="retiro_telefono">
                                    </form>
                                `
                                contenedor_formulario_retiro.append(formularioRetiro)
                                }



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
                               
                                 <form action="" class="formulariotarjeta">
                                          <div class="row">
                                              <div class="col-5">
                                                  <div class="row">
                                                      <div class="col-12"> <input type="number" name="" id="formulario_numero" placeholder="numero de tarjeta"> </div>
                                                      <div class="col-12"> <input type="text" name="" id="formulario_nombre" placeholder="nombre de la tarjeta"> </div>
                                                      <div class="col-4">  <input type="text" class="input" id="formulario_mes" placeholder="MM" maxlength="2" required></div>
                                                      <div class="col-4"><input type="text" class="input" id="formulario_anio" placeholder="YY" maxlength="2" required></div>
                                                      <div class="col-4"><input type="text" class="input" id="formulario_ccv" placeholder="codigo de seguridad" maxlength="3" required></div>   
                                                  </div>
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
                                <div class="col-3 coutas">   <p>1 cuota sin interes</p>  </div>
                                <div class="col-3 coutas">   <p>3 cuota sin interes</p>  </div>
                                <div class="col-3 coutas">   <p>6 cuota 10% interes</p>  </div>
                                <div class="col-3 coutas">   <p>12 cuota 15% interes</p> </div>
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
                              
                                                          
 }
