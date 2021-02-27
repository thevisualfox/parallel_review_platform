/* Packages */
import React, { useRef, useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextareaAutosize } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";

/* Assets */
import closeIcon from "../../../symbols/close.svg";

/* Components */
import { Dropzone } from "./";

/* Animations */
import { FADE_IN, TRANSFORM_UP } from "./animations";

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
        <motion.div key="popover" className="popover" {...FADE_IN}>
            <div className="popover__overlay" onClick={toggleModal} />
            <motion.article key="popover__content" className="popover__content" {...TRANSFORM_UP}>
                <div className="container px-0">
                    <form ref={formRef} method="POST" className="popover__form" onSubmit={addProject}>
                        <div className="popover__header d-flex align-items-center pt-6 pt-md-12 px-6 pb-6">
                            <label className="sr-only" htmlFor="projectTitle">
                                {projectTitle}
                            </label>
                            <input
                                type="text"
                                className="form-control form-control--clear text--xl"
                                id="projectTitle"
                                name="title"
                                placeholder="The project name"
                                value={projectTitle}
                                onChange={({ target: { value } }) => setProjectTitle(value)}
                                required
                                autoFocus
                            />
                            <button
                                type="button"
                                className="popover__close btn btn-link ml-auto"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={toggleModal}>
                                <svg className="icon icon--14">
                                    <use xlinkHref={closeIcon.url}></use>
                                </svg>
                            </button>
                        </div>
                        <div className="popover__body px-6 pb-12">
                            <label className="sr-only" htmlFor="projectDescription">
                                {`What's this project about?`}
                            </label>
                            <TextareaAutosize
                                className="form-control form-control--text form-control--clear mb-10"
                                id="projectDescription"
                                name="description"
                                placeholder="What's this project about?"
                            />
                            <Dropzone {...{ images, setImages }} />
                        </div>
                        <div className="popover__footer px-6 pb-6 pb-md-12">
                            <button
                                type="submit"
                                className="popover__btn btn btn-sm btn-white d-flex align-items-center justify-content-center ml-auto px-8">
                                <motion.span className="btn-text">
                                    <span>{loading ? "Saving" : "Save"}</span>
                                </motion.span>
                                <AnimatePresence>
                                    {loading && (
                                        <motion.div className="ml-2" {...FADE_IN} key="loader">
                                            <CircularProgress size={14} color="#141414" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </form>
                </div>
            </motion.article>
        </motion.div>
    );
}
