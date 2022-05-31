import React,{useState,useEffect} from "react";
import axios from "axios";

export const Mobiles=()=>{
    const[data,sedata]=useState([])

    const getdata=async()=>{
        let mobdata=await axios.get("https://github.com/Ovi/DummyJSON/blob/master/src/data/products.json")
        console.log("mydata",mobdata)
        sedata(JSON.stringify(mobdata.data))
    }

    useEffect(()=>{
        getdata()
    },[])

    return(
        <div>
            <h1>My Shopping</h1>
            {/* {data.map((item)=>{
                return(
                    <div className="mobiles">
                     <h4>{item.brand}</h4>
                     <label>{item.category}</label>
                     <h5>{item.description}</h5> 
                     <img src={item.images}></img> 
                     <img src={item.thumbnail}></img> 
                     <span>{item.price}</span> 
                    </div>
                )
            })} */}

        </div>
    )
}