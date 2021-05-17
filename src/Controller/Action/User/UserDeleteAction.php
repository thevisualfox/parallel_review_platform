<?php

namespace App\Controller\Action\User;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\UserResponseDtoTransformer;
use App\Entity\Project;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class UserDeleteAction extends AbstractApiController
{
    /** @var UserResponseDtoTransformer  $userResponseDtoTransformer */
    private $userResponseDtoTransformer;

    public function __construct(UserResponseDtoTransformer $userResponseDtoTransformer)
    {
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
    }

    /**
     * @Route("/api/users/delete/{id}", name="app_project_user_delete", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, UserRepository $userRepository, Project $project, Request $request): Response
    {
        $requestBody = json_decode($request->getContent(), true);
        $user = $userRepository->find($requestBody['userId']);

        if (null != $user) {
            $project->removeUser($user);

            $entityManager->persist($project);
            $entityManager->flush();
        };

        return $this->respond($this->userResponseDtoTransformer->transformFromObject($user));
    }
}
