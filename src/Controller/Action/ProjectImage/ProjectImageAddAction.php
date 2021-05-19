<?php

namespace App\Controller\Action\ProjectImage;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\ProjectResponseDtoTransformer;
use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Entity\Phase;
use App\Service\ImageHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectImageAddAction extends AbstractApiController
{
    /** @var ProjectResponseDtoTransformer  $projectResponseDtoTransformer */
    private $projectResponseDtoTransformer;

    public function __construct(ProjectResponseDtoTransformer $projectResponseDtoTransformer)
    {
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
    }

    /**
     * @Route("/api/images/add/{id}", name="app_project_image_add", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, Project $project, Request $request, ImageHelper $imageHelper): Response
    {
        $requestImages = $request->files->get('images');

        foreach ($requestImages as $image) {
            $newFileName = $imageHelper->uploadImage($image);

            $projectImage = $this->createProjectImage($newFileName, $project, $entityManager);
            $this->createPhase($newFileName, $projectImage, $entityManager);
        }

        $entityManager->persist($project);
        $entityManager->flush();

        return $this->respond($this->projectResponseDtoTransformer->transformFromObject($project));
    }

    public function createProjectImage(string $newFileName, Project $project, EntityManagerInterface $entityManager): ProjectImage
    {
        $projectImage = new ProjectImage();
        $projectImage->setTitle($newFileName);
        $projectImage->setProject($project);

        $entityManager->persist($projectImage);

        return $projectImage;
    }

    public function createPhase(string $newFileName, ProjectImage $projectImage, EntityManagerInterface $entityManager): void
    {
        $phase = new Phase();
        $phase->setPhase(1);
        $phase->setImage($newFileName);
        $phase->setProjectImage($projectImage);

        $entityManager->persist($phase);
    }
}
