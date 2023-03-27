export default function Footer(){
  return (
    <div className="footer_section layout_padding footer_main">
<div className="container">
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
);
}