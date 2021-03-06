/* Packages */
import React, { useState } from "react";
import axios from "axios";
import { AnimatePresence } from "framer-motion";

/* Components */
import { ProjectModal } from "../modals";

/* Assets */
import addProjectIcon from "icons/add_project.svg";
import { ReactSVG } from "react-svg";

export default function ProjectAdd({ getProjects, editProject }) {
    /* State */
    const [modalOpen, setModalOpen] = useState(false);
    const [projectId, setProjectId] = useState();

    /* Callbacks */
    const addProject = async () => {
        toggleModal(true);

        try {
            const result = await axios.post("/api/projects/add");
            if (result.data) setProjectId(result.data.id);
        } catch (error) {
            throw new Error(error);
        }
    };

    const toggleModal = (event) => {
        setModalOpen(!modalOpen);

        if (event === "close") getProjects();
    };

    /* Render */
    return (
        <article className="card card--link card--transparent h-100 mb-0" style={{ minHeight: 385 }}>
            <div className="card-body d-flex align-items-center justify-content-center p-10">
                <button className="btn btn-link text-decoration-none stretched-link" onClick={addProject}>
                    <span className="btn-text d-flex flex-column align-items-center text-white text-muted--40">
                        <ReactSVG wrapper="svg" className="icon icon--48" src={addProjectIcon} />
                        <span className="text--sm mt-1">Add more projects</span>
                    </span>
                </button>
            </div>
            <AnimatePresence>
                {modalOpen && (
                    <ProjectModal
                        {...{ toggleModal, projectId }}
                        onSubmit={(...props) => editProject(...props, projectId, toggleModal)}
                    />
                )}
            </AnimatePresence>
        </article>
    );
}
