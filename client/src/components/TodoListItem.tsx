import Checkbox from '@button-inc/button-theme/Checkbox';

interface ListItemProps {
  listItem: {
    id: number;
    task: string;
    completed: boolean;
    dateCreated: string;
    dateUpdated: string;
  };
}

const styles = {
  display: 'flex',
  alignItems: 'center',
};

const TodoListItem = ({ listItem }: ListItemProps) => {
  const { id, completed, dateCreated, dateUpdated, task } = listItem;
  return (
    <li style={styles}>
      <Checkbox checked={completed} />
      <h3>{task}</h3>
    </li>
  );
};
export default TodoListItem;
