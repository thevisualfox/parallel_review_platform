<?php

namespace App\Controller;

use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Repository\ProjectRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\String\Slugger\AsciiSlugger;

class ProjectController extends AbstractController
{
    public function __construct()
    {
        $this->slugger = new AsciiSlugger();
    }

    /**
     * @Route("/projects/add", name="app_add_project", methods="POST")
     * @param EntityManagerInterface $entityManager
     * @param Request $request
     * @return Response
     * @IsGranted("ROLE_ADMIN")
     */
    public function addProject(EntityManagerInterface $entityManager, Request $request)
    {
        $request = $request->request->all();
        $requestImages = $request->files->get('images');

        $title = $request['title'];
        $description = $request['description'];
        $slug = $this->slugger->slug(strtolower($title));

        $project = new Project();
        $project
            ->setTitle($title)
            ->setSlug($slug)
            ->setDescription($description);

        $projectImage = new ProjectImage();
        $projectImage
            ->setTitle('titel')
            ->setImage('https://i.picsum.photos/id/953/530/470.jpg?hmac=4ZtOg6J5OD2r6BQbLup6NxStrxnVzpQ4y0x8vQFvO4M')
            ->setProject($project);

        $entityManager->persist($project);
        $entityManager->persist($projectImage);
        $entityManager->flush();

        return $this->json(['success' => true]);
    }

    /**
     * @Route("/projects/delete/{id}", name="app_delete_project", methods="DELETE")
     * @param EntityManagerInterface $entityManager
     * @param Project|null $project
     * @return Response
     * @IsGranted("ROLE_ADMIN")
     */
    public function deleteProject(EntityManagerInterface $entityManager, Project $project = null)
    {
        $entityManager->remove($project);
        $entityManager->flush();

        return $this->json(['success' => true]);
    }

    /**
     * @Route("/projects/edit/{id}", name="app_edit_project", methods="POST")
     * @param EntityManagerInterface $entityManager
     * @param Project|null $project
     * @param Request $request
     * @return Response
     * @IsGranted("ROLE_ADMIN")
     */
    public function editProject(EntityManagerInterface $entityManager, Project $project = null, Request $request)
    {
        $params = $request->request->all();

        if (array_key_exists('title', $params)) {
            $project->setTitle($params['title']);
            $project->setSlug($this->slugger->slug(strtolower($params['title'])));
        };

        if (array_key_exists('description', $params)) {
            $project->setDescription($params['description']);
        };

        $entityManager->persist($project);
        $entityManager->flush();

        return $this->json(['success' => true]);
    }

    /**
     * @Route("/projects/get", name="app_get_projects", methods="GET")
     * @param ProjectRepository $repository
     * @param SerializerInterface $serializer
     * @return Response
     */
    public function getProjects(ProjectRepository $repository, SerializerInterface $serializer)
    {
        $projects = $repository->findAll();

        return new Response($serializer->serialize(array('projects' => $projects), 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]));
    }

    /**
     * @Route("/projects", name="app_show_projects")
     * @return Response
     */
    public function showProjects()
    {
        if (!$this->getUser()) {
            $this->addFlash('warning', "Please log in first!");
            return $this->redirectToRoute('app_login');
        }

        return $this->render('pages/project/project-overview.html.twig');
    }

    /**
     * @Route("/projects/{slug}", name="app_show_project")
     * @param Project $project
     * @return Response
     */
    public function showProject(Project $project = null)
    {
        if (!$this->getUser()) {
            $this->addFlash('warning', "Please log in first!");
            return $this->redirectToRoute('app_login');
        }

        return $this->render('pages/project/project-detail.html.twig', [
            'project' => $project,
        ]);
    }

    /**
     * @Route("/projects/{slug}/review/{image_id}", name="app_show_project_review", requirements={"image_id"=".+"})
     * @param Project $project
     * @param $image_id
     * @return void
     */
    public function showProjectImage(Project $project = null, $image_id)
    {
        $images = $project->getImages();
        $selectedImage = array_filter($images, function($image) use ($image_id) {
            if (isset($image['id']) && $image['id'] == $image_id) {
                return true;
            }

            return false;
        });

        dd($selectedImage);

        // return $this->render('pages/project/project-detail.html.twig', [
        //     'project' => $project,
        // ]);
    }
}
