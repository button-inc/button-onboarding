
import RelayEnvironment from '../RelayEnvironment';
import { useFragment, useMutation } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from "react";
import { TodoListItem_todo$key } from './__generated__/TodoListItem_todo.graphql';
import { Button } from '@mui/material';

import { commitChangeTodoMutation } from '../mutations/ChangeTodoMutation';
import { commitDeleteTodoMutation } from '../mutations/DeleteTodoMutation';

interface Props {
    todo: TodoListItem_todo$key;
  }


export default function TodoListItem({ todo }: Props){
    const data = useFragment(
        graphql`
            fragment TodoListItem_todo on Todo {
                __id
                rowId
                task
                completed
            }
        `,
        todo,
    );


    const handleCompleteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        commitChangeTodoMutation(
            RelayEnvironment, 
            data.__id, 
            !data.completed, 
            () => {
                console.log('change todo mutation successful');
            }
        )
    }

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        commitDeleteTodoMutation(
            RelayEnvironment,
            data.rowId,
            data.__id,
            () => console.log('delete todo mutation successful')
        )
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                    <FormControlLabel 
                        control={<Checkbox 
                            checked={data.completed}
                            onChange={handleCompleteChange} 
                            />} 
                        label={data.task} 
                    />
                    </td>
                    <td>
                        <Button onClick={handleDelete}>
                            x
                        </Button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
