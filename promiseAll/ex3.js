const timeOut=(t)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(t===2000){
                reject(`rejected in ${t}`)
            }else{
                resolve(`completed in ${t}`)  
            }
        })
    })
}

const durations=[1000,2000,3000]

const promises=[]

durations.map((duration)=>{
    promises.push(timeOut(duration))
})
Promise.all(promises).then(response=>console.log(response)).catch(error=>console.log(`error in executing ${error}`))
// if one of the promise fails, then all the rest of the promises fails, then all the promise.all gets rejected