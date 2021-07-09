<?php

namespace App\Controller\Action\ProjectImage;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\ProjectImageResponseDtoTransformer;
use App\Entity\ProjectImage;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectImageGetAction extends AbstractApiController
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
    public function __invoke(ProjectImage $projectImage, Request $request): Response
    {
        $phase = $request->query->get('phase') ? intval($request->query->get('phase')) : null;

        return $this->respond($this->projectImageResponseDtoTransformer->transformFromObject($projectImage, true, $phase));
    }
}
