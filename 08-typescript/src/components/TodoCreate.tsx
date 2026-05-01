import React from 'react'

const TodoCreate = () => {
  return (
    <div className='todo-create'>
        <input className='todo-input' type='text' placeholder='Todo giriniz...' />
        <button className='todo-create-button'>Oluştur</button>

    </div>
  )
}

export default TodoCreate