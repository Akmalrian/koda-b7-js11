const sintaks = new Promise ((resolve, reject)=>{
    const isRaining = false
    if (isRaining){
        return reject("Nama = ")
    }
    return resolve("")
})

sintaks.
then(value=> {
    function greet(name){
    console.log(`Nama = ${name}`)

}
    setTimeout(greet, 1500,"John"+value)
    setTimeout(greet, 2000,"Ed"+value)
    setTimeout(greet, 500,"Jane"+value)
    
})
.catch(reason => {
    console.log(`hasil : ${reason}`)
});
