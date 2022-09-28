import {useState} from 'react'



const DeleteItem = (index) => {
    const [list1, setList1] = useState([""])
    const [input, setInput] = useState("")
    const temp = [...list1]
    temp.splice(index, 1)
    setList1(temp)
    setInput("")}