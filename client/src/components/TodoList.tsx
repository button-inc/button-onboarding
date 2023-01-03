import React from 'react';

import { useFragment } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';
import TodoListItem from './TodoListItem';



type Props = {
    query: any
}


// TODO: proper types
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

    const list = data.allTodos.nodes.map((todo: any) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        />
    ))
    return (
        <div>
            { list }
        </div>
    )
} 
