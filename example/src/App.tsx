import Store from "typescript-react-test";
import './App.css';
import {GlobalData} from "./GlobalData";

function App() {

  return (
    <div className="App">
      TEST
      <Store INITIAL_STATE={{name: "Maike", age: 56}}>
        <div>
          Testing this
          <GlobalData /> 
        </div>
      </Store>
    </div>
  );
}

export default App;
