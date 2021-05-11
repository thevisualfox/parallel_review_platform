<?php

namespace App\Controller\Action\ProjectImage;

use App\Entity\ProjectImage;
use App\Service\ArrayHelper;
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
    public function __invoke(ProjectImage $projectImage, ArrayHelper $arrayHelper): Response
    {
        return new JsonResponse($projectImage->getJsonResponse($arrayHelper));
    }
}
