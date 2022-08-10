function checkpwd(pass){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const defaultPass="admin";
            defaultPass==pass?resolve():reject()

        },5000)
    });
}

let passEntered="gayatri";

checkpwd(passEntered).then(()=>{
console.log("password matched");
}).catch(()=>{
    console.log("access denied");
});