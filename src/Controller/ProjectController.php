<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\String\Slugger\AsciiSlugger;

class ProjectController extends AbstractController
{
    /**
     * @Route("/projects/add", name="app_add_project", methods="POST")
     * @param EntityManagerInterface $entityManager
     * @param Request $request
     * @return Response
     * @IsGranted("ROLE_ADMIN")
     */
    public function addProject(EntityManagerInterface $entityManager, Request $request)
    {
        $slugger = new AsciiSlugger();

        $title = $request->request->get('title');
        $description = $request->request->get('description');
        $slug = $slugger->slug(strtolower($title));

        $project = new Project();
        $project
            ->setTitle($title)
            ->setImage('https://picsum.photos/530/470')
            ->setSlug($slug)
            ->setDescription($description);

        $entityManager->persist($project);
        $entityManager->flush();

        return $this->json(['success' => true]);
    }

    /**
     * @Route("/projects", name="app_show_projects")
     * @return Response
     */
    public function projects()
    {
        if (!$this->getUser()) {
            $this->addFlash('not_logged_in', "Please log in first");
            return $this->redirectToRoute('app_login');
        }

        return $this->render('pages/project/project-overview.html.twig');
    }

    /**
     * @Route("/projects/get", name="app_get_projects", methods="GET")
     * @param ProjectRepository $repository
     * @return Response
     */
    public function getProject(ProjectRepository $repository)
    {
        $projects = $repository->findAll();

        return $this->json([
            'projects' => $projects,
            'projectsSlug' => $this->generateUrl('app_show_projects'),
        ]);
    }

    /**
     * @Route("/projects/{slug}", name="app_show_project")
     * @param Project $project
     * @return Response
     */
    public function project(Project $project = null)
    {
        if (!$this->getUser()) {
            $this->addFlash('not_logged_in', "Please log in first");
            return $this->redirectToRoute('app_login');
        }

        return $this->render('pages/project/project-detail.html.twig', [
            'project' => $project,
        ]);
    }
}
