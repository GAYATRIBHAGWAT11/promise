class shape{
    draw(){
        return `im generic`
    }
}
    class square extends shape{
       draw(){
        return `im square`;
       }
    }

    class circle extends shape{
        draw(){
         return `im circle`;
        }
     }

    //  let s=new shape()
    //  console.log(s.draw())
    //  let s=new square()
    //  console.log(s.draw())
     let s=new circle()
     console.log(s.draw());