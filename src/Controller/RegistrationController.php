<?php

namespace App\Controller;

use App\Dto\Response\Transformer\UserResponseDtoTransformer;
use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\AppAuthenticator;
use App\Message\RegisterEmail;
use Colors\RandomColor;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    public function register(MessageBusInterface $messageBus, Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, AppAuthenticator $authenticator): Response
    {
        $requestBody = $request->request->all();
        $form = $requestBody['registration_form'];
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

            // Set random color per user
            $user->setColor(RandomColor::one());

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
