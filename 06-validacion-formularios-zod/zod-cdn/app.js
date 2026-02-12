import zod from  'https://cdn.jsdelivr.net/npm/zod@4.3.6/+esm'

const nameSchema = zod.string()
const booleanSchema = zod.boolean()
const undefinedSchema = zod.undefined()
const nulldSchema = zod.null()
const arraySchema = zod.array(zod.string())

/* const msn1 = arraySchema.safeParse([1,2,3])

const msn2 = arraySchema.safeParse(["1","2","3"])

console.log(msn1);
console.log(msn2); */

//const name = 3000 para probar en consola del navegador
const name = "pepe"

nameSchema.parse(name)
booleanSchema.parse(true)

/* regex.test(password) */


/* const userSchema = zod.object({
    email: zod.string().email(),
    fullname: zod.string().min(1, "Name requerido"),
    phone: zod.number()
}) */

/* const mensaje = userSchema.parse({
    email:"arturo@cova.com",
    fullname:"arturo cova",
    phone: 12345556466
})

console.log(mensaje) */

/* 
try {
    userSchema.parse({
    email:"arturo@cova.com",
    fullname:"arturo cova",
    phone: 12345556466
});
console.log("Dv");

} catch (error) {
    console.error("El error es:", error);
    
} */

/* const numberSchema = zod.number()

const msj = numberSchema.safeParse("30")


console.log(msj);
console.log(msj.error); */


//ejecutar en navegaor cporque usa una import externa


/* const userSchema = zod.object({
    email: zod.string().email(),
    fullname: zod.string().min(1, "Name requerido"),
    phone: zod.number()
})

const usersSchema = zod.array(userSchema)

usersSchema.parse([
    {
    email:"arturo@cova.com",
    fullname:"arturo cova",
    phone: 12345556466
},
{
    email:"pepe@cova.com",
    fullname:"pepe cova",
    phone: "12345556466"
},
]) */

//Crear el schema

document.getElementById("userForm").addEventListener("submit", (e) => {
    e.preventDefault()

    //Validar la informacion con schema creado
})

