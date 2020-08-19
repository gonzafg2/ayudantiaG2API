// Axios => Se prefiere por sobre los demás. (Plugin) (1 paso) (Llamo a .data)
// Fetch => Se prefiere menos. Se ocupa mucho igual. (Nativo) (2 pasos) (Debo convertir a json => .json())

// https://reqres.in/api/colors

// Async
// Await
// Promesas

// Se debe importar la librería de axios para luego ocuparla.


// El código de Js se ejecuta de forma secuencial (De arriba hacia abajo).

// Con la palabra reservada "async" sacamos del flujo a la función. Se ejecuta a destiempo. Se ejecuta de forma ASÍNCRONA.


const axios = require("axios");
// import firebase from '@firebase'

// Llamar a la api con axios y almacenar la llamada en una constante.
// await const apiData = axios.get("https://reqres.in/api/colors"); // NO LO HAGAN
// let hola = []
// const apiData = await hola // NO LO HAGAN
// localStorage.setItem("holaG2", "apiData")

// const apiColores = async () => {
//   const apiData = await axios.get("https://reqres.in/api/colors");
//   return console.log(apiData.data.data)
// }

// axios.get("https://reqres.in/api/colors").then(function (res) {
//   console.log(res);
// })
// axios.get("https://reqres.in/api/colors").then((res) => {
//   return console.log(res);
// })

// const apiColores = async () => {
//   let datos;
    
//   await axios.get("https://reqres.in/api/colors").then(res => {
//     console.log(res)
//     datos = res
//   }).catch(error => console.log(error))

//   return datos;
// }

// Try - Catch es una estructura de JS que te permite manejar de mejor forma funciones (promesas) y errores.

const apiColores = async () => {
  try {
    const data = await axios.get("https://rejydfjyugvkugbukjkqres.in/ajhgkuhbpi/colorsighibilybh");
    console.log(data);
  } catch (error) {
    console.log(`El error de apiColores es: ${error}`);
  }
}

// try {
//   const apiColores = () => {

//   }
// } catch (error) {
  
// }

  
export default apiColores

// async function() {

// }