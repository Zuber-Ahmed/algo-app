import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
  Alert,
  Tooltip
} from "@mui/material";

export const FruiteBasket = () => {
  const [fName, setFname] = useState("");
  const [fData, setFdata] = useState([]);
  const [isExceed, setIsExceed] = useState(false);
  const [isBlank, setIsBlank] = useState(false);


  const handelAddFruite = () => {

      if(fName===""){
        setIsBlank(true)
      }else 
      if (fData.length < 3) {
            setFdata([...fData, fName]);
            setFname('')
            setIsBlank(false)

     }else {
        
      setIsExceed(true);
    }
  };
  const handelRemove = (fruite) => {
    let filtered = fData.filter((item) => item !== fruite);
    setFdata(filtered);
    setIsExceed(false);
    
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
            <Tooltip title="Welcome" placement="top-start">
          <TextField
            variant="filled"
            label="Fruite Name"
            value={fName}
            onChange={(e) => setFname(e.target.value)
            }
          >
              </TextField>
              </Tooltip>

        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handelAddFruite}>
            Add Cart
          </Button>
          <Grid />
        </Grid>
      </Grid>
      <div className="sub2">
        <h2>My Basket</h2>
        <Grid container spacing={3}>
          {fData.map((item) => (
            <Grid item>
              <Card onDoubleClick={() => handelRemove(item)}>
                <CardContent>{item}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      {isExceed && (
        <Alert severity="info">Sorry! Please Consumed Purchased Fruits</Alert>
      )}
      {isBlank  &&(
          <Alert severity="warning">Please input valid name</Alert>
      )}
    </div>
  );
};
