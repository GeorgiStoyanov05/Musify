import { Link } from "react-router-dom";

export default function Body(){
    return (
        <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="about_taital">
                <img src="images/icon-1.png" /> <span>About our app</span>
              </h1>
              <p className="about_text">
                Musify is a online music streaming service with the mission to make creating and exploring tracks way easier and more intuitive.
                Started as a project in 2023, Musify is developing fast and is becoming more and more well-known among the new generation.
                <br />
                <br />
                Located in Kazanlak, Bulgaria.
              </p>
              <div className="read_bt">
                <Link to={'/'}>Go to main page</Link>
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
    );
}