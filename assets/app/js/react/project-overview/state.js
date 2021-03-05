import { atom } from "recoil";

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

export { loadingState, userState, successState, projectsState };
