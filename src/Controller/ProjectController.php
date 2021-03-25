<?php

namespace App\Controller;

use App\Entity\Project;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractController
{
    /**
     * @Route("/projects", name="app_show_projects")
     * @return Response
     */
    public function showProjects(): Response
    {
        return $this->render('pages/project/project-overview.html.twig');
    }

    /**
     * @Route("/projects/{slug}", name="app_show_project")
     * @param Project $project
     * @return Response
     */
    public function showProject(Project $project = null): Response
    {
        return $this->render('pages/project/project-detail.html.twig', [
            'project' => $project,
        ]);
    }
}
