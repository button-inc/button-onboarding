import React from 'react';
import '../App.css';
import graphql from 'babel-plugin-relay/macro';
import { TodoList_query$key } from './__generated__/TodoList_query.graphql';
import { useFragment } from 'react-relay/hooks';
import TodoListItem from './TodoListItem';
import CreateTodo from './CreateTodo';
// Type ctrl+space on the line that uses the thing you want to import and it will pop up here



type Props = {
    query: any
}

function TodoList(props: Props) {
  const data = useFragment(
    // underscore matches prop name, convention in this project to use _query if its of type Query (type comes from postgraphile)
    graphql`
    fragment TodoList_query on Query {
      allTodos (first: 10) @connection(key: "connection_allTodos") {
        __id
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

  const listItems = data.allTodos.edges.map(todo =>
    <TodoListItem
      key={todo.node.id}
      todo={todo.node}
    />
  )
  return (
    <div className="todo-list-wrapper">
      <div className="todo-list">
        { listItems }
      </div>
      <div>
        <CreateTodo connectionId={data.allTodos.__id}/>
      </div>
    </div>
  )
  
  }
  
  export default TodoList; 