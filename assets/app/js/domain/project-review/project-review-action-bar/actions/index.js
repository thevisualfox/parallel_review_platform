import { SCALE_IN_UP } from '../../../../animations';

export { default as EditAction } from './EditAction';
export { default as PhaseAction } from './PhaseAction';
export { default as PhaseNextAction } from './PhaseNextAction';
export { default as ShareAction } from './ShareAction';

/* Global */
export const modalOptions = {
	renderOnBody: false,
	center: false,
	extensionClasses: 'bar__modal',
	customAnimation: SCALE_IN_UP(20),
};
