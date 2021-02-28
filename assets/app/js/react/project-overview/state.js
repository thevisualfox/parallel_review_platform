import { atom } from "recoil";

const loadingState = atom({
    key: "loadingState",
    default: "initial",
});

const successState = atom({
    key: "successState",
    default: false,
});

const projectsState = atom({
    key: "projectsState",
    default: [],
});

export { loadingState, successState, projectsState };
