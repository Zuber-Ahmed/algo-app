import React,{useState,useEffect} from "react";
import axios from "axios";

export const JsonData=()=>{
    const[data,setdata]=useState([]);
    const[search,setsearch]=useState('')
    const[copydata,setcopydata]=useState([])

    const getData=async()=>{
        let data=await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log("Mydata",data.data)
        setdata(data.data)
        setcopydata(data.data)
    }
    useEffect(()=>{
        getData()
    },[])

   useEffect(()=>{
       const result=copydata.filter((elm)=>elm.id.includes(search))
       console.log(result)
       setdata(result)
   },[search])
    

    return(
        <React.Fragment>
                <h1>Hey! Good Morning</h1>
                <input type='text'placeholder="Search Data" onChange={(e)=>setsearch(e.target.value)} />
                {data.map((item)=>{
                    return(
                        <div className="items">
                            <h5>Id:{item.id}</h5>
                            <span>Title:{item.title.substr(0,20)}</span>
                            <p>Descriptions:{item.body}</p>
                        </div>
                    )
                })}
        </React.Fragment>
    )
}