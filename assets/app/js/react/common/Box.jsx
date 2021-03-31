/* Packages */
import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ReactSVG } from "react-svg";

/* Animations */
import { FADE_IN, FADE_IN_UP } from "./animations";

/* Assets */
import closeIcon from "icons/close.svg";

export default function Box({ header, content, boxOpen, toggleBox, children }) {
    return createPortal(
        <AnimatePresence>
            {boxOpen && (
                <div className="box">
                    <motion.div className="box-overlay" {...FADE_IN} />
                    <motion.div key="box-content" className="box__content border p-5" {...FADE_IN_UP}>
                        <div className="box__header d-flex align-items-baseline">
                            <div className="d-flex flex-column">
                                <p className="text--lg mb-1">{header}</p>
                                <p className="text-muted--60 mb-0">{content}</p>
                            </div>
                            <button
                                type="button"
                                className="custom-modal__close btn btn-link ml-auto"
                                onClick={toggleBox}>
                                <ReactSVG wrapper="svg" className="icon icon--12" src={closeIcon} />
                            </button>
                        </div>
                        <div className="box__body d-flex mt-4">{children}</div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
