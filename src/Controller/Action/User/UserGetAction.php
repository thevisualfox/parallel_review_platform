<?php

namespace App\Controller\Action\User;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\ArrayHelper;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/users/get", name="app_get_users", methods="GET")
 * @param UserRepository $repository
 * @param ArrayHelper $arrayHelper
 * @return Response
 */
final class UserGetAction
{
    public function __invoke(UserRepository $userRepository, ArrayHelper $arrayHelper): Response
    {
        $users = $userRepository->findAll();

        $globalUsersResponse = [];
        foreach ($users as $user) {
            $globalUsersResponse[] = $user->getJsonResponse($arrayHelper);
        }

        return new JsonResponse($globalUsersResponse);
    }
}
