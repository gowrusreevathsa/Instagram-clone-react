import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  return (
    <>
      <div className="home">
        {data.map((item) => {
          console.log(item);
          return (
            <div className="card home-card">
              <h5>{item.postedBy.name}</h5>
              <div className="card-image">
                <img src={item.photo} />
              </div>
              <div className="card-content">
                <i className="material-icons">favorite_border</i>
                <h6>{item.title}</h6>
                <p>{item.body}</p>
                <input type="text" placeholder="Add a comment" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
