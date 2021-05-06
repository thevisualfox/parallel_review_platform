<?php

namespace App\Controller\Action\Project;

use App\Entity\User;
use App\Repository\ProjectRepository;
use App\Service\ArrayHelper;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/projects/get/{id}", name="app_get_projects", methods="GET")
 * @param ProjectRepository $repository
 * @param User $user
 * @param ArrayHelper $arrayHelper
 * @return Response
 */
final class ProjectGetAction
{
    public function __invoke(ProjectRepository $repository, User $user = null, ArrayHelper $arrayHelper): Response
    {
        $projects = $user->getProject();

        $projectsResponse = [];
        foreach ($projects as $project) {
            $projectsResponse[] = $project->getJsonResponse($arrayHelper);
        }

        return new JsonResponse([
            'projects' => $projectsResponse
        ]);
    }
}
