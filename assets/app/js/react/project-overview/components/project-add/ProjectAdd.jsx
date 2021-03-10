/* Packages */
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useMutation, useQueryClient } from "react-query";

/* Components */
import { ProjectModal } from "../modals";

/* Assets */
import addProjectIcon from "icons/add_project.svg";
import { ReactSVG } from "react-svg";

/* Api calls */
import { addProject, API_KEYS, editProject } from "../../api";

export default function ProjectAdd() {
    /* Constants */
    const queryClient = useQueryClient();

    /* State */
    const [modalOpen, setModalOpen] = useState(false);
    const [projectId, setProjectId] = useState(false);

    /* Hooks */
    const addMutation = useMutation(addProject, {
        onSuccess: ({ id }) => setProjectId(id),
    });

    const editMutation = useMutation(editProject, {
        onSuccess: () => toggleAddModal(),
    });

    /* Callbacks */
    const toggleAddModal = () => {
        setModalOpen(!modalOpen);

        /* Mutate on modal open */
        if (!modalOpen) addMutation.mutate();

        /* Invalidate project_by_user on close modal */
        if (modalOpen) queryClient.invalidateQueries(API_KEYS.PBU);
    };

    const onSubmit = (formRef) => editMutation.mutate({ formRef, projectId });

    /* Render */
    return (
        <article className="card card--link card--transparent h-100 mb-0" style={{ minHeight: 385 }}>
            <div className="card-body d-flex align-items-center justify-content-center p-10">
                <button
                    className="btn btn-link text-decoration-none stretched-link"
                    onClick={toggleAddModal}
                    type="button">
                    <span className="btn-text d-flex flex-column align-items-center text-white text-muted--40">
                        <ReactSVG wrapper="svg" className="icon icon--48" src={addProjectIcon} />
                        <span className="text--sm mt-1">Add more projects</span>
                    </span>
                </button>
            </div>
            <AnimatePresence>
                {modalOpen && <ProjectModal toggleModal={toggleAddModal} {...{ projectId, onSubmit }} />}
            </AnimatePresence>
        </article>
    );
}
