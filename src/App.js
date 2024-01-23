import React from "react";
import "./App.css";
import Feed from "./pages/feed/Feed";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Appbar from "./components/appbar/Appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./pages/videoPage/VideoPage";
import Upload from "./pages/upload/Upload";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route path="/videoPage/:_id" element={<VideoPage />} />
          <Route exact path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
