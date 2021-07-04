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
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendUserAddMail(User $user, Project $project, string $referer)
    {
        $title = null !== $user->getUsername() ? $user->getUsername() : 'there';

        $email = (new TemplatedEmail())
            ->from($this->from)
            ->to(new Address($user->getEmail(), $user->getUsername()))
            ->subject("You've been added to project '{$project->getTitle()}'!")
            ->htmlTemplate('mail/default.twig')
            ->context([
                'title' => 'Hi ' . $title . '!',
                'intro' => "<p>You've been added to project <strong>{$project->getTitle()}</strong>!<br/> I’d like your input on the project.</p>",
                'path' => $referer.'?' . base64_encode($user->getId()),
                'path_title' => 'Show me the project'
            ]);

        $this->mailer->send($email);
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendMentionedByMail(User $user, User $author, string $referer)
    {
        $title = null !== $user->getUsername() ? $user->getUsername() : 'there';

        $email = (new TemplatedEmail())
            ->from($this->from)
            ->to(new Address($user->getEmail(), $user->getUsername()))
            ->subject("You've been mentioned by '{$author->getUsername()}'!")
            ->htmlTemplate('mail/default.twig')
            ->context([
                'title' => 'Hi ' . $title . '!',
                'intro' => "<p>You've been mentioned by <strong>{$author->getUsername()}</strong> on a project image.</p>",
                'path' => $referer.'?' . base64_encode($user->getId()),
                'path_title' => 'Show me the image'
            ]);

        $this->mailer->send($email);
    }
}
