var exPromise=new Promise(function(resolve,reject){
    const x="geeksforgeeks"
    const y="Geeksforgeeks"
    if(x==y){
        resolve();
    }else{
        reject();
    }
});
exPromise.then(function(){
    console.log("sucess! you are a geek");
}).catch(function(){
    console.log("some error has occured");
})