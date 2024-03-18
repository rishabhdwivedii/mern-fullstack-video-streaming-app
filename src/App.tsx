import React, { useEffect } from "react";
import "./App.css";
import Feed from "./pages/Feed";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Appbar from "./components/Appbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import Upload from "./pages/Upload";
import Landing from "./pages/Landing";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { userState } from "./store/atoms/user";
import axios from "axios";
import { BACKEND_URL } from "./config";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Appbar />
          <InitUser />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/videoPage/:_id" element={<VideoPage />} />
            <Route path="/upload" element={<Upload />} />
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
      const response = await axios.get(BACKEND_URL + "/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

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
