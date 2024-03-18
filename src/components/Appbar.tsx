import { useNavigate } from "react-router-dom";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../store/atoms/user";
import { userEmailState } from "../store/selectors/userEmail";

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
      <div className=" flex justify-between bg-red-600">
        <div className="flex">
          <div
            className="p-4 cursor-pointer text-white font-semibold"
            onClick={() => {
              navigate("/");
            }}>
            Home
          </div>
          <img
            className="p-4 cursor-pointer text-white"
            onClick={() => {
              navigate("/upload");
            }}
            src={"/upload.svg"}
            alt="Upload"
          />
        </div>
        <div className="flex">
          <div className="p-4 text-white">{userEmail}</div>
          <div
            className="p-4 cursor-pointer text-white"
            onClick={() => {
              localStorage.removeItem("token");
              setUser({
                isLoading: false,
                userEmail: null,
              });
              navigate("/");
            }}>
            Logout
          </div>
        </div>
      </div>
    );
  }

  // if (!userLoading && !userEmail) {
  return (
    <div className="flex justify-between bg-red-600">
      <div className="flex">
        <div
          className="p-4 cursor-pointer text-white font-semibold"
          onClick={() => {
            navigate("/");
          }}>
          Home
        </div>
      </div>
      <div className="flex">
        <div
          className="p-4 text-white cursor-pointer "
          onClick={() => {
            navigate("/signin");
          }}>
          Sign In
        </div>
        <div
          className="p-4 text-white cursor-pointer"
          onClick={() => {
            navigate("/signup");
          }}>
          Sign Up
        </div>
      </div>
    </div>
  );
};
// };

export default Appbar;
