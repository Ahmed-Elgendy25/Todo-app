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

  function addTask(value) {
    let found = task.find((taskItem) => taskItem.name === value);

    if (value !== '' && !found) {
      setTask([...task, { name: value, id: uuidv4() }]);
    }
  }

  console.log(task);
  return (
    <div style={{ backgroundColor: '#0d0d0d' }} className=" w-100 vh-100">
      <Navbar />
      <Header task={task} />
      <Input addTask={addTask} />
      <Todolist task={task} />
    </div>
  );
}

export default App;
