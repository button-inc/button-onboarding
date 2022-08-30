import React from 'react';
import '../App.css';
import {graphql} from 'babel-plugin-relay/macro';
import { useFragment, commitMutation } from 'react-relay/hooks';
import { Checkbox } from "@button-inc/component-library";


function TodoListItem(props: any) {
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

      const handleClick = (e: { target: { checked: any; }; }) => {
        const change = e.target.checked;
      }

      return (
          <Checkbox className={"checkbox"} label={data.task} defaultChecked={data.completed} onClick={handleClick}/>
      )
}

export default TodoListItem;