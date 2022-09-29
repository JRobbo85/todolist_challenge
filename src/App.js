import './App.css';
import AddItem from "./components/AddItem"
import RemoveItem from "./components/RemoveItem"
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
