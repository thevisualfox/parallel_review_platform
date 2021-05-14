<?php

namespace App\Controller\Action\Project;

use App\Dto\Response\Transformer\ProjectResponseDtoTransformer;
use App\Entity\Project;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectGetByIdAction
{
    private ProjectResponseDtoTransformer $projectResponseDtoTransformer;

    public function __construct(ProjectResponseDtoTransformer $projectResponseDtoTransformer)
    {
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
    }

    /**
     * @Route("/api/project/get/{id}", name="app_get_project_by_id", methods="GET")
     */
    public function __invoke(Project $project): JsonResponse
    {
        return new JsonResponse($this->projectResponseDtoTransformer->transformFromObject($project));
    }
}
