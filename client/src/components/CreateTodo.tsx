import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { commitCreateTodoMutation } from '../mutations/CreateTodoMutation';
import RelayEnvironment from '../RelayEnvironment';


export default function CreateTodo(props: any) {
    const [input, setInput] = useState('');

    const addTodo = (task: string) => {
        commitCreateTodoMutation(RelayEnvironment, task);
      }

    function handleKeyDown (e: React.KeyboardEvent<HTMLInputElement>) {
        console.log(e.key)
        if(e.key === 'Enter'){
            if(input){
                addTodo(input);
            }
            setInput('');
        }
    }

    function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.currentTarget.value);
    }

    return (
        <TextField 
            id="todo-input" 
            label="Todo" 
            variant="outlined" 
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
            value={input}
        />
    )
}

            