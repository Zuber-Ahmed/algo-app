import React,{useState,useEffect} from "react";
import axios from "axios";


export const DynamicAPI=()=>{
    const[number,setnumber]=useState(0)
    const[data,setdata]=useState([])
    const[copydata,setcopydata]=useState([])
    

        const getData=async(number)=>{
                const result= await axios.get(`https://jsonplaceholder.typicode.com/comments?id=${number}`);
                setdata(result.data)
                setcopydata(result.data)
                console.log(result.data)
        }

        const handlesave=()=>{
           
            setcopydata([...data,copydata])

            
        }
           
    return(
        <div className="center">
            <input type="number" onChange={(e)=>setnumber(e.target.value)} />
            <button onClick={()=>getData(number)} style={{color:"white", backgroundColor:"black"}}>Get Data</button>
            <button onClick={handlesave} style={{color:"white", backgroundColor:"green"}}>Get Data</button>


            {copydata.map((item)=>{
                {console.log(copydata)}
                return (

                    <h1>{item.userId}</h1>
                )
            })}


            {data.map((item)=>{
                return(
                    <div className="data">
                        <h4>UserID: {item.id}</h4> 
                        <span>User Name: {item.name}</span>
                        <span>User Email:{item.email}</span>
                        {/* <p>User Details:{item.body.substr(0,20)}</p> */}
                    </div>
                )
            })}

        </div>
    )
}