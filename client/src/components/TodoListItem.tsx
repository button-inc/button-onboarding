import { useFragment } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';

type Props = {
    todo: any
}

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

    return (
        <li>
            {data.id} : {data.task} : {data.completed.toString()}
        </li>
    )
}
