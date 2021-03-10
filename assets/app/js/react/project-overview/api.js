import axios from "axios";

export const API_KEYS = {
    PBU: "project_by_user",
};

/* Project related calls */
export const fetchProjectsByUser = async () => {
    const result = await axios.get("/api/projects/get");
    return result?.data;
};

export const addProject = async () => {
    const result = await axios.post("/api/projects/add");
    return result?.data;
};

export const deleteProject = async ({ projectId }) => {
    const result = await axios.post(`/api/projects/delete/${projectId}`);
    return result?.data;
};

export const editProject = async ({ formRef, projectId }) => {
    const params = new FormData(formRef.current);

    const result = await axios.post(`/api/projects/edit/${projectId}`, params);
    return result?.data;
};

/* Project image related calls */
export const addProjectImages = async ({ projectId, images }) => {
    const params = new FormData();
    images.forEach((image) => params.append("images[]", image));

    const result = await axios.post(`/api/images/add/${projectId}`, params);
    return result?.data;
};

export const deleteProjectImages = async ({ projectId, id }) => {
    const result = await axios.post(`/api/images/delete/${projectId}`, { id });
    return result?.data;
};
