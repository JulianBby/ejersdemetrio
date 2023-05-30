/*ejercicio 1

var arreglosimple = []
var arreglosimple2= []




for (j=0; j<20; j++){

    arreglosimple.push(parseInt(Math.random()* (30-10)+10));
    arreglosimple2.push(parseInt(Math.random()* (30-10)+10));
}


console.log(arreglosimple)
console.log(arreglosimple2)*/

/*ejercicio 2 y 3
var arreglosimple = [];
var arreglosimple2 = [];
var d= false;

for (let j=0; j <=20; j++){
    arreglosimple.push(parseInt(Math.random()* (30-10)+10));
    arreglosimple2.push(parseInt(Math.random()* (30-10)+10));
}


var n =parseInt(prompt("Ingrese un numero para buscar dentro del arreglo"))

console.log("buscar arreglo 1")

arreglosimple.forEach(xx)
if(d == false)
    console.log("El numero no se encuentra en el arreglo 1")
d=false
console.log("buscar arreglo 2")
arreglosimple2.forEach(xx)
if(d == false)
    console.log("El numero no se encuentra en el arreglo 2")
function xx(dato, index, arreglo) {
    if (dato == n){
        console.log("El numero se encuentra en la pos",index)
        d = true;
     } else d=d
}
 console.log("Numeros en el arreglo 1", arreglosimple, "Numeros en el arreglo 2", arreglosimple2)
*/

/*ejercicio 4
var arreglosimple = [];
var arreglosimple2 = [];

for (let j=0; j <=20; j++){
    arreglosimple.push(parseInt(Math.random()* (10)));
    arreglosimple2.push(parseInt(Math.random()* (10)));
}
        
var search=parseInt(prompt("Ingrese un numero para buscar dentro del arreglo"))
console.log(arreglosimple);
console.log(arreglosimple2);
console.log("usted busco el numero", search)

function busca(dato, index, pos){
    if (dato == search){
        d = true
    }else {
        d = d 
    }
}



console.log("arreglosimple");
d= false;
arreglosimple.forEach(busca);
let r=arreglosimple.indexOf(search)
if (d == false){
    console.log("El numero no se encontro")
}else if(d==true)
    console.log("El numero esta en la posicion" +r);

console.log("arreglosimple2");
d=false;
arreglosimple2.forEach(busca);
let f=arreglosimple2.lastIndexOf(search)
if (d == false){
    console.log("El numero no se encontro")
}else if(d==true){
    console.log("El numero esta en la posicion:" +f);
}*/


/*NO SIRVE
var arreglosimple = [];
var arreglosimple2 = [];


for (let j=0; j <=20; j++){
    arreglosimple.push(parseInt(Math.random()* (10)));
    arreglosimple2.push(parseInt(Math.random()* (10)));
}
let f=parseInt(prompt("Ingrese un numero para buscar dentro del arreglo"))
console.log(arreglosimple);
console.log(arreglosimple2);
console.log("usted busco el numero", f)

let i=0 
while (arreglosimple  !=f){
    if(console.log("el valor ingresa esta en el subindice:",f))
    i++
}*/

/*
var arreglo = []

for (j=0; j<50; j++){

    arreglo.push(parseInt()* (50));
}

console.log(arreglo)*/

/*let array = [];
 
for(let i=1;i<=50;i++){
    array.push(i);
}
 
console.log(array);*/

function navegar(julian) {
    document.getElementById(julian)
    location.hash = "#" + julian;
    navegar("julian");
  }


function cuadradonumero(){
    var bodym = document.getElementById("tabla1");

        var tabla   = document.createElement("table");
        var tblBody = document.createElement("tbody");
      
        for (var i = 1; i <= 50; i++) {
          var hilera = document.createElement("tr");
      
          for (var j = 0; j < 1; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(`Numero ${i}` );
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(`Cuadrado: ${i * i}` );
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
          }
          tblBody.appendChild(hilera);
        }   
      
        tabla.appendChild(tblBody);
        bodym.appendChild(tabla);
        tabla.setAttribute("class", "table table-warning table-warning");
        document.getElementById("tabla1").style.display ="block";
}



function ej2() {
    var cua = document.getElementById("impar");
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var fila = document.createElement("tr");
    var celdath = document.createElement("th");
    txth = document.createTextNode("Número Impar");
    celdath.appendChild(txth);
    fila.appendChild(celdath)
    celdath.appendChild(txth);
    fila.appendChild(celdath);
    tblBody.appendChild(fila);
    
    
    for (let o = 1; o <=100 ; o+=2) {
    for (let i = 0; i <1; i++) {
        var fila = document.createElement("tr");
        var celdatd = document.createElement("td");
        var textoCelda=document.createTextNode(o);
        celdatd.appendChild(textoCelda);
        fila.appendChild(celdatd);
        tblBody.appendChild(fila);
    }
    }
    var cuan = document.getElementById("impar");
    var tabla2 = document.createElement("table");
    var tblBody2 = document.createElement("tbody");
    var fila2 = document.createElement("tr");
    var celdath2 = document.createElement("th");
    txth = document.createTextNode("Número par");
    celdath2.appendChild(txth);
    fila2.appendChild(celdath2)
    celdath2.appendChild(txth);
    fila2.appendChild(celdath2);
    tblBody.appendChild(fila2);

    for (let p = 102; p <=200 ; p+=2) {
        var fila2 = document.createElement("tr");
        var celdatd2 = document.createElement("td");
        var textoCelda2=document.createTextNode(p);
        celdatd2.appendChild(textoCelda2);
        fila2.appendChild(celdatd2);
        tblBody.appendChild(fila2)   ;
    }
    
    tabla2.appendChild(tblBody2);
    cuan.appendChild(tabla2);
    tabla.setAttribute("class", "table table-warning table-warning");

    tabla.appendChild(tblBody);
    cua.appendChild(tabla);
    tabla.setAttribute("class", "table table-warning table-warning");
    document.getElementById("impar").style.display ="block";
    
}


function paresdescendentes() {
    var n = document.getElementById("pares").value;
    var arreglos=[];
    var r =document.getElementById("pares1");
   
if (n%2 !==0) {
    alert("El numero que ingreso es impar, este ejercicio solo acepta numeros pares")
}
    if (n<2  ) {
        alert("El numero que ingreso es menor a 2 ingrese otro numero mayor a 2")
    }else{
        for (let k=n; k>=2; k-=2){
        if ((k %2===0) && (k<=n));
        
        arreglos.push(k)
        r.value=`${arreglos}`;      
    }       
    }
   
    
    }


function promedio(){
    n=parseInt(prompt("Ingrese el numero de valores al que quiere sacarle el promedio"))
    a=0; b=0;
    while (a<n){
        i=parseFloat(prompt("Inserta la calificacion "))
        b=b+i;
        a++;
    }
    p=b/n;
    alert("El promedio es:"+p)
}

function numerobuscado() {
    var arreglo = [];
    var search = parseInt(document.getElementById("arreglo").value);

    for (let j = 0; j <= 20; j++) {
        arreglo.push(parseInt(Math.random() * 10));
    }

    var resultado1 = document.getElementById("arreglo1");
    resultado1.value = arreglo.join(", ");

    var resultado2 = document.getElementById("arreglo2");
    resultado2.value = search;

    var d = false;
    var r = arreglo.indexOf(search);

    if (r !== -1) {
        d = true;
        var resultado3 = document.getElementById("arreglo3");
        resultado3.value = r;
    } else {
        alert("El número no se encontró dentro del arreglo.");
    }
}

function arreglo(){
    
    var limite = document.getElementById("numero").value;
    var arreglos1 = [];
    var resultado =document.getElementById("numero1");


    for (let j = 1; j <= limite; j++) {
        arreglos1.push(j); 
    }
    resultado.value = arreglos1.join(", ");

    
   
}

function arreglorepetido() {
    const array = [1, 4, 3, 2, 1, 4, 8, 6, 7, 8, 5, 4, 2, 2, 3, 6, 7, 5].sort();
    var repetidoOutput = document.getElementById("repetido1");
  
    // Mostrar el arreglo en el elemento con ID "repetido"
    document.getElementById("repetido").value = array.join(", ");
  
    // Encontrar elementos repetidos
    let repetidos = {};
    for (let i = 0; i < array.length; i++) {
      if (repetidos[array[i]] === undefined) {
        repetidos[array[i]] = 1;
      } else {
        repetidos[array[i]]++;
      }
    }
  
    // Mostrar los resultados de elementos repetidos en el elemento con ID "repetido1"
    var resultado = "";
    for (let num in repetidos) {
        resultado += "El número " + num + " se repite " + repetidos[num] + " veces";

    }
    repetidoOutput.value =`${resultado}`; 
    
  }
    function operacion(){
        var decimal = document.getElementById("decimal").value;
        var binario ="";

        while (decimal > 0){
            binario = (decimal % 2 ) + binario;
            decimal = Math.floor(decimal / 2);

        }
        var resultado = document.getElementById("decimal1");
        resultado.value =`${binario}`; 

    }

    function convertirbinario(binario){
        if (binario.constructor!=String) {
            return null;
            

        }

        binario=binario.replace(/[^01]/gi, '');
        return Number.parseInt(binario, 2);
        
    }
    function enviarbinario(){
        var a = document.getElementById("binario").value;
        var r = document.getElementById("binario1");
        r.value = convertirbinario(a);
    }

    function multiplicar() {
        var a = new Array(3);
        var b = new Array(3);
        a[0] = parseFloat(document.getElementById("num1").value);
        a[1] = parseFloat(document.getElementById("num2").value);
        a[2] = parseFloat(document.getElementById("num3").value);
        b[0] = parseFloat(document.getElementById("num4").value);
        b[1] = parseFloat(document.getElementById("num5").value);
        b[2] = parseFloat(document.getElementById("num6").value);
      
        var x = a[0] * a[1] * a[2];
        var y = b[0] * b[1] * b[2];
        var z = x * y;
        var c = z * z;
      
        document.getElementById("mul").value = x;
        document.getElementById("mul1").value = y;
        document.getElementById("mul2").value = z;
        document.getElementById("mul3").value = c;
      }
    
    function poblacion(){
        var a = 2022;
        var b = 25000000000;
        var c = 18900000000;
        var rt = 0.02;
        var yt = 0.03;

       
        while (c<b) {
            b+=b+rt;
            c+=c+yt;
            a++
    }
    document.getElementById("pob").value = a;
    }

    function transformar(){
    var a=0;
    var b=0;

while (a<7) {
    a++;
    b+=2;
}
document.getElementById("trans").value = a + "" + b;
    }


    function aleatorios(){
        x <=i;
        i = 2;
        document.write("El arreglo de 100 numeros aleatorios es:","<br>");
        
        while (i<100) {
            i++
            var arr = []
            arr=parseInt(Math.random()* (1-100)+100);
            if (numero % i === 0) {
                return false;
              }
            document.write(arr,"<br>");
}
            
        }
        
        function fibonacci(numero){
        
            var i=2;
            var numeros=[0,1];
            do{
                numeros[i] = numeros[i - 2] + numeros[i - 1];
                i++;
            }while(i < numero)
            return numeros;
           
        }
        function fibonacci2(){
            document.getElementById("fib").value = (fibonacci(10));
            
        }
        
        function maximom(a, b){
            while (a != b) {
                if (a > b) {
                    a -= b;
                }else{
                    b -= a;
                }
                    
                }
                return a;
                
            }
            function maximom2(){
                document.getElementById("max").value = (maximom(18, 24));
                
            }

            


        
           
        

       

            
            
          
        
   



