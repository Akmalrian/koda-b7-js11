const sintaks = new Promise((resolve, reject) => {
    const namaTampil = false

    if (namaTampil) {
        return reject("Nama tidak bisa ditampilkan")
    }

    return resolve({
        nama1: "John",
        nama2: "Ed",
        nama3: "Jane"
    })
})

function greet(name) {
    console.log(`Nama = ${name}`)
}

sintaks
.then(value => {
    setTimeout(greet, 1500, value.nama1)
    setTimeout(greet, 2000, value.nama2)
    setTimeout(greet, 500, value.nama3)
})
.catch(error => {
    console.log(error)
})

function greet(name) {
    console.log(`Nama = ${name}`)
}

async function tampilNama() {
    try {
        const value = await sintaks

        setTimeout(greet, 1500, value.nama1)
        setTimeout(greet, 2000, value.nama2)
        setTimeout(greet, 500, value.nama3)

    } catch (error) {
        console.log(error)
    }
}
tampilNama()
