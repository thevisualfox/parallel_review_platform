<?php

namespace App\Controller\Action\Project;

use App\Entity\Project;
use App\Service\ImageHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/projects/delete/{id}", name="app_delete_project", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param Project|null $project
 * @param ImageHelper $imageHelper
 * @return Response
 */
final class ProjectDeleteAction
{
    public function __invoke(EntityManagerInterface $entityManager, Project $project, ImageHelper $imageHelper): Response
    {
        $projectImages = $project->getProjectImages();

        foreach ($projectImages as $image) {
            $imageHelper->removeImage($image);
        }

        $entityManager->remove($project);
        $entityManager->flush();

        return new JsonResponse(['success' => true]);
    }
}