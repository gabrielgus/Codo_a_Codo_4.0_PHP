var regex = new RegExp('^[A-Z\u00E0-\u00FC]+$', 'i'); //expresion regular para validar solo letras y acentos
var names = [];
var mayor = 0;
var nombre = "";

function Uno(){
var your_name = prompt("Por favor \nIngrese su nombre: ").toUpperCase();
var y = false;
while (y == false) {  
  if (regex.test(your_name) && (your_name != null)) {
    let i = 0; 
    while (i < 1) {
      var input = prompt("Por favor " + your_name + " \nIngrese su edad: ");
      var ingresado = parseFloat(input);
        if ((ingresado == input) && (ingresado >= 0 && ingresado <= 110)) { 
          i += 1;
        } else {
          alert('Ingrese una edad valida (0 a 110)');
        }
      y = true;
    }
  } else {
      alert('Ingrese un nombre valido');
      your_name = prompt("Por favor \nIngrese su nombre: ").toUpperCase();
  }
}

esMayor = MayorDeEdad(ingresado);

if (esMayor == true){
  alert('Hola ' + your_name + ' usted es mayor de edad.');
  console.log('Hola ' + your_name + ' usted es mayor de edad.');
} else {
  alert('Hola ' + your_name + ' usted es menor de edad.');
  console.log('Hola ' + your_name + ' usted es mayor de edad.');
}

}

function MayorDeEdad (value) {
  if (value >= 18){
   return true
  }
}

function Dos(){
  var z = 3;
  var x = 0;
  while (x < z) {  
    var your_name = prompt("Por favor \nIngrese el nombre de un usuario: ").toUpperCase();
    if (regex.test(your_name) && (your_name != null)) {
      let i = 0; 
      while (i < 1) {
        var input = prompt("Por favor \nIngrese la edad de " + your_name +  ": ");
        var ingresado = parseFloat(input);
        if ((ingresado == input) && (ingresado >= 0 && ingresado <= 110)) { 
          esMayor = MayorDeEdad(ingresado);
          if (esMayor == true){
            alert('Hola ' + your_name + ' usted es mayor de edad.');
            console.log('Hola ' + your_name + ' usted es mayor de edad.');
          } else {
            alert('Hola ' + your_name + ' usted es menor de edad.');
            console.log('Hola ' + your_name + ' usted es mayor de edad.');
          }
          var lista = document.createElement('p');
          lista.innerHTML = "Nombre: " + your_name + ", Edad: " + ingresado;
          document.getElementById('datos').appendChild(lista);
            mayor = ingresado;
            nombre = your_name; 
            names.push({nombre:nombre, edad:mayor});
            i += 1;
            x++;  
        } else {
            alert('Ingrese una edad valida (0 a 110)');
        }
      }
    } else {
        alert('Ingrese un nombre valido');
    }
  }
  
  names.sort(function (a, b) {
      if (a.edad < b.edad) {
        return 1;
      }
      if (a.edad > b.edad) {
        return -1;
      }
      return 0;
    });
  
  alert("El mayor es " + names[0].nombre + " y su edad es " + names[0].edad + " años.")  

  var lista = document.createElement('h2');
  lista.innerHTML = "El mayor es: ";
  document.getElementById('datos').appendChild(lista);
  var lista = document.createElement('p');
  lista.innerHTML = "Nombre: " + names[0].nombre + ", Edad: " + names[0].edad;
  document.getElementById('datos').appendChild(lista);

}
