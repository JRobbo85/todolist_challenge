import {useState} from 'react'



const AddItem = () => {
  const [list1, setList1] = useState([""])
  const [list2, setList2] = useState([""])
  const [input, setInput] = useState("")
  const temp = [...list1]
  temp.push(input)
  setList1(temp)
  setInput("")
  }


export default AddItem;