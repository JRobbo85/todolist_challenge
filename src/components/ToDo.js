import {useState} from 'react';
import {useEffect} from 'react';



const ToDo = () => {
    const [list1, setList1] = useState([""])
    const [list2, setList2] = useState([""])
    const [input, setInput] = useState("")
    useEffect(() => {
        console.log(input)
        enterPress()
    })

    
    const addItem = () => {
    const temp = [...list1]
    temp.push(input)
    setList1(temp)
    setInput("")
    }

    const enterPress = () => {
        enterInput.addEventListener("keypress", (event) => {
            if (event.which == 13){
                return (addItem())
            } 
            else{}
        })
    }

    

    const completeItem = (event, index) => {
        event.preventDefault()
        const temp2 = [...list1]
        temp2.splice(index, 1)
        temp2.push(index)
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
        <input type="text" id = "inputBox" value={input} onKeyPress={(e) => enterPress(e)} onChange={(event) => setInput(event.target.value)} />
        <button onClick={addItem}>Add To List</button>
        {list1.map((item) => {
        return(
          <div key={item} >
            <p>{item} {item === "" ? null : <button id ="completeButton" onClick={completeItem}>Complete</button>}</p>
            </div>
        )})}</div>
        <div class = "done">
            <h1>Complete Tasks</h1>
            {list2.map((item, index) => {
        return(
          <div key={item} onClick={() => completeItem(index)}>
            <p>{item}</p>
            </div>
        )})}

</div>

            
            
            
        </div>




        
    )}

    export default ToDo;
