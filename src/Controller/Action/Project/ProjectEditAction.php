<?php

namespace App\Controller\Action\Project;

use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Service\ImageHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/projects/edit/{id}", name="app_edit_project", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param Project|null $project
 * @param Request $request
 * @param ImageHelper $imageHelper
 * @return Response
 */
final class ProjectEditAction
{
    public function __invoke(EntityManagerInterface $entityManager, Project $project, Request $request, ImageHelper $imageHelper): Response
    {
        $requestBody = $request->request->all();

        $project
            ->setTitle($requestBody['title'])
            ->setDescription($requestBody['description']);

        $requestImages = $request->files->get('images');
        $projectImages = $project->getProjectImages();

        if (null !== $requestImages) {
            foreach ($projectImages as &$image) {
                $imageHelper->removeImage($image);
                $project->removeProjectImage($image);
            }

            foreach ($requestImages as &$image) {
                $newFileName = $imageHelper->uploadImage($image);

                $projectImage = new ProjectImage();
                $projectImage
                    ->setTitle($newFileName)
                    ->setImage($newFileName)
                    ->setProject($project);

                $entityManager->persist($projectImage);
            }
        }

        $entityManager->persist($project);
        $entityManager->flush();

        return new JsonResponse(['success' => true]);
    }
}