<?php

namespace App\Controller\Action\User;

use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

/**
 * @Route("/api/users/get/{id}", defaults={"id" = null}, requirements={"id" = "\d+"}, name="app_get_current_user", methods="GET")
 * @param User $user
 * @return Response
 */
final class UserGetCurrentAction
{
    /* @var Security $security */
    private $security;

    /* @var User $user */
    private $user;

    public function __construct(Security $security)
    {
        $this->security = $security;
        $this->user = $this->security->getUser();
    }

    public function __invoke(User $user = null): Response
    {
        $currentUser = null !== $this->user ? $this->user : $user;

        return new JsonResponse([
            'user' => $currentUser->getJsonResponse()
        ]);
    }
}
