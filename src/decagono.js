import Poligono from './poligono.js'

class Decagono extends Poligono {
  constructor() {
    super()
    this.id = 6
    this.nombre = "Decagono"
  }
  area() {
    return this.lado * this.area * 10  /2
  }
  perimetro() {
    return 10 * this.lado
  }
}

export default Decagono






  