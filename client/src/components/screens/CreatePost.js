import React from "react";

function CreatePost() {
  return (
    <div className="card input-field createPost">
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Body" />

      <div className="file-field input-field">
        <div className="btn blue darken-2">
          <span>Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>

      <button className="btn waves-effect blue darken-2">Create Post</button>
    </div>
  );
}

export default CreatePost;
