import React from "react";

function Home() {
  return (
    <>
      <div className="home">
        <div className="card home-card">
          <h5>Sreevathsa Gowru</h5>
          <div className="card-image">
            <img src="https://images.unsplash.com/photo-1550056486-8ded219fb769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" />
          </div>
          <div className="card-content">
            <i className="material-icons">favorite_border</i>
            <h6>Title</h6>
            <p>This is a post</p>
            <input type="text" placeholder="Add a comment" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
