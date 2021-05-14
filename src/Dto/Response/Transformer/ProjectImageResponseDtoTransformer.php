<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\ProjectImageResponseDto;
use App\Entity\ProjectImage;

class ProjectImageResponseDtoTransformer extends AbstractResponseDtoTransformer
{
     /** @var PhaseResponseDtoTransformer $phaseResponseDtoTransformer */
     private $phaseResponseDtoTransformer;

     public function __construct(PhaseResponseDtoTransformer $phaseResponseDtoTransformer) {
         $this->phaseResponseDtoTransformer = $phaseResponseDtoTransformer;
     }

    /**
     * @param ProjectImage $projectImage
     *
     * @return ProjectImageResponseDto
     */
    public function transformFromObject($projectImage): ProjectImageResponseDto
    {
        $dto = new ProjectImageResponseDto();
        $dto->id = $projectImage->getId();
        $dto->title = $projectImage->getTitle();
        $dto->description = $projectImage->getDescription();
        $dto->phases = $this->phaseResponseDtoTransformer->transformFromObjects($projectImage->getPhases());

        return $dto;
    }
}
