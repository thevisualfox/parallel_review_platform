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
     * @param UploadedFile $uploadedFile
     * @return string
     */
    public function uploadImage(UploadedFile $uploadedFile): string
    {
        $uploadDestination = $this->uploadsPath.'/'.self::PROJECT_IMAGE_PATH;

        $newFileName =
            Urlizer::urlize(pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME))
            .'-'.uniqid()
            .'.'.$uploadedFile->guessExtension();

        $uploadedFile->move($uploadDestination, $newFileName);

        return $newFileName;
    }

    /**
     * @param string $imagePath
     */
    public function removeImage(string $imagePath): void
    {
        $filesystem = new Filesystem();
        $filesystem->remove($imagePath);
    }
}
