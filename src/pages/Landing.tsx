import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading";

const Landing = () => {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);

  return (
    <div className="flex justify-between">
      {!userLoading && !userEmail && (
        <div>
          <div>Welcome to Video Streaming App!</div>
          <div className="flex">
            <button
              className="bg-red-600 text-white m-2"
              onClick={() => {
                navigate("/signin");
              }}>
              Sign In
            </button>
            <button
              className="bg-red-600 text-white m-2"
              onClick={() => {
                navigate("/signup");
              }}>
              Sign Up
            </button>
          </div>
        </div>
      )}
      <div>
        <div className="flex justify-center">
          {!userLoading && userEmail && (
            <div
              className="cursor-pointer text-lg font-extrabold p-4 bg-slate-400 rounded-md my-[3%]"
              onClick={() => {
                navigate("/feed");
              }}>
              Go to Feed!
            </div>
          )}
        </div>
        <img
          className="mx-w-[100%]"
          src="https://restream.io/blog/content/images/size/w2000/2022/10/best-live-streaming-apps.jpg"
          alt="Landing"
        />
      </div>
    </div>
  );
};

export default Landing;
