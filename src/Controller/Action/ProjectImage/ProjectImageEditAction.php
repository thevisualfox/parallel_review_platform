<?php

namespace App\Controller\Action\ProjectImage;

use App\Dto\Response\Transformer\ProjectImageResponseDtoTransformer;
use App\Entity\ProjectImage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
final class ProjectImageEditAction
{
    private ProjectImageResponseDtoTransformer $projectImageResponseDtoTransformer;

    public function __construct(ProjectImageResponseDtoTransformer $projectImageResponseDtoTransformer)
    {
        $this->projectImageResponseDtoTransformer = $projectImageResponseDtoTransformer;
    }

    /**
     * @Route("/api/images/edit/{id}", name="app_edit_project_image", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, ProjectImage $projectImage, Request $request): JsonResponse
    {
        $requestBody = $request->request->all();

        if (isset($requestBody['title'])) {
            $projectImage->setTitle($requestBody['title']);
        }

        if (isset($requestBody['description'])) {
            $projectImage->setDescription($requestBody['description']);
        }

        $entityManager->persist($projectImage);
        $entityManager->flush();

        return new JsonResponse($this->projectImageResponseDtoTransformer->transformFromObject($projectImage));
    }
}
