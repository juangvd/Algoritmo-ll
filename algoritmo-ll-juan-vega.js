////////////////////////////////////////////////////////////////////////////

//                              Algoritmo II                             //

////////////////////////////////////////////////////////////////////////////


//  1.- Muestra de código 1 - function y return |

/*


function a() {
   console.log('hello');
}
console.log('Dojo');


*/
//  2.- Muestra de código 2 - function y return |
/*


function a(){
  console.log('hello');
  return 15;
}
x = a();
console.log('x is', x);



*/
//  3.- Muestra de código 3 - function y return |
/*


function a(n){
  console.log('n is', n);
  return n+15;
}
x = a(3);
console.log('x is', x);


*/
//  4.- Muestra de código 4 - function y return |
/*


function a(n) {
  console.log('n is', n);
  y = n*2;
  return y;
}
x = a(3) + a(5);
console.log('x is', x);


*/
//  5.- Muestra de código 5 - orden de las operaciones |
/*


function op(a,b) {
  c = a+b;
  console.log('c is', c);
  return c;
}
x = op(2,3) + op(3,5);
console.log('x is', x);


*/
//  6.- Muestra de código 6 - orden de las operaciones |

/*


function op(a,b) {
  c = a+b;
  console.log('c is', c);
  return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1), op(2,3));
console.log('x is', x)


*/
//  7.- Muestra de código 7 - scoping
/*


var x = 15;
function a() {
  var x = 10;
}
console.log(x);
a();
console.log(x);


*/
///////////////////////////////////////////////////////////////////////////

//                              Actividad                                //

///////////////////////////////////////////////////////////////////////////


//  1.-
/*


function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);


*/
//  2.-
/*


function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));


*/
//  3.-
/*


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
   i = i + 3;
   console.log(i);
}


*/
//  4.-
/*


var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);


*/
//  5.-
/*


for(var i=0; i<15; i+=2) {
   console.log(i);
}



*/
//  6.-
/*


for(var i=0; i<3; i++) {
   for(var j=0; j<2; j++) {
       console.log(i*j);
   }
}



*/
//  7.-
/*


function looping(x,y) {
   for(var i=0; i<x; i++) {
      for(var j=0; j<x; j++) {
          console.log(i*j);
      }
   }
}
z = looping(3,3);
console.log(z);


*/
//  8.-
/*


function looping(x,y) {
   for(var i=0; i<x; i++) {
      for(var j=0; j<y; j++) {
         console.log(i*j);
      }
   }
   return x*y;
}
z = looping(3,5);
console.log(z);



*/
///////////////////////////////////////////////////////////////////////////

//                               Parte 2                                 //

///////////////////////////////////////////////////////////////////////////



//  1.- Print 1 to x

//  Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado.
/*


function printUpTo(x) {
  // your code here

var y = false;
    for (var i = 0; i <= x; i++) {
        if (i % 10 == 0) {
            console.log(i);
        }
    }
    if (y === false) {
        console.log(y);
    }
}

printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); // debería imprimir false


*/
//  2.- PrintSum

//  Completa el código de más abajo para que la función imprima enteros (integers) de 0 a x y donde cada entero imprima la suma (sum) parcial. Haz que la función entregue la suma final.
/*


function printSum(x) {
  var sum = 0;
  //your code here

for (var i = 0; i <= x; i++) {
        if (i % 1 == 0) {
            sum = i + sum;
            console.log(i);
        }
    }
  return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640


*/
//  3.- PrintSumArray

//  Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado.
/*


function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        //your code here

        sum += x[i];
    }
    return sum;
}
console.log(printSumArray([1, 2, 3])); // debería imprimir 6


*/
//  4.- Bonus: LargestElement

//  Crea una función que entregue el elemento más grande (largest element) en un array. Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.
/*


function elementoMayor(){
    var m= [3,7,1,27,4];
    var buscar=0;
    for (var i=0; i<m.length;i++){
        if (m[i]>buscar){
            buscar =m[i];
        }
    }
    return buscar;
}
console.log(elementoMayor());


*/