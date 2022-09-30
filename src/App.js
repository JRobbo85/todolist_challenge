import './App.css';

import ToDo from "./components/ToDo"
import TopBar from "./components/TopBar"
import Footer from "./components/Footer"



const App = () => {
  return(
    <div id = "main">
    <div id = "upperPage"><TopBar /></div>  

    <div id = "midPage"><ToDo /> </div>
    
    <div id = "footer"> <Footer /></div>
    </div>
  )
}


export default App;
