function oddEven() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let n=45;
            if(n%2==0){
                console.log("number is even");
                resolve();
            }else{
                console.log("number is odd");
                reject();
            }
        },3000)
    })
}

oddEven().then(function(){
    console.log("task resolved");
} ).catch(function(){
    console.log("task did not resolved");
})