/* Packages */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Assets */
import editIcon from "../../../../../symbols/edit.svg";
import deleteIcon from "../../../../../symbols/delete.svg";
import closeIcon from "../../../../../symbols/close.svg";

/* Animations */
import { SCALE_FADE, STAGGER_LEFT } from "../../../common/animations";

/* Components */
import { ProjectModal } from "../modals";

export default function ProjectMenu({ project, deleteProject, editProject, modalOpen, toggleModal }) {
    /* Callbacks */
    const toggleMenu = () => setMenuOpen(!menuOpen);

    /* Constants */
    const MENU_ITEMS = [
        {
            name: "edit",
            icon: editIcon,
            callback: toggleModal,
        },
        {
            name: "delete",
            icon: deleteIcon,
            callback: deleteProject,
        },
    ];

    /* State */
    const [menuOpen, setMenuOpen] = useState(false);

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
                                <svg className="icon icon--14 text-white">
                                    <use xlinkHref={closeIcon.url}></use>
                                </svg>
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
                                {MENU_ITEMS.map(({ name, icon, callback }, itemIndex) => (
                                    <motion.li
                                        key={name}
                                        className="list__item mr-2"
                                        {...STAGGER_LEFT((itemIndex + 1) * -1 + MENU_ITEMS.length + 1)}>
                                        <button
                                            className="btn btn-link text-white d-flex align-items-center"
                                            onClick={(event) => {
                                                event.preventDefault();

                                                callback(project.id);
                                                toggleMenu();
                                            }}
                                            type="button">
                                            <svg className="icon icon--16 text-white mr-2">
                                                <use xlinkHref={icon.url}></use>
                                            </svg>
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {modalOpen && (
                        <ProjectModal
                            {...{ toggleModal, projectId: project.id, ...project }}
                            onSubmit={(formRef) => editProject(formRef, project.id, toggleModal)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
