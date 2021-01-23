<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractController
{
    /**
     * @Route("/projects", name="app_projects")
     */
    public function projects()
    {
        return $this->render('pages/projects-overview.html.twig');
    }

    /**
     * @Route("/projects/project", name="app_project")
     */
    public function project()
    {
        return $this->render('pages/project-detail.html.twig');
    }
}
