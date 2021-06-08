<?php

namespace App\MessageHandler;

use App\Message\ProjectUserAddEmail;
use App\Repository\UserRepository;
use App\Repository\ProjectRepository;
use App\Service\Mailer;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class ProjectUserAddEmailHandler implements MessageHandlerInterface
{
    /* @var UserRepository $userRepository */
    private $userRepository;

    /* @var ProjectRepository $projectRepository */
    private $projectRepository;

    /* @var Mailer $mailer */
    private $mailer;

    public function __construct(UserRepository $userRepository, ProjectRepository $projectRepository, Mailer $mailer)
    {
        $this->userRepository = $userRepository;
        $this->projectRepository = $projectRepository;

        $this->mailer = $mailer;
    }

    public function __invoke(ProjectUserAddEmail $projectUserAddEmail)
    {
        $user = $this->userRepository->find($projectUserAddEmail->getUserId());
        $project = $this->projectRepository->find($projectUserAddEmail->getProjectId());
        $referer = $projectUserAddEmail->getReferer();

        $this->mailer->sendUserAddMail($user, $project, $referer);
    }
}
