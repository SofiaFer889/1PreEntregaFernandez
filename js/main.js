alert('Bienvenido')

function cantidadDeProduco (){
    let producto = parseFloat(prompt('indique cuantos productos desea comprar'))
    return producto
}

const precio = 150

function calcularMonto (producto, precio){
    if(producto&&precio){
        const montoTotal = precio*producto
        return montoTotal
    }
}

const producto = cantidadDeProduco()
const totalAPagar = calcularMonto(producto, precio)

alert('Su total a pagar es de:'+ '\n' + totalAPagar)
alert('Gracias por su compra!!')