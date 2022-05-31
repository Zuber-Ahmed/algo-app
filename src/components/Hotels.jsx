import React,{useState,useEffect}from "react";
import axios from "axios";

export const Hotels=()=>{
    const[data,setdata]=useState([]);
    const[copydata,setcopydata]=useState([]);
    const[text,settext]=useState('');
    const getdata =async()=>{
        const result=await axios.get('https://api.instantwebtools.net/v1/airlines')
        console.log(result.data);
        setdata(result.data);
        setcopydata(result.data);

    }
    useEffect(()=>{
        getdata()
    },[])
    useEffect(()=>{
        const search=copydata.filter((item)=>item.name.includes(text))
        setdata(search)
    },[text])


return(
    <div>
        <h1>Airline Data</h1>
        <input type="text" onChange={(e)=>settext(e.target.value)}/>
        {console.log("final",data)}
        {data.map((item)=>{
            return(
                <table style={{margin:"10px"}}>
                    <tr>
                        <th>AirLine Name</th>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{item.country}</td>
                    </tr>
                    <tr>
                        <td><img src={item.logo} alt="" style={{height:"50px",width:"50px"}} /></td>
                    </tr>
                </table>
            )
            
        })}
     
    </div>

)
}
