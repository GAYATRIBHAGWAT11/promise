const timeOut=(t)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`completed in ${t}`)
        },t)
    })
}
timeOut(1000).then(result=>console.log(result))

Promise.all([timeOut(1000),timeOut(2000)]).then(result=>console.log(result))
// promise all resolves after 2000ms