const PlatziMath={};

PlatziMath.esPar=function esPar(lista){
    if(lista.length%2==0){
  return true;
  }else{
  return false}
  }

  PlatziMath.calcularModa=function calcularModa(lista){
      const listaCount={};
      for(let i=0;i<lista.length;i++){
        const elemento=lista[i];
        if(listaCount[elemento]){
          listaCount[elemento]+=1;
        }else{
        listaCount[elemento]=1;
        }
      }
      const listaArray=Object.entries(listaCount);
      const listaOrdenada=PlatziMath.ordenarListaBidi(listaArray,1)
      const ultimoElemento=listaOrdenada[listaOrdenada.length-1]
      console.log('La moda es '+ultimoElemento[0]+' que se repitio un total de '+ultimoElemento[1]+' veces');
      const moda=ultimoElemento[0];
      return moda;
    }
PlatziMath.calcularMediana=function calcularMediana(unordedArr){
    const arr=PlatziMath.ordenarLista(unordedArr);
    const arrEsPar=PlatziMath.esPar(arr);

    if(arrEsPar){
        let pos1=arr[Math.floor(arr.length/2)-1];
        let pos2=arr[Math.floor(arr.length/2)];
        return (pos1+pos2)/2;

        
  }else{
    const indexMitadImpar=Math.floor(arr.length/2);
    return arr[indexMitadImpar];
  }
}

PlatziMath.calcularPromedio=function calcularPromedio(arr){
    function sumarElementos(valorAcumulado,nuevoValor){
        return valorAcumulado+nuevoValor;
    }
    const sumaLista=arr.reduce(sumarElementos)
    const promedio=sumaLista/arr.length;
    console.log(promedio);
    return promedio;
}

PlatziMath.ordenarLista=function ordenarLista(listaDesordenada){
  const lista=listaDesordenada.sort(ordenarLista);
  function ordenarLista(valorAcumulado,nuevoValorAcumulado){
    return valorAcumulado-nuevoValorAcumulado;
  }

  return lista;
}

PlatziMath.ordenarListaBidi=function ordenarListaBidi(listaDesordenada,i){
  const lista=listaDesordenada.sort(ordenarLista);
  function ordenarLista(valorAcumulado,nuevoValorAcumulado){
    return valorAcumulado[i]-nuevoValorAcumulado[i];
  }

  return lista;
}