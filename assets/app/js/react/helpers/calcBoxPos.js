export default function calcBoxPos(boxRef, markerPos) {
	const markerSpacer = 10;
	const markerSize = 20;
	const offset = markerSize + markerSpacer;

	/* Get position of marker */
	const { x, y, reviewPos } = markerPos;

	/* Get dimensions of current box */
	const { width: boxWidth = 400, height: boxHeight = 228 } = boxRef?.current?.getBoundingClientRect() || {};

	/* Get dimensions of current screen */
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight - reviewPos.top;

	/* Set x and y values to percentage equivelent to make the box responsive */
	let xPercent = offset;
	let yPercent = offset;

	/* Compensate for the boxWidth if marker is at end of horizontal screen */
	if (screenWidth - x < boxWidth) {
		xPercent = -boxWidth - markerSize;
	}

	/* Compensate for the boxHeight if marker is at end of vertical screen */
	if (screenHeight - y < boxHeight) {
		yPercent = -boxHeight - markerSpacer;
	}

	return { x: `${xPercent}px`, y: `${yPercent}px` };
}
