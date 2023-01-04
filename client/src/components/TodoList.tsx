import React, { useState } from 'react';

import { useFragment } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';
import TodoListItem from './TodoListItem';
import TextField from '@mui/material/TextField';
import { FormGroup } from '@mui/material';

type Props = {
    query: any,
    addTodo: any,
}



// TODO: proper types
export default function TodoList(props: Props){

    const [input, setInput] = useState('');

    const data = useFragment(
        graphql`
        fragment TodoList_query on Query {
            allTodos {
                nodes {
                    id
                  ...TodoListItem_todo
                }
            }
        }    
    `, 
    props.query
    );

    function handleKeyDown (e: React.KeyboardEvent<HTMLInputElement>) {
        console.log(e.key)
        if(e.key === 'Enter'){
            // props.addTodo(input)
            props.addTodo(input)
            setInput('')
        }
    }

    function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.currentTarget.value);
    }

    const list = data.allTodos.nodes.map((todo: any) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        />
    ))
    return (
        <>
            <TextField 
                id="todo-input" 
                label="Todo" 
                variant="outlined" 
                onChange={handleInputChange} 
                onKeyDown={handleKeyDown} 
                value={input}/>
            <FormGroup>
                { list }
            </FormGroup>
        </>

    )
} 
