<?php

namespace App\Controller\Action\Phase;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\PhaseResponseDtoTransformer;
use App\Entity\Phase;
use App\Service\ImageHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class PhaseNextAction extends AbstractApiController
{
    /** @var PhaseResponseDtoTransformer  $phaseResponseDtoTransformer */
    private $phaseResponseDtoTransformer;

    public function __construct(PhaseResponseDtoTransformer $phaseResponseDtoTransformer)
    {
        $this->phaseResponseDtoTransformer = $phaseResponseDtoTransformer;
    }

    /**
     * @Route("/api/phase/next/{id}", name="app_phase_next", methods="POST")
     */
    public function __invoke(Phase $currentPhase, Request $request, EntityManagerInterface $entityManager, ImageHelper $imageHelper): Response
    {

        $requestImage = $request->files->get('images')[0];
        $newFileName = $imageHelper->uploadImage($requestImage);

        $nextPhase = new Phase();
        $nextPhase->setPhase($currentPhase->getPhase() + 1);
        $nextPhase->setImage($newFileName);
        $nextPhase->setProjectImage($currentPhase->getProjectImage());

        $entityManager->persist($nextPhase);
        $entityManager->flush();

        return $this->respond($this->phaseResponseDtoTransformer->transformFromObject($nextPhase));
    }
}
