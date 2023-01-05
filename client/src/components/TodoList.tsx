import React, { useState } from 'react';
import { useFragment } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';
import TodoListItem from './TodoListItem';
import { FormGroup } from '@mui/material';
import { TodoList_query$key } from './__generated__/TodoList_query.graphql';
import CreateTodo from './CreateTodo';


type Props = {
    query: TodoList_query$key,
    
}


export default function TodoList(props: Props){
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
    
    return (
        <>
            <CreateTodo />
            <FormGroup>
                {data.allTodos && 
                    data.allTodos.nodes.map((todo: any) => (
                        <TodoListItem
                          key={todo.id}
                          todo={todo}
                          />
                      ))  
                }
            </FormGroup>
        </>

    )
} 
