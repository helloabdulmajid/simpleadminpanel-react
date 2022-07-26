import axios from "axios";
import React, { useState ,useEffect} from "react";

function Posts() {
  let url = '#';
  const [news, setNews] = useState([]);


  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b73ace65afce45b38bf59935aec17684").then((response) => {
      console.log(response);
      setNews(response.data.articles);
    });
  },[]);

  return (
    <>
     
      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.title} </h5>
                    <p className="card-text">
                      {value.description}
                    </p>
                    <a href={url} className="btn btn-primary">
                      Main Source
                    </a>
                  </div>
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    </>
  );
}

export default Posts;
