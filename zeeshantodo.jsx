import React, { useState } from 'react'
import { CgAdd } from 'react-icons/cg'
import { FaRegTrashAlt, FaEdit, FaCheck } from 'react-icons/fa'
import './style.css'

const ZeeTodoapp = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(['Learn React', 'Practice Node js', 'Do Exercise']);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      if (editIndex !== null) {
        const newTodos = [...todos];
        newTodos[editIndex] = inputValue;
        setTodos(newTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  }

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setInputValue(todos[index]);
  }

  const handleCancelEdit = () => {
    setEditIndex(null);
    setInputValue('');
  }

  const handleDeleteAll = () => {
    setTodos([]);
    }


  return (
    <div className='bg'>
      <div className='container'>
        <h2 className='heading'>ToDo App</h2>
        <form className='form' onSubmit={handleAddTodo}>
          <input type="text" placeholder='Add todos..' className="input" value={inputValue} onChange={handleInputChange} />
          <button className="btn"><CgAdd /></button>
          {editIndex !== null &&
            <button className="btn" onClick={handleCancelEdit}><FaCheck /></button>
          }
        </form>
        <ul>
          {
            todos.map((todoItem, index) => {
              return (
                <li key={index} className='li'>
                  <div className='row'>
                    <input className='check' type="checkbox" />
                    {editIndex === index ?
                      <input type="text" className='text-input' value={inputValue} onChange={handleInputChange} /> :
                      <p className='text'>{todoItem}</p>
                    }
                  </div>
                  <div>
                    {editIndex === index ?
                      <button className='btn3' onClick={handleAddTodo}><FaCheck /></button> :
                      <button className='btn3' onClick={() => handleEditTodo(index)}><FaEdit /></button>
                    }
                    <button className='btn2' onClick={() => handleDeleteTodo(index)}><FaRegTrashAlt /></button>
                  </div>
                </li>
              );
            })
          }
        </ul>
        <div className='delete'>
          <button className='btn2' onClick={handleDeleteAll}>Delete All</button>
        </div>
      </div>
    </div>
  );
}

export default ZeeTodoapp;
