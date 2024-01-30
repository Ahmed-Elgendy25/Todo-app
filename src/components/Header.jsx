/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Header({ task }) {
  return (
    <header className="  my-5  d-flex justify-content-center align-items-center">
      <div
        className=" container h-75 rounded-5 d-flex flex-column flex-md-row gap-md-3 gap-2   justify-content-center align-items-center "
        id="header"
        style={{ color: '#cebea4', width: '45%' }}
      >
        <div className=" w-50  ">
          <h2
            className="  fw-bolder   text-center  mb-md-2 mb-3 "
            style={{ fontSize: '3.5rem' }}
          >
            Todo Done
          </h2>
          <p
            className="fw-semibold text-center   "
            style={{ letterSpacing: 5 }}
          >
            Keep it up
          </p>
        </div>

        {task.length > 0 ? (
          <div
            className="circle d-flex justify-content-center align-items-center"
            style={{ backgroundColor: '#ff5531' }}
          >
            <span className="fw-bolder fs-1 text-black">1/{task.length}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  );
}

export default Header;
