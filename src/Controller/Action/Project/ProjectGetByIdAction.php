<?php

namespace App\Controller\Action\Project;

use App\Entity\Project;
use App\Service\ArrayHelper;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/projects/get/{id}", name="app_get_project_by_id", methods="GET")
 * @param ArrayHelper $arrayHelper
 * @return Response
 */
final class ProjectGetByIdAction
{
    public function __invoke(Project $project, ArrayHelper $arrayHelper): Response
    {
        return new JsonResponse($project->getJsonResponse($arrayHelper));
    }
}
