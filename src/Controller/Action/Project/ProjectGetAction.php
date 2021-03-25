<?php

namespace App\Controller\Action\Project;

use App\Entity\User;
use App\Repository\ProjectRepository;
use App\Service\ArrayHelper;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

/**
 * @Route("/api/projects/get/{id}", defaults={"id" = null}, requirements={"id" = "\d+"}, name="app_get_projects", methods="GET")
 * @param ProjectRepository $repository
 * @param User $user
 * @param ArrayHelper $arrayHelper
 * @return Response
 */
final class ProjectGetAction
{
    /* @var Security $security */
    private $security;

    /* @var User $user */
    private $user;

    public function __construct(Security $security)
    {
        $this->security = $security;
        $this->user = $this->security->getUser();
    }

    public function __invoke(ProjectRepository $repository, User $user = null, ArrayHelper $arrayHelper): Response
    {
        $currentUser = null !== $this->user ? $this->user : $user;
        $projects = $currentUser->getProject();

        $projectsResponse = [];
        foreach ($projects as $project) {
            $projectsResponse[] = $project->getJsonResponse($arrayHelper);
        }

        return new JsonResponse([
            'projects' => $projectsResponse,
            'user' => $currentUser->getJsonResponse()
        ]);
    }
}
