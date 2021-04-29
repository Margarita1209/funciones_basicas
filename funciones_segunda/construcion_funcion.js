//1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.


  function array(){
    var arr=[];
    for (var i=1;i<256;i++){
      arr.push(i);
    }
    return arr;
 }
 z=array();
 
 console.log(z);
 

 //2.-Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 -
 // Puedes usar un operador de módulo para este ejercicio. 
 
 
  function sumaPares(){
    var sum=0;
    for(var i=1;i<1001;i++){
      if(i%2===0){
       // console.log(i);
        sum +=i;
      } 
    }
    return sum;
  }
  z=sumaPares();
  console.log(z);

//3.- Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000
//(ej: 1+3+5+...+4997+4999).

function sum_odd_5000(){
  var sum=0;
  for (var i=1;i<=5000;i++){
    if(i%2==1){
      sum=sum +i;

    }
  }
  return sum
}
z=sum_odd_5000();

console.log(z);


// 4.- Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array 
// (ej:  [1,2,5] retorna 8). 
function sumaArray(){
  var sum=0;
  for(i in arr){
      sum = sum + arr[i];
  }
  document.getElementById("mostrar").innerHTML = text4+"<br><br>"+sum;
}

//5.- Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el 
//número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function elMayor(){
   var mayor= arr[0];
   for(i in arr){
       if(arr[i]>mayor){
           mayor=arr[i];
       }
   }
   document.getElementById("mostrar").innerHTML = text5+"<br><br>"+mayor;
}

//6 Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el 
//promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function promedioArray(){
   var sum=0;
   for(i in arr){
       sum = sum + arr[i];
   }var prom=sum/arr.length;
   document.getElementById("mostrar").innerHTML = text6+"<br><br>"+prom;
}


//7 Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 
//(ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function arregloImpares(){
   var arre = [];
   for(i in arre){
        if(i%2!==0){
            arre.push(i);
        i = i +1;
        }
    }document.getElementById("mostrar").innerHTML = text7+"<br><br>"+arre;
}

//8 Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
//Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function cantidadMayores(){
    var Y=3;
    var sum=0;
    for(i in arr){
        if(arr[i]>Y){
            sum++
        }
    }document.getElementById("mostrar").innerHTML = text8+"<br><br>"+sum;
}

//9.- Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor 
//por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4])."
function cuadrado(){
   
    var arr2=[];
    for(i in arr){
       arr2.push(arr[i]*arr[i]);
    }document.getElementById("mostrar").innerHTML = text9+"<br><br>"+arr2;
}

//10.- Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número 
//negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números 
//negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).";
function reemplazoNegativos(){
   for(i in arr){
      if(arr[i]<0){
       arr[i]=0;
      }
   }
   document.getElementById("mostrar").innerHTML = text10+"<br><br>"+arr;
}

//11.- Max/Min/Avg: Dado un array con múltiples valores, escribe una función 
//que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio
// (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function maxMinProm(){
   var sum=0;
   var min= arr[0];
   var max= arr[0];
   for(i in arr){
       if(arr[i]>max){
           max=arr[i];}
       if(arr[i]<min){
           min=arr[i];}
   sum = sum + arr[i];
   }var prom=sum/arr.length;
   document.getElementById("mostrar").innerHTML = text11+"<br><br>"+"Mínimo:"+min+" Máximo:"+max+" Promedio:"+prom;
}

//12.-Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
//La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function intercambio(){
   var arr2=[];
   var primero=arr[0];
   var ultimo=arr[arr.length-1]
   for(i in arr){
       if(i==0){
           arr2.push(ultimo);
       }
       if(i==arr.length-1){
           arr2.push(primero);
       }
       if(i!=0 && i!=arr.length-1){
           arr2.push(arr[i]);}
       
   }
document.getElementById("mostrar").innerHTML = text12+"<br><br>"+arr2;
}

//13.- De Número a String: Escribe una función que tome un array de números y reemplace
// cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], 
//tu función devolverá [‘Dojo’,‘Dojo’,2].
function reemplazoNegativosDojo(){
   for(i in arr){
      if(arr[i]<0){
       arr[i]="Dojo";
      }
   }document.getElementById("mostrar").innerHTML = text13+"<br><br>"+arr;
}