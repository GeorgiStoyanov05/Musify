export default function Client({
    name,
    song,
    message
}){
    
    return (
        <div className="carousel-item">
        <div className="container">
          <h1 className="casino_taital">
            <span>What do our customers say?</span>
          </h1>
          <>
            <div className="image_7">
              <img src="images/img-6.png" />
            </div>
            <h4 className="jone_text">{name}</h4>
            <p className="ipsum_text">
             <span className="padding_right_20">
               <img src="images/left-quote.png" />
              </span>
              Song: {song}
              <span className="padding_left_20">
                <img src="images/right-quote.png" />
              </span>
            </p>
            <p className="ipsum_text">
              {message}
            </p>
          </>
        </div>
      </div>
    );
}