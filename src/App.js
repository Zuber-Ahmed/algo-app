import './App.css';
import { Home } from "./components/Home";
// import { Test } from './components/test';
import "./components/Common.css";
import { Counter } from './components/useEffect';
import { Hotels } from './components/Hotels';
import { TodoList } from './Practice'
import { Mobiles } from './components/Mobiles';
import { JsonData } from './components/JSON/JsonData';
import { DynamicAPI } from './components/JSON/DynamicAPI';
import { Table1 } from './TableAPI/Table1';
import { NationalData } from './NationalJSON/NationalData';




const App=()=> {
  return (
    <div>
      {/* <Home/> */}
      {/* <Test/> */}
      {/* <Counter/> */}
      {/* <Hotels/> */}
      {/* <TodoList/> */}
      {/* <TodoList/> */}
      {/* <Mobiles/> */}
      {/* <JsonData/> */}
      {/* <DynamicAPI/> */}
      {/* <Table1/> */}
      {/* <NationalData/> */}
      <TodoList/>
    </div>
  );
}

export default App;
