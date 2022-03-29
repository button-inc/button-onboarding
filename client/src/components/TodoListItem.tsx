import Checkbox from '@button-inc/button-theme/Checkbox';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

interface Props {
  task: any;
}

const styles = {
  display: 'flex',
  alignItems: 'center',
  listStyleType: 'none',
};

const TodoListItem = ({ task }: Props) => {
  const data = useFragment(
    graphql`
      fragment TodoListItem_task on Task {
        completed
        task
        dateCreated
      }
    `,
    task
  );

  return (
    <li style={styles}>
      <Checkbox checked={data.completed} />
      <h3>{data.task}</h3>
    </li>
  );
};
export default TodoListItem;
