import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import { BACKEND_URL } from "../config";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  return (
    <div>
      <div className="flex justify-center mt-[3%]">
        <div className="flex justify-center mt-[3%]">
          Welcome Back! Sign In below.
        </div>
      </div>
      <div className="flex justify-center border-8 border-black w-2/5 bg-red-600 mx-auto">
        <div className="pt-4">
          Username:{" "}
          <input
            id="username"
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}></input>
          <br></br>
          <br></br>
          Password:{" "}
          <input
            id="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
          <br></br>
          <br></br>
          <div className="flex justify-center">
            <button
              className="bg-white rounded-md px-2 py-1 mb-2 text-black hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition-colors"
              onClick={async () => {
                try {
                  const response = await axios.post(
                    BACKEND_URL + "/login",
                    {
                      username,
                      password,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  if (response.status === 200) {
                    setUser({
                      userEmail: username,
                      isLoading: false,
                    });

                    localStorage.setItem("token", response.data.token);
                    navigate("/feed");
                  }
                } catch (error) {
                  console.log("Error:", error);
                }
              }}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
