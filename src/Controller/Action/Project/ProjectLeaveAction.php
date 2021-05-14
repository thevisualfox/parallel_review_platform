<?php

namespace App\Controller\Action\Project;

use App\Entity\Project;
use App\Entity\User;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectLeaveAction
{
    /**
     * @Route("/api/projects/leave/{id}", name="app_leave_projects", methods="POST")
     */
    public function __invoke(ProjectRepository $repository, EntityManagerInterface $entityManager, Request $request, User $user): JsonResponse
    {
        $projectIds = $request->request->get('projects');

        if (!empty($projectIds)) {
            foreach ($projectIds as $projectId) {
                $project = $repository->find($projectId);

                $this->leaveProject($project, $user, $entityManager);
            }
        }

        return new JsonResponse($projectIds);
    }

    public function leaveProject(Project $project, User $user, EntityManagerInterface $entityManager)
    {
        $project->removeUser($user);

        $entityManager->persist($project);
        $entityManager->flush();
    }
}
