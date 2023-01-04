let inputPrecio=document.querySelector('.inputPrecio');
let inputCoupon=document.querySelector('.inputDescuento');
const boton=document.querySelector('.boton');
const parrafoResultado=document.querySelector('.resultado');

boton.addEventListener('click',calcularPrecio);

// const couponsObj={
//     'JuanDC_es_Batman':30,
//     '3456789':25,
//     '123':15,
// };

const couponsList=[]
couponsList.push({
    name: 'JuanDC_es_Batman',
    discount:30,
})
couponsList.push({
    name: 'pero_es_un_secreto',
    discount:25,
})
couponsList.push({
    name: 'no_le_digas_a_nadie',
    discount:15,
})

function calcularPrecio(){
    const price=Number(inputPrecio.value);
    const coupon=inputCoupon.value;

    if(!price || !coupon){
        parrafoResultado.innerText='PATAS, pon algo'
        return;
}
    let discount;

    function isCouponInArray(couponElement){
        return couponElement.name==coupon;
    }
    const couponInArray=couponsList.find(isCouponInArray);

    if (couponInArray) {
        discount=couponInArray.discount;
    }else{
        parrafoResultado.innerText='EL cupon no es valido'
        return;
    }
        const resultado=(price*(100-discount))/100;
    parrafoResultado.innerText='El precio con descuento es $'+resultado;
}
// function imprimirResultado(){
//     if(!precio || !descuento){
//         parrafoResultado.innerText='PATAS'; 
//         return;
//        }

//        if(descuento>100){
//         parrafoResultado.innerText='NO pai';
//         return;
//        }
//     const resultado=(precio*(100-descuento))/100;
//     parrafoResultado.innerText='El precio con descuento es $'+resultado;
// }