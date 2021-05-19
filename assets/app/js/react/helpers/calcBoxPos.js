export default function calcBoxPos(boxRef, markerPos, cursorOffset = 20) {
	/* Get position of marker */
	const { x, y, reviewPos } = markerPos;

	/* Get dimensions of current box */
	const { width: boxWidth, height: boxHeight } = boxRef?.current?.getBoundingClientRect() || {};

	/* Get dimensions of current screen */
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight - reviewPos.top;

	/* Set x and y values to percentage equivelent to make the box responsive */
	let xPercent = ((x + cursorOffset) / reviewPos.width) * 100;
	let yPercent = ((y + cursorOffset) / reviewPos.height) * 100;

	/* Compensate for the boxWidth if marker is at end of horizontal screen */
	if (screenWidth - x < boxWidth) {
		xPercent = ((x - boxWidth) / reviewPos.width) * 100;
	}

	/* Compensate for the boxHeight if marker is at end of vertical screen */
	if (screenHeight - y < boxHeight) {
		yPercent = ((y - boxHeight) / reviewPos.height) * 100;
	}

	return { x: xPercent, y: yPercent };
}
