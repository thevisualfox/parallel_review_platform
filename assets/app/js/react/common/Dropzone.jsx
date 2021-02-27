/* Packages */
import React from "react";
import { useDropzone } from "react-dropzone";
import { v4 as generateUuid } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

/* Assets */
import closeIcon from "../../../symbols/close.svg";
import addImageIcon from "../../../symbols/add_image.svg";

/* Animations */
import { FADE_IN } from "./animations";

export default function Dropzone({ images, setImages }) {
    /* Constants */
    const COLUMN_LAYOUT = "col-12 col-md-6 col-lg-4 col-xl-3";

    /* Hooks */
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        noClick: true,
        onDrop: (acceptedFiles) => addFiles(acceptedFiles),
    });

    /* Callbacks */
    const addFiles = (acceptedFiles) => {
        setImages((files) => [
            ...files,
            ...acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                    id: generateUuid(),
                })
            ),
        ]);
    };

    const deleteFile = (event, id) => {
        event.stopPropagation();

        setImages((files) => [...files.filter((file) => file.id !== id)]);
    };

    /* Render */
    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="row row--equalized gutters-5">
                <AnimatePresence>
                    {images.map(({ preview, id }) => (
                        <motion.div layout {...FADE_IN} className={COLUMN_LAYOUT} key={id}>
                            <div className="dropzone__container">
                                <img className="dropzone__image img-fluid" src={preview} />
                                <button
                                    type="button"
                                    className="btn btn-link dropzone__image-delete p-0"
                                    onClick={(event) => deleteFile(event, id)}>
                                    <svg className="icon icon--8 text-white mt-0">
                                        <use xlinkHref={closeIcon.url}></use>
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                    <motion.div layout {...FADE_IN} className={COLUMN_LAYOUT} key="add_image">
                        <DropzoneInner {...{ addFiles }} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

const DropzoneInner = ({ addFiles }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        noDragEventsBubbling: true,
        onDrop: (acceptedFiles) => addFiles(acceptedFiles),
    });

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <article className="dropzone__container card card--link card--transparent h-100 mb-0">
                <div className="card-body d-flex align-items-center justify-content-center p-10">
                    <span className="btn-text d-flex flex-column align-items-center text-white text-muted--40">
                        <svg className="icon icon--48">
                            <use xlinkHref={addImageIcon.url}></use>
                        </svg>
                        <span className="text--sm mt-1">{isDragActive ? "Drop 'em" : "Drop some images"}</span>
                    </span>
                </div>
            </article>
        </div>
    );
};
