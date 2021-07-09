<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\ProjectImageResponseDto;
use App\Entity\ProjectImage;

class ProjectImageResponseDtoTransformer extends AbstractResponseDtoTransformer
{
    /** @var PhaseResponseDtoTransformer $phaseResponseDtoTransformer */
    private $phaseResponseDtoTransformer;

    public function __construct(PhaseResponseDtoTransformer $phaseResponseDtoTransformer)
    {
        $this->phaseResponseDtoTransformer = $phaseResponseDtoTransformer;
    }

    /**
     * @param ProjectImage $projectImage
     *
     * @return ProjectImageResponseDto
     */
    public function transformFromObject($projectImage, $includeTotalImages = false, $phase = null): ProjectImageResponseDto
    {
        $id = $projectImage->getId();

        $dto = new ProjectImageResponseDto();
        $dto->parentId = $projectImage->getProject()->getId();
        $dto->id = $id;
        $dto->title = $projectImage->getTitle();
        $dto->description = $projectImage->getDescription();
        $dto->phase = $this->phaseResponseDtoTransformer->transformFromObject($projectImage->getPhase($phase));

        if ($includeTotalImages) {
            $imageIds = [];
            foreach ($projectImage->getProject()->getProjectImages() as $image) {
                $imageIds[] = $image->getId();
            };

            $phaseIds = [];
            foreach ($projectImage->getPhases() as $phase) {
                $phaseIds[] = $phase->getId();
            };

            $dto->allImages = $imageIds;
            $dto->allPhases = $phaseIds;
        }

        return $dto;
    }
}
