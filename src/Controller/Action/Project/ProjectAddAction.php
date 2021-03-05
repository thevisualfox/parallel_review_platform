<?php

namespace App\Controller\Action\Project;

use App\Entity\Project;
use App\Entity\ProjectImage;
use App\Repository\UserRepository;
use App\Service\ImageHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/projects/add", name="app_add_project", methods="POST")
 * @param EntityManagerInterface $entityManager
 * @param Request $request
 * @param ImageHelper $imageHelper
 * @param UserRepository $userRepository
 * @return Response
 */
final class ProjectAddAction
{
    public function __invoke(EntityManagerInterface $entityManager, Request $request, ImageHelper $imageHelper, UserRepository $userRepository): Response
    {

        $requestBody = $request->request->all();

        $projectLeader = $userRepository->findByRole('ROLE_ADMIN')[0];

        $project = new Project();

        $project->setTitle($requestBody['title']);
        $project->setDescription($requestBody['description']);
        $project->addUser($projectLeader);


        $entityManager->persist($project);

        $requestImages = $request->files->get('images');
        if (null !== $requestImages) {
            foreach ($requestImages as $image) {
                $newFileName = $imageHelper->uploadImage($image);

                $projectImage = new ProjectImage();
                $projectImage
                    ->setTitle($newFileName)
                    ->setImage($newFileName)
                    ->setProject($project);

                $entityManager->persist($projectImage);
            }
        }

        $entityManager->flush();

        return new JsonResponse(['success' => true]);
    }
}