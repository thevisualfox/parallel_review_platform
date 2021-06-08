<?php

namespace App\Controller\Action\User;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\UserResponseDtoTransformer;
use App\Entity\Project;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Message\ProjectUserAddEmail;
use App\Service\ColorHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\HttpFoundation\Response;

final class UserAddAction extends AbstractApiController
{
    /** @var UserResponseDtoTransformer $userResponseDtoTransformer */
    private $userResponseDtoTransformer;

    /** @var ColorHelper $colorHelper */
    private $colorHelper;

    public function __construct(UserResponseDtoTransformer $userResponseDtoTransformer, ColorHelper $colorHelper)
    {
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
        $this->colorHelper = $colorHelper;
    }

    /**
     * @Route("/api/users/add/{id}", name="app_project_user_add", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, UserRepository $userRepository, Project $project, Request $request, MessageBusInterface $messageBus): Response
    {
        $requestBody = json_decode($request->getContent(), true);
        $email = $requestBody['email'];
        $referer = $requestBody['referer'];

        $user = $userRepository->findOneBy(['email' => $email]);

        if (null === $user) {
            $user = $this->createNewUser($email);
        }

        $user->addProject($project);
        $entityManager->persist($user);
        $entityManager->flush();

        $messageBus->dispatch(
            new ProjectUserAddEmail($user->getId(), $project->getId(), $referer)
        );

        return $this->respond($this->userResponseDtoTransformer->transformFromObject($user));
    }

    private function createNewUser(string $email): User
    {
        $user = new User();

        $user->setEmail($email);
        $user->setcolor($this->colorHelper->generateRandomColor());
        $user->setRoles(['ROLE_USER_BASIC']);

        return $user;
    }
}
