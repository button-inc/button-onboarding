import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { DeleteTaskMutation, TaskCompletedMutation } from '../schema/mutations';
import Button from '@button-inc/button-theme/Button';
import Checkbox from '@button-inc/button-theme/Checkbox';

interface Props {
  task: any;
}

const liStyles = {
  display: 'flex',
  alignItems: 'center',
  listStyleType: 'none',
  justifyContent: 'space-between',
};

const h3Styles = { width: '100%', padding: '0 1em' };

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

  const handleTaskCompletedChange = () => {
    TaskCompletedMutation(data.rowId, !data.completed, () =>
      console.log('Task completed mutation successful')
    );
  };

  const handleDeleteTaskClick = () => {
    DeleteTaskMutation(data.rowId, () =>
      console.log('Delete task mutation successful')
    );
  };

  return (
    <li style={liStyles}>
      <Checkbox checked={data.completed} onChange={handleTaskCompletedChange} />
      <h3 style={h3Styles}>{data.task}</h3>
      <Button
        style={{ backgroundColor: 'red' }}
        onClick={handleDeleteTaskClick}
      >
        x
      </Button>
    </li>
  );
};
export default TodoListItem;
