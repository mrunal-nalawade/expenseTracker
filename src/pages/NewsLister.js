import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import NewsCard from "../Components/NewsCard";

import "./NewsLister.css";

const NewsLister = (props) => {
  const { search } = useParams();

  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [serchParam, setSearchParam] = useState(search);
  const [Pages, setPages] = useState();

  const fetchNewsAPI = useCallback(async () => {
    let apiurl = `http://content.guardianapis.com/search?api-key=test&q=${serchParam}&show-fields=thumbnail,headline&show-tags=keyword&page=${currentPage}&page-size=10`;

    let response;
    try {
      response = await fetch(apiurl);
      if (!response.ok) {
        throw new Error("could not fetch expenses");
      }
    } catch (e) {
      console.log("error");
    }

    const data = await response.json();

    console.log(data);

    const newsarr = data.response.results;
    setPages(data.response.pages);

    const newsList = [];
    for (const key in newsarr) {
      const tags = newsarr[key].tags;
      const keywords = [];

      for (const key in tags) {
        keywords.push({
          id: tags[key].id,
          title: tags[key].webTitle,
        });
      }

      newsList.push({
        id: newsarr[key].id,
        headline: newsarr[key].fields.headline,
        thumbnail: newsarr[key].fields.thumbnail,
        webUrl: newsarr[key].webUrl,
        keywords,
      });
    }

    console.log(newsList);
    setNews(newsList);
  }, [serchParam, currentPage]);

  useEffect(() => {
    fetchNewsAPI();
  }, [fetchNewsAPI]);

  const goTO = (page) => {
    setCurrentPage(page);
  };

  const editSearch = (query) => {
    setSearchParam(query);
  };

  return (
    <React.Fragment>
      <div className="titleDiv">
        <h2 className="listTitle">Results for {serchParam}</h2>
      </div>
      {news.length > 0 ? (
        news.map((news) => (
          <NewsCard key={news.id} news={news} onEditSearch={editSearch} />
        ))
      ) : (
        <p className="nores">No results</p>
      )}

      {news.length > 0 && (
        <div className="buttonDiv">
          <button className="navB" onClick={goTO.bind(this, +currentPage - 1)}>
            Prev
          </button>
          <button className="navB" onClick={goTO.bind(this, 1)}>
            1
          </button>
          <button className="navB">{currentPage}</button>
          <button className="navB" onClick={goTO.bind(this, Pages)}>
            {Pages}
          </button>
          <button className="navB" onClick={goTO.bind(this, +currentPage + 1)}>
            Next
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default NewsLister;
