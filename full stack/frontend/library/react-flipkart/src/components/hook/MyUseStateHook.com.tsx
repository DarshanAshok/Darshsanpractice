import { Button } from "@mui/material"
import { useState } from "react"

export const MyUseStateHook:React.FC<{}>=()=>{
  let [count,setCount]= useState(0)
  let [count1,setCount1]= useState('')
    let handleclick=()=>{
       
       setCount(count++)
       console.log(count)
    }
    return <>
    <input type="text" onChange={(e)=>{setCount1(e.target.value)}}/>
    <Button variant="contained" color="error" onClick={handleclick}>click me</Button>
    {count}
    {count1}
    </>
}
