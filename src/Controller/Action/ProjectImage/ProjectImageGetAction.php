<?php

namespace App\Controller\Action\ProjectImage;

use App\Entity\ProjectImage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/images/get/{id}", name="app_get_project_image", methods="GET")
 * @param ProjectImage $projectImage
 * @return Response
 */
final class ProjectImageGetAction
{
    public function __invoke(ProjectImage $projectImage): Response
    {
        return new JsonResponse($projectImage->getJsonResponse());
    }
}
