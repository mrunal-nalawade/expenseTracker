import React from "react";

const KeyWord = (prop) => {
  const changeSearch = () => {
    prop.onEditSearch(prop.keyword);
  };
  return (
    <div
      className="keyWord"
      onClick={changeSearch}
      style={{
        height: "max-content",
        width: "max-content",
        backgroundColor: "darkblue",
        color: "aliceblue",
        padding: "3px",
        margin: "2px",
        border: "none",
        borderRadius: "5px",
        cursor:'pointer'
      }}
    >
      {prop.keyword}
    </div>
  );
};

export default KeyWord;
