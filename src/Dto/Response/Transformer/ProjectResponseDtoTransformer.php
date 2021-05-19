<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\ProjectResponseDto;
use App\Entity\Project;

class ProjectResponseDtoTransformer extends AbstractResponseDtoTransformer
{

    /** @var UserResponseDtoTransformer $userResponseDtoTransformer */
    private $userResponseDtoTransformer;

    /** @var ProjectImageResponseDtoTransformer $projectImageResponseDtoTransformer */
    private $projectImageResponseDtoTransformer;

    public function __construct(UserResponseDtoTransformer $userResponseDtoTransformer, ProjectImageResponseDtoTransformer $projectImageResponseDtoTransformer) {
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
        $this->projectImageResponseDtoTransformer = $projectImageResponseDtoTransformer;
    }

    /**
     * @param Project $project
     *
     * @return ProjectResponseDto
     */
    public function transformFromObject($project): ProjectResponseDto
    {
        $dto = new ProjectResponseDto();
        $dto->id = $project->getId();
        $dto->title = $project->getTitle();
        $dto->slug = $project->getSlug();
        $dto->description = $project->getDescription();
        $dto->projectImages = $this->projectImageResponseDtoTransformer->transformFromObjects($project->getProjectImages());
        $dto->users = $this->userResponseDtoTransformer->transformFromObjects($project->getUsers());
        $dto->author = $project->getAuthor();

        return $dto;
    }
}
