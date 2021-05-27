/* Packages */
import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';

/* Components */
import { LoadingWrapper } from '../../components';

/* Animations */
import { TRANSFORM_UP } from '../../animations';

/* Assets */
import closeIcon from 'icons/close.svg';

/* Context */
import StaticContext from '../../context/mainContext';

export default function ActionMenu({ selected, resetSelected, actions }) {
	/* Hooks */
	const { userRole } = useContext(StaticContext);

	/* Render */
	return (
		<motion.div {...TRANSFORM_UP} className="bar bar--project">
			<div className="container-fluid">
				<div className="row">
					<div className="col-auto d-flex align-items-center">
						<button
							type="button"
							className="bar__btn btn btn-link d-inline-flex text-white"
							onClick={resetSelected}>
							<ReactSVG wrapper="svg" className="icon icon--14" src={closeIcon} />
						</button>
						<p className="ml-2 mb-0">{selected.length} selected</p>
					</div>
					<div className="col-auto ml-auto">
						<ul className="bar__list list d-flex align-items-center">
							{actions.map(
								(
									{
										title,
										theme,
										hasPermission,
										icon,
										iconSize = 12,
										mutation = () => {},
										isLoading = false,
									},
									actionIndex
								) => {
									if (hasPermission.includes(userRole)) {
										return (
											<li key={actionIndex} className="list__item">
												<button
													className="bar__btn btn btn-link d-flex align-items-center text-decoration-none"
													onClick={mutation}>
													<div
														className={`icon-wrapper icon-wrapper--${theme} icon-wrapper--interactive`}>
														<LoadingWrapper
															loading={isLoading}
															loaderSize={12}
															classes={{
																loaderClasses: `position-absolute d-flex text-${theme}`,
															}}>
															<ReactSVG
																wrapper="svg"
																className={`icon icon--${iconSize} text-${theme}`}
																src={icon}
															/>
														</LoadingWrapper>
													</div>
													<span className="btn__text text-white ml-2">{title}</span>
												</button>
											</li>
										);
									}
								}
							)}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
