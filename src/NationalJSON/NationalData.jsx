import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './national.css'


export const NationalData=()=>{
    const[data,seData]=useState([])
    const[search,setSearch]=useState('')
    const[copydata,setCopyData]=useState([]);
    const[sorter,setsorter]=useState('')

    const getdata=async()=>{
        const national=await axios.get('https://restcountries.com/v3.1/all');
        seData(national.data)
        setCopyData(national.data);
        console.log(national.data)

    }

        useEffect(()=>{
            getdata()
        },[])

        useEffect(()=>{
            let result=copydata.filter((item)=>item.name.common.toLowerCase().includes(search.toLowerCase()));
            seData(result)
        },[search])

        useEffect(()=>{

            if(sorter==="HG"){
                const result=copydata.sort((accu,curr)=>accu.population> curr.population?1:-1)
                seData(result)
            }else if(sorter==="LW"){
                const result=copydata.sort((accu,curr)=>accu.population> curr.population?-1:1)
                seData(result)
            }
        },[sorter])


       


        return(
            <React.Fragment>
                <div>
                <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
                </div>
                <table>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Country Name</th>
                        <th>Country Capital</th>
                        <th>Country Region</th>
                        <th>Country Population 
                            <select onChange={(e)=>setsorter(e.target.value)}>
                            <option value="">Sort</option>
                            <option value="HG">Highest</option>
                            <option value="LW">Lowest</option>
                            </select></th>
                        <th>Country Border</th>
                        <th>Country Code</th>
                        <th>Country Area</th>
                        <th>Country Arms Dress</th>
                        <th>Country Flag</th>
                        <th>Time Zone</th>
                    </tr>
                    
                {data.map((item,i)=>{

                    return(
                        <tr>
                            <td>{i+1}</td>
                            <td>{item.name.common}</td>
                            <td>{item.capital}</td>
                            <td>{item.region}</td>
                            <td>{item.population}</td>
                            <td>{item.idd.root}</td>
                            <td>{item.borders}</td>
                            <td>{item.area}</td>
                            <td><img style={{width:"100px",height:"100px"}} src={item.coatOfArms.png} alt="" /></td>
                            <td><img style={{width:"100px",height:"100px"}} src={item.flags.png} alt="" /></td>
                            <td>{item.timezones}</td>
                        </tr>
                    )
                })}
                </table>

            </React.Fragment>
        )
}