<?php

namespace App\Controller\Action\ProjectImage;

use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Entity\Phase;
use App\Service\ArrayHelper;
use App\Service\ImageHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/images/add/{id}", name="app_project_image_add", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param Project|null $project
 * @param Request $request
 * @param ImageHelper $imageHelper
 * @param ArrayHelper $arrayHelper
 * @return Response
 */
final class ProjectImageAddAction
{
    public function __invoke(EntityManagerInterface $entityManager, Project $project, Request $request, ImageHelper $imageHelper, ArrayHelper $arrayHelper): Response
    {
        $requestImages = $request->files->get('images');

        foreach ($requestImages as $image) {
            $newFileName = $imageHelper->uploadImage($image);

            $projectImage = $this->createProjectImage($newFileName, $project, $entityManager);
            $phase = $this->createPhase($newFileName, $projectImage, $entityManager);
        }

        $entityManager->persist($project);
        $entityManager->flush();

        $images = $arrayHelper->mapToArray($project->getProjectImages());

        return new JsonResponse(['images' => $images]);
    }

    public function createProjectImage(string $newFileName, Project $project, EntityManagerInterface $entityManager): ProjectImage
    {
        $projectImage = new ProjectImage();
        $projectImage->setTitle($newFileName);
        $projectImage->setProject($project);

        $entityManager->persist($projectImage);

        return $projectImage;
    }

    public function createPhase(string $newFileName, ProjectImage $projectImage, EntityManagerInterface $entityManager): Phase
    {
        $phase = new Phase();
        $phase->setPhase(1);
        $phase->setImage($newFileName);
        $phase->setProjectImage($projectImage);

        $entityManager->persist($phase);

        return $phase;
    }
}
