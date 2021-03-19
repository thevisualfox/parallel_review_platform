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
 * @Route("/api/users/add/{id}", name="app_project_user_add", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param Project|null $project
 * @param Request $request
 * @param UserRepository $userRepository
 * @return Response
 */
final class UserAddAction
{
    public function __invoke(EntityManagerInterface $entityManager, UserRepository $userRepository, Project $project, Request $request): Response
    {
        $requestBody = json_decode($request->getContent(), true);
        $email = $requestBody['email'];

        $user = $this->getExistingUser($userRepository, $email);

        if (null === $user) {
            $user = $this->createNewUser($email);
        }

        $user->addProject($project);
        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse(['user' => $user->getJsonResponse()]);
    }

    private function getExistingUser(UserRepository $userRepository, string $email): User
    {
        return $userRepository->findOneBy(['email' => $email]);
    }

    private function createNewUser(string $email): User
    {
        $user = new User();

        $user->setEmail($email);
        $user->setcolor(RandomColor::one(array('luminosity' => 'dark')));
        $user->setRoles(['ROLE_USER_BASIC']);

        return $user;
    }
}
