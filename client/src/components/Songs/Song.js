import { Link } from "react-router-dom";

export default function Song({
    name,
    singer,
    imageUrl,
    index,
    _id
}){

    return (
        <div className="col-lg-3 col-sm-6">
            <div className="image_0" style={{backgroundImage: `url(${imageUrl})`}}>
              <h1 className="number_text">{index}</h1>
              <h1 className="game_text_1">{name}</h1>
              <p className="many_text">
                {singer}
              </p>
            </div>
            <div className="playnow_bt">
              <Link to={`${_id}`}>Details</Link>
            </div>
          </div>
    );
}