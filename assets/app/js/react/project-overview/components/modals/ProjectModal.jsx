/* Packages */
import React, { useRef, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { ReactSVG } from "react-svg";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";

/* Assets */
import closeIcon from "icons/close.svg";

/* Components */
import { Modal, Dropzone, Users } from "../../../common";

/* Atoms */
import { loadingState } from "../../state";

/* Animations */
import { FADE_IN } from "../../../common/animations";

export default function ProjectModal({
    toggleModal,
    projectId,
    onSubmit,
    title = "",
    description = "",
    projectImages = [],
    users = [],
    titlePlaceholder = "The project name",
    descriptionPlaceholder = "What's this project about?",
}) {
    /* Refs */
    const formRef = useRef();

    /* State */
    const [projectTitle, setProjectTitle] = useState(title);
    const [projectDescription, setProjectDescription] = useState(description);
    const loading = useRecoilValue(loadingState);

    /* Render */
    return (
        <Modal {...{ toggleModal }} domElement={document.body}>
            <form
                ref={formRef}
                method="POST"
                className="custom-modal__form"
                onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit(formRef);
                }}>
                <div className="custom-modal__header d-flex align-items-center pt-6 pt-md-12 px-6 pb-6">
                    <label className="sr-only" htmlFor="projectTitle">
                        {projectTitle}
                    </label>
                    <input
                        type="text"
                        className="form-control form-control--clear text--xl"
                        id="projectTitle"
                        name="title"
                        placeholder={titlePlaceholder}
                        value={projectTitle}
                        onChange={({ target: { value } }) => setProjectTitle(value)}
                        required
                        autoFocus
                    />
                    <button
                        type="button"
                        className="custom-modal__close btn btn-link ml-auto"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => toggleModal("close")}
                        tabIndex="-1">
                        <ReactSVG wrapper="svg" className="icon icon--14" src={closeIcon} />
                    </button>
                </div>
                <div className="custom-modal__body px-6 pb-12">
                    <div className="row gutters-2">
                        <div className="col-6">
                            <label className="sr-only" htmlFor="projectDescription">
                                {`What's this project about?`}
                            </label>
                            <TextareaAutosize
                                className="form-control form-control--text form-control--clear mb-10"
                                id="projectDescription"
                                name="description"
                                placeholder={descriptionPlaceholder}
                                value={projectDescription}
                                onChange={({ target: { value } }) => setProjectDescription(value)}
                            />
                        </div>
                        <div className="col-auto ml-auto">
                            <Users {...{ users, formRef }} variant="lg" showAddUser />
                        </div>
                    </div>
                    <Dropzone {...{ projectId, projectImages }} />
                </div>
                <div className="custom-modal__footer px-6 pb-6 pb-md-12">
                    <div className="row gutters-0 w-100">
                        <div className="col-12 col-lg-3 col-xl-2 ml-auto">
                            <button
                                type="submit"
                                className="custom-modal__btn btn btn-block btn-sm btn-white d-flex align-items-center justify-content-center">
                                <motion.span className="btn-text">
                                    <span>{loading ? "Saving..." : "Save"}</span>
                                </motion.span>
                                <div className="btn__loader">
                                    <AnimatePresence>
                                        {loading && (
                                            <motion.div {...FADE_IN} key="loader">
                                                <LinearProgress />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    );
}
