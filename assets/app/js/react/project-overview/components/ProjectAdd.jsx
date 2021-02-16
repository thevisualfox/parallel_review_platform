/* Packages */
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

/* Assets */
import addProjectIcon from "../../../../symbols/add_project.svg";

/* Components */
import { Popover } from "../../common";

export default function ProjectAdd({ addProject, formRef }) {
    /* State */
    const [modalOpen, setModalOpen] = useState(false);

    /* Functions */
    const toggleModal = () => setModalOpen(!modalOpen);

    return (
        <div className="position-relative">
            <article className="card card--link card--transparent h-100 mb-0" style={{ minHeight: 335 }}>
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
            </article>
            <AnimatePresence exitBeforeEnter>
                {modalOpen && <Popover {...{ addProject, formRef, toggleModal }} />}
            </AnimatePresence>
        </div>
    );
}
