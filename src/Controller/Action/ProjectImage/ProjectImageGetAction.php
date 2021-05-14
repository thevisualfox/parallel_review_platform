<?php

namespace App\Controller\Action\ProjectImage;

use App\Dto\Response\Transformer\ProjectImageResponseDtoTransformer;
use App\Entity\ProjectImage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectImageGetAction
{
    /** @var ProjectImageResponseDtoTransformer  $projectImageResponseDtoTransformer */
    private $projectImageResponseDtoTransformer;

    public function __construct(ProjectImageResponseDtoTransformer $projectImageResponseDtoTransformer)
    {
        $this->projectImageResponseDtoTransformer = $projectImageResponseDtoTransformer;
    }

    /**
     * @Route("/api/images/get/{id}", name="app_get_project_image", methods="GET")
     */
    public function __invoke(ProjectImage $projectImage): JsonResponse
    {
        return new JsonResponse($this->projectImageResponseDtoTransformer->transformFromObject($projectImage));
    }
}
