<?php

namespace App\Controller\Action\Project;

use App\Entity\User;
use App\Entity\Project;
use App\Service\ArrayHelper;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/projects/add", name="app_add_project", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param UserRepository $userRepository
 * @param ArrayHelper $arrayHelper
 * @return Response
 */
final class ProjectAddAction
{
    /* @var Security $security */
    private $security;

    /* @var User $user */
    private $user;

    /* @var ArrayHelper $arrayHelper */
    private $arrayHelper;

    public function __construct(Security $security, ArrayHelper $arrayHelper)
    {
        $this->security = $security;
        $this->user = $this->security->getUser();

        $this->arrayHelper = $arrayHelper;
    }

    /**
     * @return Response
     */
    public function __invoke(EntityManagerInterface $entityManager, UserRepository $userRepository): Response
    {
        $project = new Project();
        $project->addUser($this->user);
        $project->setAuthor($this->user->getEmail());

        $entityManager->persist($project);
        $entityManager->flush();

        $globalUsers = $this->getGlobalUsers($userRepository);

        return new JsonResponse([
            'project' => $project->getJsonResponse($this->arrayHelper),
            'globalUsers' => $globalUsers,
        ]);
    }

    /**
     * @return User[]
     */
    public function getGlobalUsers(UserRepository $userRepository): array
    {
        $users = $userRepository->findAll();

        $globalUsersResponse = [];
        foreach ($users as $user) {
            $globalUsersResponse[] = $user->getJsonResponse($this->arrayHelper);
        }

        return $globalUsersResponse;
    }
}
