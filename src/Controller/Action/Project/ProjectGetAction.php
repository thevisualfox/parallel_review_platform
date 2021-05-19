<?php

namespace App\Controller\Action\Project;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\ProjectResponseDtoTransformer;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectGetAction extends AbstractApiController
{
    /** @var ProjectResponseDtoTransformer  $projectResponseDtoTransformer */
    private $projectResponseDtoTransformer;

    public function __construct(ProjectResponseDtoTransformer $projectResponseDtoTransformer)
    {
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
    }

    /**
     * @Route("/api/projects/get/{id}", name="app_get_projects", methods="GET")
     */
    public function __invoke(User $user = null): Response
    {
        $projects = $user->getProject();

        return $this->respond($this->projectResponseDtoTransformer->transformFromObjects($projects));
    }
}
