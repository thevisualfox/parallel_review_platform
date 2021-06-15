<?php

namespace App\Controller\Action\Comment;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\CommentResponseDtoTransformer;
use App\Entity\Comment;
use Symfony\Component\Security\Core\Security;
use App\Message\MentionedByEmail;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;

final class CommentReplyAction extends AbstractApiController
{
    /** @var Security $security */
    private $security;

    /** @var CommentResponseDtoTransformer  $commentResponseDtoTransformer */
    private $commentResponseDtoTransformer;

    /** @var MessageBusInterface  $messageBus */
    private $messageBus;

    public function __construct(
        CommentResponseDtoTransformer $commentResponseDtoTransformer,
        MessageBusInterface $messageBus,
        Security $security
    ) {
        $this->commentResponseDtoTransformer = $commentResponseDtoTransformer;
        $this->messageBus = $messageBus;

        $this->security = $security;
        $this->user = $this->security->getUser();
    }

    /**
     * @Route("/api/comments/reply/{id}", name="app_comment_reply", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, Comment $comment, Request $request): Response
    {
        $requestBody = $request->request->all();

        $reply = new Comment();
        $reply->setComment($requestBody['reply']);
        $reply->setAuthor($this->user);
        $reply->setAuthor($this->user);
        $reply->setParent($comment);

        /* Copy from parent */
        $reply->setPositionX($comment->getPositionX());
        $reply->setPositionY($comment->getPositionY());
        $reply->setPhase($comment->getPhase());

        $entityManager->persist($reply);
        $entityManager->flush();

        if (!empty($requestBody['mentioned'])) {
            $this->sendMentionedByMails($requestBody['mentioned'], $this->user->getId(), $requestBody['referer']);
        }

        return $this->respond($this->commentResponseDtoTransformer->transformFromObject($comment));
    }

    private function sendMentionedByMails(array $mentioned, int $author, string $referer): void
    {
        foreach ($mentioned as $mentionId) {
            $this->messageBus->dispatch(
                new MentionedByEmail($mentionId, $author, $referer)
            );
        }
    }
}
