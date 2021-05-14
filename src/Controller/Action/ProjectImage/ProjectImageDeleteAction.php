<?php

namespace App\Controller\Action\ProjectImage;

use App\Dto\Response\Transformer\ProjectResponseDtoTransformer;
use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Repository\ProjectImageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectImageDeleteAction
{
    private ProjectResponseDtoTransformer $projectResponseDtoTransformer;

    public function __construct(ProjectResponseDtoTransformer $projectResponseDtoTransformer)
    {
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
    }

    /**
     * @Route("/api/images/delete/{id}", name="app_project_image_delete", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, ProjectImageRepository $projectImageRepository, Project $project, Request $request): JsonResponse
    {
        $projectImageIds = $request->request->get('projectImages');

        if (!empty($projectImageIds)) {
            foreach ($projectImageIds as $projectImageId) {
                $projectImage = $projectImageRepository->find($projectImageId);

                $this->deleteProjectImage($projectImage, $project, $entityManager);
            }
        }

        return new JsonResponse($this->projectResponseDtoTransformer->transformFromObject($project));
    }

    public function deleteProjectImage(ProjectImage $projectImage, Project $project, EntityManagerInterface $entityManager)
    {
        $project->removeProjectImage($projectImage);

        $entityManager->persist($project);
        $entityManager->flush();
    }
}
