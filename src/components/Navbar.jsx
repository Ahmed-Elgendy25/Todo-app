import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h2 className=" fw-bold" style={{ color: '#cebea4' }}>
            XERO<span style={{ color: '#ff5531' }}>TODO</span>
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ color: '#cebea4' }}
            className="ms-auto fs-4"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
