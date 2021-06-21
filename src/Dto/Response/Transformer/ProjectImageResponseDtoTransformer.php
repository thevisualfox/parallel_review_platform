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
    public function transformFromObject($projectImage, $includePrevNext = false): ProjectImageResponseDto
    {
        $id = $projectImage->getId();

        $dto = new ProjectImageResponseDto();
        $dto->id = $id;
        $dto->title = $projectImage->getTitle();
        $dto->description = $projectImage->getDescription();
        $dto->phases = $this->phaseResponseDtoTransformer->transformFromObjects($projectImage->getPhases());

        if ($includePrevNext) {
            $prev = $this->projectImageRepository->prevRecord($id);
            $next = $this->projectImageRepository->nextRecord($id);

            $dto->prevImage = null !== $prev ? $prev->getId() : null;
            $dto->nextImage = null !== $next ? $next->getId() : null;
        }

        return $dto;
    }
}
