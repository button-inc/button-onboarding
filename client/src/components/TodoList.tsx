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

const TodoList = ({ initialListItems }: TodoListProps) => {
  const listItems = unwrap(initialListItems.allTasks.edges);

  return (
    <div>
      <ul>
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
