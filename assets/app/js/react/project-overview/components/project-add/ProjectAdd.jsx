/* Packages */
import React, { useState } from "react";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useSetRecoilState } from "recoil";

/* Components */
import { ProjectModal } from "../modals";

/* Assets */
import addProjectIcon from "../../../../../symbols/add_project.svg";

/* Atoms */
import { loadingState } from "../../state";

export default function ProjectAdd({ getProjects }) {
    /* State */
    const [modalOpen, setModalOpen] = useState(false);
    const setLoading = useSetRecoilState(loadingState);

    /* Callbacks */
    const addProject = async (event, formRef, images) => {
        event.preventDefault();

        const params = new FormData(formRef.current);
        images.forEach((image) => params.append("images[]", image));

        try {
            setLoading("add_project");

            const result = await axios.post("/projects/add", params);

            if (result.data.success) {
                getProjects();
                toggleModal();
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    const toggleModal = () => setModalOpen(!modalOpen);

    /* Render */
    return (
        <article className="card card--link card--transparent h-100 mb-0" style={{ minHeight: 385 }}>
            <div className="card-body d-flex align-items-center justify-content-center p-10">
                <button className="btn btn-link text-decoration-none stretched-link" onClick={toggleModal}>
                    <span className="btn-text d-flex flex-column align-items-center text-white text-muted--40">
                        <svg className="icon icon--48">
                            <use xlinkHref={addProjectIcon.url}></use>
                        </svg>
                        <span className="text--sm mt-1">Add more projects</span>
                    </span>
                </button>
            </div>
            <AnimatePresence>
                {modalOpen && (
                    <ProjectModal
                        {...{
                            toggleModal,
                            onSubmit: addProject,
                            titlePlaceholder: "The project name",
                            descriptionPlaceholder: `What's this project about?`,
                        }}
                    />
                )}
            </AnimatePresence>
        </article>
    );
}
