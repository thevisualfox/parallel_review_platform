import axios from 'axios';

/* Next phase | expects phase id and image (blob) */
export const nextPhase = async ({ phaseId, images }) => {
	const params = new FormData();

	images.forEach((image, imageIndex) => {
		params.append(`images[${imageIndex}][original]`, image.original);
		params.append(`images[${imageIndex}][thumbnail]`, image.thumbnail);
		params.append(`images[${imageIndex}][thumbnailRetina]`, image.thumbnailRetina);
	});

	const result = await axios.post(`/api/phase/next/${phaseId}`, params);
	return result?.data;
};
