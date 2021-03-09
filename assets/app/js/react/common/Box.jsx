/* Packages */
import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

/* Animations */
import { FADE_IN } from "./animations";
import { ReactSVG } from "react-svg";

/* Assets */
import closeIcon from "icons/close.svg";

export default function Box({ header, boxOpen, toggleBox, children }) {
    return createPortal(
        <AnimatePresence>
            {boxOpen && (
                <>
                    <motion.div key="box-overlay" className="box-overlay" onClick={toggleBox} {...FADE_IN} />
                    <motion.div key="box" className="box border p-5" {...FADE_IN}>
                        <div className="box__header d-flex align-items-center">
                            <p className="text-white mb-0">{header}</p>
                            <button
                                type="button"
                                className="custom-modal__close btn btn-link ml-auto"
                                onClick={toggleBox}>
                                <ReactSVG wrapper="svg" className="icon icon--14" src={closeIcon} />
                            </button>
                        </div>
                        <div className="box__body d-flex mt-4">{children}</div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
