//Author Zuber Ahmed
import React,{useState,useEffect} from "react";
import axios from "axios";              //dependency library for get the data from API

export const Table1=()=>{
    const[data,setdata]=useState([]);
    const[copydata,setcopydata]=useState([]);
    const[selected,setSelected]=useState('')
    const[search,setSearch]=useState('');


    const getdata=async()=>{
            let tabledata=await axios.get("https://www.ag-grid.com/example-assets/olympic-winners.json")
            //check your data here console.log(tabledata.data)
            setdata(tabledata.data)
            setcopydata(tabledata.data)
            
    }

    useEffect(()=>{
        getdata()

    },[])

   useEffect(()=>{
       if(selected==="AZ"){
       const sorted=data.sort((acc,curr)=>acc.athlete>curr.athlete?1:-1)
       setdata(sorted)
       }
       else if(selected==="ZA"){
        const sorted=data.sort((acc,curr)=>acc.athlete>curr.athlete?-1:1)
        setdata(sorted)

       }

   },[selected])
   //console.log(selected)


   useEffect(()=>{
       let result=copydata.filter((item)=> item.athlete.includes(search));
       setdata(result)
   },[search])

    const handleDelete=(item)=>{
    let deleted=copydata.filter((elm)=>elm!==item);
    setdata(deleted)

}

    return(
        <div>
            <input type="text" onChange={e=>setSearch(e.target.value)} />
            <table>
            <tr>
            <th>Sr.No</th>
            <th>Name 
                <select onChange={(e)=>setSelected(e.target.value)}>
                    <option value="">Sort</option>
                    <option value="AZ">A-Z</option>
                    <option value="ZA">Z-A</option>
                </select>
            </th>
            <th>Age</th>
            <th>Country</th>
            <th>Sport</th>
            <th>Gold</th>
            <th>Silver</th>
            <th>Total</th>
            <th>Year</th>
            </tr>
            {data.map((item,i)=>{
                return(
                            <tr>
                                <td>{i+1}</td>
                                <td>{item.athlete}</td>
                                <td>{item.age}</td>
                                <td>{item.country}</td>
                                <td>{item.sport}</td>
                                <td>{item.gold}</td>
                                <td>{item.silver}</td>
                                <td>{item.total}</td>
                                <td>{item.year}</td>
                                <button onClick={()=>handleDelete(item)}>Delete</button>
                                </tr>    
                )
            })}
            </table>
        </div>
    );
}