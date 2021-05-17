<?php

namespace App\Controller\Action\Project;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\ProjectResponseDtoTransformer;
use App\Entity\Project;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectGetByIdAction extends AbstractApiController
{
    /** @var ProjectResponseDtoTransformer  $projectResponseDtoTransformer */
    private $projectResponseDtoTransformer;

    public function __construct(ProjectResponseDtoTransformer $projectResponseDtoTransformer)
    {
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
    }

    /**
     * @Route("/api/project/get/{id}", name="app_get_project_by_id", methods="GET")
     */
    public function __invoke(Project $project): Response
    {
        return $this->respond($this->projectResponseDtoTransformer->transformFromObject($project));
    }
}
