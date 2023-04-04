import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header(){

  const {accessToken} = useContext(AuthContext);

    return (
        <div className="header_section">
        <nav className="navbar navbar-dark bg-dark">
          <Link to={'/'} className="logo">
            <img src="/images/logo.png" />
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
              {accessToken
              ?
              <>
              <li className="nav-item">
              <Link to={'/create'} className="nav-link">
                Create a song
              </Link>
              </li>
              <li className="nav-item">
                <Link to={'/logout'} className="nav-link">
                  Logout
                </Link>
              </li>
              </>
              :
              <>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/register'} className="nav-link">
                  Register
                </Link>
              </li>
              </>
              }   
            </ul>
          </div>
        </nav>
        {/*banner section start */}
        <div className="banner_section layout_padding">
          <div className="container-fluid">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <h4 className="banner_taital">Welcome to</h4>
                    <h1 className="banner_taital_1">M u s i f y</h1>
                    <p className="banner_text">
                      The music streaming service of the future that aims to bring you the best user experience possible! The place which begins with you!
                    </p>
                    <div className="book_bt">
                      <Link to={'/catalog'}>To the songs</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*banner section end */}
      </div>
    );
}