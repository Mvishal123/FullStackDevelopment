import { UserState } from "../atoms"
import { selector } from "recoil";

export const userIsLoading = selector({
    key: "userIsLoading",
    get: ({get}) => {
        const state = get(UserState);
        return state.isLoading;
    }
})