import { unwrap } from '../utils';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  initialListItems: any;
}

interface ListItem {
  id: number;
  task: string;
  completed: boolean;
  dateCreated: string;
  dateUpdated: string;
}

const styles = {
  boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
  padding: '0 2em',
  height: 'fit-content',
};

const TodoList = ({ initialListItems }: TodoListProps) => {
  const listItems = unwrap(initialListItems.allTasks.edges);

  return (
    <div style={styles}>
      <ul style={{ padding: 0 }}>
        {listItems &&
          listItems.map((listItem: ListItem) => {
            const { id } = listItem;
            return <TodoListItem key={id} listItem={listItem} />;
          })}
      </ul>
    </div>
  );
};

export default TodoList;
