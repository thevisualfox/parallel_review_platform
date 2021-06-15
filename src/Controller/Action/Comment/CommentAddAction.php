<?php

namespace App\Controller\Action\Comment;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\CommentResponseDtoTransformer;
use App\Entity\Comment;
use App\Entity\Phase;
use App\Message\MentionedByEmail;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

final class CommentAddAction extends AbstractApiController
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
     * @Route("/api/comments/add/{id}", name="app_comment_add", methods="POST")
     */
    public function __invoke(EntityManagerInterface $entityManager, Phase $phase, Request $request): Response
    {
        $requestBody = $request->request->all();

        $comment = new Comment();
        $comment->setComment($requestBody['comment']);
        $comment->setPhase($phase);
        $comment->setAuthor($this->user);
        $comment->setPositionX($requestBody['positionX']);
        $comment->setPositionY($requestBody['positionY']);

        $entityManager->persist($comment);
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
