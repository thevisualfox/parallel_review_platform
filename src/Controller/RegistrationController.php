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
     * @Route("/api/signup/{id}", defaults={"id" = null}, requirements={"id" = "\d+"}, name="app_signup", methods="POST")
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function register(User $user = null, MessageBusInterface $messageBus, Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, AppAuthenticator $authenticator, ColorHelper $colorHelper): Response
    {
        $form = $request->request->all();
        $currentUser = isset($user) ? $user : new User();

        if (isset($form['username']) && isset($form['email']) && isset($form['plainPassword'])) {
            // Set username
            $currentUser->setUsername($form['username']);

            // encode the plain password
            $currentUser->setPassword(
                $passwordEncoder->encodePassword(
                    $currentUser,
                    $form['plainPassword']
                )
            );

            // Set organisation
            $currentUser->setOrganisation($form['organisation']);

            // Set email if new user
            if (!isset($user)) {
                $currentUser->setEmail($form['email']);
                $currentUser->setcolor($colorHelper->generateRandomColor());
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($currentUser);
            $entityManager->flush();

            // Send mail
            $messageBus->dispatch(
                new RegisterEmail($currentUser->getId())
            );

            return $guardHandler->authenticateUserAndHandleSuccess(
                $currentUser,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );
        }
    }
}
