/* Packages */
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* Assets */
import closeIcon from "../../../symbols/close.svg";

export default function Popover({ popOverActive, togglePopover, formRef, addProject }) {
    /* Refs */
    const popoverRef = useRef();
    /* State */
    const [projectTitle, setProjectTitle] = useState("");
    const [position, setPosition] = useState({});

    /* Effects */
    useLayoutEffect(() => {
        if (!popoverRef?.current) return;

        const { x, width, y, height } = popoverRef.current.getBoundingClientRect();

        if (y + height > window.innerHeight) {
            setPosition({
                ...position,
                top: "auto",
                bottom: "0",
            });
        }

        if (x + width > window.innerWidth) {
            setPosition({
                ...position,
                left: "auto",
                right: "calc(100% + 20px)",
            });
        }
    }, [popoverRef?.current]);

    /* Render */
    return (
        <motion.article
            ref={popoverRef}
            className={`popover ${popOverActive && "is-open"}`}
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
            style={{ ...position }}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
            transition={{ ease: [0.65, 0, 0.35, 1] }}>
            <div className="popover__document" role="document">
                <form ref={formRef} method="POST" className="popover__content" onSubmit={addProject}>
                    <div className="popover__header d-flex align-items-center pt-6 mx-6 pb-3">
                        <p className="popover__title text-white text-muted--70 text--lg mb-0">
                            {projectTitle ? projectTitle : "Add project"}
                        </p>
                        <button
                            type="button"
                            className="popover__close btn btn-link ml-auto"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={togglePopover}>
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
                        <div className="row align-items-center gutters-4">
                            <div className="col-auto">
                                <button type="button" className="btn btn-link text-white">
                                    <span className="btn-text text-muted--70">More options</span>
                                </button>
                            </div>
                            <div className="col">
                                <button type="submit" className="popover__btn btn btn-sm btn-block btn-white">
                                    <span className="btn-text">Save project</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </motion.article>
    );
}
