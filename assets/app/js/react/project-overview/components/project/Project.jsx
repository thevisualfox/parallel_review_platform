/* Packages */
import React, { useState } from "react";

/* Components */
import ProjectImage from "./ProjectImage";
import ProjectUsers from "./ProjectUsers";
import ProjectMenu from "./ProjectMenu";

export default function Project({ project, editProject, deleteProject }) {
    /* Constants */
    const { slug, title, projectImages, users } = project;

    /* State */
    const [modalOpen, setModalOpen] = useState(false);

    /* Callbacks */
    const toggleModal = () => setModalOpen(!modalOpen);

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
                    <ProjectMenu {...{ project, deleteProject, editProject, modalOpen, toggleModal }} />
                </div>
            </div>
        </a>
    );
}
