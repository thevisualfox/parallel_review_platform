<?php

namespace App\Service;

use Gedmo\Sluggable\Util\Urlizer;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ImageHelper
{
    const PROJECT_IMAGE_PATH = '/projects';

    /**
     * @var string
     */
    private $uploadsPath;

    public function __construct(string $uploadsPath)
    {

        $this->uploadsPath = $uploadsPath;
    }

    /**
     * @param UploadedFile[] $uploadedFiles
     * @return string
     */
    public function uploadImage(array $uploadedFiles): string
    {
        $id = uniqid();
        foreach ($uploadedFiles as $key => $uploadedFile) {
            $uploadDestination = $this->uploadsPath . '/' . self::PROJECT_IMAGE_PATH . '/' . $key;

            $newFileName =
                Urlizer::urlize(pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME))
                . '-' . $id
                . '.' . $uploadedFile->guessExtension();

            $uploadedFile->move($uploadDestination, $newFileName);
        };

        return $newFileName;
    }

    /**
     * @param string $imagePath
     */
    public function removeImage(string $imagePath): void
    {
        $keys = ['original', 'thumbnail', 'thumbnailRetina'];

        foreach ($keys as $key) {
            $uploadPath = $this->uploadsPath . self::PROJECT_IMAGE_PATH . '/' . $key . '/' . $imagePath;

            $filesystem = new Filesystem();
            $filesystem->remove($uploadPath);
        }
    }
}
