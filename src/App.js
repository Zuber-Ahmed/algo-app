import './App.css';
import { Home } from "./components/Home";
// import { Test } from './components/test';
import "./components/Common.css";
import { Counter } from './components/useEffect';
import { Hotels } from './components/Hotels';
import { TodoList } from './components/TodoList';
import { Mobiles } from './components/Mobiles';



const App=()=> {
  return (
    <div className="main">
      {/* <Home/> */}
      {/* <Test/> */}
      {/* <Counter/> */}
      {/* <Hotels/> */}
      {/* <TodoList/> */}
      <TodoList/>
      {/* <Mobiles/> */}
    </div>
  );
}

export default App;
