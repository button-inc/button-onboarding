import React from 'react';
import '../App.css';
import graphql from 'babel-plugin-relay/macro';
import TodoListItem from "./TodoListItem";
import { useFragment } from 'react-relay/hooks';

type Props = {
    query: any
}

function TodoList(props: Props) {

    const data = useFragment(
        graphql`
          fragment TodoList_query on Query {
            allTodos {
                edges {
                    node {
                        id
                        ...TodoListItem_todo
                    }
                }
            }
        }
        `,
        props.query,
    );

    const listItems = data.allTodos.edges.map((todo: { node: { id: any; }; }) => 
        <TodoListItem
            key={todo.node.id}
            todo={todo.node}
        />
    )
    return (<div className="list">{listItems}</div>
   )

}

export default TodoList;

