<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractController
{
    /**
     * @Route("/projects", name="app_project_overview")
     */
    public function projects()
    {
        return $this->render('pages/project/project-overview.html.twig');
    }

    /**
     * @Route("/projects/{slug}", name="app_project_detail")
     */
    public function project(string $slug)
    {
        return $this->render('pages/project/project-detail.html.twig', [
            'project' => ucwords(str_replace('-', ' ', $slug)),
        ]);
    }
}
