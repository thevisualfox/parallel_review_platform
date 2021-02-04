/* Packages */
import React, { useState } from "react";

/* Assets */
import closeIcon from "../../../symbols/close.svg";

export default function Popover({ popOverActive, togglePopover, formRef, addProject }) {
    /* State */
    const [projectTitle, setProjectTitle] = useState("");

    /* Render */
    return (
        <article className={`popover ${popOverActive && "is-open"}`} tabIndex="-1" role="dialog" aria-hidden="true">
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
        </article>
    );
}
