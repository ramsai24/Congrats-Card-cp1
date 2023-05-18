const element = (
  // Write your code here.
  <div>
    <div className="bg-container">
      <h1>Congratulations</h1>
      <div className="profile-container">
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
        <h1>Kiran V</h1>
        <p className="profile-description">
          Vishnu Institute of Computer Education and Technology,Bhimavaram
        </p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
