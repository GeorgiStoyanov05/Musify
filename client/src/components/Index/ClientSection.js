import { useEffect, useState } from "react";
import Client from "./Client";

export default function ClientSection({messages}){

    return (
        <div className="client_section layout_padding">
  <div id="main_slider" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="container">
          <h1 className="casino_taital">
            <span>What do our customers say?</span>
            {" "}
          </h1>
          <>
            <div className="image_7">
              <img src="images/img-6.png" />
            </div>
            <h4 className="jone_text">Jone Mark</h4>
            <p className="ipsum_text">
             <span className="padding_right_20">
               <img src="images/left-quote.png" />{" "}
              </span>{" "}
              About my Musify experience{" "}
              <span className="padding_left_20">
                <img src="images/right-quote.png" />
              </span>
            </p>
            <p className="ipsum_text">
              I had the time of my life while using Musify. Its extremely easy to use and it is also very interesting and intuitive.
              I like the design and the integrated functionality so much! {"<3"}
            </p>
          </>
        </div>
      </div>
      {messages.map(message=>(<Client key={message._id} {...message}/>))}

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
    );
}