<?php

namespace App\Controller\Action\Project;

use App\Controller\AbstractApiController;
use App\Entity\Project;
use App\Entity\User;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectLeaveAction extends AbstractApiController
{
    /**
     * @Route("/api/projects/leave/{id}", name="app_leave_projects", methods="POST")
     */
    public function __invoke(ProjectRepository $repository, EntityManagerInterface $entityManager, Request $request, User $user): Response
    {
        $projectIds = $request->request->get('projects');

        if (!empty($projectIds)) {
            foreach ($projectIds as $projectId) {
                $project = $repository->find($projectId);

                $this->leaveProject($project, $user, $entityManager);
            }
        }

        return $this->respond($projectIds);
    }

    public function leaveProject(Project $project, User $user, EntityManagerInterface $entityManager)
    {
        $project->removeUser($user);

        $entityManager->persist($project);
        $entityManager->flush();
    }
}
