import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";

export const Boggie = () => {
  const [passname, setPassname] = useState("");
  const [passData, setPassData] = useState([]);
  
  const handelOnBoard = () => {
    setPassData([...passData, passname]);
  };
  const handelOffBoarding = () => {
    const filtered = passData.filter((item) => item !== passname);
    setPassData([...filtered]);
  };
  return (
    <div className="sub2">
      <Grid container>
        <Grid item xs={4}>
          <TextField
            style={{ width: 300 }}
            label="Passenger Name"
            variant="outlined"
            onChange={(e) => setPassname(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handelOnBoard}>
            ON Board
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handelOffBoarding}>
            OFF Board
          </Button>
        </Grid>
      </Grid>
      <h1>Welcome</h1>
      <Grid container spacing={1}>
        {passData.map((item) => (
          <Grid item>
              {/* {alert("Confirm boarding"+item)} */}
              {item}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
