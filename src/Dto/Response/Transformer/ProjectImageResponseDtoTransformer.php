<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\ProjectImageResponseDto;
use App\Entity\ProjectImage;
use App\Repository\ProjectImageRepository;

class ProjectImageResponseDtoTransformer extends AbstractResponseDtoTransformer
{
    /** @var PhaseResponseDtoTransformer $phaseResponseDtoTransformer */
    private $phaseResponseDtoTransformer;

    /** @var ProjectImageRepository $projectImageRepository */
    private $projectImageRepository;

    public function __construct(PhaseResponseDtoTransformer $phaseResponseDtoTransformer, ProjectImageRepository $projectImageRepository)
    {
        $this->phaseResponseDtoTransformer = $phaseResponseDtoTransformer;
        $this->projectImageRepository = $projectImageRepository;
    }

    /**
     * @param ProjectImage $projectImage
     *
     * @return ProjectImageResponseDto
     */
    public function transformFromObject($projectImage, $includeTotalImages = false): ProjectImageResponseDto
    {
        $id = $projectImage->getId();

        $dto = new ProjectImageResponseDto();
        $dto->parentId = $projectImage->getProject()->getId();
        $dto->id = $id;
        $dto->title = $projectImage->getTitle();
        $dto->description = $projectImage->getDescription();
        $dto->phase = $this->phaseResponseDtoTransformer->transformFromObject($projectImage->getPhase());

        if ($includeTotalImages) {
            $imageIds = [];
            foreach ($this->projectImageRepository->findAll() as &$image) {
                $imageIds[] = $image->getId();
            };

            $dto->allImages = $imageIds;
        }

        return $dto;
    }
}
