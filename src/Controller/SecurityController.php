<?php

namespace App\Controller;

use App\Dto\Response\Transformer\UserResponseDtoTransformer;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractApiController
{
    /** @var UserResponseDtoTransformer  $userResponseDtoTransformer */
    private $userResponseDtoTransformer;

    public function __construct(UserResponseDtoTransformer $userResponseDtoTransformer)
    {
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
    }

    /**
     * @Route("/api/login", name="login", methods="POST")
     */
    public function login(): Response
    {
        $user = $this->getUser();

        return $this->respond($this->userResponseDtoTransformer->transformFromObject($user));
    }

    /**
     * @Route("/api/logout", name="logout", methods="GET")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
