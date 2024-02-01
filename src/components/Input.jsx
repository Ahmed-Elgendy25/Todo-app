/* eslint-disable react/prop-types */

function Input({
  setInput,
  addTask,
  input,
  task,
  id,
  handleEdit,
  edit,
  setEdit,
}) {
  return (
    <div className="  w-50 mx-auto mt-5">
      <div className=" container ">
        <div className="row ">
          <div className="col-md-6 mx-auto ">
            <div className="d-flex    ">
              <input
                className="form-control form-control-sm rounded-4 "
                type="text"
                id="inputTask"
                placeholder="write your next task"
                aria-label=".form-control-lg example"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />

              {edit ? (
                <>
                  <button
                    className="btn btn-md fs-4 rounded-circle fw-bolder px-3  ms-3 "
                    style={{ backgroundColor: '#ff5531' }}
                    onClick={() => {
                      handleEdit(id, input);
                      setEdit(false);
                    }}
                  >
                    &#10003;
                  </button>

                  <button
                    className="btn btn-md fs-4 rounded-circle fw-bolder px-3  ms-3 "
                    style={{ backgroundColor: '#ff5531' }}
                    onClick={() => setEdit(false)}
                  >
                    &#10005;
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-md fs-4 rounded-circle fw-bolder px-3  ms-3 "
                  style={{ backgroundColor: '#ff5531' }}
                  onClick={() => {
                    addTask(input);
                    setInput('');
                  }}
                >
                  &#43;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
{
  /* <input
name="task"
className="mx-5 form"
placeholder="write your next task"
id="inputTask"
/>
<button> &#43;</button> */
}
