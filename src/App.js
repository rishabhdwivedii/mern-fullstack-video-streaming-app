import React from "react";
import "./App.css";
import Video from "./components/video/Video";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className="App">
      <div className="video">
        <Video propsValue="./videos/pizza.mp4" />
      </div>
      <div className="feed">
        <Feed />
      </div>
    </div>
  );
}

export default App;
