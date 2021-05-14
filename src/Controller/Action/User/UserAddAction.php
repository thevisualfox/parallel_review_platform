<?php

namespace App\Controller\Action\User;

use App\Dto\Response\Transformer\UserResponseDtoTransformer;
use App\Entity\Project;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Message\ProjectUserAddEmail;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Messenger\MessageBusInterface;
use Colors\RandomColor;

final class UserAddAction
{
    /** @var UserResponseDtoTransformer  $userResponseDtoTransformer */
    private $userResponseDtoTransformer;

    public function __construct(UserResponseDtoTransformer $userResponseDtoTransformer)
    {
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
    }

    /**
     * @Route("/api/users/add/{id}", name="app_project_user_add", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, UserRepository $userRepository, Project $project, Request $request, MessageBusInterface $messageBus): JsonResponse
    {
        $requestBody = json_decode($request->getContent(), true);
        $email = $requestBody['email'];

        $user = $userRepository->findOneBy(['email' => $email]);

        if (null === $user) {
            $user = $this->createNewUser($email);
        }

        $user->addProject($project);
        $entityManager->persist($user);
        $entityManager->flush();

        $messageBus->dispatch(
            new ProjectUserAddEmail($user->getId(), $project->getId())
        );

        return new JsonResponse($this->userResponseDtoTransformer->transformFromObject($user));
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
