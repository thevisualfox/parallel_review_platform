import { atom, selector } from "recoil";

const loadingState = atom({
    key: "loadingState",
    default: "initial",
});

const userState = atom({
    key: "userState",
    default: {},
});

const successState = atom({
    key: "successState",
    default: false,
});

const projectsState = atom({
    key: "projectsState",
    default: [],
});

const adminState = selector({
    key: "adminState",
    get: ({ get }) => {
        const user = get(userState);

        if (user?.roles) {
            return user.roles.includes("ROLE_ADMIN");
        }

        return false;
    },
});

export { loadingState, userState, adminState, successState, projectsState };
