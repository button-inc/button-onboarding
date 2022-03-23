import React from 'react';
import '../App.css';
import {graphql} from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import { useFragment, commitMutation } from 'react-relay/hooks';
import type {TodoListItem_todo$key} from './__generated__/TodoListItem_todo.graphql';
import Checkbox from '@button-inc/component-library/Checkbox'

type Props = {
    //$key includes data and fragment reference
    todo: any
}

const UpdateTodoMutation = graphql`
mutation TodoListItemUpdateMutation (
  $input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    todoEdge {
      node {
        completed
        id
      }
    }
  }
}`;

function TodoListItem(props: Props) {
  const data = useFragment(
    graphql`
      fragment TodoListItem_todo on Todo {
        id
        task
        completed
      }
    `,
    props.todo,
  );

  const handleClick = e => {
    const isComplete = e.target.checked;

    commitMutation(RelayEnvironment, {
      mutation: UpdateTodoMutation,
      variables: {input: {
        id: data.id,
        todoPatch: {
          completed: isComplete
        }
      }},
      onCompleted: response => {
        console.log('completed, response is:',response)
      } /* Mutation completed */,
      onError: error => {
        console.log('error is:',error)
      } /* Mutation errored */,
    });

  }
  

  return (
    <Checkbox className="checkbox" defaultChecked={data.completed} label={data.task} onChange={handleClick}/>
  )


}

export default TodoListItem; 