import {Link} from 'react-router-dom'

export default function Header(){
    return (
        <div className="header_section">
        
        <nav className="navbar navbar-dark bg-dark">
          <Link to={'/'} className="logo">
            <img src="images/logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample01"
            aria-controls="navbarsExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to={'/'} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/about'} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/catalog'} className="nav-link">
                  Songs
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/logout'} className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-md-0">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                />
            </form>
          </div>
        </nav>
    </div>
    );
}