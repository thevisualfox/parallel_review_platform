<?php

namespace App\Controller;

use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Repository\ProjectRepository;
use App\Service\UploaderHelper;
use Gedmo\Sluggable\Util\Urlizer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;

class ProjectController extends AbstractController
{
    /**
     * @var string
     */
    private $uploadsPath;

    public function __construct(string $uploadsPath)
    {

        $this->uploadsPath = $uploadsPath;
    }

    /**
     * @Route("/projects/add", name="app_add_project", methods="POST")
     * @param EntityManagerInterface $entityManager
     * @param Request $request
     * @param UploaderHelper $uploaderHelper
     * @return Response
     * @IsGranted("ROLE_ADMIN")
     */
    public function addProject(EntityManagerInterface $entityManager, Request $request, UploaderHelper $uploaderHelper)
    {
        $requestBody = $request->request->all();

        $project = new Project();
        $project
            ->setTitle($requestBody['title'])
            ->setDescription($requestBody['description'])
            ->setSlug(Urlizer::urlize($requestBody['title']));

        $entityManager->persist($project);

        $requestImages = $request->files->get('images');

        if (null !== $requestImages) {
            foreach ($requestImages as &$image) {
                $newFileName = $uploaderHelper->uploadProjectImage($image);

                $projectImage = new ProjectImage();
                $projectImage
                    ->setTitle($newFileName)
                    ->setImage($newFileName)
                    ->setProject($project);

                $entityManager->persist($projectImage);
            }
        }

        $entityManager->flush();

        return $this->json(['success' => true]);
    }

    /**
     * @Route("/projects/delete/{id}", name="app_delete_project", methods="DELETE")
     * @param EntityManagerInterface $entityManager
     * @param Project|null $project
     * @param UploaderHelper $uploaderHelper
     * @return Response
     * @IsGranted("ROLE_ADMIN")
     */
    public function deleteProject(EntityManagerInterface $entityManager, Project $project, UploaderHelper $uploaderHelper)
    {
        $projectImages = $project->getProjectImages();

        foreach ($projectImages as &$image) {
            $uploaderHelper->deleteProjectImage($image);
        }

        $entityManager->remove($project);
        $entityManager->flush();

        return $this->json(['success' => true]);
    }

    /**
     * @Route("/projects/edit/{id}", name="app_edit_project", methods="POST")
     * @param EntityManagerInterface $entityManager
     * @param Project|null $project
     * @param Request $request
     * @param UploaderHelper $uploaderHelper
     * @return Response
     * @IsGranted("ROLE_ADMIN")
     */
    public function editProject(EntityManagerInterface $entityManager, Project $project, Request $request,  UploaderHelper $uploaderHelper)
    {
        $requestBody = $request->request->all();

        $project
            ->setTitle($requestBody['title'])
            ->setDescription($requestBody['description']);

        $requestImages = $request->files->get('images');
        $projectImages = $project->getProjectImages();

        if (null !== $requestImages) {
            foreach ($projectImages as &$image) {
                $uploaderHelper->deleteProjectImage($image);
                $project->removeProjectImage($image);
            }

            foreach ($requestImages as &$image) {
                $newFileName = $uploaderHelper->uploadProjectImage($image);

                $projectImage = new ProjectImage();
                $projectImage
                    ->setTitle($newFileName)
                    ->setImage($newFileName)
                    ->setProject($project);

                $entityManager->persist($projectImage);
            }
        }

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

        return new Response($serializer->serialize($projects, 'json', [
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

//    /**
//     * @Route("/projects/{slug}/review/{image_id}", name="app_show_project_review", requirements={"image_id"=".+"})
//     * @param Project $project
//     * @param $image_id
//     * @return void
//     */
//    public function showProjectImage(Project $project = null, $image_id)
//    {
//        $images = $project->getImages();
//        $selectedImage = array_filter($images, function($image) use ($image_id) {
//            if (isset($image['id']) && $image['id'] == $image_id) {
//                return true;
//            }
//
//            return false;
//        });
//
//        dd($selectedImage);
//
//        // return $this->render('pages/project/project-detail.html.twig', [
//        //     'project' => $project,
//        // ]);
//    }
}
