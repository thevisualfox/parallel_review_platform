<?php

namespace App\Controller\Action\ProjectImage;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\ProjectResponseDtoTransformer;
use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Repository\ProjectImageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectImageDeleteAction extends AbstractApiController
{
    /** @var ProjectResponseDtoTransformer  $projectResponseDtoTransformer */
    private $projectResponseDtoTransformer;

    public function __construct(ProjectResponseDtoTransformer $projectResponseDtoTransformer)
    {
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
    }

    /**
     * @Route("/api/images/delete/{id}", name="app_project_image_delete", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, ProjectImageRepository $projectImageRepository, Project $project, Request $request): Response
    {
        $projectImageIds = $request->request->get('projectImages');

        if (!empty($projectImageIds)) {
            foreach ($projectImageIds as $projectImageId) {
                $projectImage = $projectImageRepository->find($projectImageId);

                $this->deleteProjectImage($projectImage, $project, $entityManager);
            }
        }

        return $this->respond($this->projectResponseDtoTransformer->transformFromObject($project));
    }

    public function deleteProjectImage(ProjectImage $projectImage, Project $project, EntityManagerInterface $entityManager)
    {
        $project->removeProjectImage($projectImage);

        $entityManager->persist($project);
        $entityManager->flush();
    }
}
