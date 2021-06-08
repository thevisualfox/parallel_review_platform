<?php

namespace App\MessageHandler;

use App\Message\MentionedByEmail;
use App\Message\ProjectUserAddEmail;
use App\Repository\UserRepository;
use App\Repository\ProjectRepository;
use App\Service\Mailer;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class MentionedByEmailHandler implements MessageHandlerInterface
{
    /* @var UserRepository $userRepository */
    private $userRepository;

    /* @var Mailer $mailer */
    private $mailer;

    public function __construct(UserRepository $userRepository, Mailer $mailer)
    {
        $this->userRepository = $userRepository;
        $this->mailer = $mailer;
    }

    public function __invoke(MentionedByEmail $mentionedByEmail)
    {
        $user = $this->userRepository->find($mentionedByEmail->getUserId());
        $author = $this->userRepository->find($mentionedByEmail->getAuthorId());
        $referer = $mentionedByEmail->getReferer();

        $this->mailer->sendMentionedByMail($user, $author, $referer);
    }
}
