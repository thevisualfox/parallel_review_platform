<?php

namespace App\Service;

use Gedmo\Sluggable\Util\Urlizer;
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
}
