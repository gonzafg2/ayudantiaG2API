import Poligono from './poligono.js'

class Rectangulo extends Poligono {
  constructor() {
    super()
    this.id = 4
    this.nombre = "Rectangulo"
  }
  area() {
    return this.base * this.altura 
  }
  perimetro() {
    return this.lado * 3
  }
}

export default Rectangulo