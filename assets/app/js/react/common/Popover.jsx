/* Packages */
import React, { useRef, useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AnimatePresence, motion } from "framer-motion";

/* Assets */
import closeIcon from "../../../symbols/close.svg";

/* Components */
import { Dropzone } from "./";

/* Animations */
import { FADE_IN, FADE_IN_UP } from "./animations";

export default function Popover({ toggleModal, getProjects }) {
    /* State */
    const [projectTitle, setProjectTitle] = useState("");
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    /* Refs */
    const formRef = useRef();

    /* Callbacks */
    const addProject = async (event) => {
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
            /* TODO: add error management */
            throw new Error(error);
        }
    };

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
                                <Dropzone {...{ images, setImages }} />
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
                                        <button
                                            type="submit"
                                            className="popover__btn btn btn-sm btn-block btn-white d-flex align-items-center justify-content-center">
                                            <motion.span className="btn-text mr-2">
                                                <span>{loading ? "Saving" : "Save project"}</span>
                                            </motion.span>
                                            <AnimatePresence>
                                                {loading && (
                                                    <motion.div {...FADE_IN} key="loader">
                                                        <CircularProgress size={14} color="#141414" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
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
