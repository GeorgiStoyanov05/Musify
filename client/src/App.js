import './App.css';

function App() {
  return (
    <div className="App">
  {/*header section start */}
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
  {/*header section end */}
  {/* about section start */}
  <div className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="about_taital">
            <img src="images/icon-1.png" /> <span>About our casino</span>
          </h1>
          <p className="about_text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <p className="about_text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div className="read_bt">
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <img src="images/img-1.png" className="image_1" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* about section end */}
  {/* game section start */}
  <div className="game_section layout_padding">
    <div className="container">
      <h1 className="game_taital">
        <img src="images/icon-1.png" /> <span>All games here</span>
      </h1>
      <p className="game_text">
        established fact that a reader will be distracted by the readable
        content of a page when looking at its layout
      </p>
      <div className="game_section_2 layout_padding">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="image_2">
              <h1 className="number_text">01</h1>
              <h1 className="game_text_1">Game</h1>
              <p className="many_text">
                There are many variations of passages of Lorem Ipsum available,
                but the{" "}
              </p>
            </div>
            <div className="playnow_bt active">
              <a href="#">Play Now</a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="image_3">
              <h1 className="number_text_1">02</h1>
              <h1 className="game_text_1">Game</h1>
              <p className="many_text">
                There are many variations of passages of Lorem Ipsum available,
                but the{" "}
              </p>
            </div>
            <div className="playnow_bt">
              <a href="#">Play Now</a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="image_4">
              <h1 className="number_text_2">03</h1>
              <h1 className="game_text_1">Game</h1>
              <p className="many_text">
                There are many variations of passages of Lorem Ipsum available,
                but the{" "}
              </p>
            </div>
            <div className="playnow_bt">
              <a href="#">Play Now</a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="image_5">
              <h1 className="number_text_3">04</h1>
              <h1 className="game_text_1">Game</h1>
              <p className="many_text">
                There are many variations of passages of Lorem Ipsum available,
                but the{" "}
              </p>
            </div>
            <div className="playnow_bt">
              <a href="#">Play Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* game section end */}
  {/* play section start */}
  <div className="play_section layout_padding">
    <div className="container">
      <h1 className="play_taital">
        <img src="images/icon-1.png" /> <span>How to play casino</span>
      </h1>
      <p className="play_text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable
      </p>
      <div className="game_section_2 layout_padding">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="box_section">
              <img src="images/double-img.png" className="image_6" />
            </div>
            <h2 className="register_text">Register Info</h2>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_section">
              <img src="images/poker-img.png" className="image_6" />
            </div>
            <h2 className="register_text">Deposit Your Money</h2>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_section">
              <img src="images/jigsaw-img.png" className="image_6" />
            </div>
            <h2 className="register_text">14 days Free</h2>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_section">
              <img src="images/coins-img.png" className="image_6" />
            </div>
            <h2 className="register_text">Play Online</h2>
          </div>
        </div>
        <div className="playnow_bt">
          <a href="#">Play Now</a>
        </div>
      </div>
    </div>
  </div>
  {/* game section end */}
  {/* casino section start */}
  <div className="casino_section layout_padding">
    <div className="container">
      <h1 className="casino_taital">
        <img src="images/icon-1.png" /> <span>Our Casino Price</span>
      </h1>
      <p className="game_text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable
      </p>
      <div className="casino_section_2 layout_padding">
        <div className="row">
          <div className="col-sm-4">
            <div className="box_main">
              <h4 className="basic_text">Basic Plan</h4>
              <h1 className="date_text">
                <span className="font_size_20">$</span>
                <span className="font_size_40">15</span> /Month
              </h1>
              <p className="lorem_text">
                Lorem Ipsum available, but the majority
              </p>
            </div>
            <div className="buynow_bt">
              <a href="#">Buy Now</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box_main">
              <h4 className="basic_text">Standra Plan</h4>
              <h1 className="date_text">
                <span className="font_size_20">$</span>
                <span className="font_size_40">25</span> /Month
              </h1>
              <p className="lorem_text">
                Lorem Ipsum available, but the majority
              </p>
            </div>
            <div className="buynow_bt">
              <a href="#">Buy Now</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box_main">
              <h4 className="basic_text">Premium Plan</h4>
              <h1 className="date_text">
                <span className="font_size_20">$</span>
                <span className="font_size_40">35</span> /Month
              </h1>
              <p className="lorem_text">
                Lorem Ipsum available, but the majority
              </p>
            </div>
            <div className="buynow_bt">
              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* casino section end */}
  {/* client section start */}
  <div className="client_section layout_padding">
    <div id="main_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <h1 className="casino_taital">
              <img src="images/icon-1.png" />{" "}
              <span>What Is Says Our Customer</span>
            </h1>
            <div className="image_7">
              <img src="images/img-6.png" />
            </div>
            <h4 className="jone_text">Jone Mark</h4>
            <p className="ipsum_text">
              <span className="padding_right_20">
                <img src="images/left-quote.png" />{" "}
              </span>{" "}
              Lorem ipsum dolor sit amet,{" "}
              <span className="padding_left_20">
                <img src="images/right-quote.png" />
              </span>
            </p>
            <p className="ipsum_text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse{" "}
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1 className="casino_taital">
              <img src="images/icon-1.png" />{" "}
              <span>What Is Says Our Customer</span>
            </h1>
            <div className="image_7">
              <img src="images/img-6.png" />
            </div>
            <h4 className="jone_text">Jone Mark</h4>
            <p className="ipsum_text">
              <span className="padding_right_20">
                <img src="images/left-quote.png" />{" "}
              </span>{" "}
              Lorem ipsum dolor sit amet,{" "}
              <span className="padding_left_20">
                <img src="images/right-quote.png" />
              </span>
            </p>
            <p className="ipsum_text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse{" "}
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1 className="casino_taital">
              <img src="images/icon-1.png" />{" "}
              <span>What Is Says Our Customer</span>
            </h1>
            <div className="image_7">
              <img src="images/img-6.png" />
            </div>
            <h4 className="jone_text">Jone Mark</h4>
            <p className="ipsum_text">
              <span className="padding_right_20">
                <img src="images/left-quote.png" />{" "}
              </span>{" "}
              Lorem ipsum dolor sit amet,{" "}
              <span className="padding_left_20">
                <img src="images/right-quote.png" />
              </span>
            </p>
            <p className="ipsum_text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse{" "}
            </p>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#main_slider"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" />
        </a>
        <a
          className="carousel-control-next"
          href="#main_slider"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </div>
  </div>
  {/* client section end */}
  {/* contact section start */}
  <div className="contact_section layout_padding">
    <div className="container">
      <h1 className="touch_taital">
        <img src="images/icon-1.png" /> <span>Get In touch</span>
      </h1>
      <div className="contact_section_2">
        <div className="row">
          <div className="col-md-6">
            <div className="email_text">
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Phone Numbar"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Email"
                />
              </div>
              <div className="mt-3">
                <form>
                  <select name="cars" className="custom-select mb-3">
                    <option selected="">Select Games</option>
                    <option value="volvo">Volvo</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
                </form>
              </div>
              <div className="form-group">
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows={5}
                  id="comment"
                  name="Massage"
                  defaultValue={""}
                />
              </div>
              <div className="send_btn">
                <a href="#">SEND</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_main">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width={600}
                  height={400}
                  frameBorder={0}
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* contact section end */}
  {/* footer section start */}
  <div className="footer_section layout_padding">
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email"
          aria-label="Enter your email"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            Subscribe
          </span>
        </div>
      </div>
      <div className="social_icon">
        <ul>
          <li>
            <a href="#">
              <img src="images/fb-icon.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/twitter-icon.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/linkedin-icon.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/instagram-icon.png" />
            </a>
          </li>
        </ul>
      </div>
      <div className="location_section">
        <ul>
          <li>
            <a href="#">
              <img src="images/mail-icon.png" />
              <span className="padding_left_15">demo@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/call-icon.png" />
              <span className="padding_left_15">(+71 9876543210)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/map-icon.png" />
              <span className="padding_left_15">Location</span>
            </a>
          </li>
        </ul>
      </div>
      {/* copyright section start */}
      <div className="copyright_section">
        <h1 className="copyright_text">
          Copyright 2019 All Right Reserved By{" "}
          <a href="https://html.design"> Free Html Templates</a>
        </h1>
        <a href="https://html.design"></a>
      </div>
      <a href="https://html.design">{/* copyright section end */}</a>
    </div>
    <a href="https://html.design"></a>
  </div>
    </div>
  );
}

export default App;
