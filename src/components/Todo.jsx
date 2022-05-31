import React,{useState,useEffect} from "react";

export const TodoList=()=>{

    const[data,setdata]=useState([]);
    const[newdata,setnewdata]=useState([]);

    console.log(data)

    const handlesubmit=()=>{
        setnewdata([...newdata,data])
    }
    const handleremove=(item)=>{
        const result=newdata.filter((elm)=>elm!==item)
        setnewdata(result)
    }

    return(
        <div>
        <input type="text" onChange={(e)=>setdata(e.target.value)}/>
        <button onClick={handlesubmit}>Add </button>
        {newdata.map((item)=>{
        return(
            <div>
                <h1>{item}</h1>
                <button onClick={()=>handleremove(item)}>Delete</button>

            </div>
                )
            })}
        </div>
    )
}