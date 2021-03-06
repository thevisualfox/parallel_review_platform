<?php

namespace App\Controller\Action\Project;

use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Repository\UserRepository;
use App\Service\ImageHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/projects/add", name="app_add_project", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param ImageHelper $imageHelper
 * @param UserRepository $userRepository
 * @return Response
 */
final class ProjectAddAction
{
    public function __invoke(EntityManagerInterface $entityManager, ImageHelper $imageHelper, UserRepository $userRepository): Response
    {

        $projectLeader = $userRepository->findByRole('ROLE_ADMIN')[0];

        $project = new Project();
        $project->addUser($projectLeader);

        $entityManager->persist($project);
        $entityManager->flush();

        return new JsonResponse(['id' => $project->getId()]);
    }
}
