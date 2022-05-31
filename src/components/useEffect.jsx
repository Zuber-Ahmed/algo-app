import React,{useState,useEffect} from "react";
import axios from "axios";

export const Counter=()=>{
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const[data,setdata]=useState([]);
    const[copydata,setcopydata]=useState([]);
    const[text,settext]=useState('')
    // const[cats,setcats]=useState(false)

    //useEffect(()=>{},[])   //Mouting Phase
    //useEffect(()=>{},[text])   //Updating Phase
    //useEffect(()=>{},[])   //unMouting Phase

    const getdata=async()=>{
        const apiData=await axios.get("https://fakestoreapi.com/products")
        // console.log(apiData.data)
        setdata(apiData.data);
        setcopydata(apiData.data);
    }

    useEffect(()=>{
        getdata()
    },[])

    useEffect(()=>{
        const result=copydata.filter((item)=>item.category.includes(text))
        setdata(result)
    },[text])

        // function handelcats(){
        // setcats(true)
        // const results=copydata.filter((item)=>item.category.includes("men's"))
        // setdata(results)
        
    
    
    return( 
    <div className="main">
        <input type="text" onChange={(e)=>settext(e.target.value)} /> <br />
        {/* <input type="radio" value={setcats(cats)} onClick={handelcats}/>Mens */}
        {/* <input type="radio" value={setcats(cats)} onClick={handelcats}/>None */}
        {data.map((item)=>{
            return(
                <div className="items">
                    <h4>{item.category}</h4>
                    <img src={item.image} height={"150px"} width={"100px"}/>
                    <h3>$.{item.price}</h3>
                    <p>{item.description}</p>
                </div>
            )
        })}
    </div>

    )
    }