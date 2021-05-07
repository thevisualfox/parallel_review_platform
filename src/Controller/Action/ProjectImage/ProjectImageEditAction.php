<?php

namespace App\Controller\Action\ProjectImage;

use App\Entity\ProjectImage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/images/edit/{id}", name="app_edit_project_image", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param ProjectImage $projectImage
 * @param Request $request
 * @return Response
 */
final class ProjectImageEditAction
{
    public function __invoke(EntityManagerInterface $entityManager, ProjectImage $projectImage, Request $request): Response
    {
        $requestBody = $request->request->all();

        if (isset($requestBody['title'])) {
            $projectImage->setTitle($requestBody['title']);
        }

        $entityManager->persist($projectImage);
        $entityManager->flush();

        return new JsonResponse(['id' => $projectImage->getId()]);
    }
}
