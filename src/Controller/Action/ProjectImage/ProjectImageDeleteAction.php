<?php

namespace App\Controller\Action\ProjectImage;

use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Repository\ProjectImageRepository;
use App\Service\ArrayHelper;
use App\Service\ImageHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/images/delete/{id}", name="app_project_image_delete", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param Project|null $project
 * @param Request $request
 * @param ImageHelper $imageHelper
 * @return Response
 */
final class ProjectImageDeleteAction
{
    public function __invoke(EntityManagerInterface $entityManager, ProjectImageRepository $projectImageRepository, Project $project, Request $request, ImageHelper $imageHelper, ArrayHelper $arrayHelper): Response
    {
        $projectImages = $request->request->get('projectImages');

        if (!empty($projectImages)) {
            foreach ($projectImages as $projectImageId) {
                $projectImage = $projectImageRepository->findOneBy(['id' => $projectImageId]);

                $this->deleteProjectImage($projectImage, $project, $entityManager, $imageHelper);
            }
        }


        $images = $arrayHelper->mapToArray($project->getProjectImages());

        return new JsonResponse(['images' => $images]);
    }

    public function deleteProjectImage(ProjectImage $projectImage, Project $project, EntityManagerInterface $entityManager, ImageHelper $imageHelper)
    {
        $imageHelper->removeImage($projectImage);
        $project->removeProjectImage($projectImage);

        $entityManager->persist($project);
        $entityManager->flush();
    }
}
