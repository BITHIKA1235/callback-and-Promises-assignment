function fetchData(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve('Data fetched successfully!')
        },2000);
    });

}
console.log('Start');
fetchData().then(data=>{
    console.log(data);
});
console.log('End');