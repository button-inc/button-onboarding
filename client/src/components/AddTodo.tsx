import { useState } from 'react';
import { AddNewTaskMutation } from '../schema/mutations';
import Button from '@button-inc/button-theme/Button';
import Input from '@button-inc/button-theme/Input';

const styles = {
  display: 'flex',
  alignItems: 'center',
  listStyleType: 'none',
  justifyContent: 'space-between',
};

const AddTodo = () => {
  const [taskInput, setTaskInput] = useState('');

  const handleAddNewTask = () => {
    if (taskInput) {
      AddNewTaskMutation(taskInput, () =>
        console.log('Delete task mutation successful')
      );
    }
  };

  return (
    <div style={styles}>
      <Input
        type="text"
        required
        placeholder="Something to do..."
        value={taskInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskInput(e.target.value)
        }
      />
      <Button onClick={handleAddNewTask}>Add</Button>
    </div>
  );
};
export default AddTodo;
