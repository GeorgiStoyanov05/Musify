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