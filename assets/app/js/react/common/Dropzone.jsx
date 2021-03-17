/* Packages */
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { useDropzone } from "react-dropzone";
import { AnimatePresence, motion } from "framer-motion";
import { useMutation } from "react-query";

/* Assets */
import closeIcon from "icons/close.svg";
import addImageIcon from "icons/add_image.svg";

/* Animations */
import { STAGGER_UP } from "./animations";

/* Api calls */
import { addProjectImages, deleteProjectImages } from "../project-overview/api";

export default function Dropzone({ id, projectImages }) {
    /* Contants */
    const COLUMN_LAYOUT = "col-12 col-md-6 col-lg-4 col-xl-3";

    /* Hooks */
    const addProjectImagesMutation = useMutation(addProjectImages, {
        onSuccess: ({ images }) => setImages(images),
    });

    const deleteProjectImagesMutation = useMutation(deleteProjectImages, {
        onSuccess: ({ images }) => setImages(images),
    });

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        noClick: true,
        onDrop: (acceptedFiles) => updateProjectImages("add", { images: acceptedFiles }),
    });

    /* State */
    const [images, setImages] = useState(projectImages);

    /* Callbacks */
    const updateProjectImages = (action, props) => {
        if (action === "add") addProjectImagesMutation.mutate({ projectId: id, ...props });
        if (action === "delete") deleteProjectImagesMutation.mutate({ projectId: id, ...props });
    };

    /* Render */
    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="row row--equalized gutters-5">
                <AnimatePresence initial={false}>
                    {images.map(({ image, title, id }, imageIndex) => (
                        <motion.div layout {...STAGGER_UP(imageIndex)} className={COLUMN_LAYOUT} key={id}>
                            <div className="dropzone__container">
                                <img className="dropzone__image img-fluid" src={image} alt={title} />
                                <button
                                    type="button"
                                    className="btn btn-link dropzone__image-delete p-0"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        updateProjectImages("delete", { id });
                                    }}>
                                    <ReactSVG wrapper="svg" className="icon icon--8 text-base mt-0" src={closeIcon} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                    <motion.div key="add-image" {...STAGGER_UP(images.length)} className={COLUMN_LAYOUT} layout>
                        <DropzoneInner {...{ updateProjectImages, isParentDragActive: isDragActive }} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

/* Inner dropzone */
const DropzoneInner = ({ updateProjectImages, isParentDragActive }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        noDragEventsBubbling: true,
        onDrop: (acceptedFiles) => updateProjectImages("add", { images: acceptedFiles }),
    });

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <article
                className={`dropzone__container card card--link ${
                    (isDragActive || isParentDragActive) && "is-pulsing"
                } card--transparent h-100 mb-0`}>
                <div className="card-body d-flex align-items-center justify-content-center p-10">
                    <span className="btn-text d-flex flex-column align-items-center text-white text-muted--40">
                        <ReactSVG wrapper="svg" className="icon icon--48" src={addImageIcon} />
                        <span className="text--sm mt-1">
                            {isDragActive || isParentDragActive ? "Drop the images" : "Add some images"}
                        </span>
                    </span>
                </div>
            </article>
        </div>
    );
};
