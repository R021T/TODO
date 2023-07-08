import React,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue]=useState(task.task)
  const handleSubmit=(e)=>{
    e.preventDefault();
    editTodo(value,task.id)
    setValue("")
  }
  return (
    <form className='TodoFom' onSubmit={handleSubmit}>
      <input type='text' className='TodoInput' placeholder='Ini olla task ivide idu' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' className='TodoButton'>Task maatu</button>
    </form>
  )
}