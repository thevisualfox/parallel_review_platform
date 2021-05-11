export default function calcBoxPosition(x, y, offset, cursorOffset = 10) {
	const boxWidth = 400;
	const boxHeight = 228;

	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight - offset;

	if (screenWidth - x < boxWidth && screenHeight - y < boxHeight) {
		return { x: x - boxWidth - cursorOffset, y: y - boxHeight - cursorOffset };
	}

	if (screenWidth - x < boxWidth) {
		return { x: x - boxWidth - cursorOffset, y: y + cursorOffset };
	}

	if (screenHeight - y < boxHeight) {
		return { x: x + cursorOffset, y: y - boxHeight - cursorOffset };
	}

	return { x: x + cursorOffset, y: y + cursorOffset };
}
