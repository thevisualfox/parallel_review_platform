/* Packages */
import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

/* Animations */
import { FADE_IN, TRANSFORM_UP } from "./animations";

export default function Modal({ toggleModal, children, domElement, variant = "default" }) {
    const render = () => (
        <div key="custom-modal" className={`custom-modal custom-modal--${variant}`}>
            <motion.div className="custom-modal__overlay" onClick={toggleModal} {...FADE_IN} />
            <motion.article key="custom-modal__content" className="custom-modal__content" {...TRANSFORM_UP}>
                <div className="container px-0">{children}</div>
            </motion.article>
        </div>
    );

    /* Render */
    if (domElement) {
        return createPortal(render(), domElement);
    }

    return render();
}
