import Poligono from './poligono.js'

 class Octagono extends Poligono{
   constructor(){
     super()
     this.id = 5
     this.nombre = "Octagono"
   }
   area(){
     return ((this.lado * 8) * this.apotema)/2
   }
   perimetro(){
     return this.lado * 8
   }
 }

 export default Octagono