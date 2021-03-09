/* Packages */
import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

/* Animations */
import { FADE_IN, TRANSFORM_UP } from "./animations";

export default function Modal({ toggleModal, children, domElement, variant = "default" }) {
    const render = () => (
        <motion.div key="custom-modal" className={`custom-modal custom-modal--${variant}`} {...FADE_IN}>
            <div className="custom-modal__overlay" onClick={toggleModal} />
            <motion.article key="custom-modal__content" className="custom-modal__content" {...TRANSFORM_UP}>
                <div className="container px-0">{children}</div>
            </motion.article>
        </motion.div>
    );

    /* Render */
    if (domElement) {
        return createPortal(render(), domElement);
    }

    return render();
}
