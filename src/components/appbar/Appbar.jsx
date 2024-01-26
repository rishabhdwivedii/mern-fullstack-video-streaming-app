import { useNavigate } from "react-router-dom";
import "./appbar.css";
import { isUserLoading } from "../../store/selectors/isUserLoading";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../store/atoms/user";
import { userEmailState } from "../../store/selectors/userEmail";

const Appbar = () => {
  const navigate = useNavigate();
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return <div>Loading...</div>;
  }

  if (userEmail) {
    return (
      <div className="appbar">
        <div>
          <button>Home</button>
          <button
            className="upload"
            onClick={() => {
              navigate("/upload");
            }}>
            Upload
          </button>
        </div>
        <div className="side">
          <div>{userEmail}</div>
          <button
            className="signup"
            onClick={() => {
              localStorage.removeItem("token");
              setUser({
                isLoading: false,
                userEmail: null,
              });
            }}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  if (!userLoading && !userEmail) {
    return (
      <div className="appbar">
        <div>
          <button>Home</button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/signin");
            }}>
            Sign In
          </button>
          <button
            className="signup"
            onClick={() => {
              navigate("/signup");
            }}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
};

export default Appbar;
