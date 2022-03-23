import React, { useState } from "react";
import "../App.css";
import {commitMutation} from 'react-relay';
import { graphql } from "babel-plugin-relay/macro";
import Button from "@button-inc/component-library/Button";
import Input from "@button-inc/component-library/Input";
import RelayEnvironment from "../RelayEnvironment";

const CreateTodoMutation = graphql`
mutation CreateTodoMutation (
  $connections: [ID!]!
  $input: CreateTodoInput!) {
    createTodo(input: $input) {
      todoEdge @appendEdge (connections: $connections) {
        node {
          id
          task
        }
      }
    }
  }
`;

function CreateTodo(props) {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = () => {
    commitMutation(RelayEnvironment, {
      mutation: CreateTodoMutation,
      variables: {
        connections: [props.connectionId],
        input: {
          todo: {
            task: newTask
          }
        }
      },
      onCompleted: response => {
        console.log('completed, response is:',response)
      } /* Mutation completed */,
      onError: error => {
        console.log('error is:',error)
      } /* Mutation errored */,
    });
  }

  return (
    <div className="add-task-wrapper">
      <Input className="add-task-input" value={newTask} onChange={e => setNewTask(e.target.value)}/>
      <Button className="add" onClick={handleSubmit}>Add</Button>
    </div>
  );
}

export default CreateTodo;