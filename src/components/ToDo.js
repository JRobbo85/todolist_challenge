import {useState} from 'react';




const ToDo = () => {
    const [list1, setList1] = useState([])
    const [list2, setList2] = useState([])
    const [input, setInput] = useState("")

    const clearList = () => {
        setList2([])
    }
    
    const edit = () => {

        const temp = [...list1];
        // const editItem = temp.splice(index, 1)
    }


    const addItem = (e) => {
        e.preventDefault();
        const temp = [...list1];
        temp.push(input);
        setList1(temp);
        setInput("");
      };
    

    const completeItem = (event, index) => {
        const temp = [...list1]
        const removedItem = temp.splice(index, 1)
        setList1(temp)

        const temp2 = [...list2]
        temp2.push(...removedItem)
        setList2(temp2)
    }

    const deleteItem = (index) => {
        const temp = [...list1]
        temp.splice(index, 1)
        setList1(temp)
        setInput("")
    }
    
    let moveItem = ""
    const enterInput = document.getElementById("inputBox")

    return( 
       <div class = "container">
        <div class = "toDo">
        
        <h1>To Do List</h1>
    <form onSubmit={addItem}>
     <input type="text" id="inputBox" value={input} onChange={(event) => setInput(event.target.value)} />
     <button>Add To List</button>
    </form>
        {list1.map((item) => {
        return(
          <div key={item} >
            <p>{item} <button id="edit" onClick={edit}>Edit</button><button id ="completeButton" onClick={completeItem}>Complete</button></p>
            </div>
        )})}</div>
        <div class = "done">
            <h1>Complete Tasks</h1>
            {list2.map((item, index) => {
        return(
          <div key={item} onClick={() => completeItem(index)}>
            <p>{item} </p>
            </div>
        )})}
        <button id = "clearList" onClick={clearList}>Clear Complete</button>
        </div>

            
            
            
        </div>




        
    )}

    export default ToDo;
