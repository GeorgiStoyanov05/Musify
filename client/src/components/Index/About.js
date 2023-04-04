import { Link } from "react-router-dom";

export default function About(){
    return (
        <div className="about_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h1 className="about_taital">
          <img src="/images/icon-1.png" /> <span>About our app</span>
        </h1>
        <p className="about_text">
        With Musify, it’s easy to find the right music for every moment – on your phone, your computer, your tablet and more. There are millions of tracks on Musify. So whether you’re working out, partying or relaxing, the right music is always at your fingertips.
        </p>
        <div className="read_bt">
          <Link to={"/about"}>Read More</Link>
        </div>
      </div>
      <div className="col-md-6">
        <div>
          <img src="/images/img-1.png" className="image_1" />
        </div>
      </div>
    </div>
  </div>
</div>
    );
}