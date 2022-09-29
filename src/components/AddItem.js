import {useState} from 'react'



const AddItem = (e) => {
  const [list1, setList1] = useState([])
  const [input, setInput] = useState("")
  
  e.preventDefault();
  const temp = [...list1];
  temp.push(input);
  setList1(temp);
  setInput("");
};


export default AddItem;