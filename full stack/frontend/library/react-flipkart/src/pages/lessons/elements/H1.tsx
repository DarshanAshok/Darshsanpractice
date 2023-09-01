// function H1(){
//     return <h1>hello im h1</h1>
// }
export let H1:React.FC<{}>=()=>{
    console.log(Calu())
  return  <h1>hello im h1
     {/* {Calu()} */}
     <Calu/>
     {/* <Calu/>
     <Calu/>
     <Calu/> */}
     {/* <Calu/>
     <Calu/>
     <Calu/><Calu/>
     <Calu/>
     <Calu/> */}


     </h1>
}

function Calu(){
    return <h1>hello im calu</h1>
}