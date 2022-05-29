import React, { useState } from "react";
import {Tabs,Tab,Grid,TextField, Button} from '@mui/material'

export const Test=()=>{
    const[Val,setVal]=useState("Val")

    const[pname,setPName]=useState('');
    const[pdata,setPdata]=useState([]);

    const handelOnBoard=()=>{
        setPdata([...pdata, pname])
        // console.log(setPName)
    }
    const handelOffBoard=()=>{
        const filtered=pdata.filter((item)=> item!==pname);
        setPdata([...filtered])
    }

    return(
        <div className="test">
            <Tabs value={Val} onChange={(e,val)=>setVal(val)}>
                <Tab value={"Val"} label="Practice">
                </Tab>
            </Tabs>
            <Grid container spacing={2} sx={{margin:1}}>
                <Grid item xs={3}>
                    <TextField label="Enter Passenger Name" variant="standard" onChange={e=>setPName(e.target.value)}/>
                </Grid>
                <Grid item>
                    <Button variant="contained" sx={{marginLeft:1}} onClick={handelOnBoard}>ON Boarding</Button>
                    <Button variant="contained" sx={{marginLeft:2}} onClick={handelOffBoard}>ON Boarding</Button>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
            {pdata.map((item)=>
            <Grid item xs={3} className="result" sx={{margin:2}}>
                  {item}  
            </Grid>
            )}
            </Grid>
        </div>
    )
}