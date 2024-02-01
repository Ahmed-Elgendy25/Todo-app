import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Header from './components/Header';
import './app.css';
import Input from './components/Input';
import Todolist from './components/Todolist';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [task, setTask] = useState([]);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState('');
  const [id, setID] = useState(null);

  function handleDelete(id) {
    const filteredTasks = task.filter((todo) => todo.id !== id);
    setTask(filteredTasks);
  }

  function isFound(value) {
    let found = task.find((taskItem) => taskItem.name === value);
    return found;
  }

  function handleEdit(id, newText) {
    if (newText !== '' && !isFound(newText)) {
      const updatedTodos = task.map((todo) =>
        todo.id === id ? { ...todo, name: newText } : todo
      );
      setTask(updatedTodos);
    }
  }

  function addTask(value) {
    if (value !== '' && !isFound(value)) {
      setTask([...task, { name: value, id: uuidv4(), done: false }]);
    }
  }
  function toggleDone(id, value) {
    const updatedTodos = task.map((todo) =>
      todo.id === id ? { ...todo, done: value } : todo
    );
    setTask(updatedTodos);
  }

  // console.log(task);
  return (
    <div style={{ backgroundColor: '#0d0d0d' }} className=" w-100 vh-100">
      <Navbar />
      <Header task={task} />
      <Input
        input={input}
        setInput={setInput}
        addTask={addTask}
        task={task}
        handleEdit={handleEdit}
        edit={edit}
        setEdit={setEdit}
        id={id}
      />
      <Todolist
        task={task}
        input={input}
        setInput={setInput}
        handleEdit={handleEdit}
        setEdit={setEdit}
        setID={setID}
        handleDelete={handleDelete}
        toggleDone={toggleDone}
      />
    </div>
  );
}

export default App;
