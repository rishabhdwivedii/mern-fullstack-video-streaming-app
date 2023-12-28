import React from "react";
import "./App.css";
import VideoCard from "./components/videoCard/VideoCard";

function App() {
  return (
    <div className="App">
      <VideoCard title={"New video"} image={"thumbnail.jpg"} />
    </div>
  );
}

export default App;
