import React from "react";

import KeyWord from "./KeyWord";
import "./NewsCard.css";

const NewsCard = (prop) => {
    
  const imgurl = prop.news.thumbnail
    ? prop.news.thumbnail
    : "https://picsum.photos/200";
    
  return (
    <div className="newsContainer">
      <div className="newsLeft">
        <a href={prop.news.webUrl} target="_blank" rel="noopener noreferrer">
          <img className="imagenew" src={imgurl} alt="news pic" />
        </a>
      </div>

      <div className="newsRight">
        <a
          className="newLink"
          href={prop.news.webUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="newTitle">{prop.news.headline}</h2>
        </a>
        <div className="keywords">
          {prop.news.keywords.length > 0 &&
            prop.news.keywords.map((keyword) => (
              <KeyWord
                key={keyword.id}
                keyword={keyword.title}
                onEditSearch={prop.onEditSearch}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
