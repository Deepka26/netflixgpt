
// import './App.css';

import Body from "./Components/Body";
import AppStore from "./Utils/AppStore";
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={AppStore}>
      <div className="App">
     {/* <h1 className="text-red-300">Hello world!!</h1> */}
     <Body/>
    </div>
    </Provider>
    
  );
}

export default App;
