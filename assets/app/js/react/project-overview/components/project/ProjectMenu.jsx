/* Packages */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { useMutation, useQuery, useQueryClient } from "react-query";

/* Assets */
import editIcon from "icons/edit.svg";
import deleteIcon from "icons/delete.svg";
import closeIcon from "icons/close.svg";

/* Animations */
import { SCALE_FADE, STAGGER_LEFT } from "../../../common/animations";

/* Api calls */
import { QUERY_KEYS, deleteProject, fetchProjectById, editProject } from "../../api";
import { ProjectModal } from "../modals";

export default function ProjectMenu({ projectId }) {
    /* Hooks */
    const queryClient = useQueryClient();

    /* Mutations */
    const deleteMutation = useMutation(deleteProject, {
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.PROJECT_BY_USER),
    });

    const editMutation = useMutation(editProject, {
        onSuccess: () => toggleModal(),
    });

    /* State */
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    /* Toggles */
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const toggleModal = () => {
        setModalOpen(!modalOpen);

        if (modalOpen) queryClient.invalidateQueries(QUERY_KEYS.PROJECT_BY_USER);
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
                        <MenuBody
                            {...{ projectId, editMutation, deleteMutation, modalOpen, toggleModal, toggleMenu }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

const MenuBody = ({ projectId, editMutation, deleteMutation, modalOpen, toggleModal, toggleMenu }) => {
    /* Queries */
    const { data: project } = useQuery([QUERY_KEYS.PROJECT_BY_ID, projectId], () => fetchProjectById({ projectId }), {
        enabled: !!projectId,
    });

    /* Callbacks */
    const updateProject = (action) => {
        if (action === "edit") toggleModal();
        if (action === "delete") deleteMutation.mutate({ projectId });
    };

    const onSubmit = (formRef) => editMutation.mutate({ formRef, projectId });

    /* Render */
    return (
        <div className="menu__body">
            <ul className="menu__list list">
                <MenuItem icon={editIcon} index={1} callback={() => updateProject("edit")} />
                <MenuItem icon={deleteIcon} index={0} callback={() => updateProject("delete")} />
            </ul>
            <AnimatePresence onExitComplete={() => toggleMenu()}>
                {modalOpen && <ProjectModal {...{ project, onSubmit, toggleModal }} />}
            </AnimatePresence>
        </div>
    );
};

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
