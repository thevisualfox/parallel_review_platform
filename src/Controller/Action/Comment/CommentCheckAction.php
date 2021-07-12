<?php

namespace App\Controller\Action\Comment;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\CommentResponseDtoTransformer;
use App\Entity\Comment;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class CommentCheckAction extends AbstractApiController
{
    /** @var CommentResponseDtoTransformer  $commentResponseDtoTransformer */
    private $commentResponseDtoTransformer;

    public function __construct(CommentResponseDtoTransformer $commentResponseDtoTransformer)
    {
        $this->commentResponseDtoTransformer = $commentResponseDtoTransformer;
    }

    /**
     * @Route("/api/comments/check/{id}", name="app_comment_check", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, Comment $comment): Response
    {
        $comment->setChecked(!$comment->getChecked());

        $entityManager->persist($comment);
        $entityManager->flush();

        return $this->respond([$this->commentResponseDtoTransformer->transformFromObject($comment)]);
    }
}
