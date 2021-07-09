/* Packages */
import React, { useRef } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { ReactSVG } from 'react-svg';
import { AnimatePresence, motion } from 'framer-motion';

/* Assets */
import closeIcon from 'icons/close.svg';

/* Components */
import { Dropzone, LoadingWrapper, SlideIn, Users, UserAdd, Image } from '../../components';

/* Animations */
import { STAGGER_UP } from '../../animations';

export default function ProjectSlideIn({ project = {}, updateProject, toggleSlideIn }) {
	/* Constants  */
	const { id: projectId = null, title = '', projectImages = [], users = [] } = project;

	/* Refs */
	const formRef = useRef();

	/* Render */
	return (
		<SlideIn {...{ toggleSlideIn }} domElement={document.body}>
			<form
				ref={formRef}
				method="POST"
				className="slide-in__form"
				onSubmit={(event) => {
					event.preventDefault();
					toggleSlideIn();
				}}>
				<div className="slide-in__header d-flex align-items-center pt-6 pt-md-12 pb-3">
					<label className="sr-only" htmlFor="projectTitle">
						{title}
					</label>
					<input
						type="text"
						className="form-control form-control--clear text--xl"
						id="projectTitle"
						name="title"
						placeholder="The project name"
						onBlur={() => updateProject(formRef)}
						autoFocus
					/>
					<button
						type="button"
						className="slide-in__close btn btn-link ml-auto"
						data-dismiss="modal"
						aria-label="Close"
						onClick={toggleSlideIn}
						tabIndex="-1">
						<ReactSVG wrapper="svg" className="icon icon--14" src={closeIcon} />
					</button>
				</div>
				<div className="slide-in__body pt-3 pb-12">
					<div className="row gutters-2">
						<div className="col-6">
							<label className="sr-only" htmlFor="projectDescription">
								{`What's this project about?`}
							</label>
							<TextareaAutosize
								className="form-control form-control--text form-control--clear mb-10"
								id="projectDescription"
								name="description"
								placeholder="What's this project about?"
								onBlur={() => updateProject(formRef)}
							/>
						</div>
						<div className="col-auto d-flex align-items-baseline ml-auto">
							<Users {...{ users, project }} size="lg" />
							<UserAdd {...{ users, project }} />
						</div>
					</div>
					<Dropzone {...{ projectId, projectImages }}>
						{({ updateProjectImages, isLoading }) => (
							<AnimatePresence>
								{projectImages.map((projectImage, projectImageIndex) => (
									<DropzoneImage
										key={projectImage.id}
										{...{ projectImage, projectImageIndex, updateProjectImages, isLoading }}
									/>
								))}
							</AnimatePresence>
						)}
					</Dropzone>
				</div>
				<div className="slide-in__footer pb-6 pb-md-12">
					<div className="row gutters-0 w-100">
						<div className="col-12 col-lg-1 ml-auto">
							<button
								type="submit"
								className="slide-in__btn btn btn-block btn-secondary d-flex align-items-center justify-content-center">
								<motion.span className="btn-text">
									<span>Save</span>
								</motion.span>
							</button>
						</div>
					</div>
				</div>
			</form>
		</SlideIn>
	);
}

const DropzoneImage = ({ projectImage, projectImageIndex, updateProjectImages, isLoading }) => {
	const { title, id, phase = {} } = projectImage;

	return (
		<motion.div
			layout
			{...STAGGER_UP(projectImageIndex)}
			className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2"
			key={id}>
			<div className="dropzone__container">
				<Image
					className="dropzone__image img-fluid"
					src={phase.image.thumbnail}
					srcSet={`${phase.image.thumbnailRetina} 2x`}
					alt={title}
				/>
				<button
					type="button"
					className="btn btn-link dropzone__image-delete p-0"
					onClick={(event) => {
						event.stopPropagation();
						updateProjectImages('delete', { projectImageIds: [id] });
					}}>
					<div
						className="dropzone__image-delete-icon icon-wrapper icon-wrapper--danger mx-auto"
						style={{ '--size': 50 }}>
						<LoadingWrapper
							loading={isLoading}
							loaderSize={20}
							classes={{
								loaderClasses: 'position-absolute d-flex text-danger',
							}}>
							<ReactSVG wrapper="svg" className="icon icon--14 text-danger mt-0" src={closeIcon} />
						</LoadingWrapper>
					</div>
				</button>
			</div>
		</motion.div>
	);
};
