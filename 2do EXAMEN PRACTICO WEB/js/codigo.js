/*let lista=[];
let listanum=[];
let listalet=[];
function agregar (){
   lista.push(document.getElementById("entrada1").value),
   document.getElementById("res1").innerHTML=lista,
   console.log(lista);
}
function agregar2 (){
    listanum.push(document.getElementById("entrada2").value),
    document.getElementById("res3").innerHTML=listanum,
    console.log(listanum);
}
function agregar3 (){
    listalet.push(document.getElementById("entrada3").value),
    document.getElementById("res4").innerHTML=listalet,
    console.log(listalet);
}
function mostrar (){
    document.getElementById("res2").innerHTML=lista;
}
function eliminar (){
    lista.pop();
    document.getElementById("res2").innerHTML=lista;
}
function ordenar (){
    listanum.sort(function(a, b){return a-b});
    document.getElementById("res3").innerHTML=listanum,
    console.log(listanum);
}
function ordenar2 (){
    listalet.sort();
    document.getElementById("res4").innerHTML=listalet;
    console.log(listalet);
}
function agregar4 (){
    listalet.push(document.getElementById("entrada4").value),
    document.getElementById("res5").innerHTML=listalet,
    console.log(listalet);
}
function ordenar2 (){
    listalet.sort();
    document.getElementById("res4").innerHTML=listalet;
    console.log(listalet);
}
function capturar (){
    function persona (nombre,edad){
        this.nombre=nombre;
        this.nombre=edad;
    }
    var nombrecapturar = document.getElementById("nombre").valuar;
    var edadcapturar = document.getElementById("edad").valuar;
    var nuevosujeto = new persona(nombrecapturar,edadcapturar);
    console.log(nuevosujeto);
    agregar();


}
var basedatos=[];
function agregar (){
    basedaros.push(nuevosujeto);
    console.log(basedatos);
    document.getElementById("res5").innerHTML+= ' <tbody> <td>'+nuevosujeto.nombre+ '<td></td>'+nuevosujeto.edad+ '</td></tbody>';
}*/



let l1=[];
let listNu=[];
let lisLe=[];
let dat10=[];

/*ejercicio 1*/
function a1(){
    l1.push(document.getElementById("entr11").value);
    document.getElementById("ress11").innerHTML=l1;
    console.log(l1);
}
/*ejercicio 2*/
function most(){
    document.getElementById("ress22").innerHTML=l1;
}
function elim(){
    l1.pop();
    document.getElementById("ress22").innerHTML=l1;
}
/*ejercicio 3*/
function a2(){
    listNu.push(document.getElementById("entr22").value);
    document.getElementById("ress33").innerHTML=listNu;
    console.log(listNu);
}
function ord(){
    listNu.sort(function(a,b){return a - b});
    document.getElementById("ress33").innerHTML=listNu;
    console.log(listNu);
}

/*ejercicio 4*/
function a3(){
    lisLe.push(document.getElementById("entr33").value);
    document.getElementById("ress44").innerHTML=lisLe;
    console.log(lisLe);
}
function ord2(){
    lisLe.sort();
    document.getElementById("ress44").innerHTML=lisLe;
    console.log(lisLe);
}

/* ejercicio 5 */
function ag(){
    dat10.push(document.getElementById("en5").value);
    document.getElementById("resul5").innerHTML=dat10;
    console.log(dat10);   
}

/* ejercicio 6 */
function mostrar2(){
    document.getElementById("resul6").innerHTML=dat10;
}
function edad(){
    dat10.sort(function(a,b){return a - b});
    document.getElementById("resul6").innerHTML=dat10;
    console.log(dat10);
}

/*ejercicio 7 */
function mostrar3(){
    document.getElementById("resul7").innerHTML=dat10;
}
function orde1(){
    dat10.sort();
    document.getElementById("resul7").innerHTML=dat10;
    console.log(dat10);
}