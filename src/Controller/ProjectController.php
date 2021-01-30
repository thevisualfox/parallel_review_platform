<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class ProjectController extends AbstractController
{
    /**
     * @Route("/projects/add", name="app_project_add")
     * @param EntityManagerInterface $entityManager
     * @return Response
     */
    public function addProject(EntityManagerInterface $entityManager)
    {
        $project = new Project();
        $project
            ->setTitle('Productie Loodsen')
            ->setImage('https://picsum.photos/530/470')
            ->setSlug('productie-loodsen-'.rand(0, 1000))
            ->setDescription("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.");

        $entityManager->persist($project);
        $entityManager->flush();

        return new Response(sprintf(
            'Well hallo! The shiny new project is id: %d, slug: %s',
            $project->getId(),
            $project->getSlug()
        ));
    }

    /**
     * @Route("/projects", name="app_project_overview")
     * @param ProjectRepository $repository
     * @return Response
     */
    public function projects(ProjectRepository $repository)
    {
        $projects = $repository->findAll();

        return $this->render('pages/project/project-overview.html.twig', [
            'projects' => $projects
        ]);
    }

    /**
     * @Route("/projects/{slug}", name="app_project_detail")
     * @param Project $project
     * @return Response
     */
    public function project(Project $project = null)
    {
        return $this->render('pages/project/project-detail.html.twig', [
            'project' => $project,
        ]);
    }
}
