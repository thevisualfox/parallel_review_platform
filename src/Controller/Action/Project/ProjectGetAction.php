<?php

namespace App\Controller\Action\Project;

use App\Repository\ProjectRepository;
use App\Service\ArrayHelper;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

/**
 * @Route("/api/projects/get", name="app_get_projects", methods="GET")
 * @param ProjectRepository $repository
 * @param ArrayHelper $arrayHelper
 * @return Response
 */
final class ProjectGetAction
{
    private $security;
    private $user;

    public function __construct(Security $security)
    {
        $this->security = $security;
        $this->user = $this->security->getUser();
    }

    public function __invoke(ProjectRepository $repository, ArrayHelper $arrayHelper): Response
    {
        $projects = $this->user->getProject();

        $projectsResponse= [];
        foreach ($projects as $project) {
            $projectsResponse[] = $project->getJsonResponse($arrayHelper);
        }

        return new JsonResponse([
            'projects' => $projectsResponse,
            'user' => $this->user->getJsonResponse()
        ]);
    }
}