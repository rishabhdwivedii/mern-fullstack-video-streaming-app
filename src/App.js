import React, { useEffect } from "react";
import "./App.css";
import Feed from "./pages/feed/Feed";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Appbar from "./components/appbar/Appbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import VideoPage from "./pages/videoPage/VideoPage";
import Upload from "./pages/upload/Upload";
import Landing from "./pages/landing/Landing";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { userState } from "./store/atoms/user";
import axios from "axios";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Appbar />
          <InitUser />
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
    </RecoilRoot>
  );
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get(
        "https://video-streaming-backend-seven.vercel.app/me",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
}

export default App;
