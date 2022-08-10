function fun(a){
    return new Promise(function(resolve,xreject){
        if(a>10)
        resolve();
        else 
        reject();
    })
}
fun(69).then(function(){
    console.log("number is more than 10");
}).catch(function(){
    console.log("number is less than 10");
})