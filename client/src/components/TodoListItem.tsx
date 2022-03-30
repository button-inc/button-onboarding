import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { TaskCompletedMutation } from '../schema/mutations';
import Checkbox from '@button-inc/button-theme/Checkbox';

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
        rowId
        completed
        task
      }
    `,
    task
  );

  const handleChange = () => {
    TaskCompletedMutation(data.rowId, !data.completed, () =>
      console.log('Task completed mutation successful')
    );
  };

  return (
    <li style={styles}>
      <Checkbox checked={data.completed} onChange={handleChange} />
      <h3>{data.task}</h3>
    </li>
  );
};
export default TodoListItem;
