export default function calcCommentPos(ref, pos) {
	const markerSpacer = 10;
	const markerSize = 20;
	const offset = markerSize + markerSpacer;

	/* Get position of marker */
	const reviewPos = pos.reviewPos;
	const xPercent = Number(pos.xPercent);
	const yPercent = Number(pos.yPercent);

	/* Get dimensions of current box */
	const { width: boxWidth = 400, height: boxHeight = 228 } = ref?.current?.getBoundingClientRect() || {};

	/* Get dimensions of current screen */
	const screenWidth = window.innerWidth;
	const boxPercentWidth = (boxWidth / screenWidth) * 100;

	const screenHeight = window.innerHeight - reviewPos.top;
	const boxPercentHeight = (boxHeight / screenHeight) * 100;

	/* Set x and y values to percentage equivelent to make the box responsive */
	let left = offset;
	let top = offset;

	/* Compensate for the boxWidth if marker is at end of horizontal screen */
	if (xPercent + boxPercentWidth > 100) {
		left = -boxWidth - markerSpacer;
	}

	/* Compensate for the boxHeight if marker is at end of vertical screen */
	if (yPercent + boxPercentHeight > 100) {
		top = -boxHeight - markerSpacer;
	}

	return { left: `${left}px`, top: `${top}px` };
}
