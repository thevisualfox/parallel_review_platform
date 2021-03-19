<?php

namespace App\Controller\Action\User;

use App\Entity\Project;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Colors\RandomColor;

/**
 * @Route("/api/users/delete/{id}", name="app_project_user_delete", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param Project|null $project
 * @param Request $request
 * @param UserRepository $userRepository
 * @return Response
 */
final class UserDeleteAction
{
    public function __invoke(EntityManagerInterface $entityManager, UserRepository $userRepository, Project $project, Request $request): Response
    {
        $requestBody = json_decode($request->getContent(), true);
        $user = $userRepository->findOneBy(array('id' => $requestBody['userId']));

        if (null != $user) {
            $project->removeUser($user);

            $entityManager->persist($project);
            $entityManager->flush();
        };

        return new JsonResponse(['user' => $user->getJsonResponse()]);
    }
}
