import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [data, setdata] = useState("");
  const [find, setfind] = useState("");
  const [newdata, setnewdata] = useState([]);
  const [copynewdata, setcopynewdata] = useState([]);
  console.log(data);

  const handleAdd = () => {
    setnewdata([...newdata, data]);
    setcopynewdata([...newdata, data]);
    console.log(newdata);
  };
  const handleClear = () => {
    setnewdata([]);
  };
  const handleDelete = (item) => {
    const filtered = newdata.filter((elm) => elm !== item);
    setnewdata(filtered);
  };
  const handlefind = () => {
    let find1 = copynewdata.filter((item) => item.includes(find));
    setdata(find1);
  };
  useEffect(() => {
    let search = copynewdata.filter((item) => item.includes(find));
    setnewdata(search);
  }, [find]);


  
  return (
    <div>
      <input
        type="text"
        placeholder="Add your ToDos"
        onChange={(e) => setdata(e.target.value)}
      />

      <button onClick={handleAdd}>Add </button>
      <button onClick={handleClear}>Clear </button>
      <button onClick={handleDelete}>Delete </button>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setfind(e.target.value)}
      />
      <button onClick={handlefind}>Search </button>
      {newdata.map((item) => {
        return (
          <React.Fragment>
            <h1>{item} </h1>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};
