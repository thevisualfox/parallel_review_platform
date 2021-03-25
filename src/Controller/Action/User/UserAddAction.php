<?php

namespace App\Controller\Action\User;

use App\Entity\Project;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\Mailer;
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
    public function __invoke(EntityManagerInterface $entityManager, UserRepository $userRepository, Project $project, Request $request, Mailer $mailer): Response
    {
        $requestBody = json_decode($request->getContent(), true);
        $email = $requestBody['email'];

        try {
            $user = $userRepository->findOneBy(['email' => $email]);

            if (null === $user) {
                $user = $this->createNewUser($email);
            }

            $user->addProject($project);
            $entityManager->persist($user);
            $entityManager->flush();

            // Send mail
            $mailer->sendUserAddMail($user, $project);

            return new JsonResponse(['user' => $user->getJsonResponse()]);
        } catch (\Throwable $th) {
            throw $th;
        }
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
