import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value,setValue]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    addTodo(value)
    setValue("")
  }
  return (
    <form className='TodoFom' onSubmit={handleSubmit}>
      <input type='text' className='TodoInput' placeholder='HERE ARE THE TASKS TODAY' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' className='TodoButton'>ADD TASK</button>
    </form>
  )
}
