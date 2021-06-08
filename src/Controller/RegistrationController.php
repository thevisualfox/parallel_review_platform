<?php

namespace App\Controller;

use App\Entity\User;
use App\Security\AppAuthenticator;
use App\Message\RegisterEmail;
use App\Service\ColorHelper;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class RegistrationController extends AbstractApiController
{
    /**
     * @Route("/api/signup", name="app_signup")
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function register(MessageBusInterface $messageBus, Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, AppAuthenticator $authenticator, ColorHelper $colorHelper): Response
    {
        $form = $request->request->all();
        $user = new User();

        if (isset($form['username']) && isset($form['email']) && isset($form['plainPassword'])) {
            // Set username
            $user->setUsername($form['username']);

            // Set email
            $user->setEmail($form['email']);

            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form['plainPassword']
                )
            );

            // Set organisation
            $user->setOrganisation($form['organisation']);

            // Set random color per user
            $user->setcolor($colorHelper->generateRandomColor());

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // Send mail
            $messageBus->dispatch(new RegisterEmail($user->getId()));

            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );
        }
    }
}
