export let MyProps:React.FC<{}>=()=>{
    return <div>
        <h1>im aprop</h1>
       {Check({a:"watch"})} 
       <Check a={"car"}/>
        </div> 
}

let Check:React.FC<{a:any}>=(props)=>{
    return <h2>{props.a}</h2>
}