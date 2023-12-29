import React from "react";
import "./App.css";
import Feed from "./pages/feed/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./pages/videoPage/VideoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/videoPage/:id" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Routes>
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/" element={<Feed />} />
      </Routes> */}
    </div>
  );
}

export default App;
