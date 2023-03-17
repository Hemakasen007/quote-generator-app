import React, { useEffect, useState } from "react";
import "./Card.css";
import { fetchData } from "../Api";

import axios from "axios"


const Card = () => {

  const [quote, setQuote] = useState("Blessed is the man who expects nothing, for he shall never be disappointed.");
  const [author, setAuthor] = useState(null);

  
const handleClick = () => {
  axios.get(`https://api.quotable.io/random`)
  .then(res => {
    const posts = res.data;
    console.log(posts);
    setQuote(posts.content);
    setAuthor(posts.author)
    return posts;
  })

}
  return (
    <div className="main-card">
      <div className="upd-card">
        <div className="advice-head"> ADVICE #115</div>
        <div className="quote">
          {" "}
          ❝{quote}❞
        </div>
        <div className="author">
          - {author} -
        </div>
        <div className="img-div">
          {" "}
          <img
            src="/pattern-divider-desktop.svg"
            alt=""
            width="100%"
            height="12px"
          />
        </div>
        
      </div>
      <div className="icon-button" onClick={()=>handleClick()}><img src="/icon-dice.svg" width="20px" height="20px"></img></div>
    </div>
  );
};

export default Card;
