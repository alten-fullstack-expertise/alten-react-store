import Store from "typescript-react-test";
import './App.css';
import {GlobalData} from "./GlobalData";

function App() {

  return (
    <div className="App">
      <Store INITIAL_STATE={{name: "Maike", age: 56}}>
          <GlobalData /> 
      </Store>
    </div>
  );
}

export default App;
