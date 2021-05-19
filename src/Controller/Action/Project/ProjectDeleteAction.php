<?php

namespace App\Controller\Action\Project;

use App\Controller\AbstractApiController;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectDeleteAction extends AbstractApiController
{
    /**
     * @Route("/api/projects/delete", name="app_delete_projects", methods="POST")
     */
    public function __invoke(ProjectRepository $repository, EntityManagerInterface $entityManager, Request $request): Response
    {
        $projectIds = $request->request->get('projects');

        if (!empty($projectIds)) {
            foreach ($projectIds as $projectId) {
                $project = $repository->find($projectId);

                $entityManager->remove($project);
                $entityManager->flush();
            }
        }

        return $this->respond($projectIds);
    }
}
