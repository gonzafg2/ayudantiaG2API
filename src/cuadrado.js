import Poligono from './poligono.js'

class Cuadrado extends Poligono {
  constructor() {
    super()
    this.id = 2
    this.nombre = "Cuadrado"
  }
  area() {
    return this.base * this.altura
  }
  perimetro() {
    return this.base*2 + this.altura*2
  }
}

export default Cuadrado