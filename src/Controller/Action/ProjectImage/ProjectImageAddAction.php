<?php

namespace App\Controller\Action\ProjectImage;

use App\Entity\Project;
use App\Entity\ProjectImage;
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

            $projectImage = new ProjectImage();
            $projectImage->setTitle($newFileName);
            $projectImage->setImage($newFileName);
            $projectImage->setProject($project);

            $entityManager->persist($projectImage);
        }

        $entityManager->persist($project);
        $entityManager->flush();

        $images = $arrayHelper->mapToArray($project->getProjectImages());

        return new JsonResponse(['images' => $images]);
    }
}
