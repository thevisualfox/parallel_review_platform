/* Packages */
import React from 'react';
import { ReactSVG } from 'react-svg';
import { useDropzone } from 'react-dropzone';
import { AnimatePresence, motion } from 'framer-motion';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { LoadingWrapper } from '../../components';

/* Animations */
import { SCALE_FADE, FADE_IN } from '../../animations';

/* Assets */
import addImageIcon from 'icons/add_image.svg';
import uploadImageIcon from 'icons/upload.svg';

/* Api */
import { addProjectImages, deleteProjectImages, QUERY_KEYS } from '../../api';

export default function Dropzone({ projectId, positition = 'left', children }) {
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
			<DropzoneInner
				addImageLoading={addProjectImagesMutation.isLoading}
				{...{ updateProjectImages, isParentDragActive: isDragActive, positition }}
			/>
			<div className="row row--equalized gutters-5">
				{children({ updateProjectImages, isLoading: deleteProjectImagesMutation.isLoading })}
			</div>
		</div>
	);
}

/* Inner dropzone */
const DropzoneInner = ({ addImageLoading, updateProjectImages, isParentDragActive, positition }) => {
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
			<AnimatePresence>
				{(isDragActive || isParentDragActive) && (
					<motion.div {...FADE_IN} className="dropzone__overlay">
						<div className="icon-wrapper icon-wrapper--secondary" style={{ '--size': 75 }}>
							<ReactSVG wrapper="svg" className="icon icon--30 text-secondary" src={uploadImageIcon} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.button
				{...SCALE_FADE}
				key="add-project"
				type="button"
				className={`icon-wrapper icon-wrapper--interactive icon-wrapper--secondary btn btn-link btn--add btn--add-${positition}`}
				style={{ '--size': 75 }}>
				<LoadingWrapper
					loading={addImageLoading}
					classes={{ loaderClasses: 'position-absolute d-flex text-secondary' }}
					loaderSize={30}>
					<ReactSVG wrapper="svg" className="icon icon--30 text-secondary" src={addImageIcon} />
				</LoadingWrapper>
			</motion.button>
		</div>
	);
};
