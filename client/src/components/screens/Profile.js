import React from "react";

function Profile() {
  return (
    <>
      <div className="customProfile">
        <div>
          <img
            className="profileImg"
            src="https://images.unsplash.com/photo-1557037559-bedd47b49aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          />
        </div>

        <div>
          <h6>Sreevathsa Gowru</h6>

          <div className="userActivity">
            <h6>10 posts</h6>
            <h6>50 followers</h6>
            <h6>60 following</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
