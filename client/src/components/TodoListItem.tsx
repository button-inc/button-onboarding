import React from 'react';
import '../App.css';
import {graphql} from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import Checkbox from "@button-inc/component-library/Checkbox";


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

      return (
          <Checkbox className={"checkbox"} label={data.task} defaultChecked={data.completed}/>
      )
}

export default TodoListItem;