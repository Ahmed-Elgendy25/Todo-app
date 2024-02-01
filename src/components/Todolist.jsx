/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Todolist({
  task,
  handleEdit,
  handleDelete,
  input,
  setInput,
  edit,
  setEdit,
  setID,
  toggleDone,
}) {
  const [active, setActive] = useState(false);
  return (
    <div className="mt-5">
      <div className="container   d-flex  justify-content-center">
        <ul
          className={` list-unstyled w-50 ${
            task.length > 0 ? 'overflow-y-scroll' : ''
          } h-25 position-absolute`}
        >
          {task.map((task) => {
            return (
              <li
                className=" w-75 d-flex align-items-center justify-content-between my-4 mx-auto rounded-4 p-4 text-white "
                style={{ backgroundColor: '#1e1e1e' }}
                key={task.id}
                id={task.id}
              >
                <div className="d-flex justify-content-start  gap-2    align-items-center   w-50">
                  <div
                    id={`${task.done ? 'circleListGreen' : 'circleList'}`}
                    onClick={() => {
                      setActive(!active);
                      toggleDone(task.id, active);
                    }}
                  ></div>
                  <h2
                    className={` fw-bolder      mb-md-2 mb-3 ${
                      task.done ? 'done' : ''
                    } `}
                    style={{ color: '#cebea4' }}
                  >
                    {task.name}
                  </h2>
                </div>

                <div className="d-flex justify-content-end gap-3    align-items-center   w-50">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ color: '#cebea4', cursor: 'pointer' }}
                    className="fs-3"
                    onClick={() => {
                      setID(task.id);
                      setEdit(true);
                      setInput('');
                    }}
                  />

                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: '#cebea4', cursor: 'pointer' }}
                    className=" fs-3"
                    onClick={() => handleDelete(task.id)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
{
  /* <div
className=" rounded-circle"
style={{ backgroundColor: '#ff5531' }}
>
asadsad
</div> */
}
