import {useState} from 'react';
import AddItem from './AddItem'
import EditElement from './EditElement'


const ToDo = () => {
    const [list1, setList1] = useState([])
    const [list2, setList2] = useState([])
    const [input, setInput] = useState("")

    const clearList = () => {
        setList2([])
    }

    const addItem = (e) => {
        e.preventDefault();
        const temp = [...list1];
        temp.push(input);
        setList1(temp);
        setInput("");
      };
    

    const completeItem = (event, index) => {
        const temp = [...list1];
        const removedItem = temp.splice(index, 1);
        setList1(temp);

        const temp2 = [...list2];
        temp2.push(...removedItem);
        setList2(temp2)
        
    }

    const deleteItem = (index) => {
        const temp = [...list2]
        temp.splice(index, 1)
        setList2(temp)

    }
    
    return( 
       <div class = "container">
        <div class = "toDo">
        
        <h1>Items To Do</h1>
    <form onSubmit={addItem}>
     <input type="text" id="inputBox" value={input} onChange={(event) => setInput(event.target.value)} />
     <button>Add To List</button>
    </form>
        {list1.map((item, index) => {
        return(
          <div key={item} id = "list1">
            <div><p id = "itemStyle">{item}</p></div><div><button id="edit">Edit</button><button id ="completeButton" onClick={completeItem}>Complete</button></div>
            </div>
        )})}</div>
        <div className = "done">
            <h1>Complete Tasks</h1>
            <button id = "clearList" onClick={clearList}>Clear Complete List</button>
            {list2.map((item, index) => {
        return(
          <div key={item} id = "list2">
            <div><p id= "itemStyle2">{item}</p></div><div><button id="delete" onClick={deleteItem}>Delete</button>
            </div></div>
        )})}
        
        </div>

        </div>   )} 
            


    export default ToDo;
