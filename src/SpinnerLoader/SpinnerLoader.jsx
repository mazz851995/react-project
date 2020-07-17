import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const SpinnerLoader = () => {
  const [lyricsItem, setLyricsItem] = useState(null);
  const [loading, setLoading] = useState(null);
  const lyricsFunction = async () => {
    try {
      const data = await axios
        .get("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime")
        .then((res) => {
          console.log(res);
          setLyricsItem(res.data.lyrics);
        });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    lyricsFunction();
  }, []);
  // [] it means load once, remove [] to load everytime

  return (
    <div>
      <p>{lyricsItem}</p>
      {loading ? (
        lyricsItem
      ) : (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};
export default SpinnerLoader;
