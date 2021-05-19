<?php

namespace App\Controller\Action\Comment;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\CommentResponseDtoTransformer;
use App\Entity\Comment;
use App\Entity\Phase;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

final class CommentAddAction extends AbstractApiController
{
    /** @var CommentResponseDtoTransformer  $commentResponseDtoTransformer */
    private $commentResponseDtoTransformer;

    public function __construct(CommentResponseDtoTransformer $commentResponseDtoTransformer)
    {
        $this->commentResponseDtoTransformer = $commentResponseDtoTransformer;
    }

    /**
     * @Route("/api/comments/add/{id}", name="app_comment_add", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, UserRepository $userRepository, Phase $phase, Request $request): Response
    {
        $requestBody = $request->request->all();

        $author = $userRepository->find($requestBody['userId']);

        $comment = new Comment();
        $comment->setComment($requestBody['comment']);
        $comment->setPhase($phase);
        $comment->setAuthor($author);
        $comment->setPositionX($requestBody['positionX']);
        $comment->setPositionY($requestBody['positionY']);

        $entityManager->persist($comment);
        $entityManager->flush();

        return $this->respond($this->commentResponseDtoTransformer->transformFromObject($comment));
    }
}
