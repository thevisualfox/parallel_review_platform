import Resizer from 'react-image-file-resizer';

const defaultOptions = {
	maxWidth: 300,
	maxHeight: 300,
	quality: 100,
	rotation: 0,
	outputType: 'file',
};

async function resizeImageType(image, options) {
	return new Promise((resolve) => {
		Resizer.imageFileResizer(
			image,
			options.maxWidth,
			options.maxHeight,
			image.path.split('.').pop(),
			options.quality,
			options.rotation,
			(uri) => {
				resolve(uri);
			},
			options.outputType
		);
	});
}

async function resizeImage(image) {
	const thumbnail = await resizeImageType(image, { ...defaultOptions, maxWidth: 268, maxHeight: 236 });
	const thumbnailRetina = await resizeImageType(image, { ...defaultOptions, maxWidth: 536, maxHeight: 472 });

	return {
		original: image,
		thumbnail: Object.assign(thumbnail, { preview: URL.createObjectURL(thumbnail) }),
		thumbnailRetina: Object.assign(thumbnailRetina, { preview: URL.createObjectURL(thumbnailRetina) }),
	};
}

export default async function resizeImages(images) {
	return await Promise.all(
		images.map(async (image) => {
			return await resizeImage(image);
		})
	);
}
