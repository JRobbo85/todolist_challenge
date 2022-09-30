import {useState} from 'react';




const ToDo = () => {
    const [list1, setList1] = useState([])
    const [list2, setList2] = useState([])
    const [input, setInput] = useState("")
    const[edit, setEdit]=useState(false);
    const [selected, setSelected]=useState("")
    const [newInput, setNewInput] = useState("")


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
    
    

    const completeItem = (index) => {
        const temp = [...list1];
        const removedItem = temp.splice(index, 1);
        setList1(temp);

        const temp2 = [...list2];
        temp2.push(...removedItem);
        setList2(temp2)
        
    }

    const returnItem = (index) => {
        const temp = [...list2];
        const returnedItem = temp.splice(index, 1);
        setList2(temp);

        const temp2 = [...list1];
        temp2.push(...returnedItem);
        setList1(temp2)
    }

    const deleteItem = (index) => {
        const temp = [...list2]
        temp.splice(index, 1)
        setList2(temp)

    }

    const editItem = (index) => {
        if (!edit) {
        setEdit(true);
        setSelected(list1[index])
    } else {
        setEdit(false);
        if (newInput !== ""){
            const temp = [...list1]
            temp[index] = newInput;
            setList1(temp);
        }
    }
        
        setNewInput("");
        
    }

    
    
    return( 
       <div class = "container">
        <div class = "toDo">
        
        <h1>Items To Do</h1>
    <form id = "form1" onSubmit={addItem}>
     <input type="text" id="inputBox" value={input} onChange={(event) => setInput(event.target.value)} />
     <button>Add To List</button>
    </form>
        {list1.map((item, index) => {
        return(
          <div key={item} id = "list1">
        {edit && selected === item ? (
            <input type="text" id="inputBox2" defaultValue={item} onChange={(e) => setNewInput(e.target.value)} />   
        ) : (    
        <div><p id = "itemStyle">
        <p>{item}</p>
      </p></div> )}
                <div>      
                <button id="edit" onClick={() => editItem(index)}>{edit && selected === item ? "Save" : "Edit"}</button>
                <button id ="completeButton" onClick={() => completeItem(index)}>Complete</button></div>
                </div>
        )})}</div>
        <div className = "done">
            <h1>Complete Tasks</h1>
            <div class="clearButton"><button id = "clearList" onClick={clearList}>Clear Complete List</button></div>
            {list2.map((item, index) => {
        return(
          <div key={item} id = "list2">
            <div><p id= "itemStyle2">{item}</p></div><div><button id="returnItem" onClick={() => returnItem(index)}>Return Item</button><button id="delete" onClick={() => deleteItem(index)}>Delete</button>
            </div></div>
        )})}
        
        </div>

        </div>   )} 
            


    export default ToDo;
