import Circulo from './circulo.js'
import Triangulo from './triangulo.js'
import Octagono from './octagono.js'
import Cuadrado from './cuadrado.js'
import Decagono from './decagono.js'
import Rectangulo from './rectangulo.js'
import Poligono from './poligono.js'

import apiColores from "./prueba";

console.log(apiColores());

document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  let Poligono = e.target.value;
  let circulo = new Circulo()
  let cuadrado = new Cuadrado()
  let triangulo = new Triangulo()
  let octagono = new Octagono()
  let decagono = new Decagono()
  let rectangulo = new Rectangulo()
  let poligonos = [circulo,cuadrado,triangulo,octagono,decagono,rectangulo]

  poligonos.forEach((poligono) =>{
  if (Poligono == poligono.id) {
    console.log(`Perimetro del ${poligono.nombre} ===> ${poligono.perimetro()}`)
    console.log(`Area del ${poligono.nombre} ===> ${poligono.area()}`)
    console.log(`Identificador del ${poligono.nombre} ===> ${poligono.id}`)
  }
  })
})