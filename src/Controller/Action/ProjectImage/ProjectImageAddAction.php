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

    /** @var EntityManagerInterface  $entityManager */
    private $entityManager;

    public function __construct(ProjectResponseDtoTransformer $projectResponseDtoTransformer, EntityManagerInterface  $entityManager)
    {
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/api/images/add/{id}", name="app_project_image_add", methods="POST")
     */
    public function __invoke(Project $project, Request $request, ImageHelper $imageHelper): Response
    {
        $requestImages = $request->files->get('images');

        foreach ($requestImages as $image) {
            $newFileName = $imageHelper->uploadImage($image);
            $projectImage = $this->createProjectImage($newFileName);

            $project->addProjectImage($projectImage);
        }

        $this->entityManager->persist($project);
        $this->entityManager->flush();

        return $this->respond($this->projectResponseDtoTransformer->transformFromObject($project));
    }

    public function createProjectImage(string $newFileName): ProjectImage
    {
        $projectImage = new ProjectImage();
        $projectImage->setTitle($newFileName);
        $projectImage->addPhase($this->createPhase($newFileName));

        $this->entityManager->persist($projectImage);

        return $projectImage;
    }

    public function createPhase(string $newFileName): Phase
    {
        $phase = new Phase();
        $phase->setPhase(1);
        $phase->setImage($newFileName);

        $this->entityManager->persist($phase);

        return $phase;
    }
}
