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
            allTodos (first: 10) @connection(key: "connection_allTodos"){
                edges {
                    node {
                        id
                        ...TodoListItem_todo
                    }
                }
            }
        }    
    `, 
    props.query
    );

    const listItems = data.allTodos!.edges.map((todo: any) => 
        <TodoListItem
            key={todo.node.id}
            todo={todo.node}
        />
    );

    return (
        <>
            <CreateTodo />
            <FormGroup>
                { listItems }
            </FormGroup>
        </>

    )
} 
