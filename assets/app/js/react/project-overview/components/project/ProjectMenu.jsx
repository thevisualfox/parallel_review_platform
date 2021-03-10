/* Packages */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { useMutation, useQueryClient } from "react-query";

/* Assets */
import editIcon from "icons/edit.svg";
import deleteIcon from "icons/delete.svg";
import closeIcon from "icons/close.svg";

/* Animations */
import { SCALE_FADE, STAGGER_LEFT } from "../../../common/animations";

/* Components */
import { ProjectModal } from "../modals";

/* Api calls */
import { API_KEYS, deleteProject, editProject } from "../../api";

export default function ProjectMenu({ project }) {
    /* Constants */
    const queryClient = useQueryClient();
    const { id: projectId } = project;

    /* Hooks */
    const deleteMutation = useMutation(deleteProject, {
        onSuccess: () => queryClient.invalidateQueries(API_KEYS.PBU),
    });

    const editMutation = useMutation(editProject, {
        onSuccess: () => {
            queryClient.invalidateQueries(API_KEYS.PBU);
            toggleEditModal();
        },
    });

    /* State */
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    /* Toggles */
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const toggleEditModal = () => {
        setMenuOpen(false);
        setModalOpen(!modalOpen);
    };

    /* Callbacks */
    const onSubmit = (formRef) => editMutation.mutate({ formRef, projectId });

    const updateProject = (action) => {
        if (action === "edit") toggleEditModal();
        if (action === "delete") deleteMutation.mutate({ projectId: project.id });
    };

    /* Render */
    return (
        <div className={`card__menu menu ${menuOpen && "is-active"}`}>
            <div className="menu__wrapper position-relative">
                <button
                    className="btn btn-link position-relative"
                    type="button"
                    onClick={(event) => {
                        event.preventDefault();
                        toggleMenu();
                    }}>
                    <AnimatePresence exitBeforeEnter initial={false}>
                        {menuOpen ? (
                            <motion.div key="close" className="menu__dots" {...SCALE_FADE}>
                                <ReactSVG wrapper="svg" className="icon icon--14 text-white" src={closeIcon} />
                            </motion.div>
                        ) : (
                            <motion.div key="dots" className="menu__dots" {...SCALE_FADE}>
                                <span className="menu__dot"></span>
                                <span className="menu__dot"></span>
                                <span className="menu__dot"></span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
                <AnimatePresence>
                    {menuOpen && (
                        <div className="menu__body">
                            <ul className="menu__list list">
                                <MenuItem icon={editIcon} index={1} callback={() => updateProject("edit")} />
                                <MenuItem icon={deleteIcon} index={0} callback={() => updateProject("delete")} />
                            </ul>
                        </div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {modalOpen && (
                        <ProjectModal toggleModal={toggleEditModal} {...{ ...project, projectId, onSubmit }} />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

const MenuItem = ({ icon, index, callback }) => (
    <motion.li className="list__item mr-2" {...STAGGER_LEFT(index)}>
        <button
            className="btn btn-link text-white d-flex align-items-center"
            onClick={(event) => {
                event.preventDefault();
                callback();
            }}
            type="button">
            <ReactSVG wrapper="svg" className="icon icon--16 text-white mr-2" src={icon} />
        </button>
    </motion.li>
);
