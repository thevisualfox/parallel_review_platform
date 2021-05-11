<?php

namespace App\Controller\Action\Project;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use App\Service\ImageHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/projects/delete", name="app_delete_projects", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param ProjectRepository $repository
 * @param ImageHelper $imageHelper
 * @param Request $request
 * @return Response
 */
final class ProjectDeleteAction
{
    public function __invoke(ProjectRepository $repository, EntityManagerInterface $entityManager, ImageHelper $imageHelper, Request $request): Response
    {
        $projects = $request->request->get('projects');

        if (!empty($projects)) {
            foreach ($projects as $projectId) {
                $project = $repository->findOneBy(['id' => $projectId]);

                $this->deleteProject($project, $entityManager, $imageHelper);
            }
        }

        return new JsonResponse($projects);
    }

    public function deleteProject(Project $project, EntityManagerInterface $entityManager, ImageHelper $imageHelper)
    {
        $projectImages = $project->getProjectImages();

        foreach ($projectImages as $projectImage) {
            $this->deleteImages($projectImage->getPhases(), $imageHelper);
        }

        $entityManager->remove($project);
        $entityManager->flush();
    }

    public function deleteImages(object $phases, ImageHelper $imageHelper)
    {
        foreach ($phases as $phase) {
            $imageHelper->removeImage($phase->getImage());
        };
    }
}
