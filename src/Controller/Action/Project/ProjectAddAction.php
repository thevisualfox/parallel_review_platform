<?php

namespace App\Controller\Action\Project;

use App\Dto\Response\Transformer\ProjectResponseDtoTransformer;
use App\Entity\User;
use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectAddAction
{
    /** @var Security $security */
    private $security;

    /** @var User $user */
    private $user;

    /** @var ProjectResponseDtoTransformer $projectResponseDtoTransformer */
    private $projectResponseDtoTransformer;

    public function __construct(Security $security, ProjectResponseDtoTransformer $projectResponseDtoTransformer)
    {
        $this->security = $security;
        $this->user = $this->security->getUser();
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
    }

    /**
     * @Route("/api/projects/add", name="app_add_project", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager): JsonResponse
    {
        $project = new Project();
        $project->addUser($this->user);
        $project->setAuthor($this->user->getEmail());

        $entityManager->persist($project);
        $entityManager->flush();

        return new JsonResponse($this->projectResponseDtoTransformer->transformFromObject($project));
    }
}
