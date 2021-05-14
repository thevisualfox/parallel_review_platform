<?php

namespace App\Controller\Action\Project;

use App\Dto\Response\Transformer\ProjectResponseDtoTransformer;
use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectGetAction
{
    private ProjectResponseDtoTransformer $projectResponseDtoTransformer;

    public function __construct(ProjectResponseDtoTransformer $projectResponseDtoTransformer)
    {
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
    }

    /**
     * @Route("/api/projects/get/{id}", name="app_get_projects", methods="GET")
     */
    public function __invoke(User $user = null): JsonResponse
    {
        $projects = $user->getProject();

        return new JsonResponse($this->projectResponseDtoTransformer->transformFromObjects($projects));
    }
}
