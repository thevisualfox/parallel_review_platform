<?php

namespace App\MessageHandler;

use App\Message\RegisterEmail;
use App\Repository\UserRepository;
use App\Service\Mailer;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class RegisterEmailHandler implements MessageHandlerInterface
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

    public function __invoke(RegisterEmail $registerEmail)
    {
        $user = $this->userRepository->find($registerEmail->getUserId());

        $this->mailer->sendRegistrationMail($user);
    }
}
