
import RelayEnvironment from '../RelayEnvironment';
import { useFragment } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import { TodoListItem_todo$key } from './__generated__/TodoListItem_todo.graphql';
import { Button } from '@mui/material';

import { commitChangeTodoMutation } from '../mutations/ChangeTodoMutation';
import { commitDeleteTodoMutation } from '../mutations/DeleteTodoMutation';

type Props = {
    todo: TodoListItem_todo$key
}

export default function TodoListItem(props: Props){
    const data = useFragment(
        graphql`
            fragment TodoListItem_todo on Todo {
                id
                rowId
                task
                completed
            }
        `,
        props.todo,
    );

    const [checked, setChecked] = useState(data.completed)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        commitChangeTodoMutation(
            RelayEnvironment, 
            data.id, 
            !data.completed, 
            () => {
                console.log('change todo mutation successful');
                setChecked(!data.completed);
            }
        )
    }

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('delete');
        commitDeleteTodoMutation(
            RelayEnvironment,
            data.rowId,
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
                            checked={checked}
                            onChange={handleChange} 
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
