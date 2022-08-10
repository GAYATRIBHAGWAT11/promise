function adding(x,y){
    return new Promise(function(resolve,reject){
        if(x+y==10){
            resolve()
        }else{
            reject()
        }
    })
}
adding(6,5).then(function(){
    console.log("adding value is 10");
}).catch(function(){
    console.log("adding value not matched");
})