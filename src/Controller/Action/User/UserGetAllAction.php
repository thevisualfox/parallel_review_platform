<?php

namespace App\Controller\Action\User;

use App\Dto\Response\Transformer\UserResponseDtoTransformer;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class UserGetAllAction
{
    private $userResponseDtoTransformer;

    public function __construct(UserResponseDtoTransformer $userResponseDtoTransformer)
    {
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
    }

    /**
     * @Route("/api/users/get/all", name="app_get_all_users", methods="GET")
     */
    public function __invoke(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();

        return new JsonResponse($this->userResponseDtoTransformer->transformFromObjects($users));
    }
}
