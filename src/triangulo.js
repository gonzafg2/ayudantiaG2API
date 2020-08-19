import Poligono from './poligono.js'

class Triangulo extends Poligono {
  constructor() {
    super()
    this.id = 3
    this.nombre = "Triangulo"
  }
  area() {
    return this.base * this.altura 
  }
  perimetro() {
    return this.lado * 3
  }
}

export default Triangulo



  