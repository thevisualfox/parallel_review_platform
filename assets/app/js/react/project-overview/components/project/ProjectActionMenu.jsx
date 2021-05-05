/* Packages */
import React from 'react';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';

/* Assets */
import closeIcon from 'icons/close.svg';
import leaveIcon from 'icons/leave.svg';
import archiveIcon from 'icons/archive.svg';

/* Animations */
import { TRANSFORM_UP } from '../../../common/animations';

export default function ProjectActionMenu({ selectedProjects, setSelectedProjects }) {
	return (
		<motion.div {...TRANSFORM_UP} className="bar bar--project">
			<div className="container">
				<div className="row">
					<div className="col-auto d-flex align-items-center">
						<button
							type="button"
							className="btn btn-link text-white"
							onClick={() => setSelectedProjects([])}>
							<ReactSVG wrapper="svg" className="icon icon--14" src={closeIcon} />
						</button>
						<p className="ml-2 mb-0">{selectedProjects.length} selected</p>
					</div>
					<div className="col-auto ml-auto">
						<ul className="bar__list list d-flex align-items-center">
							<li className="list__item">
								<button className="btn btn-link d-flex align-items-center text-decoration-none">
									<div className="icon-wrapper icon-wrapper--warning">
										<ReactSVG
											wrapper="svg"
											className="icon icon--12 text-warning"
											src={leaveIcon}
										/>
									</div>
									<span className="btn__text text-white ml-2">Leave</span>
								</button>
							</li>
							<li className="list__item">
								<button className="btn btn-link d-flex align-items-center text-decoration-none">
									<div className="icon-wrapper icon-wrapper--default">
										<ReactSVG
											wrapper="svg"
											className="icon icon--12 text-secondary"
											src={archiveIcon}
										/>
									</div>
									<span className="btn__text text-white ml-2">Archive</span>
								</button>
							</li>
							<li className="list__item">
								<button className="btn btn-link d-flex align-items-center text-decoration-none">
									<div className="icon-wrapper icon-wrapper--danger">
										<ReactSVG wrapper="svg" className="icon icon--10 text-danger" src={closeIcon} />
									</div>
									<span className="btn__text text-white ml-2">Delete</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
