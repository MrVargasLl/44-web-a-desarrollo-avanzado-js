import { z } from 'zod';

const schema = z.object({
    name: z.string().min(1, " El nombre es obligatorio"),
    age: z.number().int().positive("La edad debe ser un # positivo")
})

const user={
    name:"pepe",
    age: 17}

try {
    schema.parse(user)
    console.log("Datos validos");
    
} catch (error) {
    //console.error(error.message);
    console.error(error);
}



/* let num  = 4

console.log("Numero: ", num);
console.log("Result: " , num +3);
console.log("la suma es: " , num + 8); */
//ejecutar con npm start en terminal y salir con crtl + c

