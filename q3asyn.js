fetch(`https://jsonplaceholder.typicode.com/todos/1`)
.then(res=>res.json())
.then(data=>console.log(data))
async function getDate()
const awaitres=fetch(`https://jsonplaceholder.typicode.com/todos/1`)
{
const data=awaitres.json();
console.log(data);
}
getData();