
var cuentas = [
    { nombre:'Mali', saldo: 200, password:"123" },
    { nombre:'Gera', saldo: 290, password:"456" },
    { nombre:'Maui', saldo: 67, password:"789" },
]


document.querySelector("#ingresar").onclick = () => {
    
   

    const campoUsuario = document.querySelector("#user").value;
    const campoPassword = document.querySelector("#password").value;
    buscador = cuentas.find((elemento) => elemento.nombre == campoUsuario )
    
    
    if (buscador == undefined){

        alert("Error de usuario")
        return
    }

    if (campoUsuario == buscador.nombre && campoPassword == buscador.password){
        pantallaSaldos()
    }else{
        alert("Datos invalidos, por favor intentelo otra vez")
    }
    
}




function pantallaSaldos(){


   
    document.querySelector("#informacion").innerHTML = 
    "<div id='cuenta'> <p>Tu  saldo es: $" + buscador.saldo + "</p> </div>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2">
    <button class="botones" id="ingresarSaldo"> Depositar </button>
    <button class="botones" id="retirarSaldo"> Retirar  </button>
    <button class="botones" id="salir"> Salir </button></div>`


   
    document.querySelector("#ingresarSaldo").onclick = () => {
        deposito()
    }
    
    document.querySelector("#retirarSaldo").onclick = () => {
        retiro()
    }

    document.querySelector("#salir").onclick = () => {
        window.location ="index.html"
    }
}



function deposito() {

   

    document.querySelector("#informacion").innerHTML = 
    "<input class='inputDatos' id='cantidadDeposito' placeholder='¿Cuanto quieres depositar?'>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2">
        <button class="botones" id="ingresarSaldo"> Depositar </button>
        <button class="botones" id="salir"> Salir </button>
    </div>`
    
    document.querySelector("#salir").onclick = () => {
        pantallaSaldos()
    }

   

    document.querySelector("#ingresarSaldo").onclick = ()=> {
        const montoDeposito = document.querySelector("#cantidadDeposito").value
        let resultadoDeposito = parseFloat(buscador.saldo) + parseFloat(montoDeposito)

        if (resultadoDeposito > 990){
            alert("NO TE PUEDES EXECEDER DE 990")

            pantallaSaldos()
        }else{

            buscador.saldo = resultadoDeposito
            pantallaSaldos()

            }            
    }
}


function retiro() {

   
    document.querySelector("#informacion").innerHTML = 
    "<input class='inputDatos' id='cantidadRetiro' placeholder='¿Monto a Retirar?'>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2">
        <button class="botones" id="retirarSaldo"> Retirar </button>
        <button class="botones" id="salir"> Salir </button>
    </div>`
    
    document.querySelector("#salir").onclick = () => {
        pantallaSaldos()
    }

    

    document.querySelector("#retirarSaldo").onclick = ()=> {
        const montoRetiro = document.querySelector("#cantidadRetiro").value
        let resultadoRetiro = parseFloat(buscador.saldo) - parseFloat(montoRetiro)
        
        if (resultadoRetiro < 10){

            alert("TU CUENTA NO PUEDE QUEDAR VACIA")
            pantallaSaldos()

        }else{

            buscador.saldo = resultadoRetiro
            pantallaSaldos()

            }
        }
}