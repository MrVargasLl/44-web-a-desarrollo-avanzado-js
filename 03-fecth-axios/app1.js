//Axios

axios.get("https://jsonplaceholder.typicode.com/posts")
.then( response => {
    console.log(response.data);
    
})

.catch( ( error => {
    console.log("error al  mostrar los datos:", error)

}) )

l