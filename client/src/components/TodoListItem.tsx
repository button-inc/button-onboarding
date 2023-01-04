
import RelayEnvironment from '../RelayEnvironment';
import { useFragment, commitMutation } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";

type Props = {
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

export default function TodoListItem(props: Props){
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

    const [checked, setChecked] = useState(data.completed)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const isComplete = event.target.checked;
        setChecked(isComplete);

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
        <FormControlLabel 
            control={<Checkbox 
                checked={checked}
                onChange={handleChange} 
                />} 
            label={data.task} 
        />
    )
}
