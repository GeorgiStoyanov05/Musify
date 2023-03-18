export default function Body(){
    return (
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
              <a href="#">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}