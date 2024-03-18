import { atom } from "recoil";

interface User {
  isLoading: boolean;
  userEmail: string | null;
}

export const userState = atom<User>({
  key: "userState",
  default: {
    isLoading: true,
    userEmail: null,
  },
});
