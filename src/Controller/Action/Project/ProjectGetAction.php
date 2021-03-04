<?php

namespace App\Controller\Action\Project;

use App\Repository\ProjectRepository;
use App\Service\ArrayHelper;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectGetAction
{
    /**
     * @Route("/projects/get", name="app_get_projects", methods="GET")
     * @param ProjectRepository $repository
     * @param ArrayHelper $arrayHelper
     * @return Response
     */
    public function __invoke(ProjectRepository $repository, ArrayHelper $arrayHelper): Response
    {
        $projects = $repository->findAll();

        $responseObject = [];
        foreach ($projects as $project) {
            $responseObject[] = $project->getJsonResponse($arrayHelper);
        }

        return new JsonResponse($responseObject);
    }
}