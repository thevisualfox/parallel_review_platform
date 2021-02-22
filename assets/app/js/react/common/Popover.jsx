/* Packages */
import React, { useState } from "react";
import { motion } from "framer-motion";

/* Assets */
import closeIcon from "../../../symbols/close.svg";

/* Components */
import { Dropzone } from "./";

/* Animations */
import { FADE_IN, FADE_IN_UP } from "./animations";

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
                            {projectTitle ? projectTitle : "New project"}
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
                            <div className="col-12 col-md-6">
                                <Dropzone />
                            </div>
                            <div className="col-12 col-md-6">
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
                                    <div className="col-12 mt-4">
                                        <button type="submit" className="popover__btn btn btn-sm btn-block btn-white">
                                            <span className="btn-text">Save project</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </motion.article>
        </div>
    );
}
