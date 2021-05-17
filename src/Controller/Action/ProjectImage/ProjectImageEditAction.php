<?php

namespace App\Controller\Action\ProjectImage;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\ProjectImageResponseDtoTransformer;
use App\Entity\ProjectImage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectImageEditAction extends AbstractApiController
{
    /** @var ProjectImageResponseDtoTransformer  $projectImageResponseDtoTransformer */
    private $projectImageResponseDtoTransformer;

    public function __construct(ProjectImageResponseDtoTransformer $projectImageResponseDtoTransformer)
    {
        $this->projectImageResponseDtoTransformer = $projectImageResponseDtoTransformer;
    }

    /**
     * @Route("/api/images/edit/{id}", name="app_edit_project_image", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, ProjectImage $projectImage, Request $request): Response
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

        return $this->respond($this->projectImageResponseDtoTransformer->transformFromObject($projectImage));
    }
}
