<?php

namespace App\Controller\Action\User;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\UserResponseDtoTransformer;
use App\Entity\Project;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class UserGetByProjectAction extends AbstractApiController
{
    /** @var UserResponseDtoTransformer  $userResponseDtoTransformer */
    private $userResponseDtoTransformer;

    public function __construct(UserResponseDtoTransformer $userResponseDtoTransformer)
    {
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
    }

    /**
     * @Route("/api/users/get/project/{id}", name="app_get_project_users", methods="GET")
     */
    public function __invoke(Project $project): Response
    {
        $users = $project->getUsers();

        return $this->respond($this->userResponseDtoTransformer->transformFromObjects($users));
    }
}
