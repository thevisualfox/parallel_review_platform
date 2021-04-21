<?php

namespace App\Service;


use App\Entity\Project;
use App\Entity\User;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class Mailer
{
    /**
     * @var MailerInterface
     */
    private $mailer;

    /**
     * @var string
     */
    private $from;

    /**
     * Mailer constructor.
     * @param MailerInterface $mailer
     */
    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
        $this->from = new Address('dashboard@parallel.nl', 'Parallel Dashboard');
    }

    /**
     * @param User $user
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendRegistrationMail(User $user)
    {
        $email = (new TemplatedEmail())
            ->from($this->from)
            ->to(new Address($user->getEmail(), $user->getUsername()))
            ->subject('Registration complete')
            ->htmlTemplate('mail/registration.twig');

        $this->mailer->send($email);
    }

    /**
     * @param User $user
     * @param Project $project
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendUserAddMail(User $user, Project $project)
    {
        $email = (new TemplatedEmail())
            ->from($this->from)
            ->to(new Address($user->getEmail(), $user->getUsername()))
            ->subject("You've been added to project '{$project->getTitle()}'!")
            ->htmlTemplate('mail/project-add-user.twig')
            ->context([
                'userId' => base64_encode($user->getId()),
            ]);

        $this->mailer->send($email);
    }

}
