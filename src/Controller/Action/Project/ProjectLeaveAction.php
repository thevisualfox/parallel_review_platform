<?php

namespace App\Controller\Action\Project;

use App\Entity\Project;
use App\Entity\User;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/projects/leave/{id}", name="app_leave_projects", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param ProjectRepository $repository
 * @param Request $request
 * @param User $user
 * @return Response
 */
final class ProjectLeaveAction
{
    public function __invoke(ProjectRepository $repository, EntityManagerInterface $entityManager, Request $request, User $user): Response
    {
        $projects = $request->request->get('projects');

        if (!empty($projects)) {
            foreach ($projects as $projectId) {
                $project = $repository->findOneBy(['id' => $projectId]);

                $this->leaveProject($project, $user, $entityManager);
            }
        }

        return new JsonResponse($projects);
    }

    public function leaveProject(Project $project, User $user, EntityManagerInterface $entityManager)
    {
        $project->removeUser($user);

        $entityManager->persist($project);
        $entityManager->flush();
    }
}
