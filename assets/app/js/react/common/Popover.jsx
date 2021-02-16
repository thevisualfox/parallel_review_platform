/* Packages */
import React, { useState } from "react";
import { motion } from "framer-motion";

/* Assets */
import closeIcon from "../../../symbols/close.svg";

/* Animations */
const EASE = [0.65, 0, 0.35, 1];

const FADE_IN = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
    transition: {
        ease: EASE,
    },
};

const FADE_IN_UP = {
    initial: {
        opacity: 0,
        y: 35,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 35,
    },
    transition: {
        ease: EASE,
    },
};

export default function Popover({ addProject, formRef, toggleModal }) {
    /* State */
    const [projectTitle, setProjectTitle] = useState("");

    /* Render */
    return (
        <div className="popover">
            <motion.div className="popover__overlay" {...FADE_IN} onClick={toggleModal} />
            <motion.article className="popover__content" {...FADE_IN_UP}>
                <form ref={formRef} method="POST" className="popover__form" onSubmit={addProject}>
                    <div className="popover__header d-flex align-items-center pt-6 mx-6 pb-3">
                        <p className="popover__title text-white text-muted--70 text--lg mb-0">
                            {projectTitle ? projectTitle : "Add project"}
                        </p>
                        <button
                            type="button"
                            className="popover__close btn btn-link ml-auto"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={toggleModal}>
                            <svg className="icon icon--14 text-white">
                                <use xlinkHref={closeIcon.url}></use>
                            </svg>
                        </button>
                    </div>
                    <div className="popover__body p-6">
                        <div className="row gutters-2">
                            <div className="col-12">
                                <label className="sr-only" htmlFor="projectTitle">
                                    Project title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="projectTitle"
                                    name="title"
                                    placeholder="Project title"
                                    value={projectTitle}
                                    onChange={({ target: { value } }) => setProjectTitle(value)}
                                    required
                                    autoFocus
                                />
                            </div>
                            <div className="col-12">
                                <label className="sr-only" htmlFor="projectDescription">
                                    {`What's this project about?`}
                                </label>
                                <textarea
                                    className="form-control form-control--text"
                                    id="projectDescription"
                                    name="description"
                                    placeholder="What's this project about?"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="popover__footer px-6 pb-6">
                        <button type="submit" className="popover__btn btn btn-sm btn-block btn-white">
                            <span className="btn-text">Save project</span>
                        </button>
                    </div>
                </form>
            </motion.article>
        </div>
    );
}
