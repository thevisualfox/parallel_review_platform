<?php

namespace App\Controller\Action\Project;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\ProjectResponseDtoTransformer;
use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectEditAction extends AbstractApiController
{
    /** @var ProjectResponseDtoTransformer  $projectResponseDtoTransformer */
    private $projectResponseDtoTransformer;

    public function __construct(ProjectResponseDtoTransformer $projectResponseDtoTransformer)
    {
        $this->projectResponseDtoTransformer = $projectResponseDtoTransformer;
    }

    /**
     * @Route("/api/projects/edit/{id}", name="app_edit_project", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, Project $project, Request $request): Response
    {
        $requestBody = $request->request->all();

        if (isset($requestBody['title'])) {
            $project->setTitle($requestBody['title']);
        }

        if (isset($requestBody['description'])) {
            $project->setDescription($requestBody['description']);
        }

        $entityManager->persist($project);
        $entityManager->flush();

        return $this->respond($this->projectResponseDtoTransformer->transformFromObject($project));
    }
}
