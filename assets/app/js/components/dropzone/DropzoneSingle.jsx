/* Packages */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { ReactSVG } from 'react-svg';

/* Assets */
import addImageIcon from 'icons/add_image.svg';
import uploadImageIcon from 'icons/upload.svg';
import closeIcon from 'icons/close.svg';

/* Components */
import { Image } from '../';

/* Animations */
import { FADE_IN, SCALE_FADE } from '../../animations';

/* Services */
import { resizeImages } from '../../services';

export default function DropzoneSingle({ images: [image], setImages }) {
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: 'image/*',
		maxFiles: 1,
		onDrop: async (acceptedFiles) => {
			const resizedImages = await resizeImages(acceptedFiles);
			setImages(resizedImages);
		},
	});

	/* Render */
	return (
		<div className="dropzone dropzone--single mt-2" {...getRootProps()}>
			<input {...getInputProps()} />
			<AnimatePresence initial={false} exitBeforeEnter>
				{!image && (
					<motion.div
						{...SCALE_FADE}
						className="icon-wrapper icon-wrapper--interactive icon-wrapper--secondary"
						style={{ '--size': 44 }}>
						{isDragActive ? (
							<motion.div key="upload" {...SCALE_FADE}>
								<ReactSVG
									wrapper="svg"
									className="icon icon--20 text-secondary"
									src={uploadImageIcon}
								/>
							</motion.div>
						) : (
							<motion.div key="add" {...SCALE_FADE}>
								<ReactSVG wrapper="svg" className="icon icon--20 text-secondary" src={addImageIcon} />
							</motion.div>
						)}
					</motion.div>
				)}
				{image && (
					<motion.div key="container" {...FADE_IN} className="dropzone__container">
						<Image
							className="dropzone__image"
							src={image.thumbnail.preview}
							srcSet={`${image.thumbnailRetina.preview} 2x`}
							alt={image.thumbnail.name}
						/>
						<button
							type="button"
							className="btn btn-link dropzone__image-delete p-0"
							onClick={(event) => {
								event.stopPropagation();
								setImages([]);
							}}>
							<div
								className="dropzone__image-delete-icon icon-wrapper icon-wrapper--danger mx-auto"
								style={{ '--size': 50 }}>
								<ReactSVG wrapper="svg" className="icon icon--14 text-danger mt-0" src={closeIcon} />
							</div>
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
