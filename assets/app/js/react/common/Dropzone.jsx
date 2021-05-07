/* Packages */
import React from 'react';
import { ReactSVG } from 'react-svg';
import { useDropzone } from 'react-dropzone';
import { AnimatePresence, motion } from 'framer-motion';
import { useMutation, useQueryClient } from 'react-query';

/* Assets */
import closeIcon from 'icons/close.svg';
import addImageIcon from 'icons/add_image.svg';

/* Components */
import { LoadingWrapper } from './';

/* Animations */
import { STAGGER_UP } from './animations';

/* Api */
import { addProjectImages, deleteProjectImages, QUERY_KEYS } from '../api';

export default function Dropzone({ projectId, projectImages }) {
	/* Contants */
	const COLUMN_LAYOUT = 'col-12 col-md-6 col-lg-4 col-xl-3';

	/* Hooks */
	const queryClient = useQueryClient();

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: 'image/*',
		noClick: true,
		onDrop: (acceptedFiles) => updateProjectImages('add', { images: acceptedFiles }),
	});

	/* Mutations */
	const addProjectImagesMutation = useMutation(addProjectImages, {
		onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, projectId]),
	});

	const deleteProjectImagesMutation = useMutation(deleteProjectImages, {
		onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, projectId]),
	});

	/* Callbacks */
	const updateProjectImages = (action, props) => {
		if (action === 'add') addProjectImagesMutation.mutate({ projectId, ...props });
		if (action === 'delete') deleteProjectImagesMutation.mutate({ projectId, ...props });
	};

	/* Render */
	return (
		<div className="dropzone" {...getRootProps()}>
			<input {...getInputProps()} />
			<div className="row row--equalized gutters-5">
				<AnimatePresence initial={false}>
					{projectImages.map(({ image, title, id }, imageIndex) => (
						<motion.div layout {...STAGGER_UP(imageIndex)} className={COLUMN_LAYOUT} key={id}>
							<div className="dropzone__container">
								<img className="dropzone__image img-fluid" src={image} alt={title} />
								<button
									type="button"
									className="btn btn-link dropzone__image-delete p-0"
									onClick={(event) => {
										event.stopPropagation();
										updateProjectImages('delete', { projectImageIds: [id] });
									}}>
									<div
										className="dropzone__image-delete-icon icon-wrapper icon-wrapper--danger mx-auto"
										style={{ '--size': '50px' }}>
										<LoadingWrapper
											loading={deleteProjectImagesMutation.isLoading}
											loaderSize={20}
											classes={{ loaderClasses: 'position-absolute d-flex text-danger' }}>
											<ReactSVG
												wrapper="svg"
												className="icon icon--14 text-danger mt-0"
												src={closeIcon}
											/>
										</LoadingWrapper>
									</div>
								</button>
							</div>
						</motion.div>
					))}
					<motion.div key="add-image" {...STAGGER_UP(projectImages.length)} className={COLUMN_LAYOUT} layout>
						<DropzoneInner
							addImageLoading={addProjectImagesMutation.isLoading}
							{...{ updateProjectImages, isParentDragActive: isDragActive }}
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

/* Inner dropzone */
const DropzoneInner = ({ addImageLoading, updateProjectImages, isParentDragActive }) => {
	/* Hooks */
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: 'image/*',
		noDragEventsBubbling: true,
		onDrop: (acceptedFiles) => updateProjectImages('add', { images: acceptedFiles }),
	});

	/* Render */
	return (
		<div className="dropzone" {...getRootProps()}>
			<input {...getInputProps()} />
			<article
				className={`dropzone__container card card--link card--transparent card--pulse ${
					(isDragActive || isParentDragActive) && 'is-pulsing'
				} h-100 mb-0`}>
				<div className="card-body d-flex align-items-center justify-content-center p-10">
					<LoadingWrapper
						loading={addImageLoading}
						classes={{ loaderClasses: 'position-absolute d-flex text-secondary' }}>
						<span className="btn-text d-flex flex-column align-items-center text-white text-muted--40">
							<ReactSVG wrapper="svg" className="icon icon--48" src={addImageIcon} />
							<span className="text--sm mt-1">
								{isDragActive || isParentDragActive ? 'Drop the images' : 'Add some images'}
							</span>
						</span>
					</LoadingWrapper>
				</div>
			</article>
		</div>
	);
};
