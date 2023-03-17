export default function Header(){
    return (
        <div className="header_section">
        <nav className="navbar navbar-dark bg-dark">
          <a className="logo" href="index.html">
            <img src="images/logo.png" />
          </a>
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
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="game.html">
                  Game
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="client.html">
                  Client
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
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
        {/*banner section start */}
        <div className="banner_section layout_padding">
          <div className="container-fluid">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                  />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <h4 className="banner_taital">Welcome to</h4>
                    <h1 className="banner_taital_1">C a s i n o</h1>
                    <p className="banner_text">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum
                    </p>
                    <div className="book_bt">
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <h4 className="banner_taital">Welcome to</h4>
                    <h1 className="banner_taital_1">C a s i n o</h1>
                    <p className="banner_text">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum
                    </p>
                    <div className="book_bt">
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <h4 className="banner_taital">Welcome to</h4>
                    <h1 className="banner_taital_1">C a s i n o</h1>
                    <p className="banner_text">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum
                    </p>
                    <div className="book_bt">
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <h4 className="banner_taital">Welcome to</h4>
                    <h1 className="banner_taital_1">C a s i n o</h1>
                    <p className="banner_text">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum
                    </p>
                    <div className="book_bt">
                      <a href="#">Book Now</a>
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