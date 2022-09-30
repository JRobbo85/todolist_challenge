import './App.css';

import ToDo from "./components/ToDo"
import TopBar from "./components/TopBar"




const App = () => {
  return(
    <div id = "main">
    <div id = "upperPage"><TopBar /></div>  

    <div id = "midPage"><ToDo /> </div>
    </div>
  )
}


export default App;
