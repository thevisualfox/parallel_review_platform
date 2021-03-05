/* Packages */
import React, { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";

/* Atoms */
import { loadingState } from "../../state";

/* Components */
import ProjectImage from "./ProjectImage";
import ProjectUsers from "./ProjectUsers";
import ProjectMenu from "./ProjectMenu";

export default function Project({ project, getProjects }) {
    /* Constants */
    const { slug, title, projectImages, id, users } = project;

    /* State */
    const setLoading = useSetRecoilState(loadingState);
    const [modalOpen, setModalOpen] = useState(false);

    /* Callbacks */
    const deleteProject = async (event, id) => {
        event.preventDefault();

        try {
            setLoading("delete_project");

            const result = await axios.post(`/api/projects/delete/${id}`);

            if (result.data.success) getProjects();
        } catch (error) {
            throw new Error(error);
        } finally {
            setLoading(null);
        }
    };

    const editProject = async (event, formRef, images) => {
        event.preventDefault();

        const params = new FormData(formRef.current);
        images.forEach((image) => params.append("images[]", image));

        try {
            setLoading("edit_project");

            const result = await axios.post(`/api/projects/edit/${id}`, params);

            if (result.data.success) {
                getProjects();
                toggleModal();
            }
        } catch (error) {
            throw new Error(error);
        } finally {
            setLoading(null);
        }
    };

    const toggleModal = (event) => {
        if (event) event.preventDefault();
        setModalOpen(!modalOpen);
    };

    /* Render */
    return (
        <a href={`projects/${slug}`} title={title} className="card card--link card--product">
            <ProjectImage {...{ projectImages }} />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                        <p className="mb-3">{title}</p>
                        <ProjectUsers {...{ users }} />
                    </div>
                    <ProjectMenu {...{ project, deleteProject, editProject, getProjects, modalOpen, toggleModal }} />
                </div>
            </div>
        </a>
    );
}
