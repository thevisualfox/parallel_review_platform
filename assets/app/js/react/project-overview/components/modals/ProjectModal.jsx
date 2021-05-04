/* Packages */
import React, { useRef } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';

/* Assets */
import closeIcon from 'icons/close.svg';

/* Components */
import { Modal, Dropzone } from '../../../common';
import { Users } from '../../../components/users';
import { UserAdd } from '../../../components/user-add';

export default function ProjectModal({ project = {}, updateProject, toggleModal }) {
	/* Constants  */
	const { id: projectId = null, title = '', projectImages = [], users = [] } = project;

	/* Refs */
	const formRef = useRef();

	/* Render */
	return (
		<Modal {...{ toggleModal }} domElement={document.body}>
			<form
				ref={formRef}
				method="POST"
				className="custom-modal__form"
				onSubmit={(event) => {
					event.preventDefault();
					toggleModal();
				}}>
				<div className="custom-modal__header d-flex align-items-center pt-6 pt-md-12 px-6 pb-3">
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
						className="custom-modal__close btn btn-link ml-auto"
						data-dismiss="modal"
						aria-label="Close"
						onClick={toggleModal}
						tabIndex="-1">
						<ReactSVG wrapper="svg" className="icon icon--14" src={closeIcon} />
					</button>
				</div>
				<div className="custom-modal__body pt-3 px-6 pb-12">
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
					<Dropzone {...{ projectId, projectImages }} />
				</div>
				<div className="custom-modal__footer px-6 pb-6 pb-md-12">
					<div className="row gutters-0 w-100">
						<div className="col-12 col-lg-1 ml-auto">
							<button
								type="submit"
								className="custom-modal__btn btn btn-block btn-secondary d-flex align-items-center justify-content-center">
								<motion.span className="btn-text">
									<span>Save</span>
								</motion.span>
							</button>
						</div>
					</div>
				</div>
			</form>
		</Modal>
	);
}
