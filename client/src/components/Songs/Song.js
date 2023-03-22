export default function Song(
    name,
    singer,
    genre,
    imageUrl,
    description
){
    return (
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
              <a href="#">Details</a>
            </div>
          </div>
    );
}