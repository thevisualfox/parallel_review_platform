<?php

namespace App\Service;

use Gedmo\Sluggable\Util\Urlizer;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploaderHelper
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
    public function uploadProjectImage(UploadedFile $uploadedFile): string
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
     * @param object $image
     * @return string
     */
    public function deleteProjectImage(object $image): string
    {
        $imagePath = $this->uploadsPath.'/'.self::PROJECT_IMAGE_PATH;

        $filesystem = new Filesystem();
        $filesystem->remove($imagePath.'/'.$image->getTitle());

        return $imagePath;
    }
}
