/* Packages */
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { v4 as generateUuid } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

/* Assets */
import closeIcon from "../../../symbols/close.svg";
import addImageIcon from "../../../symbols/add_image.svg";

/* Animations */
import { FADE_IN } from "./animations";

export default function Dropzone() {
    /* State */
    const [files, setFiles] = useState([]);

    /* Hooks */
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => addFiles(acceptedFiles),
    });

    /* Callbacks */
    const addFiles = (acceptedFiles) => {
        setFiles((files) => [
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

        setFiles((files) => [...files.filter((file) => file.id !== id)]);
    };

    /* Render */
    return (
        <div
            className={`dropzone d-flex ${
                files.length === 0 ? "align-items-center justify-content-center p-5 p-lg-1" : "align-items-baseline p-1"
            }`}
            {...getRootProps()}>
            <input {...getInputProps()} />
            {files.length > 0 && (
                <div className="row row--equalized gutters-1">
                    <AnimatePresence>
                        {files.map(({ preview, id }) => (
                            <motion.div layout {...FADE_IN} className="col-4" key={id}>
                                <div className="dropzone__image-container">
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
                    </AnimatePresence>
                </div>
            )}
            {files.length === 0 && (
                <div className="d-flex align-items-center flex-column">
                    <svg className="icon icon--48 text-white text-muted--40">
                        <use xlinkHref={addImageIcon.url}></use>
                    </svg>
                    <p className="mt-2 text-white text-muted--40">{isDragActive ? "Drop 'em" : "Drop some images"}</p>
                </div>
            )}
        </div>
    );
}
